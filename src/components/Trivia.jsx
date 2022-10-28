import React, { useEffect,useState } from "react";
import useSound from "use-sound";
import play from "../doc/play.mp3";
import right from "../doc/right.mp3";
import wrong from "../doc/wrong.mp3";


export default function Trivia({data,setStop,  questionNumber,setQuestionNumber,}) {
    const [question,setQuestion] = useState(null);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [className, setClassName] = useState("answer");

    const [letsplay]= useSound(play);
    const [rightAnswer]= useSound(right);
const [wrongAnswer]= useSound(wrong);

useEffect(()=>{
  letsplay();
},[letsplay]);


    useEffect(() => {
      setQuestion(data[questionNumber - 1]);
    }, [data, questionNumber]);

    const delay = (duration, callback) => {
      setTimeout(() => {
        callback();
      }, duration);
    };
  

    const handleClick = (a) => {
     setSelectedAnswer(a);
     setClassName("answer active");

     delay(3000, () => {
      setClassName(a.correct ? "answer correct" : "answer wrong");
    });

      delay(5000, () => {
      if (a.correct) {
         rightAnswer();
        delay(2000, () => {
          setQuestionNumber((prev) => prev + 1);
          setSelectedAnswer(null);
        
        });
      } else {
        wrongAnswer();
        delay(1000, () => {
          setStop(true);
        });
      }
      })
  };
  return (
    <div className="trivia">
        <div className="question">{question?.question}</div>
        <div className="answers">
        {question?.answers.map((a) => (
                <div className={selectedAnswer === a ? className: "answer"} 
                onClick={() =>  handleClick(a)}
         >
           {a.text}</div>
            ))}      
        </div>
    </div>
  );
}
