/***********/
/* Imports */
/***********/
// Default imports
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Custom imports
import Menu from './Menu'
import Plakat from './Plakat'
import { useSiteContext } from '../context';

/*************/
/* Component */
/*************/
const FeltettKerdesek = () => {
    /************/
    /* Varibles */
    /************/
    // Contexts
    const siteDatas = useSiteContext();
    // Hooks
    const [kerdesek, setKerdesek] = useState(null);
    const [answer, setAnswer] = useState(null);

    /*************/
    /* Functions */
    /*************/
    // getData function
    const getData = async () => {
        await axios.get("/api/questiondataforusers")
        .then((res) => {
            setKerdesek(res.data);
        });
    }
    // handleDelete function
    const handleDelete = async (data) => {
        await axios.post('/api/deletequestion', {
            question: data
        })
        getData();
    }
    // handleAnswer function
    const handleAnswer = async (data) => {
        await axios.post('/api/givedanswer', {
            question: data,
            ans: answer,
            name: siteDatas.auth.name
        })
        getData();
    }
    // useEffect function
    useEffect(() => {
        getData();
    }, []);

    /**********************/
    /* Component elements */
    /**********************/
    return (
        <>
          <Menu />
          <div className="container">
            <Plakat className="palakat" />
            <div className='dobozok'>
                {kerdesek != null || kerdesek === [] ? kerdesek.map((kerdes) => {
                    return (
                        <div key={kerdes.question} className='doboz'>
                                <div className='kerdes-field'>
                                    <h1 style={{textAlign:"center"}}>{kerdes.question}</h1>
                                </div>
                                <div className='input-field'>
                                    <input type="text" onChange={(event) => setAnswer(event.target.value)} />
                                </div>
                                <div className='input-field'>
                                    <button onClick={() => { handleAnswer(kerdes.question); }}>Válasz adás</button>
                                </div>
                                <div className='input-field'>
                                    <button onClick={() => { handleDelete(kerdes.question); }}>Törlés</button>
                                </div>
                        </div>
                        );
                }) : <div className='doboz'>
                        <div className='kerdes-field'>
                            <span className='feltett-kerdes'>Jelenleg nincs feltett kérdés</span>
                        </div>
                    </div>}
                </div>
            </div>
        </>
    );
}

/***********/
/* Exports */
/***********/
export default FeltettKerdesek