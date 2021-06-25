import React, { Fragment, useState } from 'react';
import Navbar from './Navbar';
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'


const Landing = () => {
    const [city, setCity] = useState('');
    const [date, setDate] = useState('');
    const [teamA, setTeamA] = useState('');
    const [teamB, setTeamB] = useState('')

    const submitHandler = (e) => {
        e.preventDefault();
      
    }

    return ( 
        <Fragment>
            <Navbar />


            <div className="row wrapper">
                <div className="col-10 col-lg-5">
                    <form className="shadow-lg" onSubmit={submitHandler} encType='multipart/form-data'>
                        <h1 className="mb-3">PSL Match</h1>

                        <div className="form-group">
                            <label htmlFor="city">City</label>
                            <input
                                type="name"
                                className="form-control"
                                name='name'
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="date">Date</label>
                            <input
                                type="text"
                                className="form-control"
                                name='date'
                                value={date}
                                onChange={(e) => setDate(e.target.value)}                            />
                        </div>

                        <div className="form-group">
                        <label htmlFor="teamA">Team A</label>
                            <select name="Team A" >
                                <option value="Karachi Kings">Karachi Kings</option>
                                <option value="Multan Sultans">Multan Sultans</option>
                                <option value="LahoreQalanders">LahoreQalanders</option>
                                <option value="Peshawar Zalmi">Peshawar Zalmi</option>
                                <option value="Islamabad United">Islamabad United</option>
                                <option value="Quetta Gladiators">Quetta Gladiators</option>
                            </select>
                          
                        </div>


                        <div className="form-group">
                        <label htmlFor="teamB">Team B</label>
                            <select name="Team B" >
                                <option value="Karachi Kings">Karachi Kings</option>
                                <option value="Multan Sultans">Multan Sultans</option>
                                <option value="LahoreQalanders">LahoreQalanders</option>
                                <option value="Peshawar Zalmi">Peshawar Zalmi</option>
                                <option value="Islamabad United">Islamabad United</option>
                                <option value="Quetta Gladiators">Quetta Gladiators</option>
                            </select>
                          
                        </div>

                      

                       
                        <button
                            id="submit"
                            type="submit"
                            className="btn btn-block py-3"
                            
                        >
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>

        </Fragment>
     );
}
 
export default Landing;