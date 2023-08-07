import React from 'react';

function About () {
    return (
        <div >
            <section className="py-4 bg-info">
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
            </section>
            <section className='section'>
            <div className='container'>
                <div className='card shadow'>
                    <div className='card-body'>
                        <div className='row'>
                        <h2>Contact Form</h2>
                        <hr/>

                        <div className='form-group'>
                            <label for="">Full Name</label>
                            <input type="text" className="form-control" placeholder='Enter Full Name'/>
                        </div>
                        <div className='form-group'>
                            <label for="">Phone Number</label>
                            <input type="text" className="form-control" placeholder='Enter Phone Number'/>
                        </div>
                        <div className='form-group'>
                            <label for="">Gmail</label>
                            <input type="text" className="form-control" placeholder='Enter Gmail'/>
                        </div>
                        <div className='form-group'>
                            <label for="">Message</label>
                            <input type="text" className="form-control" placeholder='Enter Messsage'/>
                        </div>
                        </div>
                        
                    </div>
                </div>
            </div>

            </section>
            
        </div>

    );
}
export default About;