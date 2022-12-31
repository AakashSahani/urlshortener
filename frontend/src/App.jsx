import './App.css';
import Header from './components/Layout/Header/Header';
import Hero from './components/Hero/Hero';
import UrlShortener from './components/UrlShortener/UrlShortener';
import Features from './components/Features/Features';
import Footer from './components/Layout/Footer/Footer';

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero />
				<UrlShortener />
				<Features />
			</main>
			<Footer />
		</>
	);
}

export default App;
