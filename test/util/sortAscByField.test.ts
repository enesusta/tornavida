import sortAscByField from '../../src/util/sortAscByField';

test('Should return 10', () => {
    const arr = [
        {id: 10, text: '10'},
        {id: 15, text: '15'}
    ]
    expect(sortAscByField(arr,'id')[0].text).toBe('10');
});

test('Should return 10', () => {
    const arr = [
        {id: 10, text: '10'},
        {id: 15, text: '15'},
        {id: 25, text: '25'}
    ]
    expect(sortAscByField(arr,'id')[2].text).toBe('25');
})
