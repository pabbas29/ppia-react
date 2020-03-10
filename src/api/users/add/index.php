<?php
session_start();
include '../../dbppia.php';

$data = json_decode(file_get_contents("php://input"));

var_dump($data);

if($data !== null) {
    $username = $data->username;
	$Nama_Depan = $data->Nama_Depan;
	$Nama_Belakang = $data->Nama_Belakang;
	$email = $data->email;
	$Password = $data->pswd;
	$JabatanIDs = $data->Jabatan;
    $JabatanID = explode("-", $JabatanIDs);
    
    $sql = "INSERT INTO users (ID, username, Nama_Depan, Nama_Belakang, email, pswd, Jabatan, Role, Aktif)
            VALUES ('', '$username', '$Nama_Depan', '$Nama_Belakang', '$email', AES_ENCRYPT('$Password', '$username'), '$JabatanID[1]', '$JabatanID[0]', 'Aktif')";
    
    $msg = array("status" => 1, "msg" => "user sudah ditambahkan");
    http_response_code(201);
} else {
    $msg = array("status" => 0, "msg" => "tidak ada data");
    http_response_code(400);
}

$json = $msg;

header('content-type: application/json');
header('Access-Control-Allow-Origin: http://localhost:3000');
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
echo json_encode(['user' => $json]);

@mysqli_close($conn);
?>