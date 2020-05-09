import React from 'react'
import classes from './Rate.module.css'

const Rate = props => (
  <tr className={classes.tr}>

    <td>{props.name}</td>
    <td>{props.rate}</td>
    <td>{props.cc}</td>

  </tr>
)

export default Rate