export default function Home({ lessons, onSelect, onHangul }) {
  return (
    <div>
      <h1>🇰🇷 Korean App</h1>
      {lessons.map(l => (
        <div key={l.id}>
          <h3>{l.emoji} {l.title}</h3>
          <button onClick={() => onSelect(l, "lesson")}>📖</button>
          <button onClick={() => onSelect(l, "flashcards")}>🃏</button>
          <button onClick={() => onSelect(l, "quiz")}>🎯</button>
          <button onClick={() => onSelect(l, "audio")}>🔊</button>
        </div>
      ))}
      <button onClick={onHangul}>🔤 Hangeul</button>
    </div>
  );
}
