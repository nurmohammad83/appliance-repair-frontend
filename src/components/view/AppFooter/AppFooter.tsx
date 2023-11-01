'use client'
import { FacebookFilled,InstagramFilled,LinkedinFilled } from "@ant-design/icons";
import Link from "next/link";
import logo from '@/assets/pro_logo.png';
import Image from "next/image";

const AppFooter = () => {
	const data = new Date()
	const establish = data.getFullYear()
  return (
    <footer className="px-4 divide-y font-roboto bg-gray-100 text-secondary">
	<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
	<div className="flex justify-center items-center">
      <Link className="flex justify-center items-center" href="/">
        <Image width={150} height={60} src={logo} alt="logo"/>
      </Link>
    </div>
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3">
			<div className="space-y-3">
				<h3 className="tracking-tighter uppercase text-black">Services</h3>
				<ul className="space-y-1 underline-none text-secondary list-none">
					<li className="list-none">
						<Link className="text-secondary no-underline" href="/all-services#Oven Services">Oven Services</Link>
					</li>
					<li>
						<Link className="text-secondary no-underline" href="/all-services#Water Purifier Services">Water Purifier Services</Link>
					</li>
					<li>
						<Link className="text-secondary no-underline"  href="/all-services#Generator Services">Generator Services</Link>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="tracking-tighter uppercase text-black">Company</h3>
				<ul className="space-y-1 list-none">
					<li>
						<Link className="text-secondary no-underline" href="/">Privacy</Link>
					</li>
					<li>
						<Link className="text-secondary no-underline" href="/">Terms of Service</Link>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<div className="uppercase text-black">Social media</div>
				<div className="flex justify-start space-x-3">
					<Link className="text-secondary text-3xl no-underline" href="https://web.facebook.com/nurmohammad54800" title="Facebook" >
						<FacebookFilled size={50}/>
					</Link>
					<Link className="text-secondary text-3xl no-underline" href="https://www.linkedin.com/in/nur-mohammad-0a1137259/" title="Linkedine" >
						<LinkedinFilled />
					</Link>
					<Link className="text-secondary text-3xl no-underline" href="https://www.instagram.com/noor__5480/" title="Instagram" >
						<InstagramFilled />
					</Link>
				</div>
			</div>
		</div>
	</div>
	<div className="py-6 text-sm text-center text-gray-400">© {establish} ProTechFixer. All rights reserved.</div>
</footer>
  );
};

export default AppFooter;
