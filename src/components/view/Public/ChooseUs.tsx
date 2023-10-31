import Image from "next/image";

const ChooseUs = () => {
  return (
    <div className="bg-[#fafbfc] px-10 font-roboto sm:px-24 py-10 sm:py-24">
    <div className="py-5 flex items-center gap-3">
      <hr className="w-10 h-[3px] bg-primary my-2" />{" "}
      <span className="text-sm">WHY CHOOSE US</span>
    </div>
    <h1 className="text-2xl font-medium sm:text-4xl sm:font-bold font-poppins text-secondary">
    Because we care about your safety..
    </h1>

    <div className="lg:flex justify-center py-8 gap-8 items-center h-full">
     
      <div className="w-full lg:w-2/5 flex justify-center items-center h-full">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-5">
   <div className="bg-white  shadow-lg shadow-gray-200 rounded-md flex justify-center items-center gap-2 py-5 px-6">
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
         src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/png/usp_sanitized.png"
         alt=""
       />
     </div>
     <div className="text-sm font-bold font-poppins text-secondary">
     Sanitising
Hands &
Equipment
     </div>
   </div>
   <div className="bg-white shadow-lg shadow-gray-200 rounded-md flex justify-center items-center gap-2 py-5 px-6">
     <div>
     <Image
       width={50} 
       height={50}
         className="w-[50px] h-[50px]"
         src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/png/usp_mask.png"
         alt=""
       />
     </div>
     <div className="text-sm font-bold font-poppins text-secondary">
     Ensuring
Masks
     </div>
   </div>
   <div className="bg-white shadow-lg shadow-gray-200 rounded-md flex justify-center items-center gap-2 py-5 px-6">
     <div>
       <Image
       width={50} 
       height={50}
         className="w-[50px] h-[50px]"
         src="https://cdn-marketplacexyz.s3.ap-south-1.amazonaws.com/sheba_xyz/images/png/usp_gloves.png"
         alt=""
       />
     </div>
     <div className="text-sm font-bold font-poppins text-secondary">
       Ensuring Gloves
     </div>
   </div>
 </div>
      </div>
      <div className="w-full mt-8 lg:mt-0 lg:w-3/5 h-auto">
        <Image
          src="https://res.cloudinary.com/dyy4n4fmh/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1697715568/Image-11_n2nt55.jpg"
          alt=""
          layout="responsive"
          width={600}
          height={500}
          className="rounded-md h-[300px]"
        />
      </div>
    </div>
  </div>
  );
};
export default ChooseUs;