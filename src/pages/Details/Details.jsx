import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Details = () => {
    const details = useLoaderData();
    const {id} = useParams()

    const detail = details.find(d => d.id === id)
    const {name,} = detail;
    console.log(details)
    return (
        <div>
           <h2>name:{name}</h2>
        </div>
    );
};

export default Details;