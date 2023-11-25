'use client'

import { Collapse, CollapseProps } from "antd"
import Image from "next/image";
import faq from '@/assets/faq 1.png'
const FAQ = () => {
    const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];
const onChange = (key: string | string[]) => {
    console.log(key);
  };
  return (
    <div className="px-10 font-roboto sm:px-24 py-10 sm:py-24">
        <div className="py-5 flex items-center gap-3">
      <hr className="w-10 h-[3px] bg-primary my-2" />{" "}
      <span className="text-sm">FAQ</span>
    </div>
    <h1 className="text-2xl font-medium sm:text-4xl sm:font-bold font-poppins text-secondary">
    Here are some FAQ
    </h1>

    <div className="flex w-full p-10 gap-7">
        <div className="w-1/2">
        <div className="w-full">
             <Image
                src={faq}
                alt="image"
                layout="responsive"
                height={300}
                width={300}
                className="w-[60%] h-[60%]"
              />
             </div>
        </div>
        <div className="w-1/2">
        <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
        </div>
    </div>
    </div>
  )
}
export default FAQ