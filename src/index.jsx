import React from 'react';
import {render} from 'react-dom'
import Post from '@models/Post';
import * as $ from 'jquery';
// import json from './assets/json.json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
import './styles/styles.css'
import './styles/main.less'
import './styles/main.scss'
import './babel.js'

const post = new Post("Webpack Post")
// $('pre').addClass('code').html(post.toString())

function App() {
    return (
        <div>
            <h1>Webpack</h1>
            <hr/>
            <div className="logo"/>
            <hr/>
            <pre className="code"/>
            <div className="box">
                <h2>Less</h2>
            </div>
            <div className="box2">
            <h2>Sass</h2>
            </div>
        </div>
    )
}

render(<App/>, document.getElementById('app'))

// console.log(json.title)
// console.log(xml)
// console.log(csv)