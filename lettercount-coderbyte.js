

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