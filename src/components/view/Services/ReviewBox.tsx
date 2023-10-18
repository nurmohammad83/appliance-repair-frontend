import React, { use, useState } from "react";
import { Card, Input, Button, Rate, message } from "antd";
import { createReview } from "@/services/review/create-review";
import { IReview } from "@/types/common";

const { TextArea } = Input;

const Review = ({ user, id }: any) => {
  const [review, setReview] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  console.log(user,'This is user')
  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  const handleReviewSubmit = async () => {
    try {
      const data: IReview = {
        review,
        rating,
        userId: user.id,
        serviceId: id,
      };
      console.log(data);
      const result = await createReview(data);
      if (result) {
        message.success("Thanks for you review.");
      }
    } catch (error) {
      message.error("Something want to wrong!");
    }
    console.log("Review submitted:", review);
    console.log("Rating:", rating);
    setReview("");
    setRating(0);
  };

  return (
    <Card title="Review and Rating" className="my-10">
      <div className="py-4 flex justify-center items-center gap-5">
        <label>Rating:</label>
        <Rate value={rating} onChange={handleRatingChange} />
      </div>
      <TextArea
        rows={4}
        value={review}
        onChange={handleReviewChange}
        placeholder="Write your review here..."
      />
      <Button
        disabled={!user}
        className={`${
          user ? "block" : "hidden"
        } my-5 bg-primary border-primary text-white font-roboto`}
        type="primary"
        onClick={handleReviewSubmit}
      >
        Submit Review
      </Button>
    </Card>
  );
};

export default Review;
