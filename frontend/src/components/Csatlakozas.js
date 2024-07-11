/***********/
/* Imports */
/***********/
// Default imports
import React from 'react';
// Custom imports
import Menu from './Menu';
import Plakat from './Plakat';

const Csatlakozas = () => {  
    /**********************/
    /* Component elements */
    /**********************/
    return (
        <>
            <Menu />
            <div className="container">
                <Plakat className="palakat" />
                <div className='dobozok'>
                    <div className='doboz'>
                        <h1>Tisztelt Csatlakozó!</h1>
                        <p>Személyesen kell kérni a felvételt</p>
                    </div>
                    <div className='doboz'>
                        <h1>Szabályzat helye</h1>
                        <p>Random szabály pontok.... blablablablablabla</p>
                        <p>blablablablablablablabla<br/>
                        blablablabla<br />
                        blablablabla</p>
                    </div>
                </div>
            </div>
        </>
    );
}

/***********/
/* Exports */
/***********/
export default Csatlakozas;