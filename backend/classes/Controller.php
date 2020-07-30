<?php
    class Controller {

        private $HTTP_METHOD;

        public function __constructor() {
            $this->HTTP_METHOD = '';
        }

        public function getHttpMethod() {
            return $this->HTTP_METHOD;
        }

        public function setHttpMethod($HTTP_METHOD) {
            $this->HTTP_METHOD = $HTTP_METHOD;
        }
    }
?>