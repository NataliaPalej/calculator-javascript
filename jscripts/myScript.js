"use strict";
const $ = (selector) => document.querySelector(selector);

let input = $("#input");

function clearResult () {
    $("#input").innerHTML = " ";
    
}

function appendNumber (number){

}

function operation(operation){

}

function result(){
    
}

function displayResult () {

}

window.addEventListener("load", () => {
	$("#calculate").addEventListener("click", displayResult);
    $("#clear").addEventListener("click", clearResult);
});
