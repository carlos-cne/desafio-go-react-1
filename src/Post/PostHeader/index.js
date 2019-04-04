import React from 'react';
import PropType from 'prop-types';

import './styles.scss';

const PostHeader = ({ avatar, author, time }) => (
  <div className="postHeader">
    <div className="postImage">
      <img className="avatarImg" src={avatar} width="64px" alt="Imagem avatar" />
    </div>
    <div className="postAuthor">
      <p className="author">{author}</p>
      <p className="elapsedTime">{time}</p>
    </div>
  </div>
);

PostHeader.propTypes = {
  avatar: PropType.string.isRequired,
  author: PropType.string.isRequired,
  time: PropType.string.isRequired,
};

export default PostHeader;
