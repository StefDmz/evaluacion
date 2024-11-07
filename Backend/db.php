<?php
    header("Content-Type: application/json; charset=utf-8");
    
    $dns = "mysql:host=localhost;dbname=quack_pastes_app;charset=utf8mb4";
    $user = "quack_stef";
    $password = "t^];t;s%*GjqY2N";

    try {
        $pdo = new PDO($dns, $user, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    } catch (PDOException $e) {
        echo 'Error: ' . $e->getMessage();
    }
?>