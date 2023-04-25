// import World from './world'

// const root = document.getElementById('root')
// const world = new World('Hello world!')
// world.sayHello(root)

// 03.基本の型定義
// import {anySample,notExistSample, primitiveSample,unknownSample } from "./basic"

// anySample()
// notExistSample()
// primitiveSample()
// unknownSample()

//04.関数の型定義
import { logMessage, logMessage2 } from './function/basic'
import { isUserSignedIn, isUserSignedIn2, sumProductsPrice } from './function/parameters'

logMessage('Hello Typescript')
isUserSignedIn('ABC', 'Mutsuo')
isUserSignedIn('DEF')
isUserSignedIn2('ABC')
const sum = sumProductsPrice(100, 200, 300, 400, 500)
console.log('Function parameters sample 5: ', sum)
