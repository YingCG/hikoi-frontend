import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB3DFNY9VZLsXIBjcikIBpo3FvH6vpaFQ",
  authDomain: "hikoi-7c710.firebaseapp.com",
  projectId: "hikoi-7c710",
  storageBucket: "hikoi-7c710.appspot.com",
  messagingSenderId: "1052023510410",
  appId: "1:1052023510410:web:2abb1f65428bd6a3b2e473"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
