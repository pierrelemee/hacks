import 'reflect-metadata';

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'

import './index.css'

import App from './App.tsx'
import {albums} from "./albums.ts";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App albums={albums}/>
    </StrictMode>,
)
