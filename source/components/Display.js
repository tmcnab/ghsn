import React from "react";


export default class Display extends React.Component {

    static get propTypes () {
        return {
            test: React.PropTypes.bool.isRequired
        };
    }

    render () {
        return this.props.test ? this.props.children : null;
    }
    
}
