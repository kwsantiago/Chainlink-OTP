import { vrfNumber, getVRF } from "./smartContract"

// from https://ourcodeworld.com/articles/read/278/how-to-split-an-array-into-chunks-of-the-same-size-easily-in-javascript
function chunkArray(myArray, chunk_size){
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];
    
    for (index = 0; index < arrayLength; index += chunk_size) {
        let myChunk = myArray.slice(index, index+chunk_size);
        // Do something if you want with the group
        tempArray.push(myChunk);
    }

    return tempArray;
}

// Turn each character of the VRF number into letters and return the array
async function genPads(length){
    await getVRF();
    var vrfNum = await vrfNumber();
    const arrayOfDigits = Array.from(String(vrfNum), Number);
    var arrayOfLetters = [];
    for(let i = 0; i < arrayOfDigits.length; i++)
        arrayOfLetters.push(String.fromCharCode(97 + arrayOfDigits[i]))
    arrayOfLetters = chunkArray(arrayOfLetters, length);
    return arrayOfLetters;
}

export { genPads };
