import { useState } from "react";
import BackBtn from "../components/BackBtn";

export default function Flashcards({ lesson, onBack }) {
  const [i,setI]=useState(0);
  const [flip,setFlip]=useState(false);
  const w=lesson.words[i];

  return (
    <div>
      <BackBtn onClick={onBack}/>
      <div onClick={()=>setFlip(!flip)}>
        {flip ? w.french : w.korean}
      </div>
      <button onClick={()=>setI((i+1)%lesson.words.length)}>Suivant</button>
    </div>
  );
}
