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
		<header className="flex justify-between h-fit items-center px-5 py-10">
			<div>
				<img src={logo} alt="Shortly" className="" />
			</div>
			<nav>
				<ul className="hidden">
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
				<div>
					<button onClick={handleClick}>
						<img src={hamburger} alt="Mobile menu" className="m-auto w-8" />
					</button>
					<ul
						className={`${
							menu ? 'block' : 'hidden'
						} bg-darkViolet text-white z-10 absolute top-24 left-0 h-[50vh] w-11/12 mx-auto right-0 border-2 flex justify-center items-center`}
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
					</ul>
				</div>
			</nav>
		</header>
	);
}

export default Header;
