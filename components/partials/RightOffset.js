import * as React from 'react';
import classes from '../../assets/scss/modules/rightOffset.module.scss';

const RightOffset = ({ parent, children }) => {
  return (
    <>
      <article className={classes[parent]}>{ children } </article>
    </>
  )
};

export default RightOffset;
