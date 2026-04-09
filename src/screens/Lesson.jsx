import BackBtn from "../components/BackBtn";
import useSpeech from "../hooks/useSpeech";

export default function Lesson({ lesson, onBack }) {
  const speech = useSpeech();

  return (
    <div>
      <BackBtn onClick={onBack}/>
      <h2>{lesson.title}</h2>
      {lesson.words.map((w,i)=>(
        <div key={i}>
          {w.korean} ({w.romanized}) - {w.french}
          <button onClick={()=>speech.speak(w.korean)}>🔊</button>
        </div>
      ))}
    </div>
  );
}
