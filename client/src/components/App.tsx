import * as React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Col, Layout, Row } from 'antd';
import PageHeader from '../layout/PageHeader';
import Sidebar from '../layout/Sidebar';
import Home from './Home';

function App() {
  const { Content } = Layout;

  return (
    <BrowserRouter>
      <Row>
        <Col span='18' offset='3'>
          <Layout>
            <PageHeader />
            <Layout>
              <Sidebar />
              <Layout
                style={{ padding: '0 24px 24px', backgroundColor: 'white' }}
              >
                <Content>
                  <Routes>
                    <Route path='/' element={<Home />}></Route>
                  </Routes>
                </Content>
              </Layout>
            </Layout>
          </Layout>
        </Col>
      </Row>
    </BrowserRouter>
  );
}

export default App;
