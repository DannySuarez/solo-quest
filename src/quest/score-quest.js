function scoreQuest(userChoice, user) {
    user.hp = user.hp + userChoice.hp;
    user.level = userChoice.level + user.level;
    user.exp = userChoice.exp + user.exp;
    return user;
}
export default scoreQuest;