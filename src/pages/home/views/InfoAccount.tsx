import { Link } from 'react-router-dom';
import '../styles/_home.scss';
import {
  FireOutlined,
  UnorderedListOutlined,
  UndoOutlined,
  UserAddOutlined,
  TeamOutlined,
  ClockCircleOutlined,
  CloudUploadOutlined,
} from '@ant-design/icons';

const InfoAccount = () => {
  return (
    <div className="info-account p-4 cursor-pointer">
      <div className="wrapper">
        <div className="info-title" style={{ height: '19.6px' }}>
          <Link to="/" className="info-Link">
            <h5
              className="font-weight-semibold display-flex-center margin-0 font-14"
              style={{ color: '#4263a3', fontWeight: '650', letterSpacing: '-0.1px', height: '19.6px' }}
            >
              <span>0. </span>
              <div style={{ paddingLeft: '2px' }}>Xylux Jhakess Bugtong</div>
              <div style={{ fontSize: '10px', paddingLeft: '3px', letterSpacing: '-0.7px', marginTop: '3px' }}>
                100028343924579
              </div>
              <FireOutlined className="font-15" style={{ color: '#9a69cb', paddingLeft: '10px' }} />
            </h5>
          </Link>
        </div>
        <div className="info-icons">
          <UnorderedListOutlined className="cursor-pointer list-item" style={{ color: '#555', paddingLeft: '0px' }} />
          <UndoOutlined rotate={-33} className="cursor-pointer list-item" style={{ color: '#555' }} />
          <div className="list-item display-inline-block" style={{ lineHeight: '14px' }}>
            <UserAddOutlined style={{ paddingRight: '5px', color: '#979797' }} />
            <span
              className="font-weight-bold"
              style={{
                color: '#f79600',
                marginRight: '3px',
                letterSpacing: '-1px',
                fontSize: '13px',
                transform: ' scaleY(1.1)',
              }}
            >
              3452
            </span>
          </div>
          <div className="list-item display-inline-block m-r-5" style={{ lineHeight: '14px', paddingRight: '3px' }}>
            <TeamOutlined style={{ paddingRight: '5px', color: '#979797' }} />
            <span style={{ color: '#a2a3a5' }}>0</span>
          </div>
          <div className="list-item display-inline-block m-r-5" style={{ lineHeight: '14px' }}>
            <ClockCircleOutlined style={{ paddingRight: '5px', color: '#979797' }} />
            <span style={{ color: '#e86060', letterSpacing: '-0.4px' }}>Hết hạn</span>
          </div>
          <div className="list-item display-inline-block m-r-5" style={{ lineHeight: '14px', border: 'none' }}>
            <CloudUploadOutlined style={{ paddingRight: '5px', color: '#979797' }} className="font-15" />
            <span style={{ color: '#979797' }}>
              <span style={{ color: '#72c02c' }}>v3</span>
              &nbsp;-&nbsp;21:04 01/05
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoAccount;
