import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layout/Main';
import Home from '../pages/Home/Home/Home';

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/home',
                element: <Home></Home>
            },
            
        ]
    }
]) 

export default router;