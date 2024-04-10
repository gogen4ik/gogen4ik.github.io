<?php
require_once('db.php');

$login = $ POST['login'];
$pass - $ POST['pass'];
$email - $ POST['email'];

if (empty($login) || empty($pass) || empty($email)){
    echo 'Заполните все поля';

} else 
$sql = "INSERT INTO `users` (login,pass,email) VALUES ('$login', '$pass', '$email');";
    if ($conn -> query($sql) TRUE) {    
    echo 'Успешная регистрация';
    }
    else {
    echo 'Ошибка' . $conn ->error;
    }
