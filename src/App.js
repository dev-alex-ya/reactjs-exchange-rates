import React from 'react';
import './App.css';
import TableRates from './TableRates/TableRates'

class App extends React.Component {
  
  state = {
    rates: [
      { 
      "r030":36,"txt":"Австралійський долар","rate":17.5212,"cc":"AUD","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":124,"txt":"Канадський долар","rate":19.2421,"cc":"CAD","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":156,"txt":"Юань Женьмiньбi","rate":3.7904,"cc":"CNY","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":191,"txt":"Куна","rate":3.8495,"cc":"HRK","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":203,"txt":"Чеська крона","rate":1.0678,"cc":"CZK","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":208,"txt":"Данська крона","rate":3.9004,"cc":"DKK","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":344,"txt":"Гонконгівський долар","rate":3.4599,"cc":"HKD","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":348,"txt":"Форинт","rate":0.083288,"cc":"HUF","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":356,"txt":"Індійська рупія","rate":0.35498,"cc":"INR","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":360,"txt":"Рупія","rate":0.0017972,"cc":"IDR","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":376,"txt":"Новий ізраїльський шекель","rate":7.6507,"cc":"ILS","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":392,"txt":"Єна","rate":0.25227,"cc":"JPY","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":398,"txt":"Теньге","rate":0.063782,"cc":"KZT","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":410,"txt":"Вона","rate":0.021989,"cc":"KRW","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":484,"txt":"Мексиканське песо","rate":1.125,"cc":"MXN","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":498,"txt":"Молдовський лей","rate":1.5091,"cc":"MDL","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":554,"txt":"Новозеландський долар","rate":16.4659,"cc":"NZD","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":578,"txt":"Норвезька крона","rate":2.63,"cc":"NOK","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":643,"txt":"Російський рубль","rate":0.36556,"cc":"RUB","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":682,"txt":"Саудівський рiял","rate":7.1388,"cc":"SAR","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":702,"txt":"Сінгапурський долар","rate":18.9793,"cc":"SGD","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":710,"txt":"Ренд","rate":1.4585,"cc":"ZAR","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":752,"txt":"Шведська крона","rate":2.7475,"cc":"SEK","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":756,"txt":"Швейцарський франк","rate":27.6348,"cc":"CHF","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":818,"txt":"Єгипетський фунт","rate":1.7035,"cc":"EGP","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":826,"txt":"Фунт стерлінгів","rate":33.2442,"cc":"GBP","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":840,"txt":"Долар США","rate":26.8196,"cc":"USD","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":933,"txt":"Бiлоруський рубль","rate":11.0007,"cc":"BYN","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":944,"txt":"Азербайджанський манат","rate":15.7355,"cc":"AZN","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":946,"txt":"Румунський лей","rate":6.0261,"cc":"RON","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":949,"txt":"Турецька ліра","rate":3.7672,"cc":"TRY","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":960,"txt":"СПЗ (спеціальні права запозичення)","rate":36.5904,"cc":"XDR","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":975,"txt":"Болгарський лев","rate":14.8725,"cc":"BGN","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":978,"txt":"Євро","rate":29.0966,"cc":"EUR","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":985,"txt":"Злотий","rate":6.3941,"cc":"PLN","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":12,"txt":"Алжирський динар","rate":0.21003,"cc":"DZD","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":50,"txt":"Така","rate":0.31735,"cc":"BDT","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":51,"txt":"Вірменський драм","rate":0.056249,"cc":"AMD","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":364,"txt":"Іранський ріал","rate":0.00064189,"cc":"IRR","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":368,"txt":"Іракський динар","rate":0.022655,"cc":"IQD","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":417,"txt":"Сом","rate":0.34174,"cc":"KGS","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":422,"txt":"Ліванський фунт","rate":0.017883,"cc":"LBP","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":434,"txt":"Лівійський динар","rate":19.0551,"cc":"LYD","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":458,"txt":"Малайзійський ринггіт","rate":6.2646,"cc":"MYR","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":504,"txt":"Марокканський дирхам","rate":2.7221,"cc":"MAD","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":704,"txt":"Донг","rate":0.0011567,"cc":"VND","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":764,"txt":"Бат","rate":0.83249,"cc":"THB","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":784,"txt":"Дирхам ОАЕ","rate":7.3398,"cc":"AED","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":788,"txt":"Туніський динар","rate":9.2895,"cc":"TND","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":860,"txt":"Узбецький сум","rate":0.0026613,"cc":"UZS","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":901,"txt":"Новий тайванський долар","rate":0.90698,"cc":"TWD","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":934,"txt":"Туркменський новий манат","rate":7.7026,"cc":"TMT","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":936,"txt":"Ганське седі","rate":4.6473,"cc":"GHS","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":941,"txt":"Сербський динар","rate":0.24908,"cc":"RSD","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":972,"txt":"Сомоні","rate":2.6325,"cc":"TJS","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":981,"txt":"Ларі","rate":8.4182,"cc":"GEL","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":986,"txt":"Бразильський реал","rate":4.9977,"cc":"BRL","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":959,"txt":"Золото","rate":46061.59,"cc":"XAU","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":961,"txt":"Срiбло","rate":416.16,"cc":"XAG","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":962,"txt":"Платина","rate":20566.07,"cc":"XPT","exchangedate":"12.05.2020"
       }
      ,{ 
      "r030":964,"txt":"Паладiй","rate":49884.19,"cc":"XPD","exchangedate":"12.05.2020"
       }
    ]
  }
  
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>header</h1>
        </header>
        <main className="App-main">
          <TableRates />
        </main>
      </div>
    )
  }

}

export default App;