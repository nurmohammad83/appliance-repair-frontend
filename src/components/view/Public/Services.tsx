import { Button, Col, Row } from "antd";
import Image from "next/image";
import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";

const Services =async ({categorires}:any) => {
  return (
    <div className="px-10 sm:px-24 py-10 mt-10 sm:py-24">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-medium sm:text-4xl sm:font-bold font-poppins text-secondary">
          Our Services
        </h1>
        <Button
          size="large"
          className="text-primary group shadow-gray-400 shadow-sm text-sm font-semibold  flex justify-center border-none items-center"
        >
          View All <ArrowRightOutlined className="transition-all delay-50 duration-500 group-hover:translate-x-2"/>
        </Button>
      </div>
      <hr className="sm:w-36 w-24  h-1 bg-primary my-2" />

      <Row
        className="mt-10"
        justify={"center"}
        align={"middle"}
        gutter={[24, 24]}
      >
        {
          categorires?.slice(0,3).map(((category:any)=>(
            <Col key={category?.id} xs={24} sm={24} md={12} lg={12} xl={8}>
            <Link className="group rounded-md" href="/">
              <Image
                src={category?.image}
                alt="oben"
                layout="responsive"
                height={250}
                width={500}
                className="w-[450px] h-[250px]"
              />
              <h3 className="text-center group-hover:text-primary text-secondary text-lg font-poppins pt-1">
                {category.title}
              </h3>
            </Link>
          </Col>
          )))
        }
      
      </Row>
    </div>
  );
};
export default Services;