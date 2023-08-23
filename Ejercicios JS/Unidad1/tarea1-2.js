let input = ['a', 'b', 'c']
let output = [[]]

input.forEach(item => {
    let numeroCorrida = output.length
    for(let i = 0; i< numeroCorrida; i++){
        let combinacion = output[i]
        output.push([...combinacion, item])
    }

})

console.log(output)