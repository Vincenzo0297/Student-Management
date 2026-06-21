class user {
    constructor(name, age, email, number){
        this.name = name;
        this.age = age;
        this.email = email;
        this.number = number;
    }

    getName() {
       return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getAge() {
        return this.age;
    }

    setAge(age) {
        this.age = age;
    }

    getEmail() {
        return this.email;
    }

    setEmail(email) {
        this.email = email;
    }

    getNumber() {
        return this.number;
    }

    setNumber(number) {
        this.number = number;
    }
}

module.exports = user;