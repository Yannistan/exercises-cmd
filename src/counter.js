function counter() {
    // Verifier qu'il a 3 arguments passé à notre programme
    if (process.argv.length !== 5) {
        console.log('usage: node counter.js min max step')
        process.exit(1)
    }
    // Verifier que l'argument passé à notre programme peut être converti en nombre
    if (isNaN(process.argv[2]) || isNaN(process.argv[3]) || isNaN(process.argv[4])) {
        console.log(`Error: All arguments must be numbers.`)
        process.exit(1)
    }
    let min = Number(process.argv[2])
    let max = Number(process.argv[3])
    let step = Number(process.argv[4])
    for (let i = min; i <= max; i += step) {
        console.log(i)
    }

}

console.log(counter())