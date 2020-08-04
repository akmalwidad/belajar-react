import React from 'react'

export default function Post(props) {
    return (
        <div>
            <div className="post">
                <div className="img-thumb">
                    <img src="https://placeimg.com/200/150/tech" alt="" />
                </div>
                <div className="content">
                    <p className="title">{props.title}</p>
                    <p className="desc">{props.desc}</p>
                    <button className="remove" onClick={props.remove}>Remove</button>
                </div>
            </div>
        </div>
    )
}
