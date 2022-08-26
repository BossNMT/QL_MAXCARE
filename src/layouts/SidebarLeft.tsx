import React from 'react';
import { Layout } from 'antd';
import './styles/_sidebar.scss';
import MenuSider from './MenuSider';
import AccountGroups from './AccountGroups';

const SidebarLeft = () => {
  return (
    <div className="sider m-t-5" style={{ width: '254.93px' }}>
      <Layout.Sider className="position-rel top-0 background-none full-height">
        <div className="menu-sider-container">
          <div className="menu-sider-wrapper">
            <MenuSider />
          </div>
        </div>
        <div className="account-groups full-height" style={{ boxShadow: '0 6px 10px -4px #00000029' }}>
          <AccountGroups />
        </div>
      </Layout.Sider>
    </div>
  );
};

export default SidebarLeft;
