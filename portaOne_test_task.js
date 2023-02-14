function getFirstUniqueSymbolInText(someText) {
    let listOfWord = someText.split(" ");
    let stringOfUniqueSymbolsOfWord = "";
    for(let element of listOfWord) {
        stringOfUniqueSymbolsOfWord += getFirstUniqueSymbolInWord(element);
    }
    let uniqueSymbol = getFirstUniqueSymbolInWord(stringOfUniqueSymbolsOfWord);
    return uniqueSymbol;
}

function quantityOfSymbolnInWord(someWord, element) { 
    quantityOfSymbols = 0;
    for(let symbol of someWord) {
        if(element == symbol) {
            quantityOfSymbols++;
        }
        continue;
    }
    return quantityOfSymbols;
}

function getFirstUniqueSymbolInWord(someWord) {
    for(let element of someWord) {
        if(quantityOfSymbolnInWord(someWord, element) == 1) {
            return element;
        }
    }
    return "";
}

str = getFirstUniqueSymbolInText("The Tao gave birth to machine language. Machine language gave birth to the assembler.The assembler gave birth to the compiler. Now there are ten thousand languages.Each language has its purpos, however humble. Each language expresses the Yin and Yang of software. Each language has its place within the Tao.But do not program in COBOL if you can avoid it.-- Geoffrey James, \"The Tao of Programming\"")
console.log(str);

str = getFirstUniqueSymbolInText("aaaa")
console.log(str);