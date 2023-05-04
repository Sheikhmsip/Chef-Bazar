import React from 'react';
import Marquee from "react-fast-marquee";
import slider1 from '../../../assets/slide01.jpg'
import slider2 from '../../../assets/slide02.jpg'
import slider3 from '../../../assets/slide03.jpg'
import slider4 from '../../../assets/slide04.jpg'
import Chef from '../Chef/Chef';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Home = () => {
    const chefs = useLoaderData();
    return (
        <div className=''>
            <Marquee speed={100} className='text-center '>
                <h1 className='  text-3xl py-2 animate-text bg-gradient-to-r from-teal-400  via-amber-500  to-orange-400 bg-clip-text text-transparent font-extrabold'>Food is not only for eat It's a Fashion </h1>
            </Marquee>
            <Marquee speed={200} className="carousel w-full rounded-lg">
                <div id="item1" className="carousel-item w-full">
                    <img src={slider1} className="w-full h-[70vh]" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={slider2} className="w-full h-[70vh]" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={slider3} className="w-full h-[70vh]" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src={slider4} className="w-full h-[70vh]" />
                </div>
            </Marquee>
            <div className='container mx-auto grid md:grid-cols-3 gap-4 grid-cols-1 justify-between mt-5'>
                {
                    chefs.map(chef => <Chef key={chef.id}
                        chef={chef}></Chef>)
                }
            </div>
            <div>
                <Banner></Banner>
            </div>


        </div>
    );
};

export default Home;