import React, {Component} from 'react';
import './App.css';
import axios from '../axios-currency';
import Header from '../Layout/Header/Header';
import Footer from '../Layout/Footer/Footer';
import AmountInput from '../Components/AmountInput/AmountInput';
import CurrencySelect from '../Components/CurrencySelect/CurrencySelect';
import Converted from '../Components/Converted/Converted';

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
		return (
			<div className="App">
				<Header />

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

				<Footer />
			</div>
		);
	}
}

export default App;
