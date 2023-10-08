function roman_to_decimal(romanNumeral) {
    const digits = {
        I: 1,
        X: 10,
        C: 100,
        M: 1000,
        V: 5,
        L: 50,
        D: 500,
    };

    let result = 0;
    for (let ch of romanNumeral) {
        result += digits[ch];
    }

    return result;
}

module.exports = roman_to_decimal;
