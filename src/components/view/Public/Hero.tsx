"use client";
import { Typography } from "antd";
import AutocompleteInput from "../../ui/SearchBar";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ICategory } from "@/types/common";

const { Title, Paragraph } = Typography;

const Hero = ({data}:{data:ICategory[]}) => {
  const router = useRouter()
  const handleSelect = ( link: string) => {
    router.push(`/all-services/#${link}`)
  };
  return (
    <div>
      <div
        className="relative bg-cover font-roboto bg-center h-[500px]"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dyy4n4fmh/image/upload/v1697715400/img-inner_zpung2.jpg")',
        }}
      >
        <div className="h-full w-full flex items-center">
          <div className="text-white font-poppins text-center mx-auto">
            <Title className="text-white text-3xl sm:text-6xl font-poppins font-bold">
              Appliance Repair Services
            </Title>
            <Paragraph className="text-xl sm:text-2xl font-semibold text-white/90">
              Fast, Reliable, and Professional Repairs
            </Paragraph>
            <div className="max-w-lg px-6 sm:px-0 mx-auto">
              <AutocompleteInput
                placeholder="Find your service here"
                onSelect={handleSelect}
                data={data}
              />
            </div>
          </div>
        </div>
        <div className="md:flex relative hidden  justify-center -8">
          <div className="absolute  -top-12">
          <Image src='/emi.png' width={850} height={150} className="w-full md:w-[850px] md:h-28 rounded-md" alt="oben" layout="responsive"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

