import api from '../src/services/api.js';
const test = QUnit.test;

QUnit.module('api');
api.storage = sessionStorage;
QUnit.testStart(() => {
    sessionStorage.clear();
});

test('a test that calls signUp with user object, then calls getUser and asserts that those results are what you expect using deepEqual against original user object', (assert) => {
    // arrange
    const user = { name: 'danny' };

    // act
    api.signUp(user);
    const result = api.getUser();

    // assert
    assert.deepEqual(result, user);
});