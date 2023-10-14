import {  Flex, Steps} from "antd";
import Image from "next/image";

const Work = () => {
  return (
    <div className="bg-[#fafbfc] h-screen px-10 sm:px-24 py-10 sm:pt-16">
       <Flex align="start" className="py-5" gap={10}>
       <hr className="w-10 h-[3px] bg-primary my-2" /> <span className="text-sm">HOW IT WORKS</span>
       </Flex>
      <h1 className="text-2xl font-medium sm:text-4xl sm:font-bold font-poppins text-secondary">
      Easiest way to get a service
      </h1>

      <div className="lg:flex justify-center gap-24 p-10 items-center h-[400px]">
        <div className="w-full lg:w-1/2 h-auto">
          <Image
            src="https://s3.ap-south-1.amazonaws.com/cdn-marketplacexyz/sheba_xyz/images/webp/why-choose-us.webp"
            alt=""
            layout="responsive"
            width={500}
            height={500}
            className="w-full h-full"
          />
        </div>
        <div className="w-full lg:w-1/2 flex justify-center items-center h-full">
          <Steps
          className="ant-steps-item"
            direction="vertical"
            items={[
              {
                title: <h1 className="text-xl font-poppins">Select the Service</h1>,
                description: <p className="font-poppins text-sm text-secondary">Pick the service you are looking for- from the website or the app.</p>,
              },
              {
                title: <h1 className="text-xl font-poppins">Pick your schedule</h1>,
                description: <p className="font-poppins text-sm text-secondary">Pick your convenient date and time to avail the service. Pick the service provider based on their rating.</p>,
              },
              {
                title: <h1 className="text-xl font-poppins">Place Your Order & Relax</h1>,
                description: <p className="font-poppins text-sm text-secondary">Review and place the order. Now just sit back and relax. We’ll assign the expert service provider’s schedule for you.</p>,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
export default Work;