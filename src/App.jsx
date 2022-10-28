import './App.css'
import React from 'react';
import User from './User';
import PageNotFound from './PageNotFound';
import {NavLink,Route,Routes} from "react-router-dom";



function App() {
 
  return(
    <section>
     <Routes>
      <Route path='/*' componet={PageNotFound}/>
      <Route path='/user' element={User}/>
     </Routes>
     <User/>
    </section>
  )

}

export default App;
