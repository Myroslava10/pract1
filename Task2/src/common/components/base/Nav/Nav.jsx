import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
    { to: "/", label: "Home" },
    { to: "/aboutUs", label: "About us" },
    { to: "/comingSoon", label: "Features" },
    { to: "/pricing", label: "Pricing" },
    { to: "/comingSoon", label: "FAQ" },
    { to: "/comingSoon", label: "Blog" }
];

export const Nav = ({ className, activeClassName }) => {
    const renderNavLink = ({ to, label }) => (
        <li key={to}>
            <NavLink
                to={to}
                className={({ isActive }) => (isActive ? activeClassName : undefined)}
            >
                {label}
            </NavLink>
        </li>
    );

    return (
        <nav className={className}>
            <ul>
                {navItems.map(renderNavLink)}
            </ul>
        </nav>
    );
};
