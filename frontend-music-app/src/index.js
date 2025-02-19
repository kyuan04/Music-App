import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Auth0Provider} from "@auth0/auth0-react";

//const domain = process.env.AUTH0_DOMAIN;
//const clientId = process.env.AUTH0_CLIENT_ID;
const domain = "dev-hf41mlyj.us.auth0.com";
const clientId = "z4BEvaUZCYWp7FFEOggGjzMudWAk4FcQ";

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log("index.js")
root.render(
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            redirectUri={window.location.origin}
        >
            <App />
        </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
