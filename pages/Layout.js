// Components.
import Pages from "./Pages";
import React from "react";
import Sidebar from "./Sidebar";

// Stores.
import SecurityStore from "../stores/Security";
import RouteStore from "../stores/Route";

//
export default class Layout extends React.Component {

    get page () {
        const { componentName, componentParams } = this.state;
        const Component = Pages[this.state.componentName] || Pages["NotFound"];

        console.log(Pages);
        return <Component {...componentParams} />;
    }

    constructor (props) {
        super(props);
        this.state = {
            componentName: "Landing",
            componentParams: {},
            isSignedIn: false
        };
    }

    componentDidMount () {
        RouteStore.on(this);
        SecurityStore.on(this);
    }

    componentDidUnount () {
        RouteStore.off(this);
        SecurityStore.off(this);
    }

    onChange (key, value) {
        switch (key) {
            case "Route.path": {
                if (Boolean(value)) {
                    this.setState({ componentName: value.toLowerCase() });
                } else if (this.state.isSignedIn) {
                    this.setState({ componentName: "home" });
                } else {
                    this.setState({ componentName: "landing" });
                }
            } break;
            case "Security.isSignedIn": {
                this.setState({ isSignedIn: value });
            } break;
        }
    }

    render () {
        return (
            <div className="container">
                <div className="row">
                    <div className="column">
                        <Sidebar />
                    </div>
                    <div className="column column-75">
                        {this.page}
                    </div>
                </div>
            </div>
        );
    }
}
