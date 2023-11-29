import React, { useState } from 'react';
import quizDataPython from '@/utils/quizzDataPython';
import Layout from '@/components/Layout';



function PythonScreen() {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);

  const handleAnswerClick = (optionId:any) => {
    setSelected(optionId);
  };

  const handleNextQuestion = () => {
    if (selected === quizDataPython[currentQuiz].correct) {
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
    <Layout titlte='Node'>
      <div className="App">
      {currentQuiz < quizDataPython.length ? (
        <div>
          <h2>Question {currentQuiz + 1}</h2>
          <p>{quizDataPython[currentQuiz].question}</p>
          <ul>
            {quizDataPython[currentQuiz].options.map((option) => (
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
          <h2>You answered {score}/{quizDataPython.length} questions correctly</h2>
          <button onClick={resetQuiz}>Reload</button>
        </div>
      )}
    </div>

    </Layout>
    
  );
}

export default PythonScreen;
PythonScreen.auth=true;