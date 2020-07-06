import isOdd from '../../src/util/isOdd';

test('Should return false', () => {
    expect(isOdd(10)).toBe(false);
});
