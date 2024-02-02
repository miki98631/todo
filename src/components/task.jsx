import React, {useState} from "react";
import './styles/task.scss';
import TaskModal from "./taskmodal";

const  Task = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddListClick = () => {
        // + add listボタンがクリックされたときにモーダルを表示
        setIsModalOpen(true);
    };


    return (
        <div className="container">
            <div className="photo">
                <p className="photoText">
                    ＋add photo
                </p>
            </div>
            <h1>Your Title</h1>
            <p className="yourDescription">description...</p>
            <p className="addYourTask"  onClick={handleAddListClick}>+ task</p>
            <textarea
                className="textInput"
                placeholder=""
            />

            {isModalOpen && (
                <TaskModal
                    onClose={() => setIsModalOpen(false)}
                    onCreate={(newTask) => {
                        // 新しいリストを作成するロジックをここに追加
                        console.log(`新しいタスク: ${newTask}`);
                        setIsModalOpen(false);
                    }}
                />
            )}
        </div>
    );
};

export default Task;