<?php
    include 'db.php';

    $method = $_SERVER['REQUEST_METHOD'];
    $input = json_decode(file_get_contents('php://input'), true);

    switch($method) {
        case 'POST':
            handlePost($pdo, $input);
            break;
    }

    function handlePost($pdo, $input) {
        $sql = "SELECT id FROM Users WHERE name = :name and password = :password LIMIT 1";

        $stmt = $pdo->prepare($sql);

        $hashedPassword = md5($input['password']);

        $stmt->execute([
            'name'     => $input['name'],
            'password' => $hashedPassword
        ]);

        $id = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        echo json_encode($id, JSON_UNESCAPED_UNICODE);
    }
?>