import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

import HeaderNav from './components/HeaderNav/HeaderNav'
import CarBrowse from './components/CarBrowse/CarBrowse'
import CarEdit from './components/CarBrowse/CarEdit'

import './App.css';


class App extends Component {

    constructor() {
        super()
        this.state = {
          editing: false,
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className="Main-App">
                    <HeaderNav mainComp={this} />

                    <Route exact path='/'
                        render={(props) => <CarBrowse mainComp={this} {...props} />}
                    />
                    <Route exact path='/edit'
                        render={(props) => <CarEdit mainComp={this} {...props} />}
                    />
                </div>
            </BrowserRouter>
        );
    }

    isEditing() {
      return this.state.editing
    }

    toggleEditing(editing) {
        this.setState({
            editing,
        })
    }

}

export default App;
