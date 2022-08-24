import '../styles/_home.scss';
import { Checkbox, Divider } from 'antd';
import InfoAccount from './InfoAccount';

const AccountResult = () => {
  return (
    <div className="wrapper-account">
      <Divider className="margin-0" />
      <div className="container-account display-flex">
        <div className="checkbox-account p-4" style={{ height: '48.88px', width: '47.49px', marginTop: '7px' }}>
          <Checkbox className="checkbox-home" style={{ color: '#93a1b3', fontWeight: '400' }}></Checkbox>
        </div>
        <div className="button-account p-4 display-flex-center" style={{ height: '48.88px', width: '51.13px' }}>
          <span
            className="border-rd-5 color-light display-block"
            style={{ backgroundColor: '#72c02c', fontSize: '12.6px', padding: '5px 9px', lineHeight: '12.6px' }}
          >
            Live
          </span>
        </div>
        <InfoAccount />
      </div>
    </div>
  );
};

export default AccountResult;
