import { useEffect, useRef, useState } from 'react';

const targetPositions = [
  { left: '22%', top: '28%' },
  { left: '74%', top: '68%' },
  { left: '42%', top: '72%' },
  { left: '78%', top: '30%' },
  { left: '28%', top: '62%' },
  { left: '60%', top: '26%' },
  { left: '50%', top: '52%' },
  { left: '18%', top: '42%' },
];

const TARGET_COUNT = 8;
const GAME_DURATION_SECONDS = 30;

function TapSparkGame() {
  const [started, setStarted] = useState(false);
  const [caught, setCaught] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_DURATION_SECONDS);
  const deadlineRef = useRef(0);
  const complete = caught === TARGET_COUNT;
  const timedOut = started && timeLeft === 0 && !complete;
  const gameOver = complete || timedOut;

  useEffect(() => {
    if (!started || gameOver) return undefined;

    const timer = window.setInterval(() => {
      setTimeLeft(Math.max(0, Math.ceil((deadlineRef.current - Date.now()) / 1000)));
    }, 1000);

    return () => window.clearInterval(timer);
  }, [started, gameOver]);

  function startGame() {
    setCaught(0);
    setTimeLeft(GAME_DURATION_SECONDS);
    deadlineRef.current = Date.now() + GAME_DURATION_SECONDS * 1000;
    setStarted(true);
  }

  function catchSpark() {
    setCaught((count) => Math.min(count + 1, TARGET_COUNT));
  }

  return (
    <div className="tap-spark-game" aria-labelledby="tap-spark-heading">
      <div className="tap-spark-heading">
        <p className="eyebrow">A tiny distraction</p>
        <h3 id="tap-spark-heading">Tap the wandering spark.</h3>
        <p>Catch eight sparks before the 30 seconds are up.</p>
      </div>
      <div className="tap-spark-board">
        {started && !gameOver && (
          <button
            className="tap-spark-target"
            type="button"
            style={targetPositions[caught]}
            onClick={catchSpark}
            aria-label={`Catch the spark: ${caught} of ${TARGET_COUNT} caught`}
          >
            <span aria-hidden="true">✳</span>
          </button>
        )}
        {(!started || gameOver) && (
          <div className="tap-spark-overlay">
            <p>
              {complete
                ? 'Eight sparks. A flawless use of your thumbs.'
                : timedOut
                  ? `Time’s up! You caught ${caught} of ${TARGET_COUNT} sparks.`
                  : 'Ready for a tiny thumb workout?'}
            </p>
            <button type="button" className="tap-spark-start" onClick={startGame}>
              {gameOver ? 'Play again' : 'Start tapping'}
            </button>
          </div>
        )}
      </div>
      <div className="tap-spark-status">
        <p className="tap-spark-score" aria-live="polite">
          {complete ? 'Well tapped.' : `${caught} / ${TARGET_COUNT} sparks`}
        </p>
        <p className="tap-spark-timer" aria-label={`${timeLeft} seconds remaining`}>
          {started ? `${timeLeft}s` : '30s'}
        </p>
      </div>
    </div>
  );
}

export default TapSparkGame;
