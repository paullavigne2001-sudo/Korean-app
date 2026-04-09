export default function SpeakBtn({ text, speech }) {
  return <button onClick={() => speech.speak(text)}>🔊</button>;
}
