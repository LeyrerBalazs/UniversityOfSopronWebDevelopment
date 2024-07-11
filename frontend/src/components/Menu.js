/***********/
/* Imports */
/***********/
// Default imports
import React from 'react';
import { Link } from 'react-router-dom';
// Custom imports
import './../styles/menu.css';
import mhmLogo from './../imgs/logo.jpg';
import { useSiteContext } from '../context';
// Reacticon imports
import { BiQuestionMark, BiBody, BiUserPlus, BiLogInCircle, BiUser, BiLogOut, BiMessageAltError } from "react-icons/bi";

/*************/
/* Component */
/*************/
const Menu = () => {
    /************/
    /* Varibles */
    /************/
    // Contexts
    const siteData = useSiteContext();

    /**********************/
    /* Component elements */
    /**********************/
    return (
        <div className='menu-div'>
            <Link to="/"><img src={mhmLogo} alt="Mi Hazánk Mozgalom Sopron Logo" title="Mi Hazánk Mozgalom Sopron Logo" /></Link>
            <Link className='menu-link' to="/tagok"><BiBody /><BiBody /></Link>
            { siteData.auth === undefined ? <Link className='menu-link' to="/kerdesfelteves"><BiQuestionMark /></Link> : null } 
            { siteData.auth === undefined ? <Link className='menu-link' to="/csatlakozas"><BiUserPlus /></Link> : null }
            { siteData.auth === undefined ? null : <Link className='menu-link' to="/feltettkerdesek"><BiMessageAltError /></Link> }
            { siteData.auth === undefined ? null : <Link className='menu-link' to="/profil"><BiUser /></Link> }
            { siteData.auth === undefined ? <Link className='menu-link' to="/bejelentkezes"><BiLogInCircle /></Link> : <Link className='menu-link' to="/" onClick={() => { siteData.setAuth(undefined); }}><BiLogOut /></Link> }
        </div>
    );
}

/***********/
/* Exports */
/***********/
export default Menu;