import React, { useState } from 'react';
import './PostCard.css';

const PostCard = ({ post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [comments, setComments] = useState(post.comments);
  const [newComment, setNewComment] = useState('');

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== '') {
      setComments([...comments, newComment]);
      setNewComment('');
    }
  };

  return (
    <div className="post-card">
      <div className="post-media">
        {post.type === 'image' ? (
          <img src={post.mediaUrl} alt="Post" />
        ) : (
          <video src={post.mediaUrl} controls />
        )}
      </div>
      <div className="post-actions">
        <button onClick={handleLike}>Like ({likes})</button>
        <div className="comments-section">
          <input
            type="text"
            placeholder="Add a comment"
            value={newComment}
            onChange={handleCommentChange}
          />
          <button onClick={handleAddComment}>Comment</button>
          <div className="comments-list">
            {comments.map((comment, index) => (
              <p key={index}>{comment}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
