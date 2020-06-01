import React from 'react';
import Aux from '../../hoc/Aux';
import Navgation from '../Navigation/Navigation';

const header = () => {
	return (
		<Aux>
			<Navgation />
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
