import React, {Component} from 'react';

class NavBar extends Component {
    render() {
        return (
            <div className="nav">
                <a href="#carousel">Go here</a>
                <a href="#middle">Go there</a>
                <a href="#footer">Go away!</a>
            </div>
        );
    }
}

export default NavBar;