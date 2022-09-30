import React, { useState } from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Seats from './Seats';

function seating_arrangement({ seating_arrangement, componentHandler, userData, UserDatafunc }) {

    console.log("seats", seating_arrangement)
    return (
        <div className="" >
            <Row xs={1} ms={1} md={1} className="p-2">
                <Col className="mb-3">
                    {seating_arrangement.map((item,i) => {
                        console.log(item)
                        const { area, price, seats } = item
                        return (
                            <>
                                <Seats key={i} seats={seats} area={area} price={price} UserDatafunc={UserDatafunc} userData={userData}/>
                            </>
                        )
                    })}
                </Col>
            </Row>
            <div className="mt-3 mb-4 text-center">
                <button className="btn bg-danger text-center" onClick={()=>{componentHandler(3)}} >Pay Now</button>
            </div>
        </div>
    )
}

export default seating_arrangement