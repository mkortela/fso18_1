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
    }
  }

  render() {
    return (
      <div>
        <h1>anna palautetta</h1>

        <div>
          <button onClick={() => this.setState({ hyva: this.state.hyva + 1 })}>
            hyvä
          </button>
          <button onClick={() => this.setState({ neutraali: this.state.neutraali + 1 })}>
            neutraali
          </button>
          <button onClick={() => this.setState({ huono: this.state.huono + 1 })}>
            huono
          </button>

        <h1>statistiikka</h1>

        <div>hyvä: {this.state.hyva}</div>
        <div>neutraali: {this.state.neutraali}</div>
        <div>huono: {this.state.huono}</div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)