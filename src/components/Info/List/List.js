import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from '../Info.scss'

class List extends React.Component {

  constructor(props) {
    super(props);
  }

  renderItems(items) {

    let renderedItems = [];

    for(let i = 0, len = items.length; i < len; i++) {
      let item = items[i];
      const { when, title, subtitle } = item;
      renderedItems.push(
        <li>
          <div className={classes.when}>
            {when}
          </div>
          <div className={classes.info}>
            <h4 className={classes.infoTitle}>{title}</h4>
            <h5 className={classes.infoSubtitle}>{subtitle}</h5>
          </div>
        </li>
      );
    }

    return renderedItems;

  }

  render() {

    const { title, items } = this.props.info;

    return (
      <section className={classes.infoSection}>
        <h3 className={classes.title}>{title}</h3>
        <ul className={classes.details}>
          {this.renderItems(items)}
        </ul>
      </section>
    );
  }

}

List.propTypes = {
  info: React.PropTypes.object.isRequired
}

export default List
