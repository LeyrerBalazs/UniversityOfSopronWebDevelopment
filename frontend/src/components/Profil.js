/***********/
/* Imports */
/***********/
// Default imports
import React, { useState } from 'react';
import axios from 'axios';
// Custom imports
import Menu from './Menu';
import Plakat from './Plakat';
import { useSiteContext } from '../context';
import defaultProfilImg from "./../imgs/def.jpg";
// Reacticon imports
import { BiImageAdd } from "react-icons/bi";

/*************/
/* Component */
/*************/
const Profil = () => {
    /************/
    /* Varibles */
    /************/
    // Contexts
    const siteDatas = useSiteContext();
    // Hooks
    const [imageUrl, setImageUrl] = useState(siteDatas.img);
    const [aboutme, setAboutme] = useState(null)
    const [newPassword, setNewPassword] = useState(null);
    const [newImageUrl, setNewImageUrl] = useState(null);
    const [newAboutme, setNewAboutme] = useState(null)
    const [newName, setNewName] = useState(null)
    const [newUsername, setNewUsername] = useState(null)
    
    /*************/
    /* Functions */
    /*************/
    // onFileChange function
    const onFileChange = async (event) => {
        const data = new FileReader();
        data.addEventListener('load', () => {
            setImageUrl(data.result)
        })
        data.readAsDataURL(event.target.files[0])
    };
    // onNewFileChange function
    const onNewFileChange = async (event) => {
        const data = new FileReader();
        data.addEventListener('load', () => {
            setNewImageUrl(data.result)
        })
        data.readAsDataURL(event.target.files[0])
    };
    // handleChange function
    const handleChange = async () => {
        axios.post("/api/upload", {
            name: siteDatas.auth.name,
            image: imageUrl,
            aboutme: aboutme,
            password: newPassword
        }); 
    }
    // AddNew function
    const AddNew = async () => {
        axios.post("/api/newuser", {
            name: newName,
            username: newUsername,
            about: newAboutme,
            img: newImageUrl
        });
    }

    /**********************/
    /* Component elements */
    /**********************/
    return (
        <>
            <Menu />
            <div className="container">
                <Plakat />
                <div className='dobozok'>
                    <div className='doboz' style={{
                        display:"flex",
                        flexDirection:"column",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <div>
                            <img style={{
                                marginTop: "2em",
                                borderRadius: "2em",
                                width: "20em",
                                height: "20em"
                            }}alt="profilImg" src={imageUrl} className="profilImg" />
                        </div>
                        <div>
                            <input id="kep" type='file' accept='image/jpeg' style={{ display: "none" }} onChange={onFileChange}/>
                            <label for="kep"><BiImageAdd size="50" /></label>
                        </div>
                        <h1 style={{marginTop: "-0.5em"}}>Rólam:</h1>
                        <div className='input-field'>
                            <textarea rows="5" cols="70" maxLength="350" value={siteDatas.auth.aboutme} onChange={(event) => { setAboutme(event.target.value) }} />
                        </div>
                        <h1 style={{marginTop: "-0.5em"}}>Új jelszó:</h1>
                        <div className='input-field'>
                            <input type="text" onChange={(event) => { setNewPassword(event.target.value) }} />
                        </div>
                        <div className='input-field' style={{ marginBottom: "1em", marginTop: "2em"}}>
                            <button onClick={() => { handleChange(); }}>Mentés</button>
                        </div>
                    </div>
                    <div className='doboz' style={{
                        display:"flex",
                        flexDirection:"column",
                        alignItems: "center",
                        justifyContent: "center"
                    }}>
                        <h1>Új tag hozzáadás</h1>
                        <div>
                            <img style={{
                                marginTop: "2em",
                                borderRadius: "2em",
                                width: "20em",
                                height: "20em"
                            }}alt="profilImg" src={newImageUrl === null ? defaultProfilImg : newImageUrl} className="profilImg" />
                        </div>
                        <div>
                            <input id="kep2" type='file' accept='image/jpeg' style={{ display: "none" }} onChange={onNewFileChange}/>
                            <label for="kep2"><BiImageAdd size="50" /></label>
                        </div>
                        <h1 style={{marginTop: "-0.5em"}}>Teljes név (megjelenik):</h1>
                        <div className='input-field'>
                            <input type="text" onChange={(event) => { setNewName(event.target.value) }} />
                        </div>
                        <h1 style={{marginTop: "-0.5em"}}>Felhasználónév:</h1>
                        <div className='input-field'>
                            <input type="text" onChange={(event) => { setNewUsername(event.target.value) }} />
                        </div>
                        <h1 style={{marginTop: "-0.5em"}}>Rólam:</h1>
                        <div className='input-field'>
                            <textarea rows="5" cols="70" maxLength="350" onChange={(event) => { setNewAboutme(event.target.value) }} />
                        </div>
                        <div className='input-field' style={{ marginBottom: "1em", marginTop: "2em"}}>
                            <button onClick={() => { AddNew(); }}>Tag felvétele</button>
                        </div>
                    </div>
                </div>
            </div>
        </>  
    );
}

export default Profil;