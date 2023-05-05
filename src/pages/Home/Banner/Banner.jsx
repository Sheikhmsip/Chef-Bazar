import React from 'react';



const Banner = () => {
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-between mt-10 items-center gap-2 bg-slate-200 '>
                <div className='align-middle pl-10'>
                    <h2 className='text-2xl md:text-5xl font-bold  tracking-wider text-purple-500 leading-relaxed'>10 Foods <br /> <span>to Eat to Help </span> <br />
                        <span className='leading-relaxed text-indigo-500'>You Lose Weight</span> </h2>

                    <p className='mt-8 text-slate-600'>Including these tasty, satisfying  <br /> staples throughout the week can<br /> help supercharge your weight-loss efforts.</p>
                    {/* <button className="btn-primary mt-10">Get Start</button> */}
                </div>
                <div className=''>
                    <img className='h-full' src='https://www.eatingwell.com/thmb/088YHsNmHkUQ7iNGP4375MiAXOY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_7866255_foods-you-should-eat-every-week-to-lose-weight_-04-d58e9c481bce4a29b47295baade4072d.jpg' />
                </div>

            </div>

            
                <div className=' align-middle  w-full md:flex mt-3'>

                    <div className=' text-purple-900 bg-purple-300 bg-opacity-80 border rounded-md mx-auto align-middle mb-3 md:mb-0 '>
                        <h4 className='font-bold text-center text-2xl text-black pt-2 mb-4'>Our Special Offer</h4>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-center '>
                            <div>
                                <h6 className='text-2xl font-bold mb-3 italic'> 2 for 10$</h6>
                                <hr />
                                <h6 className='text-2xl font-bold mb-3 italic'>Choise of 2</h6>
                                <hr />
                                <p className='mt-2'>Soup</p>
                                <p>1/2 Aci Bowl</p>
                                <p>1/2 Sandwise</p>
                            </div>

                            <div>
                                <h6 className='text-2xl font-bold mb-1 italic'>1 Day free</h6>
                                <hr />
                                <h6 className='text-2xl font-bold mb-1 italic'>7 day Delux</h6>
                                <p className=' font-semibold'>Cleanse program:</p>
                                <hr />
                                <p className='mt-1'> Include 1/2 Acai bowl or smoothie</p>
                                <p>7 day plans starting A $42</p>
                            </div>

                        </div>


                    </div>

                    <div className='text-purple-900 bg-purple-300 bg-opacity-80 border rounded-md mx-auto align-middle  '>
                        <h4 className='font-bold text-center text-2xl pt-2 mb-4 text-black'>Our Regular Offer</h4>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 text-center '>
                            <div>
                                <h6 className='text-2xl font-bold mb-3 italic'> 5 for 50$</h6>
                                <hr />
                                <h6 className='text-2xl font-bold mb-3 italic'>Choise of 2</h6>
                                <hr />
                                <p className='mt-2'>Soup</p>
                                <p>1/2 Aci Bowl</p>
                                <p>1/2 Sandwise</p>
                            </div>

                            <div>
                                <h6 className='text-2xl font-bold mb-1 italic'>1 Day free</h6>
                                <hr />
                                <h6 className='text-2xl font-bold mb-1 italic'>7 day Delux</h6>
                                <p className=' font-semibold'>Cleanse program:</p>
                                <hr />
                                <p className='mt-1'> Include 1/2 Acai bowl or smoothie</p>
                                <p>7 day plans starting A $42</p>
                            </div>

                        </div>


                    </div>

                </div>
           
        </>
    );
};

export default Banner;