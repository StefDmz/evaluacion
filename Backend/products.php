<?php
    include 'db.php'; 
    
    $method = $_SERVER['REQUEST_METHOD'];
    $input = json_decode(file_get_contents('php://input'), true);
    
    switch($method) {
        case 'GET':
            handleGet($pdo);
            break;
        case 'POST':
            handlePost($pdo, $input);
            break;
    }
    
    function handleGet($pdo) {
        $categoryId = isset($_GET['categoryId']) ? $_GET['categoryId'] : null;
    
        $sql = "SELECT * FROM Products";
    
        if($categoryId){
            $sql .= " WHERE categoryId= :categoryId";
        }
    
        $stmt = $pdo->prepare($sql);  
    
        if($categoryId){
            $stmt->bindParam(':categoryId', $categoryId, PDO::PARAM_INT);
        }
    
        $stmt->execute();  
    
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC); 
        
        echo json_encode($result, JSON_UNESCAPED_UNICODE);  
    }
    
    function handlePost($pdo, $input) { 
        $sql = "INSERT INTO Products (image, price, name, available, description, stock, sku, categoryId) values (:image, :price, :name, :available, :description, :stock, :sku, :categoryId)";
    
        $stmt = $pdo->prepare($sql);
    
        $stmt->execute(['image' => $input['image'], 'price' => $input['price'], 'name' => $input['name'], 'available' => $input['available'], 'description' => $input['description'], 'stock' => ['stock'],
            'sku' => $input['sku'], 'categoryId' => $input['categoryId']]);
    
        echo json_encode(['message' => 'Product created correctly:0']);
    }
?>
