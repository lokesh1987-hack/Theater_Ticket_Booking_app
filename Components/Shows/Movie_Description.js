import React from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

function Movie_Description({details}) {
  
    const [movieName, img, describe, categaries, age]  = details
    return (
        <Card className="text-center mx-auto m-5" >
            <Card.Img variant="top" className="m-5 mx-auto shadow p-5" style={{ width: 'auto', height: 'auto' }} src={img} />
            <Card.Body className="bg-dark text-light">
                <Card.Title>{movieName}</Card.Title>
                <hr />
                <Card.Text>
                    {describe}
                </Card.Text>
                <hr />
                <Card.Text>
                    Categaries  : {categaries}
                </Card.Text>
                <Card.Text>
                    Age  : {age}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Movie_Description