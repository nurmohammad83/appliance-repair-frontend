
import { Button, Carousel, Col, Flex, Row } from "antd";
import Image from "next/image";
import { ArrowRightOutlined } from "@ant-design/icons";
import Link from "next/link";

const TrendingService = () => {
  return (
    <div className="px-10 sm:px-24 py-10 sm:pb-16">
     
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-medium sm:text-2xl sm:font-bold font-poppins text-secondary">
        Trending Service
        </h1>
        <Button
          size="large"
          className="text-primary shadow-gray-400 shadow-sm text-sm font-semibold  flex justify-center border-none items-center"
        >
          View All <ArrowRightOutlined />
        </Button>
      </div>
      <Row
        className="mt-10"
        justify={"center"}
        align={"middle"}
        gutter={[24, 24]}
      >
        <Col xs={24} sm={24} md={12} lg={12} xl={8}>
          <Link className="group" href="/">
            <Image
              src="/oven.jpeg"
              alt="oben"
              layout="responsive"
              height={250}
              width={300}
            />
            <h3 className="text-center group-hover:text-primary text-secondary text-lg font-poppins pt-1">
              Refrigerator Repair
            </h3>
          </Link>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={8}>
          <Link className="group" href="/">
            <Image
              src="/oven.jpeg"
              alt="oben"
              layout="responsive"
              height={250}
              width={300}
            />
            <h3 className="text-center group-hover:text-primary text-secondary text-lg font-poppins pt-1">
              Refrigerator Repair
            </h3>
          </Link>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={8}>
          <Link className="group" href="/">
            <Image
              src="/oven.jpeg"
              alt="oben"
              layout="responsive"
              height={250}
              width={300}
            />
            <h3 className="text-center group-hover:text-primary text-secondary text-lg font-poppins pt-1">
              Refrigerator Repair
            </h3>
          </Link>
        </Col>
      </Row>
    </div>
  );
};
export default TrendingService;