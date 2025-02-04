import React, { useState } from 'react';
import './Memberlevel.css';

const initialUsers = [
    { id: 1, username: 'John Doe', totalDays: 90, completedDays: 45 },
    { id: 2, username: 'Jane Smith', totalDays: 60, completedDays: 30 },
    { id: 3, username: 'Mike Brown', totalDays: 120, completedDays: 60 },
    { id: 4, username: 'Sarah Wilson', totalDays: 45, completedDays: 22 },
    { id: 5, username: 'David Lee', totalDays: 75, completedDays: 37 },

];

const MemberLevel = () => {
    const [users, setUsers] = useState(
        initialUsers.map(user => ({
            ...user,
            level: 'Beginner'
        }))
    );

    const handleLevelChange = (id, newLevel) => {
        setUsers(users.map(user =>
            user.id === id ? { ...user, level: newLevel } : user
        ));
    };

    return (
        <div className="user-tracker-container">
            {users.map(user => (
                <div key={user.id} className="user-card">
                    <h3 className="username">{user.username}</h3>
                    <div className="user-details">
                        <p>Total Days: {user.totalDays}</p>
                        <p>Completed Days: {user.completedDays}</p>
                        <div className="level-selector">
                            <label>Level:</label>
                            <select
                                value={user.level}
                                onChange={(e) => handleLevelChange(user.id, e.target.value)}
                            >
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </select>
                            <button className='savelevelbtn'>Save level</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MemberLevel;