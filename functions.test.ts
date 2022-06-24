const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    // CODE HERE
    test("Shuffle array test", () =>{
        expect(shuffleArray([1,2,3,4,5])).toContain(1)
        expect(shuffleArray([1,2,3,4,5])).toContain(2)
        expect(shuffleArray([1,2,3,4,5])).toContain(3)
        expect(shuffleArray([1,2,3,4,5])).toContain(4)
        expect(shuffleArray([1,2,3,4,5])).toContain(5)
         
    })
    test("Randomized numbers", () =>{
    var shuffledArray = shuffleArray([1,2,3,4,5])
        expect(shuffledArray[0]).not.toBe(1)
    })
})

