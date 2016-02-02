import {User} from "../records";
import React from "react";


export default class UserPage extends React.Component {
    static propTypes = { model: React.PropTypes.instanceOf(User) }

    render () {
        return (
            <section>
                <h2>User: {this.props.model.givenName}</h2>
            </section>
        );
    }
}
