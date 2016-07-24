import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <header className={classes.root}>
    <nav className={classes.nav}>
      <div className={classes.navGrouping}>
        <a href="" className={classes.active}>Portfolio</a>
        <a href="">About &amp; Contact</a>
        <span className={classes.divider}>//</span>
      </div>
      <div className={classes.navGrouping}>
        <a href="">Blog</a>
        <span className={classes.divider}>//</span>
      </div>
    </nav>
  </header>
)

export default Header
