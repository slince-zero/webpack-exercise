import hello from './hello.js'
import addImg from './add-fun.js'
import Hello from './components/hello/hello.js'
import Head from './components/head/head.js'
import _ from 'lodash'

const h = new Hello()
h.render()

const head = new Head()
head.render()

hello()
addImg()
console.log('111')
console.log(_.upperFirst('zhang'))
