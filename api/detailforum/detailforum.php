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

// récupérer l'id pour trouver la bonne publication
$id = $_GET['id'];
     
$sql = "SELECT * FROM publications WHERE id = $id";
$stmt = $conn->prepare($sql);
//$stmt->bindParam(':id', 3);
$stmt->execute();
$publication = $stmt->fetch(PDO::FETCH_ASSOC);
       
echo json_encode($publication);
       
?>