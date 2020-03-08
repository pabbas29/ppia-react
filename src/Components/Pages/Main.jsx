import React, { Component } from 'react';
import DataMhsS3 from '../DataComponent/MahasiswaS3';


class MainPage extends Component {
    render() {
        return(
            <div>
               <h1>Hello World</h1>
                <DataMhsS3 /> 
            </div>
            
        )   
    }
}

export default MainPage