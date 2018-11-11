import React from 'react'

import SearchBar from './SearchBar'

const Menu = () => {
    return (
        <div className="ui borderless menu">
            <div className="item">
                <h2>
                    <a className="header" href="/">LowMarketCap</a>
                </h2>
            </div>
            <div className="right menu">
                <div className="item">
                    <div className="ui icon input">
                        <SearchBar/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu