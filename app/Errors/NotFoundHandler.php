<?php

namespace App\Errors;

use Slim\Handlers\NotFound;
use Slim\Router;

use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Message\ResponseInterface;

class NotFoundHandler extends NotFound
{
  protected $view;
  protected $router;

  public function __construct(Router $router)
  {
    $this->router = $router;
  }

  public function __invoke(ServerRequestInterface $request, ResponseInterface $response)
  {
    parent::__invoke($request, $response);

    return $response
      ->withStatus(404)
      ->withRedirect($this->router->pathFor("index"));
  }
}
