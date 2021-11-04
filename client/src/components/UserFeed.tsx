import React from 'react';
import { Card, Avatar } from 'antd';
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
} from '@ant-design/icons';
import PostComments from './comments/PostComments';

const UserFeed = () => {
  const { Meta } = Card;

  return (
    <>
      <Card
        hoverable
        style={{ width: '70%', marginLeft: '15%' }}
        cover={
          <img
            alt='example'
            src='https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png'
          />
        }
        actions={[
          <SettingOutlined key='setting' />,
          <EditOutlined key='edit' />,
          <EditOutlined key='reply' />,
          <EllipsisOutlined key='ellipsis' />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
          }
          title='Card title'
          description='This is the description'
        />
        <PostComments />
      </Card>
    </>
  );
};

export default UserFeed;
