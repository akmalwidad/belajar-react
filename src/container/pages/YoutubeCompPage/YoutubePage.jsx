import React, { Component } from 'react'
import YouTubeComp from '../../../component/YoutubeComp/YouTubeComp'


export default class YoutubePage extends Component {
    render(props) {
        return (
            <div>
                <h1>Belajar Props</h1>
                <hr/>
                <YouTubeComp time="10mnt" title="Hello Bro" desc="Ditonton 1jt umat manusia"/>
                <YouTubeComp time="5mnt" title="Hello Bro 2" desc="Ditonton 1jt umat manusia"/>
                <YouTubeComp time="6mnt" title="Hello Bro 3" desc="Ditonton 1jt umat manusia"/>
                <YouTubeComp time="7mnt" title="Hello Bro 4" desc="Ditonton 1jt umat manusia"/>
                <YouTubeComp/>
            </div>
        )
    }
}
