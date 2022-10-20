import React, { useState, useEffect } from 'react';
import FlashCard from '../components/Flashcard';
import Dropdown from '../components/Dropdown';
import flashdata from './flashdata';
import { IoAddCircleOutline } from "react-icons/io5";
import '../stylesheets/flash.scss';


const FlashContainer = () => {

  const [subjectList, setSubjectList] = useState([]);
  const [questions, setQuestions] = useState(flashdata[0].questions);
  const [index, setIndex] = useState(0);

  const loadSubjects = async () => {
    try {
      fetch('/api/home')
        .then(res => res.json())
        .then(res => {
          console.log(res[0].questions);
          setSubjectList(res);
          setQuestions(res[0].questions);
          console.log(questions);
          
        });   
    }
    catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
   
    loadSubjects();
    //setSubjectList(flashdata);
  }, []);
    
  return (
    <section className="flashcontainer">
      <div className="topbutton">
        <Dropdown subjectList={subjectList} questions={questions} setQuestions = {setQuestions} />
        <button className = 'reacticon'><IoAddCircleOutline/></button>
      </div>
      <div className="questionindex">{index + 1}/{questions.length}</div>
      <FlashCard subjectList={subjectList} questions={questions} setQuestions={setQuestions} index={index} setIndex={setIndex} />
    </section>
  );
};

export default FlashContainer;
