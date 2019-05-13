import api from '../src/services/api.js';
import scoreQuest from '../src/quest/score-quest.js';

const test = QUnit.test;
QUnit.module('score-quest');
api.storage = sessionStorage;

test('test to return updated user profile', (assert) => {
    //arrange
    const user = { 
        hp: 20,
        level: 1,
        exp: 0
    };

    const userChoice = {
        hp: -10,
        level:2,
        exp: 2
    }; 

    //act
    const newUser = scoreQuest(userChoice, user,);
    const result = {  
        hp: 10,
        level: 3,
        exp: 2
    };

    //assert
    assert.deepEqual(newUser, result);
});
