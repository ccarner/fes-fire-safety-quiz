import React from 'react';
import ReactDOM from 'react-dom';
import questions from './sample_and_test.json'
import App from './quiz';
import App2 from '../home';
it('renders without crashing', () => {
  const quiz = require('./sample_and_test');
  const div = document.createElement('div');
  console.log(quiz.quiz_questions);
  //ReactDOM.render(<App/>, div);
  ReactDOM.render(<App jsonURL={quiz.quiz_questions} />, div);
});