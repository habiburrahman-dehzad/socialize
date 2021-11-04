import React, { useState } from 'react';
import { Comment as CommentElement, Avatar, Card } from 'antd';
import CommentList from './CommentList';
import CommentEditor from './CommentEditor';
import moment from 'moment';

interface Comment {
  author: string;
  avatar: string;
  content: JSX.Element;
  datetime: string;
}

const PostComments = () => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [value, setValue] = useState('');

  const handleSubmit = () => {
    if (!value) {
      return;
    }

    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setComments([
        ...comments,
        {
          author: 'Han Solo',
          avatar:
            'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
          content: <p>{value}</p>,
          datetime: moment().fromNow(),
        },
      ]);
      setValue('');
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  return (
    <Card style={{ marginTop: '40px' }}>
      {comments.length > 0 && <CommentList comments={comments} />}
      <CommentElement
        avatar={
          <Avatar
            src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png'
            alt='Han Solo'
          />
        }
        content={
          <CommentEditor
            onChange={handleChange}
            onSubmit={handleSubmit}
            submitting={submitting}
            value={value}
          />
        }
      />
    </Card>
  );
};

export default PostComments;
