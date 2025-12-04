// const hello = () => {
//     for(let i=1;i<=100;i++){
//         console.log(i);
//     }
// }


// function cli() {
//     const heading = document.getElementById("data");
//     heading.innerHTML = "hyy buddyyyy!! (❁´◡`❁)";


// //window.onload = hello;
// const arr = []
// for(let i = 0; i< 10; i++){
//     arr[i] = i;
// }
//  heading.innerText = arr;
// }

// function cli() {
//     const acti = documents.activeElement.tagName;
//     const heading = documnet.getElementById("data")
//    // heading.innerHTML = "hyy buddyyyy!! (❁´◡`❁)";
//     heading.innerText = acti;
//}

// let count = 0;

// function cli() {
//     const heading = document.getElementById("data");
//     heading.innerHTML = count++;
// }

// function arr() {
//     const container = document.getElementById("container");
//     container.innerHTML += "Shivu<br>";
// }

// const col = function () {
//     const div = document.getElementById("cont")
//     div.style.backgroundColor = "pink"

//     div.style.backgroundColor = "pink"
// }

// Previous color changing code - commented out
// let colors = ['pink', 'lightblue', 'lightgreen', 'red', 'yellow', 'palepurple','orange','gold','silver'];
// let currentIndex = 0;
// function changeColor() {
//     currentIndex = (currentIndex + 1) % colors.length;
//     document.getElementById('cont').style.backgroundColor = colors[currentIndex];
// }

// Calculator functions
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

// function deleteLast() {
//     let display = document.getElementById('display');
//     display.value = display.value.slice(0, -1);
// }

function calculate() {
    try {
        let result = eval(document.getElementById('display').value.replace('×', '*'));
        document.getElementById('display').value = result;
    } catch {
        document.getElementById('display').value = 'Error';
    }
}