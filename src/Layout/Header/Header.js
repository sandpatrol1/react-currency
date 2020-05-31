import React from 'react';
import {NavLink} from 'react-router-dom';
import Aux from '../../hoc/Aux';

const header = () => {
	return (
		<Aux>
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
			<section className="hero is-success is-bold">
				<div className="hero-body" style={{padding: '1.5em 1.5em'}}>
					<div className="container">
						<h1 className="title">
							<span style={{paddingRight: '15px'}}>
								<i className="fas fa-coins" />
							</span>
							Currify
						</h1>
						<h2 className="subtitle">Currency Converter</h2>
					</div>
				</div>
			</section>
		</Aux>
	);
};

export default React.memo(header);
