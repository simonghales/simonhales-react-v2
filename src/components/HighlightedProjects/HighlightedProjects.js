import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './HighlightedProjects.scss'
import HighlightedProjectHeader from './Header'
import HighlightedProjectProject from './Project'

export const HighlightedProjects = () => (
  <section className={classes.root}>
    <HighlightedProjectHeader />
    <section>
      <HighlightedProjectProject />
      <HighlightedProjectProject />
      <HighlightedProjectProject />
    </section>
  </section>
)

export default HighlightedProjects
