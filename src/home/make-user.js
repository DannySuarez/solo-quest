function makeUser(formData){

    const user = {
        name: formData.get('name'),
        race: formData.get('race'),
        level: 1,
        gold: 20
    };
    return user;
}
export default makeUser;