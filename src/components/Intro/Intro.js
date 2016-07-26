import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Intro.scss'
import Email from './Social/Email'
import Github from './Social/Github'
import Linkedin from './Social/Linkedin'
import Twitter from './Social/Twitter'
var    FontAwesome = require('react-fontawesome')
const IntroData = require('../../constants/Intro.json')

class Intro extends React.Component {

  constructor(props) {
    super(props);
  }

  renderSocialOptions(options) {

    let socialOptions = [];

    for(let i = 0, len = options.length; i < len; i++) {
      let option = options[i];

      switch(option.type) {
        case 'email':
          socialOptions.push(<Email data={option} />)
          break;
        case 'github':
          socialOptions.push(<Github data={option} />)
          break;
        case 'linkedin':
          socialOptions.push(<Linkedin data={option} />)
          break;
        case 'twitter':
          socialOptions.push(<Twitter data={option} />)
          break;
      }

    }

    return socialOptions;

  }

  render() {


    const {
      title,
      subTitle,
      slogan,
      social } = IntroData;

    console.log("intro data", IntroData, social);

    return (
      <section className={classes.root}>
        <div>
          <h3 className={classes.authorTitle}>{title}</h3>
          <h1 className={classes.mainTitle}>{subTitle}</h1>
          <h2 className={classes.subTitle}>{slogan}</h2>
          <h4 className={classes.contactLinks}>
            {this.renderSocialOptions(social)}
          </h4>
        </div>
      </section>
    );
  }

}

export default Intro
