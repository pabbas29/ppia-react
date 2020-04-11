<?php

class MahasiswaS3 {
    private $conn;
    private $table_mhsS3 = "mahasiswaS3";

    public $ID;
    public $NPM;
    public $Nama_Depan;
    public $Nama_Tengah;
    public $Nama_Belakang;
    public $Semester_Masuk;
    public $Tahun_Masuk;
    public $Matrikulasi;
    public $Latar;
    public $Status;

    public function __construct($db){
        $this->conn = $db;
    }

    function read() {
        $query = "SELECT * FROM " . $this->table_mhsS3 . " ORDER BY Nama_Depan";
        $result = mysqli_query($this->conn, $query);
        return $result;     
    }

    function read_single(){
        $query = "SELECT * FROM " . $this->table_mhsS3 . " WHERE ID= '".$this->id."'";
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }
}

?>