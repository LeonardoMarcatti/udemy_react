import React, {useState, useCallback, useRef} from "react";
import questions from '../questions'
import Summary from "./Summary";
import Question from "./Question";

const Quiz = () => {
   const [userAnswers, setUserAnswers] = useState([])
   const index = userAnswers.length
   const quizComplete = (index == questions.length)
   
   const handleSelectAnswer = useCallback((selectedAnswer) => {
     
      setUserAnswers(prevState => {
         return [...prevState, selectedAnswer]
      })
   }, []) 

   const handleSkipAnswer = useCallback(() => handleSelectAnswer(null),[handleSelectAnswer]);

   const restartQuiz = () => setUserAnswers([])

   if (quizComplete) {
      return <Summary restartQuiz={restartQuiz} userAnswers={userAnswers}/>
   }
   
   return (
      <div id="quiz">
         <Question onSelectAnswer={handleSelectAnswer} onTimeout={handleSkipAnswer} key={index} index={index}/>
      </div>
   )
}

export default Quiz