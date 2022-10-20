import React, { useState, useEffect } from 'react';



const Dropdown = ({ subjectList, questions, setQuestions }) => {

  const chooseSub =  (event) => {
    const subject = event.target.value;
    for (const obj of subjectList) {
      if (obj.subject === subject) {
        setQuestions(obj.questions);
        console.log('questions picked');
      }
    }
 
  };

  return (
    <form >
      <label>
       
        <select onChange={chooseSub}>
          
          {subjectList.map((sub,index) => <option value={sub.subject} key = {index}>{sub.subject}</option>)}
        </select>
        
      </label>
    </form>
  );
};

export default Dropdown;

