import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';

const items: MenuProps['items']  = [
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

const MenuHeader: React.FC = () => {
    const [current, setCurrent] = useState('Home');

    const onClick: MenuProps['onClick'] = e => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    return <Menu className='height-43 menu-header justify-content-center' onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
}

export default MenuHeader