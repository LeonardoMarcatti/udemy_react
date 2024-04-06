import React from "react";
import {calculateInvestmentResults, formatter} from '../util/investment'

const Results = ({input}) => {
   const result = calculateInvestmentResults(input)
   const initialInvestment = result[0].valueEndOfYear - result[0].interest - result[0].annualInvestment
   
   return (
      <table id="result">
         <thead>
            <tr>
               <th>Year</th>
               <th>Investiment Value</th>
               <th>Interest (Year)</th>
               <th>Total Interest</th>
               <th>Invested Capital</th>
            </tr>
         </thead>
         <tbody>
            {
               result.map((el,i) => {
                  const totalInterest = el.valueEndOfYear - el.annualInvestment * el.year - initialInvestment
                  const totalAmountinvested = el.valueEndOfYear - totalInterest
                  return (
                     <tr key={i}>
                        <td>{el.year}</td>
                        <td>{formatter.format(el.valueEndOfYear)}</td>
                        <td>{formatter.format(el.interest)}</td>
                        <td>{formatter.format(totalInterest)}</td>
                        <td>{formatter.format(totalAmountinvested)}</td>
                     </tr>
                  )
               })
            }
         </tbody>
      </table>
   )
}

export default Results