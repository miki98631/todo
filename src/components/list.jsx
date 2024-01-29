import React from "react";
import './styles/list.scss';

const List = () => {
    return (
        <div className="container">
            <div className="box">
                <div className="photo">
                    <p className="photoText">
                        ＋add photo
                    </p>
                </div>
                <div className="title">Title</div>
            </div>

            <div className="box">
                <div className="photo">
                    <p className="photoText">
                        ＋add photo
                    </p>
                </div>
                <div className="title">Title</div>
            </div>

            <div className="box">
                <div className="photo">
                    <p className="photoText">
                        ＋add photo
                    </p>
                </div>
                <div className="title">Title</div>
            </div>
        </div>
    );
};

export default List;