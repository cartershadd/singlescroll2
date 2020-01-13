import React, {Component} from 'react';
import MerryGoRound from "./merryGoRound";
import MiddleCard from "./MiddleCard";
import Footer from "./Footer";

class Container extends Component {
    render() {
        return (
            <div className="tupperware">
                <MerryGoRound/>
                <MiddleCard/>
                <Footer/>
            </div>
        );
    }
}

export default Container;