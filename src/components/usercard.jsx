import { useState } from 'react';
import './Usercard.css';

function Usercard() {
  const [liked, setLiked] = useState(false);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <div className="user-card">
      <img src="https://via.placeholder.com/150" alt="User Avatar" className="avatar" />
      <h3>User Name</h3>
      <p>Some description about the user.</p>
      <button onClick={toggleLike} className={liked ? 'liked' : ''}>
        {liked ? 'Liked' : 'Like'}
      </button>
    </div>
  );
}

export default Usercard;
