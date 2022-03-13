import Post from '@models/Post';
import * as $ from 'jquery';
// import json from './assets/json.json'
// import xml from './assets/data.xml'
// import csv from './assets/data.csv'
import './styles/styles.css'
import './styles/main.less'
import './styles/main.scss'

const post = new Post("Webpack Post")
$('pre').addClass('code').html(post.toString())

// console.log(json.title)
// console.log(xml)
// console.log(csv)