import './App.css';
import Header from './components/Layout/Header/Header';
import Hero from './components/Hero/Hero';
import UrlShortener from './components/UrlShortener/UrlShortener';
import Footer from './components/Layout/Footer/Footer';

function App() {
	return (
		<>
			<Header />
			<main>
				<Hero></Hero>
				<UrlShortener />
			</main>
			<Footer />
		</>
	);
}

export default App;
