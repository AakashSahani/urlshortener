import React from 'react';
import './Features.css';
import BrandRecognition from '../../assets/icon-brand-recognition.svg';
import DetailedRecords from '../../assets/icon-detailed-records.svg';
import FullyCustomizable from '../../assets/icon-fully-customizable.svg';

function Features() {
	return (
		<section className="features">
			<div className="text">
				<h2>Advanced Statistics</h2>
				<p>
					Track how your links are performing across the web with our advanced
					statistics dashboard.
				</p>
			</div>
			<ul>
				<li>
					<div className="feature">
						<div className="img">
							<img src={BrandRecognition} alt="Brand recognition" />
						</div>
						<h2>Brand Recognition</h2>
						<p>
							Boost your brand recognition with each click. Generic links don't
							mean a thing. Branded links help instil confidence in your
							content.
						</p>
					</div>
				</li>
				<li>
					<div className="feature">
						<div className="img">
							<img src={DetailedRecords} alt="Detailed Records" />
						</div>
						<h2>Detailed Records</h2>
						<p>
							Boost your brand recognition with each click. Generic links don't
							mean a thing. Branded links help instil confidence in your
							content.
						</p>
					</div>
				</li>
				<li>
					<div className="feature">
						<div className="img">
							<img src={FullyCustomizable} alt="Fully Customizable" />
						</div>
						<h2>Fully Customizable</h2>
						<p>
							Boost your brand recognition with each click. Generic links don't
							mean a thing. Branded links help instil confidence in your
							content.
						</p>
					</div>
				</li>
			</ul>
		</section>
	);
}

export default Features;
