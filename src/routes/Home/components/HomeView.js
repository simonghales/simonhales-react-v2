import React from 'react'
import DuckImage from '../assets/Duck.jpg'
import classes from './HomeView.scss'
import Intro from '../../../components/Intro'
import Skills from '../../../components/Skills'
import HighlightedProjects from '../../../components/HighlightedProjects'
import Info from '../../../components/Info'

export const HomeView = () => (
  <div>
    <Intro />
    <Skills />
    <HighlightedProjects />
    <Info />
  </div>
)

export default HomeView
