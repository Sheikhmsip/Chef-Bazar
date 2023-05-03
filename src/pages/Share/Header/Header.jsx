import React from 'react';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <div className='container mx-auto'>
            <div>
                <h1>Chef Hunter </h1>
            </div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li tabIndex={0}>
                                <Link to='/blog' className="justify-between">
                                   Blogs
                                </Link>
                               
                            </li>
                            <li><Link>About</Link></li>
                        </ul>
                    </div>
                    <Link to='/home' className="btn btn-ghost normal-case text-xl">Chef Bazar</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li tabIndex={0}>
                            <Link to='/blogs'>
                                Blogs
                            </Link>
                            
                        </li>
                        <li><Link to='/about'>About</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login' className="btn">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;