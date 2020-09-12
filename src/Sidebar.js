import React from 'react'
import "./Sidebar.css";
import SidebarRow from "./SidebarRow";

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow title="Pages"/>
            <SidebarRow title="Friends"/>
        </div>
    )
}

export default Sidebar
