import api from '../services/api.js';

const character = document.getElementById('name');
const race = document.getElementById('race');
const level = document.getElementById('level');
const gold = document.getElementById('gold');

const user = api.getUser();

if(!user) {
    window.location = './';
}

character.textContent = user.name;
race.textContent = user.race;
level.textContent = user.level;
gold.textContent = user.gold;
console.log(character);