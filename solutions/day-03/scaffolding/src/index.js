import React from 'react';
import ReactDOM from 'react-dom';
import jesusLogo from './images/profile.jpeg'

// To get the root element from the HTML document
const rootElement = document.querySelector('#root')

// JSX element, header
const welcome = 'Welcome to 30 Days Of React'
const author = {
    firstName: 'Jesus',
    lastName: 'Valera',
    getFullname() {
        return `${this.firstName} ${this.lastName}`
    }
}
const tickGreen = (
    <span className="checkmark">
        <div className="checkmark_circle"></div>
        <div className="checkmark_stem"></div>
        <div className="checkmark_kick"></div>
    </span>
)
// JSX element, header
const header = (
    <header>
        <div className='header-wrapper'>
            <h2>{welcome}</h2>
        </div>
    </header>
)

const personAge = (
    <p>
        {author.getFullname()} is {new Date().getFullYear() - 1996} years old
    </p>
)

let techs = ['HTML', 'CSS', 'Sass', 'Javascript', 'React', 'MongoDB', 'Python', 'Flask', 'Django', 'Numpy', 'Pandas', 'Data Analysis', 'MySQL', 'GraphQL', 'D3.js', 'Gatsby', 'Docker', 'Heroku', 'Git']
let techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)

// JSX element, main
const main = (
    <main>
        <div className='main-wrapper'>
            <img src={jesusLogo} alt="profile" className="profile-logo" />
            <div className="name">{author.getFullname()} {tickGreen}</div>
            <div className="skills">
                <p>SKILLS</p>
                <ul>{techsFormatted}</ul>
            </div>
            <small>{personAge}</small>
        </div>
    </main>
)

const copyRight = 'Copyright 2021'

// JSX element, footer
const footer = (
    <footer>
        <div className='footer-wrapper'>
            <p>{copyRight}</p>
        </div>
    </footer>
)

// JSX element, app
const app = (
    <div className='app'>
        {header}
        {main}
        {footer}
    </div>
)

// we render the JSX element using the ReactDOM package
ReactDOM.render(app, rootElement)
