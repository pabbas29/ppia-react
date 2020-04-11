<?php

class Database {
    private $servername = "localhost";
    private $username = "db_ppia-feb";
    private $password = "febui2020";
    private $dbname = "db_ppia-feb";
    public $conn;

    public function getConnection() {
        $this->conn = null;

        try {
            $this->conn = mysqli_connect($this->servername, $this->username, $this->password, $this->dbname);
        } catch(mysqli_sql_exception $exception) {
            echo "Connection error: " . $exception->getMessage();
        }

        return $this->conn;
    }

}
?>
