async function getUser(client, userName) {
    const result = await client
        .db("TripHelper")
        .collection("Users")
        .findOne({ user: userName });
    if (result) {
        return result;
    } else {
        console.log(`No user found with the name of '${userName}'`);
    }
}

module.exports = {
    getUser
};
