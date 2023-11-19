import React, {useState} from "react"
import Header from "./components/Header"
import Calculator from "./components/Calculator"
import Results from "./components/Results"
const App = () => {
  const [state, setState] = useState({initialInvestment: 0, annualInvestment: 0, expectedReturn: 0, duration: 10})

   const handleValueChange = e => {
      const {name, value} = e.target
      if (value > 0) {
        setState(prevState => {
          const newState = {...prevState}
          newState[name] = parseFloat(value)
          return newState
       })
      }
   }

  return (
    <>
      <Header />
      <Calculator values={state} onChange={handleValueChange}/>
      {
        (state.annualInvestment > 0 && state.expectedReturn > 0 && state.initialInvestment > 0) && <Results input={state}/>
      }
    </>

  )
}

export default App
