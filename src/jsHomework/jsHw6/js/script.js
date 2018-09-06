function createNewUser() {

    let user = {
        firstName : prompt("Enter First Name:", "anonym"),
        lastName : prompt("Enter Last Name:", "incognito"),
        getLogin : function () {
            return this.firstName.charAt(0).toLowerCase() + this.lastName;
        }
    };
    return user;
}

console.log(createNewUser().getLogin());