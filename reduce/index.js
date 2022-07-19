// Saturday, June 5, 2021
//Reduce - most powerful array method NOT a replacememnt for methods you already know.
//reduce take in two aarguments. first argument is a callback function.
//second argument is option and is called the initial value
//   -If no initial value, the initial value by default is the first elelmnt in the array.

//callback function has 2 arguments. First argument is called the accumulator
//2nd argument is the currentElement that you're on in the iteration.

//accumulators initial value is the InitialValue that was the optional argument
//if no initialValue, currEl will start as the second element in the array

let arr = ["hello", "cat", "dog"]; // => "hellocatdog"

// let str = arr.reduce((acc, currEl) => {
//   return acc + currEl;
// }, "");
//acc: ""
//currEl: "hello"
//acc: "hello"
//currEl: "cat"
//acc: "hellocat"
//currEl: "dog"
//acc: "hellocatdog"
// console.log(str)

// let str = arr.reduce((acc, currEl) => {
//     return acc + currEl;
//   });
//acc: "hello"
//currEl: "cat"
//acc: "hellocat"
//currEl: "dog"
//acc: "hellocatdog"
//   console.log(str)

let str = arr.reduce((acc, currEl) => {
  return acc + currEl;
}, "goodbye");
//acc: "goodbye"
//currEl: "hello"
//acc: "goodbyehello"
//currEl: "cat"
//acc: "goodbyehellocat"
//currEl: "dog"
//acc: "goodbyehellocatdog"
console.log(str);

//Challenge: Write a function that takes in an array of numbers and returns the product of all the numbers.
//Jordan and Joshua

let array = [1, 2, 3];
let product = array.reduce((acc, currEl) => {
  return acc * currEl;
});
console.log(product);

let prodArr = [1, 2, 3, 4];

const calcProduct = (prodArr) => {
  return prodArr.reduce((acc, currEl) => {
    return acc * currEl;
  });
};
console.log(calcProduct(prodArr));

const calcProductTimes3 = (prodArr) => {
  return prodArr.reduce((acc, currEl) => {
    return acc * currEl;
  }, 3);
};
console.log(calcProductTimes3(prodArr));
//acc: 3
//currEl: 1
//acc: 3
//currEl: 2
//acc: 6
//currEl: 3
//acc: 18
//currEl: 4
//acc: 72

// Challenge: Update your product function to only return the product of the odd numbers
//Jordan and Joshua

const calcOddNumbersProd = (prodArr) => {
  return prodArr.reduce((acc, currEl) => {
    if (currEl % 2 === 1) {
      return acc * currEl;
    } else {
        return acc
    }
  }, 1);
};
console.log(calcOddNumbersProd(prodArr));

// acc: 1
// curr: 2
//acc: undefined so add else

// acc: 1
// curr: 2
//acc: 1
// curr: 3
// acc: 3
// currEl: 4
//acc: 3

//Challenge: Write a function that takes in an array and returns an array with only the even elements
//Jordan, Joshua

const evenArray = (prodArr) => {
    return prodArr.reduce((acc, currEl) => {
        if (currEl % 2 === 0) {
            acc.push(currEl)
        } 
            return acc

    }, [])
}
console.log(evenArray(prodArr))

// acc: []
// curr: 1
//acc: []
// curr: 2
// acc: [2]
// currEl: 3
//acc: [2]
// currEl: 4
//acc: [2,4]