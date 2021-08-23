import { header } from "../js/header";
import Image from "next/image";
import Link from "next/link";
import logo from "../images/logo.png";
import React, { useEffect, useState } from "react";

const Header = ({originPage}) => {
    // https://stackoverflow.com/questions/29725828/update-style-of-a-component-onscroll-in-react-js
    const [offset, setOffset] = useState(0);
    let body, menu_btn, header;

    useEffect(() => {
        body = document.querySelector("body");
        menu_btn = document.querySelector("#menu-btn");
        header = document.querySelector('.main-header');

        window.onscroll = () => {
            setOffset(window.pageYOffset);
        };

        checkScrollOffset(offset);
    });

    const checkScrollOffset = (num) => {
        num > 10 ? header.classList.add('scrolled') : header.classList.remove('scrolled');
    };

    const toggleHeader = (e) => {
        !body.classList.contains("no-scroll")
            ? body.classList.add("no-scroll")
            : body.classList.remove("no-scroll");
    };

    const toggleMenuFromNav = (e) => {
        if (menu_btn.checked) {
            menu_btn.checked = false;
        }

        if (body.classList.contains("no-scroll")) {
            body.classList.remove("no-scroll");
        }
    };

    return (
        <header id={`${originPage}-page`} className="main-header">
            <div className="logo">
                <Link href="/">
                    <a className="site-logo-link">
                        <Image
                            className="site-logo"
                            width="190"
                            height="65"
                            src={logo}
                            alt="Wolf River Psychology"
                        />
                    </a>
                </Link>
            </div>

            <input
                type="checkbox"
                id="menu-btn"
                className="menu-btn"
                onClick={toggleHeader}
            />
            <label htmlFor="menu-btn" className="menu-icon">
                <span className="menu-icon__line"></span>
            </label>
            <nav className="nav-links">
                <ul>
                    <li className="nav-link">
                        <Link href="/professional-profile">
                            <a onClick={toggleMenuFromNav}>Profile</a>
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link href="/about-psychotherapy">
                            <a onClick={toggleMenuFromNav}>About</a>
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link href="/services">
                            <a onClick={toggleMenuFromNav}>Services</a>
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link href="/clients">
                            Clients
                        </Link>
                    </li>
                    <li className="nav-link">
                        <Link href="/contact">
                            <a onClick={toggleMenuFromNav}>Contact</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
