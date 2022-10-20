
import React, { useState, useEffect } from 'react';
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { MdCached } from "react-icons/md";

const Flashcard = ({ sub, subjectList, questions, setQuestions,index, setIndex }) => {
  const [flip, setFlip] = useState(0);
 
  const handleClick = () => {
    if (flip === 0) setFlip(1);
    else setFlip(0);
  };
  const previous = () => {
    if (index === 0) setIndex(questions.length - 1);
    else setIndex(index - 1);
  };
  const next = () => {
    if (index === questions.length - 1) setIndex(0);
    else setIndex(index + 1);
  };
  
  //   return (
  //     <div className={`card ${flip ? 'flip' : ''}`}>
  //       <div className='front'>
  //         {questions[index][0]}
  //       </div>
  //       <div className='back'>
  //         {questions[index][1]}
  //       </div>
  //       {/* <p> {flip ? questions[index][1] : questions[index][0]}</p> */}
  //       <div className='flipbtn'>
  //         <button  onClick={() => setFlip(!flip)}>flip</button>
  //       </div>
  //     </div>
  //   );
  
  // };

  return (

    <div className="flashcard">
     
      <p className='question'>{questions[index][flip]}</p>
      <button onClick = {handleClick} ><MdCached /></button>
      <div>
        <button className="flashbutton" onClick = {previous}><IoChevronBack /></button>
        <button className="flashbutton" onClick = {next}><IoChevronForward /></button>
      </div>
    </div>
  );
};

export default Flashcard;