import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Meals from './Meals';

function Billing_Page() {


    
    return (
        <div>
            <div className='bg-light text-dark p-2'>
                <h3 >Movie Name </h3>
            </div>
            <div class="row g-0 p-3">
                <div class="col-sm-6 col-md-8">
                    <div className='border me-2'>
                        <div className='text-center'>
                            <h3>Grab a bite!</h3>
                            <p>Prebook Your Meal and Save More!</p>
                        </div>
                        <div className='m-1' style={{ overflow: "scroll", overflowY: "visible", height: "500px" }} >
                            <Meals />
                        </div>
                    </div>
                </div>
                <div className="col-sm-6 col-md-4">
                    <div class=" border p-2">
                        <h5 className="text-center " >
                            BOOKING SUMMARY
                        </h5>
                        <div>
                            <div className='d-flex justify-content-between p-2'>
                                <p> PL-D7,D6 ( 2 Tickets )</p>
                                <p>Rs. 260.00 </p>
                            </div>
                            <div className='d-flex justify-content-between p-2'>
                                <p> PL-D7,D6 ( 2 Tickets )</p>
                                <p>Rs. 260.00 </p>
                            </div>
                            <hr className='hr' />
                            <div className='d-flex justify-content-between p-2'>
                                <p> PL-D7,D6 ( 2 Tickets )</p>
                                <p>Rs. 260.00 </p>
                            </div><div className='d-flex justify-content-between p-2 bg-light'>
                                <p> Amount Payable</p>
                                <p>Rs. 337.40 </p>
                            </div>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <Button variant="danger" className='d-flex w-100 justify-content-between '>
                            <p> Amount Payable :Rs. 337.40</p>
                            <p>Proceed </p>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Billing_Page