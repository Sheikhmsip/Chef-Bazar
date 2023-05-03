import React, { useContext, useState } from 'react';
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProviders';

const Login = () => {
    const {signIn, googleLogin, githubLogin} = useContext(AuthContext);
    

    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error => console.log(error))
    }
    const handleGoogleSignIn = () => {
        googleLogin()
        
    }
    const handleGithubSignIn = () => {
        githubLogin()
    }

    return (
        <div className='container mx-auto bg-purple-300 rounded-lg py-2'>
            <h3 className=' w-80 py-2 mt-2 mx-auto text-purple-100 font-bold text-lg rounded-lg bg-purple-900 text-center'>Please Login</h3>
            <form onSubmit={handleLogin}  className="form-control w-full max-w-xs mx-auto">

                <label className="label">
                    <span className="label-text font-bold">What is your Email ?</span>

                </label>
                <input type="email" name='email' placeholder="Type here" className="input input-bordered w-full max-w-xs" />

                <label className="label">
                    <span className="label-text font-bold">What is your Password?</span>

                </label>
                <input type="password"  name='password' placeholder="Type here" className="input input-bordered w-full max-w-xs" />


                <button className='btn btn-accent mt-2' type='submit'>Login</button>

                <p>Don't have an account <span> <Link className='link link-primary' to="/register">Registration</Link></span></p>
                <p className='btn btn-error w-80 py-2 mt-2 mx-auto text-center'>
                  <FaGoogle onClick={handleGoogleSignIn} className=' w-10 h-7'></FaGoogle>  Login With Google
                </p>
                <p className='btn bg-black w-80 py-2 mt-2 mx-auto text-center'>
                    <FaGithub onClick={handleGithubSignIn} className=' w-10 h-7'></FaGithub>
                Login With GitHub 
            </p>
            </form>

        </div>
    );
};

export default Login;