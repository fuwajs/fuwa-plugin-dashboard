import React, { useState } from 'react';
import * as Icons from 'react-feather';
import type { Props } from '../src/util';

export interface NavProps extends Props {
    type: 'top' | 'bottom' | 'left' | 'right' | 'dynamic';
}

export interface NavItemProps {
    onClick?(): any;
    icon: keyof typeof Icons;
    link?: string;
    selected?: boolean;
    text: string;
}

export const Nav = ({ children, type }: NavProps) => {
    const [expanded, setExpanded] = useState(true);
    const Menu = Icons.Menu;
    return (
        <>
            <nav
                className={`nav nav-${type}`}
                aria-expanded={expanded}
                onClick={() => setExpanded(!expanded)}
            >
                <Menu className="nav-menu" />
                <ul className="nav-items">{children}</ul>
            </nav>
        </>
    );
};
export const NavItem = ({ link, onClick, selected, icon, text }: NavItemProps) => {
    const Icon = Icons[icon];

    return (
        <>
            <li className="nav-item" aria-current={selected ?? false}>
                <a href={link} onClick={onClick}>
                    <Icon />
                    <span>{text}</span>
                </a>
            </li>
        </>
    );
};
