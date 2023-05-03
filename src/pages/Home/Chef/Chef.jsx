import React from 'react';
import { Link } from 'react-router-dom';

const Chef = ({chef}) => {
    const {name, id} = chef;
    return (
        
                <div className="col glass rounded-md">
                    <img className='rounded-md' src="https://www.touchbistro.com/wp-content/uploads/2019/10/famous-chefs-marucs-samuelsson.jpg" />
                    <div className="p-3">
                        <h2 className="card-title">Name: {name}</h2>
                        <p>How to park your car at your garage?</p>

                        <div className='flex justify-between mt-3'>
                            <p><span className='text-sky-800'>1200</span> Likes</p>
                            <p>items of chef</p>
                            <p><span className='text-red-800'>Experience: </span></p>
                        </div>

                        <div className="flex justify-between mt-3 ">
                            <Link to={`${id}`} className="text-sm bg-sky-500 text-white p-3 rounded-lg ">View Details</Link>
                        </div>
                    </div>
                </div>
            
        

    );
};

export default Chef;