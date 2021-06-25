import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <Fragment>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <Link class="navbar-brand" to="#">PSL</Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                 <div class="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <Link class="nav-link" to="/user/login">Login</Link>
                        </li>
                         <li class="nav-item active" >
                         <Link class="nav-link" to="/user/signup">Sign up</Link>
                        </li>
            
          
                    </ul>
           
                </div>
            </nav>
           
        </Fragment>
     );
}
 
export default Navbar;