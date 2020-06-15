import { isArraysEqual } from './isArraysEqual';

test('Should return false given obj arrays has not same objects', () => {
    const objectArrOne = [
        {id: 1, name: 'Enes'}
    ];
    const objectArrTwo = [
        {id: 2, name: 'Enes'}
    ]
    expect(isArraysEqual(objectArrOne, objectArrTwo)).toBe(false);
})