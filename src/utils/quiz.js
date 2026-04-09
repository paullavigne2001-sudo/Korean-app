export function generateQuiz(words) {
  const correct = words[Math.floor(Math.random() * words.length)];
  const options = [
    correct,
    ...words.filter(w => w !== correct).sort(() => 0.5 - Math.random()).slice(0, 3)
  ];

  return {
    correct,
    options: options.sort(() => 0.5 - Math.random())
  };
}
