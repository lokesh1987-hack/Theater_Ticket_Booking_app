import React from 'react'
import Head from 'next/head'

function Navigator({component}) {
    
    return (
        <div className="col bg-dark text-dark pt-1 fs-4">
         {(component>=1) &&  <span className="text-light">Book Ticket &gt;</span>}
         {(component>=2) &&  <span className="text-light">&gt; Time Selected &gt;</span>}
         {(component>=3) &&  <span className="text-light">&gt; Seat Selected &gt;</span>}
         {(component>=4) &&  <span className="text-light">&gt; Final payment &gt;</span>}
         {(component>=5) &&  <span className="text-light">&gt; Booking Done &#128512;</span>}
        </div>
    )
}

export default Navigator