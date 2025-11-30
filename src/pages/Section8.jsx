import React, { useState } from "react";

export default function Section8() {
  const [numbers, setNumbers] = useState([12, 45, 23, 67, 34, 89, 15]);
  const [newNum, setNewNum] = useState("");

  const mean = numbers.reduce((a, b) => a + b, 0) / numbers.length;
  const sorted = [...numbers].sort((a, b) => a - b);
  const median = sorted[Math.floor(sorted.length / 2)];
  const max = Math.max(...numbers);
  const min = Math.min(...numbers);

  const addNumber = () => {
    if (newNum && !isNaN(newNum)) {
      setNumbers([...numbers, parseFloat(newNum)]);
      setNewNum("");
    }
  };

  const removeNumber = (index) => {
    setNumbers(numbers.filter((_, i) => i !== index));
  };

  return (
    <div className="card">
      <h2>📊 Statistics Calculator</h2>
      
      <div className="stats-demo">
        <div className="demo-section">
          <h3>Data Set</h3>
          <div className="numbers-display">
            {numbers.map((num, idx) => (
              <span key={idx} className="number-tag">
                {num}
                <button onClick={() => removeNumber(idx)} className="remove-btn">×</button>
              </span>
            ))}
          </div>
          <div className="flex-row" style={{marginTop: '10px'}}>
            <input 
              type="number" 
              value={newNum}
              onChange={(e) => setNewNum(e.target.value)}
              placeholder="Add a number"
            />
            <button onClick={addNumber}>Add</button>
          </div>
        </div>

        <div className="demo-section">
          <h3>Statistics</h3>
          <div className="stats-grid">
            <div className="stat-card">
              <span className="stat-label">Mean</span>
              <span className="stat-value">{mean.toFixed(2)}</span>
            </div>
            <div className="stat-card">
              <span className="stat-label">Median</span>
              <span className="stat-value">{median}</span>
            </div>
            <div className="stat-card">
              <span className="stat-label">Max</span>
              <span className="stat-value">{max}</span>
            </div>
            <div className="stat-card">
              <span className="stat-label">Min</span>
              <span className="stat-value">{min}</span>
            </div>
            <div className="stat-card">
              <span className="stat-label">Count</span>
              <span className="stat-value">{numbers.length}</span>
            </div>
            <div className="stat-card">
              <span className="stat-label">Range</span>
              <span className="stat-value">{max - min}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
