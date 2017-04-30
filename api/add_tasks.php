<?php
/**
 * Created by PhpStorm.
 * User: richardschalin
 * Date: 28.04.17
 * Time: 20:57
 *
 * Hier wird ein neuer Task hinzu gefügt
 * benötigte Parameter
 * caption string Text des Tasks
 *
 */

//≈

function execute() {
    //
    $caption = $_POST['caption'];

    //if für neuen Task vergeben
        //aktuelle id aus  id_file holen
    $id = file_get_contents('id');
        // id um 1 incrementieren
    $id++;
        //Id file speichern
    file_put_contents('id',$id);




    //TAsk der json list hinzufügen (id,caption,status =>offen)
    //liste laden
    $taskliste = json_decode(file_get_contents ('../_geheim/taskliste.json'),true);

    //neue Task anhängen
    $taskliste[]= array(
        "id" => $id,
        "caption" =>$caption,
        "status" => "true"
    );
    //liste speichen

    //Meldung zurück geben (id, statustext, aktuelle anzahl der tasks)
    $meldung = array(
        "id" => $id,
        "statustext" => "Task wurde erfolgreich hinzugefügt",
        "counter" => count($taskliste)
    );

    return $meldung;

}