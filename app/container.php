<?php

use function DI\get;

use Slim\Views\Twig;
use Slim\Views\TwigExtension;

use Interop\Container\ContainerInterface;
use Noodlehaus\Config;
use Slim\HttpCache\CacheProvider;

use App\Errors\NotFoundHandler;

use Directus\SDK\ClientFactory;
use Directus\SDK\ClientRemote;

return [
  "router" => get(Slim\Router::class),

  "notFoundHandler" => function (ContainerInterface $c) {
    return new App\Errors\NotFoundHandler($c->get("router"));
  },

  Twig::class => function (ContainerInterface $c) {
    $twig = new Twig(__DIR__ . "/../resources/views", [
      "cache" => false
    ]);

    $twig->addExtension(new TwigExtension(
      $c->get("router"),
      $c->get("request")->getUri()
    ));

    return $twig;
  },

  Config::class => function (ContainerInterface $c) {
    $mode = $c->get("appMode");
    return new Config([__DIR__ . "/config/{$mode}.php"]);
  },

  "settings.displayErrorDetails" => function (ContainerInterface $c) {
    $appConf = $c->get(Config::class)->get("app");
    return $appConf["phpDebugMode"];
  },

  ClientRemote::class => function (ContainerInterface $c) {
    $directusConf = $c->get(Config::class)->get("directus");

    return ClientFactory::create($directusConf["userToken"], [
      'base_url' => $directusConf["baseUrl"],
    ]);
  },

];
