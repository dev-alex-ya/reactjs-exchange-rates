import React from 'react';
import {changeDate, setIsLoaded, saveResult} from './redux/actions/actions';
import {connect} from 'react-redux';
import './App.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {BrowserRouter, NavLink, Route,} from 'react-router-dom';
import {format} from "date-fns";
import TableRates from './TableRates/TableRates';
import Charts from './Charts/Charts';

class App extends React.Component {

  componentDidMount() {
    // debugger
    const formatedDate = format(this.props.date, 'yyyyMMdd');
    const url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&date=${formatedDate}`;

    fetch(url)
      .then(res => res.json())
      .then(
        (res) => {
          const rates = new Map([...this.props.rates]);
          rates.set(formatedDate, res);

          this.props.setIsLoaded(true);//флаг завершения загрузки
          this.props.saveResult(rates);//созраняем результат
        },
        (error) => {
          this.props.setIsLoaded(true);//флаг завершения загрузки
          return {
            isLoaded: true,
            error
          }
        }
      )
  }

  componentDidUpdate(prevProps) {
    // debugger

    if (this.props.date === prevProps.date) {
      return;
    }

    const formatedDate = format(this.props.date, 'yyyyMMdd');
    const url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&date=${formatedDate}`;

    fetch(url)
      .then(res => res.json())
      .then(
        (res) => {
          const rates = new Map([...this.props.rates]);
          rates.set(formatedDate, res);

          this.props.setIsLoaded(true);//флаг завершения загрузки
          this.props.saveResult(rates);//созраняем результат
        },
        (error) => {
          this.props.setIsLoaded(true);//флаг завершения загрузки
          return {
            isLoaded: true,
            error
          }
        }
      )
  }


  render() {
    // debugger;
    // console.log('Rates: ', this.props.rates);
    return (
      <div className="App">
        <BrowserRouter>
          <header className="App-header">
            <div className="container">
              <h1>RateChecker</h1>
              <nav className="App-bar">
                <NavLink className="App-link" to="/">Rates</NavLink>
                <NavLink className="App-link" to="/charts">Chart</NavLink>
              </nav>
            </div>
          </header>
          <main className="App-main container">

            <DatePicker
              className="App-date"
              dateFormat="yyyy/MM/dd"
              selected={this.props.date}
              onChange={this.props.onChangeDate}
            />

            <Route
              exact
              path={'/'}
              render={() =>
                this.props.rates.has(format(this.props.date, 'yyyyMMdd'))
                ? (<TableRates rates={this.props.rates.get(format(this.props.date, 'yyyyMMdd'))}/>)
                : null
              }
            />
            <Route
              path="/charts"
              component={Charts}
            />

          </main>
        </BrowserRouter>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    date: state.date,
    rates: state.rates,
    isLoaded: state.isLoaded
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeDate: (date) => dispatch(changeDate(date)),
    setIsLoaded: (isLoaded) => dispatch(setIsLoaded(isLoaded)),
    saveResult: (rates) => dispatch(saveResult(rates))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
