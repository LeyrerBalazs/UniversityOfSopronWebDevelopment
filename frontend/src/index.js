/***********/
/* Imports */
/***********/
// Default imports
import React from 'react';
import ReactDOM from 'react-dom/client';
// Custom imports
import App from './App';

/****************/
/* React render */
/****************/
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
