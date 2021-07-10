//Read
async function getUser(client, userName) {
    const result = await client
        .db(process.env.DB_NAME)
        .collection("Users")
        .findOne({ user: userName });
    if (result) {
        return result;
    } else {
        console.log(`No user found with the name of '${userName}'`);
    }
}

//Create
async function createUser(client, newUser) {
    const result = await client
        .db(process.env.DB_NAME)
        .collection("Users")
        .insertOne(newUser);

    if (result) {
        return result;
    } else {
        console.log(`There was an error creating an user`);
    }
}

//Update
async function updateUser(client, userName, updatedUser) {
    const result = await client
        .db(process.env.DB_NAME)
        .collection("Users")
        .updateOne({ user: userName }, { $set: updatedUser });

    if (result) {
        return result;
    } else {
        console.log(`There was an error updating user ${userName}`);
    }
}

//Delete
async function deleteUser(client, userName) {
    const result = await client
        .db(process.env.DB_NAME)
        .collection("Users")
        .deleteOne({ user: userName });

    if (result) {
        return result;
    } else {
        console.log(`There was an error updating an user'`);
    }
}

module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
};
