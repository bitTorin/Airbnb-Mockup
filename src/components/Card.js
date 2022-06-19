import React from "react"
import katie from "../images/katie-zaferes.png"
import star from "../images/star-icon.png"

export default function Card(props) {
    return (
        <div className="card">
            <img className="cardImage" src={katie}/>
            <div className="cardStats">
                <img className="starIcon" src={star} />
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}) • </span>
                <span className="grey">{props.country}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold">From ${props.price}</span> / per person</p>
        </div>
    )
}