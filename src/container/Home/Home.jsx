import React, { Component } from 'react'
import YouTubeComp from '../../component/YoutubeComp/YouTubeComp'
import Product from '../Product/Product'
import LifeCycleComp from '../LifeCycleComp/LifeCycleComp'
import BlogPost from '../BlogPost/BlogPost'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './Home.css'

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
                </div>            

                <Route path="/" exact component={BlogPost} />
                <Route path="/product" component={Product} />
                <Route path="/lifecycle" component={LifeCycleComp} />
            </Router>
        )
    }
}
