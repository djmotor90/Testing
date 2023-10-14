

const { sum, subtract, multiply } = require('../math')
describe('Math', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
  test('subtract 5 from 10', () => {
    const difference = subtract(10, 5)
    expect(difference).toBe(5)
  })
  test('multiply 5*2 and get 10', () => {
    const product = multiply(5, 2)
    expect(product).toBe(10)
  })
})