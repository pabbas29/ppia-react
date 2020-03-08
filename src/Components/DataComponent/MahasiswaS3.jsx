import React, { useState, useEffect } from 'react';
import TabelMahasiswa from '../Templates/TabelMahasiswa';

function DataMhsS3() {

    useEffect(() => {
        fetchMhsS3();
    },[]);

    const [mhsS3json, setMhsS3] = useState([]);

    const fetchMhsS3 = async () => {
        const mhsS3 = await fetch('http://localhost/ppia-react/src/API/mahasiswa/S3/');
        const mhsS3json = await mhsS3.json();
        console.log(mhsS3json.mhsS3);
        setMhsS3(mhsS3json.mhsS3);
    }


    return(
        <div>
            <TabelMahasiswa rows={mhsS3json} />
        </div>
    );
}

export default DataMhsS3