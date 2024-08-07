import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import App from './webPages.js/App';
import Signup from './webPages.js/Signup';
import Login from './webPages.js/Login';
import RootLay from './webPages.js/RootLay';
import PatientInfoFill from './webPages.js/PatientInfoFill';
import MedicalStaffInfoFill from './webPages.js/MedicalStaffInfoFill';
import UserProfile from './webPages.js/UserProfile';
import MedicalStaff from './webPages.js/Medicalstaff';
import Appointments from './webPages.js/Appointments';

const router = createBrowserRouter(
createRoutesFromElements((
 <Route path = '/' element ={<RootLay/>}> 
    <Route path = '/' element ={<App/>}/> 
    <Route path = '/signup' element = {<Signup/>}/>
    <Route path = '/login' element = {<Login/>}/>
    <Route path = '/patientinfofill' element = {<PatientInfoFill/>}/>
    <Route path = '/medicalstaffinfofill' element = {<MedicalStaffInfoFill/>}/>
    <Route path = '/userprofile' element = {<UserProfile/>}/>
    <Route path = '/medicalstaff' element = {<MedicalStaff/>}/>
    <Route path = '/appointments' element = {<Appointments/>}/>
 </Route>
 )
))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>
);
