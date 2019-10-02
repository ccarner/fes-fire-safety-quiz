// commented.


// This module stores all the checklist questions availible, user can modify questions here.
// By default, at most 99 questions can be rendered at once.
// Each euqstion consists an unique ID, the question and the media type.
const checklistBank = [{
  question: "Do you have working smoke alarms in every room?",
  questionID: 1,
  media: "img",
  media_src: "https://bit.ly/2kXQBgR"

},
{
  question:
    "Are any of your extinguishers out of date?\n" +
    "HINT: check the left panel for the expiry date of any FES branded fire extinguisher",
  questionID: 2,
  media: "img",
  media_src: "https://bit.ly/2mshxWz"
},
{
  question:
    "Has any of you or another employee had fire safety training in the past one year?",
  questionID: 3,
  media: "img",
  media_src: "https://bit.ly/2ka4KHA"
},
{
  question: "Do you know the correct fire evacuation procedure?",
  questionID: 4,
  media: "img",
  media_src: "https://bit.ly/2klzW6R"
},
{
  question: "Do you know FES's phone number?",
  questionID: 5,
  media: "video",
  media_src: "https://media.istockphoto.com/videos/seemless-and-loopable-flames-slow-motion-video-id493922248",

}
];


export default (n = 99) => Promise.resolve(checklistBank.sort());

