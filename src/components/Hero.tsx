"use client";
import { Input, Select, Typography } from "antd";
import AutocompleteInput from "./ui/SearchBar";

const { Title, Paragraph } = Typography;
const data = [
  { name: "Refrigerator", link: "/refrigerator-details" },
  { name: "Washing Machine", link: "/washing-machine-details" },
  { name: "Dishwasher", link: "/dishwasher-details" },
  { name: "Oven", link: "/oven-details" },
  { name: "Microwave", link: "/microwave-details" },
  // Add more appliance data with links as needed
];

const Hero = () => {
  const handleSelect = (value: string, link: string) => {
    console.log(`${value}${link}`);
  };
  return (
    <div
      className="relative bg-cover bg-center h-screen"
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
    </div>
  );
};

export default Hero;
