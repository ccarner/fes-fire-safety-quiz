const questions = [{question: "test question, choose correct answer",
answers: ["correct answer", "wrong answer", "another wrong"],
correct: "correct answer"}];

export default (n=1) =>
 Promise.resolve(questions.sort(() => 0.5 - Math.random()).slice(0, n));