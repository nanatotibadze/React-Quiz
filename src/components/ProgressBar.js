function ProgressBar({points, index, numQuestions, maxPoints, answer}) {
  return (
    <div>
      <header className='progress'>
        <progress max={numQuestions} value={index + Number(answer !== null)} />
        <p>
          Question <strong> {index + 1}</strong>/{numQuestions}
        </p>
        <p>
          Points
          <strong> {points}</strong>/{maxPoints}
        </p>
      </header>
    </div>
  );
}

export default ProgressBar;
