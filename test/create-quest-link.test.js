import createQuestLink from '../src/map/create-quest-link.js';
const test = QUnit.test;

QUnit.testStart(() => {
    sessionStorage.clear();
});

test('take in a quest object & return a DOM link for quest, append to list', assert => {
    //arrange
    const quest = {
        id: 'newHouse'
    };

    //act
    const expected = '<a href="quest.html?id=newHouse"></a>';
    const dom = createQuestLink(quest);
    //assert
    assert.deepEqual(dom.outerHTML, expected);

});
