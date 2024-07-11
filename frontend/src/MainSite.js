/***********/
/* Imports */
/***********/
// Default imports
import React, { useEffect, useState } from "react";
import axios from "axios";
// Custom imports
import Menu from "./components/Menu";
import Plakat from "./components/Plakat";
import './styles/app.css';

/*************/
/* Component */
/*************/
const MainSite = () => {
    /************/
    /* Varibles */
    /************/
    // Hooks
    const [kerdesek, setKerdesek] = useState(null);
    
    /*************/
    /* Functions */
    /*************/
    // getData function
    const getData = async () => {
        await axios.get("/api/questiondata")
        .then((res) => {
            setKerdesek(res.data);
        });
    }
    // useEffect functions
    useEffect(() => {
        getData();
    }, [])

    /**********************/
    /* Component elements */
    /**********************/
    return (
        <>
            <Menu />
            <div className="container">
                <Plakat />
                <div className='dobozok'>
                    {kerdesek != null ? kerdesek.map((kerdes) => {
                        return (
                            <div key={kerdes.question} className='doboz'>
                                <h1>{kerdes.question}</h1>
                                <h2>{kerdes.answerer}</h2>
                                <p>{kerdes.answer}</p>
                            </div>
                            );
                    }) : null}
                </div>
            </div>
        </>
    );
}

/***********/
/* Exports */
/***********/
export default MainSite;