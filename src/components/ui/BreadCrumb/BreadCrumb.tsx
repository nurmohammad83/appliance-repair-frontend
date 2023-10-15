import { Breadcrumb } from "antd";
import Link from "next/link";
import { HomeOutlined } from "@ant-design/icons";
const BreadCrumb = ({
  items,
}: {
  items: {
    label: string;
    link: string;
  }[];
}) => {

  const bredCrumbItems = [
    {
      title: (
        <Link className="font-poppins font-bold text-gray-300" href="/">
          <HomeOutlined />
        </Link>
      ),
    },
    ...items.map((item) => {
      return {
        title: item.link ? (
          <Link className="font-poppins font-bold text-gray-300" href={item.link}>{item.label}</Link>
        ) : (
          <span>{item.label}</span>
        )
      }
    }),
  ];
  return <Breadcrumb className="text-white" items={bredCrumbItems} />;
};
export default BreadCrumb;
