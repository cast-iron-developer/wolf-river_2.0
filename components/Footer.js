import * as React from 'react';
import SingleColumn from './singleColumn';
import classes from '../assets/scss/modules/footer.module.scss';

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
              <li><a href="/professional-profile">Professional Profile</a></li>
              <li><a href="/about-psychotherapy">About Psychotherapy</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className={classes.odieBlurb}><p>© 2018–{currentYear.getFullYear()} | by <a href="https://www.novadev.cc">Sam O'Donnell</a></p></div>
        </SingleColumn>


      </footer>
    </>
  )
}

export default Footer;