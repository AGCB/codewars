// https://www.codewars.com/kata/54b42f9314d9229fd6000d9c/solutions/javascript


/* 
there was another interesting approach with more modern syntax. 
comparing word.indexOf(letter) against word.lastIndexOf(letter).
*/
function duplicateEncode(word) {
    word = word.split('').map(x => x.toLowerCase()).join('')
    let outputObj = {}
    let outputWord = ""
    // build outputObj
    word.split('').forEach(letter => {
       if(outputObj[letter]) {
           outputObj[letter]++;
       } else {
           outputObj[letter] = 1;
       }
    })
    //build outputWord
    word.split('').forEach(letter => {
    if(!outputObj[letter] || outputObj[letter] === 1) {
        outputWord += '('
    } else {
            outputWord += ')'
    }
    })
    return outputWord;
}
