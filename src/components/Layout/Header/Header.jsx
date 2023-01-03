import React from 'react';
import logo from '../../../assets/logo.svg';
import './Header.css';

function Header() {
	return (
		<header>
			<img src={logo} alt="Shortly" />
			<nav>
				<ul>
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
				<div className="login">
					<button>Login</button>
					<button>Sign Up</button>
				</div>
			</nav>
		</header>
	);
}

export default Header;
