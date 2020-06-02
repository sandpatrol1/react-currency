import React, {Component} from 'react';
import axios from '../../axios-currency';
import HistoricalData from '../../Components/HistoricalData/HistoricalData';

class Historical extends Component {
	state = {
		historical: []
	};
	componentDidMount() {
		axios
			.get(`/2020-01-01..?amount=100&from=${this.props.match.params.cur1}&to=${this.props.match.params.cur2}`)
			.then((response) => {
				console.log(response.data);
				const historical = [];
				for (let his in response.data.rates) {
					historical.push({
						date: his,
						...response.data.rates[his]
					});
				}
				console.log(historical);
				this.setState({historical: historical});
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
					<h2 className="title is-5">Historical Data</h2>
					<p className="title is-6" style={{marginBottom: '20px'}}>
						Historical rates for {this.props.match.params.cur1} to {this.props.match.params.cur2}
					</p>
					{this.state.historical ? <p>{this.state.historical.amount}</p> : null}
					{this.state.historical.map((his) => {
						return (
							<HistoricalData key={his.date} date={his.date} rate={his[this.props.match.params.cur2]} />
						);
					})}
				</div>
			</div>
		);
	}
}

export default Historical;
