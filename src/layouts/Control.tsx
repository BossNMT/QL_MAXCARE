import { Space, Avatar, Button, Divider } from 'antd';
import './styles/_control.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEarthAmericas, faEnvelope, faGear } from '@fortawesome/free-solid-svg-icons';

const Control = () => {
  return (
    <div className="d-flex header__right full-height">
      <Space size={4.5} style={{ marginTop: '8px' }}>
        <Avatar
          style={{ width: 24, height: 24, marginRight: '-1px' }}
          src="https://scontent.fhan15-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=K9rdFgMILKMAX9LKkjK&_nc_ht=scontent.fhan15-1.fna&oh=00_AT8SBL2Da3aJuz1Eb5AlFQK0vkCEjOALJ-7EnlcZcNJAzA&oe=632963F8"
        />
        <Button className="btn-control color-light font-weight-bold font-12" style={{ marginRight: '-5.1px' }} ghost>
          Tran
        </Button>
        <Divider className="divider-control" type="vertical" />
        <Button className="btn-control color-light font-weight-bold font-12" ghost>
          Trang Chủ
        </Button>

        <Button className="btn-control font-15" style={{ width: '33.73px', marginRight: '-0.8px' }} ghost>
          <FontAwesomeIcon icon={faBars} />
        </Button>
        <Button className="btn-control font-size-16" style={{ marginRight: '-1.6px' }} ghost>
          <i className="icon-people"></i>
        </Button>
        <Button className="btn-control font-size-16" ghost>
          <FontAwesomeIcon icon={faEnvelope} />
        </Button>
        <Button className="btn-control" style={{ paddingLeft: '9px' }} ghost>
          <FontAwesomeIcon icon={faEarthAmericas} />
        </Button>
        <Button className="btn-control" style={{ fontSize: '13.9px' }} ghost>
          <FontAwesomeIcon icon={faGear} />
        </Button>
      </Space>
    </div>
  );
};

export default Control;
