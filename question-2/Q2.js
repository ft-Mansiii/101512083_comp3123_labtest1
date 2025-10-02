// Q2/callbacks.js

function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => resolve({ message: "delayed success" }), 500);
    });
}

function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => reject({ message: "delayed exception" }), 500);
    });
}

// Call resolvedPromise
resolvedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));

// Call rejectedPromise
rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error));