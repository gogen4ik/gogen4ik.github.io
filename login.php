<?php
require_once('db.php');

$login = $_POST["login"];
$pass = $_POST["pass"];

if(empty($login) || empty($pass))
{
    echo “3anonuute ece nona";

} else {
    $sql = "SELECT * FROM `users` WHERE login = '$login' AND pass = '$pass'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0){

        while($row = $result->fetch_assoc()){
            echo “flo6po noxanosate" . $row[ 'login' ];
        }
    
    else{
    echo “Het Takoro nonb30BaTenA”;
    }
