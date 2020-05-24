import React, {Component} from 'react'
import classes from './Charts.module.css'
import { Chart } from 'react-charts'
import {format} from "date-fns";
import DatePicker from "react-datepicker";
import Select from 'react-select';

class Charts extends Component {

  state = {
    rates: this.props.rates,
    startDate: new Date(),
    data: [
      {
        label: 'AUD',
        data: [['20200514', 17.3923], ['20200515', 17.1254], ['20200516', 17.1254], ['20200517', 17.1254], ['20200518', 17.1149], ['20200519', 17.2034], ['20200520', 17.3215], ['20200521', 17.4998], ['20200522', 17.64], ['20200523', 17.64]]
      },
      {
        label: 'CAD',
        data: [['20200514', 19.0396], ['20200515', 18.9067], ['20200516', 18.9067], ['20200517', 18.9067], ['20200518', 18.8855], ['20200519', 18.9387], ['20200520', 19.0399], ['20200521', 19.1441], ['20200522', 19.2478], ['20200523', 19.2478]]
      }
    ],
    axes: [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ]
  }

  getRate = (valcode, date) => {

// https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&valcode=CAD&date=20200523
// https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&valcode=EUR&date=20200523
    const url = `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&valcode=${valcode}&date=${format(date, 'yyyyMMdd')}`
    fetch(url)
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
  }

  handleChangeDate = date => {
    this.setState({
      startDate: date
    })
  }

  handler10days = () => {
    let date = this.state.startDate;
    const dayMilliseconds = 24*60*60*1000;

    let dates = [...Array(10).keys()]
      .map((daysCount) => {
        return format(new Date(date.getTime() - dayMilliseconds * daysCount), 'yyyyMMdd')
      })
      .reverse()
      .map((dateStr) => {

      })

    console.log(dates)
  }

  render() {
    return (
      <div
        style={{
          width: '100%',
          height: '300px'
        }}
      >

        <DatePicker
          className="App-date"
          dateFormat="yyyy/MM/dd"
          selected={this.state.startDate}
          onChange={this.handleChangeDate}
        />
        <div>
          <button onClick={this.handler10days}>За 10 дней</button>
          <button onClick={() => {console.log('За месяц')}}>За месяц</button>
          <button onClick={() => {console.log('За полгода')}}>За полгода</button>
          <button onClick={() => {console.log('За год')}}>За год</button>
        </div>


        <Chart data={this.state.data} axes={this.state.axes} />
      </div>
    )
  }

}

export default Charts