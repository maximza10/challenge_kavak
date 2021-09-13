function split(words, str) {
    for (var i = 0; i < str.length; i++) {
        words.push(str[i]);
    }
    return words;
}

function cleanArray(arr, wordsNotAllowed) {
    return arr
        .map(name => name.toLowerCase().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ''))
        .filter((el) => !wordsNotAllowed.includes(el.toLowerCase().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ''), ""))
}

function mostFrequentElement(arr) {
    let res = [];
    for (let x of arr) {
        let count = 0;
        for (let i of arr) {
            if (i == x) {
                count++;
            }
        }
        res.push(count);
    }
    return arr[res.indexOf(Math.max(...res))];
}


window.onload = function () {
    let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
    let wordsNotAllowed = ["hit"];
    let output = "";
    let words = [];

    words = split(words, paragraph.split(' '));


    let arrayToSearch = cleanArray(words, wordsNotAllowed);
    output = mostFrequentElement(arrayToSearch);
    document.getElementById("output").textContent += output

}

//Interactivo
var wordsNotAllowed_ = [];

function add() {
    let wordNotAllowed = document.getElementById("wordNotAllowed").value;
    if(wordNotAllowed != ""){
        wordsNotAllowed_.push(wordNotAllowed);
        console.log(wordsNotAllowed_);
    }else{
        alert("write a word");
    }
}

function emptyArray(){
    wordsNotAllowed_ = [];
    console.log(wordsNotAllowed_);
}

function check() {

    let paragraph = document.getElementById("paragraph").value;
    let words_ = [];
    if(paragraph != "" && wordsNotAllowed_.length > 0){
        words_ = split(words_, paragraph.split(' '));

        let arrayToSearch = cleanArray(words_, wordsNotAllowed_);
        output = mostFrequentElement(arrayToSearch);
        document.getElementById("output2").textContent = "Most frequent word: " + output;
    
    }else{
        alert("Please write a paragraph and inserts words not allowed");
    }

}