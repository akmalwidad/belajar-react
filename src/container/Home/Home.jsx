import React, { Component } from 'react'
// import YouTubeComp from '../../component/YoutubeComp/YouTubeComp'
// import Product from '../Product/Product'
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp'

export default class Home extends Component {
    state = {
        showComponent: true
    }

    componentDidMount() {
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 3000)
    }

    render() {
        return (
            <div>
                {/* <p>Youtube Component</p>
                <hr/>
                <YouTubeComp 
                time="3.14" 
                title="Hush Official Video"
                desc="50jt ditonton, 1 bulan yang lalu"
                />
                <YouTubeComp 
                time="3.10" 
                title="Hush Official Audio"
                desc="45jt ditonton, 2 bulan yang lalu"
                />
                <YouTubeComp 
                time="2.40" 
                title="Hush Official Lirik"
                desc="40jt ditonton, 3 bulan yang lalu"
                />
                <YouTubeComp 
                time="2.50" 
                title="Hush Official Remix"
                desc="30jt ditonton, 4 bulan yang lalu"
                />
                <YouTubeComp/> */}
                {/* <p>Counter</p>
                <hr/>
                <Product/> */}
                <p>LifeCycle</p>
                <hr />
                {
                    this.state.showComponent ? <LifeCycleComp /> : null
                }
            </div>
        )
    }
}
