import { useState } from "react";
import BackBtn from "../components/BackBtn";
import useSpeech from "../hooks/useSpeech";
import { generateQuiz } from "../utils/quiz";

export default function Audio({ lesson, onBack }) {
  const speech = useSpeech();
  const [q,setQ]=useState(generateQuiz(lesson.words));

  return (
    <div>
      <BackBtn onClick={onBack}/>
      <button onClick={()=>speech.speak(q.correct.korean)}>▶ Écouter</button>
      {q.options.map((o,i)=>(
        <button key={i} onClick={()=>setQ(generateQuiz(lesson.words))}>
          {o.french}
        </button>
      ))}
    </div>
  );
}
