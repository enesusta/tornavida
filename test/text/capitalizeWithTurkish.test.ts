import { capitalizeWithTurkish } from '../../src/text/capitalizeWithTurkish';

test('Should return "Şanlıurfa"', () => {
    expect(capitalizeWithTurkish('şanlıurfa')).toBe('Şanlıurfa');
});