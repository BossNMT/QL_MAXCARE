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
import './styles/_header.scss';
import Control from './Control';
import MenuHeader from './MenuHeader';

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
        style={{ position: 'sticky', zIndex: '998', backgroundColor: '#515b6f' }}
        className="height-45 display-flex-space-around padding-0"
      >
        <div style={{ width: '1140px' }} className="full-height d-flex justify-content-between">
          <Row className="align-items-center full-height">
            <Col span={12}>
              {/* <Typography.Title level={4} className="margin-0 color-light font-size-18">
                MyMin Tools
              </Typography.Title> */}
              <span className="color-light font-size-18 font-weight-normal">MyMin Tools</span>
              {/* <a href="javscript:;" className="header__toggle" onClick={toggleLayout}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              </a> */}
            </Col>
            <Col span={12} className="text-right">
              <Control />
            </Col>
          </Row>
          <div className="menu-header">
            <MenuHeader />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
