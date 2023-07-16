const INPUT_TEXT = `
Your
text
here
`;

let firstUniqueWordsLetters = findFirstUniqueWordsLetters(INPUT_TEXT)
    .filter(letter => letter != undefined);
console.log(
    'First unique symbol from first unique symbols of all words in this text is: ',
    findFirstUniqueArrayElement(firstUniqueWordsLetters)
);

function findFirstUniqueArrayElement(array) {
    for (let i=0; i < array.length; i++) {
        if (array.indexOf(array[i]) === array.lastIndexOf(array[i])) {
            return array[i];
            break;
        }
    }
}

function findFirstUniqueWordsLetters(text) {
    const REGULAR_EXPRESSION = /[\s\n:;.,!?//-//()"']/;

    const WORDS = text
    .toLowerCase()
    .split(REGULAR_EXPRESSION)
    .filter(word => word != '');

    let firstUniqueWordsLetters = [];

    for (let i=0; i < WORDS.length; i++) {
        let wordLetters = WORDS[i].split('');
        firstUniqueWordsLetters.push(
            findFirstUniqueArrayElement(wordLetters)
        );
    }
    return firstUniqueWordsLetters;
}