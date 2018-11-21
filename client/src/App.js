import React, { Component } from 'react';
import HeaderNav from './components/HeaderNav/HeaderNav';
import PropTypes from 'prop-types';
import './App.css';
import Content from './Content';

class App extends Component {
  static propTypes = { children: PropTypes.object.isRequired };
  render() {
    const { children } = this.props;
    return (
      <div className="Main-App">
        <HeaderNav />
        <Content body={children} />
      </div>
    );
  }
}

export default App;
