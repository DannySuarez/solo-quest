function makeUser(formData){
    const user = {
        name: formData.get('name'),
        race: formData.get('race'),
        level: 1,
        exp: 0,
        hp: 20
    };
    return user;
}
export default makeUser;