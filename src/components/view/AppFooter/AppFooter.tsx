'use client'
import { FacebookFilled,InstagramFilled,LinkedinFilled } from "@ant-design/icons";
import Link from "next/link";

const AppFooter = () => {
  return (
    <footer className="px-4 divide-y font-roboto bg-gray-100 text-secondary">
	<div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
		<div className="lg:w-1/3">
			<Link  href="/" className="flex justify-center space-x-3 text-secondary no-underline lg:justify-start">
				<h2 className="uppercase text-primary font-poppins text-2xl">ProTechFixer</h2>
			</Link>
		</div>
		<div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-3">
			<div className="space-y-3">
				<h3 className="tracking-tighter uppercase text-black">Product</h3>
				<ul className="space-y-1 underline-none text-secondary list-none">
					<li className="list-none">
						<Link className="text-secondary no-underline" href="/all-services/#Oven Services">Oven Services</Link>
					</li>
					<li>
						<Link className="text-secondary no-underline" href="/all-services">Water Purifier Services</Link>
					</li>
					<li>
						<Link className="text-secondary no-underline" href="#">Pricing</Link>
					</li>
					<li>
						<Link className="text-secondary no-underline" href="#">FAQ</Link>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<h3 className="tracking-tighter uppercase text-black">Company</h3>
				<ul className="space-y-1 list-none">
					<li>
						<Link className="text-secondary no-underline" href="#">Privacy</Link>
					</li>
					<li>
						<Link className="text-secondary no-underline" href="#">Terms of Service</Link>
					</li>
				</ul>
			</div>
			<div className="space-y-3">
				<div className="uppercase text-black">Social media</div>
				<div className="flex justify-start space-x-3">
					<Link className="text-secondary no-underline" href="#" title="Facebook" >
						<FacebookFilled />
					</Link>
					<Link className="text-secondary no-underline" href="#" title="Linkedine" >
						<LinkedinFilled />
					</Link>
					<Link className="text-secondary no-underline" href="#" title="Instagram" >
						<InstagramFilled />
					</Link>
				</div>
			</div>
		</div>
	</div>
	<div className="py-6 text-sm text-center text-gray-400">© 2023 ProTechFixer. All rights reserved.</div>
</footer>
  );
};

export default AppFooter;
