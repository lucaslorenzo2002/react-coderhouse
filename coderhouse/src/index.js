import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyA9_fXRENmg53zgNm2bP9C4Jknlt8g7sKA",
  authDomain: "kavan-a69e2.firebaseapp.com",
  projectId: "kavan-a69e2",
  storageBucket: "kavan-a69e2.appspot.com",
  messagingSenderId: "836107451698",
  appId: "1:836107451698:web:241eae6c4110a953fe6b2b"
};

 initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


