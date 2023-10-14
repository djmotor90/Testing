const { reverseString } = require('../utils');

describe('utils', () =>{
    test('reverse string', () =>{
        const val = reverseString('taco')
        expect(val).toBe('ocat')
    })
})