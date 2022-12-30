import React from 'react';
import './Hero.css';
import Card from '../Layout/Card/Card';
import Working from '../../assets/illustration-working.svg';

function Hero() {
	return (
		<Card>
			<div className="hero-text">
				<h1>More than just shorter links</h1>
				<p>
					Build your brand's recognition and get detailed insights on how your
					links are performing.
				</p>
				<button>Get Started</button>
			</div>
			<div className="hero-img">
				<img src={Working} alt="Illustration of a working person" />
			</div>
		</Card>
	);
}

export default Hero;
