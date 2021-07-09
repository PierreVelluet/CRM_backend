async function getUser(client, userName) {
    console.log(userName)
    const result = await client.db("TripHelper").collection("Users").findOne({ user: userName });
    if (result) {
        console.log(`Found a user with the name of '${userName}':`);
        console.log(result);
    } else {
        console.log(`No user found with the name of '${userName}'`);
    }
}

module.exports = {
    getUser
}