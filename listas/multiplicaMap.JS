// const arrayNums = [3,4,5,5]

// const arraySomada = arrayNums.map(num => num * 10)

// console.log(arraySomada)


const arrayNums = [1, 2, 3, 4]

function multiplicaPorDez(num) {
    return num * 10
}


const arraySomada = arrayNums.map(multiplicaPorDez)

console.log(arraySomada)