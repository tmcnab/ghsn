import React from "react";

export default class Sidebar extends React.Component {

    render () {
        return (
            <div>
                <h1>GHSN</h1>
                <ul className="horizontal">
                    <li><a href="#/">Feed</a></li>
                    <li><a href="#/users">Users</a></li>
                    <li><a href="#/orgs">Orgs</a></li>
                    <li><a href="#/settings">Settings</a></li>
                </ul>
            </div>
        );
    }

}
