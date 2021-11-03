// imports, etc
import { Nav, NavItem } from '../components/Nav';
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; // BrowserRouter or HashRouter
import ReactDOM from 'react-dom';
// css
import '../styles/nav.scss';
import '../styles/content.scss'
import '../styles/global.scss';
// pages
import Home from './pages/Home';
// backend
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
            <main id="main" role="main">
                <Switch>
                    <Route path="/" component={Home} />
                    {/* TODO 404 PAGE */}
                    {/* <Route path="*" component={} />  */}
                </Switch>
            </main>
        </>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Index />
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
    import.meta.hot.accept();
}
