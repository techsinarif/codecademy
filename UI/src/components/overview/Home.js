import React from 'react';
import SideBarNav from '../side-navigation-bar/Sidebarnav';
import { Card } from 'primereact/card';
import './Home.css';

const OverviewHome = () => {
  return (
    <div className='overview'>
      <SideBarNav />
      <div>Breadcum</div>
      <div className='stats-view'>
        <Card title="All courses" subTitle="">  { /* TODO: These items should be separate component */ }
          98
        </Card>
        <Card title="Enrolled courses" subTitle="">  { /* TODO: These items should be separate component */ }
          5
        </Card>
        <Card title="Rank" subTitle="3">  { /* TODO: These items should be separate component */ }
          Click here for detailed info
        </Card>
        <Card title="Title" subTitle="SubTitle">  { /* TODO: These items should be separate component */ }
          Content
        </Card>
      </div>
      <div className='enrolled-courses'> { /* TODO: shows list of courses with thumbnail and will be in a separate component */ }
        <h3 className='title-enrolled-courses'>Enrolled courses</h3>
        <div className='enrolled-courses-thumbnail'>
          <Card title="Crack react interview" subTitle="">  { /* TODO: These items should be separate component */ }
          
          </Card>
          <Card title="React Hooks in Tamil" subTitle="">  { /* TODO: These items should be separate component */ }
            
          </Card>
          <Card title="Angular crash course" subTitle="">  { /* TODO: These items should be separate component */ }
            
          </Card>
          <Card title="React Redux" subTitle="">  { /* TODO: These items should be separate component */ }
            
          </Card>
        </div>
      </div>
      <div className='all-courses'> { /* TODO: shows list of courses with thumbnail and will be in a separate component */ }
        <h3 className='title-all-courses'>All courses</h3>
        <div className='all-courses-thumbnail'>
          <Card title="Crack react interview" subTitle="">  { /* TODO: These items should be separate component */ }
          
          </Card>
          <Card title="React Hooks" subTitle="">  { /* TODO: These items should be separate component */ }
            
          </Card>
          <Card title="React Hooks in Tamil" subTitle="">  { /* TODO: These items should be separate component */ }
            
          </Card>
          <Card title="React Redux" subTitle="">  { /* TODO: These items should be separate component */ }
            
          </Card>
          <Card title="Angular crash course" subTitle="">  { /* TODO: These items should be separate component */ }
            
          </Card>
          <Card title="Daily UI challenges" subTitle="">  { /* TODO: These items should be separate component */ }
            
          </Card>
          
        </div>
      </div>
    </div>
  )
};

export default OverviewHome;