import { Nav, NavItem } from '../components/Nav';
import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/nav.scss';
import '../styles/global.scss';
const ws = new WebSocket('ws://localhost:9094');

const Index = () => {
    const navItems = [<NavItem icon="User" text="User info" />];
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
