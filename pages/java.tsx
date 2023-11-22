import Layout from '@/components/Layout'
import React, { useState } from 'react'
import quizDataJava from '@/utils/quizzDataJava';

const Java = () => {
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState(null);
  
    const handleAnswerClick = (optionId:any) => {
      setSelected(optionId);
    };
  
    const handleNextQuestion = () => {
      if (selected === quizDataJava[currentQuiz].correct) {
        setScore(score + 1);
      }
      setSelected(null);
      setCurrentQuiz(currentQuiz + 1);
    };
  
    const resetQuiz = () => {
      setCurrentQuiz(0);
      setScore(0);
      setSelected(null);
    };

  return (
    <Layout title='Java'>
 <div className="App">
      {currentQuiz < quizDataJava.length ? (
        <div>
          <h2>Question {currentQuiz + 1}</h2>
          <p>{quizDataJava[currentQuiz].question}</p>
          <ul>
            {quizDataJava[currentQuiz].options.map((option) => (
              <li key={option.id}>
                <label>
                  <input
                    type="radio"
                    name="answer"
                    value={option.id}
                    checked={selected === option.id}
                    onChange={() => handleAnswerClick(option.id)}
                  />
                  {option.text}
                </label>
              </li>
            ))}
          </ul>
          <button onClick={handleNextQuestion}>Next</button>
        </div>
      ) : (
        <div>
          <h2>You answered {score}/{quizDataJava.length} questions correctly</h2>
          <button onClick={resetQuiz}>Reload</button>
        </div>
      )}
    </div>
    </Layout>
  )
}

export default Java