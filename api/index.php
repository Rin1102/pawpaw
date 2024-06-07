<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");


include 'DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];
switch($method) {
    case "GET":
        $sql = "SELECT * FROM publications order by id desc";
        $path = explode('/', $_SERVER['REQUEST_URI']);
        if(isset($path[3]) && is_numeric($path[3])) {
            $sql .= " WHERE id = :id";
            $stmt = $conn->prepare($sql);
            $stmt->bindParam(':id', $path[3]);
            $stmt->execute();
            $publications = $stmt->fetch(PDO::FETCH_ASSOC);
        } else {
            $stmt = $conn->prepare($sql);
            $stmt->execute();
            $publications = $stmt->fetchAll(PDO::FETCH_ASSOC);
        }

        echo json_encode($publications);
        break;

    case "POST":

        $publication = json_decode(file_get_contents('php://input')); 

        $sql = "INSERT INTO publications(id, name, email, mobile, created_at) VALUES(null, :name, :email, :mobile, :created_at)";
        $stmt = $conn->prepare($sql);
        $created_at = date("Y_m_d_H_i_s");
          
        $stmt->bindParam(':name', $publication->name);
        $stmt->bindParam(':email', $publication->email);
        $stmt->bindParam(':mobile', $publication->mobile);
        $stmt->bindParam(':created_at', $created_at);

        if($stmt->execute()) {
            $response = 'Record created successfully.';
        } else {
            $response = 'Failed to create record.';
        }
        echo json_encode($response);
        break;

    case "PUT":
        $publication = json_decode( file_get_contents('php://input') );
        $sql = "UPDATE publications SET name= :name, email =:email, mobile =:mobile, updated_at =:updated_at WHERE id = :id";
        $stmt = $conn->prepare($sql);
        $updated_at = date('Y-m-d');
        $stmt->bindParam(':id', $publication->id);
        $stmt->bindParam(':name', $publication->name);
        $stmt->bindParam(':email', $publication->email);
        $stmt->bindParam(':mobile', $publication->mobile);
        $stmt->bindParam(':updated_at', $updated_at);

        if($stmt->execute()) {
            $response = 'Record updated successfully.';
        } else {
            $response = 'Failed to update record.';
        }
        echo json_encode($response);
        break;

    case "DELETE":
        $sql = "DELETE FROM publications WHERE id = :id";
        $path = explode('/', $_SERVER['REQUEST_URI']);

        $stmt = $conn->prepare($sql);
        $stmt->bindParam(':id', $path[3]);

        if($stmt->execute()) {
            $response = 'Record deleted successfully.';
        } else {
            $response = 'Failed to delete record.';
        }
        echo json_encode($response);
        break;
}

?>