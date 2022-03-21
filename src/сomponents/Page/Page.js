import React from "react";
import clsx from "clsx";
import "./Page.scss";

export default function Page(props) {
    const { className, title, action, children, ...other } = props;

    return (
        <section className={clsx("Page", className)} {...other}>
            <header className="Page-header">
                <h1 className="Page-headerTitle">{title}</h1>
                <nav className="Page-headerAction">{action}</nav>
            </header>
            {children}
        </section>
    );
}
