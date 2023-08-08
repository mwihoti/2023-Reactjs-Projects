import React from 'react';

function Contact () {
    return (
        
             <section className='section'>
                <div className='container'>
                    <div className='card shadow'>
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <h2>Contact Form</h2>
                                    <hr />

                                    <div className='form-group'>
                                        <label for="">Full Name</label>
                                        <input type="text" className="form-control" placeholder='Enter Full Name' />
                                    </div>
                                    <div className='form-group'>
                                        <label for="">Phone Number</label>
                                        <input type="text" className="form-control" placeholder='Enter Phone Number' />
                                    </div>
                                    <div className='form-group'>
                                        <label for="">Gmail</label>
                                        <input type="text" className="form-control" placeholder='Enter Gmail' />
                                    </div>
                                    <div className='form-group'>
                                        <label for="">Message</label>
                                        <textarea rows='3' className='form-control' placeholder='Type Message'></textarea>
                                    </div>
                                    <div className='form-group py-2'>
                                        <button type="buttn" className='btn btn-primary shadow w-100'>Send Message</button>

                                    </div>
                                </div>

                                <div className='col-md-4 border-start'>
                                    <h5 className='main-heading'>Address Information</h5>
                                    <div className='underline'></div>
                                </div>
                                </div>

                            </div>
                        </div>
                    </div>

            </section>

        

    );
}
export default Contact;