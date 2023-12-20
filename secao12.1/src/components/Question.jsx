import React, {useState} from "react";
import Answers from "./Answers";
import Timer from "./Timer";
import questions from '../questions.js'

const Question = (props) => {
   const {onSelectAnswer, onTimeout, index} = props
   const [answer, setAnswer] = useState({selectedAnswer: '', isCorrect: null})

   let timer = 15000

   if (answer.selectedAnswer) {
      timer = 1000
   }

   if (answer.isCorrect != null) {
      timer = 1500
   }

   const handleSelectAnswer = (answer) => {
      setAnswer(prevState => {
         const newState = {...prevState}
         newState.selectedAnswer = answer
         newState.isCorrect = null
         return newState
      })

      setTimeout(() => {
         setAnswer(prevState => {
            const newState = {...prevState}
            newState.selectedAnswer = answer
            newState.isCorrect = questions[index].answers[0] == answer
            return newState
         })

         setTimeout(() => {
            onSelectAnswer(answer)
         }, 1500);
      }, 1000);
   }

   let answerState = ''

   if (answer.selectedAnswer && answer.isCorrect != null) {
      answerState = answer.isCorrect ? 'correct' : 'wrong'
   } else if(answer.selectedAnswer){
      answerState = 'answered'
   }

   return <div id="question">
      <Timer timeout={timer} onTimeout={answer.selectedAnswer == '' ? onTimeout : null} mode={answerState} key={timer}/>
      <h2>{questions[index].text}</h2>
      <Answers answers={questions[index].answers} onSelect={handleSelectAnswer} selectedAnswer={answer.selectedAnswer} answerState={answerState} />
   </div>
}

export default Question