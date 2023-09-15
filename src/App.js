import React, { useState } from 'react';
import './App.css'; // You can style your components using CSS in this file.

function App() {
  const [examStarted, setExamStarted] = useState(false);

  const startExam = () => {
    setExamStarted(true);
    // You can add logic to initiate the oral exam here.
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Oral Exam App</h1>
        {!examStarted ? (
          <button onClick={startExam}>Start Oral Exam</button>
        ) : (
          <p>Oral exam is in progress...</p>
        )}
      </header>
    </div>
  );
}

export default App;
