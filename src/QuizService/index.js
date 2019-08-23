const qBank = [
{question:"1+1=?",
answers: ["1","2","3","4"],
correct: "2",
questionId: "01"
},
{question:"2+1=?",
answers: ["1","2","3","4"],
correct: "3",
questionId: "02"
},
{question:"2+2=?",
answers: ["1","2","3","4"],
correct: "4",
questionId: "03"
},
{question:"1+0=?",
answers: ["1","2","3","4"],
correct: "1",
questionId: "04"
},
{question:"3+1=?",
answers: ["1","2","3","4"],
correct: "4",
questionId: "04"
},
{question:"0+0=?",
answers: ["0","2","3","4"],
correct: "0",
questionId: "05"
}
]

export default (n=5) =>
    Promise.resolve(qBank.sort(()=>0.5-Math.random()).slice(0,n));