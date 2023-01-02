import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './UrlShortener.css';

function UrlShortener() {
	const [url, setUrl] = useState('');
	const [result, setResult] = useState([]);

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
			{ id: uuidv4(), url: url, shortlink: data.result.full_short_link },
		]);
	};

	const copyContent = async (text) => {
		try {
			await navigator.clipboard.writeText(text);
		} catch (error) {
			console.log('Failed to Copy: ', error);
		}
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					type="url"
					name="longlink"
					id="longlink"
					onChange={handleChange}
					placeholder="Shorten a link here..."
					value={url}
				/>
				<button type="submit">Shorten It!</button>
			</form>
			<ul className="result">
				{result.length > 0 ? (
					result.map((res) => (
						<li key={res.id}>
							<a href={res.url} target="_blank" rel="noopener noreferrer">
								{res.url}
							</a>
							<a href={res.shortlink} target="_blank" rel="noopener noreferrer">
								{res.shortlink}
							</a>
							<button onClick={copyContent(res.shortlink)}>Copy!</button>
						</li>
					))
				) : (
					<></>
				)}
			</ul>
		</>
	);
}

export default UrlShortener;
