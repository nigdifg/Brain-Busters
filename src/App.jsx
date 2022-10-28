 import React, { useEffect,useMemo, useState} from "react";
import "./app.css";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Start from "./components/Start";

function App() {
const [username,setUsername] = useState(null);
const [stop, setStop] = useState(false);
const [earned, setEarned] = useState("$ 0");
const [questionNumber, setQuestionNumber] = useState(1);
const data = [
    {
      id: 1,
      question: "By what name is the full moon on April 26th this year called?",
      answers: [
        {
          text: "Black Moon",
          correct: false,
        },
        {
          text: "Pink Moon",
          correct: true,
        },
        {
          text: "White Moon",
          correct: false,
        },
        {
          text: "Red Moon",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "2-deoxy-D-glucose (2-DG), which was recently approved by the DCGI, has been developed by which institution?",
      answers: [
        {
          text: "ISRO",
          correct: false,
        },
        {
          text: "DRDO",
          correct: true,
        },
        {
          text: "HAL",
          correct: false,
        },
        {
          text: "AIIMS",
          correct: false,
        },
      ],
    },
    {
      id: 4,
      question: "What is “black fungus” medically called?",
      answers: [
        {
          text: " Blue green Algae",
          correct: false,
        },
        {
          text: "Cutaneous candidiasis",
          correct: false,
        },
        {
          text: "Mucormycosis",
          correct: true,
        },
        {
          text: "Onychomycosis",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "SpaceX announced a new partnership with which technology company, to strengthen use of its satellite Internet connectivity?",
      answers: [
        {
          text: "Google",
          correct: true,
        },
        {
          text: "Apple",
          correct: false,
        },
        {
          text: "Microsoft",
          correct: false,
        },
        {
          text: "IBM",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "Which institution has launched the world’s first satellite-based global coral reef bleaching monitoring system?",
      answers: [
        {
          text: "SpaceX",
          correct: false,
        },
        {
          text: "Allen Coral Atlas",
          correct: true,
        },
        {
          text: "Oxford University",
          correct: false,
        },
        {
          text: "Blue Origin",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "CoviSelf  a self-use kit for testing COVID 19 infection, is developed by which company?",
      answers: [
        {
          text: "SII",
          correct: false,
        },
        {
          text: "Johnson & Johnson",
          correct: false,
        },
        {
          text: "Mylab",
          correct: true,
        },
        {
          text: "Bharat Biotech",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Falcon 9 rocket is used by which space agency?",
      answers: [
        {
          text: "SpaceX",
          correct: true,
        },
        {
          text: " Roscosmos",
          correct: false,
        },
        {
          text: "NASA",
          correct: false,
        },
        {
          text: "ISRO",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "What is the name of the disinfection system launched in Telangana, to reuse the PPEs and other materials of healthcare workers?",
      answers: [
        {
          text: "RRR Kavach",
          correct: false,
        },
        {
          text: "Reuse Health",
          correct: false,
        },
        {
          text: "Vajra Kavach",
          correct: true,
        },
        {
          text: "Suraksha Kavach",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "OMS Technology which was making news recently, is associated with which field?",
      answers: [
        {
          text: "Oxygen distributionI",
          correct: true,
        },
        {
          text: "Bio Gas production",
          correct: false,
        },
        {
          text: "Cryptocurrency Mining",
          correct: false,
        },
        {
          text: "Vaccine Manufacture",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "Guillain-Barre Syndrome is reported to be associated with which vaccine?",
      answers: [
        {
          text: " Sinovac",
          correct: false,
        },
        {
          text: "Sputnik",
          correct: false,
        },
        {
          text: "AstraZeneca-Oxford Vacccine",
          correct: true,
        },
        {
          text: "Covaxin",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which pharma company manufactures the DRDO drug 2-DG to treat Covid patients?",
      answers: [
        {
          text: "Serum Institute",
          correct: false,
        },
        {
          text: "Dr Reddys",
          correct: true,
        },
        {
          text: "Sun Pharma",
          correct: false,
        },
        {
          text: "Bharat Biotech",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Which IT major has proposed to roll out blockchain-based open-source system to track vaccine supply chains?",
      answers: [
        {
          text: "Tech Mahindra",
          correct: true,
        },
        {
          text: "TCS",
          correct: false,
        },
        {
          text: "HCL",
          correct: false,
        },
        {
          text: "Wipro",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "Which Indian institution has developed a heat-tolerant Covid vaccine?",
      answers: [
        {
          text: "KIIT",
          correct: false,
        },
        {
          text: " IIT Madras",
          correct: false,
        },
        {
          text: " NIV",
          correct: false,
        },
        {
          text: "IISc Bengaluru",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
  ];

const moneyPyramid = useMemo(
    () =>
    [
  {id:1 , amount: " $ 100"},
  {id:2 , amount: " $ 200"},
  {id:3 , amount: " $ 300"},
  {id:4 , amount: " $ 400"},
  {id:5 , amount: " $ 500"},
  {id:6 , amount: " $ 600"},
  {id:7 , amount: " $ 700"},
  {id:8 , amount: " $ 800"},
  {id:9 , amount: " $ 900"},
  {id:10 , amount: " $ 1000"},
  {id:11 , amount: " $ 1100"},
  {id:12 , amount: " $ 1200"},
  {id:13 , amount: " $ 1300"},
  {id:14 , amount: " $ 1400"},
  {id:15 , amount: " $ 1500"}
].reverse(),
[]
);

useEffect(() => {
  questionNumber > 1 &&
    setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
}, [questionNumber, moneyPyramid]); 


  return(
    <div className="app">
      {username ? (
        <>
        <div className="main">
     {stop ? (
     <h1 className="endText">You earned: {earned}</h1>
     ) : (
<>
      <div className="top">
        <div className="timer"> 
        <Timer setStop={setStop} questionNumber={questionNumber}   />
        </div>
      </div>
      <div className="bottom">
        <Trivia data ={data} 
        setStop={setStop} 
        questionNumber={questionNumber} 
        setQuestionNumber={setQuestionNumber}  />  
      </div>
      </>
     
 )}
</div>
    <div className="pyramid">
    <ul className="moneyList">
      {moneyPyramid.map((m) => (
      <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListitem"}>
          <span className="moneyListItemNumber">{m.id}</span>
          <span className="moneyListItemAmount">{m.amount}</span>
        </li>
      ))}
    </ul>
    </div>
        </>
      ) : ( 
      <Start setUsername={setUsername} />
      )}
    </div>
  );
}
export default App;