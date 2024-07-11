/***********/
/* Imports */
/***********/
// Default imports
import React, { useState } from 'react';
// Custom imports
import plakatok from './../datas/plakatok.json';
import './../styles/plakat.css';

/*************/
/* Component */
/*************/
const Plakat = () => {
    const [index, setIndex] = useState(0)
    /**********************/
    /* Component elements */
    /**********************/
    return (
        <div className='plakat-div'>
            {plakatok.map((plakat) => (
                <div key="plakat">
                    <img src={plakat.url} className='plakat' />
                </div>
            ))}
        </div>
    );
}

/***********/
/* Exports */
/***********/
export default Plakat;