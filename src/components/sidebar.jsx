import React, { useState } from 'react';
import './styles/sidebar.scss';
import Modal from "./Modal";

const Sidebar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddListClick = () => {
        // + add listボタンがクリックされたときにモーダルを表示
        setIsModalOpen(true);
    };

    return  (
        <div className="Sidebar">
            <ul className="SidebarList">
                <h2>Task Manager</h2>
                <li className="row" id="add" onClick={handleAddListClick}>+ add list</li>
                <li className="row">List 1</li>
                <li className="row">List 2</li>
                <li className="row">List 3</li>

            </ul>

            {isModalOpen && (
                <Modal
                    onClose={() => setIsModalOpen(false)}
                    onCreate={(newList) => {
                        // 新しいリストを作成するロジックをここに追加
                        console.log(`新しいリスト: ${newList}`);
                        setIsModalOpen(false);
                    }}
                />
            )}
        </div>
    );
};

export default Sidebar;
