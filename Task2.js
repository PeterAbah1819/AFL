//AFL Task 2

const power=(number,exp)=>{
    while(exp>1){
        number *=number
        --exp
    }
    console.log(number)
    return number
}


module.exports=power