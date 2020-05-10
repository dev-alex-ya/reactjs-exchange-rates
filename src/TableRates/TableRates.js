import React from 'react'
import classes from './TableRates.module.css'
import Rate from '../Rate/Rate'

const TableRates = props => {
  return (
    <table>
      <thead>
        <tr>
          <th>Название</th>
          <th>Курс</th>
          <th>Обозначение</th>
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
            />
          )
        })}
      </tbody>
    </table>
  )
}

export default TableRates