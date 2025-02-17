// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "David Rendon" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function () {
    gb++;
    document.getElementById("qty-gb").textContent = gb
    document.getElementById("qty-total").textContent = gb + cc + sugar

    // HINT: You can delete this console.log after you no longer need it!



    // TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked
})
document.getElementById('minus-gb').addEventListener('click', function () {
    gb--;
    document.getElementById("qty-gb").textContent = gb
    document.getElementById("qty-total").textContent = gb + cc + sugar

})

document.getElementById('add-cc').addEventListener('click', function () {
    cc++;
    document.getElementById("qty-cc").textContent = cc
    document.getElementById("qty-total").textContent = gb + cc + sugar
})
document.getElementById('minus-cc').addEventListener('click', function () {
    cc--;
    document.getElementById("qty-cc").textContent = cc
    document.getElementById("qty-total").textContent = gb + cc + sugar
})

document.getElementById('add-sugar').addEventListener('click', function () {
    sugar++;
    document.getElementById("qty-sugar").textContent = sugar
    document.getElementById("qty-total").textContent = gb + cc + sugar
})
document.getElementById('minus-sugar').addEventListener('click', function () {
    sugar--;
    document.getElementById("qty-sugar").textContent = sugar
    document.getElementById("qty-total").textContent = gb + cc + sugar
})
// TODO: Hook up event listeners for the rest of the buttons