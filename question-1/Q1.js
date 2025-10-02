function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(mixedArray)) {
            reject("Input must be an array");
        } else {
            const filtered = mixedArray
                .filter(item => typeof item === "string")
                .map(word => word.toLowerCase());

            resolve(filtered);
        }
    });
}

// Test
const mixedArray = ['PIZZA', 10, true, 'Burgers', 'Fries', 99];
lowerCaseWords(mixedArray)
    .then(result => console.log("Result:", result))
    .catch(error => console.error("Error:", error));