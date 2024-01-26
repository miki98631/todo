import React, {　useEffect } from 'react';
import './styles/Modal.scss';

const Modal = ({ isOpen, onClose}) => {
    const handleModalAction = () => {
        // ここにモーダル内での処理を追加
        // modalContent を利用するなどの処理
    };

    useEffect(() => {
        const addListElement = document.getElementById('add');

        const handleAddListClick = (event) => {
            if (event.target === addListElement) {
                handleModalAction();
            }
        };

        addListElement.addEventListener('click', handleAddListClick);

        return () => {
            // クリーンアップ
            addListElement.removeEventListener('click', handleAddListClick);
        };
    }, []);

    return (
        <div>
            <div className={`modal ${isOpen ? 'open' : ''}`}>
              <span className="close" onClick={onClose}>
                &times;
              </span>
                <div className="modal-overlay">
                    <div className="modal">
                        <div className="photo">
                            <p className="photoText">＋add photo</p>
                        </div>
                        <h1>Title</h1>
                        <p className="description">description...</p>
                        <button type="submit" onClick={handleModalAction}>Create</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;