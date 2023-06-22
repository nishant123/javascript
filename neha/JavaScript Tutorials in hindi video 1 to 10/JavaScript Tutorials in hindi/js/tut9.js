console.log('we are welcome to tuttorial9');

// for (let i = 0; i < 100; i++) {
//     console.log(i);
// }

// let j = 0;
// while (j < 100) {
//     console.log(j);
//     j++;
// }
let k = 0;
do {
    if (k == 5) {
        k++;
        continue;
    }
    console.log(k);
    k++;
} while (k < 10)

let arr = [2, 4, 1, 6, 7];
arr.forEach(function (element) {
    console.log(element);
});
console.log('done');

let obj = {
    name: "komal",
    age: 40,
    type: "dangreous programmer",
    os: "ubuntu"
}
for (let key in obj) {
    console.log(`The ${key}of object is ${obj[key]}`);

}
console.log('done');





