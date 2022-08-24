import '../styles/_home.scss';
import { Tooltip, Input } from 'antd';

const HomeHeader = () => {
  return (
    <div className="home-header flex-justify-between" style={{ height: '54px' }}>
      <div className="header-left" style={{ width: '395.73px', margin: '10px 0' }}>
        <Tooltip
          className="tooltip-input-home"
          color={'white'}
          title="Thêm ! trước từ khóa để tìm kiếm kết quả không phù hợp VD: !Blocked Like"
          overlayInnerStyle={{
            color: '#555',
            textAlign: 'center',
            letterSpacing: '-0.8px',
            fontWeight: '450',
            padding: '4px',
          }}
        >
          <Input
            bordered={false}
            className="display-block border-rd-5 font-14 input-home"
            placeholder="Nhập uid hoặc từ khóa để tìm, mỗi uid, từ khóa cách nhau dấu phẩy"
            style={{
              backgroundColor: '#f6f7f9',
              borderTopRightRadius: '0px',
              borderBottomRightRadius: '0px',
              padding: '7px 10.5px',
              lineHeight: '1.43',
              color: '#555',
            }}
          />
        </Tooltip>
      </div>
      <div className="header-right display-flex-center" style={{ margin: '15px 0', height: '22.4px' }}>
        <span
          className="text-header font-12 display-block letter-spacing-0"
          style={{ color: '#909396', lineHeight: '13.6px', paddingRight: '4px' }}
        >
          Đã chọn 0 tài khoản,Hiển thị 0 {'>'} 0 của 0 kết quả
        </span>
        <Tooltip overlayInnerStyle={{ color: '#555' }} color={'white'} title="Trang trước">
          <i className="icon-arrow-left font-14" style={{ color: '#555555', paddingRight: '3.5px' }}></i>
        </Tooltip>
        <Tooltip overlayInnerStyle={{ color: '#555' }} color={'white'} title="Trang sau">
          <i className="icon-arrow-right font-14" style={{ color: '#555555', paddingRight: '3px' }}></i>
        </Tooltip>
        <Tooltip overlayInnerStyle={{ color: '#555' }} color={'white'} title="Lọc tài khoản">
          <i className="icon-magnifier" style={{ color: '#999', fontSize: '17.5px', padding: '7px 8px 5px 5px' }}></i>
        </Tooltip>
        <Tooltip overlayInnerStyle={{ color: '#555' }} color={'white'} title="Tải lại danh sách">
          <i className="icon-refresh p-5 font-20" style={{ color: '#999', marginRight: '6px' }}></i>
        </Tooltip>
      </div>
    </div>
  );
};

export default HomeHeader;
