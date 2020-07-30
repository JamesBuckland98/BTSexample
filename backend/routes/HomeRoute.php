<?php
    include '../controllers/HomeController.php';
    // Gets server request method
    $method = $_SERVER['REQUEST_METHOD'];
    // Gets http body
    $data = file_get_contents('php://input');
    // Calls controller to handle server request method 
    HomeController::handleHttpMethod($method, $data);
?>