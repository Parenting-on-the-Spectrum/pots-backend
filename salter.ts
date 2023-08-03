const generatorSalt = (cookie: string) => {
  var saltArr = [];
  for (let i = 0; i < cookie.length; i++) {
    saltArr.push(Math.floor(Math.random() * cookie.length))
  }

  var result: string = '';
  const alphabet = 'qwertyuiopasdfghjklzxcvbnm';
  for (let i = 0; i < saltArr.length; i++) {
    if (i % 2 === 0) { // even -> number
      result += `${saltArr[i]}`
    } else { // odd -> letter
      result += alphabet[saltArr[i] % alphabet.length];
    }
  }
  return result;
};

const generatorHash = (cookie: string, salt: string) => {
  var result = '';
  for (let i = 0; i < cookie.length; i++) {
    if (cookie[i] !== '"' && cookie[i] !== '{' && cookie[i] !== '}' && cookie[i] !== ':') {
      result += `${cookie[i]}${Math.floor(Math.random() * cookie.length)}${salt[i]}`;
    }
  }
  return result;
};

const generateHashSession = (cookie: string) => {
  var result = '';
  const alphabet = 'qwertyuiopasdfghjklzxcvbnm';
  const num = '10293847456';
  for (let i = 0; i < cookie.length; i++) {
    result += cookie[i];
    if (i % 2 === 0) {
      result += num[i];
    } else {
      result += alphabet[i];
    }
  }
  return result;
}

generateHashSession('asdf')

module.exports = { generatorSalt, generatorHash, generateHashSession };