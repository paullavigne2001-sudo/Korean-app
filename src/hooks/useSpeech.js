import { useState } from "react";

export default function useSpeech() {
  const [speaking, setSpeaking] = useState(false);

  const speak = (text) => {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "ko-KR";
    u.onstart = () => setSpeaking(true);
    u.onend = () => setSpeaking(false);
    speechSynthesis.cancel();
    speechSynthesis.speak(u);
  };

  return { speak, speaking };
}
