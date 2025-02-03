import React, { useState } from 'react';
import './Myplan.css';

const MyPlan = () => {
    const [mealPlan, setMealPlan] = useState(
        Array.from({ length: 6 }, (_, index) => ({
            day: index + 1,
            breakfast: 'Oatmeal with fruits',
            lunch: 'Grilled chicken salad',
            dinner: 'Salmon with vegetables',
            completed: false
        }))
    );

    const handleStatusChange = (dayIndex) => {
        setMealPlan(prevPlan =>
            prevPlan.map((day, index) =>
                index === dayIndex ? { ...day, completed: !day.completed } : day
            )
        );
    };

    return (
        <div className="tracker-container">
            <h2 className="tracker-title">MY PLAN</h2>
            <h4> Summer Body Diet</h4>
            <div className="table-container">

                <table className="meal-table">
                    <thead>
                        <tr>
                            <th>Day</th>
                            <th>Breakfast</th>
                            <th>Lunch</th>
                            <th>Dinner</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {mealPlan.map((day, index) => (
                            <tr key={day.day} className={day.completed ? 'completed-row' : ''}>
                                <td>Day {day.day}</td>
                                <td>{day.breakfast}</td>
                                <td>{day.lunch}</td>
                                <td>{day.dinner}</td>
                                <td className="checkbox-cell">
                                    <input
                                        type="checkbox"
                                        checked={day.completed}
                                        onChange={() => handleStatusChange(index)}
                                        className="status-checkbox"
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyPlan;