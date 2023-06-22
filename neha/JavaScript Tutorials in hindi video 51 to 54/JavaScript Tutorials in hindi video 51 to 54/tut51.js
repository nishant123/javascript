console.log('this is tut51.js');
//iterators
function fruitIterators(values) {
    let nextIndex = 0;
    //we will return an object
    return {
        next: function () {
            if (nextIndex < values.length) {

                //we will rturn below object
                {
                    value: values[nextIndex++],
                        { done: false };
                }
            }
            else {
                //we will return below object,with only done
                {
                    done: true
                }
            }

        }
    }
}



const myArray = ['Apple', 'Grapes', 'Oranges', 'Bhindi'];
console.log("My aaray is", myArray);


//using the iterators
const fruits = fruitIterators(myArray);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value);
console.log(fruits.next().value); 
