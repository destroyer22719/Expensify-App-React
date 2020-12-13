const add = (a, b) => a + b;

test('should add 2 numbers', () => {
  const result = add(1, 1);
  expect(result).toBe(2);
});
