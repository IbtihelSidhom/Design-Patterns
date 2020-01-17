class User {
    constructor(id, name) {
        this.id = id
        this.name = name
    }

    hasAccess() {
        return this.name === 'Bob'
    }
}

/*
    This is the null version of the object we're trying to represent.
    The constructor doesn't take any id of name because it will have default properties.
*/
class NullUser {
    constructor() {
        this.id = -1
        this.name = 'Guest'
    }

    hasAccess() {
        return false
    }
}

const users = [
    new User(1, 'Bob'),
    new User(2, 'Jhon')
]

function getUser(id) {
    const user = users.find(user => user.id === id)
    if (user == null) {
        return new NullUser()
    } else {
        return user
    }
}

function printUser(id) {
    const user = getUser(id)

    console.log('Hello ' + user.name)

    if (user.hasAccess()) {
        console.log('You have access')
    } else {
        console.log('You are not alowed here')
    }
}


