import React, { useState } from 'react';
import './Workoutplanlist.css';

const WorkoutPlanList = () => {
    const [plans, setPlans] = useState([
        { id: 1, title: 'Summer Body Workout', price: '100', days: 30 },
        { id: 2, title: 'Weight Loss Workout', price: '100', days: 45 },
        { id: 3, title: 'Muscle Gain Workout', price: '100', days: 60 }
    ]);

    const handleDelete = (id) => {
        setPlans(plans.filter(plan => plan.id !== id));
    };

    return (
        <div className="diet-plan-list-container">
            <h2 className="diet-plan-list-title">WORKOUT PLAN</h2>
            {plans.length === 0 ? (
                <p className="no-plans-message">No diet plans available</p>
            ) : (
                <table className="diet-plan-list-table">
                    <thead>
                        <tr>
                            <th>Plan Title</th>
                            <th>Days</th>
                            <th>Price</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {plans.map((plan) => (
                            <tr key={plan.id}>
                                <td>{plan.title}</td>
                                <td>{plan.days}</td>
                                <td>{plan.price}</td>
                                <td>
                                    <button
                                        className="delete-btn"
                                        onClick={() => handleDelete(plan.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default WorkoutPlanList;