<?php 
    include 'db.php'; 
    
    $method = $_SERVER['REQUEST_METHOD'];
    $input = json_decode(file_get_contents('php://input'), true);
    
    switch($method) {
        case 'GET':
            handleGet($pdo);
            break;
        case 'PUT':
            handlePut($pdo, $input);
            break;
    }
    
    function handleGet($pdo) {
        $sql = "SELECT * FROM GeneralInformation LIMIT 1";
    
        $stmt = $pdo->prepare($sql);  
    
        $stmt->execute();  
    
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC); 
        
        echo json_encode($result, JSON_UNESCAPED_UNICODE);  
    }

    function handlePut($pdo, $input) {
        $sql = "UPDATE GeneralInformation SET ownerName = :ownerName, clabe = :clabe, bankName = :bankName WHERE id = :id";

        $stmt = $pdo->prepare($sql);

        $stmt->execute([
            'ownerName' => $input['ownerName'],
            'clabe'     => $input['clabe'],
            'bankName'  => $input['bankName'],
            'id'        => $input['id']
        ]);

        echo json_encode(['message' => 'Information updated correctly:0']);
    }
?>