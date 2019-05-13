import makeUser from '../src/home/make-user.js';
const test = QUnit.test;

QUnit.testStart(() => {
    sessionStorage.clear();
});

test('return a user as an object', (assert) => {
    // arrange
    const formData = new FormData();
    formData.set('name', 'danny');
    formData.set('race', 'human');

    const expected = {
        name: 'danny',
        race: 'human',
        level: 1,
        exp: 0,
        hp: 20
        
    };
    // act
    const user = makeUser(formData);

    // assert
    assert.deepEqual(user, expected);
});