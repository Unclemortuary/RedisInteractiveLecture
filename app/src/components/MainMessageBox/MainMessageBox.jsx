import React from 'react';

const MainMessageBox = (props) => {
    return (
        <div className="message-container">
            <h1>{props.children}</h1>
        </div>
    )
};

export default MainMessageBox;