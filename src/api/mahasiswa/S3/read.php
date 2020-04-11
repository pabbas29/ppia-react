<?php

include_once '../../config/dbppia.php';
include_once '../../config/token.php';
include_once './mahasiswaS3.php';

header('content-type: application/json');
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET");
//header("Access-Control-Max-Age: 3600");

//check request token
if (isset($_GET['AuthToken'])) {
    $AuthToken = $_GET['AuthToken'];
    if ($AuthToken <> $token) {
        http_response_code(401);
        $msg = array("status" => 0, "msg" => "permintaan ditolak");
        echo json_encode($msg);
        exit();
    }
} else {
    http_response_code(401);
    $msg = array("status" => 0, "msg" => "permintaan ditolak");
    echo json_encode($msg);
    exit();
}

//get database connection
$database = new Database();
$db = $database->getConnection();

//prepare mahasiswaS3 object
$mahasiswaS3 = new MahasiswaS3($db);

//query mahasiswaS3
$result = $mahasiswaS3->read();
$num = mysqli_num_rows($result);

if($num > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        extract($row);
        $mahasiswaS3_item[]=array(
            "ID" => $ID,
            "Nama_Depan" => $Nama_Depan,
            "Nama_Tengah" => $Nama_Tengah,
            "Nama_Belakang" => $Nama_Belakang,
            "Nama_Lengkap" => $Nama_Depan .' '. $Nama_Belakang,
            "NPM" => $NPM,
            "Semester_Masuk" => $Semester_Masuk,
            "Tahun_Masuk" => $Tahun_Masuk,
            "Matrikulasi" => $Matrikulasi,
            "Latar" => $Latar,
            "Status" => $Status
        );
        //array_push($mhsS3_arr["mhsS3"], $mahasiswaS3_item);
    }

    //echo json_encode($mhsS3_arr['mhsS3']);
    echo json_encode($mahasiswaS3_item);
    
} else {
    echo json_encode(array());
}

?>