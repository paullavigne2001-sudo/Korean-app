import BackBtn from "../components/BackBtn";
import useSpeech from "../hooks/useSpeech";

export default function Hangul({ onBack }) {
  const speech = useSpeech();
  const letters=["ㄱ","ㄴ","ㄷ","ㄹ","ㅁ","ㅂ"];

  return (
    <div>
      <BackBtn onClick={onBack}/>
      <h2>Hangeul</h2>
      {letters.map((l,i)=>(
        <button key={i} onClick={()=>speech.speak(l)}>{l}</button>
      ))}
    </div>
  );
}
