function greeter(person) {
    return 'Hello, ' + person.firstName + ' ' + person.lastName;
}
var user = { lastName: 'User', firstName: 'Jane', tt: 'uu' };
document.body.textContent = greeter(user);
