<?php
error_reporting(E_ALL);
ini_set("display_errors",1);
/**
 * Created by PhpStorm.
 * User: richardschalin
 * Date: 28.04.17
 * Time: 19:17
 */

/**
 * @return array das Array das nacher in json umgewandelt wird
 */


function execute() {
//hole die Taskliste


//Alle Tasks die den Status deleted haben nicht ausgeben.
    $taskliste = json_decode(file_get_contents('../_geheim/taskliste.json'), true);
    /**
     * Alle tasks die den Status false haben nicht ausgeben
     */
$response = [];




//iteriere durch alle Tasks
foreach ($taskliste as $task){
    //füge task die nicht den status deleted haben zu $response hinzu .
    if($task["status"] == true){ //ist status true
        $response[] =$task; // in response ausgeben
    }


}


//





//gib die Liste aus
return $response;//zeige response an


}
