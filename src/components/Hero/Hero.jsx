import React from 'react';
import Working from '../../assets/illustration-working.svg';

function Hero() {
	return (
		<section className="w-screen min-w-fit min-h-fit py-[10%] sm:py-10 sm:pl-[10%] flex flex-col sm:flex-row-reverse items-center">
			<img
				src={Working}
				alt="Illustration of a working person"
				className="translate-x-10"
			/>
			<div className="flex flex-col justify-evenly text-center sm:items-start sm:text-left sm:h-fit p-[5%] sm:p-0 mb-20">
				<h1 className="text-4xl sm:text-5xl font-bold mt-10">
					More than just shorter links
				</h1>
				<p className="text-lg my-5">
					Build your brand's recognition and get detailed insights on how your
					links are performing.
				</p>
				<button className="bg-mainCyan rounded-full min-w-fit w-1/2 h-12 text-white font-bold text-lg mx-auto sm:mx-0">
					Get Started
				</button>
			</div>
		</section>
	);
}

export default Hero;
