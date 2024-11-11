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
        case 'PUT':
            handlePut($pdo, $input);
            break;
        case 'DELETE':
            handleDelete($pdo, $input);
            break;
    }
    
    function handleGet($pdo) {
        $categoryId = isset($_GET['categoryId']) ? $_GET['categoryId'] : null;
        $page = isset($_GET['page']) ? $_GET['page'] : null;
        $offset = 0;
    
        $sql = "SELECT * FROM Products";
    
        if($categoryId){
            $sql .= " WHERE categoryId= :categoryId";
        }

        if($page){
            $offset = ($page - 1) * 5;
            $sql .= " ORDER BY name LIMIT 5 OFFSET :offset";
        }
    
        $stmt = $pdo->prepare($sql);  
    
        if($categoryId){
            $stmt->bindParam(':categoryId', $categoryId, PDO::PARAM_INT);
        }

        if($page){
            $stmt->bindParam(':offset', $offset, PDO::PARAM_INT);
        }
    
        $stmt->execute();  
    
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC); 
        
        echo json_encode($result, JSON_UNESCAPED_UNICODE);  
    }
    
    function handlePost($pdo, $input) { 
        $sql = "INSERT INTO Products (image, price, name, available, description, stock, sku, categoryId)" . 
            " values (:image, :price, :name, :available, :description, :stock, :sku, :categoryId)";
    
        $stmt = $pdo->prepare($sql);
    
        $stmt->execute([
            'image'       => $input['image'], 
            'price'       => $input['price'], 
            'name'        => $input['name'], 
            'available'   => $input['available'], 
            'description' => $input['description'], 
            'stock'       => $input['stock'],
            'sku'         => $input['sku'], 
            'categoryId'  => $input['categoryId']
        ]);
    
        echo json_encode(['message' => 'Product created correctly:0']);
    }

    function handlePut($pdo, $input) {
        $sql = "UPDATE Products SET image = :image, price = :price, name = :name, available = :available, description = :description, " . 
            "stock = :stock, sku = :sku, categoryId = :categoryId WHERE id = :id";
    
        $stmt = $pdo->prepare($sql);
    
        $stmt->execute([
            'image'       => $input['image'], 
            'price'       => $input['price'], 
            'name'        => $input['name'], 
            'available'   => $input['available'], 
            'description' => $input['description'], 
            'stock'       => $input['stock'],
            'sku'         => $input['sku'], 
            'categoryId'  => $input['categoryId'],
            'id'          => $input['id']
        ]);
    
        echo json_encode(['message' => 'Product updated correctly:0']);
    }

    function handleDelete($pdo, $input) {
        try {
            $id = $_GET['id'];

            $sql = "DELETE FROM Products WHERE id = :id";

            $stmt = $pdo->prepare($sql);
            
            $stmt->bindParam(':id', $id, PDO::PARAM_INT);

            $stmt->execute();

            echo json_encode(['message' => 'Product deleted correctly']);
        } catch (PDOException $e) {
            echo json_encode(['message' => 'Error: Database error - ' . $e->getMessage()]);
        } catch (Exception $e) {
            echo json_encode(['message' => 'Error: ' . $e->getMessage()]);
        }
    }
?>
