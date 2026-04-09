import { useState } from "react";
import BackBtn from "../components/BackBtn";
import { generateQuiz } from "../utils/quiz";

export default function Quiz({ lesson, onBack }) {
  const [q,setQ]=useState(generateQuiz(lesson.words));
  const [score,setScore]=useState(0);

  const answer=(opt)=>{
    if(opt.korean===q.correct.korean) setScore(s=>s+1);
    setQ(generateQuiz(lesson.words));
  };

  return (
    <div>
      <BackBtn onClick={onBack}/>
      <h3>{q.correct.korean}</h3>
      {q.options.map((o,i)=>(
        <button key={i} onClick={()=>answer(o)}>{o.french}</button>
      ))}
      <p>Score: {score}</p>
    </div>
  );
}
