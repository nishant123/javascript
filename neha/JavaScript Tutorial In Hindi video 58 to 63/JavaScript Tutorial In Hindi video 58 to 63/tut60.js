console.log('this i tutuorial 60js');
//disstructuring in avascirpt


let a, b;
[a, b] = [34, 564];
console.log(a, b);

[a, b, c, ...d] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
({ a, b, c, ...d } = { a: 34, b: 345, c: 67, d: 45, e: 34 })

const fruits = ['Apple,Bananas,Mangoes'];
[a, b, c] = fruits;

console.log(a, b, c);


//object distructuring 
laptop = {
    model: "HP pavilion",
    age: "23 years",
    gender: "male",
    net: 1233,
    Start= function () { console.log('started') }
}

model, age, gender2 = laptop

console.log(model, age, gender2);