import React from 'react'
import classes from './TableRates.module.css'
import Rate from '../Rate/Rate'

const TableRates = props => (
  <table>
    <caption>Курс валют НБУ:</caption>
    <thead>
      <tr>
        <th>Название</th>
        <th>Курс</th>
        <th>Обозначение</th>
      </tr>
    </thead>
    <tbody>
      <Rate />
      <Rate />
    </tbody>
  </table>
)

export default TableRates