import React from 'react'
import {connect} from 'react-redux'

const Menu = () => {
    return (
        <div className="ui borderless menu">
            <div className="item">
                <h2>
                    <a class="header" href="/">LowMarketCap</a>
                </h2>
            </div>
            <div className="right menu">
                <div className="item">
                    <div className="ui icon input">
                        <input placeholder="Search" type="text"/>
                        <i className="search icon"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

const ConnectedMenu = connect(null)(Menu)

export default ConnectedMenu