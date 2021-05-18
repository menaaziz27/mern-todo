import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<div>
			<nav className="navbar bg-light navbar-expand-lg navbar-light">
				<ul className="navbar-nav mr-auto">
					<li className="navbar-item">
						<Link to="/" className="nav-link">
							Todos
						</Link>
					</li>
					<li className="navbar-item">
						<Link to="/create" className="nav-link">
							Create Todo
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
};
