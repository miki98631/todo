import React from "react";
import './css/sidebar.css';
const Sidebar = () => {
    return  (
        <div className="Sidebar">
            <ul className="SidebarList">
                <h2 className="row">Task Manager</h2>
                <li className="row">+ add list</li>
                <li className="row">List 1</li>
                <li className="row">List 2</li>
                <li className="row">List 3</li>
            </ul>
        </div>
    );
};

export default Sidebar;
