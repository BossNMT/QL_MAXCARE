import { Link } from 'react-router-dom';
import '../styles/_home.scss';

const InfoAccount = () => {
  return (
    <div className="info-account p-4 cursor-pointer" style={{ width: '390px' }}>
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
        <ul className="info-icons" style={{ padding: '0', margin: '1px 0 0 -5px', listStyle: 'none', height: '20px' }}>
          <li className="p-0-5">
            <i className="icon-list font-14 cursor-pointer list-item" style={{ color: '#555', marginTop: '3px' }}></i>
          </li>
          <li className="p-0-5">
            <i
              className="icon-reload font-14 cursor-pointer list-item"
              style={{ color: '#555', margin: '3px -1px 0 0' }}
            ></i>
          </li>
          <li className="p-0-5" style={{ paddingRight: '8px', paddingLeft: '5px' }}>
            <i
              className="icon-user-follow font-14 cursor-pointer"
              style={{ color: '#979797', margin: '3px 5px 0 0' }}
            ></i>
            <span className="font-weight-bold letter-spacing-0" style={{ color: '#f79600' }}>
              3452
            </span>
          </li>
          <li className="p-0-5">
            <i
              className="icon-people cursor-pointer font-14"
              style={{ color: '#979797', margin: '3px 4.5px 0 -0.2px' }}
            ></i>
            <span style={{ color: '#a2a3a5', marginRight: '-1px' }}>0</span>
          </li>
          <li>
            <i
              className="icon-clock cursor-pointer font-14"
              style={{ color: '#979797', margin: '3px 4.5px 0 9.5px' }}
            ></i>
            <span className="letter-spacing-0" style={{ color: '#e86060', marginRight: '5px' }}>
              Hết hạn
            </span>
          </li>
          <li>
            <i className="icon-cloud-upload font-14" style={{ color: '#979797', margin: '3px 4.5px 0 10px' }}></i>
            <span className="letter-spacing-0" style={{ color: '#979797' }}>
              <span style={{ color: '#72c02c' }}>v3</span>
              &nbsp;-&nbsp;21:04 01/05
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InfoAccount;
