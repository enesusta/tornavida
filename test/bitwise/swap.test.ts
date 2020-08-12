import swap from '../../src/bitwise/swap';

test('Swap test', () => {

    const obj = {
        x: 10,
        y: 20
    };

    swap(obj, 'x', 'y');

    expect(obj.x).toBe(20);
    expect(obj.y).toBe(10);

    console.log(obj);
    
});