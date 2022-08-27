import '../styles/_home.scss';
import { Checkbox, Divider } from 'antd';
import InfoAccount from './InfoAccount';

const AccountResult = () => {
  return (
    <div className="wrapper-account">
      <Divider className="margin-0" style={{ background: '#ddd' }} />
      <div className="container-account display-flex">
        <div className="checkbox-account p-4" style={{ height: '41.88px', width: '47.49px', marginTop: '7px' }}>
          <Checkbox className="checkbox-home" style={{ color: '#93a1b3', fontWeight: '400' }}></Checkbox>
        </div>
        <div className="button-account p-4 display-flex-center" style={{ height: '48.88px', width: '51.13px' }}>
          <span
            className="border-rd-5 color-light display-block letter-spacing-0"
            style={{
              backgroundColor: '#72c02c',
              fontSize: '12.6px',
              padding: '5.6px 10px 4.1px 10px',
              lineHeight: '12.6px',
            }}
          >
            Live
          </span>
        </div>
        <InfoAccount />
        <div className="font-12 letter-spacing-0 p-0-5" style={{ color: '#aba8a8', lineHeight: '49.1px' }}>
          2020
        </div>
        <div style={{ lineHeight: '49.1px', padding: '0 18px' }}>
          <span
            className="border-rd-20 color-light"
            style={{ fontSize: '12.6px', background: '#3398dc', padding: '5px 10px' }}
          >
            5
          </span>
        </div>
        <div
          className="font-12 letter-spacing-0 display-flex-center"
          style={{ color: '#555', marginLeft: '-4.5px', flex: '1' }}
        >
          Login finish. Updated Cookie default
        </div>
        <i
          className="icon-trash cursor-pointer"
          style={{ color: '#999', fontSize: '17.9999px', lineHeight: '49.1px', padding: '0 9px' }}
        ></i>
      </div>
    </div>
  );
};

export default AccountResult;
