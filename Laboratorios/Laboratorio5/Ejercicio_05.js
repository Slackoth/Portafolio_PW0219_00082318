function palindrome(word) {
    let isPalindrome = true;
    let originalWord = word.split("");
    //console.log(originalWord);
    let inverted = word.split("").reverse();
    //console.log(inverted);
    for (let I = 0; I < word.length; I++) {
        if(originalWord[I].toLowerCase() != inverted[I].toLowerCase()) {
            isPalindrome = false;
            break;
        }
    }
    if(isPalindrome) {
        console.log(`La palabra: ${word} es palindrome`);
    }
}