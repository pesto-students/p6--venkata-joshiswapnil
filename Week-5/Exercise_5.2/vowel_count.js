/*
Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the 
values are the count of the vowels in the string.

*/

// Creating a function for vowelCount

const vowelCount = function(str){
    let vowelMap = new Map();
    str = str.toLowerCase();
    let char;
    for(char of str){
        if(("aeiou".includes(char))){
            if(vowelMap.has(char)){
                vowelMap.set(char,vowelMap.get(char)+1);
            }else{
                vowelMap.set(char,1);
            }
        }
    } 
    return vowelMap;
}

console.log(vowelCount("Bruce Wayne"));
console.log(vowelCount("Selina"));
console.log(vowelCount("dfghs"));