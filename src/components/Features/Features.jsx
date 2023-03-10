import React from 'react';
import BrandRecognition from '../../assets/icon-brand-recognition.svg';
import DetailedRecords from '../../assets/icon-detailed-records.svg';
import FullyCustomizable from '../../assets/icon-fully-customizable.svg';

function Features() {
	return (
		<section className="min-h-fit pt-5 flex flex-col text-center bg-gray-100 space-y-5">
			<div className="text px-8 space-y-4 my-10 lg:w-1/2 sm:mx-auto sm:px-[10%]">
				<h2 className="text-3xl font-bold">Advanced Statistics</h2>
				<p className="text-lg text-gray-500">
					Track how your links are performing across the web with our advanced
					statistics dashboard.
				</p>
			</div>
			<ul className="flex flex-col lg:flex-row lg:h-fit justify-evenly items-center p-[10%] lg:space-x-10 space-y-20 lg:space-y-0 border-black">
				<li className="w-11/12 sm:w-96 sm:max-w-96 h-80 bg-white border rounded-md shadow-md flex flex-col items-center px-5 pb-5 lg:-translate-y-10">
					<div className="-translate-y-1/2 w-fit rounded-full bg-darkViolet p-5">
						<img src={BrandRecognition} alt="Brand recognition" />
					</div>
					<h2 className="font-bold text-2xl">Brand Recognition</h2>
					<p className="text-lg text-gray-400 my-3 h-48 overflow-hidden text-clip">
						Boost your brand recognition with each click. Generic links don't
						mean a thing. Branded links help instil confidence in your content.
					</p>
				</li>
				<li className="w-11/12 sm:w-96 sm:max-w-96 h-80 bg-white border rounded-md shadow-md flex flex-col items-center px-5 pb-5">
					<div className="-translate-y-1/2 w-fit rounded-full bg-darkViolet p-5">
						<img src={DetailedRecords} alt="Brand recognition" />
					</div>
					<h2 className="font-bold text-2xl">Detailed Records</h2>
					<p className="text-lg text-gray-400 my-3 h-48 overflow-hidden text-clip">
						Gain insights into who is clicking your links. Knowing when and
						where people engage with your content helps inform better decisions.
					</p>
				</li>
				<li className="w-11/12 sm:w-96 sm:max-w-96 h-80 bg-white border rounded-md shadow-md flex flex-col items-center px-5 pb-5 lg:translate-y-10">
					<div className="-translate-y-1/2 w-fit rounded-full bg-darkViolet p-5">
						<img src={FullyCustomizable} alt="Brand recognition" />
					</div>
					<h2 className="font-bold text-2xl">Fully Customizable</h2>
					<p className="text-lg text-gray-400 my-3 h-48 overflow-hidden text-clip">
						Improve brand awareness and content discoverability through
						customizable links, supercharging audience engagement.
					</p>
				</li>
			</ul>
			<div className="bg-darkViolet bg-bgBoostMobile sm:bg-bgBoostDesktop bg-no-repeat bg-cover h-72 flex flex-col items-center justify-center space-y-5">
				<h3 className="text-3xl text-white font-bold">
					Boost your links today
				</h3>
				<button className="bg-mainCyan rounded-full min-w-fit w-1/2 sm:w-40 h-12 text-white font-bold text-lg mx-auto">
					Get Started
				</button>
			</div>
		</section>
	);
}

export default Features;
