import React, { useContext, useState, } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProviders';
import { toast } from 'react-hot-toast';

const Login = () => {
    const {signIn, googleLogin, githubLogin} = useContext(AuthContext);
    const [error, setError] = useState('')

    const navigate = useNavigate();
    const location = useLocation();
    // console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'


    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // console.log(email, password)
      if(password.length < 6) {
        toast.error("please set at least 6 characters ")
      }
        signIn(email, password)
        .then(result => {
            const loggedUser = result.user;
            // console.log(loggedUser);
            
            navigate(from, {replace: true})
            toast.success('Successfully Login')
            return setError('')
        })
        .catch(error => {
            // console.log(error.message)
            setError('Wrong email and password')
        })
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
                <input type="email" name='email' placeholder="Type here" required className="input input-bordered w-full max-w-xs" />

                <label className="label">
                    <span className="label-text font-bold">What is your Password?</span>

                </label>
                <input type="password"  name='password' placeholder="Type here" required className="input input-bordered w-full max-w-xs" />

                <p className=' text-red-500'>{error}</p>
                <button className='btn btn-accent mt-2' type='submit'>Login</button>

                <p>Don't have an account <span> <Link className='link link-primary' to="/register">Registration</Link></span></p>
                <p onClick={handleGoogleSignIn} className='btn btn-error w-80 py-2 mt-2 mx-auto text-center'>
                  <FaGoogle  className=' w-10 h-7'></FaGoogle>  Login With Google
                </p>
                <p onClick={handleGithubSignIn} className='btn bg-black w-80 py-2 mt-2 mx-auto text-center'>
                    <FaGithub  className=' w-10 h-7'></FaGithub>
                Login With GitHub 
            </p>
            </form>

        </div>
    );
};

export default Login;