import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import Product from '../pages/Product/Product'
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp'
import BlogPost from '../pages/BlogPost/BlogPost'
import './Home.css'
import YoutubePage from '../pages/YoutubeCompPage/YoutubePage'

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
            <Router>
                <div className="navigation">        
                    <Link to="/">Halaman Blogpost</Link>
                    <Link to="/product">Halaman Product</Link>
                    <Link to="/lifecycle">Halaman LifeCycleComp</Link>
                    <Link to="/youtube-comp">Halaman Youtube</Link>
                </div>            

                <Route path="/" exact component={BlogPost} />
                <Route path="/product" component={Product} />
                <Route path="/lifecycle" component={LifeCycleComp} />
                <Route path="/youtube-comp" component={YoutubePage} />
            </Router>
        )
    }
}
