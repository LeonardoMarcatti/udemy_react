import React, {useRef} from "react";

const Answers = (props) => {
   const shuffledAnswers = useRef()
   const {answers, selectedAnswer, answerState, onSelect} = props

   if (!shuffledAnswers.current) {
      shuffledAnswers.current = [...answers].sort(() => Math.random() - 0.5)
   }
   return <ul id="answers">
   {
      shuffledAnswers.current.map((el, i) => {
         
         const isSelected = (selectedAnswer == el)
         let cssButton = ''

         if (answerState === 'answered' && isSelected) {
            cssButton = 'selected'
         }

         if ((answerState == 'correct' || answerState == 'wrong') && isSelected) {
            cssButton = answerState
         }

         return (
            <li key={i} className="answer">
               <button onClick={() => onSelect(el)} className={cssButton} disabled={answerState != ''}>{el}</button>
            </li>
         )
      })
   }
</ul>
}

export default Answers