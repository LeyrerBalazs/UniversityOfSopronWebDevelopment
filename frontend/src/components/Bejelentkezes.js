/***********/
/* Imports */
/***********/
// Default imports
import React, { useState } from 'react';
import axios from 'axios';
// Custom imports
import Plakat from './Plakat';
import Menu from './Menu';
import { useSiteContext } from '../context';

/*************/
/* Component */
/*************/
const Bejelentkezes = () => {
    /************/
    /* Varibles */
    /************/
    // Contexts
    const siteDatas = useSiteContext();
    // Hooks
    const [email, setEmail] = useState(null);
    const [jelszo, setJelszo] = useState(null);
    const [tryed, setTryed] = useState(0);

    /*************/
    /* Functions */
    /*************/
    // handleLogin function
    const handleLogin = async () => {
        if (email !== null && jelszo !== null) {
            await axios.post('/api/bejelentkezes', {
                username: email,
                password: jelszo
            })
            .then((response) => {
                siteDatas.setAuth(response.data[0]);
            })
            setTryed(tryed + 1);
        }
    }
    // loginCheck function
    const loginCheck = () => {
        if (siteDatas.auth === undefined) {
            return (
                <>
                    <div className='input-field'>
                        <input className=' first' tpye='e-mail' required placeholder='email-cím' onChange={(event) => { setEmail(event.target.value) }} />
                    </div>
                    <div className='input-field'>
                        <input tpye='password' placeholder='*******' required onChange={(event) => { setJelszo(event.target.value) }} />
                    </div>
                    <div className='input-field'>
                        { tryed > 0 ? <span>Hibás a felhasználónév és/vagy a jelszó!</span> : null }
                    </div>
                    <div className='input-field'>
                        <button onClick={() => {handleLogin()}}>Bejelentkezes</button>
                    </div>
                </>
            );
        }
        else {
            return <h1 style={{ textAlign: "center" }}>Bejelentkeztél!</h1>;
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
                        {loginCheck()}   
                    </div>
                </div>
            </div>
        </>
    );
}

/***********/
/* Exports */
/***********/
export default Bejelentkezes;