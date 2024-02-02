import React, {useEffect, useState} from 'react';
import './styles/sidebar.scss';
import Modal from "./Modal";
import axios from "axios";

const Sidebar = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [list,setList] = useState([]);

    const handleAddListClick = () => {
        // + add listボタンがクリックされたときにモーダルを表示
        setIsModalOpen(true);
    };

    useEffect(() => {
        axios
            .get(`http://localhost:8080/api/lists`)
            .then((res) => {
                console.log(res.data);
                setList(res.data.list); // 取得したデータをstateにセット
            })
            .catch(() => alert('error'));
    }, []);



    return  (
        <div className="Sidebar">
            <ul className="SidebarList">
                <h2>Task Manager</h2>
                <h3 className="row" id="add" onClick={handleAddListClick}>+ add list</h3>
                {list &&
                    list.map((post) => {
                        return <li key={post.id} className="row">
                            {post.title}
                            </li>;
                    })}
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
