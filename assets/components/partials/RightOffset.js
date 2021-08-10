import * as React from 'react';
import classes from '../../scss/modules/rightOffset.module.scss';

const RightOffset = ({ parent, children }) => {
  return (
    <>
      <article className={classes[parent]}>{ children } </article>
    </>
  )
};

export default RightOffset;
