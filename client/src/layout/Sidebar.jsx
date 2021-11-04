import React from 'react';
import { Layout, Menu } from 'antd';
import {
  UserOutlined,
  ContactsOutlined,
  NotificationFilled,
  SettingFilled,
  HomeFilled,
  ProfileFilled,
  CopyFilled,
  TeamOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const { SubMenu } = Menu;
  const { Sider } = Layout;

  return (
    <Sider width={200} theme='dark'>
      <Menu
        mode='inline'
        defaultSelectedKeys={['home']}
        defaultOpenKeys={['sub-user']}
        style={{ height: '100%', borderRight: 0 }}
        theme='dark'
      >
        <SubMenu key='sub-user' icon={<UserOutlined />} title='User'>
          <Menu.Item key='home' icon={<HomeFilled />}>
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item key='profile' icon={<ProfileFilled />}>
            <Link to='/profile'>Profile</Link>
          </Menu.Item>
          <Menu.Item key='friends' icon={<ContactsOutlined />}>
            <Link to='/friends'>Friends</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key='sub-groups-pages'
          icon={<TeamOutlined />}
          title='Groups and Pages'
        >
          <Menu.Item key='groups' icon={<TeamOutlined />}>
            <Link to='/groups'>Groups</Link>
          </Menu.Item>
          <Menu.Item key='pages' icon={<CopyFilled />}>
            <Link to='/pages'>Pages</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key='sub-notifs'
          icon={<NotificationFilled />}
          title='Notifications'
        >
          <Menu.Item key='all-notifs'>
            <Link to='/allnotifs'>All Notifications</Link>
          </Menu.Item>
          <Menu.Item key='unread-notifs'>
            <Link to='/unreadnotifs'>Unread Notifications</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key='preferences' icon={<SettingFilled />}>
          <Link to='/preferences'>Preferences</Link>
        </Menu.Item>
        <Menu.Item key='logout' icon={<LogoutOutlined />}>
          <Link to='/logout'>Logout</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
