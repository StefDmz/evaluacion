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
        $page = isset($_GET['page']) ? $_GET['page'] : null;
        $offset = 0;

        $sql = "SELECT * FROM Categories";

        if($page){
            $offset = ($page - 1) * 5;
            $sql .= " ORDER BY name LIMIT 5 OFFSET :offset";
        }
    
        $stmt = $pdo->prepare($sql);  

        if($page){
            $stmt->bindParam(':offset', $offset, PDO::PARAM_INT);
        }
    
        $stmt->execute();  
        
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC); 
        
        echo json_encode($result, JSON_UNESCAPED_UNICODE);  
    }

    function handlePost($pdo, $input) {
        $sql = "INSERT INTO Categories (name, icon) values(:name, :icon)";

        $stmt = $pdo->prepare($sql);

        $stmt->execute([
            'name' => $input['name'],
            'icon' => $input['icon']
        ]);

        echo json_encode(['message' => 'Category created correctly:)']);
    }

    function handlePut($pdo, $input) {
        $sql = "UPDATE Categories SET name = :name, icon = :icon WHERE id = :id";

        $stmt = $pdo->prepare($sql);

        $stmt->execute([
            'name' => $input['name'],
            'icon' => $input['icon'],
            'id'   => $input['id']
        ]);

        echo json_encode(['message' => 'Category updated correctly:0']);
    }

    function handleDelete($pdo, $input) {
        try {
            $id = $_GET['id'];
            
            $sql = "DELETE FROM Categories WHERE id = :id";
    
            $stmt = $pdo->prepare($sql);
            
            $stmt->bindParam(':id', $id, PDO::PARAM_INT);

            $stmt->execute();
    
            echo json_encode(['message' => 'Category deleted correctly']);
    
        } catch (PDOException $e) {
            echo json_encode(['message' => 'Error: Database error - ' . $e->getMessage()]);
        } catch (Exception $e) {
            echo json_encode(['message' => 'Error: ' . $e->getMessage()]);
        }
    }    
?>