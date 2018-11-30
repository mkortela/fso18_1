import React from 'react'
import ReactDOM from 'react-dom'


const Osa = (props) => {
    return (
        <div>
        <p>{props.osa} {props.tehtavia}</p>
        </div>
    )
}

const Otsikko = (props) => {
    
    return (
    <h1>{props.kurssi}</h1>
    )
}

const Sisalto = (props) => {

    const nimet = props.osat.map((osa) =>
    {return osa.nimi}
    );

    const tehtavat = props.osat.map((osa) =>
    {return osa.tehtavia}
    );

    return (
    <div>
    <Osa osa = {nimet[0]} tehtavia = {tehtavat[0]} />
    <Osa osa = {nimet[1]} tehtavia = {tehtavat[1]} />
    <Osa osa = {nimet[2]} tehtavia = {tehtavat[2]} />
    </div>
    )
}

const Yhteensa = (props) => {


const content = props.osat.map((osa) =>
      {return osa.tehtavia}
  );


    return (
    <p>yhteensä {content[0]+content[1]+content[2]} tehtävää</p>
    )
}

const App = () => {
  
    const kurssi = 'Half Stack -sovelluskehitys'

    const osat = [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14
        }
      ]


  return (
    <div>
      <Otsikko kurssi={kurssi} />

      <Sisalto osat = {osat}/>
      
      <Yhteensa osat = {osat} />
    </div>  
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)