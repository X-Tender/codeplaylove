<?php

namespace App\Controllers;

use Slim\Views\Twig;
use Slim\Router;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;

class IndexController
{
    protected $view;
    protected $router;

    public function __construct(Twig $view, Router $router)
    {
        $this->view = $view;
        $this->router = $router;
    }

    public function index(Request $request, Response $response)
    {
        return $this->view->render($response, "index.twig");
    }
}
