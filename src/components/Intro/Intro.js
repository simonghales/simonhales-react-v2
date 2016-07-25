import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Intro.scss'
var    FontAwesome = require('react-fontawesome');

export const Intro = () => (
  <section className={classes.root}>
    <div>
      <h3 className={classes.authorTitle}>Simon Hales</h3>
      <h1 className={classes.mainTitle}>Front End Developer</h1>
      <h2 className={classes.subTitle}>specialised in <strong>AngularJS</strong> and <strong>ReactJS</strong></h2>
      <h4 className={classes.contactLinks}>
        <a className={classes.social} href="" target="_blank">
          <FontAwesome name='twitter' />
        </a>
        <a className={classes.social} href="" target="_blank">
          <FontAwesome name='linkedin' />
        </a>
        <a className={classes.social} href="" target="_blank">
          <FontAwesome name='github' />
        </a>
        <a className={classes.email} href="mailto:simonghales@gmail.com">simonghales@gmail.com</a>
      </h4>
    </div>
  </section>
)

export default Intro
