import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Project.scss'

export const HighlightedProjectProject = () => (
  <div className={classes.root}>
    <div className={classes.content}>
      <div className={classes.image}>
        <img alt="soon.is preview"/>
        {/*src="project-sooniclasses.png" srcSet="project-soonis@2x.png 2x"*/}
      </div>
      <div className={classes.info}>
        <h3 className={classes.title}>soon.is</h3>
        <h4 className={classes.position}>// Front End Developer &amp; Designer</h4>
        <p className={classes.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam illum <strong>AngularJS</strong> nam pariatur porro quibusdam quos tempore! Ab accusantium magnam non numquam quam rerum sint ut. Atque laudantium porro sed voluptatibuclasses.
        </p>
        <div className={classes.links}>
          <a href="" className={classes.link}>View Website</a>
          <a href="" className={classes.link}>Read More</a>
        </div>
      </div>
    </div>
  </div>
)

export default HighlightedProjectProject