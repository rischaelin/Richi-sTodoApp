<?php
/**
 * Created by PhpStorm.
 * User: richardschalin
 * Date: 27.04.17
 * Time: 20:47
 */
session_start(); //ganz wichtig

if(isset($_SESSION['username'])) {
    die("Bitte erst einlogen"); //Mit dei beenden wir den weitern Scriptablauf
}

//$name den Wert der Session speichern
$name = $_SESSION['username'];


//Text ausgeben
echo "Du heisst immer noch: $name
<a href=\"logout.php\">Logout</a>";
?>