import React, { useState } from 'react';

function UrlShortener() {
	const [url, setUrl] = useState('');
	const [result, setResult] = useState('');

	const handleChange = (e) => {
		setUrl(e.currentTarget.value);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(url);
		shortenUrl(url);
		setUrl((u) => '');
	};

	const shortenUrl = async (url) => {
		const data = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
			.then((res) => res.json())
			.then((data) => data);
		setResult(data.result.full_short_link);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="url"
					name="longlink"
					id="longlink"
					onChange={handleChange}
					value={url}
				/>
				<button type="submit">Submit Link!</button>
			</form>
			{result != '' && <a href={result}>{result}</a>}
		</>
	);
}

export default UrlShortener;
