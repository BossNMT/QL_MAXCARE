import { Avatar, Col, Dropdown, Menu, Row, Space, Typography, Button, Image, Divider } from 'antd';
// import { useAppDispatch } from 'hooks/hookStore';
import { useEffect } from 'react';
import { 
  SettingFilled, 
  GlobalOutlined, 
  MailFilled, 
  TeamOutlined, 
  MenuOutlined 
} from '@ant-design/icons';
// import { changeLanguage } from 'i18next';
// import { useTranslation } from 'react-i18next';
// import { useSelector } from 'react-redux';
// import { history } from 'utils/history';
// import { useHistory } from 'react-router-dom';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
// import { changeLanguageInput, collapseSidebar } from 'store/common/commonSlice';
// import { changeLanguageInput } from 'store/common/commonSlice';
import { destroyLogged, saveAuth } from 'utils/jwt';
import './styles/_header.scss';

// const { Option } = Select;

const Header = () => {
  // const { i18n } = useTranslation();
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
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
              <div className="d-flex header__right">
                <Space size={4}>
                  <Avatar
                    style={{ width: 24, height: 24 }}
                    src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0dcb2b189a5b65405ee4d2e946e50038~c5_100x100.jpeg?x-expires=1660813200&x-signature=5aKm5C%2B3L5gaqkv5vsrlukgI8fU%3D" 
                  />
                  <Button style={{ fontSize: 12 }} className="color-light btn-hover border-rd-5 font-weight-bold p-r-8 p-l-8" type="link">Tran</Button>
                  <Divider type="vertical" />
                  <Button style={{ fontSize: 12 }} className="color-light btn-hover border-rd-5 font-weight-bold p-r-8 p-l-8" type="link">Trang Chủ</Button>
                  <Button className="color-dark btn-hover border-rd-5" type="link" icon={<MenuOutlined />}/>
                  <Button className="color-dark btn-hover border-rd-5" type="link" icon={<TeamOutlined />}/>
                  <Button className="color-dark btn-hover border-rd-5" type="link" icon={<MailFilled />}/>
                  <Button className="color-dark btn-hover border-rd-5" type="link" icon={<GlobalOutlined />}/>
                  <Button className="color-dark btn-hover border-rd-5" type="link" icon={<SettingFilled />}/>
                </Space>
              </div>
            </Col>
          </Row>
        </div>
      </header>
    </>
  );
};

export default Header;
