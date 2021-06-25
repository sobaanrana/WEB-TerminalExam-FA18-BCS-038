import React, { Fragment, useEffect, useState } from 'react';
import { useAlert } from 'react-alert';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clearErrors } from '../Actions/userActions';
import { login } from '../Actions/userActions';

const Login = ({history}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const alert = useAlert();

    const {loading, loggedIn, error} = useSelector(state => state.loggedInUser);

    useEffect(() => {
        if(loggedIn) { 
            history.push('/')
        }
        else if (!loggedIn) {
            history.push('/user/login')
        }
        if(error) {
            alert.error(error);
            dispatch(clearErrors());
        }
    }, [dispatch, alert, loggedIn, error, history])

    const submitHandler = (e) => {
        dispatch(login(email, password))
    }

    return ( 
      
       
        <Fragment>
            <div className="row wrapper"> 
                <div className="col-10 col-lg-5">
                
                    <form className="shadow-lg" onSubmit={submitHandler}>
                        <h1 className="mb-3">Login</h1>
                        <div className="form-group">
                        <label htmlFor="email_field">Email</label>
                        <input
                            type="email"
                            id="email_field"
                            className="form-control"
                            value= {email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        </div>
            
                        <div className="form-group">
                        <label htmlFor="password_field">Password</label>
                        <input
                            type="password"
                            id="password_field"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        </div>

            
                        <button
                        id="login_button"
                        type="submit"
                        className="btn btn-block py-3"
                        >
                        LOGIN
                        </button>

                    </form>
                </div>
            </div>
        </Fragment>
 
        
     );
}
 
export default Login;