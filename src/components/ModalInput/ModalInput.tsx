import { Checkbox, Divider, Popover, Radio, RadioChangeEvent, Space } from 'antd';
import { useState } from 'react';
import SliderModal from './SliderModal';

const ModalInput = () => {
  const [form1, setForm1] = useState(2);
  const [form2, setForm2] = useState(1);
  const [form3, setForm3] = useState(1);
  const [form4, setForm4] = useState(1);
  const [form5, setForm5] = useState(1);
  const [form6, setForm6] = useState(1);
  const [form7, setForm7] = useState(1);
  const [form8, setForm8] = useState(1);
  const [form9, setForm9] = useState(1);
  const [form10, setForm10] = useState(1);

  const createChange = (callback) => {
    return (e: RadioChangeEvent) => {
      callback(e.target.value);
    };
  };
  const onChangeForm1 = createChange(setForm1);
  const onChangeForm2 = createChange(setForm2);
  const onChangeForm3 = createChange(setForm3);
  const onChangeForm4 = createChange(setForm4);
  const onChangeForm5 = createChange(setForm5);
  const onChangeForm6 = createChange(setForm6);
  const onChangeForm7 = createChange(setForm7);
  const onChangeForm8 = createChange(setForm8);
  const onChangeForm9 = createChange(setForm9);
  const onChangeForm10 = createChange(setForm10);

  return (
    <div className="wrapper modal-input" style={{ color: '#999' }}>
      <div className="form-groups-1" style={{ padding: '12px 25.5px' }}>
        <div className="form-title letter-spacing-0" style={{ marginTop: '-1px' }}>
          Tìm kiếm
        </div>
        <Radio.Group style={{ margin: '9px 0 0 1px' }} onChange={onChangeForm1} value={form1}>
          <Space wrap={true} className="letter-spacing-0" direction="vertical">
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

      <div className="form-groups-2" style={{ padding: '7px 25.5px' }}>
        <div className="form-title letter-spacing-0" style={{ marginTop: '-1px' }}>
          Lọc tình trạng xóa
        </div>
        <Radio.Group style={{ margin: '9.5px 0 0 1px' }} onChange={onChangeForm2} value={form2}>
          <Space wrap={true} className="letter-spacing-0">
            <Radio style={{ color: '#999', marginRight: '14px' }} value={1}>
              Chưa xóa
            </Radio>
            <Radio style={{ color: '#999' }} value={2}>
              Đã xóa
            </Radio>
          </Space>
        </Radio.Group>
      </div>

      <div className="form-groups-3" style={{ padding: '11px 25.5px' }}>
        <div className="form-title letter-spacing-0" style={{ marginTop: '-1px' }}>
          Lọc trạng thái
        </div>
        <Radio.Group style={{ margin: '10px 0 0 1px' }} onChange={onChangeForm3} value={form3}>
          <Space wrap={true} className=" letter-spacing-0">
            <Radio style={{ color: '#999', marginRight: '14px' }} value={1}>
              Tất cả tài khoản
            </Radio>
            <Radio style={{ color: '#999' }} value={2}>
              Chỉ Live
            </Radio>
            <Radio style={{ color: '#999', marginTop: '-1px' }} value={3}>
              Chỉ Checkpoint
            </Radio>
          </Space>
        </Radio.Group>
      </div>

      <div className="form-groups-4" style={{ padding: '7px 25.5px' }}>
        <div className="form-title letter-spacing-0" style={{ marginTop: '-1px' }}>
          Lọc theo Token
        </div>
        <Radio.Group style={{ margin: '9px 0 0 1px' }} onChange={onChangeForm4} value={form4}>
          <Space wrap={true} className=" letter-spacing-0">
            <Radio style={{ color: '#999', marginRight: '14px' }} value={1}>
              Tất cả tài khoản
            </Radio>
            <Radio style={{ color: '#999' }} value={2}>
              Có Token
            </Radio>
            <Radio style={{ color: '#999', marginTop: '-1px' }} value={3}>
              Không có Token
            </Radio>
          </Space>
        </Radio.Group>
      </div>

      <div className="form-groups-5" style={{ padding: '11px 25.5px' }}>
        <div className="form-title letter-spacing-0" style={{ marginTop: '-1px' }}>
          Lọc phiên bản Backup
        </div>
        <Radio.Group style={{ margin: '10px 0 0 1px' }} onChange={onChangeForm5} value={form5}>
          <Space wrap={true} size={14} className=" letter-spacing-0">
            <Radio style={{ color: '#999' }} value={1}>
              Tất cả
            </Radio>
            <Radio style={{ color: '#999' }} value={2}>
              V3
            </Radio>
            <Radio style={{ color: '#999' }} value={3}>
              V2
            </Radio>
            <Radio style={{ color: '#999' }} value={4}>
              V1
            </Radio>
          </Space>
        </Radio.Group>
      </div>

      <div className="form-groups-6" style={{ padding: '7.5px 25.5px' }}>
        <div className="form-title letter-spacing-0" style={{ marginTop: '-1px' }}>
          Lọc hạn lưu trữ
        </div>
        <Radio.Group style={{ margin: '10px 0 0 1px' }} onChange={onChangeForm6} value={form6}>
          <Space wrap={true} className=" letter-spacing-0">
            <Radio style={{ color: '#999', marginRight: '14px' }} value={1}>
              Tất cả
            </Radio>
            <Radio style={{ color: '#999', marginRight: '16px' }} value={2}>
              Còn hạn
            </Radio>
            <Radio style={{ color: '#999' }} value={3}>
              Hết hạn
            </Radio>
          </Space>
        </Radio.Group>
      </div>

      <div className="form-groups-7" style={{ padding: '11px 25.5px' }}>
        <div className="form-title letter-spacing-0" style={{ marginTop: '-1px' }}>
          Lọc theo tin cậy
        </div>
        <Radio.Group style={{ margin: '10px 0 0 1px' }} onChange={onChangeForm7} value={form7}>
          <Space wrap={true} className=" letter-spacing-0">
            <Radio style={{ color: '#999', marginRight: '14px' }} value={1}>
              Tất cả
            </Radio>
            <Radio style={{ color: '#999' }} value={2}>
              Chưa thêm tin cậy
            </Radio>
            <Radio style={{ color: '#999', marginTop: '-1px' }} value={3}>
              Đã thêm tin cậy
            </Radio>
          </Space>
        </Radio.Group>
      </div>

      <div className="form-groups-8" style={{ padding: '11px 25.5px' }}>
        <div className="form-title letter-spacing-0" style={{ marginTop: '-1px' }}>
          Lọc theo MJob Center
        </div>
        <Radio.Group style={{ margin: '10px 0 0 1px' }} onChange={onChangeForm8} value={form8}>
          <Space wrap={true} className=" letter-spacing-0">
            <Radio style={{ color: '#999', marginRight: '14px' }} value={1}>
              Tất cả
            </Radio>
            <Radio style={{ color: '#999' }} value={2}>
              Chưa tham gia
            </Radio>
            <Radio style={{ color: '#999', marginTop: '-1px' }} value={3}>
              Đã tham gia
            </Radio>
          </Space>
        </Radio.Group>
      </div>

      <div className="form-groups-9" style={{ padding: '11px 25.5px' }}>
        <div className="form-title letter-spacing-0" style={{ marginTop: '-1px' }}>
          Lọc theo ChangeInfo
        </div>
        <Radio.Group style={{ margin: '10px 0 0 1px' }} onChange={onChangeForm9} value={form9}>
          <Space wrap={true} className=" letter-spacing-0">
            <Radio style={{ color: '#999', marginRight: '14px' }} value={1}>
              Tất cả
            </Radio>
            <Radio style={{ color: '#999' }} value={2}>
              Chưa tạo tiến trình
            </Radio>
            <Radio style={{ color: '#999', marginTop: '-1px' }} value={3}>
              Đã tạo tiến trình
            </Radio>
          </Space>
        </Radio.Group>
      </div>

      <div className="form-groups-10" style={{ padding: '11px 25.5px' }}>
        <div className="form-title letter-spacing-0" style={{ marginTop: '-1px' }}>
          Lọc theo 2 FA
        </div>
        <Radio.Group style={{ margin: '10px 0 0 1px' }} onChange={onChangeForm10} value={form10}>
          <Space wrap={true} className=" letter-spacing-0">
            <Radio style={{ color: '#999', marginRight: '14px' }} value={1}>
              Tất cả
            </Radio>
            <Radio style={{ color: '#999', marginRight: '16px' }} value={2}>
              Đã bật
            </Radio>
            <Radio style={{ color: '#999' }} value={3}>
              Chưa bật
            </Radio>
          </Space>
        </Radio.Group>
      </div>

      <div className="form-groups-11" style={{ padding: '11px 25.5px' }}>
        <div className="form-title letter-spacing-0" style={{ marginTop: '-1px' }}>
          Lọc tiến trình
        </div>
        <Checkbox.Group style={{ margin: '10px 0 0 1px' }}>
          <Space wrap={true} className=" letter-spacing-0">
            <Checkbox style={{ color: '#999', marginRight: '-0.5px' }} value={1}>
              Đang Addfriends
            </Checkbox>
            <Checkbox style={{ color: '#999' }} value={2}>
              Đang Unfriends
            </Checkbox>
            <Checkbox style={{ color: '#999' }} value={3}>
              Đang Addmem
            </Checkbox>
          </Space>
        </Checkbox.Group>
      </div>
      <Divider style={{ margin: '4px 10px -1px 10px', minWidth: 'unset', width: 'unset' }} />
      <SliderModal title="Lọc số bạn bè" min={0} max={5000} />
      <SliderModal title="Lọc số nhóm" min={0} max={1000} />
      <SliderModal title="Lọc năm tạo" min={2006} max={2022} />
    </div>
  );
};

export default ModalInput;
