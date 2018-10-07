<?php

/* DEV ROUTES */
$app->get("/dev/twitter", ["App\Controllers\APIController", "getTweets"])
  ->setName("getTweets");

$app->get("/dev/instagram", ["App\Controllers\APIController", "getInstagramPosts"])
  ->setName("getInstagramPosts");

$app->get("/dev/instagram/{code}", ["App\Controllers\APIController", "getInstagramToken"])
  ->setName("getInstagramToken");

/* API ROUTES */
$app->group("/api", function () {
  $this->get("/getData", ["App\Controllers\APIController", "getData"])
    ->setName("getData");
  $this->get("/getIntroduction", ["App\Controllers\APIController", "getIntroduction"])
    ->setName("getIntroduction");
  $this->get("/getCards", ["App\Controllers\APIController", "getCards"])
    ->setName("getCards");
  $this->get("/getAbout", ["App\Controllers\APIController", "getAbout"])
    ->setName("getAbout");
  $this->get("/getToolset", ["App\Controllers\APIController", "getToolset"])
    ->setName("getToolset");
  $this->get("/getGames", ["App\Controllers\APIController", "getGames"])
    ->setName("getGames");
});

/* INDEX ROUTE */
$app->get("/[{rest:.*}]", ["App\Controllers\IndexController", "index"])
  ->setName("index");
