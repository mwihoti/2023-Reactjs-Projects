import React from 'react';

function Pricing () {
    return (
<main>
    <div className='text-center'>
        <h1 className=''>Home movers Pricing</h1>
        <hr />

        <p className='fs-5 text-muted '>
            We offer movers services to all customers who reach us within the country. <br /> <hr />
            Don't Panic call us/ reach us.
            
        </p>
    </div>

    <div className='row row-cols-1 row-cols-md-3'>
        <div className='col'>
            <div className='card text-center'>
                <div className='card-header'>
                    <h4 className='fw-normal'> Movers</h4>
                </div>
                <div className='card-body'>
                    <h1 className='card-title'>
                        $0 <small className='text-muted fw-light'>
                            /mo
                        </small>

                    </h1>
                    <ul className='list-unstyled py-3'>
                        <li> 10 users included</li>
                        <li>10 Gb of storage</li>
                        
                        <li>Priority email support</li>
                        <li>Help center access</li>
                        </ul>
                        <button className='btn btn-success text-white  btn-lg  w-100 btn-outline-success'>Sign up</button>
                </div>
            </div>
        </div>
        <div className='col'>
            <div className='card text-center'>
                <div className='card-header'>
                    <h4 className='fw-normal'> Movers</h4>
                </div>
                <div className='card-body'>
                    <h1 className='card-title'>
                        $0 <small className='text-muted fw-light'>
                            /mo
                        </small>

                    </h1>
                    <ul className='list-unstyled py-3'>
                        <li> 10 users included</li>
                        <li>10 Gb of storage</li>
                        
                        <li>Priority email support</li>
                        <li>Help center access</li>
                        </ul>
                        <button className='btn btn-success text-white btn-lg  w-100 btn-outline-success'>Sign up</button>
                </div>
            </div>
        </div>
        <div className='col'>
            <div className='card text-center'>
                <div className='card-header'>
                    <h4 className='fw-normal'> Movers</h4>
                </div>
                <div className='card-body'>
                    <h1 className='card-title'>
                        $0 <small className='text-muted fw-light'>
                            /mo
                        </small>

                    </h1>
                    <ul className='list-unstyled py-3'>
                        <li> 10 users included</li>
                        <li>10 Gb of storage</li>
                        
                        <li>Priority email support</li>
                        <li>Help center access</li>
                        </ul>
                        <button className='btn btn-success text-white btn-lg  w-100 btn-outline-success'>Sign up</button>
                </div>
            </div>
        </div>

    </div>
<h2 className='text-center fw-bold my-5'> Compare prices</h2>
<div className=''>
    <table className='table text-center'>
        <thead>
            <tr>
                <th style={{width: "34%"}}></th>
                <th style={{width: "22%"}}>1</th>
                <th style={{width: "22%"}}>2</th>
                <th style={{width: "22%"}}>3</th>

            </tr>
        </thead>
        <tbody>
            <tr>
                <th> public</th>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td>&#10003;</td>
            </tr>
            <tr>
            <th> public</th>
                <td>&#10003;</td>
                <td>&#10003;</td>
                <td>&#10003;</td>

            </tr>
        </tbody>

    </table>

</div>


</main>
    );
}
export default Pricing;