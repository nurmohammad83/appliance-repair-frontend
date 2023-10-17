import { Col, Row } from "antd"
import { Content } from "antd/es/layout/layout"
import Image from "next/image"
import Link from "next/link"

const CategoryService = ({data}:any) => {
  return (
    <div><Content style={{ overflow: 'auto' }} className="bg-white px-4">
    {
      data.map((item:any)=>(
        <section id={item.title} className="mt-10" key={item.id}>
          <h2 className="text-xl sm:text-2xl font-bold font-roboto">{item.title}</h2>
          <hr className="h-1 bg-primary" />
           <Row
        className="my-10"
        justify={"center"}
        align={"middle"}
        gutter={[24, 24]}
      >
        {
          item?.services?.map(((service:any)=>(
            <Col className="h-[230px]" key={service?.id} xs={24} sm={24} md={12} lg={12} xl={8}>
           <Link className="group rounded-md" href={`/all-services/${service.id}`}>
             <div className="w-full h-[200px]">
             <Image
                src={service?.image}
                alt="oven"
                layout="responsive"
                height={200}
                width={300}
                className="w-full h-full"
              />
             </div>
              <h3 className="text-center group-hover:text-primary text-secondary text-sm font-poppins pt-1">
                {service.name}
              </h3>
            </Link>
          </Col>
          )))
        }
      
      </Row>
        </section>
      ))
    }
    </Content></div>
  )
}
export default CategoryService