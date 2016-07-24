import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Info.scss'

export const Info = () => (
  <section className={classes.root}>
    <section className={classes.infoSection}>
      <h3 className={classes.title}>Work Experience</h3>
      <ul className={classes.details}>
        <li>
          <div className={classes.when}>
            2015 - Present
          </div>
          <div className={classes.info}>
            <h4 className={classes.infoTitle}>Hydric Media</h4>
            <h5 className={classes.infoSubtitle}>Front End Developer</h5>
          </div>
        </li>
        <li>
          <div className={classes.when}>
            2013 - 2014
          </div>
          <div className={classes.info}>
            <h4 className={classes.infoTitle}>Happen</h4>
            <h5 className={classes.infoSubtitle}>Lead Designer &amp; Front End Developer</h5>
          </div>
        </li>
        <li>
          <div className={classes.when}>
            2013 - 2015
          </div>
          <div className={classes.info}>
            <h4 className={classes.infoTitle}>University of Queensland</h4>
            <h5 className={classes.infoSubtitle}>Head Web Design Tutor</h5>
          </div>
        </li>
      </ul>
    </section>
    <section className={classes.infoSection}>
      <h3 className={classes.title}>Education &amp; Awards</h3>
      <ul className={classes.details}>
        <li>
          <div className={classes.when}>
            2011 - 2014
          </div>
          <div className={classes.info}>
            <h4 className={classes.infoTitle}>University of Queensland</h4>
            <h5 className={classes.infoSubtitle}>Bachelor of Multimedia Design</h5>
          </div>
        </li>
        <li>
          <div className={classes.when}>
            2013
          </div>
          <div className={classes.info}>
            <h4 className={classes.infoTitle}>UQ ITEE Outstanding Tutor Award</h4>
            <h5 className={classes.infoSubtitle}>DECO1400 (Introduction to Web Design)</h5>
          </div>
        </li>
        <li>
          <div className={classes.when}>
            2013
          </div>
          <div className={classes.info}>
            <h4 className={classes.infoTitle}>UQ ITEE Best User Centered Design Project</h4>
            <h5 className={classes.infoSubtitle}>HTML THOR</h5>
          </div>
        </li>
      </ul>
    </section>
  </section>
)

export default Info
