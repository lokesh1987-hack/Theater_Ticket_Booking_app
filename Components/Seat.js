
function Seat({seat, i, UserDatafunc, userData, handler}) {
    console.log("seat",seat)
    return (
        <div className=" d-md-flex" key={i} >
            <button className="btn rounded-square bg-light me-3" style={{ width: "2rem" }}>{seat && seat.row}</button>
            <span className=" ms-3" >
                { seat.column.map((colunm, i) => {
                    const { column_no, status, visibility,flag } = colunm
                    return (
                            <button key={i} className={`btn rounded-square m-1 ${(status === "Booked" || flag === true ) ? "bg-success" : "bg-light"}`} style={{ visibility: visibility }} onClick={() => { handler(colunm) }} >{column_no}</button>
                    )
                })}
            </span>
        </div>
    )
}

export default Seat