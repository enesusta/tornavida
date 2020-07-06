export default function isArraysEqual(arrayOne: (any | null)[],
                                      arrayTwo: (any | null)[]) {
  if (arrayOne === arrayTwo) return true;
  if (arrayOne == null || arrayTwo == null) return false;
  if (arrayOne.length != arrayTwo.length) return false;

  for (let index = 0; index < arrayOne.length; index++)
    if (arrayOne[index] !== arrayTwo[index]) return false;

  return true;
};
