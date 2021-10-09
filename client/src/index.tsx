import { Nav, NavItem } from '../components/Nav';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import '../styles/nav.scss';
import '../styles/global.scss';
const ws = new WebSocket('ws://localhost:9094');

const Index = () => {
    const navItems = [
        <NavItem icon="Home" text="Home" selected={true} />,
        <NavItem icon="Cpu" text="Bot Status" />,
        <NavItem icon="Server" text="Guilds" />,
        <NavItem icon="User" text="User info" />,
        <NavItem icon="Inbox" text="Commands" />,
        <NavItem icon="Settings" text="Bot settings" />,
    ];

    return (
        <>
            <Nav type="left">{...navItems}</Nav>
        </>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <Index />
    </React.StrictMode>,
    document.getElementById('root')
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
    import.meta.hot.accept();
}
