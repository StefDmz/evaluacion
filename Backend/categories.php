<?php 
    include 'db.php'; 
    
    $method = $_SERVER['REQUEST_METHOD'];
    $input = json_decode(file_get_contents('php://input'), true);
    
    switch($method) {
        case 'GET':
            handleGet($pdo);
            break;
    }
    
    function handleGet($pdo){
        $sql = "SELECT * FROM Categories";
    
        $stmt = $pdo->prepare($sql);  
    
        $stmt->execute();  
    
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC); 
        
        echo json_encode($result, JSON_UNESCAPED_UNICODE);  
    }
?>