import React from 'react';
import BrandRecognition from '../../assets/icon-brand-recognition.svg';
import DetailedRecords from '../../assets/icon-detailed-records.svg';
import FullyCustomizable from '../../assets/icon-fully-customizable.svg';

function Features() {
	return (
		<section className="min-h-fit p-5 flex flex-col text-center bg-gray-100 space-y-5">
			<div className="text px-3 space-y-4 my-10">
				<h2 className="text-3xl font-bold">Advanced Statistics</h2>
				<p className="text-lg font-bold">
					Track how your links are performing across the web with our advanced
					statistics dashboard.
				</p>
			</div>
			<ul className="w-full h-fit py-10 space-y-20">
				<li className="bg-white rounded-md shadow-md flex flex-col items-center px-5 pb-5 min-h-60">
					<div className="-translate-y-1/2 w-fit rounded-full bg-darkViolet p-5">
						<img src={BrandRecognition} alt="Brand recognition" />
					</div>
					<h2 className="font-bold text-2xl">Brand Recognition</h2>
					<p className="text-lg text-gray-400 my-3">
						Boost your brand recognition with each click. Generic links don't
						mean a thing. Branded links help instil confidence in your content.
					</p>
				</li>
				<li className="bg-white rounded-md shadow-md flex flex-col items-center px-5 pb-5 min-h-60">
					<div className="-translate-y-1/2 w-fit rounded-full bg-darkViolet p-5">
						<img src={DetailedRecords} alt="Detailed Records" />
					</div>
					<h2 className="font-bold text-2xl">Detailed Records</h2>
					<p className="text-lg text-gray-400 my-3">
						Gain insights into who is clicking your links. Knowing when and
						where people engage with your content helps inform better decisions.
					</p>
				</li>
				<li className="bg-white rounded-md shadow-md flex flex-col items-center px-5 pb-5 min-h-60">
					<div className="-translate-y-1/2 w-fit rounded-full bg-darkViolet p-5">
						<img src={FullyCustomizable} alt="Fully Customizable" />
					</div>
					<h2 className="font-bold text-2xl">Fully Customizable</h2>
					<p className="text-lg text-gray-400 my-3">
						Improve brand awareness and content discoverability through
						customizable links, supercharging audience engagement.
					</p>
				</li>
			</ul>
		</section>
	);
}

export default Features;
