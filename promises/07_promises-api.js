
// 1. Promise.all()

// Multiple Promises ko parallel run karta hai aur tab successful hota hai jab sab fulfill ho jayein.

const p1 = Promise.resolve("User");
const p2 = Promise.resolve("Posts");
const p3 = Promise.resolve("Comments");

Promise.all([p1, p2, p3])
    .then((results) => {
        console.log(results);
    });



// 2. Promise.allSettled()

// Ye sab Promises ka result wait karta hai, chahe success ho ya failure.

const p1 = Promise.resolve("User");
const p2 = Promise.reject("Posts Failed");
const p3 = Promise.resolve("Comments");

Promise.allSettled([p1, p2, p3])
    .then((results) => {
        console.log(results);
    });



// 3. Promise.race()

// Jo Promise sabse pehle settle ho — fulfill ya reject — uska result milta hai.

const p1 = new Promise((resolve) => {
    setTimeout(() => resolve("First"), 1000);
});

const p2 = new Promise((resolve) => {
    setTimeout(() => resolve("Second"), 2000);
});

Promise.race([p1, p2])
    .then((result) => {
        console.log(result);
    });



// 4. Promise.any()

// Ye pehli fulfilled Promise ka result deta hai.

const p1 = Promise.reject("Server 1 Failed");

const p2 = new Promise((resolve) => {
    setTimeout(() => resolve("Server 2 Success"), 2000);
});

const p3 = new Promise((resolve) => {
    setTimeout(() => resolve("Server 3 Success"), 1000);
});

Promise.any([p1, p2, p3])
    .then((result) => {
        console.log(result);
    });