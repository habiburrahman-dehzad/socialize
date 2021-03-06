import React from 'react';
import { Form, Button, Input } from 'antd';

interface Props {
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onSubmit: React.MouseEventHandler<HTMLElement>;
  submitting: boolean;
  value: string;
}

const CommentEditor: React.FC<Props> = ({
  onChange,
  onSubmit,
  submitting,
  value,
}) => {
  const { TextArea } = Input;

  return (
    <>
      <Form.Item>
        <TextArea rows={4} onChange={onChange} value={value} />
      </Form.Item>
      <Form.Item>
        <Button
          htmlType='submit'
          loading={submitting}
          onClick={onSubmit}
          type='primary'
        >
          Add Comment
        </Button>
      </Form.Item>
    </>
  );
};

export default CommentEditor;
