<?php
session_start();
include 'dbppia.php';

$inputuser = $_POST['username'];
$inputpass = $_POST['pswd'];


$sql = "SELECT * FROM users WHERE username='$inputuser' AND Aktif='Aktif' LIMIT 1";
$result = mysqli_query($conn, $sql);
if (mysqli_num_rows($result) > 0) {
    while($row = mysqli_fetch_assoc($result)) {
        $dbusername = $row['username'];
        $dbID = $row['ID'];
        $dbrole = $row['Role'];

        $sql_pswd = "SELECT AES_DECRYPT(pswd, 'dbusername') AS 'dbpswd' FROM users WHERE username = '$dbusername' LIMIT 1";
        $result_pswd = mysqli_query($conn, $sql_pswd);
        while($row = mysqli_fetch_assoc($result_pswd)) {
            $dbpaswd = $row['dbpswd'];
        };

        if ($dbusername == $inputuser AND $dbpaswd == $inputpass) {
            $msg = array("status" => 1, "username" => '$dbusername', "userrole" => '$dbrole');
        } else {
            $msg = array("status" => 0, "msg" => "Kombinasi username dan password salah");
        };   
    };
} else {
    $msg = array("status" => 0, "msg" => "Username tidak terdaftar");
};

$json = $msg;

header('content-type: application/json');
header('Access-Control-Allow-Origin: http://localhost');
echo json_encode($json);

@mysqli_close($conn);
?>