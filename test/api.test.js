import questData from '../src/services/quest-data.js';
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

test('return quest data', (assert) => {
    //arrange
    const expected = questData;

    //act
    const quests = api.getQuests();

    //assert
    assert.deepEqual(quests, expected);

});

test('take in a quest id and return corresponding quest', (assert) => {
        // arrange
    const expectedQuest = questData[1];
    // act
    const foundQuest = api.getQuest(expectedQuest.id);
    // assert
    assert.deepEqual(foundQuest, expectedQuest);

});