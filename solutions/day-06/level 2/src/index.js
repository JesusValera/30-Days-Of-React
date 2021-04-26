import React from 'react';
import ReactDOM from 'react-dom';

// To get the root element from the HTML document
const rootElement = document.querySelector('#root')

let isPrime = (number) => {
    let isEven = number % 2 === 0
    if (number < 2 || (number > 2 && isEven)) {
        return false;
    }

    for (let i = 3; i <= Math.sqrt(number); i += 2) {
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}

let chunks = (array, chunkSize) => {
    let tempArray = [];
    for (let i = 0, j = array.length; i < j; i += chunkSize) {
        tempArray.push(array.slice(i, i + chunkSize));
    }

    return tempArray
}

let boxColor = (number) => {
    if (isPrime(number)) {
        return '#f55c53'
    }

    if (number % 2 === 0) {
        return '#23ba71'
    }

    return '#f5d43b'
}

let Numbers = ({numbers}) => {
    let items = []
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i].map((number, index) => {
            let key = (i * 8) + index
            return (
                <div className="divNumber" style={{backgroundColor: number}} key={key}>
                    <span className="textNumber">{key}</span>
                </div>
            )
        })
        items.push(<div style={{display: "flex"}}>{number}</div>)
    }
    return items
}

const App = () => {
    const numbers = new Array(32)
        .fill(undefined)
        .map((_, index) => boxColor(index))
    const chunkedNumbers = chunks(numbers, 8)

    return (
        <div className='container'>
            <h1>30 Days Of React</h1>
            <h2>Number Generator</h2>
            <Numbers numbers={chunkedNumbers} />
        </div>
    )
}

// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)
