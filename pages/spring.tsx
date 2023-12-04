import React, { useState } from 'react';
import quizDataSpring from '@/utils/quizzDataSpring';
import Layout from '@/components/Layout';



function SpringScreen() {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);

  const handleAnswerClick = (optionId:any) => {
    setSelected(optionId);
  };

  const handleNextQuestion = () => {
    if (selected === quizDataSpring[currentQuiz].correct) {
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
    <Layout title='Spring'>
      <div className="App">
      {currentQuiz < quizDataSpring.length ? (
        <div>
          <h2>Question {currentQuiz + 1}</h2>
          <p>{quizDataSpring[currentQuiz].question}</p>
          <ul>
            {quizDataSpring[currentQuiz].options.map((option) => (
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
          <h2>You answered {score}/{quizDataSpring.length} questions correctly</h2>
          <button onClick={resetQuiz}>Reload</button>
        </div>
      )}
    </div>

    </Layout>
    
  );
}

export default SpringScreen;
SpringScreen.auth=true;