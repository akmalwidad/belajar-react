import React from 'react'

export default function Post(props) {
    return (
        <div>
            <div className="post">
                <div className="img-thumb">
                    <img src="https://placeimg.com/200/150/tech" alt="" />
                </div>
                <div className="content">
                    <p className="title">{props.data.title}</p>
                    <p className="desc">{props.data.body}</p>
                    <button className="update" onClick={()=> props.update(props.data)}>Update</button>
                    <button className="remove" onClick={()=> props.remove(props.data.id)}>Remove</button>
                </div>
            </div>
        </div>
    )
}
