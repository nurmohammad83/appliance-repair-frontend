import { FaArrowDown } from "react-icons/fa";
import Image from "next/image";

const Work = () => {
  return (
    <div className="bg-[#fafbfc] px-10 sm:px-24 py-10 ">
      <div className="py-5 flex items-center gap-3">
        <hr className="w-10 h-[3px] bg-primary my-2" />{" "}
        <span className="text-sm">HOW IT WORKS</span>
      </div>
      <h1 className="font-medium sm:text-4xl sm:font-bold font-poppins text-secondary  text-sm">
        Easiest way to get a service
      </h1>

      <div className="lg:flex mt-8 lg:mt-0 justify-center gap-12 items-center h-full">
      <div className="w-full  lg:w-1/2 h-auto">
        <Image
          src="https://s3.ap-south-1.amazonaws.com/cdn-marketplacexyz/sheba_xyz/images/webp/why-choose-us.webp"
          alt=""
          layout="responsive"
          width={600}
          height={500}
          className=""
        />
      </div>
        <div className="w-full lg:w-1/2 py-5 flex justify-center items-center h-full">
          <div>
            <div className="lg:py-6 lg:pr-16">
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex items-center justify-center w-10 h-10 border bg-primary text-white rounded-full">
                      <FaArrowDown />
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-poppins font-bold">Select the Service</p>
                  <p className="text-secondary font-poppins text-sm">
                  Pick the service you are looking for- from the website or the app.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex bg-primary text-white items-center justify-center w-10 h-10 border rounded-full">
                      <FaArrowDown />
                    </div>
                  </div>
                  <div className="w-px h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-poppins font-bold">Pick your schedule</p>
                  <p className="text-secondary font-poppins text-sm">
                  Pick your convenient date and time to avail the service. Pick the service provider based on their rating.
                  </p>
                </div>
              </div>
              <div className="flex">
                <div className="flex flex-col items-center mr-4">
                  <div>
                    <div className="flex bg-primary text-white items-center justify-center w-10 h-10 rounded-full">
                      <FaArrowDown />
                    </div>
                  </div>
                  <div className="h-full bg-gray-300" />
                </div>
                <div className="pt-1 pb-8">
                  <p className="mb-2 text-lg font-poppins font-bold">Place Your Order & Relax</p>
                  <p className="text-secondary font-poppins text-sm">
                  Review and place the order. Now just sit back and relax. We’ll assign the expert service provider’s schedule for you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Work;
