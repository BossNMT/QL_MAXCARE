import { Checkbox, Divider, Popover, Radio, RadioChangeEvent, Space } from 'antd';
import { useState } from 'react';

const ModalInput = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };
  return (
    <div className="wrapper modal-input" style={{ color: '#999' }}>
      <div className="form-groups-1" style={{ padding: '12px 25.5px' }}>
        <div className="form-title letter-spacing-0" style={{ marginTop: '-1px' }}>
          Tìm kiếm
        </div>
        <Radio.Group style={{ marginTop: '9px', marginLeft: '1px' }} onChange={onChange} value={value}>
          <Space className="letter-spacing-0" direction="vertical">
            <Radio style={{ color: '#999' }} value={1}>
              Tất cả tài khoản
            </Radio>
            <Radio style={{ color: '#999', marginTop: '-1px' }} value={2}>
              Trong nhóm đang chọn
            </Radio>
          </Space>
        </Radio.Group>
      </div>
      <Divider style={{ margin: '4px 10px -1px 10px', minWidth: 'unset', width: 'unset' }} />
      <div className="form-groups-2 letter-spacing-0" style={{ padding: '12px 26.5px' }}>
        <Popover content={<div>Hế thống sẽ đưa ra danh sách phù hợp ngẫu nhiên thay vì hệ thống cũ</div>}>
          <Checkbox style={{ color: '#999' }}>Lấy danh sách ngẫu nhiên</Checkbox>
        </Popover>
      </div>
    </div>
  );
};

export default ModalInput;
