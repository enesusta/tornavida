export const isPrimitiveArraysEqual = (arr1: (string|number|boolean)[]
     , arr2: (string|number|boolean)[]) : Boolean => {
    return JSON.stringify(arr1) == JSON.stringify(arr2);
}