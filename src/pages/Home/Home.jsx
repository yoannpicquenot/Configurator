import React from 'react';

import { Grow } from '@material-ui/core';

import './Home.css';

export class Home extends React.Component {
    welcome() {
        return (
            <div className="welcome-message">
                <Grow in={true}>
                    <h1>Welcome!</h1>
                </Grow>
                <Grow in={true} timeout={500}>
                    <p>
                        This website is a tool to help you create a configuration for a Minecraft Server.<br/>
                        You can save several settings sets. Your localstorage will be use to store the sets.<br/>
                        I hope you are okay with that.
                    </p>
                </Grow>
            </div>
        );
    }
    render() {
        return (
            <main className="Page HomePage">
                { this.welcome() }
            </main>
        );
    }
}
