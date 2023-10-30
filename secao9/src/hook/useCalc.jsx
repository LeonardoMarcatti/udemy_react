import { useState } from "react";

const useCalc = () => {
   const [years, setYears] = useState([])
   const reset = () =>  setYears([])
	const calculateHandler = (userInput) => {
    userInput.preventDefault();
    const yearlyData = []; // per-year results

    let currentSavings = +userInput.target[0].value; // feel free to change the shape of this input object!
    const yearlyContribution = +userInput.target[1].value; // as mentioned: feel free to change the shape...
    const expectedReturn = +userInput.target[2].value / 100;
    const duration = +userInput.target[3].value;

	// The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
      
    }
    setYears(yearlyData)
  };
  return {reset, calculateHandler, years}
}

export default useCalc