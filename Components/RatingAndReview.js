import React, { useState } from 'react';

function RatingAndReview({ onSave }) {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleReviewTextChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleSave = () => {
    const reviewData = {
      rating,
      reviewText
    };
    onSave(reviewData);
  };

  return (
    <div className="rating-and-review">
      <h2>Rate and Review</h2>
      <div>
        <label>Rating:</label>
        <select value={rating} onChange={(e) => handleRatingChange(Number(e.target.value))}>
          <option value={0}>Select rating...</option>
          <option value={1}>1 - Poor</option>
          <option value={2}>2 - Fair</option>
          <option value={3}>3 - Good</option>
          <option value={4}>4 - Very Good</option>
          <option value={5}>5 - Excellent</option>
        </select>
      </div>
      <div>
        <label>Write a Review:</label>
        <textarea value={reviewText} onChange={handleReviewTextChange} />
      </div>
      <button onClick={handleSave}>Save Review</button>
    </div>
  );
}

export default RatingAndReview;
