import _ from 'lodash'
import './style.css'
import Icon from './img/bg.jpg'
import Data from './xmlFiles/data.xml'

// 函数的正常写法
function component() {
    const element = document.createElement('div')
    element.innerHTML = _.join(['Hello',' ', 'webpack'], '')
    element.classList.add('hello')

    var myImg = new Image()
    myImg.src = Icon
    element.appendChild(myImg)

    console.log(Data)
    return element
}
//箭头函数的写法
// var component = () => {
//     const element = document.createElement('div')
//     element.innerHTML = _.join(['Hello',' ', 'webpack'], '')
//     element.classList.add('hello')
//     return element
// }
document.body.appendChild(component())