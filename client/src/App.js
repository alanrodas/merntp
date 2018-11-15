import React, { Component } from 'react';
import { Route, BrowserRouter } from 'react-router-dom'

import HeaderNav from './components/HeaderNav/HeaderNav'
import CarBrowse from './components/CarBrowse/CarBrowse'
import CarEdit from './components/CarEdit/CarEdit'
import Alerter from './components/Alerter/Alerter'

import Alerts from './utils/Alerts'

import './App.css';


const alerts = new Alerts()

class App extends Component {

    constructor() {
        super()
        this.state = {
            editing: false,
            alerting: true,
            alerts,
        }
    }

    render() {
        return (
            <BrowserRouter>
                <div className="Main-App">
                    <HeaderNav mainComp={this} alerting={this.state.alerting} />

                    <Route exact path='/'
                        render={() => <CarBrowse mainComp={this} alerts={this.state.alerts} />}
                    />
                    <Route exact path='/edit'
                        render={() => <CarEdit mainComp={this} alerts={this.state.alerts} />}
                    />
                    
                    {
                        this.state.alerting
                        ? <Alerter mainComp={this} alerts={this.state.alerts} />
                        : null
                    }
                </div>
            </BrowserRouter>
        );
    }
    /*
     * <Route exact path='/'
     *     render={(props) => <ComponenteX mainComp={this} <etc> {...props} />}
     * />
     * 
     * - Esta forma permite pasar props al componente routeado.
     */
    

    // manejo de estado: editing
    
    /*
     * indica si editing es true
     */
    isEditing() {
        return this.state.editing
    }

    /*
     * settea editing al valor indicado
     * params:
     * - isOn (bool)
     */
    setEditing(isOn) {
        if (isOn) {
            // al entrar en modo edición, no queremos ver alertas anteriores
            alerts.delAllAlerts()
        }
        this.setState({
            editing: isOn,
        })
    }
    
    // manejo de estado: alerts
    
    /*
     * settea alerting al valor indicado
     * params:
     * - isOn (bool)
     */
    setAlerting(isOn) {
        this.setState({
            alerting: isOn,
        })
    }
    
    /*
     * actualiza alertas
     * (patch: react no siempre se da cuenta cuando se actualizan las listas de un obj Alerts)
     */
    refreshAlerts() {
        this.setState({
            alerts,
        })
    }

}


export default App;
