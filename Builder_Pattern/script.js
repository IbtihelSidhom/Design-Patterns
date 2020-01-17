class Address {
    constructor(zip, street) {
        this.zip = zip
        this.street = street
    }
}

class User {
    constructor(name) {
        this.name = name
    }
}

class UserBuilder {
    constructor(name) {
        this.user = new User(name)
    }

    setAge(age) {
        this.user.age = age
        return this          //Returns the bUilder back, this would allow us to chain the methods together
    }

    setPhone(phone) {
        this.user.phone = phone
        return this          
    }

    setAddress(address) {
        this.user.address = address
        return this          
    }

    build() {
        return this.user
    }
}

//let user = new UserBuilder('Bob').build()
//let user = new UserBuilder('Bob').setAge(22).build()
let user = new UserBuilder('Bob').setAge(22).setPhone('21548435').build()


console.log(user)