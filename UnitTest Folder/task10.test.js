

const sentenceCase=require('../Task10')

test('should be sentenceCase', ()=>{
    const A=sentenceCase('the quick brown fox jumps over the lazy dog. the cat is yellow in market')
    expect(A).toBe('The quick brown fox jumps over the lazy dog.')
})