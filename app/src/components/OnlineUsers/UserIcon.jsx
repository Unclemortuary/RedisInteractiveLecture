import React from 'react';

const UserIcon = ({ isOnline, id}) => {
    const className = isOnline ? 'online' : 'offline';
    return (
        <div className="bulb-container">
            <button className={`online-user-bulb ${className}`}/>
            <span>{id}</span>
        </div>
    )
};

export default UserIcon;