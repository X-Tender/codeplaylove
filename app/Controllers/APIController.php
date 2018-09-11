<?php

namespace App\Controllers;

use Noodlehaus\Config;
use App\Utils\GetTwitterFeed;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Directus\SDK\ClientRemote;

class APIController
{
  protected $config;

  public function __construct(Config $config)
  {
    $this->config = $config;
  }

  private function rudr_instagram_api_curl_connect($api_url)
  {
    $connection_c = curl_init();
    curl_setopt($connection_c, CURLOPT_URL, $api_url);
    curl_setopt($connection_c, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($connection_c, CURLOPT_TIMEOUT, 20);
    $json_return = curl_exec($connection_c);
    curl_close($connection_c);
    return json_decode($json_return);
  }

  public function getInstagramToken(Request $request, Response $response)
  {
    $route = $request->getAttribute("route");
    $code = $route->getArgument("code");

    $instaConfig = $this->config->get("instagram");

    $uri = "https://api.instagram.com/oauth/access_token";
    $data = [
      "client_id" => $instaConfig["client_id"],
      "client_secret" => $instaConfig["client_secret"],
      "grant_type" => "authorization_code",
      "redirect_uri" => $instaConfig["redirect_uri"],
      "code" => $code
    ];

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $uri);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HEADER, 0);
    curl_setopt($ch, CURLOPT_NOBODY, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);

    $result = json_decode(curl_exec($ch));
    var_dump($result);
    die();
  }

  public function getInstagramPosts()
  {
    $cacheFile = $this->getCachedFile("instagram.json", 60 * 60);

    if (!is_null($cacheFile)) {
      return json_decode($cacheFile, true);
    }

    $instaConfig = $this->config->get("instagram");

    $access_token = $instaConfig["access_token"];
    $res = $this->rudr_instagram_api_curl_connect("https://api.instagram.com/v1/users/self/media/recent?access_token={$access_token}");

    $posts = [];

    foreach ($res->data as $key => $post) {
      $data = [
        "image" => $post->images->low_resolution,
        "text" => $post->caption->text,
        "created_at" => (int)$post->caption->created_time,
        "likes" => $post->likes->count,
        "comments" => $post->comments->count,
        "type" => $post->type,
        "url" => $post->link,
        "source" => "instagram",
      ];

      if ($post->type === "carousel") {
        $carousel_media = [];
        foreach ($post->carousel_media as $key => $media) {
          $carousel_media[] = $media->images->standard_resolution;
        }
        $data["carousel_media"] = $carousel_media;
      }

      if ($post->type === "video") {
        $data["video"] = $post->videos->standard_resolution;
      }

      $posts[] = $data;
    }

    $this->cacheFile($posts, "instagram.json");

    return $posts;
  }

  public function getTweets()
  {
    $cacheFile = $this->getCachedFile("twitter.json", 60 * 30);

    if (!is_null($cacheFile)) {
      return json_decode($cacheFile, true);
    }

    $instaConfig = $this->config->get("twitter");

    $retrieveUrl = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=xtender&tweet_mode=extended&exclude_replies=true&count=100";

    $consumer_key = $instaConfig["consumer_key"];
    $consumer_key_secret = $instaConfig["consumer_key_secret"];

    $objTwitter = new GetTwitterFeed($retrieveUrl, $consumer_key, $consumer_key_secret);
    $raw_feed = json_decode($objTwitter->getJsonFeed(), true);

    $tweets = [];

    foreach ($raw_feed as $key => $tweet) {
      $newTweet = [];

      $userId = $tweet["user"]["id_str"];
      $in_reply_to_user_id_str = $tweet["in_reply_to_user_id_str"];
      if ($in_reply_to_user_id_str != null && $in_reply_to_user_id_str != $userId) continue;

      if (isset($tweet["entities"]) && isset($tweet["entities"]["hashtags"])) {
        $isInstagramTweet = false;
        foreach ($tweet["entities"]["hashtags"] as $key => $hashTag) {
          if ($hashTag["text"] === "tweet") {
            $isInstagramTweet = true;
            break;
          }
        }
        if ($isInstagramTweet) continue;
      }

      $newTweet["text"] = $tweet["full_text"];
      $newTweet["url"] = "https://twitter.com/statuses/" . $tweet["id_str"];
      $newTweet["created_at"] = strtotime($tweet["created_at"]);
      $newTweet["source"] = "twitter";

      if (isset($tweet["extended_entities"])) {
        if (isset($tweet["extended_entities"]["media"])) {
          $media = $tweet["extended_entities"]["media"];
          if (sizeOf($media > 0)) {
            if (isset($media[0]["media_url_https"])) {
              $newTweet["image"] = $media[0]["media_url_https"];
            }
          }
        }
      }

      $tweets[] = $newTweet;
    }

    $this->cacheFile($tweets, "twitter.json");
    return $tweets;
  }

  private function getCachedFile($filename, $cacheDuration)
  {
    $cachepath = $this->config->get("app.socialTemp");
    if (!is_dir($cachepath)) return null;

    $fullFilePath = "{$cachepath}{$filename}";
    if (!file_exists($fullFilePath)) return null;

    $currentTime = time();
    $fileCreationDate = filemtime($fullFilePath);
    if ($currentTime - $fileCreationDate > $cacheDuration) return null;

    $handle = fopen($fullFilePath, "r");
    $contents = fread($handle, filesize($fullFilePath));
    fclose($handle);

    return $contents;
  }

  private function cacheFile($data, $filename)
  {
    $cachepath = $this->config->get("app.socialTemp");
    if (!is_dir($cachepath)) mkdir($cachepath);

    $fullFilePath = "{$cachepath}{$filename}";

    $fp = fopen($fullFilePath, "w");
    fwrite($fp, json_encode($data));
    fclose($fp);
  }

  public function getData(Request $request, Response $response)
  {
    $tweets = $this->getTweets();
    $instagramPosts = $this->getInstagramPosts();

    $data = array_merge($instagramPosts, $tweets);

    usort($data, function ($a, $b) {
      return $b["created_at"] <=> $a["created_at"];
    });

    $responseData = [
      "error" => 0,
      "message" => "SUCCESS",
      "data" => $data,
    ];

    return $response->withJson($responseData);
  }

  public function getIntroduction(Request $request, Response $response, ClientRemote $directus)
  {
    $item = $directus->getItems('introduction')->toArray();
    $re = '/(^\/\/[\w\.\-_]+\/)(.+)/m';
    preg_match_all($re, $item["data"][0]["image"]["data"]["url"], $matches, PREG_SET_ORDER, 0);
    $image = array_pop($matches[0]);

    $data = [
      "head" => $item["data"][0]["head"],
      "subhead" => $item["data"][0]["subhead"],
      "punchline" => $item["data"][0]["punchline"],
      "copy" => $item["data"][0]["copy"],
      "image" => $image,
    ];

    $responseData = [
      "error" => 0,
      "message" => "SUCCESS",
      "data" => $data,
    ];

    return $response->withJson($responseData);
  }

  public function getCards(Request $request, Response $response, ClientRemote $directus)
  {
    $items = $directus->getItems('cards')->toArray();

    $responseData = [
      "error" => 0,
      "message" => "SUCCESS",
      "data" => $items["data"],
    ];

    return $response->withJson($responseData);
  }
}
