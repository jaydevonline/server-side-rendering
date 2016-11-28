import React from 'react';
import Transmit from 'react-transmit';
import fetch from 'isomorphic-fetch';
import AboveTheFoldOnlyServerRender from 'above-the-fold-only-server-render';
import styles from 'css/Hello.scss';
import People from 'js/People';


const Hello = React.createClass({
  render: function() {
    return <div>
              <p className={styles.largeText}> Hello {this.props.name} </p> 
              <p className={styles.largeText}>Async hello {this.props.hello} </p>
              <AboveTheFoldOnlyServerRender skip={true}>
                <People person={this.props.person} /> 
              </AboveTheFoldOnlyServerRender>
          </div>;
  }
});

export default Transmit.createContainer(Hello, {
  // These must be set, or else it would fail to render
  initialVariables: {},
  // each fragmen will be resolved into a prop
  fragments: {
    hello () {
      return fetch('http://localhost:3000/static/data.json')
        .then(r => r.json())
        .then(r => r.hello);
    }
  }
});
