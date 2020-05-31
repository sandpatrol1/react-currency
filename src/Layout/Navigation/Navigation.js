import React from 'react';
import {NavLink} from 'react-router-dom';

const navigation = () => {
	return (
		<nav className="navbar" role="navigation" aria-label="main navigation">
			<div id="navbarBasicExample" className="navbar">
				<div className="navbar-start">
					<div className="navbar-item">
						<div className="buttons" style={{float: 'right'}}>
							<NavLink
								to="/react-currency"
								exact
								className="button is-primary is-light"
								activeStyle={{
									fontWeight: 'bold'
								}}
							>
								Home
							</NavLink>
							<NavLink
								to="/about"
								exact
								className="button is-primary is-light"
								activeStyle={{
									fontWeight: 'bold'
								}}
							>
								About
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default navigation;
