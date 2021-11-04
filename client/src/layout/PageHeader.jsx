import React from 'react';
import { Layout } from 'antd';

const PageHeader = () => {
  const { Header } = Layout;

  return (
    <Header className='header'>
      <div className='logo'>
        <h3>Socialize</h3>
      </div>
    </Header>
  );
};

export default PageHeader;
