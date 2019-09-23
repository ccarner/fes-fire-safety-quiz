// maybe change a style

const moduleBank = [{
  question: "Intro to Fire Safety",
  questionID: 1,


},
{
  question:
    "Types of fire safety equiptment",
  questionID: 2,


},
{
  question:
    "Fire Extinguishers",
  questionID: 3,

},
{
  question: "Fire Blankets",
  questionID: 4,


},
{
  question: "Fire Safety Signage",
  questionID: 5,


},
{
  question: "Emergency Services",
  questionID: 6,


},
{
  question: "Smoke Inhalation",
  questionID: 7,


}
];

// export default checklistBank;


export default (n = 99) =>
  Promise.resolve(moduleBank.sort());

