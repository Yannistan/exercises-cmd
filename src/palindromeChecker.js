function palindromeChecker() {
    if (process.argv.length !== 3) {
        console.log('usage: node palindromeChecker.js string')
        process.exit(1)
    }
    let string = process.argv[2];
    let len = Math.floor(string.length / 2);
    for (let i = 0; i < len; i++) {
        if (string[i] !== string[string.length - i - 1])
            return false;
    }
    return true;
}

console.log(palindromeChecker())
//console.log(isPalindrome('Alyra'))