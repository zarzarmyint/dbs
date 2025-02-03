import React, { useState } from 'react';
import './Buydietplan.css';

const BuyDietPlan = () => {
    const [plans, setPlans] = useState([
        { id: 1, title: 'Summer Body Diet', price: 10000, days: 30 },
        { id: 2, title: 'Weight Loss Plan', price: 13000, days: 45 },
        { id: 3, title: 'Muscle Gain Diet', price: 14000, days: 60 },
        { id: 4, title: 'Summer Body Diet', price: 10000, days: 30 },
        { id: 5, title: 'Weight Loss Plan', price: 13000, days: 45 },
        { id: 6, title: 'Muscle Gain Diet', price: 14000, days: 60 }
    ]);


    return (
        <div className="diet-plan-list-container">
            <h2 className="diet-plan-list-title">DIET PLAN</h2>
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
                                        className="buy-btn"

                                    >
                                        BUY
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

export default BuyDietPlan;