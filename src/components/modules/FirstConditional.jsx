import React from 'react';
import { useSelector } from 'react-redux';
import QuizCard from '../quizcard';
import { extractQuestionsWithUserData } from '../../helpers/extractQuestionWiUsrData';
import { shuffleArray } from '../../helpers/shuffleArray';

const FirstConditionalModule = () => {
  const data = useSelector((state) => state.firstconditional.data);
  const tittle = "First Conditional"
  let allQuestions = extractQuestionsWithUserData(data)
  allQuestions =shuffleArray(allQuestions)
  return (
   <QuizCard allQuestions={allQuestions} tittle={tittle} />
  );
};

export default FirstConditionalModule;