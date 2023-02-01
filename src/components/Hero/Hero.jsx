import React from 'react';
import Working from '../../assets/illustration-working.svg';

function Hero() {
	return (
		<section className="w-screen min-w-fit min-h-fit flex flex-col sm:flex-row-reverse items-center px-[10%] py-10">
			<img
				src={Working}
				alt="Illustration of a working person"
				className="translate-x-10 w-full h-auto flex-1"
			/>
			<div className="flex flex-1 flex-col justify-evenly text-center sm:items-start sm:text-left sm:h-fit mb-20">
				<h1 className="text-4xl sm:text-5xl font-bold mt-10">
					More than just shorter links
				</h1>
				<p className="text-lg my-5">
					Build your brand's recognition and get detailed insights on how your
					links are performing.
				</p>
				<button className="bg-mainCyan hover:opacity-50 rounded-full min-w-fit w-1/2 h-12 text-white font-bold text-lg mx-auto sm:mx-0">
					Get Started
				</button>
			</div>
		</section>
	);
}

export default Hero;
