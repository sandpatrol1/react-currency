import React, {Component} from 'react';
import axios from '../../axios-currency';

class Historical extends Component {
	state = {
		historical: {}
	};
	componentDidMount() {
		axios
			.get(`/2020-01-01..?from=${this.props.match.params.cur1}&to=${this.props.match.params.cur2}`)
			.then((response) => {
				console.log(response.data);
				this.setState({historical: response.data});
			})
			.catch((error) => {
				console.log(error);
			});
	}

	render() {
		console.log(this.props);
		return (
			<div className="columns" style={{paddingTop: '40px'}}>
				<div className="column container">
					<h2>Historical Currency Data</h2>
					<p>{this.props.match.params.cur1}</p>
					<p>{this.props.match.params.cur2}</p>
					{this.state.historical ? <p>{this.state.historical.amount}</p> : null}
				</div>
			</div>
		);
	}
}

export default Historical;
