import React from 'react';
import Slider from '../inc/slider';
import { Link } from 'react-router-dom';
import logo4 from '../inc/movers4.jpg'
function Home() {
    return (

        <div>
            {/*<Slider />*/}

            <section className='section'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 text-center'>
                            <h3 className='main-heading'>Home-movers KE</h3>
                            <div className='underline mx-auto'></div>
                            <p>
                                Have you ever wonder, thinking that why do people move? What are the reasons that influence them to leave their familiar place to a completely new destination? I do not know about others, but I wondered and I was searching for the reasons. What I found made me surprised...
                            </p>
                            <Link to='/about' className='btn btn-warning shadow'>Readmore</Link>


                        </div>
                    </div>
                </div>
            </section>

           
            {/*Our services*/}

            <section className='section border-top'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-12 mb-4 text-center'>
                            <h3 className="main-heading">Our services</h3>
                            <div className='underline mx-auto'></div>
                        </div>
                        <div className='col-md-4'>
                            <div className='card shadow'>
                                <img src={logo4} className='w-100 border-bottom' alt='services' />
                                <div className="card-body">
                                    <h6>Services 1</h6>
                                    <div className='underline'></div>
                                    <p>
                                        Secure Storage,
                                        Office Moves,
                                        Pet Relocation,
                                        Vehicle Transport,
                                        All-Risk Insurance
                                    </p>
                                    <Link to="/services" className='btn btn-link'>Readmore</Link>
                                </div>
                            </div>
                            </div>
                            <div className='col-md-4'>
                            <div className='card shadow'>
                                <img src={logo4} className='w-100 border-bottom' alt='services' />
                                <div className="card-body">
                                    <h6>Services 1</h6>
                                    <div className='underline'></div>
                                    <p>
                                        Secure Storage,
                                        Office Moves,
                                        Pet Relocation,
                                        Vehicle Transport,
                                        All-Risk Insurance
                                    </p>
                                    <Link to="/services" className='btn btn-link'>Readmore</Link>
                                </div>
                            </div>
                            </div>
                            <div className='col-md-4'>
                            <div className='card shadow'>
                                <img src={logo4} className='w-100 border-bottom' alt='services' />
                                <div className="card-body">
                                    <h6>Services 1</h6>
                                    <div className='underline'></div>
                                    <p>
                                        Secure Storage,
                                        Office Moves,
                                        Pet Relocation,
                                        Vehicle Transport,
                                        All-Risk Insurance
                                    </p>
                                    <Link to="/services" className='btn btn-link'>Readmore</Link>
                                </div>
                            </div>
                            </div>
</div>
                    </div>
            </section>
            </div>


    );
}

export default Home;