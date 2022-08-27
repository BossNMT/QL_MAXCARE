import './Info.scss';
import { Avatar, Button, Popover, Tooltip } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faRightLeft } from '@fortawesome/free-solid-svg-icons';

const HeaderInfo = () => {
  return (
    <div className="wrapper-header-info full-height" style={{ boxShadow: '0 20px 25px -12px rgb(0 0 0 / 9%)' }}>
      <div
        className="container-header-info p-20 display-flex bg-color-light full-height"
        style={{ borderLeft: '1px solid #ddd' }}
      >
        <Avatar
          style={{ width: 80, height: 80, marginRight: '21px', alignSelf: 'center' }}
          src="https://scontent.fhan15-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=K9rdFgMILKMAX9LKkjK&_nc_ht=scontent.fhan15-1.fna&oh=00_AT8SBL2Da3aJuz1Eb5AlFQK0vkCEjOALJ-7EnlcZcNJAzA&oe=632963F8"
        />
        <div className="detail-header-info" style={{ flex: '1' }}>
          <h4
            className="name-info font-weight-semibold font-size-16 letter-spacing-0"
            style={{ color: '#555', lineHeight: '22.4px', marginBottom: '8px', marginTop: '-1px' }}
          >
            gtcss88
          </h4>
          <div
            className="backup-info border-rd-20 color-light display-inline-block letter-spacing-0"
            style={{
              background: '#72c02c',
              fontSize: '11.2px',
              padding: '4.9px 10px',
              lineHeight: '11.2px',
              width: '90.27px',
            }}
          >
            <span className="title-backup">
              <span className="number-backup" style={{ marginRight: '3px' }}>
                0
              </span>
              lượt Backup
            </span>
          </div>
          <div className="icons-info display-flex-center" style={{ height: '24px', marginBottom: '-1px' }}>
            <Tooltip overlayInnerStyle={{ color: '#555' }} color={'white'} title="Mua lượt">
              <Button
                className="button-icon inline-flex-justify-center"
                style={{
                  color: '#3398dc',
                  borderColor: '#3398dc',
                  minWidth: '20px',
                  width: '21px',
                  height: '21px',
                  padding: '4px 0',
                  marginRight: '14px',
                  marginTop: '-1px',
                  backgroundColor: 'transparent',
                }}
                shape="circle"
                icon={<FontAwesomeIcon style={{ fontSize: '11px' }} icon={faPlus} />}
              />
            </Tooltip>
            <Tooltip overlayInnerStyle={{ color: '#555' }} color={'white'} title="Chuyển lượt">
              <Button
                className="button-icon inline-flex-justify-center"
                style={{
                  color: '#3398dc',
                  borderColor: '#3398dc',
                  minWidth: '20px',
                  width: '21px',
                  height: '21px',
                  padding: '4px 0',
                  marginTop: '-1px',
                  backgroundColor: 'transparent',
                }}
                shape="circle"
                icon={<FontAwesomeIcon style={{ fontSize: '11px' }} icon={faRightLeft} />}
              />
            </Tooltip>
          </div>
          <Popover
            placement="topLeft"
            overlayClassName="popover-coin"
            overlayInnerStyle={{ textAlign: 'center', borderRadius: '5px' }}
            overlayStyle={{ width: '374px' }}
            content={
              <div style={{ lineHeight: '19px' }}>
                MCoin V2 là đơn vị tiền tệ được sử dụng riêng trên MHCP, bạn có thể chuyển đổi MCoin V2 tại
                https://mymin.net/thayphan/profile
              </div>
            }
          >
            <div
              className="coins-info border-rd-20 color-light display-inline-block letter-spacing-0"
              style={{ background: '#72c02c', fontSize: '11.2px', padding: '4.8px 10px', lineHeight: '11.2px' }}
            >
              <span className="title-coins">
                <span className="number-coins" style={{ marginRight: '3px' }}>
                  0
                </span>
                MCoin V2
              </span>
            </div>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export default HeaderInfo;
