import React, { useState } from 'react';
import quizDataIntroduction from '@/utils/quizzDataIntroduction';
import { Alfa_Slab_One } from 'next/font/google';

const alfa = Alfa_Slab_One({
    subsets: ['latin'],
    weight: ['400'],
  });



function IntroductionScreen() {
  const [currentQuiz, setCurrentQuiz] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);

  const handleAnswerClick = (optionId:any) => {
    setSelected(optionId);
  };

  const handleNextQuestion = () => {
    if (selected === quizDataIntroduction[currentQuiz].correct) {
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
    <>
       <div className="">
        <div className={alfa.className}>
            <h1 className=' text-center  text-base lg:text-xl p-3'>Aprenda a usar</h1>
        </div>
        
      {currentQuiz < quizDataIntroduction.length ? (
        <div className='flex flex-col text-center mx-auto max-w-screen-md  bg-opacity-70  rounded-sm p-6'>
          <h2 className='text-lg lg:text-xl font-semibold mb-4'>Questão {currentQuiz + 1}</h2>
          <p className='text-lg lg:text-xl mb-6 mt-4'>{quizDataIntroduction[currentQuiz].question}</p>
          <div className=''>{quizDataIntroduction[currentQuiz].image}</div>
          <ul className='flex flex-col text-left'>
            {quizDataIntroduction[currentQuiz].options.map((option) => (
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
          <button className='bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded mt-2 ' onClick={handleNextQuestion}>Responder</button>
        </div>
      ) : (
        <div className=' flex flex-col mt-10'>
          <h2 className='text-base flex justify-center lg:text-2xl'>Você acertou {score}/{quizDataIntroduction.length} questões corretamente</h2>
          <button className='bg-yellow-500 hover:bg-yellow-600   font-bold py-2 px-4 rounded mt-2 ' onClick={resetQuiz}>Resetar</button>
        </div>
      )}
    </div>
    </>
   
  );
}

export default IntroductionScreen;
