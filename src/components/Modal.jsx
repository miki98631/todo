import React, { useState, useRef, useEffect } from 'react';
import './styles/Modal.scss';

const Modal = ({ onClose, onCreate }) => {
    const [newListTitle, setNewListTitle] = useState('');
    const [newListDescription, setNewListDescription] = useState('');
    const modalRef = useRef();

    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (modalRef.current && !modalRef.current.contains(e.target)) {
                // モーダルの外側をクリックしたら閉じる
                onClose();
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [onClose]);

    const handleCreate = () => {
        // データを作成し、親コンポーネントに渡す
        const newList = {
            title: newListTitle,
            description: newListDescription
        };

        onCreate(newList);

        //リセット
        setNewListTitle('');
        setNewListDescription('');

        // モーダルを閉じる
        onClose();
    };


    return (
        <div className="modal-overlay">
            <div className="modal" ref={modalRef}>
                <div className="photo">
                    <p className="photoText">＋add photo</p>
                </div>
                <input
                    className="title"
                    type="text"
                    placeholder="Title"
                    value={newListTitle}
                    onChange={(e) => setNewListTitle(e.target.value)}
                />
                <textarea
                    className="description"
                    placeholder="description..."
                    value={newListDescription}
                    onChange={(e) => setNewListDescription(e.target.value)}
                />
              <button onClick={handleCreate}>Create</button>
            </div>
        </div>
    );
};

export default Modal;