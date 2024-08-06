import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import './index.css';
import App from './webPages.js/App';
import Signup from './webPages.js/Signup';
import Login from './webPages.js/Login';
import RootLay from './webPages.js/RootLay';

const router = createBrowserRouter(
createRoutesFromElements((
 <Route path = '/' element ={<RootLay/>}> 
    <Route path = '/' element ={<App/>}/> 
    <Route path = '/signup' element = {<Signup/>}/>
    <Route path = '/login' element = {<Login/>}/>
 </Route>
 )
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);
