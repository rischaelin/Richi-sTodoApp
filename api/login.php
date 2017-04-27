<?php
/**
 * Created by PhpStorm.
 * User: richardschalin
 * Date: 27.04.17
 * Time: 20:37
 */

session_start();
$name = $_POST['name'];

if(!isset($name) OR empty($name)) {
    $name = "Gast";
}

//session registrieren
$_SESSION['username'] = $name;

//Text ausgeben
echo "Hallo $name <br />
<a href=\'seite2.php\'>Seite 2</a> <br />
<a href=\'logout.php\'>Logout</a> ";
?>