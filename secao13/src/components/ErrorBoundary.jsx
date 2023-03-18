import { Component } from "react"

class ErrorBoundary extends Component {
  state = {errors: false}

  componentDidCatch(error){
    console.log(error);
    this.setState({errors: true})
  }

  render(){
    if (this.state.errors) {
      return <h1 style={{color: 'white'}}>Some error happened!</h1>
    }
    return this.props.children
  }
}

export default ErrorBoundary