<?php
session_start();
include 'dbppia.php';

$sql = "SELECT * FROM mahasiswaS3 ORDER BY Nama_Depan";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        $msg[] = array("ID" => $row['ID'],
                        "Nama_Depan" => $row['Nama_Depan'],
                        "Nama_Tengah" => $row['Nama_Tengah'],
                        "Nama_Belakang" => $row['Nama_Belakang'],
                        "NPM" => $row['NPM'],
                        "Semester_Masuk" => $row['Semester_Masuk'],
                        "Tahun_Masuk" => $row['Tahun_Masuk'],
                        "Matrikulasi" => $row['Matrikulasi'],
                        "Latar" => $row['Latar'],
                        "Status" => $row['Status']
                    );
    }
} else {
    $msg = array("status" => 0, "msg" => "tidak ada data");
}

$json = $msg;

header('content-type: application/json');
header('Access-Control-Allow-Origin:*');
echo json_encode($json);

@mysqli_close($conn);
?>