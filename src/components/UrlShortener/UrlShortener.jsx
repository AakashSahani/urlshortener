import React, { useState } from 'react';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function UrlShortener() {
	const [url, setUrl] = useState('');
	const [result, setResult] = useState([]);
	const [btnDisabled, setBtnDisabled] = useState(false);

	const handleChange = (e) => {
		setUrl(e.currentTarget.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		shortenUrl(url);
		setUrl((u) => '');
	};

	const shortenUrl = async (url) => {
		const data = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
			.then((res) => res.json())
			.then((data) => data);

		setResult([
			...result,
			{
				id: uuidv4(),
				url: url,
				shortlink: data.result.full_short_link,
				copied: false,
			},
		]);
	};

	// const handleCopy = (text) => {
	// 	copyContent(text);
	// };

	// const copyContent = async (text) => {
	// 	try {
	// 		await navigator.clipboard.writeText(text);
	// 	} catch (error) {
	// 		console.log('Failed to Copy: ', error);
	// 	}
	// };

	return (
		<main className="flex flex-col items-center w-screen min-h-fit pb-20 px-[10%]">
			<form
				onSubmit={handleSubmit}
				className="flex flex-col sm:flex-row justify-evenly items-center w-full h-40 p-5 sm:p-10 bg-bgShortenMobile sm:bg-bgShortenDesktop bg-no-repeat bg-right-top bg-auto bg-darkViolet rounded-2xl"
			>
				<div className="w-full h-14 mt-4">
					<input
						type="url"
						name="longlink"
						id="longlink"
						onChange={handleChange}
						placeholder="Shorten a link here..."
						value={url}
						className={`w-full h-10 rounded px-5 ${
							btnDisabled & 'text-red-500 border-2 border-red-500'
						}`}
					/>
					{/* <i className={btnDisabled ? 'hidden' : 'text-red-500'}>
						Please add a link
					</i> */}
				</div>
				<button
					type="submit"
					className="w-full sm:w-36 hover:opacity-50 sm:ml-5 h-10 bg-mainCyan text-white font-bold rounded"
				>
					Shorten It!
				</button>
			</form>
			<ul className="w-full flex flex-col items-center my-5">
				{result.length > 0 ? (
					result.map((res) => (
						<li
							key={res.id}
							className="flex flex-col md:flex-row overflow-x-hidden w-full h-40 md:h-16 my-3 rounded-2xl md:rounded md:items-center justify-center md:justify-between border shadow"
						>
							<a
								href={res.url}
								target="_blank"
								rel="noopener noreferrer"
								className="h-12 my-auto text-lg flex flex-col justify-center md:items-center md:border-b-0 border-b px-4"
							>
								{res.url}
							</a>
							<div className="w-full md:w-fit md:flex-none flex-1  flex flex-col md:flex-row justify-center md:items-center px-4">
								<a
									href={res.shortlink}
									target="_blank"
									rel="noopener noreferrer"
									className="h-10 text-mainCyan text-lg md:flex md:items-center"
								>
									{res.shortlink}
								</a>
								<button
									onClick={() => handleCopy(res.shortlink)}
									// isDisabled={btnDisabled}
									className="w-full md:w-28 md:mx-4 h-10 bg-mainCyan text-white font-bold rounded"
								>
									Copy!
								</button>
							</div>
						</li>
					))
				) : (
					<></>
				)}
			</ul>
		</main>
	);
}

export default UrlShortener;
