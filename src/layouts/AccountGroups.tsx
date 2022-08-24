import { Input, Checkbox, Tooltip } from 'antd';
import Account from 'components/Account/Account';
import './styles/_sidebar.scss';

const AccountGroups = () => {
  return (
    <div className="container">
      <div
        className="header-groups flex-justify-between padding-10 align-items-center"
        style={{ borderBottom: '1px solid #d3d6db' }}
      >
        <span className="font-weight-bold letter-spacing-0" style={{ lineHeight: '25.6px', color: '#333' }}>
          Manager Account Groups
        </span>
        <div
          className="icon-groups display-flex-center font-20 cursor-pointer"
          style={{ color: '#65686b', margin: '2px -0.5px 0 0' }}
        >
          <Tooltip overlayInnerStyle={{ color: '#555' }} color={'white'} title="Tạo nhóm">
            <i className="icon icon-plus" style={{ marginRight: '9px' }}></i>
          </Tooltip>
          <Tooltip overlayInnerStyle={{ color: '#555' }} color={'white'} title="Thiết lập">
            <i className="icon icon-settings"></i>
          </Tooltip>
        </div>
      </div>
      <div>
        <div className="input-groups" style={{ padding: '7px 10px 5px 10px', height: '29px' }}>
          <Input
            className="font-12 padding-0 display-block height-16 input-sider-left"
            style={{ maxWidth: '95%' }}
            placeholder="Tên, id nhóm cần tìm"
            bordered={false}
          />
        </div>
        <div style={{ backgroundColor: '#f6f7f9', padding: '5px 10px' }} className="result-search display-flex-column">
          <div className="title-search letter-spacing-0" style={{ color: '#6c9cdd', lineHeight: '22.4px' }}>
            Vui lòng chọn nhóm tài khoản
          </div>
          <div className="checkbox flex-justify-end" style={{ height: '22.4px' }}>
            <Tooltip overlayInnerStyle={{ color: '#555' }} color={'white'} title="Hiển thị những nhóm đã bị xóa">
              <Checkbox className="checkbox-sider letter-spacing-0" style={{ color: '#93a1b3', fontWeight: '400' }}>
                Đã xóa
              </Checkbox>
            </Tooltip>
          </div>
        </div>
        <div className="list-account">
          <ul className="padding-0">
            <Account name={'123'} number={1} date={'05/08/2022'} time={'23:20:41'} />
            <Account name={'123'} number={0} date={'14/08/2022'} time={'18:25:25'} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccountGroups;
