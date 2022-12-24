import React from 'react';
import './css/index.css';
import App from './App';
import {createRoot} from 'react-dom/client'; 
import App from './App';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
root.render(<App />);