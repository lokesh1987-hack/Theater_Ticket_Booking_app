import React, { useState } from 'react'
import Seat from '../Seat'

function Seats({ seats, price, area, UserDatafunc, userData }) {

    const [bookedSeat, setBookedSeat] = useState([])
    const [chairs, setChairs] = useState(seats)
    const [selectedSeat, setSelectedSeat] = useState(null)
    const [reload, setReload] = useState("")

    const arr = []

    function handler(e) {
        arr.push(e)
        console.log(userData.numberOfSeats)
        if (arr.length > userData.numberOfSeats) {
            arr.shift()
            UserDatafunc(arr,"Booked_seat")
            console.log("Shift arr", arr)
            chairs.map((item) => {
                item.column.map((col) => {
                    const { row, column_no } = col
                    arr.map((selected, i) => {
                        if (selected.row === row && selected.column_no === column_no) {
                            console.log(col)
                            col.flag = true
                        }
                        else {
                            col.flag = false

                        }
                    })
                })
            })
            console.log("chairs1", chairs)
        }
        else if(arr.length == userData.numberOfSeats) {
            console.log("Shift arr", arr)
            chairs.map((item) => {
                item.column.map((col) => {
                    const { row, column_no } = col
                    arr.map((selected, i) => {
                        if (selected.row === row && selected.column_no === column_no) {
                            console.log(col)
                            col.flag = true
                        }
                        else {
                            col.flag = false

                        }
                    })
                })
            })
            
            // const data = chairs
            UserDatafunc(arr,"Booked_seat")
            console.log("chairs", chairs)
        }
        else
        {
            console.log("Please select all seat first")
        }

        // console.log("selectedSeat",selectedSeat)           
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