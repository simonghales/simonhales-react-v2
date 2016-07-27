import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Info.scss'
import List from './List/List'
const InfoData = require('../../constants/Info.json')

class Info extends React.Component {

  constructor(props) {
    super(props);
  }

  renderLists(lists) {

    let renderedLists = [];

    for(let i = 0, len = lists.length; i < len; i++) {
      const list = lists[i];
      renderedLists.push(
        <List info={list} />
      );
    }

    return renderedLists;

  }

  render() {

    const { lists } = InfoData;

    return (
      <section className={classes.root}>
        {this.renderLists(lists)}
      </section>
    );
  }

}

export default Info
