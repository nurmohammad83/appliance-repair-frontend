"use client";

import { Layout, Menu } from "antd";

import Sidebar from "@/components/ui/Sidebar/Sidebar";
import Contents from "@/components/ui/Sidebar/Content";
import Sider from "antd/es/layout/Sider";
import { Content } from "antd/es/layout/layout";
import Link from "next/link";

const items = [
  {
    label: "One",
    key: 1,
    href: "/all-services/#1",
  },
  {
    label: "Two",
    key: 2,
    href: "/all-services/#2",
  },
  {
    label: "Yhtrr",
    key: 3,
    href: "/all-services/#3",
  },
];

const ServiceSidebar = () => {
  return (
    <div className="px-24 font-poppins">
      <div className="text-secondary font-bold text-3xl font-poppins  py-10">
        All Services
      </div>
      <Layout hasSider>
        <Sider
          width={280}
          style={{
            height: "100vh",
            position: "sticky",
            left: 0,
            top: 0,
            bottom: 0,
          }}
          className="bg-transparent bg-white"
        >
          <Menu
            className="bg-transparent h-full"
            defaultSelectedKeys={["1"]}
            mode="inline"
            >
              {items?.map((item) => (
            <Menu.Item className="rounded-none" key={item.href}>
              <Link className="hover:font-bold font-poppins hover:text-primary" href={item.href}>{item.label}</Link>
            </Menu.Item>
          ))}
            </Menu>
        </Sider>
        <Content className="min-h-screen bg-white">
          <div style={{ padding: "10px" }}>
            <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae suscipit quam adipisci omnis ex! Quasi sit corrupti in ipsa nesciunt nam, quae earum debitis impedit quo aliquid sunt odio praesentium quia voluptates laudantium voluptatum autem sequi consequuntur labore ratione. Sit quaerat asperiores reprehenderit modi, nisi, laboriosam animi expedita omnis fugit vero, officia incidunt deleniti odio excepturi aperiam architecto ullam. Laborum voluptatem quibusdam quisquam optio illo. Incidunt officia rem eum architecto id quidem! Deleniti, ex atque. Vitae adipisci qui similique facere iste officiis nam autem accusamus ipsa explicabo perspiciatis cum fugiat, exercitationem ullam veritatis blanditiis impedit cupiditate porro dolorum incidunt voluptatibus eius. Atque perferendis earum illum, excepturi tenetur quia sequi temporibus eaque ullam necessitatibus voluptatem dolor iure sapiente libero voluptates itaque, omnis debitis praesentium rerum mollitia, tempora recusandae ad accusantium! A distinctio minus iure id, veritatis qui officiis libero? Officiis beatae eveniet asperiores, placeat nesciunt magnam modi ad ex deleniti labore molestiae, atque dolor odit accusantium, facilis in nihil omnis est perferendis animi. Accusamus, dolor neque vitae eaque nisi rerum quidem maiores quis? Officia cum itaque dolore molestias? Molestiae exercitationem tenetur, culpa optio delectus error reprehenderit ea cum maxime veniam voluptatum, voluptate placeat id. Reprehenderit harum deleniti libero corrupti unde assumenda, esse ea modi praesentium labore rem cupiditate et dignissimos cum possimus quam quibusdam ullam perspiciatis totam accusantium quidem asperiores animi cumque. Distinctio dicta quaerat iste atque exercitationem magni quod nam laudantium quis officia est, velit reprehenderit iusto rem nemo, aut pariatur dolore suscipit laboriosam doloribus omnis architecto voluptas eaque? Ducimus cupiditate aliquam assumenda autem accusamus ipsa cumque possimus totam qui iure! Ullam reprehenderit eum architecto maiores, excepturi eligendi nostrum voluptas quam aliquid asperiores veritatis voluptatum rerum soluta pariatur enim maxime aliquam aspernatur tenetur at quaerat! Odio soluta nemo magnam labore molestias, laudantium incidunt deleniti hic libero repellat laborum facilis maiores quidem! Accusantium enim quaerat similique neque iste doloremque, obcaecati nisi amet deserunt accusamus ipsa minus tempore cum cumque temporibus ipsam repudiandae inventore sequi quos ab quasi dolore aliquam molestiae explicabo. Ipsa nostrum possimus autem, dolorem quia explicabo atque fugiat nulla, labore excepturi, eum nihil esse numquam porro rerum. Corrupti reprehenderit quod vel est quidem vitae quos accusantium fugiat optio? Itaque aliquid veritatis excepturi error unde. Dolore maxime accusantium voluptas consequatur expedita ex delectus tempora mollitia vero quidem inventore perferendis, voluptatum repudiandae vitae ipsum quisquam veritatis et ipsa voluptatibus veniam quae itaque id corrupti? Harum at quam non quas dignissimos? Sunt delectus totam at maiores ipsa qui cupiditate porro provident asperiores assumenda accusamus, similique placeat inventore itaque enim fugiat quidem eaque? Odio mollitia cum commodi ipsa placeat reiciendis! Eius beatae quis atque ipsa magni quod delectus, earum, nostrum quam sunt hic laboriosam culpa accusantium magnam dolor sapiente. Natus nemo consequatur culpa aut explicabo earum veniam vitae vel dolores illo impedit, ducimus odit eum nisi porro provident dolorem incidunt suscipit. Quidem quo odio unde veniam dolore ea ducimus ullam et. Perspiciatis nemo aut maxime quia vel voluptatem laboriosam, qui, officia deserunt ab itaque recusandae dolorem praesentium sunt sapiente sed reiciendis quasi necessitatibus in quibusdam nam? Nisi dicta non nesciunt, ex tempore commodi corrupti vel et, cumque delectus, sapiente amet aspernatur eaque placeat! Temporibus aperiam ut delectus esse dolor voluptate nesciunt quam beatae, eaque aspernatur dignissimos similique ex animi eligendi dolores laborum voluptates quisquam dolorem inventore vero. Repellat magnam quos illo dolorem? Non vitae odit laudantium alias. Nesciunt repellendus voluptatibus asperiores. Ipsa architecto aperiam libero eaque aspernatur eum enim a pariatur quos! Illo, eos deserunt. Ex aperiam rem eligendi necessitatibus consequatur incidunt at! Architecto, cum optio. Reprehenderit aspernatur quisquam similique dolor ut, iure iste amet eum commodi architecto quo vitae quasi consequatur, alias molestiae illo quam, aperiam minus pariatur nesciunt delectus illum. Ducimus velit at itaque minus eligendi ad ea totam dolorum ipsa. Dolore suscipit quia temporibus sed ab veritatis non, sapiente fugiat neque quos assumenda quae aliquam iste! Ducimus velit, eveniet fugit aliquid aperiam quia maiores dolorem sit, doloremque blanditiis aut ratione alias nemo nostrum quae vitae modi hic eligendi a. A odio nobis deleniti ullam sunt reprehenderit enim non. Ipsa reiciendis illo ab inventore recusandae error, qui minus a necessitatibus architecto consequatur, odio laborum eveniet sequi, molestias dolorum velit deleniti. Soluta possimus tempore modi sed. Cum, atque unde! Corrupti, similique exercitationem dolor possimus, incidunt fugit earum voluptatibus commodi beatae aspernatur velit, unde ea voluptate enim repudiandae consectetur temporibus obcaecati! Quo, eaque laborum porro numquam recusandae eligendi culpa quaerat? Architecto nisi incidunt pariatur dolorum obcaecati exercitationem ab provident inventore nobis velit vitae iure enim tempora neque sint quis officia, nam consequatur beatae eum. Fuga soluta sit quos sunt, animi a dicta odit totam aperiam hic quasi cupiditate, natus rem incidunt ad voluptatum eos esse eaque vero dolore eius quisquam excepturi autem voluptates. Laudantium inventore porro esse optio totam obcaecati minima aspernatur dolore! Saepe nobis vitae, fuga autem officiis eaque minus iure vero.</section>
            <section>One</section>
            <section>One</section>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default ServiceSidebar;
