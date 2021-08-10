import { header } from '../js/header';
import Image from 'next/image';
import Link from 'next/link';
import logo from "../images/logo.png";
import React from "react"

class Header extends React.PureComponent {
  componentDidMount() {
    header()
  }

  render() {
    return (
      <header id={`${this.props.originPage}-page`} className="main-header">
        <div className="logo">
          <Link href="/">
            <a className="site-logo-link">
              <Image className="site-logo" width="200" height="70" layout="fixed" src={logo} alt="Wolf River Psychology" />
            </a>
          </Link>
        </div>

        <input type="checkbox" id="menu-btn" className="menu-btn" />
        <label htmlFor="menu-btn" className="menu-icon">
          <span className="menu-icon__line"></span>
        </label>
        <nav className="nav-links">
          <ul>
            <li className="nav-link">
              <Link href="/professional-profile">
                <a>
                  Profile
               </a>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="/about-psychotherapy">
                <a>
                  About
              </a>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="/services">
                <a>
                  Services
              </a>
              </Link>
            </li>
            <li className="nav-link">
              <Link href="/contact">
                <a>
                  Contact
              </a>
              </Link>
            </li>
          </ul>
        </nav>

      </header>
    )
  }
}

export default Header
