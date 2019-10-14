const quiz_questions = [
  {
    question:
      "What does the white band at the top of the extinghuisher signify?",
    answer_index: 2,
    media: "img",
    media_src:
      "https://fireandsafetywa.com.au/wp-content/uploads/2018/09/201008.jpg",
    answers: ["Water-based", "Powder-based", "extra heavy", "foam-based"]
  },
  {
    question: "Where should you point at the fire extinguisher?",
    answer_index: 2,
    media: "video",
    media_src:
      "https://media.istockphoto.com/videos/seemless-and-loopable-flames-slow-motion-video-id493922248",
    answers: [
      "top of flame",
      "bottom of flame",
      "over the top of flame",
      "on the floor"
    ]
  },
  {
    question:
      "Should you use the extinguisher when the arrow is not inside the green section of the dial?",
    answer_index: 1,
    media: "text",
    media_src: "",
    answers: ["yes", "no"]
  }
];

export default quiz_questions;
//export default (n=5) =>
// (quiz_questions.sort(()=>0.5-Math.random()).slice(0,n));
