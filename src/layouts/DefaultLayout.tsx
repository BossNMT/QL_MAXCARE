import React, { Suspense, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Spin } from 'antd';
import { isLogin } from 'utils/jwt';
// import BreadCrumbCustom from 'components/breadcrumbCustom/BreadCrumbCustom';
const Header = React.lazy(() => import('./components/Header/Header'));
// const Sidebar = React.lazy(() => import('./Sidebar'));
// const PermissionContent = React.lazy(() => import('middleware/PermissionContent'));
import MenuHeader from './components/Header/MenuHeader';
import SidebarLeft from './components/Sidebar/SidebarLeft';
import Home from '../pages/home/views/Home';
import Info from 'components/Info/Info';

const { Content } = Layout;

const loading = () => (
  // <div className="animated fadeIn text-center">Loading 1...</div>
  <Spin />
);

// const Page404 = Loadable({
//   loader: () => import('modules/Commons/_views/Page404'),
//   loading
// });

const DefaultLayout = () => {
  const navigate = useNavigate();
  const authLogged = isLogin();

  useEffect((): void => {
    if (!authLogged) {
      navigate('/login');
    }
  }, []);
  if (!authLogged) {
    return <></>;
  }

  return (
    <Layout className="site-layout" style={{ minHeight: '100vh' }}>
      <Layout className="main-layout">
        <div className="header-container">
          <Suspense fallback={loading()}>
            <Header />
          </Suspense>
          <div className="menu-header">
            <MenuHeader />
          </div>
        </div>
        <Layout className="border-content" style={{ backgroundColor: '#e8eaed' }}>
          <SidebarLeft />
          <Content
            className="bg-color-light m-t-5 m-r-15 m-l-15 border-rd-3"
            style={{ overflow: 'initial', boxShadow: '0 20px 25px -12px #00000017' }}
          >
            {/* <div className="bg-main position-rel p-r-20 p-l-20 p-t-5">
              <div style={{ padding: '20px 0' }}>
                <BreadCrumbCustom />
              </div>
              <Suspense fallback={loading()}>
                <PermissionContent />
              </Suspense>
            </div> */}
            <Home />
          </Content>
          <div
            className="sidebar-right bg-color-light"
            style={{
              width: '254.93px',
            }}
          >
            <Info />
          </div>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
