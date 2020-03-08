import React, { useState, useEffect } from 'react';

function DataMhsS3() {

    useEffect(() => {
        fetchMhsS3();
    },[]);

    const fetchMhsS3 = async () => {
        const mhsS3 = await fetch('http://localhost/ppia-react/src/API/ReadMhsS3.php');
        const mhsS3json = await mhsS3.json();
        console.log(mhsS3json);
    }

    return(
        <div>
            <h1>Mahasiswa S3</h1>
        </div>
    );
}

export default DataMhsS3