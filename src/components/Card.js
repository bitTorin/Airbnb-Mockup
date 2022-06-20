import React from "react"
import star from "../images/star-icon.png"

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online"){
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText && <div className="cardBadge">{badgeText}</div>}
            <img className="cardImage" src={`../images/${props.coverImg}`}/>
            <div className="cardStats">
                <img className="starIcon" src={star} />
                <span>{props.stats.rating}</span>
                <span className="grey">({props.stats.reviewCount}) • </span>
                <span className="grey">{props.location}</span>
            </div>
            <p className="cardName">{props.title}</p>
            <p className="cardPrice"><span className="bold">From ${props.price}</span> / per person</p>
        </div>
    )
}