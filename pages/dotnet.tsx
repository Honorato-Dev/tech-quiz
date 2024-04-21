import React, { useState } from 'react';
import quizDataDotNet from '@/utils/quizzDataDotNet';
import Layout from '@/components/Layout';



function DotNetScreen() {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);

  const handleAnswerClick = (optionId:any) => {
    setSelected(optionId);
  };

  const handleNextQuestion = () => {
    if (selected === quizDataDotNet[currentQuiz].correct) {
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
       <div className="h-screen">
      {currentQuiz < quizDataDotNet.length ? (
        <div className='flex flex-col text-center mx-auto max-w-screen-md  bg-opacity-80  rounded-sm p-6'>
          <h2 className='text-lg lg:text-xl font-semibold mb-4'>Questão {currentQuiz + 1}</h2>
          <p className='text-lg lg:text-xl mb-6 mt-4'>{quizDataDotNet[currentQuiz].question}</p>
          <div className=''>{quizDataDotNet[currentQuiz].image}</div>
          <ul className='flex flex-col text-left'>
            {quizDataDotNet[currentQuiz].options.map((option) => (
              <li className='' key={option.id}>
                <label className='space-y-12'>
                  <input
                  className='m-4'
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
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-14' onClick={handleNextQuestion}>Reply</button>
        </div>
      ) : (
        <div className='justify-content  text-center'>
        <h2 className='text-lg md:text-xl lg:text-2xl mb-6'>You answered <span className='fond-bold text-2xl md:text-3xl lg:text-4xl'>{score}/{quizDataDotNet.length}</span> Questions correctly</h2>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6' onClick={resetQuiz}>Reload</button>
      </div>
      )}
    </div>
    </Layout>
   
  );
}

export default DotNetScreen;
DotNetScreen.auth=true;