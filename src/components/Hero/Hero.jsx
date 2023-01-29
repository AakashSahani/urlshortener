import React from 'react';
import Working from '../../assets/illustration-working.svg';

function Hero() {
	return (
		<section className="w-screen min-w-fit min-h-fit py-[10%] flex flex-col items-center">
			{/* <div className="w-full h-fit"> */}
			<img
				src={Working}
				alt="Illustration of a working person"
				className="translate-x-10"
			/>
			{/* </div> */}
			<div className="flex flex-col justify-evenly text-center p-[5%] mb-20">
				<h1 className="text-4xl font-bold mt-10">
					More than just shorter links
				</h1>
				<p className="text-lg my-5">
					Build your brand's recognition and get detailed insights on how your
					links are performing.
				</p>
				<button className="bg-mainCyan rounded-full min-w-fit w-1/2 h-12 text-white font-bold text-lg mx-auto">
					Get Started
				</button>
			</div>
		</section>
	);
}

export default Hero;
