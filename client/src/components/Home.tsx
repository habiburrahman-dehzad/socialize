import React from 'react';
import { Divider } from 'antd';
import NewPost from './NewPost';
import UserFeed from './UserFeed';

const Home = () => {
  return (
    <div>
      <NewPost />
      <Divider />
      <UserFeed />
    </div>
  );
};

export default Home;
