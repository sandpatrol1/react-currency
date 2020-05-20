import React from 'react';

const amountInput = (props) => {
	// prettier-ignore
	return (
		<div className="field">
			<div className="control">
				<input
					className="input"
					type="number"
					min="0.01"
					step="0.01"
                    placeholder="Amount"
                    onChange={props.inputValue}
                    value={props.value}
				/>
			</div>
		</div>
	);
};

export default amountInput;
