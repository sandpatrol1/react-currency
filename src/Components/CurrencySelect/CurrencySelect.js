import React from 'react';

const currencySelect = (props) => {
	return (
		<div className="control has-icons-left">
			<div className="select">
				<select onChange={props.change} value={props.value} style={{width: '350px'}}>
					{props.currencies.map((currency) => (
						<option key={currency} value={currency}>
							{currency}
						</option>
					))}
				</select>
			</div>
			<span className="icon is-left">
				<i className="fas fa-money-bill-wave" />
			</span>
		</div>
	);
};

export default currencySelect;
