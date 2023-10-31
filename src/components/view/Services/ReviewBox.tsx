import React, { use, useState } from "react";
import { Card, Input, Button, Rate, message } from "antd";
import { createReview } from "@/services/review/create-review";
import { IUser } from "@/types/common";

const { TextArea } = Input;

interface IProps {
  user:IUser[] | null,
  id:string
}

const Review = ({ user, id }: IProps) => {
  const [review, setReview] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

   const userId =user ? user[0].id : null;
  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  const handleReviewSubmit = async () => {
    message.loading('Submitting...')
    try {
      const data:any = {
        review,
        rating,
        userId,
        serviceId: id,
      };

      const result = await createReview(data);
      if (result) {
        message.success("Thanks for you review.");
      }
    } catch (error) {
      message.error("Something want to wrong!");
    }
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
        disabled={user ? false : true}
        className={`${user ? 'block' : 'hidden'} my-5 bg-primary border-primary text-white font-roboto`}
        type="primary"
        onClick={handleReviewSubmit}
      >
        Submit Review
      </Button>
    </Card>
  );
};

export default Review;
