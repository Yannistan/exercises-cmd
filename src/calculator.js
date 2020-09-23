function operations() {
    // Verifier qu'il a 3 arguments passé à notre programme
    if (process.argv.length !== 5) {
        console.log('usage: node calculator.js symbol number1 number2')
        process.exit(1)
    }
    if ((process.argv[2] !== "+") && (process.argv[2] !== "-") && (process.argv[2] !== "*") && (process.argv[2] != "/")) {
        console.log(`Invalid operation`)
        process.exit(1)
    }
    // Verifier que l'argument passé à notre programme peut être converti en nombre
    if (isNaN(process.argv[3]) || isNaN(process.argv[4])) {
        console.log(`The last two arguments must be numbers.`)
        process.exit(1)
    }
    let operation = process.argv[2]
    let n1 = Number(process.argv[3])
    let n2 = Number(process.argv[4])
    if (operation === "+") {
        return n1 + n2;
    }
    if (operation === "-") {
        return n1 - n2;
    }
    if (operation === "*") {
        return n1 * n2;
    }
    if (operation === "/") {
        return n1 / n2;
    }
}

console.log(operations())