import sortDescByField from '../../src/util/sortDescByField';

test('Should return 15', () => {
    const arr = [
        {id: 10, text: '10'},
        {id: 15, text: '15'}
    ]
    expect(sortDescByField(arr,'id')[0].text).toBe('15');
});

test('Should return 25', () => {
    const arr = [
        {id: 10, text: '10'},
        {id: 15, text: '15'},
        {id: 25, text: '25'}
    ]
    expect(sortDescByField(arr,'id')[2].text).toBe('10');
})
