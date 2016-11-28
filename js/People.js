import React from 'react';
import Transmit from 'react-transmit';
import fetch from 'isomorphic-fetch';
import styles from 'css/People.scss';

const People = React.createClass({
  render: function() {
    return <div className={styles.largeText }>My name is <span className={styles.personName } > {this.props.person} </span> </div>;
  }
});



export default People;
