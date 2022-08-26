import Media from 'components/Media/Media';
import './Info.scss';

const UpdateInfo = () => {
  return (
    <div className="wrapper">
      <div className="notify-container padding-10 border-rd-4 bg-color-light">
        <div className="notify-body display-flex-center" style={{ whiteSpace: 'nowrap' }}>
          <span className="notify-title font-weight-bold letter-spacing-0" style={{ lineHeight: '18px' }}>
            Thông báo
          </span>
          <span
            className="notify-deadline letter-spacing-0 font-size-16 word-excerpt"
            style={{ color: '#f00', lineHeight: '25.6px' }}
          >
            Hết hạn: 23:59:00 31/01/2020
          </span>
        </div>
      </div>
      <div className="important-container">
        <div
          className="important-header letter-spacing-0 font-weight-medium"
          style={{
            backgroundColor: '#f6f7f9',
            borderBottom: '1px solid #dddfe2',
            color: '#90949c',
            fontSize: '11px',
            padding: '5px 12px',
            lineHeight: '16.5px',
          }}
        >
          QUAN TRỌNG
        </div>
        <div className="important-body">
          <div className="media-list">
            <Media
              update="4 Update 2020"
              detail="Gỡ checkpoint Email, Bật 2FA giao diện mới, Xuất PassEmail, Search năm tạo 2020"
              time="2 năm trước"
              looked
            />
            <Media
              update="2 Cập Nhật Mới 2019"
              detail="Truy cập nhóm MHCP để xem các cập nhật mới quan trọng ngày 14/02/2019"
              time="4 năm trước"
              looked={false}
            />
            <Media
              update="3 Cập Nhật Mới"
              detail="Truy cập nhóm MHCP để xem các cập nhật mới ngày 18/12"
              time="4 năm trước"
              looked={false}
            />
            <Media
              update="10 Cập Nhật Mới"
              detail="Truy cập nhóm MHCP để xem các cập nhật mới ngày 04/12"
              time="4 năm trước"
              looked={false}
            />
          </div>
        </div>
        <div
          className="system font-weight-medium letter-spacing-0"
          style={{
            background: '#f6f7f9',
            borderBottom: '1px solid #dddfe2',
            color: '#90949c',
            fontSize: '11px',
            lineHeight: '16.5px',
            padding: '5px 12px',
          }}
        >
          System
        </div>
      </div>
    </div>
  );
};

export default UpdateInfo;
