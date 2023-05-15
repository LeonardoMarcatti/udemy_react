import React, {Component} from 'react'

class Test extends Component {
  state = { status : false }

  toggleStatus = () => this.setState(prevState => {
    return {status: !prevState.status}
  })

  render() {
    return (
      <>
        <button type='button' onClick={this.toggleStatus}>{this.props.label}</button>
        <br />
        {
          this.state.status && <label htmlFor="find">Find user:</label>
        }
      </>
    )
  }
}

export default Test;