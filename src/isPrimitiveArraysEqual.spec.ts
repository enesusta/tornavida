import { isPrimitiveArraysEqual } from './isPrimitiveArraysEqual';


test('Should return false given boolean arrays has not same primitive values', () => {
    expect(isPrimitiveArraysEqual([true,false,false], [true,false,true])).toBe(false)
});

test('Shoud return false given number arrays has not same primitive values', () => {
    expect(isPrimitiveArraysEqual([1,1,1],[1,2,1])).toBe(false);
});

test('Shoud return false given string arrays has not same primitive values', () => {
    expect(isPrimitiveArraysEqual(["a","a","a"],["b","a","a"])).toBe(false);
})