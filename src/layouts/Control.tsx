import { Space, Avatar, Button, Divider } from 'antd';
import { SettingFilled, MailFilled, TeamOutlined, MenuOutlined, GlobalOutlined } from '@ant-design/icons';
import './styles/_control.scss';

const Control = () => {
  return (
    <div className="d-flex header__right">
      <Space size={5}>
        <Avatar
          style={{ width: 24, height: 24 }}
          src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/0dcb2b189a5b65405ee4d2e946e50038~c5_100x100.jpeg?x-expires=1660813200&x-signature=5aKm5C%2B3L5gaqkv5vsrlukgI8fU%3D"
        />
        <Button className="btn-control color-light font-weight-bold font-12 p-r-l-8" ghost>
          Tran
        </Button>
        <Divider className="divider-control" type="vertical" />
        <Button className="btn-control color-light font-weight-bold font-12 p-r-l-8" ghost>
          Trang Chủ
        </Button>
        <Button className="btn-control" ghost icon={<MenuOutlined />}></Button>
        <Button className="btn-control" ghost icon={<TeamOutlined />}></Button>
        <Button className="btn-control" ghost icon={<MailFilled />}></Button>
        <Button className="btn-control" ghost icon={<GlobalOutlined />}></Button>
        <Button className="btn-control" ghost icon={<SettingFilled />}></Button>
      </Space>
    </div>
  );
};

export default Control;
