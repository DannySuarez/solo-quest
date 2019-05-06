const test = QUnit.test;

// QUnit.testStart(() => {
//     sessionStorage.clear();
// });

function makeUser(formData){

    const user = {
        name: formData.get('name'),
        race: formData.get('race'),
        level: 1,
        gold: 20
    };
    return user;
}


test('return a user as an object', (assert) => {
    // arrange
    const formData = new FormData();
    formData.set('name', 'danny');
    formData.set('race', 'human');

    const expected = {
        name: 'danny',
        race: 'human',
        level: 1,
        gold: 20
    };
    // act
    const user = makeUser(formData)

    // assert
    assert.deepEqual(user, expected);
});