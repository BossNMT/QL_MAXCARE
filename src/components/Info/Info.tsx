import HeaderInfo from './HeaderInfo';
import './Info.scss';
import UpdateInfo from './UpdateInfo';

const Info = () => {
  return (
    <div className="wrapper-info display-flex-column full-height">
      <div className="header-info" style={{ height: '137.45px' }}>
        <HeaderInfo />
      </div>
      <div
        className="update-info full-height"
        style={{ boxShadow: '0 6px 10px -4px rgb(0 0 0 / 15%)', border: '1px solid #ddd' }}
      >
        <UpdateInfo />
      </div>
    </div>
  );
};

export default Info;
