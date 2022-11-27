//AFL Task 10



const sentenceCase=(str)=>{
    let sentence=str.split('. ')
    console.log(sentence)
    let result=''
    for (const key in sentence) {
        let words=sentence[key]
        if (words.length>0){
            result+=sentence[key].charAt(0).toUpperCase() + sentence[key].slice(1);
            if (sentence.length>1 && sentence.indexOf(words) !== -1){
                result+='. '
            }
        }
        
    }
    return result
}
module.exports=sentenceCase

