import './Account.tsx';
import { UserOutlined, DeleteOutlined, UpOutlined, DownOutlined } from '@ant-design/icons';
import { Space, Tooltip } from 'antd';
import './Account.scss';

interface AccountProps {
  name: string;
  number: number;
  date: string;
  time: string;
}

const Account = ({ name, number, date, time }: AccountProps) => {
  return (
    <div
      className="account-container border-rd-3 cursor-pointer"
      style={{ padding: '5px 10px', borderBottom: '1px solid #eee' }}
    >
      <div className="account-header flex-justify-between">
        <h5
          className="account-name font-weight-bold margin-0 font-size-16"
          style={{ color: '#000', lineHeight: '24.5px', letterSpacing: '-1.1px' }}
        >
          {name}
        </h5>
        <span
          className="account-time display-block"
          style={{ padding: '0 10px', color: '#3398dc', fontSize: '11.2px', letterSpacing: '-0.9px' }}
        >{`${date}  ${time}`}</span>
      </div>
      <div className="account-content flex-justify-between">
        <div className="account-user display-flex-center">
          <UserOutlined className="m-r-5" style={{ color: '#555' }} />
          <span className="account-number font-weight-bold font-size-16" style={{ color: '#70ab2c' }}>
            {number}
          </span>
        </div>
        <div className="list-icons-account" style={{ padding: '0 10px' }}>
          <Space size={14} className="font-size-18" style={{ lineHeight: '31.99px', color: '#6a6c6e' }}>
            <Tooltip overlayInnerStyle={{ color: '#555' }} color={'white'} title="Lên trên">
              <UpOutlined className="iconUpDown" />
            </Tooltip>
            <Tooltip overlayInnerStyle={{ color: '#555' }} color={'white'} title="Xuống dưới">
              <DownOutlined className="iconUpDown" />
            </Tooltip>
            <Tooltip overlayInnerStyle={{ color: '#555' }} color={'white'} title="Xóa nhóm">
              <DeleteOutlined />
            </Tooltip>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default Account;
