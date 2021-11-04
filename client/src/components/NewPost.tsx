import React, { useState } from 'react';
import { Card, Form, Input, Button, Row, Col } from 'antd';

const NewPost = () => {
  const [text, setText] = useState('');

  const { TextArea } = Input;

  const handlePosting = (e: React.MouseEvent<HTMLElement>) => {
    if (!text) return;

    console.log(text);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <Row>
      <Col span='18' offset='3'>
        <Card
          hoverable
          actions={[
            <Button type='link' onClick={() => setText('')}>
              Clear
            </Button>,
            <Button type='link' onClick={handlePosting}>
              Post
            </Button>,
          ]}
        >
          <Form>
            <Form.Item>
              <TextArea
                placeholder='What is on your mind?'
                value={text}
                onChange={handleChange}
              />
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default NewPost;
