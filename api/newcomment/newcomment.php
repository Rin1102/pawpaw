<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");

include '../DbConnect.php';
$objDb = new DbConnect;
$conn = $objDb->connect();

$method = $_SERVER['REQUEST_METHOD'];

echo $method;

var_dump($_POST);

$id_publication = $_POST['number'];

//$id_publication = 1;

$newComment = json_decode(file_get_contents('php://input')); 

$sql = "INSERT INTO comments(id, id_publication, comment, created_at) VALUES(null, :id_publication, :comment, :created_at)";
$stmt = $conn->prepare($sql);
$created_at = date("Y_m_d_H_i_s");
          
$stmt->bindParam(':id_publication', $newComment->id_publication);
$stmt->bindParam(':comment', $newComment->comment);
$stmt->bindParam(':created_at', $created_at);

if($stmt->execute()) {
    $response = 'Record created successfully.';
} else {
    $response = 'Failed to create record.';
    }
echo json_encode($response);
       

?>