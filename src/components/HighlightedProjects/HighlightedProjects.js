import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './HighlightedProjects.scss'
import HighlightedProjectHeader from './Header'
import HighlightedProjectProject from './Project'
const HighlightedProjectsData = require('../../constants/HighlightedProjects.json')

class HighlightedProjects extends React.Component {

  constructor(props) {
    super(props);
  }

  renderProjects(projects) {
    let projectTemplates = [];

    for(let i = 0, len = projects.length; i < len; i++) {
      let project = projects[i];
      projectTemplates.push(
        <HighlightedProjectProject project={project} />
      );
    }

    return projectTemplates;
  }

  render() {

    const { projects } = HighlightedProjectsData;

    return (
      <section className={classes.root}>
        <HighlightedProjectHeader />
        <section>
          {
            this.renderProjects(projects)
          }
        </section>
      </section>
    );
  }

}

export default HighlightedProjects
