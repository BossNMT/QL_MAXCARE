import '../styles/_home.scss';
import { Tooltip, Checkbox, Button, Space } from 'antd';

const ContentHome = () => {
  return (
    <div className="home-content flex-justify-between" style={{ height: '23.1px', margin: '11px 0 10px 0' }}>
      <div className="content-left display-flex-center">
        <Checkbox
          className="checkbox-home m-l-8"
          style={{
            color: '#93a1b3',
            fontWeight: '400',
            paddingRight: '15.5px',
            paddingLeft: '8px',
            marginLeft: '0.5px',
            marginTop: '1.5px',
          }}
        ></Checkbox>
        <Tooltip overlayInnerStyle={{ color: '#26323d', fontSize: '13px' }} color={'white'} title="Chọn nhanh">
          <i
            className="icon-list cursor-pointer m-r-5"
            style={{ paddingRight: '3px', color: '#555', marginTop: '1px' }}
          ></i>
        </Tooltip>
        <Tooltip overlayInnerStyle={{ color: '#26323d', fontSize: '13px' }} color={'white'} title="Tùy chọn hiển thị">
          <i
            className="icon-equalizer cursor-pointer font-14"
            style={{ color: '#555', paddingRight: '3.5px', marginTop: '1px' }}
          ></i>
        </Tooltip>
        <Tooltip
          overlayInnerStyle={{ color: '#26323d', fontSize: '13px' }}
          color={'white'}
          title="Check Live các tài khoản đã chọn"
        >
          <i
            className="icon-reload icon-color cursor-pointer p-5 m-r-5"
            style={{ color: '#999', fontSize: '17.9999px', marginTop: '2px' }}
          ></i>
        </Tooltip>
        <div className="button-content" style={{ margin: '0 10px 0 14px' }}>
          <Space size={4}>
            <Button
              className="font-weight-bold color-light border-none border-rd-0"
              style={{
                fontSize: '12.6px',
                backgroundColor: '#72c02c',
                lineHeight: '12.6px',
                height: 'unset',
                padding: '5px 10px',
              }}
            >
              All: <span style={{ paddingLeft: '3px' }}>1</span>
            </Button>
            <Button
              className="font-weight-bold color-light border-rd-20 border-none"
              style={{
                fontSize: '12.6px',
                backgroundColor: '#bbb',
                lineHeight: '12.6px',
                height: 'unset',
                padding: '5px 10px',
              }}
            >
              Live: <span style={{ paddingLeft: '3px' }}>0</span>
            </Button>
            <Button
              className="font-weight-bold color-light border-rd-20 border-none"
              style={{
                fontSize: '12.6px',
                backgroundColor: '#bbb',
                lineHeight: '12.6px',
                height: 'unset',
                padding: '5px 10px',
              }}
            >
              D/C: <span style={{ paddingLeft: '4px' }}>0</span>
            </Button>
          </Space>
        </div>
        <i
          className="icon-options-vertical icon-color cursor-pointer"
          style={{ color: '#999', fontSize: '17.9999px', margin: '2px 9px 0' }}
        ></i>

        <Tooltip
          overlayInnerStyle={{ color: '#26323d', fontSize: '13px', textAlign: 'center' }}
          color={'white'}
          title="Gỡ checkpoint bằng Addon trên các tài khoản đã chọn"
        >
          <i
            className="icon-puzzle icon-color cursor-pointer"
            style={{ color: '#999', fontSize: '17.9999px', padding: '0 4px', marginTop: '2px' }}
          ></i>
        </Tooltip>

        <Tooltip
          overlayInnerStyle={{ color: '#26323d', fontSize: '13px' }}
          color={'white'}
          title="Gỡ checkpoint chạy giả lập ẩn"
        >
          <i
            className="icon-lock-open icon-color cursor-pointer"
            style={{ color: '#999', fontSize: '17.9999px', padding: '4.9px', marginLeft: '5px', marginTop: '2px' }}
          ></i>
        </Tooltip>
        <div className="font-14 space" style={{ color: '#d8d8d8', paddingLeft: '4px', letterSpacing: '-0.1px' }}>
          | | |
        </div>
      </div>
      <div className="content-right display-flex-center" style={{ marginRight: '11.7px' }}>
        <Space size={21.7} style={{ lineHeight: '16px', marginTop: '4px' }}>
          <Tooltip
            overlayInnerStyle={{ textAlign: 'center', color: '#26323d', fontSize: '13px' }}
            color={'white'}
            title="Gia hạn ngày sử dụng"
          >
            <i
              className="icon-clock cursor-pointer icon-color"
              style={{ color: '#999', fontSize: '17.9999px', marginRight: '-1px' }}
            ></i>
          </Tooltip>
          <Tooltip
            overlayInnerStyle={{ textAlign: 'center', color: '#26323d', fontSize: '13px' }}
            color={'white'}
            title="Chuyển các tài khoản đã chọn qua nhóm khác"
          >
            <i
              className="icon-folder-alt cursor-pointer icon-color"
              style={{ color: '#999', fontSize: '17.9999px' }}
            ></i>
          </Tooltip>
          <Tooltip
            overlayInnerStyle={{ textAlign: 'center', color: '#26323d', fontSize: '13px' }}
            color={'white'}
            title="Xuất tài khoản trong nhóm hoặc các tài khoản đã chọn"
          >
            <i
              className="icon-cloud-download cursor-pointer icon-color"
              style={{ color: '#999', fontSize: '21px' }}
            ></i>
          </Tooltip>
          <Tooltip
            overlayInnerStyle={{ textAlign: 'center', color: '#26323d', fontSize: '13px' }}
            color={'white'}
            title="Xóa các tài khoản đã chọn"
          >
            <i className="icon-trash cursor-pointer icon-color" style={{ color: '#999', fontSize: '17.9999px' }}></i>
          </Tooltip>
        </Space>
      </div>
    </div>
  );
};

export default ContentHome;
