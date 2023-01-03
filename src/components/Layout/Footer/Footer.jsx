import React from 'react';
import { FaFacebook, FaTwitter, FaGithub, FaDiscord } from 'react-icons/fa';
import './Footer.css';

function Footer() {
	return (
		<footer>
			<div className="logo">
				<h2>Shortly</h2>
			</div>
			<div className="menu">
				<div>
					<p>Features</p>
					<ul>
						<li>
							<a href="#">Link Shortening</a>
						</li>
						<li>
							<a href="#">Branded Links</a>
						</li>
						<li>
							<a href="#">Analytics</a>
						</li>
					</ul>
				</div>
				<div>
					<p>Resources</p>
					<ul>
						<li>
							<a href="#">Blog</a>
						</li>
						<li>
							<a href="#">Developers</a>
						</li>
						<li>
							<a href="#">Support</a>
						</li>
					</ul>
				</div>
				<div>
					<p>Company</p>
					<ul>
						<li>
							<a href="#">About</a>
						</li>
						<li>
							<a href="#">Our Team</a>
						</li>
						<li>
							<a href="#">Careers</a>
						</li>
						<li>
							<a href="#">Contact</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="socials">
				<ul>
					<li>
						<a href="#">
							<FaFacebook size={24} />
						</a>
					</li>
					<li>
						<a href="#">
							<FaTwitter size={24} />
						</a>
					</li>
					<li>
						<a href="#">
							<FaGithub size={24} />
						</a>
					</li>
					<li>
						<a href="#">
							<FaDiscord size={24} />
						</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}

export default Footer;
