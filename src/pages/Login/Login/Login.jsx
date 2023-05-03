import React from 'react';
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className='container mx-auto bg-purple-300 rounded-lg py-2'>
            <h3 className=' w-80 py-2 mt-2 mx-auto text-purple-100 font-bold text-lg rounded-lg bg-purple-900 text-center'>Please Logins</h3>
            <from className="form-control w-full max-w-xs mx-auto">
                <label className="label">
                    <span className="label-text font-bold">What is your name ?</span>
                    
                </label>
                <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                <label className="label">
                    <span className="label-text font-bold">What is your Email ?</span>
                    
                </label>
                <input type="email" name='email' placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                <label className="label">
                    <span className="label-text font-bold">What is your Password?</span>
                    
                </label>
                <input type="password" name='password' placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                <button className='btn btn-accent mt-2' type='submit'>Login</button>

                <p>Don't have an account <span> <Link className='link link-primary' to="/register">Registration</Link></span></p>
                
            </from>
        </div>
    );
};

export default Login;