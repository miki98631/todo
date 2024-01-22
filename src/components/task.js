import React from "react";
import './css/task.css';

const  Task = () => {
    return (
        <div className="container">
            <div className="photo">
                <p className="photoText">
                    ＋add photo
                </p>
            </div>
            <h1>Your title</h1>
            <p className="description">description...</p>
        </div>
    );
};

export default Task;