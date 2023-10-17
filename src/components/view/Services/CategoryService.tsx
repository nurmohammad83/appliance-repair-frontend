import { Col, Row } from "antd"
import Image from "next/image"
import Link from "next/link"

const CategoryService = (services:any) => {
  return (
    <Row
    className="mt-10"
    justify={"center"}
    align={"middle"}
    gutter={[24, 24]}
  >
    {
      services?.slice(0,3)?.map(((category:any)=>(
        <Col key={category?.id} xs={24} sm={24} md={12} lg={12} xl={8}>
        <Link className="group rounded-md" href="/">
          <Image
            src={category?.image}
            alt="oven"
            layout="responsive"
            height={250}
            width={300}
            className="w-full h-[250px]"
          />
          <h3 className="text-center group-hover:text-primary text-secondary text-lg font-poppins pt-1">
            {category.title}
          </h3>
        </Link>
      </Col>
      )))
    }
  
  </Row>
  )
}
export default CategoryService