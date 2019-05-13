import questData from '../services/quest-data.js';
const api = { 
    storage: localStorage,

    signUp(user) {
        const json = JSON.stringify(user);
        api.storage.setItem('user', json);
    },
    getUser() {
        const json = api.storage.getItem('user');
        if(!json) return null;
        const user = JSON.parse(json);
        return user;
    },
    getQuests() {
        return questData;
    },
    getQuest(id) {
        const challenge = api.getQuests();
        for(let i = 0; i < challenge.length; i++) {
            const challengeId = challenge[i].id;
            if(challengeId === id) {
                return challenge[i];
            }
        }
    }
};

export default api;