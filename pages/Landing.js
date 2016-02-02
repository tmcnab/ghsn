import Dialog from "../components/Dialog";
import React from "react";


export default class LandingPage extends React.Component {

    onSubmit (event) {
        event.preventDefault();
        console.log("LandingPage", event);
    }

    render () {
        return (
            <div>
                <header>
                    <h2>Welcome</h2>
                </header>
                <section>
                    <p>Welcome to GHSN, a client-only github social network system.</p>
                    <div className="row">
                        <div className="column">Face</div>
                        <div className="column">Face</div>
                        <div className="column">Face</div>
                        <div className="column">Face</div>
                    </div>
                    <form action="/" className="row" method="post" onSubmit={this.onSubmit.bind(this)} style={{ marginTop: "3rem" }}>
                        <div className="column">
                            <input autoComplete="on" placeholder="GitHub Personal API Token" type="password" />
                        </div>
                        <div className="column">
                            <button>Go</button>
                        </div>
                        <div className="column">
                            <a className="button button-outline" href="">Need an API token? &rarr;</a>
                        </div>
                    </form>
                </section>
            </div>
        );
    }

}
