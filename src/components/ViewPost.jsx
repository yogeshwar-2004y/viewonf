import React from 'react';
import PostCard from './PostCard';
import './ViewPost.css';

const ViewPost = () => {
  const posts = [
    {
      id: 1,
      type: 'image',
      mediaUrl: 'src/assets/slider3.jpg',
      likes: 10,
      comments: ['Great photo!', 'Looks delicious!'],
    },
    {
      id: 2,
      type: 'video',
      mediaUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
      likes: 20,
      comments: ['Amazing!', 'Love this culture.'],
    },
    {
        id: 3,
        type: 'image',
        mediaUrl: 'src/assets/slider2.jpg',
        likes: 10,
        comments: ['Great photo!', 'Looks delicious!'],
    },
    {
        id: 4,
        type: 'image',
        mediaUrl: 'src/assets/slider3.jpg',
        likes: 10,
        comments: ['Great photo!', 'Looks delicious!'],
      },
      {
        id: 5,
        type: 'image',
        mediaUrl: 'src/assets/res2.jpg',
        likes: 10,
        comments: ['Great photo!', 'Looks delicious!'],
      },
    // Add more posts as needed
  ];

  return (
    <div className="view-post">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default ViewPost;
