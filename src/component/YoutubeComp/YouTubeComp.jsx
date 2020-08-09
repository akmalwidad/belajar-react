import React from 'react'
import './YouTubeComp.css'

export default function YouTubeComp(props) {
    return (
        <div className="youtube-wrapper">
            <div className="img-tumb">
                <img src="https://placeimg.com/200/150/tech" alt="" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YouTubeComp.defaultProps = {
    time: "00.00",
    title: "Yellow Claw & Weird Genius",
    desc: "100jt ditonton, 6 bulan yang lalu"
}
