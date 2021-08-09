import * as React from 'react';
import classes from '../assets/scss/modules/offsetColumns.module.scss';

const OffsetColumns = ({ sectionId, children }) => {
  return (
    <section id={classes[sectionId]} className={classes.offset}>
      {children}
    </section>
  )
}

export default OffsetColumns;