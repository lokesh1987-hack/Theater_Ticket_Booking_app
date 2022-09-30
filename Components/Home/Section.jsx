
import React, { useEffect, useState } from 'react'
import { Card, Button, Row, Col } from 'react-bootstrap';
import Offers from './Offers';
import Link from 'next/link'


function Section({ movies_shows }) {
    return (
        <div className="App mt-4">
            <Offers />
            <div>
                <h1>All Albums</h1>
            </div>
            <Row xs={1} md={3} ms={3} className="p-4 pt-1">
                {movies_shows?.map((data) => {
                    const { _id, movieName, img, describe, Ontheater } = data
                    console.log(_id)
                    return (
                        <Col className="p-2 m-5 shadow mx-auto" key={_id}>
                            <Card>
                                <Card.Img variant="top" src={img} />
                                <Card.Body>
                                    <Card.Title>{movieName}</Card.Title>
                                    <Card.Text>
                                        {describe}
                                    </Card.Text>
                                    {(Ontheater === true) ? <Link href={`/Show/movie/${_id}`}><a  className="btn btn-primary"  style={{textDecoration: 'none'}}>Book Ticket</a></Link> : <Button variant="danger" >Comming Soon</Button>}

                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default Section
