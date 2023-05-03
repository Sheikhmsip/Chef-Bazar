import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';
import Login from '../pages/Login/Login/Login';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Register from '../pages/Login/Register/Register';
import Blogs from '../pages/Blogs/Blogs';

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
                path: '/',
                element: <Home></Home>,
                loader: ({params}) => fetch('http://localhost:5000/chefs/')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    }
]) 

export default router;