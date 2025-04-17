import { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  
  const threshold = 10;
  
  const increment = () => {
    const newCount = count + 1;
    setCount(newCount);
    setShowMessage(newCount >= threshold);
  };
  
  const decrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      setShowMessage(newCount >= threshold);
    }
  };
  
  return (
    <div className="counter-container">
      <h1 className="counter-title">Click Counter</h1>
      
      <div className="counter-display">
        <span className="counter-value">{count}</span>
      </div>
      
      <div className="counter-buttons">
        <button 
          onClick={decrement}
          disabled={count === 0}
          className={`counter-button decrease-button ${count === 0 ? 'button-disabled' : ''}`}
        >
          Decrease
        </button>
        
        <button 
          onClick={increment}
          className="counter-button increase-button"
        >
          Increase
        </button>
      </div>
      
      {showMessage && (
        <div className="threshold-message">
          You've reached the threshold of {threshold}!
        </div>
      )}
    </div>
  );
}

export default Counter;