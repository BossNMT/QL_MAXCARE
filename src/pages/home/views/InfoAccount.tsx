import { Link } from 'react-router-dom';
import '../styles/_home.scss';

const InfoAccount = () => {
  return (
    <div className="info-account p-4 cursor-pointer">
      <div className="wrapper">
        <div className="info-title" style={{ height: '19.6px' }}>
          <Link to="/" className="info-Link">
            <h5
              className="font-weight-semibold display-flex-center font-14 letter-spacing-0"
              style={{ color: '#4263a3', height: '19.6px', marginTop: '0.5px', marginBottom: '0' }}
            >
              <span>0. </span>
              <div style={{ paddingLeft: '4px' }}>Xylux Jhakess Bugtong</div>
              <div style={{ fontSize: '10.9999px', paddingLeft: '4px', marginTop: '2px' }}>100028343924579</div>
              <i className="icon-fire font-14" style={{ color: '#9a69cb', padding: '1px 0 0 9px' }}></i>
            </h5>
          </Link>
        </div>
        <div className="info-icons" style={{ marginTop: '1px' }}>
          <i className="icon-list cursor-pointer list-item" style={{ color: '#555', padding: '3px 4.5px 0 0' }}></i>
          <i className="icon-reload cursor-pointer list-item " style={{ color: '#555' }}></i>
          <div className="list-item display-inline-block" style={{ lineHeight: '14px' }}>
            <i className="icon-user-follow" style={{ paddingRight: '4px', color: '#979797' }}></i>
            <span
              className="font-14 letter-spacing-0 font-weight-bold"
              style={{
                color: '#f79600',
                marginRight: '3px',
                transform: ' scaleY(1.1)',
              }}
            >
              3452
            </span>
          </div>
          <div
            className="list-item display-inline-block m-r-5"
            style={{ lineHeight: '14px', paddingRight: '3px', paddingLeft: '5.1px' }}
          >
            <i className="icon-people" style={{ paddingRight: '5px', color: '#979797' }}></i>
            <span style={{ color: '#a2a3a5' }}>0</span>
          </div>
          <div className="list-item display-inline-block m-r-5" style={{ lineHeight: '10px' }}>
            <i className="icon-clock" style={{ paddingRight: '5px', color: '#979797' }}></i>
            <span style={{ color: '#e86060', letterSpacing: '0' }}>Hết hạn</span>
          </div>
          <div className="list-item display-inline-block m-r-5" style={{ lineHeight: '10px', border: 'none' }}>
            <i className="icon-cloud-upload font-15" style={{ paddingRight: '5px', color: '#979797' }}></i>
            <span style={{ color: '#979797' }}>
              <span style={{ color: '#72c02c' }}>v3</span>
              &nbsp;-&nbsp;21:04 01/05
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoAccount;
