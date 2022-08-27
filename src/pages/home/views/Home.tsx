import '../styles/_home.scss';
import { Divider } from 'antd';
import HeaderHome from './HeaderHome';
import ContentHome from './ContentHome';
// import AccountResult from './AccountResult';

const Home = () => {
  return (
    <div className="container full-height " style={{ padding: '5px 20px 0px' }}>
      <HeaderHome />
      <Divider style={{ margin: '-1px 0 0' }} />
      <ContentHome />
      <div className="account-result">{/* <AccountResult /> */}</div>
    </div>
  );
};

export default Home;
