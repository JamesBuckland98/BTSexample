<?php
    include '../services/HomeService.php';
    include '../classes/Controller.php';

    class HomeController extends Controller {

        public function handleHttpMethod($method, $data){
            switch($method) {
                case 'GET':
                    // calls service to apply business logic and return answer
                    echo HomeService::getHome();
                break;
                case 'POST':
                    echo HomeService::postHome($data);
                break;
                case 'PUT':
                    echo 'put';
                break;
                case 'DELETE':
                    echo 'delete';
                break;
                default: 
                // handle error
                    echo 'unexpected error';
                break;
            }
        }
    }

?>