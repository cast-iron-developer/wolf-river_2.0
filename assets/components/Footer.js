import * as React from 'react';
import Link from 'next/link';
import SingleColumn from './singleColumn';
import classes from '../scss/modules/footer.module.scss';

const Footer = () => {
  const currentYear = new Date();
  return (
    <>
      <footer className={classes.footer}>
        <SingleColumn sectionId="footer">

          <div className={classes.header}>
            <h6 className="h1">
              Wolf River <br />
              Psychological Services
            </h6>
            <p className="h3">In Memphis, Tennessee</p>
          </div>

          <div className={classes.navigation}>
            <ul className={classes.navList}>
              <li><Link href="/profile"><a>Professional Profile</a></Link></li>
              <li><Link href="/about"><a>About Psychotherapy</a></Link></li>
              <li><Link href="/services"><a>Services</a></Link></li>
              <li><Link href="/contact"><a>Contact</a></Link></li>
            </ul>
          </div>

          <div className={classes.odieBlurb}><p>© 2018–{currentYear.getFullYear()} | by <a href="https://www.novadev.cc">Sam O'Donnell</a></p></div>
        </SingleColumn>


      </footer>
    </>
  )
}

export default Footer;