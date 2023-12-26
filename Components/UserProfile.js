import React from 'react';

function UserProfile({ username, email, avatar, favoriteMovies, watchlist, reviews }) {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
      <div className="user-info">
        <img src={avatar} alt="User Avatar" />
        <div>
          <p><strong>Username:</strong> {username}</p>
          <p><strong>Email:</strong> {email}</p>
          <h3>Favorites</h3>
          <ul>
            {favoriteMovies.map((movie, index) => (
              <li key={index}>{movie.title}</li>
            ))}
          </ul>
          <h3>Watchlist</h3>
          <ul>
            {watchlist.map((movie, index) => (
              <li key={index}>{movie.title}</li>
            ))}
          </ul>
          <h3>Reviews</h3>
          <ul>
            {reviews.map((review, index) => (
              <li key={index}>
                <strong>{review.movieTitle}:</strong> {review.comment}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default UserProfile;
