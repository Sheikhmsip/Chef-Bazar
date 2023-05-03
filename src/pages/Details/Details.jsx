import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData();
    console.log(details)
    return (
        <div>
            <p>this is details page</p>
        </div>
    );
};

export default Details;