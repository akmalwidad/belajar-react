import React, { Component, Fragment } from 'react'
import './Product.css'
import CardProduct from '../CardProduct/CardProduct'

export default class Product extends Component {
    state = {
        order: 1
    }

    handleCounterChange = (newValue) => {
        this.setState({
            order: newValue
        })
    }

    render() {
        return (
            <Fragment>
                <h1>Learn State n SetState</h1>
                <hr/>
                <div className="header">
                    <div className="logo">
                        <img src="https://image.flaticon.com/icons/svg/684/684134.svg" alt="" />
                    </div>
                    <div className="troley">
                        <img src="https://image.flaticon.com/icons/svg/3081/3081986.svg" alt="" />
                        <div className="count">{this.state.order}</div>
                    </div>
                </div>
                <CardProduct onCounterChange={ (value)=> this.handleCounterChange(value)} />
            </Fragment>
        )
    }
}
