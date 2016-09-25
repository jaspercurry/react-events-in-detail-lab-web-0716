const React = require('react');

class CoordinatesButton extends React.Component {
  constructor(props) {
    super();
    this.getCoords = this.getCoords.bind(this)
    // this.onReceiveCoordinates = props.onReceiveCoordinates
  }

  getCoords(event) {
    let x = event.clientX;
    let y = event.clientX;
    this.props.onReceiveCoordinates([x, y])
  }

  render() {
    return(
    <button onClick={this.getCoords}></button>
    )

  }

}

module.exports = CoordinatesButton;
