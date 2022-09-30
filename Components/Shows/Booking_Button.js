import React from 'react'
import { Button, Row, Col } from 'react-bootstrap';
import Tickets from './Tickets';


function Booking_Button({componentHandler}) {

    return (
        <Row xs={1} md={1} ms={1} className="mt-5">
            <Col className="mb-3 text-center align-middle" >
                <Button variant="success outline-dark" className="w-50" onClick={()=>componentHandler(1)} >Book Ticket</Button>
            </Col>
        </Row>
    )
}

export default Booking_Button