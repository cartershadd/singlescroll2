import React, {Component} from 'react';
import {Row, Col, Card, CardTitle} from 'react-materialize';
import ScrollableAnchor from 'react-scrollable-anchor';

class MiddleCard extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef()   // Create a ref object
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (

                    <ScrollableAnchor id={"middle"}>
                        <div className="card-row">
                            <Card
                                actions={[
                                    <a key="1" onClick={this.componentDidMount()} href="#">Back To Top</a>
                                ]}

                                header={<CardTitle image="/img/fractal1.png"></CardTitle>}
                            >
                                Cupcake ipsum dolor.
                                Sit amet cotton candy pie caramels carrot cake sesame snaps marshmallow.
                                Macaroon chocolate bar oat cake.
                            </Card>

                            <Card
                                actions={[
                                    <a key="1" onClick={this.componentDidMount()} href="#">Back To Top</a>
                                ]}

                                header={<CardTitle image="/img/fractal3.png"></CardTitle>}
                            >
                                Cupcake ipsum dolor.
                                Sit amet cotton candy pie caramels carrot cake sesame snaps marshmallow.
                                Macaroon chocolate bar oat cake.
                            </Card>

                            <Card
                                actions={[
                                    <a key="1" onClick={this.componentDidMount()} href="#">Back To Top</a>
                                ]}

                                header={<CardTitle image="/img/fractal6.png"></CardTitle>}
                            >
                                Cupcake ipsum dolor.
                                Sit amet cotton candy pie caramels carrot cake sesame snaps marshmallow.
                                Macaroon chocolate bar oat cake.
                            </Card>

                            <Card
                                actions={[
                                    <a key="1" onClick={this.componentDidMount()} href="#">Back To Top</a>
                                ]}

                                header={<CardTitle image="/img/fractal7.png"></CardTitle>}
                            >
                                Cupcake ipsum dolor.
                                Sit amet cotton candy pie caramels carrot cake sesame snaps marshmallow.
                                Macaroon chocolate bar oat cake.
                            </Card>

                            <Card
                                actions={[
                                    <a key="1" onClick={this.componentDidMount()} href="#">Back To Top</a>
                                ]}

                                header={<CardTitle image="/img/fractal10.png"></CardTitle>}
                            >
                                Cupcake ipsum dolor.
                                Sit amet cotton candy pie caramels carrot cake sesame snaps marshmallow.
                                Macaroon chocolate bar oat cake.
                            </Card>
                        </div>
                    </ScrollableAnchor>

        );
    }
}

export default MiddleCard;