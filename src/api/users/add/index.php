<?php
session_start();
include '../../dbppia.php';

$body = file_get_contents('php://input');
$obj = json_decode($body, TRUE);

var_dump($body);
var_dump($obj);

//if(isset($_POST['save'])) {
    $username = $obj->username;
	$Nama_Depan = $obj->Nama_Depan;
	$Nama_Belakang = $obj->Nama_Belakang;
	$email = $obj->email;
	$Password = $obj->pswd;
	$JabatanIDs = $obj->Jabatan;
    $JabatanID = explode("-", $JabatanIDs);
    
    $sql = "INSERT INTO users (ID, username, Nama_Depan, Nama_Belakang, email, pswd, Jabatan, Role, Aktif)
            VALUES ('', '$username', '$Nama_Depan', '$Nama_Belakang', '$email', AES_ENCRYPT('$Password', '$username'), '$JabatanID[1]', '$JabatanID[0]', 'Aktif')";
    
    $msg = array("status" => 1, "msg" => "user sudah ditambahkan");
//}

//$msg = array("status" => 0, "msg" => "tidak ada data");

$json = $msg;

header('content-type: application/json');
header('Access-Control-Allow-Origin: http://localhost');
echo json_encode($json);

@mysqli_close($conn);
?>