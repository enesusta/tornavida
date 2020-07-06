import isArraysEqual from '../../src/util/isArraysEqual';

test('Should return false given obj arrays has not same objects', () => {
    const objectArrOne = [
        {id: 1, name: 'Enes'}
    ];
    const objectArrTwo = [
        {id: 2, name: 'Enes'}
    ]
    expect(isArraysEqual(objectArrOne, objectArrTwo)).toBe(false);
});

test('Should return false given obj arrays has not same length', () => {

    const arrOne = [1,2,3];
    const arrTwo = [1,2,3,4];


    expect(isArraysEqual(arrOne, arrTwo)).toBe(false);
});

test('Should return true', () => {

    const arrOne = [1,2,3];
    const arrTwo = [1,2,3];


    expect(isArraysEqual(arrOne, arrTwo)).toBe(true);
});

/*
test('Should return false if arrays are either null', () => {

    const arrOne = null;
    const arrTwo = null;

    expect(isArraysEqual(arrOne, arrTwo)).toBe(false);
});
*/
