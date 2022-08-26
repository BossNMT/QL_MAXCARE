import './Account.tsx';
import { UserOutlined } from '@ant-design/icons';
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
      style={{ padding: '3px 10px', borderBottom: '1px solid #eee' }}
    >
      <div className="account-header flex-justify-between" style={{ marginTop: '1.5px' }}>
        <h5
          className="account-name font-weight-semibold margin-0 letter-spacing-0"
          style={{ color: '#000', lineHeight: '24.5px', fontSize: '17.5px' }}
        >
          {name}
        </h5>
        <span
          className="account-time display-block letter-spacing-0"
          style={{ padding: '0 10px', color: '#3398dc', fontSize: '11.2px' }}
        >{`${date}  ${time}`}</span>
      </div>
      <div className="account-content flex-justify-between" style={{ height: '34.97px' }}>
        <div className="account-user display-flex-center" style={{ marginTop: '1px' }}>
          <UserOutlined style={{ color: '#555', marginRight: '7px' }} />
          <span className="account-number font-weight-bold font-size-16" style={{ color: '#70ab2c' }}>
            {number}
          </span>
        </div>
        <div className="list-icons-account" style={{ padding: '0 6.5px' }}>
          <Space
            size={17.5}
            className="font-size-18"
            style={{ lineHeight: '31.99px', color: '#6a6c6e', marginTop: '3px' }}
          >
            <Tooltip overlayInnerStyle={{ color: '#555' }} color={'white'} title="Lên trên">
              <i style={{ fontSize: '17.9999px' }} className="iconUpDown icon-arrow-up"></i>
            </Tooltip>
            <Tooltip overlayInnerStyle={{ color: '#555' }} color={'white'} title="Xuống dưới">
              <i style={{ fontSize: '17.9999px' }} className="iconUpDown icon-arrow-down"></i>
            </Tooltip>
            <Tooltip overlayInnerStyle={{ color: '#555' }} color={'white'} title="Xóa nhóm">
              <i style={{ fontSize: '17.9999px' }} className="icon-trash display-inline-block"></i>
            </Tooltip>
          </Space>
        </div>
      </div>
    </div>
  );
};

export default Account;
