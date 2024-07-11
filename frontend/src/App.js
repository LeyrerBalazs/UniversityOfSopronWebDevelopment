/***********/
/* Imports */
/***********/
// Default imports
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Custom imports
import MainSite from './MainSite';
import Tagok from './components/Tagok';
import Csatlakozas from './components/Csatlakozas';
import Bejelentkezes from './components/Bejelentkezes';
import Kerdesfelteves from './components/Kerdesfelteves';
import FeltettKerdesek from './components/FeltettKerdesek';
import Profil from './components/Profil';
import { ContextProvider } from './context';
import './styles/app.css';


/*************/
/* Component */
/*************/
const App = () => {
    /**********************/
    /* Component elements */
    /**********************/
    return (
        <ContextProvider>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainSite />} />
                    <Route path='/tagok' element={<Tagok />} />
                    <Route path='/csatlakozas' element={<Csatlakozas />} />
                    <Route path='/bejelentkezes' element={<Bejelentkezes />} />
                    <Route path='/kerdesfelteves' element={<Kerdesfelteves />} />
                    <Route path='/feltettkerdesek' element={<FeltettKerdesek />} />
                    <Route path='/profil' element={<Profil />} />
                    <Route path='/*' element={<MainSite />} />
                </Routes>
            </BrowserRouter>
        </ContextProvider>
    );
}

/***********/
/* Exports */
/***********/
export default App;
