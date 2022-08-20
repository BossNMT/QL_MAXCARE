import { Menu } from 'antd'
import { useState } from 'react';

const items = [
    {
      label: 'Home',
      key: 'Home',
    },
    {
        label: 'Status',
        key: 'Status',
    },
    {
        label: 'Manager Email',
        key: 'Manager Email',
    },
    {
        label: 'Find Picture',
        key: 'Find Picture',
    },
    {
        label: 'MGroups',
        key: 'MGroups',
    },
    {
        label: 'MGetToken',
        key: 'MGetToken',
    },
    {
        label: 'HCP V1',
        key: 'HCP V1',
    },
    {
        label: 'Gói Tính Năng',
        key: 'Gói Tính Năng',
    },
    {
        label: 'Price',
        key: 'Price',
    },
    {
        label: 'Profile',
        key: 'Profile',
    },
    {
        label: 'API',
        key: 'API',
    }
  ];

const MenuHeader = () => {
    const [current, setCurrent] = useState('mail');

    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}

export default MenuHeader