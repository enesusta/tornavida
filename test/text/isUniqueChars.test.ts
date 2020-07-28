import { isUniqueChars } from '../../src/text';

test('Should return false', () => {
    expect(isUniqueChars('enes')).toBe(false);
});
