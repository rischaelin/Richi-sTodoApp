<?php
/**
 * Created by PhpStorm.
 * User: richardschalin
 * Date: 29.04.17
 * Time: 11:35
 */

$verb = $_SERVER["REQUEST_METHOD"];

switch ($verb){
    case 'GET':
        include ('alle_tasks.php');
        break;
    case 'POST':
        include('add_tasks.php');
        break;
    case 'PATCH':
        //hier sind die werte vom patch drinnen
        include('add_tasks.php');
        $_PATCH = fopen("php://input","r");
        break;
}
//gib den korrekten header aus
header('conten-type: application/json; charset=UTF-8');

echo json_encode(execute());