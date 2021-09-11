let paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.";
let wordsNotAllowed = ["hit"];
let ouput = "";
let words = [];

function split(str){
    for(var i = 0; i < str.length; i++)
    {
        words.push(str[i]);
    }
}

split(paragraph.split(' '));

function cleanArray(arr) {
    return arr
      .map(name => name.toLowerCase().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ''))
      .filter( ( el ) => !wordsNotAllowed.includes( el.toLowerCase().replace(/[&\/\\#,+()$~%.'":*?<>{}]/g, ''), "") )
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


let arrayToSearch = cleanArray(words);
console.log(arrayToSearch);
ouput = mostFrequentElement(arrayToSearch);
console.log(ouput);



/*
let paragraph2 = "a.";
let wordsNotAllowed2 = [""];
let ouput2 = "";
let words2 = [];

function split2(str){
    for(var i = 0; i < str.length; i++)
    {
        words2.push(str[i]);
    }
}

split2(paragraph2.split(' '));

let arrayToSearch2 = cleanArray(words2);
console.log(arrayToSearch2);
ouput2 = mostFrequentElement(arrayToSearch2);
console.log(ouput2);
*/

