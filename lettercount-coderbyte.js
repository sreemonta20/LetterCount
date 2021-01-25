// Letter Count:: 
/*This problem I have encountered for a xyz company online coding challenge. Here is how i have solved this using typescript */

/** Have the function LetterCount(str) take the str parameter being passed and reurn the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. */

/**Example: test Cases 
 * Input : "Hello apple pie"
 * Output: Hello
 * 
 * Input: "No words"
 * Output: -1
 */

 function LetterCount(str){

    let splitwords = str.split(" ");
    let tempgreatest = 0;
    let greatestword;

    for(let i = 0; i < splitwords.length; i++){
        let eachword = splitwords[i];
        for(let j = 0; j < eachword.length; j++){
            let pattern = new RegExp(eachword[j], "gi");
            let lenCount = eachword.match(pattern).length;
            if(lenCount > 1 && lenCount > tempgreatest){
                tempgreatest = eachword.match(pattern).length;
                greatestword = eachword;
            }
        }
    }
    return greatestword ? greatestword : -1;

 }

 console.log(LetterCount("Hello apple pie"));
 console.log(LetterCount("No Words"));