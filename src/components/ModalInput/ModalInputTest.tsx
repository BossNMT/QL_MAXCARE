import { Checkbox, Divider, Popover, RadioChangeEvent, Space } from 'antd';
import { useState } from 'react';
import SliderModal from './SliderModal';
import RadioForm from './RadioForm';

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
      <RadioForm
        title="Tìm kiếm"
        listChoice={['Tất cả tài khoản', 'Trong nhóm đang chọn']}
        onChange={onChangeForm1}
        value={form1}
        direction="vertical"
      />
      <Divider style={{ margin: '4px 10px -1px 10px', minWidth: 'unset', width: 'unset' }} />
      <div className="form-groups-2 letter-spacing-0" style={{ padding: '12px 26.5px' }}>
        <Popover content={<div>Hế thống sẽ đưa ra danh sách phù hợp ngẫu nhiên thay vì hệ thống cũ</div>}>
          <Checkbox style={{ color: '#999' }}>Lấy danh sách ngẫu nhiên</Checkbox>
        </Popover>
      </div>
      <RadioForm
        title="Lọc tình trạng xóa"
        listChoice={['Chưa xóa', 'Đã xóa']}
        onChange={onChangeForm2}
        value={form2}
        direction={'horizontal'}
      />
      <RadioForm
        title="Lọc trạng thái"
        listChoice={['Tất cả tài khoản', 'Chỉ Live', 'Chỉ Checkpoint']}
        onChange={onChangeForm3}
        value={form3}
        direction={undefined}
      />
      <RadioForm
        title="Lọc theo Token"
        listChoice={['Tất cả tài khoản', 'Có Token', 'Không có Token']}
        onChange={onChangeForm4}
        value={form4}
        direction={undefined}
      />
      <RadioForm
        title="Lọc phiên bản Backup"
        listChoice={['Tất cả', 'V3', 'V2', 'V1']}
        onChange={onChangeForm5}
        value={form5}
        direction={'horizontal'}
      />
      <RadioForm
        title="Lọc hạn lưu trữ"
        listChoice={['Tất cả', 'Còn hạn', 'Hết hạn']}
        onChange={onChangeForm6}
        value={form6}
        direction={'horizontal'}
      />
      <RadioForm
        title="Lọc theo tin cậy"
        listChoice={['Tất cả', 'Chưa thêm tin cậy', 'Đã thêm tin cậy']}
        onChange={onChangeForm7}
        value={form7}
        direction={undefined}
      />
      <RadioForm
        title="Lọc theo MJob Center"
        listChoice={['Tất cả', 'Chưa tham gia', 'Đã tham gia']}
        onChange={onChangeForm8}
        value={form8}
        direction={undefined}
      />
      <RadioForm
        title="Lọc theo ChangeInfo"
        listChoice={['Tất cả', 'Chưa tạo tiến trình', 'Đã tạo tiến trình']}
        onChange={onChangeForm9}
        value={form9}
        direction={undefined}
      />
      <RadioForm
        title="Lọc theo 2 FA"
        listChoice={['Tất cả', 'Đã bật', 'Chưa bật']}
        onChange={onChangeForm10}
        value={form10}
        direction={'horizontal'}
      />

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
