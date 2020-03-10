import React, { Component } from 'react';
import Axios from 'axios'
import TabelMahasiswa from '../Templates/TabelMahasiswa';

class DataMhsS3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    async componentDidMount() {
        await Axios.get('http://localhost/ppia-react/src/API/mahasiswa/S3/')
            .then(response => {
                this.setState({
                    isLoaded: true,
                    items: response.data.mhsS3
                });
            }, error => {
                this.setState({
                    isLoaded: false,
                    error: error
                })
            });
    }

    

    render() {
        const { error, isLoaded, items } = this.state;

        if (isLoaded) {
            return(
                <div>
                    <TabelMahasiswa rows={items} />
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
   
}

export default DataMhsS3