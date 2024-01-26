import React from "react";
import Sidebar from "./components/sidebar";
import Task from "./components/task";

const Content = () => {
    return (
        <>
            <Task />
            <Sidebar />
        </>
    );
};

export default Content;