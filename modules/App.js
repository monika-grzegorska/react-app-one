import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
    render() {
        return (
            <div>
                <h1>Zamowienie</h1>
                <div>
                <ul role="nav">
                    <li><NavLink to="/stronaa">Strona A</NavLink></li>
                    <li><NavLink to="/stronab">Strona B</NavLink></li>
                    <li><NavLink to="/stronac">Strona C</NavLink></li>
                </ul>
                </div>
                <div>
                    {this.props.children}
                </div>
            </div>
        )
    }
})
