
"use client";
import { Typography } from "antd";
import AutocompleteInput from "../../ui/SearchBar";
import Image from "next/image";
import { useRouter } from "next/navigation";


const { Title, Paragraph } = Typography;

const Hero = ({data}:any) => {
  const router = useRouter()
  const handleSelect = ( link: string) => {
    router.push(`/all-services/#${link}`)
  };
  return (
    <div>
      <div
        className="relative bg-cover bg-center h-[500px]"
        style={{
          backgroundImage:
            'url("https://s3.ap-south-1.amazonaws.com/cdn-marketplacexyz/sheba_xyz/images/webp/home-banner.webp")',
        }}
      >
        <div className="bg-black bg-opacity-50 h-full w-full flex items-center">
          <div className="text-white font-poppins text-center mx-auto">
            <Title className="text-white text-6xl font-poppins font-bold">
              Appliance Repair Services
            </Title>
            <Paragraph className="text-2xl font-semibold text-white/90">
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
        <div className="sm:flex relative hidden  justify-center -8">
          <div className="absolute  -top-12">
          <Image src='/emi.png' width={850} height={96} className="w-full md:w-[850px] md:h-24 rounded-md" alt="oben" layout="responsive"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

