import React from 'react';
import './App.css';
import TableRates from './TableRates/TableRates'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { compareAsc, format } from 'date-fns'

class App extends React.Component {

  state = {
    rates: [],
    startDate: new Date(),
    error: null,
    isLoaded: false
  }

  getRates = (date) => {
    
  }

  handleChangeDate = date => {
    this.setState({
      startDate: date
    })

    const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?'
    const urlParams = ['json']
    urlParams.push(`date=${format(date, 'yyyyMMdd')}`)
    fetch(url + urlParams.join('&'))
      .then(res => res.json())
      .then(
        (res) => {
          this.setState({
            isLoaded: true,
            rates: res
          })
          console.log('res: ', res)
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
          console.log('error: ', error)
        }
      )

    
    // console.log(rates)
  };

  componentDidMount() {
     this.handleChangeDate(this.state.startDate)
  }

  content = () => {
    if(this.state.requestError) {
      return (<h2 style={{color: 'red'}}>Ошибка запроса...</h2>)
    } else if(!this.state.isLoaded) {
      return (<h2 style={{color: 'blue'}}>Загрузка...</h2>)
    } else {
      return (
        <TableRates rates={this.state.rates}/>
      )
    }
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div className="container">
            <h1>RateChecker</h1>
            <nav className="App-bar">
              <a className="App-link" href="#">Rates</a>
              <a className="App-link" href="#">Chart</a>
            </nav>
          </div>
        </header>
        <main className="App-main container">
          <DatePicker
            className="App-date"
            dateFormat="yyyy/MM/dd"
            selected={this.state.startDate}
            onChange={this.handleChangeDate}
          />
          {this.content()}
        </main>
      </div>
    )
  }

}

export default App;
