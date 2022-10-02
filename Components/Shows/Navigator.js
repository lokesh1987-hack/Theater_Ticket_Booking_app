import React from 'react'
import Head from 'next/head'

function Navigator({component}) {
    
    return (
        <div className="col col--1 col-sm-12 mt-1 col-lg-10 col-md-8  bg-dark text-dark  fs-4">
         {(component>=1) &&  <span className="text-light">Book Ticket &gt;</span>}
         {(component>=2) &&  <span className="text-light">&gt; Time Selected &gt;</span>}
         {(component>=3) &&  <span className="text-light">&gt; Seat Selected &gt;</span>}
         {(component>=4) &&  <span className="text-light">&gt; Final payment &gt;</span>}
         {(component>=5) &&  <span className="text-light">&gt; Booking Done &#128512;</span>}
        </div>
    )
}

export default Navigator