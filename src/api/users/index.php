<?php
session_start();
include '../dbppia.php';

$sql = "SELECT * FROM users";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        $msg[] = array("ID" => $row['ID'],
                        "username" => $row['username'],
                        "ID_Pengajar" => $row['ID_Pengajar'],
                        "Nama_Depan" => $row['Nama_Depan'],
                        "Nama_Belakang" => $row['Nama_Belakang'],
                        "email" => $row['email'],
                        "Jabatan" => $row['Jabatan'],
                        "Role" => $row['Role'],
                        "Aktif" => $row['Aktif']
                    );
    }
} else {
    $msg = array("status" => 0, "msg" => "tidak ada data");
}

$json = $msg;

header('content-type: application/json');
header('Access-Control-Allow-Origin: http://localhost');
echo json_encode($json);

@mysqli_close($conn);
?>