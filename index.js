import {main, getWord} from  '..\webservice\app.js'
const express = require('express')

let returnedWords = []
let guessedWords = []
let currentWord = ""
let currentMixedWord = ""

function begin(){
    $("#beginButton").toggle()
    $("#input").toggle()
    getWordFromAPI()
}

function again(){
    getWordFromAPI()
    $("#win").toggle()
    $("#guessedWords").text(guessedWords.join(" "))
}

function quit(){
    $("#intro").toggle()
    $("#instructions").toggle()
    $("#win").toggle()
    $("#guessedWords").toggle()
    $("#input").toggle()
    $("#letters").toggle()
    $("#quit").toggle()
}

function guessWord(guess){
    guessedWords.push(guess)
    if(guess == currentWord){
        $("#win").toggle()
    }
    $("#guessedWords").text(guessedWords.join(" "))
}

function getWordFromAPI(){
    guessedWords = []
    let data = ''
    let json = ''
    let host = window.location.hostname
    const request = http.get(host + '/api/word?', (response) => {
        response.setEncoding('utf8')
        response.on('data', (chunk) => {
            data += chunk
        })
        response.on('end', () => {
            json = jQuery.parseJSON(data)
        })
    })
    request.on('error', (error) => {
        console.error(error)
    })
    request.end()
    currentWord = json.original_word
    currentMixedWord = json.mixed_word
    returnedWords.push(currentWord)
    $("#letters".text(currentMixedWord))
}

function provideHint(){
    if($("#hint").val != ""){
        $("#hint").val = currentWord[0]
    }
    else{
        alert("Sorry, only one hint allowed!")
    }
}

function isValidWordCheck(){
    let data = ''
    let json = ''
    let potentialWord = $("#textInput").val()
    const request = http.get("https://api.dictionaryapi.dev/api/v2/entries/en/" + potentialWord, (response) => {
        response.setEncoding('utf8')
        response.on('data', (chunk) => {
            data += chunk
        })
        response.on('end', () => {
            return data
        })
    })
    request.on('error', (error) => {
        console.error(error)
    })
    request.end()
    json = jQuery.parseJSON(data)
    if(json.word == potentialWord){
        if(!guessedWords.includes(guess)){
            guessWord()
        }
    }
    else{
        alert("You have submitted an invalid word, please try again.")
    }
    $("#textInput").val() = ""
}