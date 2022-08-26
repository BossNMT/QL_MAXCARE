import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';

const items: MenuProps['items'] = [
  {
    label: 'Manager Account ',
    key: 'Manager',
  },
  {
    label: 'Import Account',
    key: 'Import',
  },
  {
    label: 'Tương Tác',
    key: 'Interactive',
  },
];

const MenuSider: React.FC = () => {
  const [current, setCurrent] = useState('Manager');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <div className="menu-sider">
      <Menu
        overflowedIndicator={false}
        className="menu-header"
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        items={items}
      />
    </div>
  );
};

export default MenuSider;
