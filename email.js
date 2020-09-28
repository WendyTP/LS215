/*
Question: a function that checks whether an email address is valid. - return true/ false
algo:
  - check if @ sign exisit and only one exist
  - split address by @
  - local part: contains only letters or/and digits
  - domain part: contains letters and one single dot
*/

function isValidEmail(email) {

  if (!email.match(/@/)) {
    console.log('false')
    return false;
  }

  let localPart = email.split('@')[0];
  let domainPart = email.split('@')[1];

  if (!localPart.match(/^[a-z0-9]+$/i)) {
    return false;
  }

  if (!domainPart.match(/^([a-z]+\.[a-z]+)+$/i)) {
    return false;
  }

  return true;
}



console.log(isValidEmail('Foo@baz.com.ph'));
console.log(isValidEmail('Foo@mx.baz.com.ph'));
console.log(isValidEmail('foo@baz.com'));
console.log(isValidEmail('foo@baz.ph'));
console.log(isValidEmail('HELLO123@baz'));
console.log(isValidEmail('foo.bar@baz.to'));
console.log(isValidEmail('foo@baz.'));
console.log(isValidEmail('foo_bat@baz'));
console.log(isValidEmail('foo@bar.a12'));
console.log(isValidEmail('foo_bar@baz.com'));
console.log(isValidEmail('foo@bar.....com'));
