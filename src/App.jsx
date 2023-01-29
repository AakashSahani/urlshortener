import Header from './components/Layout/Header/Header';
import Hero from './components/Hero/Hero';
import UrlShortener from './components/UrlShortener/UrlShortener';
import Features from './components/Features/Features';
import Footer from './components/Layout/Footer/Footer';

function App() {
	return (
		<>
			<Header />
			<>
				<Hero />
				<UrlShortener />
				<Features />
			</>
			{/* <Footer /> */}
		</>
	);
}

export default App;
