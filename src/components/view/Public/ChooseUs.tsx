
import { Card, Col, Flex, Row } from "antd";
import Column from "antd/es/table/Column";
import Image from "next/image";

const ChooseUs = () => {
  return (
    <div className="bg-[#fafbfc] h-screen px-10 sm:px-24 py-10 mt-10 sm:pt-16">
       <Flex align="start" className="py-5" gap={10}>
       <hr className="w-10 h-[3px] bg-primary my-2" /> <span className="text-sm">HOW IT WORKS</span>
       </Flex>
        <h1 className="text-2xl font-medium sm:text-4xl sm:font-bold font-poppins text-secondary">
          Why Choose Us
        </h1>
    
      <div className="lg:flex justify-center gap-10 py-10 items-center h-[350px]">
      <div className="w-full lg:w-1/3 mt-5 lg:mt-0 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white shadow-lg shadow-gray-200 rounded-md flex justify-center items-center gap-2 py-5 px-6">
            <div>
            <Image
              width={50} 
              height={50}
                className="w-[50px] h-[50px]"
                src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/png/usp_24_7.png"
                alt=""
              />
            </div>
            <div className="text-sm font-bold font-poppins text-secondary">
              24/7 Support
            </div>
          </div>
          <div className="bg-white shadow-lg shadow-gray-200 rounded-md flex justify-center items-center gap-2 py-5 px-6">
            <div>
            <Image
              width={50} 
              height={50}
                className="w-[50px] h-[50px]"
                src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/png/usp_24_7.png"
                alt=""
              />
            </div>
            <div className="text-sm font-bold font-poppins text-secondary">
              24/7 Support
            </div>
          </div>
          <div className="bg-white shadow-lg shadow-gray-200 rounded-md flex justify-center items-center gap-2 py-5 px-6">
            <div>
            <Image
              width={50} 
              height={50}
                className="w-[50px] h-[50px]"
                src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/png/usp_24_7.png"
                alt=""
              />
            </div>
            <div className="text-sm font-bold font-poppins text-secondary">
              24/7 Support
            </div>
          </div>
          <div className="bg-white shadow-lg shadow-gray-200 rounded-md flex justify-center items-center gap-2 py-5 px-6">
            <div>
              <Image
              width={50} 
              height={50}
                className="w-[50px] h-[50px]"
                src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/png/usp_24_7.png"
                alt=""
              />
            </div>
            <div className="text-sm font-bold font-poppins text-secondary">
              24/7 Support
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/3 px-8 h-full">
          <Image src="https://s3.ap-south-1.amazonaws.com/cdn-marketplacexyz/sheba_xyz/images/webp/why-choose-us.webp"  alt="" layout="responsive" width={500} height={500} className="w-full h-full" />
        </div>
      </div>
    </div>
  );
};
export default ChooseUs;