import React, {useState} from "react";

const QuestionBox = ({question, media_type, media_src, options, selected}) => {
  const [answer, setAnswer] = useState(options);
  return (
    <div className="questionBox">
      
      {(media_type === "image")?(
        <div className="media"><img 
        src={media_src} alt="picture"/></div>
      ):(media_type === "text"?(<div></div>):
                    (<div><video src={media_src} type="video/mp4" controls/></div>))
      }
      <div className="question">{question}</div>
      {answer.map((text, index) => (
        <button
          key={index}
          className="answerBtn"
          onClick={() => {
            setAnswer([text]);
            selected(text);
          }}
        >
          {text}
        </button>
      ))}
    </div>
  );
};

export default QuestionBox;
