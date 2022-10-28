import { useRef } from "react";

export default function Start({ setUsername }) {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.value && setUsername(inputRef.current.value);
  };

  return (
    <>
    
    <div className="instruction">
     <div class="alert alert-warning alert-dismissible fade show" role="alert">
  <strong>click on Instruction button</strong> To strat the Quiz, you to click on Instruction button!
  <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
</div>
    <div className="ClickInstruction">
   
    <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Click here to see Instructions</button>

<div className="offcanvas offcanvas-top full-body" tabindex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
  <div className="offcanvas-header">
    <h5 id="offcanvasTopLabel">Read the Instruction Carefully</h5>
    <button type="button" className="btn-close text-reset btn-close-white " data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  
  <div className="offcanvas-body  " >
     
This quiz consists of 15 multiple-choice questions. <br /> <br />
<b className="text-warning"> Single Attempts </b>- You will have only one attempts for this quiz. <br />
<b className="text-warning">Timing </b>- You will need to complete each of your attempts in one sitting and have only 30 sec for each question. <br /> 
<b className="text-warning"> Answers</b> - For each correct answer you will win $ 100 , for wrong answers no reward will be given. <br />
To start,  click the<b  className="text-warning"> "Start Quiz"</b> button. <br /> <br />
<div class="form-check">
  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
  <label class="form-check-label" for="flexCheckDefault">

    I Have read the instructions and agree the term and conditions!
  </label>
</div>
<strong>All the best!</strong>

    <div className="start">
        
      <input
        className="startInput"
        placeholder="Enter your name"
        ref={inputRef}
      />
      <button className="startButton border btn btn-outline-warning" onClick={handleClick}>
        Start Quiz
      </button>
    </div>
  </div>
  
</div>
</div>
    
    </>
  );
}