import { Space, Avatar, Button, Divider } from 'antd';
import { SettingFilled, MailFilled, TeamOutlined, MenuOutlined, GlobalOutlined } from '@ant-design/icons';
import './styles/_control.scss';

const Control = () => {
  return (
    <div className="d-flex header__right">
      <Space size={5}>
        <Avatar
          style={{ width: 24, height: 24 }}
          src="https://scontent.fhan15-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=K9rdFgMILKMAX9LKkjK&_nc_ht=scontent.fhan15-1.fna&oh=00_AT8SBL2Da3aJuz1Eb5AlFQK0vkCEjOALJ-7EnlcZcNJAzA&oe=632963F8"
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
