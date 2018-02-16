<?php

use App\App;
use App\Middleware\CsrfViewMiddleware;
use App\Middleware\AuthViewMiddleware;

use Slim\Views\Twig;
use Slim\HttpCache\Cache;

use Slim\Middleware\JwtAuthentication\RequestPathRule;
use Slim\Middleware\JwtAuthentication\RequestMethodRule;

use Noodlehaus\Config;

session_start();

date_default_timezone_set("Europe/Berlin");
setlocale(LC_ALL, "de_DE.UTF-8");

require __DIR__ . "/../vendor_modules/autoload.php";

$app = new App;

$container = $app->getContainer();
$twig = $container->get(Twig::class);

$config = $container->get(Config::class);
$appConf = $config->get("app");

// Set PHP error levels
if ($appConf["phpDebugMode"]) {
  error_reporting(-1);
  ini_set("display_errors", 1);
  ini_set("display_startup_errors", 1);
} else {
  error_reporting(0);
  ini_set("display_errors", 0);
  ini_set("display_startup_errors", 0);
}

// Require routes
require __DIR__ . "/../app/routes.php";

// Add Middlewares
$app->add(new Cache("public", 86400));

$app->run();
