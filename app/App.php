<?php

namespace App;

use DI\ContainerBuilder;
use DI\Bridge\Slim\App as DiBridge;

class App extends DIBridge
{
  protected function configureContainer(ContainerBuilder $builder)
  {
    $builder->addDefinitions(["appMode" => file_get_contents(__DIR__ . "/config/mode.php")]);
    $builder->addDefinitions(__DIR__ . "/container.php");
  }
}
