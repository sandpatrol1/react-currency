import React from 'react';

const header = () => {
	return (
		<section className="hero is-success is-bold">
			<div className="hero-body">
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
	);
};

export default header;
