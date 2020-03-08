<?php
session_start();
include '../dbppia.php';

$sql = "SELECT * FROM pengajar ORDER BY Nama_Depan";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        $msg[] = array("ID" => $row['ID'],
                        "Prefix" => $row['Prefix'],
                        "Nama_Depan" => $row['Nama_Depan'],
                        "Nama_Tengah" => $row['Nama_Tengah'],
                        "Nama_Belakang" => $row['Nama_Belakang'],
                        "Suffix" => $row['Suffix'],
                        "Golongan" => $row['Golongan'],
                        "Ruang" => $row['Ruang'],
                        "Jabatan" => $row['Jabatan'],
                        "Kekhususan" => $row['Kekhususan'],
                        "Status_Dosen" => $row['Status_Dosen'],
                        "Aktif" => $row['Aktif']
                    );
    }
} else {
    $msg = array("status" => 0, "msg" => "tidak ada data");
}

$json = $msg;

header('content-type: application/json');
echo json_encode($json);

@mysqli_close($conn);
?>