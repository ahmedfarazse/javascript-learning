
// Question 1

async function showData() {
    return "Hello Ahmed"
}

showData().then((result) => {
    console.log(result);
});




// Question 2

function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data Loaded");
        }, 2000);
    });
}

async function showData() {
    const data = await getData();
    console.log(data)
    
}

showData();



// Question 3

// convert the code into async/await 
// getData()
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });


async function showData() {
    try {
        const data = await getData();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

showData();