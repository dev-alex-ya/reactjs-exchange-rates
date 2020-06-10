import React from 'react'
import classes from './Charts.module.css'
import { Chart } from 'react-charts'
import {format} from "date-fns";
import {connect} from 'react-redux';
import {saveResult, setIsLoaded, markSelectValue, unmarkSelectValue, selectPeriod} from '../redux/actions/actions';
import {RadioGroup, RadioButton, ReversedRadioButton} from 'react-radio-buttons';

const Charts = (props) => {

  const handler10days = () => {
    let date = this.props.date;
    const dayMilliseconds = 24*60*60*1000;

    let dates = [...Array(10).keys()]
      .map((daysCount) => {
        return format(date.getTime() - dayMilliseconds * daysCount, 'yyyyMMdd')
      })

    // сформировать массив дата для выбранной валюты (выбранной где?)
  }

  const handleChangeSelect = (event) => {
    if(props.selectValues.has(event.target.value)) {
      props.unmarkSelectValue(event.target.value);
    } else {
      props.markSelectValue(event.target.value);
    }
  }


  const formatedDate = format(props.date, 'yyyyMMdd');

  let options;
  if(props.rates.has(formatedDate)) {
    const rate = props.rates.get(formatedDate );
    options = rate.map((item) => {
      return (<option key={item.cc} value={item.cc}>{item.txt}</option>)
    });
  }


  return (
    <div
      style={{
        width: '100%',
        height: '300px'
      }}
    >
      <Chart data={props.data} axes={props.axes} />

      <div style={{display: 'flex', justifyContent: 'space-between', marginTop: 20}}>
        <RadioGroup onChange={ props.selectPeriod } value={props.selectedPeriod} style={{maxWidth:150}}>
          <ReversedRadioButton value="10">
            Декада
          </ReversedRadioButton>
          <ReversedRadioButton value="30">
            месяц
          </ReversedRadioButton>
          <ReversedRadioButton value="180">
            Полгода
          </ReversedRadioButton>
          <ReversedRadioButton value="365">
            Год
          </ReversedRadioButton>
        </RadioGroup>

        <select size="10" multiple name="rates[]" onChange={handleChangeSelect} value={[...props.selectValues]}>
          {options}
        </select>
      </div>



    </div>
  )
}

function mapStateToProps(state) {
  return {
    selectValues: state.selectValues, //выбор валют
    selectedPeriod: state.selectedPeriod,//выборпериода
    date: state.date, // дата
    rates: state.rates, // курсы валют
    isLoaded: state.isLoaded,
    selectedRates: state.selectedRates, //выбранные валюты
    axes: state.axes, // осиграфика

    data: [
      {
        label: 'AUD',
        data: [['20200514', 17.3923], ['20200515', 17.1254], ['20200516', 17.1254], ['20200517', 17.1254], ['20200518', 17.1149], ['20200519', 17.2034], ['20200520', 17.3215], ['20200521', 17.4998], ['20200522', 17.64], ['20200523', 17.64]]
      },
      {
        label: 'CAD',
        data: [['20200514', 19.0396], ['20200515', 18.9067], ['20200516', 18.9067], ['20200517', 18.9067], ['20200518', 18.8855], ['20200519', 18.9387], ['20200520', 19.0399], ['20200521', 19.1441], ['20200522', 19.2478], ['20200523', 19.2478]]
      }
    ], //точки для построенияграфика

  }
}

function mapDispatchToProps(dispatch) {
  return {
    setIsLoaded: (isLoaded) => dispatch(setIsLoaded(isLoaded)),
    saveResult: (rates) => dispatch(saveResult(rates)),
    markSelectValue: (value) => dispatch(markSelectValue(value)),
    unmarkSelectValue: (value) => dispatch(unmarkSelectValue(value)),
    selectPeriod: (period) => dispatch(selectPeriod(period)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Charts)