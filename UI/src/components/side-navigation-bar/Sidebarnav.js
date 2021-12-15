import React, { useState } from "react";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";

import './sidebarnav.css';

const SideBarNav = () => {
  const [visibleLeft, setVisibleLeft] = useState(false);

  const customIcons = (
    <React.Fragment>
      <button className="p-sidebar-icon p-link p-mr-1">
        <span className="pi pi-print" />
      </button>
      <button className="p-sidebar-icon p-link p-mr-1">
        <span className="pi pi-arrow-right" />
      </button>
    </React.Fragment>
  );

  return (
    <div className="side-bar-navigation card">
      <Sidebar visible={visibleLeft} onHide={() => setVisibleLeft(false)}>
        <ul>
          <li>Dashboard</li>
          <li>Courses</li>
          <li>Doubts</li>
          <li>About Us</li>
        </ul>
      </Sidebar>

      <Button
        icon="pi pi-arrow-right"
        onClick={() => setVisibleLeft(true)}
        className="p-mr-2"
      />
    </div>
  );
};

export default SideBarNav;
