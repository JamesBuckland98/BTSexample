<?php

class HomeService {

    function getHome(){
        return('welcome');
    }

    function postHome($data){
        $obj= json_decode($data);
        $name = $obj->name;
        $reversedName = strrev($name);
        return($reversedName);
    }
}
?>