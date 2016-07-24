import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Skills.scss'

export const Skills = () => (
  <section className={classes.root}>
    <div className={classes.skillColumn}>
      <h3 className={classes.title}>Languages &amp; Frameworks</h3>
      <ul className={classes.skillsList}>
        <li>
          AngularJS
        </li>
        <li>
          ReactJS
        </li>
        <li>
          SASS + LESS
        </li>
        <li>
          Gulp + Grunt
        </li>
        <li>
          Bower + NPM
        </li>
        <li>
          ES6 / ES2015
        </li>
      </ul>
    </div>
    <div className={classes.skillColumn}>
      <h3 className={classes.title}>Roles &amp; Experience</h3>
      <ul className={classes.skillsList}>
        <li>
          Front End
        </li>
        <li>
          Web Design
        </li>
        <li>
          Web Applications
        </li>
        <li>
          Responsive Design
        </li>
        <li>
          Unit &amp; E2E Testing
        </li>
        <li>
          Web Optimisation
        </li>
      </ul>
    </div>
  </section>
)

export default Skills
