import React from 'react';
import './App.css';
import TableRates from './TableRates/TableRates'

class App extends React.Component {

  constructor() {
    super()

    this.state = {
      rates: []
    }
  }

  getRates = async () => {
    const url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?'
    const urlParams = ['json']
    urlParams.push('date=20030302')
    const rates = await fetch(url + urlParams.join('&')).then(response => response.json())
    console.log(rates)
    this.setState({
      rates
    })
  }

  componentDidMount() {
     this.getRates()
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>header</h1>
        </header>
        <main className="App-main">
          <TableRates rates={this.state.rates} />
        </main>
      </div>
    )
  }

}

export default App;
