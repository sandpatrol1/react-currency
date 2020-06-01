import React, {Component} from 'react';
import {Route, Switch, NavLink, withRouter} from 'react-router-dom';

import './App.css';
import axios from '../axios-currency';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import Aux from '../hoc/Aux';
import AmountInput from '../Components/AmountInput/AmountInput';
import CurrencySelect from '../Components/CurrencySelect/CurrencySelect';
import Converted from '../Components/Converted/Converted';
import NoMatch from '../Containers/NoMatch/NoMatch';
import About from '../Containers/About/About';
import Historical from '../Containers/Historical/Historical';

class App extends Component {
	state = {
		currencies: [],
		currencyOne: 'DKK',
		currencyTwo: 'EUR',
		exchangeRate: null,
		inputOne: 100,
		converted: null
	};

	getAllCurrenciesHandler = () => {
		axios
			.get('/currencies')
			.then((response) => {
				this.setState({currencies: Object.keys(response.data)});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	getExchangeRateHandler = () => {
		axios
			.get(`/latest?amount=100&from=${this.state.currencyOne}&to=${this.state.currencyTwo}`)
			.then((response) => {
				this.setState({exchangeRate: response.data.rates[Object.keys(response.data.rates)]});
			})
			.then(() => {
				this.convertHandler();
			})
			.catch((error) => {
				console.log(error);
			});
	};

	currencyOneChangeHandler = (event) => {
		this.setState({currencyOne: event.target.value});
	};

	currencyTwoChangeHandler = (event) => {
		this.setState({currencyTwo: event.target.value});
	};

	inputValueHandler = (event) => {
		const value = parseFloat(event.target.value);
		this.setState({inputOne: value});
		this.setState((state, props) => ({
			converted: (value * (state.exchangeRate / 100)).toFixed(2)
		}));
	};

	convertHandler = () => {
		this.setState((state, props) => ({
			converted: (state.inputOne * (state.exchangeRate / 100)).toFixed(2)
		}));
	};

	historicalClickHandler = () => {
		this.props.history.push('/historical/' + this.state.currencyOne + '/' + this.state.currencyTwo);
	};

	componentDidMount() {
		this.getAllCurrenciesHandler();
		this.getExchangeRateHandler();
	}

	componentDidUpdate(prevProps, prevState) {
		if (this.state.currencyOne && this.state.currencyTwo && this.state.currencyOne !== this.state.currencyTwo) {
			if (prevState.currencyOne !== this.state.currencyOne || prevState.currencyTwo !== this.state.currencyTwo) {
				console.log('New Exhange', this.state);
				this.getExchangeRateHandler();
			}
		}
	}

	render() {
		console.log(this.props);
		return (
			<div className="App">
				<Header />
				<Switch>
					<Route
						path="/react-currency"
						exact
						render={() => (
							<Aux>
								<div className="columns" style={{paddingTop: '40px'}}>
									<div className="column container">
										<p>Input the amount</p>
										<AmountInput
											inputValue={(event) => this.inputValueHandler(event)}
											value={this.state.inputOne}
										/>
									</div>
								</div>

								<div className="columns">
									<div className="column container">
										<p>Base currency</p>
										<CurrencySelect
											currencies={this.state.currencies}
											change={this.currencyOneChangeHandler}
											value={this.state.currencyOne}
										/>
									</div>
								</div>

								<div className="columns">
									<div className="column container">
										<p>Convert to</p>
										<CurrencySelect
											currencies={this.state.currencies}
											change={this.currencyTwoChangeHandler}
											value={this.state.currencyTwo}
										/>
									</div>
								</div>

								<div className="columns" style={{textAlign: 'center'}}>
									<div className="column container">
										<Converted converted={this.state.converted}>Converted:</Converted>
									</div>
								</div>

								<div className="columns" style={{textAlign: 'center'}}>
									<div className="column container">
										<button className="button" onClick={this.historicalClickHandler}>
											See Historical Data
										</button>
									</div>
								</div>
							</Aux>
						)}
					/>
					<Route path="/about" component={About} />
					<Route path="/historical/:cur1/:cur2" component={Historical} />
					<Route component={NoMatch} />
				</Switch>

				<Footer />
			</div>
		);
	}
}

export default withRouter(App);
