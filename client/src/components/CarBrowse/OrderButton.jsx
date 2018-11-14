import React, { Component } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import Context from "../../Context";

class OrderButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphicUp: false
    };
  }

  changeGraphic() {
    this.setState({
      graphicUp: !this.state.graphicUp
    });
    this.context.setState({
      cars: this.context.cars.reverse()
    });
  }

  nameCapitalized() {
    let name = this.props.name;
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  render() {
    if (this.props.selected === this.props.name) {
      return (
        <button onClick={() => this.changeGraphic()} className="btn btn-link">
          {this.nameCapitalized()}
          {this.state.graphicUp ? <FaAngleUp /> : <FaAngleDown />}
        </button>
      );
    } else {
      return (
        <button onClick={this.props.select} className="btn btn-link">
          {this.nameCapitalized()}
        </button>
      );
    }
  }
}

OrderButton.contextType = Context;
export default OrderButton;
