import fieldMax from '../../src/math/fieldMax';

test('Should return 10', () => {

    const obj = [
        {
            a: 5
        },
        {
            a: 10
        }
    ]

    expect(fieldMax(obj, 'a')).toBe(10);
})
