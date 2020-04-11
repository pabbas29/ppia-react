import React from 'react';
import Axios from 'axios'
import TabelMahasiswa from '../Templates/TabelMahasiswa';
import { useEffect, useState } from 'react';

export default function DataMhsS3() {
    const [error, setError] = useState();
    const [isLoaded, setIsLoaded] = useState(false);
    const [payload, setPayload] = useState();

    useEffect(() =>
        async function loadMhsS3() {
            await Axios.get('http://localhost/ppia-react/src/API/mahasiswa/S3/index.php?AuthToken=SzcV6492j9imwLwmVfq4')
            .then(response => {
                setIsLoaded(true);
                setPayload(response.data.mhsS3)
            });
        }
    );

    if (isLoaded) {
        return(
            <div>
                <TabelMahasiswa rows={payload} />
            </div>
        );
    } else {
        return(
            <div>
                <h1>Tidak ada data</h1>
            </div>
        )
    }
}