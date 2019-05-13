import api from '../services/api.js';

function loadProfile() {
    const character = document.getElementById('name');
    const race = document.getElementById('race');
    const level = document.getElementById('level');
    const exp = document.getElementById('exp');
    const hp = document.getElementById('hp');

    const user = api.getUser();

    if(!user) {
        window.location = './';
    }

    character.textContent = user.name;
    race.textContent = user.race;
    level.textContent = user.level;
    exp.textContent = user.exp;
    hp.textContent = user.hp;
}
export default loadProfile;