"use strict"

// Generiamo un numero casuale

let nu;

function casuale() {
    nu = Math.floor(Math.random() * 100) + 1;
    document.getElementById("cas").innerHTML = "OK il numero casuale era:" + nu;
}

function myFunction() {

    let x = document.getElementById("numb").value;
    let text;

    if (x < nu) {
        text = "Input basso";
    } else if (x > nu) {
        text = "Input alto";
    } else {
        text = "Esatto OK";

        document.getElementById("cas").style.color = "white";
    }
    document.getElementById("ab").innerHTML = text;
    document.getElementById("ab").style.color = "red";
}

let z = 0;

function conta() {
    z++
    document.getElementById("ine").innerHTML = z;
    if (z == 11) {
        z = -1;
        document.getElementById("i").innerHTML = "Non ci sei riuscito - ricomincia da capo";
    }
}

function reset() {
    location.reload();
}