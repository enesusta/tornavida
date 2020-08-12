import isOdd from '../../src/bitwise/isOdd';

test('Should return true',() => {
    expect(isOdd(3)).toBe(true);
});

test('should return false', () => {
    expect(isOdd(14)).toBe(false);
});