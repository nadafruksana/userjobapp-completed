import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import UserForm from "./UserForm"
import AdminDashboard from './AdminDashboard'


function App (props){
    return(
        <BrowserRouter>
        <div>
        <Route path="/" component={UserForm} exact={true}/>
        <Route path="/admin" component={AdminDashboard}/>
        
        </div>
</BrowserRouter>
             )
        }
export default App
           

   