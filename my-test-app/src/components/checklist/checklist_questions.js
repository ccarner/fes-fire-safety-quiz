const checklistBank = [{
  question: "Do you have working smoke alarms in every room?",
  questionID: 1,
  media: "img",
  media_src: "https://bit.ly/2kXQBgR",

},
{
  question:
    "Are any of your extinguishers out of date?\n" +
    "HINT: check the left panel for the expiry date of any FES branded fire extinguisher",
  questionID: 2,
  media: "img",
  media_src: "https://bit.ly/2mshxWz",

},
{
  question:
    "Has it been over a year since you or another employee had fire safety training?",
  questionID: 3,
  media: "img",
  media_src: "https://bit.ly/2ka4KHA",

},
{
  question: "Do you know the correct fire evacuation procedure?",
  questionID: 4,
  media: "img",
  media_src: "https://bit.ly/2klzW6R",

}
];

// export default checklistBank;


export default (n = 99) =>
  Promise.resolve(checklistBank.sort());

