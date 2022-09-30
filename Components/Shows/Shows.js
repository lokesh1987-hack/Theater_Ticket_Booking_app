import React from 'react'
import { Card, Col, Row } from 'react-bootstrap';
import Tickets from './Tickets';

function Shows({ shows, componentHandler, UserDatafunc , userData}) {
    return (
        <>
        <Row xs={2} md={3} ms={4} className="mt-2 p-3" >
            {shows.map((item) => {
                return (
                    <Col className="mb-3" key={item}>
                        <Card className="text-center fs-1">
                            <button className="btn bg-success fs-6 fw-bolder text" onClick={()=>UserDatafunc([item, 'Show_time'])}>
                                {item}
                            </button>
                        </Card>
                    </Col>
                )
            })}
        </Row>
        <hr />
        <Tickets componentHandler={componentHandler} UserDatafunc={UserDatafunc} userData={userData}/>
        </>
    )
}

export default Shows