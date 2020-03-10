<?php
session_start();
include '../dbppia.php';

header("Access-Control-Allow-Headers: *");
header("Content-type: application/json");
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS");
header("Access-Control-Max-Age: 86400");

$data = json_decode(file_get_contents("php://input"));

var_dump($data);

if ($data === null) {
    $msg = array("status" => 0, "msg" => "username dan password kosong");
    http_response_code(400);
    echo json_encode(['user' => $msg]);
    @mysqli_close($conn);
    die();
}

$inputname = $data->username;
$inputpass = $data->pswd;



$sql = "SELECT * FROM users WHERE username='$inputname' AND Aktif='Aktif' LIMIT 1";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        $dbusername = $row['username'];

        //$sql_pswd = "SELECT AES_DECRYPT(pswd, '$dbusername') AS 'dbpswd' FROM users WHERE username = '$dbusername' LIMIT 1";
        //$result_pswd = mysqli_query($conn, $sql_pswd);
        //while($row = mysqli_fetch_assoc($result_pswd)) {
        //    $dbpaswd = $row['dbpswd'];
        //};

        $dbpaswd ="fitria";

        if ($dbusername == $inputname AND $dbpaswd == $inputpass) {
            $msg[] = array("status" => 1,
                            "ID" => $row['ID'],
                            "Nama_Depan" => $row['Nama_Depan'],
                            "Nama_Belakang" => $row['Nama_Belakang'],
                            "Role" => $row['Role'],
                            "Jabatan" => $row['Jabatan'],
                            "ID_Pengajar" => $row['ID_Pengajar']
                    );
        } else {
            $msg = array("status" => 0, "msg" => "Kombinasi username dan password salah");
        };   
    };
} else {
    $msg = array("status" => 0, "msg" => "Username tidak terdaftar");
    http_response_code(400);
};

$json = $msg;

echo json_encode(['user' => $json]);

@mysqli_close($conn);
?>