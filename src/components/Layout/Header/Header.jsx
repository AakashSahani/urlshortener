import React, { useState } from 'react';
import logo from '../../../assets/logo.svg';
import hamburger from '../../../assets/icon-hamburger.svg';
import close from '../../../assets/icon-close.svg';

function Header() {
	const [menu, setMenu] = useState(false);
	const handleClick = () => {
		setMenu((menu) => !menu);
	};
	return (
		<header className="flex justify-between sm:justify-start h-fit items-center p-10 sm:px-[10%]">
			<div className="">
				<img src={logo} alt="Shortly" className="" />
			</div>
			<nav className="sm:flex-1 sm:px-10">
				<div className="hidden sm:flex justify-between items-center font-bold text-gray-400">
					<ul className="flex items-center justify-evenly space-x-5">
						<li>
							<a href="#">Features</a>
						</li>
						<li>
							<a href="#">Pricing</a>
						</li>
						<li>
							<a href="#">Resources</a>
						</li>
					</ul>
					<ul className="flex items-center justify-between space-x-5">
						<li>
							<a href="#">Login</a>
						</li>
						<li className="">
							<button className="bg-mainCyan rounded-full w-full h-10 px-5 text-white text-lg">
								Sign Up
							</button>
						</li>
					</ul>
				</div>
				<div className="sm:hidden">
					<button onClick={handleClick}>
						<img src={hamburger} alt="Mobile menu" className="m-auto w-8" />
					</button>
					<ul
						className={`${
							menu ? 'block' : 'hidden'
						}  bg-darkViolet text-white font-bold z-10 absolute top-24 left-0 h-[45vh] w-10/12 mx-auto right-0 rounded-lg p-5 flex flex-col justify-evenly items-center text-center`}
					>
						<li>
							<a href="#">Features</a>
						</li>
						<li>
							<a href="#">Pricing</a>
						</li>
						<li>
							<a href="#">Resources</a>
						</li>
						<li className="w-full border-t py-5">
							<a href="#">Login</a>
						</li>
						<li className="w-full">
							<button className="bg-mainCyan rounded-full w-full h-12 text-white font-bold text-lg mx-auto">
								Sign Up
							</button>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default Header;
