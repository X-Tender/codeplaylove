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
  $this->get("/getData", ["App\Controllers\APIController", "getData"])->setName("getData");
});

/* INDEX ROUTE */
$app->get("/[{rest:.*}]", ["App\Controllers\IndexController", "index"])->setName("index");
