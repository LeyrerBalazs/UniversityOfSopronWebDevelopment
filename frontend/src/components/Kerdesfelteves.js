/***********/
/* Imports */
/***********/
// Default imports
import React, { useState } from 'react';
import axios from 'axios';
// Custom imports
import Menu from './Menu';
import Plakat from './Plakat';

/*************/
/* Component */
/*************/
const Kerdesfelteves = () => {
    /************/
    /* Varibles */
    /************/
    // Hooks
    const [question, setQuestion] = useState(null);

    /*************/
    /* Functions */
    /*************/
    // handleQuestion function
    const handleQuestion = async () => {
        if (question !== null) {
            await axios.post('/api/kerdesfelteves', {
                question: question
            });
        }
    }

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
                        <h1 style={{ textAlign: "center" }}>Kérdés feltevés</h1>
                        <div className='input-field'>
                            <textarea rows="5" cols="70" maxLength="350" onChange={(event) => { setQuestion(event.target.value) }} />
                        </div>
                        <div className='input-field'>
                            <button onClick={() => {handleQuestion() }}>Küldés</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

/***********/
/* Exports */
/***********/
export default Kerdesfelteves;