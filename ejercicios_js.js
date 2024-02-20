
/*

function sigma (varX){
    for(let num=0; num <= varX; num++){
        sumatoria= sumatoria + num;
    }
}
console.log("sigma es:" + sumatoria);
*/

//recursividad 

//sigma
function sigma(num){

    if (num==1) {
        return 1
    }
    return num + sigma(num-1)

}
//grados celsius
const celsius = prompt ("que temperatura hace?")
const kelvin = parseInt(celsius) + 273.15
console.log("hace una temperatura de " + kelvin + "°k")

//dias meses años
let dias = prompt ("ingrese cantidad de dias")
console.log("son: " + Math.floor(dias/365) + " años, con " + (dias - (Math.floor(dias/365)*365) + " dias")+ (dias - (Math.floor(dias/365)*365) + " dias"))

//semanas
//dias = dias - (anios * 7)

function fibonacci(pos){

    if (pos==1 || pos==2) {
        return 1
    }
    return fibonacci(pos-1) + fibonacci(pos-2)
}