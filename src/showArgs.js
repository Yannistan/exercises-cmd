function showArgs() {
    // Verifier qu'il y a au moins deux arguments passé à notre programme afin de verifier le bon fonctionnement du code
    if (process.argv.length < 4) {
        console.log('usage: node showArgs.js arg1 arg2 ...')
        process.exit(1)
    }
    const array = process.argv.slice(2).reverse();
    for (let i = 0; i < array.length; i++)
        console.log(array[i])
};

console.log(showArgs())