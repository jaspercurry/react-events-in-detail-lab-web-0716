const React = require('react')

class DelayedButton extends React.Component {
  constructor(props) {
    super();
    this.getCoords = this.getCoords.bind(this)
    this.delay = props.delay
  }

  getCoords(event) {
    event.persist()
    setTimeout(function(){this.props.onDelayedClick(event)}.bind(this), this.delay)


  }

  render() {
    return(
      <button onClick={this.getCoords}></button>

    )
  }


}

module.exports = DelayedButton;
