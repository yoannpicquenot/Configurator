import React from 'react';

import { Drawer } from '@material-ui/core';

import './Sidebar.css';

export class Sidebar extends React.Component {
    render() {
        return (
            <Drawer
                open
                variant="permanent"
                className="Sidebar">
                test
            </Drawer>
        );
    }
}
