
const promise = new Promise((resolve) => {
    resolve(10);
});

promise
    .then((value) => {
        console.log(value);

        return value * 2;
    })
    .then((value) => {
        console.log(value);

        return value + 5;
    })
    .then((value) => {
        console.log(value);
    });



    // Promise Returning Promise

    const login = new Promise((resolve) => {
    resolve("Ahmed");
});

login
    .then((username) => {
        console.log("Logged in:", username);

        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("User Data Loaded");
            }, 2000);
        });
    })
    .then((data) => {
        console.log(data);
    });




    // Real-World Example

    function getUser() {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve({
                id: 1,
                name: "Ahmed"
            });
        }, 2000);

    });

}

getUser().then((user) => {
    console.log(user);
});




// Error in Promise Chain


Promise.resolve(10)

    .then((value) => {
        return value * 2;
    })

    .then((value) => {
        throw new Error("Something went wrong");
    })

    .then((value) => {
        console.log(value);
    })

    .catch((error) => {
        console.log(error.message);
    });