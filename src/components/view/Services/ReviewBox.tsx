import React, { useState } from 'react';
import { Card, Input, Button, Rate } from 'antd';

const { TextArea } = Input;

const Review= () => {
  const [review, setReview] = useState<string>('');
  const [rating, setRating] = useState<number>(0);

  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  const handleReviewSubmit = () => {
    // You can handle the review submission here, e.g., send it to a server or store it in your state.
    console.log('Review submitted:', review);
    console.log('Rating:', rating);
    setReview('');
    setRating(0);
  };

  return (
    <Card title="Review and Rating" className='my-10'>
      <div className='py-4 flex justify-center items-center gap-5'>
        <label>Rating:</label>
        <Rate value={rating} onChange={handleRatingChange} />
      </div>
      <TextArea
        rows={4}
        value={review}
        onChange={handleReviewChange}
        placeholder="Write your review here..."
      />
      <Button className='my-5 bg-primary border-primary text-white font-roboto' type="primary" onClick={handleReviewSubmit}>
        Submit Review
      </Button>
    </Card>
  );
};

export default Review;
