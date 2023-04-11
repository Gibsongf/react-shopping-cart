import {survivalItems,allImg} from '../src/imgs/getAllImgs'

const survival = survivalItems()
const imgDataObj = allImg(survival,'survival')
console.log(imgDataObj)