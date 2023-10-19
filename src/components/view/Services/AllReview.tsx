import Image from "next/image";
import reviewer from '../../../assets/reviewer.svg'
import { Rate } from "antd";
import dayjs from "dayjs";
import { IReviewAndRating } from "@/types/common";
const AllReview = ({id, serviceReview }: {id:string,serviceReview:IReviewAndRating[]}) => {
    const singelReview = serviceReview.filter((review:IReviewAndRating)=>review.serviceId === id)

  return (
    <div>
        <div className="py-5">
            {
                singelReview.map((review:any)=>(
                   <div className="flex py-2 gap-5" key={review.id}>
                        <div className="w-[50px] h-[50px]">
                            <Image src={reviewer} width={50} height={50} alt="review" className="w-[50px] h-[50px]"/>
                        </div>
                        <div className="flex gap-5 justify-start flex-col">
                            <h3 className="text-lg font-roboto font-semibold">{review.user.fullName}</h3>
                            <Rate disabled value={review.rating}/>
                            <h4><span className="text-gray-700">Taken on:</span> {dayjs(review.createdAt).format("YYYY-MM-DD")}</h4>
                            <p className="text-sm font-roboto">{review.review}</p>
                        </div>
                   </div>
                ))
            }
        </div>
    </div>
  );
};
export default AllReview;
