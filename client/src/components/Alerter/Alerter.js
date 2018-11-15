import React, { Component } from 'react'
import { Alert } from 'reactstrap'


/*
 * muestra alertas de dos tipos:
 * - 'errors' como clase 'danger'
 * - 'oks' como clase 'success'
 */
class Alerter extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      errors: this.props.alerts.errors || [],
      oks: this.props.alerts.oks || [],
    }
  }
  
  /*
   * actualiza el estado cuando cambian las props
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps === this.props) {
      return
    }
    let newState = {}
    if (nextProps.alerts && nextProps.alerts.errors) {
      newState.errors = nextProps.alerts.errors
    }
    if (nextProps.alerts && nextProps.alerts.oks) {
      newState.oks = nextProps.alerts.oks
    }
    this.setState(newState)
  }

  render() {
    return (
      <div>
        { this.renderItemsIfNotEmpty('danger', this.state.errors, () => this.props.alerts.delErrors()) }
        { this.renderItemsIfNotEmpty('success', this.state.oks, () => this.props.alerts.delOks()) }
      </div>
    )
  }
  
  /*
   * si hay alertas del tipo indicado, las muestra
   * params:
   * - cls: color de reactstrap para las alertas
   * - items: lista de alertas a mostrar
   * - onCloseFn: callback a llamar cuando se clickea 'x'
   */
  renderItemsIfNotEmpty(cls, items, onCloseFn) {
    return (
      (items.length)
      ? this.renderItems(cls, items, onCloseFn)
      : null
    )
  }

  /*
   * muestra los items indicados como alertas
   * params:
   * - cls: color de reactstrap para las alertas
   * - items: lista de alertas a mostrar
   * - onCloseFn: callback a llamar cuando se clickea 'x'
   */
  renderItems(cls, items, onCloseFn) {
    return (
      <Alert color={cls}
        toggle={() => {
          onCloseFn()
          this.props.mainComp.refreshAlerts()
        }}
      >
        <ul>
        {
          items.map((item, idx) => {
            return (
              <li key={idx}>
                {item}
              </li>
            )
          })
        }
        </ul>
      </Alert>
    )
  }

}


export default Alerter
