module.exports = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.greetHello = function () {
    return 'Hello, ' + this.firstName + this.lastName + '.';
  };
  this.greetCongrats = function () {
    return 'Congrats, ' + this.firstName + this.lastName + '.';
  };
  this.greetGoodbye = function () {
    return 'Goodbye, ' + this.firstName + this.lastName + '.';
  };
};
