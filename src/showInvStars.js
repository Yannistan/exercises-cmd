// Verifier qu'il y a au moins deux arguments passé à notre programme afin de verifier le bon fonctionnement du code
if (process.argv.length != 3) {
    console.log('usage: node showInvStars.js number')
    process.exit(1)
}
// Verifier que l'argument passé à notre programme peut être converti en nombre
if (isNaN(process.argv[2])) {
    console.log(`Error: ${process.argv[2]} is not a number.`)
    process.exit(1)
}
let char = "*";
let stars = [];
let nbStars = Number(process.argv[2])
for (let i = 0; i < nbStars; i++) {
    stars.push(char)
    char += "*";
}

for (let i = nbStars - 1; i >= 0; i--) {
    console.log(stars[i])
}