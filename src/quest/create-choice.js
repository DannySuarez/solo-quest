function createChoice(choice) {
    const label = document.createElement('label');
    const input = document.createElement('input');

    label.setAttribute('for', 'choice1');
    input.type = 'radio';
    input.id = 'choice1';
    input.name = 'choices';
    input.value = choice.id;
    input.required = true;

    label.textContent = choice.description;
    label.appendChild(input);

    return label;
}
export default createChoice;