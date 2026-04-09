import { useState } from "react";
import Home from "./screens/Home";
import Lesson from "./screens/Lesson";
import Flashcards from "./screens/Flashcards";
import Quiz from "./screens/Quiz";
import Audio from "./screens/Audio";
import Hangul from "./screens/Hangul";
import { LESSONS } from "./data/lessons";

export default function App() {
  const [screen, setScreen] = useState("home");
  const [lesson, setLesson] = useState(null);

  return (
    <div style={{ padding: 20 }}>
      {screen === "home" && (
        <Home
          lessons={LESSONS}
          onSelect={(l, mode) => {
            setLesson(l);
            setScreen(mode);
          }}
          onHangul={() => setScreen("hangul")}
        />
      )}
      {screen === "lesson" && <Lesson lesson={lesson} onBack={() => setScreen("home")} />}
      {screen === "flashcards" && <Flashcards lesson={lesson} onBack={() => setScreen("home")} />}
      {screen === "quiz" && <Quiz lesson={lesson} onBack={() => setScreen("home")} />}
      {screen === "audio" && <Audio lesson={lesson} onBack={() => setScreen("home")} />}
      {screen === "hangul" && <Hangul onBack={() => setScreen("home")} />}
    </div>
  );
}
