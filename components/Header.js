import { header } from '../assets/js/header';
import Image from 'next/image';
import logo from "../assets/images/logo.png";
import React from "react"

class Header extends React.PureComponent {
  componentDidMount() {
    header()
  }

  render() {
    return (
      <header id={`${this.props.originPage}-page`} className="main-header">
        <div className="logo">
          <a className="site-logo-link" href="/">
            <Image className="site-logo" width="200" height="70" layout="fixed" src={logo} alt="Wolf River Psychology" />
          </a>
        </div>

        <input type="checkbox" id="menu-btn" className="menu-btn" />
        <label htmlFor="menu-btn" className="menu-icon">
          <span className="menu-icon__line"></span>
        </label>
        <nav className="nav-links">
          <ul>
            <li className="nav-link">
              <a href="/professional-profile">
                Profile
             </a>
            </li>
            <li className="nav-link">
              <a href="/about-psychotherapy">
                About
            </a>
            </li>
            <li className="nav-link">
              <a href="/services">
                Services
            </a>
            </li>
            <li className="nav-link">
              <a href="/contact">
                Contact
            </a>
            </li>
          </ul>
        </nav>

      </header>
    )
  }
}

export default Header
