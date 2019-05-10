import api from '../src/services/api.js';
import createChoice from '../src/quest/create-choice.js';

const test = QUnit.test;

QUnit.module('create choice');
api.storage = sessionStorage;
QUnit.testStart(() => {
    sessionStorage.clear();
});

test('take quest choice object, return it to DOM, append to form', (assert) => {
    //arrange
    const choice = {
        id: 'scare',
        description: 'You approach the monster and try to console it.' 
        
    };
    //act
    const expected = '<label for="choice1">You approach the monster and try to console it.<input type="radio" id="choice1" name="choices" value="scare" required=""></label>';
    const dom = createChoice(choice);

    //assert
    assert.deepEqual(dom.outerHTML, expected);

});