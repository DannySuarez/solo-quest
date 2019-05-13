import api from '../services/api.js';
import createChoice from '../quest/create-choice.js';
import loadProfile from '../services/load-profile.js';

loadProfile();


//read the id from query using URLSearchParams
const searchParams = new URLSearchParams(window.location.search);
const challengeId = searchParams.get('id');
const challenge = api.getQuest(challengeId);

const title = document.getElementById('new-title');
const image = document.getElementById('image');
const description = document.getElementById('description');
const choiceForm = document.getElementById('choice-form');
const responses = document.getElementById('potential-responses');
const resultDescription = document.getElementById('result-description');

title.textContent = challenge.title;
image.src = '../../assets/' + challenge.image;
description.textContent = challenge.description;

for(let i = 0; i < challenge.choices.length; i++) {
    const choice = challenge.choices[i];
    const options = createChoice(choice);
    responses.appendChild(options);
}

choiceForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(choiceForm);
    const choiceId = formData.get('choices');
    
    for(let i = 0; i < challenge.choices.length; i++){
        const choice = challenge.choices[i];
        if(choice.id === choiceId){
            resultDescription.textContent = choice.result;
            loadProfile();     
        }
    }
});