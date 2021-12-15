import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import './TopBar.css';

const TopBar = (props) => {
  const items = [];
  const start = <span>logo</span>
  const end = <Button label="login" className="login-btn p-button-outlined p-button-primary p-button-raised" icon="pi pi-sign-in"/> //TODO: login should be separate component
  return (
    <div className="card">
      <Menubar className="menu-bar" model={items} start={start} end={end} />
    </div>
  )
}

export default TopBar;