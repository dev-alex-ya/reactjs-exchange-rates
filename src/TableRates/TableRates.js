import React from 'react'
import classes from './TableRates.module.css'

const TableRates = (props) => (
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
      <tr>
        <td>Австралійський долар</td>
        <td>17.5212</td>
        <td>AUD</td>
      </tr>
    </tbody>
  </table>
)

export default TableRates