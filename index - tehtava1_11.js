import React from 'react'
import ReactDOM from 'react-dom'

const Buttoni = ({ counter,arvo,teksti }) => {
  return (
    <button onClick={counter.asetaArvoon(arvo)}>{teksti}</button>
  )
}


const Statistic = ({ counter }) => {
  return (
    <div>{counter}</div>
  )
}

const Statistics  = ({ counter }) => {
  if (counter.state.counter==0){
    return (
      <div> ei vielä palautetta </div>
    )
    }
    else {
    return (
    <div>  
      <h1>statistiikka</h1>
      <table><tbody>
      <tr><td>hyvä:</td><td><Statistic  counter={counter.state.hyva}/></td></tr>
      <tr><td>neutraali:</td><td><Statistic  counter={counter.state.neutraali}/></td></tr>
      <tr><td>huono:</td><td><Statistic  counter={counter.state.huono}/></td></tr>
      <tr><td>keskiarvo:</td><td><Statistic  counter={counter.state.keskiarvo}/></td></tr>
      <tr><td>positiivisia:</td><td><Statistic  counter={counter.state.positiivisia}/></td></tr>
      </tbody></table>
    </div>    
  )
  }
}


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      hyva: 0,
      neutraali: 0,
      huono: 0,
      keskiarvo: 0,
      positiivisia: 0,
    }
  }

  asetaArvoon = (arvo) => {

    return () => {
      if(arvo == 1)
      {this.setState({ hyva: this.state.hyva + 1 })}
      else if(arvo == 0)
      {this.setState({ neutraali: this.state.neutraali + 1 }) }
      else if (arvo == -1)
      {this.setState({ huono: this.state.huono + 1 })}
      

      this.setState({ counter: this.state.counter + 1 })
      this.laskeKeskiarvo()
      this.laskePositiivisia()
    }
  }


  laskeKeskiarvo = () => {
    this.setState({ keskiarvo: (this.state.hyva - this.state.huono) / (this.state.neutraali + this.state.huono+this.state.hyva)})
  }

  laskePositiivisia = () => {
    this.setState({ positiivisia: parseFloat(((this.state.hyva / (this.state.neutraali + this.state.huono +  this.state.hyva))*100).toFixed(2))})
  }

  render() {
    return (
      <div>
        <h1>anna palautetta</h1>

        <div>  
            <Buttoni counter={this} arvo="1" teksti ="hyva"/>
            <Buttoni counter={this} arvo="0" teksti ="neutraali"/>
            <Buttoni counter={this} arvo="-1" teksti ="huono"/>
            <Statistics  counter={this}/>


        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)