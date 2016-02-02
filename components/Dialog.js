import Display from "./Display";
import React from "react";

const Styles = {
    Dialog: {
        BACKGROUND: {
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            height: "100%",
            left: 0,
            position: "fixed",
            top: 0,
            width: "100%",
            zIndex: 1000
        },
        CHILDREN: {
            margin: "2rem 2rem 0 2rem"
        },
        FOOTER: {
            backgroundColor: "#CCC",
            padding: "1rem 1rem 0 1rem"
        },
        FOREGROUND: {
            backgroundColor: "#FFF",
            border: "1px solid #CCC",
            borderRadius: "4px",
            left: "25%",
            position: "fixed",
            top: "5rem",
            width: "75rem",
            zIndex: 1001
        }
    }
};

/*
**
*/
export default class Dialog extends React.Component {

    static get defaultProps () {
        return {
            resolvedLabel: "okay"
        };
    }

    static get propTypes () {
        return {
            children: React.PropTypes.any.isRequired,
            onRejected: React.PropTypes.func,
            onResolved: React.PropTypes.func.isRequired,
            rejectedLabel: React.PropTypes.string,
            resolvedLabel: React.PropTypes.string
        };
    }

    constructor (props) {
        if (Boolean(props.onRejected) && !Boolean(props.rejectedLabel)) {
            throw new Error(`must supply prop "rejectedLabel" if prop "onRejected" supplied`);
        } else {
            super(props);
        }
    }

    render () {
        return (
            <div>
                <div style={Styles.Dialog.BACKGROUND} />
                <div style={Styles.Dialog.FOREGROUND}>
                    <div style={Styles.Dialog.CHILDREN}>{this.props.children}</div>
                    <footer style={Styles.Dialog.FOOTER}>
                        <Display test={Boolean(this.props.onRejected)}>
                            <button onClick={this.props.onRejected}>
                                {this.props.rejectedLabel}
                            </button>
                        </Display>
                        <button onClick={this.props.onResolved}>
                            {this.props.resolvedLabel}
                        </button>
                    </footer>
                </div>
            </div>
        );
    }

}
