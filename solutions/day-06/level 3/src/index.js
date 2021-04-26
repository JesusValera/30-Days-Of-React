import React from 'react';
import ReactDOM from 'react-dom';
import {tenHighestPopulation} from "./data/ten_most_highest_populations";

// To get the root element from the HTML document
const rootElement = document.querySelector('#root')

const Country = ({country, population, total}) => {
    let populationPercentage = population * 100 / total
    let barStyle = {
        width: `${populationPercentage}%`,
        backgroundColor: "#f6a002",
        padding: "12px",
    }

    return (
        <div style={{display: "flex", margin: "5px 0", fontWeight: "bold"}}>
            <span style={{width: "120px"}}>{country.toUpperCase()}</span>
            <div style={{flexGrow: "5", marginRight: "10px"}}>
                <div className="skills" style={barStyle} />
            </div>
            <span style={{flexGrow: "1"}}>{population.toLocaleString()}</span>
        </div>
    )
}

const Countries = ({countries}) => {
    let data = []
    let total = countries[0].population
    for (const {country, population} of countries) {
        data.push(<Country country={country} population={population} total={total} />)
    }
    return data
}

const App = () => (
    <div className='container'>
        <div>
            <h1>30 Days Of React</h1>
            <h2>World population</h2>
            <p>Ten most populated countries</p>
            <Countries countries={tenHighestPopulation} />
        </div>
    </div>
)

// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)
