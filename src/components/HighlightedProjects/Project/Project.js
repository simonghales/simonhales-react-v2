import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Project.scss'
import imageSrc from '../../../assets/images/project-soonis.png'
import imageSrc2x from '../../../assets/images/project-soonis@2x.png'

class HighlightedProjectProject extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    const srcSetString = imageSrc2x + ' 2x';

    const { title, position, description, url, image } = this.props.project;

    return (
      <div className={classes.root}>
        <div className={classes.content}>
          <div className={classes.image}>
            <img src={imageSrc} srcSet={srcSetString} alt="soon.is preview"/>
          </div>
          <div className={classes.info}>
            <h3 className={classes.title}><a href="">{title}</a></h3>
            <h4 className={classes.position}>// {position}</h4>
            <p className={classes.desc}>
              {description}
            </p>
            <div className={classes.links}>
              <a href={url} className={classes.link} target="_blank">View Website</a>
              <a href="" className={classes.link}>Read More</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

HighlightedProjectProject.propTypes = {
  project: React.PropTypes.object.isRequired
}

export default HighlightedProjectProject
