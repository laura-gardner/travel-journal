const Entry = (props) => {
    return (
        <>
        <div className="entry"> 
            <div className="entry--img">
                <img src={props.entry.imageUrl} alt={props.entry.location}/>
            </div>
            <div className="entry--details">
                <div className="entry--location">
                    <img src="../pin.png" className="pin-icon" alt=""/>
                    <span>{props.entry.location}</span>
                    <a href={props.entry.googleMapsUrl}>View on Google Maps</a>
                </div>
            <h3 className="entry--place">{props.entry.title}</h3>
            <p className="entry--dates">{props.entry.startDate} - {props.entry.endDate}</p>
            <p className="entry--description">{props.entry.description}</p>
            </div>
        </div>
        <div className="divider"></div>
        </>
        
    )
}

export default Entry;