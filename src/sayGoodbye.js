if (process.argv.length != 3) {
    console.log('usage: node sayGoodbye.js name')
    process.exit(1)
}
let name = process.argv[2]
console.log(`Goodbye, ${name}`)