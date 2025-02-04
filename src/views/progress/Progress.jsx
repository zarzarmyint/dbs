import React, { useState } from 'react';
import './Progress.css';

const Progress = () => {
    const [goalWeight, setGoalWeight] = useState(70);
    const [currentWeight, setCurrentWeight] = useState('');
    const [weightEntries, setWeightEntries] = useState([]);

    const handleAddWeight = () => {
        if (currentWeight) {

            const newEntry = {
                date: new Date().toLocaleDateString(),
                goalWeight: goalWeight,
                currentWeight: parseFloat(currentWeight),

            };

            setWeightEntries([...weightEntries, newEntry]);
            setCurrentWeight('');
        }
    };

    return (
        <div className="weight-tracker-container">
            <div className="input-section">
                <div className="input-group">
                    <label>Goal Weight</label>
                    <input
                        type="number"
                        value={goalWeight}
                        readOnly
                        className="readonly-input"
                    />
                </div>
                <div className="input-group">
                    <label>Current Weight</label>
                    <input
                        type="number"
                        value={currentWeight}
                        onChange={(e) => setCurrentWeight(e.target.value)}
                        placeholder="Enter current weight"
                    />
                </div>
                <button onClick={handleAddWeight} className='addentry'> Add Entry</button>
            </div>

            <table className="weight-table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Goal Weight (kg)</th>
                        <th>Current Weight</th>

                    </tr>
                </thead>
                <tbody>
                    {weightEntries.map((entry, index) => (
                        <tr key={index}>
                            <td>{entry.date}</td>
                            <td>{entry.goalWeight}</td>
                            <td>{entry.currentWeight}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Progress;