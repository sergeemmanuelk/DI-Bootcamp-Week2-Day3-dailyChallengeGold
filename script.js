const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8]

// Using the .toString() method convert the array to a string
let concertNumberToString = numbers.toString()
console.log(concertNumberToString)

// Using the .join()method convert the array to a string. Try passing different values into the join.
// Eg .join(“+”) : 
let numberSeparatorPlus = numbers.join(" + ")
console.log(numberSeparatorPlus)

// Eg .join(” “) :
let numberSeparatorSpace = numbers.join(" ")
console.log(numberSeparatorSpace)

// Eg .join(“”) :
let numberSeparatorEmpty = numbers.join("")
console.log(numberSeparatorEmpty)

console.log("*****Bonus*****")

// Bonus : To do this Bonus look up how to work with nested for loops
// Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
// The output should be: [9,8,7,6,5,4,3,2,1,0]

let arrayNumbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8]

// Hint: The algorithm is called “Bubble Sort”
function bubbleSort(arrayNumbers) {
    for (let i = 0; i < arrayNumbers.length; i++) {
        for (let j = 0; j < arrayNumbers.length - i - 1; j++) {
            // If the current element is larger than the next element, swap them
            if (arrayNumbers[j] < arrayNumbers[j + 1]) {
                // Use a temporary variable to swap values in the array
                let temporary = arrayNumbers[j];
                arrayNumbers[j] = arrayNumbers[j + 1];
                arrayNumbers[j + 1] = temporary;
            }
        }
    }

    return arrayNumbers
}

console.log(bubbleSort(arrayNumbers))