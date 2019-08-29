const qBank = [
{question:"1+1=?",
media_type:"text",
media_src:"",
answers: ["1","2","3","4"],
correct: "2",
questionId: "01"
},
{question:"2+1=?",
media_type:"image",
media_src:"https://www.bushheritage.org.au/getmedia/b2cbf1c7-49e6-42de-981b-9d4bcce117bf/17527-spotted-tail-quoll",
answers: ["1","2","3","4"],
correct: "3",
questionId: "02"
},
{question:"2+2=?",
media_type:"image",
media_src:"https://www.bushheritage.org.au/getmedia/b2cbf1c7-49e6-42de-981b-9d4bcce117bf/17527-spotted-tail-quoll",
answers: ["1","2","3","4"],
correct: "4",
questionId: "03"
},
{question:"1+0=?",
media_type:"image",
media_src:"https://www.bushheritage.org.au/getmedia/b2cbf1c7-49e6-42de-981b-9d4bcce117bf/17527-spotted-tail-quoll",
answers: ["1","2","3","4"],
correct: "1",
questionId: "04"
},
{question:"3+1=?",
media_type:"image",
media_src: "https://www.australiangeographic.com.au/wp-content/uploads/2018/06/Dasyurus_viverrinus.jpg",
answers: ["1","2","3","4"],
correct: "4",
questionId: "04"
},
{question:"0+0=?",
media_type:"video",
media_src:"https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/features/cloud-storage/cloud-storage/03c_CloudStorage_MultipleDevices.mp4",
answers: ["0","2","3","4"],
correct: "0",
questionId: "05"
}
]

export default (n=5) =>
    Promise.resolve(qBank.sort(()=>0.5-Math.random()).slice(0,n));