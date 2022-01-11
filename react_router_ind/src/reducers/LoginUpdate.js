import React from 'react';
import IsLoggedIn from '../actions/IsLoggedIn';

function loggedInStatus(state={IsLoggedIn:false},action) {
   switch (action.type) {
       case "ISLOGGEDIN":{
            return state.IsLoggedIn=true;
       }
         default:{
             return state.IsLoggedIn;
         }  
    
   }
}

export default loggedInStatus;
