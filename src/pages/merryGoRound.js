import React, {Component} from 'react';
import {Carousel} from 'react-materialize';
import ScrollableAnchor from 'react-scrollable-anchor';


class MerryGoRound extends Component {
    render() {
        return (
            <ScrollableAnchor id={"carousel"}>
                <Carousel
                    images={[
                        '/img/fractal1.png',
                        '/img/fractal3.png',
                        '/img/fractal7.png',
                        '/img/fractal10.png',
                        '/img/fractal6.png'
                    ]}
                    options={{
                        dist: -50,
                        duration: 200,
                        fullWidth: false,
                        indicators: false,
                        noWrap: false,
                        numVisible: 5,
                        onCycleTo: null,
                        padding: 0,
                        shift: 0
                    }}
                />
            </ScrollableAnchor>
        );
    }
}

export default MerryGoRound;