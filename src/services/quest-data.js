const newHouse = {
    id: 'newHouse',
    title: 'Welcome Home',
    image: 'room.png',
    description: `You wake up in an unfamiliar room with no memory of how you got here.
                    The room is decorated with toys that don't look like they have been played with for years.
                    You look around and realize you like this room.`,

    choices: [{ 
        id: 'leave',
        description: 'Leave the room and explore.',
        result: `After wandering around the house you find the front door and decide to leave`,
        hp: 0,
        level: 0,
        exp: 0
    }, {
        id: 'stay',
        description: 'Stay and play with the toys.',
        result: `You decide to have some fun and play with the toys. After a few minutes of playing you start to feel ill. 
                    The toys were a trap! They were poisoned and now your health has gone down.`,
        hp: -15,
        level: 0,
        exp: 0
    }, {
        id: 'cry',
        description: 'Cry and ask for your mom.',
        result: `Your crys draw the attention of monsters who decide they want to have some fun.`,
        hp: -8,
        level: 0,
        exp: 0
    }]
};

const outside = {
    id: 'outside',
    title: 'A New World',
    image: 'whimsun.jpg',
    description: `You follow the only path in this world and soon encounter a sad looking monster.
                    What will you do?`,
    
    choices: [{
        id: 'console',
        description: `You approach the monster and try to console it.`,
        result: `You attempt to talk to the monster but as soon as you speak it gets frightened.
                    The monster thinks you're a jerk and runs away.`,
        hp: 0,
        level: 0,
        exp: 0
    }, {
        id: 'scare',
        description: `You're no fool. This monster is faking it and you decide to try and scare it.`,
        result: `You make a mean looking face and raise your arms. The monster runs away in fear and you're a jerk`,
        hp: -5,
        level: 0,
        exp: 1
    }, {
        id: 'attack',
        description: `You go in for an attack. It's either you or him after all.`,
        result: `The monster dies in one punch and drops a picture of his lovely family.
                    You feel terrible for what you've done but you continue on`,
        hp: 0,
        level: 1,
        exp: 2
    }]
};

const challenges = [newHouse, outside];

export default challenges;