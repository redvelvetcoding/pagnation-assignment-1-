import React from 'react';
import Picture from './images/pagenot.jpeg';


function PageNotFound () {
    return(
        <section>
        <NavLink to="User">User</NavLink>
            <img src={Picture} alt="pagenot found" className='image'/>
        </section>
    )
}


export default PageNotFound;

