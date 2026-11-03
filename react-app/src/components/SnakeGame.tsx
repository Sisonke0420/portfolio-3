import { useEffect, useRef, useState, type KeyboardEvent } from 'react';

const BOARD_SIZE = 12;
const TICK_MS = 170;

type Point = { x: number; y: number };
type Direction = 'up' | 'down' | 'left' | 'right';
type GameStatus = 'ready' | 'playing' | 'over' | 'won';

const startingSnake: Point[] = [
  { x: 4, y: 6 },
  { x: 3, y: 6 },
  { x: 2, y: 6 },
];

const directionSteps: Record<Direction, Point> = {
  up: { x: 0, y: -1 },
  down: { x: 0, y: 1 },
  left: { x: -1, y: 0 },
  right: { x: 1, y: 0 },
};

function isOpposite(first: Direction, second: Direction): boolean {
  return (first === 'up' && second === 'down')
    || (first === 'down' && second === 'up')
    || (first === 'left' && second === 'right')
    || (first === 'right' && second === 'left');
}

function randomFood(snake: Point[]): Point | null {
  const openCells: Point[] = [];
  for (let y = 0; y < BOARD_SIZE; y += 1) {
    for (let x = 0; x < BOARD_SIZE; x += 1) {
      if (!snake.some((segment) => segment.x === x && segment.y === y)) {
        openCells.push({ x, y });
      }
    }
  }
  return openCells.length > 0 ? openCells[Math.floor(Math.random() * openCells.length)] : null;
}

function SnakeGame() {
  const [snake, setSnake] = useState(startingSnake);
  const [food, setFood] = useState<Point>({ x: 8, y: 6 });
  const [status, setStatus] = useState<GameStatus>('ready');
  const [score, setScore] = useState(0);
  const snakeRef = useRef(snake);
  const foodRef = useRef(food);
  const directionRef = useRef<Direction>('right');
  const lastDirectionRef = useRef<Direction>('right');
  const boardRef = useRef<HTMLDivElement>(null);

  function changeDirection(nextDirection: Direction) {
    if (
      status !== 'playing'
      || isOpposite(directionRef.current, nextDirection)
      || isOpposite(lastDirectionRef.current, nextDirection)
    ) return;
    directionRef.current = nextDirection;
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    const keyDirections: Record<string, Direction> = {
      ArrowUp: 'up',
      w: 'up',
      W: 'up',
      ArrowDown: 'down',
      s: 'down',
      S: 'down',
      ArrowLeft: 'left',
      a: 'left',
      A: 'left',
      ArrowRight: 'right',
      d: 'right',
      D: 'right',
    };
    const nextDirection = keyDirections[event.key];
    if (!nextDirection) return;
    event.preventDefault();
    changeDirection(nextDirection);
  }

  function startGame() {
    const initialSnake = [...startingSnake];
    snakeRef.current = initialSnake;
    foodRef.current = { x: 8, y: 6 };
    directionRef.current = 'right';
    lastDirectionRef.current = 'right';
    setSnake(initialSnake);
    setFood(foodRef.current);
    setScore(0);
    setStatus('playing');
    window.requestAnimationFrame(() => boardRef.current?.focus());
  }

  useEffect(() => {
    if (status !== 'playing') return undefined;

    const timer = window.setInterval(() => {
      const currentSnake = snakeRef.current;
      const step = directionSteps[directionRef.current];
      lastDirectionRef.current = directionRef.current;
      const nextHead = {
        x: currentSnake[0].x + step.x,
        y: currentSnake[0].y + step.y,
      };
      const eating = nextHead.x === foodRef.current.x && nextHead.y === foodRef.current.y;
      const bodyToCheck = eating ? currentSnake : currentSnake.slice(0, -1);
      const hitWall = nextHead.x < 0 || nextHead.y < 0
        || nextHead.x >= BOARD_SIZE || nextHead.y >= BOARD_SIZE;
      const hitSelf = bodyToCheck.some((segment) => segment.x === nextHead.x && segment.y === nextHead.y);

      if (hitWall || hitSelf) {
        setStatus('over');
        return;
      }

      const nextSnake = [nextHead, ...currentSnake.slice(0, eating ? undefined : -1)];
      snakeRef.current = nextSnake;
      setSnake(nextSnake);

      if (eating) {
        const nextFood = randomFood(nextSnake);
        if (!nextFood) {
          setScore((currentScore) => currentScore + 1);
          setStatus('won');
          return;
        }
        foodRef.current = nextFood;
        setFood(nextFood);
        setScore((currentScore) => currentScore + 1);
      }
    }, TICK_MS);

    return () => window.clearInterval(timer);
  }, [status]);

  const boardCells = Array.from({ length: BOARD_SIZE * BOARD_SIZE }, (_, index) => {
    const x = index % BOARD_SIZE;
    const y = Math.floor(index / BOARD_SIZE);
    const segmentIndex = snake.findIndex((segment) => segment.x === x && segment.y === y);
    const hasFood = food.x === x && food.y === y;
    const cellClass = [
      'snake-cell',
      segmentIndex === 0 ? 'is-snake-head' : '',
      segmentIndex > 0 ? 'is-snake-body' : '',
      hasFood ? 'is-snake-food' : '',
    ].filter(Boolean).join(' ');
    return <span className={cellClass} key={index} aria-hidden="true" />;
  });

  return (
    <div className="snake-game" aria-labelledby="snake-game-heading">
      <div className="snake-game-heading">
        <p className="eyebrow">A tiny distraction</p>
        <h3 id="snake-game-heading">Snake, meet snack.</h3>
        <p id="snake-instructions">Use arrow keys or WASD after starting. Please do not eat the walls.</p>
      </div>
      <div
        ref={boardRef}
        className="snake-board"
        role="group"
        aria-label={`Snake game. Score ${score}.${status === 'playing' ? ' Use arrow keys or WASD to move.' : ''}`}
        aria-describedby="snake-instructions"
        tabIndex={0}
        onKeyDown={handleKeyDown}
      >
        {boardCells}
        {status !== 'playing' && (
          <div className="snake-overlay">
            <p>
              {status === 'over'
                ? `Game over. You collected ${score} snack${score === 1 ? '' : 's'}.`
                : status === 'won'
                  ? 'You filled the board. Please accept this tiny trophy.'
                  : 'Ready when you are.'}
            </p>
            <button className="snake-start" type="button" onClick={startGame}>
              {status === 'ready' ? 'Start a game' : 'Play again'}
            </button>
          </div>
        )}
      </div>
      <div className="snake-controls" aria-label="Snake direction controls">
        <button type="button" aria-label="Move up" disabled={status !== 'playing'} onClick={() => changeDirection('up')}>↑</button>
        <div>
          <button type="button" aria-label="Move left" disabled={status !== 'playing'} onClick={() => changeDirection('left')}>←</button>
          <button type="button" aria-label="Move down" disabled={status !== 'playing'} onClick={() => changeDirection('down')}>↓</button>
          <button type="button" aria-label="Move right" disabled={status !== 'playing'} onClick={() => changeDirection('right')}>→</button>
        </div>
      </div>
      <p className="snake-score" aria-live="polite">Snacks: {score}</p>
    </div>
  );
}

export default SnakeGame;
