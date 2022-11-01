"use strict";
const $ = (selector) => document.querySelector(selector);

let input = $("#input");

function clearResult () {
    $("#input").value = " ";
}

function append(number){
    //setting up input limit
    let length = ($("#input").value).length;
    if (length >= 25) {
        alert("Sorry only 25 inputs are allowed.")
    }
    else {
        $("#input").value += number;
    }
}

function deleteLast(){
    let x = $("#input").value;
    x = x.toString();
    //substracting last element of the input
    let y = x.substr(0, x.length-1);
    $("#input").value = y;
}

function getResult() {
    let x = $("#input").value;
    let lastInput = x.slice(-1);
    let firstInput = x.substring(0, 1);
    //error handling if last input is an operation or first input is *, /, ^
    if (lastInput == "+" || lastInput == "-" || lastInput == "*" || lastInput == "/" || lastInput == "**") {
        alert ("You need to add number after operator")
    }
    else if (firstInput == "*" || firstInput == "/" ) {
        alert("First input cannot be multiply, divide or power operator.\nPlease enter a number")
    }
    else {
        let y = eval(x);
        $("#input").value = y;
    } 
}

/**
 * add function that clears the input field once number is clicked after equals was pressed
 * add border to the calculator 
 * center calculator
 * add font to the header
 * 
**/


window.addEventListener("load", () => {
	$("#calculate").addEventListener("click", getResult);
    $("#clear").addEventListener("click", clearResult);
});
