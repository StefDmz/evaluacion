<?php
if(isset($_FILES['imageFile']) && $_FILES['imageFile']['error'] == 0){
    $file = $_FILES['imageFile'];
    $fileName = $file['name'];
    $fileTmpName = $file['tmp_name'];
    $fileDestination = '../assets/img/' . $fileName;
    
    if (!is_dir('../assets/img/')) {
        echo json_encode(['error' => 'La carpeta de destino no existe.']);
        return;
    }
    
    if(!file_exists($fileDestination)){
        if(move_uploaded_file($fileTmpName, $fileDestination)){
            echo json_encode(['image' => 'img/' . $fileName]);
        } else {
            echo json_encode(['error' => 'Error subiendo la imagen.']);
            return;
        }
    } else {
        echo json_encode(['image' => 'img/' . $fileName]);
    }
} else {
    echo json_encode(['error' => 'Se necesita subir una imagen.']);
}
?>