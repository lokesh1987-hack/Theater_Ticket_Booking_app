import React, { useState } from 'react'
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import Billing_Page from '../../../Components/Shows/Billing_Page';
import Booking_Button from '../../../Components/Shows/Booking_Button';
import Movie_Description from '../../../Components/Shows/Movie_Description';
import Navigator from '../../../Components/Shows/Navigator';
import Seats from '../../../Components/Shows/seating_arrangement';
import Shows from '../../../Components/Shows/Shows';

export async function getStaticPaths() {
    const res = await fetch('http://localhost:3000/api/Movies')
    const data = await res.json()

    const paths = data.map((item) => {
        return {
            params: {
                movie_id: item._id.toString()
            }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {

    const id = context.params.movie_id

    const res = await fetch(`http://localhost:3000/api/Movies/${id}`)
    const movies_show = await res.json()

    return {
        props: {
            movies_show,
        },
    }
}

function Movie({ movies_show }) {

    const [component, setComponent] = useState(0)
    const [userData, setUserData] = useState({
        timing : "",
        numberOfSeats : 0,
        seats :[],
    })

    const componentHandler = (e) => {
        setComponent(e)
        console.log(userData)
    }
    const UserDatafunc =(e)=>{
        const[A , B ] = e
        switch (B) {
            case "Show_time":
                setUserData({...userData,timing:A})
                break;
            case "number_Of_Ticket":
                setUserData({...userData,numberOfSeats:A})
                break;
            default:
                console.log("switch",[{...A}])
                break;
        }
    }

    const { _id, Ontheater, age, categaries, describe, img, language, movieName, seating_arrangement, shows } = movies_show


    return (
        <div className="container-sm mt-4" >
            <Container>
                <h1 className="text-center">Book Your Seats</h1>
                <Movie_Description details={[movieName, img, describe, categaries, age]} />
            
            <div className="row m-2">
                <div className="col col-lg-2 col-md-2 bg-light pt-2">
                    {component ? <Button onClick={() => { setComponent(component - 1) }} >Back_</Button> : <Button disabled>Back_</Button>}
                </div>
                <Navigator component={component} />
            </div>
            

            <div className=" border " style={{ height: "auto",padding:"0px,0px" }} >
                {/* <div className="row row-cols-4 justify-content-center border align-items-center mb-5" style={{height:"20rem"}} > */}

                {(component == 0) && <Booking_Button componentHandler={componentHandler} />}
                {Ontheater ?
                    <div>
                        {(component == 1) && <Shows shows={shows} componentHandler={componentHandler} UserDatafunc={UserDatafunc} userData={userData} />}
                        {(component == 2) && <Seats seating_arrangement={seating_arrangement} UserDatafunc={UserDatafunc} componentHandler={componentHandler} userData={userData} />}
                        {(component == 3) && <Billing_Page />}
                    </div> : <h1>Sorry, This is not on Theater </h1>
                }

            </div>
            </Container>
        </div>
    )
}

export default Movie