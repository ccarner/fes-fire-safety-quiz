const quizQuestions = [
  {
    question: "Do you have working smoke alarms in every room?",
    answerindex: 1,
    media: "img",
    media_src: "https://bit.ly/2m15SxC",
    answers: ["Yes", "No", "Not Sure"]
  },
  {
    question:
      "Are any of your extinguishers out of date?\n" +
      "HINT: check the left panel for the expiry date of any FES branded fire extinguisher",
    answerindex: 2,
    media: "img",
    media_src: "https://bit.ly/2lJFMip",
    answers: ["Yes", "No", "Not Sure"]
  },
  {
    question:
      "Has it been over a year since you or another employee had fire safety training?",
    answerindex: 2,
    media: "img",
    media_src: "https://bit.ly/2ka4KHA",
    answers: ["Yes", "No", "Not Sure"]
  },
  {
    question: "Do you know the correct fire evacuation procedure?",
    answerindex: 1,
    media: "img",
    media_src: "https://bit.ly/2klzW6R",
    answers: ["Yes", "No", "Not Sure"]
  }
];

export default quizQuestions;
//export default (n=5) =>
// (quizQuestions.sort(()=>0.5-Math.random()).slice(0,n));
