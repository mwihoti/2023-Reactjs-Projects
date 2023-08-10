import React from 'react';
import Vmc from './vmc';
import logo from '../inc/movers.jpg'


function About() {
    return (
        <div >
            <section className="py-4 bg-light">
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4 my-auto'>
                            <h4> About us</h4>
                        </div>
                        <div className='col-md-8 my-auto'>
                            <h6 className='float-end'>
                                Home/ About us
                            </h6>
                        </div>

                    </div>
                </div>
                <div className='d-flexjustify-content-center align-items-center'>
                <img src={logo} />
                </div>
                 {/*Our vision, mission and values */}
            <Vmc />
            </section>
           
        </div>

    );
}
export default About;