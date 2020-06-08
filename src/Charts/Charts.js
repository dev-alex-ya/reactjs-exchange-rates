import React, {Component} from 'react'
import classes from './Charts.module.css'
import { Chart } from 'react-charts'
import {format} from "date-fns";
import {connect} from 'react-redux';
import {add, changeDate, saveResult, setIsLoaded, handleChangeSelected} from '../redux/actions/actions';

const Charts = (props) => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const handler10days = () => {
    let date = this.props.date;
    const dayMilliseconds = 24*60*60*1000;

    let dates = [...Array(10).keys()]
      .map((daysCount) => {
        return format(date.getTime() - dayMilliseconds * daysCount, 'yyyyMMdd')
      })

    // сформировать массив дата для выбранной валюты (выбранной где?)
  }

  const handleChange = () => {
    console.log('Селект изменился - переделываем график')
  }

  return (
    <div
      style={{
        width: '100%',
        height: '300px'
      }}
    >

      <div>
        <button onClick={handler10days}>За 10 дней</button>
        <button onClick={() => {console.log('За месяц')}}>За месяц</button>
        <button onClick={() => {console.log('За полгода')}}>За полгода</button>
        <button onClick={() => {console.log('За год')}}>За год</button>
      </div>

      <Chart data={props.data} axes={props.axes} />
    </div>
  )
}

function mapStateToProps(state) {
  return {
    date: state.date,
    rates: state.rates,
    isLoaded: state.isLoaded,
    selectedRates: state.selectedRates,

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
}

function mapDispatchToProps(dispatch) {
  return {
    setIsLoaded: (isLoaded) => dispatch(setIsLoaded(isLoaded)),
    saveResult: (rates) => dispatch(saveResult(rates)),
    handleChangeSelected: (event) => dispatch(handleChangeSelected(event.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Charts)