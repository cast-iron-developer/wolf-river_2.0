import React from 'react'

import classes from '../../scss/modules/blockquote.module.scss';

const Blockquote = (props) => {
  return (
    <article className={classes.BlockquoteContainer}>
      <blockquote className={classes.Blockquote}>
        <p>{props.children}</p>
        {props.attribution ? <p className={classes.Caption}>&mdash; {props.attribution}</p> : null}
      </blockquote>
    </article>
  )
}

export default Blockquote;