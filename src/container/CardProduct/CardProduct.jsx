import React, { Component } from 'react'

export default class CardProduct extends Component {
    state = {
        order: 1
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () => {
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })
    }

    handleMinus = () => {
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, ()=> {
                this.handleCounterChange(this.state.order);
            })
        }
    }

    render() {
        return (
                <div className="card">
                    <div className="img-thumb-prod">
                        <img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2019/2/18/3008606/3008606_5af467ae-3602-410b-bc03-60035d876310_700_700.jpg" alt="" />
                    </div>
                    <div className="product-title">Sirup</div>
                    <div className="product-price">Rp 30,000</div>
                    <div className="counter">
                        <button className="minus" onClick={this.handleMinus} >-</button>
                        <input type="text" value={this.state.order} />
                        <button className="plus" onClick={this.handlePlus}>+</button>
                    </div>
                </div>
        )
    }
}
