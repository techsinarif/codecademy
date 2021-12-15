import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { Splitter, SplitterPanel } from 'primereact/splitter';
import Login from './Login';
import Signup from './Signup';
import './Home.css';

const Home = () => {
  const [isRegister, setAccountRegister] = useState(false);

  const switchLoginRegister = (view) => {
    console.log('login page clicked');
    if(view === 'login'){
      setAccountRegister(false);
    }else{
      setAccountRegister(true);
    }
  }

  return (
    <Splitter>
      <SplitterPanel size={65}>
          <div className="card">
            <div className="landing-text">
              <div className="content">
                <h3>The Best Online Learning</h3>
                <h3>Resource for Developers</h3>
                <Button label="Start Learning" className="login-btn p-button-outlined p-button-primary p-button-raised"/>
              </div>
            </div>
          </div>
      </SplitterPanel>
      <SplitterPanel size={35}>
          <div className="login-form-container">
            {(isRegister) ? (
              <Signup switchLoginRegister={switchLoginRegister}/>
            ) : (
              <Login switchLoginRegister={switchLoginRegister}/>
            )}
          </div>
      </SplitterPanel>
    </Splitter>
  )
}

export default Home;