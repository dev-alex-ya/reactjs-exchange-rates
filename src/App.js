import React from 'react';
import {add, changeDate} from './redux/actions/actions';
import {connect} from 'react-redux'
import './App.css';
import TableRates from './TableRates/TableRates'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { format } from 'date-fns'
import {BrowserRouter, NavLink, Route} from "react-router-dom";

class App extends React.Component {

  // state = {
  //   rates: [],
  //   startDate: new Date(),
  //   error: null,
  //   isLoaded: false
  // }

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
     // this.handleChangeDate(this.state.startDate)
  }

  // content = () => {
  //   if(this.state.requestError) {
  //     return (<h2 style={{color: 'red'}}>Ошибка запроса...</h2>)
  //   } else if(!this.state.isLoaded) {
  //     return (<h2 style={{color: 'blue'}}>Загрузка...</h2>)
  //   } else {
  //     return (
  //       <TableRates rates={this.state.rates}/>
  //     )
  //   }
  // }
  
  render(){
    console.log('APP', this.props)
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
                selected={this.props.startDate}
                onChange={this.props.onChangeDate}
            />
            {/*{this.content()}*/}

            <Route path="/" exact render={()=>{
              return (
                <>

                </>
                )
            }}/>
            {/*<Route path="/charts" component={Charts}/>*/}


          </main>
        </BrowserRouter>
      </div>
    )
  }

}

function mapStateToProps(state) {
  return {
    startDate: state.startDate
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAdd: () => dispatch(add()),
    onChangeDate: (date) => dispatch(changeDate(date)),
    // onAsyncAdd: (num) => dispatch(asyncAdd(num))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
