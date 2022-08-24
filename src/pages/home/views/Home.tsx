import '../styles/_home.scss';
import { Divider } from 'antd';
import HomeHeader from './HomeHeader';
import HomeContent from './HomeContent';
// import AccountResult from './AccountResult';

const Home = () => {
  return (
    <div className="container full-height " style={{ padding: '5px 20px 0px' }}>
      <HomeHeader />
      <Divider className="margin-0" />
      <HomeContent />
      {/* <div className="account-result">
        <AccountResult />
      </div> */}
    </div>
  );
};

export default Home;
