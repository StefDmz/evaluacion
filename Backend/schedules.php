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
        $sql = "SELECT * FROM Schedules";
    
        $stmt = $pdo->prepare($sql);  
    
        $stmt->execute();  
    
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC); 
        
        echo json_encode($result, JSON_UNESCAPED_UNICODE);  
    }

    function handlePut($pdo, $input) {
        $sql = "UPDATE Schedules SET close = :close, open = :open WHERE id = :id";

        $stmt = $pdo->prepare($sql);

        $stmt->execute([
            'open'  => $input['open'],
            'close' => $input['close'],
            'id'    => $input['id']
        ]);

        echo json_encode(['message' => 'Schedule updated correctly:0']);
    }
?>