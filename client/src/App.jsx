import { useEffect, useState } from 'react';
import './App.css';
import { Movie } from './MovieFeaturedList';

function App() {
	const [movies, setMovies] = useState([]);

	// const movies = await getServer();
	useEffect(() => {
		fetch('/api')
			.then(response => response.json())
			.then(data => setMovies(data.results || []))
			.catch(error => console.error('Error fetching movies:', error));

		console.log('hello');
	}, []);

	return (
		<>
			<div className="theme--light">
				<div className="header-wrapper">
					<header className="header">
						<div className="header__logo">
							<img
								className="header__logo-img"
								src="/movie-vault-logo.svg"
								alt="Movie Vault logo"
								id="logo"
							/>
						</div>
						<div className="header__search-bar">
							<form
								action="#"
								role="search"
								className="search-form"
							>
								<input
									type="search"
									id="searchInput"
									name="search"
									className="search-form__input"
									placeholder="Search for movies or actors"
									aria-label="Search for movies or actors"
								/>
								<button
									type="submit"
									className="search-form__button"
								>
									<i className="fas fa-search search-icon"></i>
								</button>
							</form>
						</div>
						<div className="header__nav-icons">
							<i className="fas fa-heart heart-icon"></i>
							<div className="theme-toggle">
								<input
									type="checkbox"
									id="modeToggle"
									className="theme-toggle__checkbox"
									aria-label="Toggle light and dark mode"
								/>
								<label
									htmlFor="modeToggle"
									className="theme-toggle__label"
								>
									<span className="theme-toggle__slider">
										<img
											className="theme-toggle__icon theme-toggle__icon--sun"
											src="/sun.svg"
											alt="Sun icon"
										/>
										<img
											className="theme-toggle__icon theme-toggle__icon--moon"
											src="/moon.svg"
											alt="Moon icon"
										/>
									</span>
								</label>
							</div>
						</div>
						<button className="hamburger-menu">
							<i className="fas fa-bars"></i>
						</button>
					</header>
				</div>
				<main className="main-content" role="main">
					<section
						className="movies"
						aria-labelledby="featured-movies-title"
					>
						<h2 className="movies__title">Featured movies</h2>
						<div className="movies__grid">
							{movies.map(movie => (
								<Movie
									key={movie.id}
									title={movie.title}
									year={movie.release_date.split('-')[0]}
									image={movie.poster_path}
									rating={movie.vote_average.toFixed(1)}
								/>
							))}
						</div>
					</section>
				</main>
			</div>
		</>
	);
}

export default App;
