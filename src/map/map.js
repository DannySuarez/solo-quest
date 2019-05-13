import api from '../services/api.js';
import createQuestLink from './create-quest-link.js';
import loadProfile from '../services/load-profile.js';

loadProfile();

const challenges = api.getQuests();

const nav = document.getElementById('challenges');

for(let i = 0; i < challenges.length; i++) {
    const challenge = challenges[i];
    const link = createQuestLink(challenge);
    nav.appendChild(link);
}