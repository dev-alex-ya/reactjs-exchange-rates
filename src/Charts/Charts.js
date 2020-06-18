import React from 'react'
// import classes from './Charts.module.css'
import { Chart } from 'react-charts'
import {format} from "date-fns";
import {connect} from 'react-redux';
import {RadioGroup, ReversedRadioButton} from 'react-radio-buttons';
import {
  saveResult,
  setIsLoaded,
  markSelectValue,
  unmarkSelectValue,
  setPeriod,
  setPeriodLength,
  insertRateInData
} from '../redux/actions/actions';

const Charts = (props) => {

  function createPeriod(periodLength) {
    return function (date) {
      const day = 24 * 60 * 60 * 1000;
      debugger
      console.log([...Array(periodLength).keys()].map(
          (count) => format(date.getTime() - day * count, 'yyyyMMdd')
      ));
      return [...Array(periodLength).keys()].map(
          (count) => format(date.getTime() - day * count, 'yyyyMMdd')
      );
    }
  }

  const handleSelectRate = (event) => {
    // debugger
    if(props.selectedValues.has(event.target.value)) {
      // убираем выбранную валюту из массива
      props.unmarkSelectValue(event.target.value);
    } else {
      // добавляем выбранную валюту в массив
      props.markSelectValue(event.target.value);

      // props.selectGraph(event.target.value);
    }
  }

  const handleSelectPeriod = (periodLength) => {
    // props.selectPeriod(createPeriod(Number(periodLength)));
    const day = 24 * 60 * 60 * 1000;

    const period = [...Array(Number(periodLength)).keys()].map(
        (count) => format(props.date.getTime() - day * count, 'yyyyMMdd')
    );

    props.setPeriod(period);
    props.setPeriodLength(periodLength);
  }

  // формируем опции для выпадающего списка
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
        <RadioGroup onChange={(periodLength) => handleSelectPeriod(periodLength) } value={props.periodLength} style={{maxWidth:150}}>
          <ReversedRadioButton value="10">
            Декада
          </ReversedRadioButton>
          <ReversedRadioButton value="30">
            Месяц
          </ReversedRadioButton>
          <ReversedRadioButton value="180">
            Полгода
          </ReversedRadioButton>
          <ReversedRadioButton value="365">
            Год
          </ReversedRadioButton>
        </RadioGroup>
        <select size="10" multiple name="rates[]" onChange={handleSelectRate} value={[...props.selectedValues]}>
          {options}
        </select>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  return {
    selectedValues: state.selectedValues, //выбор валют
    periodLength: state.periodLength, //длина периода
    selectedPeriod: state.selectedPeriod,//массив строковых дат
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
    ], //точки для построения графика
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setIsLoaded: (isLoaded) => dispatch(setIsLoaded(isLoaded)),
    saveResult: (rates) => dispatch(saveResult(rates)),
    markSelectValue: (value) => dispatch(markSelectValue(value)),
    unmarkSelectValue: (value) => dispatch(unmarkSelectValue(value)),
    setPeriod: (period) => dispatch(setPeriod(period)),
    setPeriodLength: (periodLength) => dispatch(setPeriodLength(periodLength)),
    insertRateInData: (data) => dispatch(insertRateInData(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Charts)