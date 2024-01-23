import React from "react";
import complete from '../assets/quiz-complete.png'
import question from '../questions'

const Summary = (props) => {
   const {restartQuiz, userAnswers} = props

   const skippedAnser = userAnswers.filter(el => el == null)
   const correctAnser = userAnswers.filter((el, i) => el == question[i].answers[0])
   const wrongAnswer = userAnswers.filter((el, i) => (el != question[i].answers[0] && el != null))

   const skippedShare = ((skippedAnser.length / userAnswers.length)*100).toFixed(0) 
   const correctShare = ((correctAnser.length / userAnswers.length)*100).toFixed(0) 
   const wrongShare = ((wrongAnswer.length / userAnswers.length)*100).toFixed(0) 

   return (
      <div id="summary">
         <h2>Quiz Complete</h2>
         <img src={complete} alt="" />
         <div id="summary-stats">
            <p>
               <span className="number">{`${skippedShare}%`}</span>
               <span className="text">Skipped</span>
            </p>
            <p>
               <span className="number">{`${correctShare}%`}</span>
               <span className="text">Correct</span>
            </p>
            <p>
               <span className="number">{`${wrongShare}%`}</span>
               <span className="text">Wrong</span>
            </p>
         </div>
            <ol>
               {
                  userAnswers.map((el, i) => {
                     let cssClass = 'user-answer'

                     if (el == null) {
                        cssClass += ' skipped'
                     } else if(el == question[i].answers[0]) {
                        cssClass += ' correct'
                     } else {
                        cssClass += ' wrong'
                     }
                     return (
                        <li key={i}>
                           <h3>{i+1}</h3>
                           <p className="question">{question[i].text}</p>
                           <p className={cssClass}>{el ?? 'Skipped'}</p>
                        </li>
                     )
                  })
               }
               
            </ol>

         <button type="button" onClick={restartQuiz} id="restart">Try Again</button>
      </div>
      )
}

export default Summary