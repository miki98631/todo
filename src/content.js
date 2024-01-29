import React, { useState } from 'react';
import Sidebar from "./components/sidebar";
import Modal from "./components/Modal";
import Task from "./components/task";

const Content = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [contents, setContents] = useState([]);

    const handleCreate = (newContent) => {
        // 新しいコンテンツを追加
        setContents([...contents, newContent]);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <div>
                {isModalOpen && <div className="modal-overlay" onClick={handleModalClose} />}
                {isModalOpen && (
                    <Modal
                        onClose={handleModalClose}
                        onCreate={handleCreate}
                    />
                )}

                {/* 作成したコンテンツを表示 */}
                <ul>
                    {contents.map((content, index) => (
                        <li key={index}>{content}</li>
                    ))}
                </ul>
                <Task />
                <Sidebar onCreateList={handleCreate} />
            </div>
        </>
    );
};

export default Content;