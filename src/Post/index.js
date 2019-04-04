import React from 'react';
import PropType from 'prop-types';
import PostHeader from './PostHeader';

import './styles.scss';

const Post = ({
  message, avatar, author, time,
}) => (
  <div className="mainPost">
    <PostHeader avatar={avatar} author={author} time={time} />
    <hr color="#f4f2f1" />
    <p className="textPost">{message}</p>
  </div>
);

Post.propTypes = {
  message: PropType.string.isRequired,
  avatar: PropType.string.isRequired,
  author: PropType.string.isRequired,
  time: PropType.string.isRequired,
};

export default Post;
