function countVowels(str) {
    let count = 0;

    for (const char of str.toLowerCase()) {
        if (
            char === "a" ||
            char === "e" ||
            char === "i" ||
            char === "o" ||
            char === "u"
        ) {
            count++;
        }
    }
    return count;
}

// Example usage
console.log(countVowels("Education"));  // 5
