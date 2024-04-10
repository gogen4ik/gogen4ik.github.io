<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "registeruser";

$conn = mysqli_connect($server, $username, $password, $dbname) ;

if (!$conn){
    die("Connection Fialed" . mysqli_connect_error());
} else {
    echo "Успех";
} ?>