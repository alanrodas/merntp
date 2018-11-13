const ERROR_ALERT = 'errors'
const OK_ALERT = 'oks'

/*
 * manejador de alertas
 */
class Alerts {
  
  constructor() {
    this.errors = []
    this.oks = []
  }
  
  /*
   * borra todas las alertas de 'error',
   * y después agrega una alerta de 'error'
   * params:
   * - errorAlert (string)
   * - data: response data
   */
  delAndAddError(errorAlert, data) {
    this.delAllAlerts()
    this.addError(errorAlert, data)
  }
  
  /*
   * borra todas las alertas de 'ok',
   * y después agrega una alerta de 'ok'
   * params:
   * - okAlert (string)
   * - data: response data
   */
  delAndAddOk(okAlert, data) {
    this.delAllAlerts()
    this.addOk(okAlert, data)
  }
  
  /*
   * agrega una alerta de 'error'
   * params:
   * - errorAlert (string)
   * - data: response data
   */
  addError(errorAlert, data) {
    this.addOne(ERROR_ALERT, errorAlert, data)
  }
  
  /*
   * agrega una alerta de 'ok' (para operaciones exitosas)
   * params:
   * - okAlert (string)
   * - data: response data
   */
  addOk(okAlert, data) {
    this.addOne(OK_ALERT, okAlert, data)
  }

  /*
   * agrega una alerta del tipo indicado
   * params:
   * - cls: {ERROR_ALERT|OK_ALERT}
   * - alert (string)
   * - data: response data
   */
  addOne(cls, alert, data=null) {
    this[cls].unshift(`${alert}${this.extractErrorMsg(data)}`)
  }
  
  /*
   * borra todas las alertas
   */
  delAllAlerts() {
    this.delErrors()
    this.delOks()
  }
  
  /*
   * borra todas las alertas de 'error'
   */
  delErrors() {
    this.delAll(ERROR_ALERT)
  }

  /*
   * borra todas las alertas de 'ok'
   */
  delOks() {
    this.delAll(OK_ALERT)
  }
  
  /*
   * borra todas las alertas del tipo indicado
   * params:
   * - cls: {ERROR_ALERT|OK_ALERT}
   */
  delAll(cls) {
    this[cls] = []
    // this[cls].splice(0, this[cls].length)
    // nota: react no se da cuenta de ninguna de las dos formas
  }
  
  /*
   * retorna el mensaje de error contenido en data
   * params:
   * - data: response data
   */
  extractErrorMsg(data) {
    if (data && data.response && data.response.data && data.response.data.error) {
      return ` - ${data.response.data.error}`
    } else if (data && data.message) {
      return ` - ${data.message}`
    } else {
      return ''
    }
  }

}

export default Alerts
