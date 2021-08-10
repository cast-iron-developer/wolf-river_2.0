import * as React from 'react';
import classes from '../scss/modules/fullwidthcolumn.module.scss';

const FullWidthColumn = ({ children, sectionId }) => (
  <section id={classes.sectionId} className={classes.fullWidthCol}>
    {children}
  </section>
)

export default FullWidthColumn;