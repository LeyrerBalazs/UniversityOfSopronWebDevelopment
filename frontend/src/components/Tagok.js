/***********/
/* Imports */
/***********/
// Default imports
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// Custom imports
import Menu from "./Menu";
import Plakat from "./Plakat";
import './../styles/tagok.css';

/*************/
/* Component */
/*************/
const Tagok = () => {
    /************/
    /* Varibles */
    /************/
    // Hooks
    const [tagok, setTagok] = useState(null);

    /*************/
    /* Functions */
    /*************/
    // getData function
    const getData = async () => {
        await axios.get("/api/tagok")
        .then((res) => {
            setTagok(res.data);
        });
    }
    // useEffect function
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
                <Plakat className="palakat" />
                <div className='dobozok'>
                    {tagok !== null ? tagok.map((tag) => {
                        return (
                        <div key={tag.name} className='doboz'>
                            <div className='left'>
                                <img src={tag.img} alt="kép a tagról" />
                            </div>
                            <div className='right'>
                                <h1 className='name'>{tag.name}</h1>
                                <p><b>Rólam:</b> {tag.about}</p>
                            </div>
                        </div>)
                    }) : null}
                </div>
            </div>
        </>
    );
}

/***********/
/* Exports */
/***********/
export default Tagok;