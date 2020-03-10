<?php
session_start();
include '../../dbppia.php';

$data = json_decode(file_get_contents("php://input"));

var_dump($data);

if ($data === null) {
    $msg = array("status" => 0, "msg" => "tidak ada data");
    http_response_code(400);
    echo json_encode(['user' => $msg]);
    @mysqli_close($conn);
    die();
}

$username = $data->username;
$Nama_Depan = $data->Nama_Depan;
$Nama_Belakang = $data->Nama_Belakang;
$email = $data->email;
$Password = $data->pswd;



$json = $msg;

header('content-type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000');
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
echo json_encode(['user' => $json]);

@mysqli_close($conn);
?>
