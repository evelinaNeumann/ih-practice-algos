/*// 1. Write a function that takes an array of numbers and returns the largest number in the array.
function largestNumber(array) {}

// 2. Write a function that takes a string and returns the number of vowels in the string.
function numberOfVowels(string) {}*/

function numberOfVowels(string){
    let vowels="aeiouAEIOU";
    let count=0;
    for (let i=0; i<string.length; i++)
    {
        if (vowels.indexOf(string[i])!==-1)
        {
            count++;
        }
    }
    return count;
      }
    console.log(numberOfVowels("Hello there"));
    


/* 3. Write a function that takes two arrays of numbers and returns a new array with all the elements from both arrays, without any duplicates.
function combineArrays(array1, array2) {}

// 4. Write a function that takes an array of numbers and returns a new array with all the odd numbers in the original array.
function oddNumbers(array) {}

// 5. Write a function that takes an array of numbers and returns an array with all the even numbers in the original array.
function evenNumbers(array) {}

// 6. Write a function that takes two strings and returns a string that contains the characters that appear in both strings.
function commonCharacters(string1, string2) {}

// 7. Write a function that takes an object and returns a new object with all the keys and values reversed (BONUS)
function reverseObject(object) {}*/

/* Bonuses */

/*// Palindrome checker: Write a program that takes in a string and returns true if the string is a palindrome (reads the same forwards and backwards).
function palindrome(string) {}
//Word count: Write a program that takes in a string and returns the number of words in the string.
function wordCount(string) {}
// Character count: Write a program that takes in a string and returns the frequency count of each character in the string.
function characterCount(string) {}
// Reverse string: Write a program that takes in a string and returns the string reversed.
function reverseString(string) {}
// Replace vowels: Write a program that takes in a string and replaces all vowels with a specified character.
function replaceVowels(string, character) {}
// Longest word: Write a program that takes in a string and returns the longest word in the string.
function longestWord(string) {}
// Text analyzer: Write a program that takes in a string and returns the number of characters, words, and sentences in the string.
function textAnalyzer(string) {}
// Letter change: Write a program that takes in a string and changes each letter to the next letter in the alphabet.
function letterChange(string) {}*/
