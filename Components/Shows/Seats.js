import React, { useState } from 'react'
import Seat from '../Seat'

function Seats({ seats, price, area, UserDatafunc, userData }) {

    const [bookedSeat, setBookedSeat] = useState()
    const [chairs, setChairs] = useState(seats)
    const [selectedSeat, setSelectedSeat] = useState([])

    const arr = []
    // const arr2 = []


    function handler(e) {
        arr.push(e)

        if(arr.length > userData.numberOfSeats){
            arr.shift()
            arr.map((item)=>{
                item.flag = true
            })
            setSelectedSeat(arr)
            
        }
        console.log(selectedSeat)

          
    }

    chairs?.map((item) => {
        item.column.map((item) => {
            item.flag = false
        }
        )
    })

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center bg-light p-1 mt-3 mb-3">
                <h6 style={{ margin: "0px" }}>{area} || </h6>
                <p style={{ margin: "0px" }} >Rs : {price}</p>
            </div>
            <hr style={{ margin: "0px" }} />
            {chairs && chairs.map((seat, i) => {
                return (
                    <div key={i} >
                        <Seat seat={seat} key={i} UserDatafunc={UserDatafunc} userData={userData} handler={handler} />
                    </div>
                )
            })}

        </div>

    )
}

export default Seats