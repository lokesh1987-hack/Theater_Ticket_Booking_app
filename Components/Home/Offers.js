import React from 'react'
import { Card, Button } from 'react-bootstrap';

function Offers() {
    return (
        <div>
            <div className="bg-danger p-3">
                <h1>Book Ticket</h1>
            </div>
            <div className="mt-3">
                <Card className="mx-5">
                    <Card.Header className="bg-dark text-light" as="h3">Offer Zone</Card.Header>
                    <Card.Body>
                        <Card.Title>Special title treatment</Card.Title>
                        <Card.Text>
                            With supporting text below as a natural lead-in to additional content.
                        </Card.Text>
                        <Button variant="primary">Term and Condition</Button>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Offers