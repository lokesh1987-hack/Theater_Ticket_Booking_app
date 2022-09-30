import React from 'react'

function Tickets({componentHandler, UserDatafunc, userData}) {

  const n = 10
  const { timing, numberOfSeats } = userData
  return (
    <div className="container mb-3">
      <h1 className="fs-1 text-center">How Many Seats?</h1>
      <div >
      
        <div className="container m-3 d-sm-flex  bd-highlight  justify-content-center">
          {([...Array(n)]).map((e, i) => <button className="btn rounded-circle bg-light py-2 px-3 m-1" key={i} onClick={()=>UserDatafunc([i+1, 'number_Of_Ticket'])} >{i+1}</button>)}
        </div>
        <div className="text-center m-4">
          <button className={`btn bg-danger text-light ${timing && numberOfSeats ?"": "disabled"} `} onClick={() => { componentHandler(2) }} >Select Seats</button>
        </div>
      </div>
    </div>
  )
}

export default Tickets