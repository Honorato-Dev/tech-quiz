import React, { useState } from 'react';
import quizDataJs from '@/utils/quizzDataJs';
import Layout from '@/components/Layout';



function JavascriptScreen() {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);

  const handleAnswerClick = (optionId:any) => {
    setSelected(optionId);
  };

  const handleNextQuestion = () => {
    if (selected === quizDataJs[currentQuiz].correct) {
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
    <Layout title='Javascript'>
       <div className="App">
      {currentQuiz < quizDataJs.length ? (
        <div className='flex flex-col text-center mx-auto max-w-screen-md bg-white bg-opacity-80  rounded-sm p-6'>
          <h2 className=''>Questão {currentQuiz + 1}</h2>
          <p className=''>{quizDataJs[currentQuiz].question}</p>
          <div className=''>{quizDataJs[currentQuiz].image}</div>
          <ul className='flex flex-col text-left'>
            {quizDataJs[currentQuiz].options.map((option) => (
              <li className='' key={option.id}>
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
          <button onClick={handleNextQuestion}>Próxima</button>
        </div>
      ) : (
        <div>
          <h2>You answered {score}/{quizDataJs.length} questions correctly</h2>
          <button onClick={resetQuiz}>Reload</button>
        </div>
      )}
    </div>
    </Layout>
   
  );
}

export default JavascriptScreen;
JavascriptScreen.auth=true;