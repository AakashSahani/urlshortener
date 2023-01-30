import React from 'react';
import { FaFacebook, FaTwitter, FaGithub, FaDiscord } from 'react-icons/fa';
import logo from '../../../assets/logo.svg';

function Footer() {
	return (
		<footer className="bg-veryDarkViolet text-white flex flex-col sm:flex-row items-center justify-between sm:justify-start sm:items-start text-center py-10 sm:pl-[10%] space-y-14">
			<img src={logo} alt="Shortly Logo" className="invert sm:mt-14" />
			<div className="space-y-5 sm:space-y-0 sm:flex sm:flex-row sm:flex-1 sm:justify-evenly sm:text-left sm:pl-[15%]">
				<div className="flex flex-col space-y-2">
					<h4 className="text-md  font-bold">Features</h4>
					<a href="#" className="text-mainGray hover:text-mainCyan">
						Link Shortening
					</a>
					<a href="#" className="text-mainGray hover:text-mainCyan">
						Branded Links
					</a>
					<a href="#" className="text-mainGray hover:text-mainCyan">
						Analytics
					</a>
				</div>
				<div className="flex flex-col space-y-2">
					<h4 className="text-md  font-bold">Resources</h4>
					<a href="#" className="text-mainGray hover:text-mainCyan">
						Blog
					</a>
					<a href="#" className="text-mainGray hover:text-mainCyan">
						Developers
					</a>
					<a href="#" className="text-mainGray hover:text-mainCyan">
						Support
					</a>
				</div>
				<div className="flex flex-col space-y-2">
					<h4 className="text-md  font-bold">Company</h4>
					<a href="#" className="text-mainGray hover:text-mainCyan">
						About
					</a>
					<a href="#" className="text-mainGray hover:text-mainCyan">
						Our Team
					</a>
					<a href="#" className="text-mainGray hover:text-mainCyan">
						Careers
					</a>
					<a href="#" className="text-mainGray hover:text-mainCyan">
						Contact
					</a>
				</div>
			</div>
			<ul className="flex flex-row w-full sm:w-80 justify-evenly px-14">
				<li>
					<a href="#">
						<FaFacebook size={24} className="hover:text-mainCyan" />
					</a>
				</li>
				<li>
					<a href="#">
						<FaTwitter size={24} className="hover:text-mainCyan" />
					</a>
				</li>
				<li>
					<a href="#">
						<FaGithub size={24} className="hover:text-mainCyan" />
					</a>
				</li>
				<li>
					<a href="#">
						<FaDiscord size={24} className="hover:text-mainCyan" />
					</a>
				</li>
			</ul>
		</footer>
	);
}

export default Footer;
