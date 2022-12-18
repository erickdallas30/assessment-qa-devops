const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    let Arr = shuffleArray([1,2,3,4,5])
    test('Check if shuffleArray returns a value type of array', () => {
        expect(Array.isArray(Arr)).toBe(true)
    })
    
    test('Check if shuffleArray returns the same array length as the argument sent in', () => {
        expect(Arr).toHaveLength(5)
    })
})