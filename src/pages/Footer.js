import React, {Component} from 'react';
import ScrollableAnchor from 'react-scrollable-anchor';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef()   // Create a ref object
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <ScrollableAnchor id={"footer"}>
                <footer className="button-group">
                    <a onClick={() => this.componentDidMount()} className="glow-on-hover btn-small">
                        Hover!
                    </a>
                </footer>
            </ScrollableAnchor>
        );
    }
}

export default Footer;