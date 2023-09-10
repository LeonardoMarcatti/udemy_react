import React from "react";

const Table = (props) => {
   const {data, formatter} = props
   return (
      <table className="result">
         <thead>
            <tr>
               <th>Year</th>
               <th>Total Savings</th>
               <th>Interest (Year)</th>
               <th>Total Interest</th>
               <th>Invested Capital</th>
            </tr>
         </thead>
         <tbody>
            {
               data.map((el, i) => {
               return (
                  <tr key={i}>
                     <td>{el.year}</td>
                     <td>
                     {
                        formatter.format(el.savingsEndOfYear)
                     }
                     </td>
                     <td>{el.yearlyInterest.toFixed(2)}</td>
                     <td>{formatter.format(el.yearlyContribution)}</td>
                     <td>{formatter.format(el.yearlyContribution + el.yearlyContribution)}</td>
                  </tr>
               )
               })
            }
         </tbody>
      </table>
   )
}

export default Table