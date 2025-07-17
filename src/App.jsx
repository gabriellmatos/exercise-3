import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// CSS
import './App.css';

// Components
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { MainContent } from './components/MainContent/MainContent';
import { SideBar } from './components/SideBar/SideBar';
import { ExtraContent } from './components/ExtraContent/ExtraContent';
import { RelatedImages } from './components/RelatedImages/RelatedImages';
import { RelatedPosts } from './components/RelatedPosts/RelatedPosts';
import { Footer } from './components/Footer/Footer';

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Header />
		<div className='container'>
			<div className='side-container'>
				<Hero />
				<SideBar />
			</div>
			<div className='main-container'>
				<MainContent />
				<ExtraContent />
			</div>
		</div>
		<div className='image-container'>
			<RelatedImages />
			<RelatedPosts />
		</div>
		<Footer />
	</StrictMode>
);
