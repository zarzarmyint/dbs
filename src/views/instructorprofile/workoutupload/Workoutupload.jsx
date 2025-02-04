import React, { useState } from 'react';
import './Workoutupload.css';

const WorkoutPlanUpload = () => {
    const [title, setTitle] = useState('');
    const [days, setDays] = useState(1);
    const [dietPlan, setDietPlan] = useState([]);
    const [price, setPrice] = useState('');

    const createDietPlan = () => {
        const newWorkoutplan = Array.from({ length: days }, (_, dayIndex) => ({
            day: dayIndex + 1,
            workoutname: '',
            category: '',
            numberofreps: '',
            numberofsets: ''
        }));
        setDietPlan(newWorkoutplan);
    };

    const resetplan = () => {
        setDietPlan([]);
        setTitle("");
        setDays("");
        setPrice("");
    }

    const saveplan = () => {

        resetplan();
    }

    const updateMeal = (dayIndex, meal, value) => {
        const updatedPlan = [...dietPlan];
        updatedPlan[dayIndex][meal] = value;
        setDietPlan(updatedPlan);
    };

    return (
        <div className="diet-plan-container">
            <h2 className="diet-plan-title">WORKOUT PLAN</h2>
            <a href="/workoutplanlist" className='dietplanlist'>ALL WORKOUT PLAN</a>
            <div className="input-section">

                <input
                    type="text"
                    placeholder="Workout Plan Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="diet-input title-input"
                />
                <input
                    type="number"
                    placeholder="Number of Days"
                    value={days}
                    onChange={(e) => setDays(Math.max(1, parseInt(e.target.value) || 1))}
                    min="1"
                    className="diet-input days-input"
                />
                <input
                    type="text"
                    placeholder="Price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="diet-input title-input"
                />
                <button onClick={createDietPlan} className="create-btn">CREATE PLAN</button>
            </div>

            {dietPlan.length > 0 && (
                <table className="diet-plan-table">
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Workout Name</th>
                            <th>Category</th>
                            <th>Number of reps</th>
                            <th>Number of sets</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dietPlan.map((day, dayIndex) => (
                            <tr key={day.day}>
                                <td>{day.day}</td>
                                {['workoutname', 'category', 'numberofreps', 'numberofsets'].map((meal) => (
                                    <td key={meal}>
                                        <input
                                            type="text"
                                            placeholder={`Enter ${meal}`}
                                            value={day[meal]}
                                            onChange={(e) => updateMeal(dayIndex, meal, e.target.value)}
                                            className="diet-input meal-input"
                                        />
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
            <button className={`savebtn ${dietPlan.length == 0 ? 'hide' : 'show'}`} onClick={saveplan}>SAVE PLAN</button>
        </div>
    );
};

export default WorkoutPlanUpload;