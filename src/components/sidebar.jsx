import React, { useState } from 'react';
import './styles/sidebar.scss';
import Modal from "./Modal";

const Sidebar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return  (
        <div className="Sidebar">
            <ul className="SidebarList">
                <h2>Task Manager</h2>
                <button className="row" id="add" onClick={openModal}>+ add list</button>
                <li className="row">List 1</li>
                <li className="row">List 2</li>
                <li className="row">List 3</li>
                <Modal isOpen={isModalOpen} onClose={closeModal} modalContent="Modal Content" />
            </ul>
        </div>
    );
};

export default Sidebar;
