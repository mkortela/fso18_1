import React from 'react'
import ReactDOM from 'react-dom'


class App extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 1,
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
          <button onClick={this.asetaArvoon(1)}>
            hyvä
          </button>
          <button onClick={this.asetaArvoon(0)}>
            neutraali
          </button>
          <button onClick={this.asetaArvoon(-1)}>
            huono
          </button>

        <h1>statistiikka</h1>

        <div>hyvä: {this.state.hyva}</div>
        <div>neutraali: {this.state.neutraali}</div>
        <div>huono: {this.state.huono}</div>
        <div>keskiarvo: {this.state.keskiarvo}</div>
        <div>positiivisia: {this.state.positiivisia}</div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)