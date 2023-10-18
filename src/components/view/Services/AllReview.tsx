import Image from "next/image";
import reviewer from '../../../assets/reviewer.svg'
import { Rate } from "antd";
import dayjs from "dayjs";
const AllReview = ({ serviceReview }: any) => {
  return (
    <div>
        <div className="py-7">
            {
                serviceReview.map((service:any)=>(
                   <div className="flex gap-5" key={service.id}>
                        <div className="w-[50px] h-[50px]">
                            <Image src={reviewer} width={50} height={50} alt="review" className="w-[50px] h-[50px]"/>
                        </div>
                        <div className="flex gap-5 justify-start flex-col">
                            <h3 className="text-lg font-roboto font-semibold">{service.user.fullName}</h3>
                            <Rate disabled value={service.rating}/>
                            <h4><span className="text-gray-700">Taken on:</span> {dayjs(service.createdAt).format("YYYY-MM-DD")}</h4>
                            <p className="text-sm font-roboto">{service.review}</p>
                        </div>
                   </div>
                ))
            }
        </div>
    </div>
  );
};
export default AllReview;
