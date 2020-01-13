import React, {Component} from 'react';
import {Row, Col, Card, Icon, CardTitle} from 'react-materialize';
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
            <Row>
                <Col
                    m={6}
                    s={12}
                >
                    <ScrollableAnchor id={"middle"}>
                        <Card
                            actions={[
                                <a key="1" onClick={this.componentDidMount()} href="#">Back To Top</a>
                            ]}

                            header={<CardTitle image="/img/fractal1.png">Card Title</CardTitle>}
                        >
                            Cupcake ipsum dolor.
                            Sit amet cotton candy pie caramels carrot cake sesame snaps marshmallow.
                            Macaroon chocolate bar oat cake.
                        </Card>
                    </ScrollableAnchor>
                </Col>
            </Row>
        );
    }
}

export default MiddleCard;