import { PlusCircleOutlined, SettingOutlined } from '@ant-design/icons';
import { Input, Checkbox, Tooltip } from 'antd';

const AccountGroups = () => {
  return (
    <div className="container">
      <div
        className="header-groups flex-justify-between padding-10 align-items-center"
        style={{ borderBottom: '1px solid #d3d6db' }}
      >
        <span className="font-weight-bold" style={{ lineHeight: '25.6px', color: '#333' }}>
          Manager Account Groups
        </span>
        <div className="icon-groups display-flex-center">
          <Tooltip overlayInnerStyle={{ color: '#555' }} color={'white'} title="Tạo nhóm">
            <PlusCircleOutlined className=" font-20 m-r-5" style={{ color: '#65686b' }} />
          </Tooltip>
          <Tooltip overlayInnerStyle={{ color: '#555' }} color={'white'} title="Thiết lập">
            <SettingOutlined className=" font-20 border-none" style={{ color: '#65686b' }} />
          </Tooltip>
        </div>
      </div>
      <div>
        <div className="input-groups" style={{ padding: '7px 10px 5px 10px', height: '29px' }}>
          <Input
            className="font-12 padding-0 display-block height-16"
            style={{ maxWidth: '95%' }}
            placeholder="Tên, id nhóm cần tìm"
            bordered={false}
          />
        </div>
        <div style={{ backgroundColor: '#f6f7f9', padding: '5px 10px' }} className="result-search display-flex-column">
          <div className="title-search" style={{ color: '#6c9cdd', lineHeight: '22.4px' }}>
            Điền từ khóa bạn cần tìm kiếm.
          </div>
          <div className="checkbox flex-justify-end" style={{ height: '22.4px' }}>
            <Checkbox style={{ color: '#93a1b3', fontWeight: '400' }} className="checkbox-sider">
              Đã xóa
            </Checkbox>
          </div>
        </div>
        <div className="list-account">
          <div className="">Account 1</div>
          <div className="">Account 2</div>
        </div>
      </div>
    </div>
  );
};

export default AccountGroups;
