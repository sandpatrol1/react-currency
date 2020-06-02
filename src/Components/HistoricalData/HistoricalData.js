import React from 'react';

const historicalData = (props) => {
	return (
		<div
			style={{
				margin: '10px auto',
				width: '70%',
				boxSizing: 'border-box',
				border: '1px solid',
				textAlign: 'center'
			}}
		>
			<p>
				{props.date} {Number.parseFloat(props.rate).toFixed(2)}
			</p>
		</div>
	);
};

export default historicalData;
