import React from 'react'
import classes from './TableRates.module.css'
import Rate from '../Rate/Rate'

const TableRates = props => {
  // debugger
  return (
    <table>
      <thead>
        <tr>
          <th>Название</th>
          <th>Курс</th>
          <th>Обозначение</th>
          <th>Дата</th>
        </tr>
      </thead>
      <tbody>
        {props.rates.map((rate, index) => {
          return (
            <Rate 
              key={index}
              name={rate.txt}
              rate={rate.rate}
              cc={rate.cc}
              exchangedate={rate.exchangedate}
            />
          )
        })}
      </tbody>
    </table>
  )
}

export default TableRates