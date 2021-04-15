import React from 'react';
import ReactDOM from 'react-dom';
import jesusLogo from './images/profile.jpeg'

// To get the root element from the HTML document
const rootElement = document.querySelector('#root')

// JSX element, header
const welcome = 'Welcome to 30 Days Of React'

// JSX element, header
const Header = () => (
    <header>
        <div className='header-wrapper'>
            <h2>{welcome}</h2>
        </div>
    </header>
)

const author = {
    firstName: 'Jesus',
    lastName: 'Valera',
    getFullname() {
        return `${this.firstName} ${this.lastName}`
    }
}
const PersonAge = () => (
    <p style={{ fontFamily: "Roboto"}}>
        {author.getFullname()} is {new Date().getFullYear() - 1996} years old
    </p>
)

const TickGreen = () => (
    <span className="checkmark">
        <div className="checkmark_circle" />
        <div className="checkmark_stem" />
        <div className="checkmark_kick" />
    </span>
)

let techs = ['HTML', 'CSS', 'Sass', 'Javascript', 'React', 'MongoDB', 'Python', 'Flask', 'Django', 'Numpy', 'Pandas', 'Data Analysis', 'MySQL', 'GraphQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git']
let techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

// JSX element, main
const Main = () => (
    <main>
        <div className='main-wrapper'>
            <img src={jesusLogo} alt="profile" className="profile-logo" />
            <div className="name">{author.getFullname()} <TickGreen /></div>
            <div className="skills">
                <p>SKILLS</p>
                <ul>{techsFormatted}</ul>
            </div>
            <small><PersonAge /></small>
        </div>
    </main>
)

// Hexadecimal color generator
const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * str.length)
        color += str[index]
    }
    return '#' + color
}

const colors = [hexaColor(), hexaColor(), hexaColor(), hexaColor(), hexaColor()]

const Colors = () => (
    <div className="colors">
        {colors.map((color, index) => {
            return <div key={colors[index]} style={{backgroundColor: colors[index]}}>{colors[index]}</div>
        })}
    </div>
)

const copyRight = 'Copyright 2021'

// JSX element, footer
const Footer = () => (
    <footer>
        <div className='footer-wrapper'>
            <p>{copyRight}</p>
        </div>
    </footer>
)

// JSX element, app
const App = () => (
    <div className='app'>
        <Header />
        <Main />
        <Colors />
        <Footer />
    </div>
)

// we render the JSX element using the ReactDOM package
ReactDOM.render(<App />, rootElement)
