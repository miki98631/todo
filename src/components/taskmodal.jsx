import React, { useState, useRef, useEffect } from 'react';
import "./styles/taskmodal.scss";

const TaskModal = ({ onClose, onCreate }) => {
    const [newTask,setNewTask] = useState('');
    const [newDatetime,setNewDatetime] = useState('');
    const [newNote, setNewNote] = useState('');
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
            title: newTask,
            datetime : newDatetime,
            note : newNote
        };

        onCreate(newList);

        //リセット
        setNewTask('');

        // モーダルを閉じる
        onClose();
    };

    return (
        <>
            <div className="modal-overlay-task">
                <div className="modal-task" ref={modalRef}>
                    <input
                        className="title-task"
                        type="text"
                        placeholder="Title"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <input className="datetime-task" type="datetime-local" onChange={(e) => setNewDatetime(e.target.value)}/>
                    <textarea className="note-task" onChange={(e) => setNewNote(e.target.value)}/>
                    <button onClick={handleCreate}>Create</button>
                </div>


            </div>
        </>
    );
};

export default TaskModal;