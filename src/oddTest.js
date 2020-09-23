function oddTest() {
    // Verifier qu'il n'y a qu'un seul argument passé à notre programme
    if (process.argv.length !== 3) {
        console.log('usage: node oddTest.js number')
        process.exit(1)
    }
    // Verifier que l'argument passé à notre programme peut être converti en nombre
    if (isNaN(process.argv[2])) {
        console.log(`Error: ${process.argv[2]} is not a number.`)
        process.exit(1)
    }
    let number = Number(process.argv[2]);
    if (number % 2 == 0) {
        console.log(`${number} est un nombre pair`)
    } else {
        console.log(`${number} est un nombre impair`)
    }
}

console.log(oddTest())