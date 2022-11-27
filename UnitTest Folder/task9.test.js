

const toUpperCase=require('../Task9')

test('should be uppercase', ()=>{
    const A=toUpperCase('The quick brown fox jumps over the lazy dog.')
    expect(A).toBe('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.')
})