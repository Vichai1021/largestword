//longest word in a sentence

function findTheLongestWord (sentence){

  var max = 0;
  var arrSentence = sentence.split(" ");
  for (var i=0; i<arrSentence.length; i++){
    if (arrSentence[i].length>max){
      max = arrSentence[i].length;
    } 
   }
  return max;
  }

console.log(findTheLongestWord("The quick brown fox jumped over the lazy dog"))

console.log(findTheLongestWord("Welcome to Asia Developer Academy"))
