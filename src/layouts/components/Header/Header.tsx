import { Col, Menu, Row } from 'antd';
// import { useAppDispatch } from 'hooks/hookStore';
// import { useEffect } from 'react';

// import { changeLanguage } from 'i18next';
// import { useTranslation } from 'react-i18next';
// import { useSelector } from 'react-redux';
// import { history } from 'utils/history';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { changeLanguageInput, collapseSidebar } from 'store/common/commonSlice';
// import { changeLanguageInput } from 'store/common/commonSlice';
import { destroyLogged, saveAuth } from 'utils/jwt';
import './header.scss';
import ControlHeader from './ControlHeader';

// const { Option } = Select;

const Header = () => {
  // const { i18n } = useTranslation();
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const location = useLocation();
  // const params = useParams();
  // const collapsed = useSelector((state: any) => state.common.isCloseSidebar);

  // const toggleLayout: void = () => {
  //   dispatch(collapseSidebar());
  // };
  // useEffect(() => {
  //   console.log('Location change', params, location);
  // }, [location]);

  // const onChangeLang = (key: string): void => {
  //   switch (key) {
  //     case 'vi':
  //       i18n.changeLanguage(key);
  //       dispatch(changeLanguageInput('vi'));
  //       break;
  //     case 'en':
  //       i18n.changeLanguage(key);
  //       dispatch(changeLanguageInput('en'));
  //       break;
  //   }
  // };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const menuProfile: JSX.Element = (
    <Menu onClick={() => logout()}>
      <Menu.Item>Đăng xuất</Menu.Item>
    </Menu>
  );
  const logout = async () => {
    await destroyLogged();
    saveAuth(null);
    // console.log(getAccessToken(), 'TOKEN');
    // history.push('/login');
    navigate('/login');
  };

  return (
    <>
      <header
        style={{
          position: 'sticky',
          zIndex: '998',
          backgroundColor: '#515b6f',
          height: '45.8px',
          borderBottom: '1px solid #504e4e',
        }}
        className="display-flex-space-around padding-0"
      >
        <div style={{ width: '1140px', paddingLeft: '15px' }} className="full-height d-flex justify-content-between">
          <Row className="align-items-center full-height">
            <Col span={12}>
              {/* <Typography.Title level={4} className="margin-0 color-light font-size-18">
                MyMin Tools
              </Typography.Title> */}
              <span style={{ letterSpacing: '0px' }} className="color-light font-size-18 font-weight-normal">
                MyMin Tools
              </span>
              {/* <a href="javscript:;" className="header__toggle" onClick={toggleLayout}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </a> */}
            </Col>
            <Col span={12} className="text-right full-height">
              <ControlHeader />
            </Col>
          </Row>
        </div>
      </header>
    </>
  );
};

export default Header;
