import React from 'react';
import Aux from '../../hoc/Aux';

const converted = (props) => {
	return (
		<Aux>
			<p style={{fontWeight: 'bold'}}>{props.children}</p>
			<p style={{fontWeight: 'bold'}}>{props.converted}</p>
		</Aux>
	);
};

export default converted;
