var registeredUsers = []; // this array stores valid usernames until the next pageload

function validateForm(e) {
  e.preventDefault(); // stop the submit button from refreshing the page
  console.log("validating....");

  console.log("user name: " + validateUsername());
  console.log("email: " + validateEmail());
  console.log("password: " + validatePassword());

  if (validateUsername() && validateEmail() && validatePassword()) {
    var _newUser = {
      firstname: getFirstName(),
      lastname: getLastName(),
      username: getUserName(),
      phonenumber: getPhoneNumber(),
      email: getEmail(),
    };
    registeredUsers.push(_newUser);

    if (registeredUsers.length > 5) {
      registeredUsers.shift();
    }

    document.getElementById("registered-users").innerHTML = "";

    renderRegisteredUsers();
    document.registration.reset(); // reset form input fields
  }
}

function renderRegisteredUsers() {
  registeredUsers.forEach(function (registeredUser) {
    var _newUserName = document.createElement("li");
    _newUserName.innerHTML = "Username: " + registeredUser.username;
    document.getElementById("registered-users").appendChild(_newUserName);

    var _newFirstName = document.createElement("li");
    _newFirstName.innerHTML = "First name: " + registeredUser.firstname;
    document.getElementById("registered-users").appendChild(_newFirstName);

    var _newLastName = document.createElement("li");
    _newLastName.innerHTML = "Last name: " + registeredUser.lastname;
    document.getElementById("registered-users").appendChild(_newLastName);

    var _newEmail = document.createElement("li");
    _newEmail.innerHTML = "Email: " + registeredUser.email;
    document.getElementById("registered-users").appendChild(_newEmail);

    var _newPhoneNumber = document.createElement("li");
    _newPhoneNumber.innerHTML = "Phonenumber: " + registeredUser.phonenumber;
    document.getElementById("registered-users").appendChild(_newPhoneNumber);
  });
}

/**
 * this function supposely validates submitted username
 * @returns [Boolean] true when valid, false otherwise
 */
function validateUsername() {
  var _userName = getUserName();

  return !checkSpace(_userName);
}

/**
 * this function supposely validates submitted first name
 * @returns [Boolean] true when valid, false otherwise
 */

function validateFirstname() {
  var _firstName = getFirstName();

  return _firstName != "";
}

/**
 * this function supposely validates submitted lastname
 * @returns [Boolean] true when valid, false otherwise
 */

function validateLastname() {
  var _lastName = getLastName();

  return _lastName != "";
}

/**
 * this function supposely validates submitted phonenumber
 * @returns [Boolean] true when valid, false otherwise
 */

function validatePhoneNumber() {
  var _phoneNumber = getPhoneNumber();

  return !isNaN(_phoneNumber) && _phoneNumber.length > 5;
}

/**
 * this function supposely validates submitted email
 * @returns [Boolean] true when valid, false otherwise
 */
function validateEmail() {
  var _email = getEmail();
  if (checkSpace(_email) === true) {
    return false;
  }

  // check for @
  var atSymbol = _email.indexOf("@");
  if (atSymbol < 1) {
    return false;
  }

  // check if there is a dot located less than 2 symbols away from the @ sign
  var dot = _email.indexOf(".");
  if (dot <= atSymbol + 2) {
    return false;
  }

  // check that the dot is not at the end
  if (dot === _email.length - 1) {
    return false;
  }
  return true;
}

/**
 * this function supposely validates submitted password
 * if password and confirmPassword do not match, return false
 *
 * @returns [Boolean] true when valid, false otherwise
 */
function validatePassword() {
  var _password = getPassword();
  var _confirmPassword = getConfirmPassword();

  if (_password !== _confirmPassword) {
    return false;
  }

  if (_password.length < 8) {
    return false;
  }

  if (_password == _password.toLowerCase()) {
    return false;
  }

  if (!/\d/.test(_password)) {
    return false;
  }

  return true;
}

/**
 * this function supposely checks whether the sample is an empty string
 * or there is space within it
 * @param [String] sample text to be evaluated
 * @returns [Boolean] true when valid, false otherwise
 */
function checkSpace(sample) {
  return sample === "" || sample.indexOf(" ") > -1;
}

/**
 * this function looks under the form with name "registration"
 * look under the "username" input field and returns the value of it
 * returns nothing if no value is found
 *
 * @returns [Boolean] true when valid, false otherwise
 */
function getUserName() {
  if (typeof document.registration.username.value === "undefined") {
    return "";
  } else {
    return document.registration.username.value;
  }
}

function getFirstName() {
  if (typeof document.registration.firstname.value === "undefined") {
    return "";
  } else {
    return document.registration.firstname.value;
  }
}

function getLastName() {
  if (typeof document.registration.lastname.value === "undefined") {
    return "";
  } else {
    return document.registration.lastname.value;
  }
}

function getPhoneNumber() {
  if (typeof document.registration.phonenumber.value === "undefined") {
    return "";
  } else {
    return document.registration.phonenumber.value;
  }
}

function getEmail() {
  if (typeof document.registration.email.value === "undefined") {
    return "";
  } else {
    return document.registration.email.value;
  }
}

function getPassword() {
  if (typeof document.registration.password.value === "undefined") {
    return "";
  } else {
    return document.registration.password.value;
  }
}

function getConfirmPassword() {
  if (typeof document.registration.password_confirm.value === "undefined") {
    return "";
  } else {
    return document.registration.password_confirm.value;
  }
}
