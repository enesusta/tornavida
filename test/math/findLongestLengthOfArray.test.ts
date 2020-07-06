import findLongestLengthFieldOfArray from '../../src/math/findLongestLengthFieldOfArray';

test('Should return 10', () => {

    const obj = [
        {
            a: 5
        },
        {
            a: 10
        }
    ]

    expect(findLongestLengthFieldOfArray(obj, 'a')).toBe(10);
})
