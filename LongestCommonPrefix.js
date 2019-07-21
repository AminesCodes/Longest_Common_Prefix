/* Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: ["flower","flow","flight"]
Output: "fl"

Example 2:
Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

const longestCommonPrefix = function(arrOfStr) {
    let lngPrefix = '';
    let currentChar = arrOfStr[0][0];
    let shortestWord = Infinity;
    let pushingChar = true;
  
    for (let element of arrOfStr){
      if (element.length < shortestWord){
        shortestWord = element.length
      }
    }
    
    for (let j = 0; j < shortestWord; j++){ // j for letters of an element
      for (let i = 1; i < arrOfStr.length; i++){ // i for elements of the array
        if (arrOfStr[i][j] === currentChar){
          continue;
        } else {
          j = shortestWord;
          pushingChar = false;

        }
      }
      if (pushingChar){
        lngPrefix += currentChar;
        currentChar = arrOfStr[0][j+1];
      }
    }
  
    return lngPrefix;
  };
  
  let array1 = ["flower","flow","flight"];
  let output1 = longestCommonPrefix(array1);
  console.log(`The most commun prefix of `, array1, `is `, output1);

  let array2 = ["dog","racecar","car"];
  let output2 = longestCommonPrefix(array2);
  console.log(`The most commun prefix of `, array2, `is `, output2);
  //
  