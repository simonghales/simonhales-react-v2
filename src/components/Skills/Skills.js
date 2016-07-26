import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Skills.scss'
const SkillsData = require('../../constants/Skills.json')

class Skills extends React.Component {

  constructor(props) {
    super(props);
  }

  renderListItems(items) {

    let listItems = [];

    for(let i = 0, len = items.length; i < len; i++) {
      let item = items[i];
      listItems.push(
        <li>
          {item}
        </li>
      );
    }

    return listItems;

  }

  render() {


    const { lists } = SkillsData;

    return (
      <section className={classes.root}>
        {
          lists.map((list) => {
            return(
              <div className={classes.skillColumn}>
                <h3 className={classes.title}>{list.title}</h3>
                <ul className={classes.skillsList}>
                  {this.renderListItems(list.items)}
                </ul>
              </div>
            );
          })
        }
      </section>
    );
  }

}

export default Skills
