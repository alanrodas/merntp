import React, { Component } from 'react'
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'


class ModalPopup extends Component {

  constructor(props) {
    super(props)
    this.state = extractStateFrom(props)
  }

  /*
   * actualiza el estado cuando cambian las props
   */
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState(extractStateFrom(nextProps))
    }
  }

  render() {
    return (
      <Modal
          isOpen={this.state.isOpen}
      >
          <ModalHeader className='bg-warning'>
              {this.state.title}
          </ModalHeader>

          <ModalBody>
              {this.state.msg}
          </ModalBody>

          <ModalFooter>
              <Button color='primary' className='mr-2'
                  onClick={() => this.state.fnOnAccept()}
              >
                  OK
              </Button>

              <Button color='secondary'
                  onClick={() => this.state.fnOnCancel()}
              >
                  Cancel
              </Button>
          </ModalFooter>
      </Modal>
    )
  }
  
}

const extractStateFrom = (obj) => {
  return {
    isOpen: obj.isOpen,
    title: obj.title,
    msg: obj.msg,
    fnOnAccept: obj.fnOnAccept,
    fnOnCancel: obj.fnOnCancel,
  }
}


export default ModalPopup
