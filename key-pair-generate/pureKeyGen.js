const ecc = require('eosjs-ecc');

(async () => {
  const privKey = await ecc.randomKey();
  console.log('Private key:\t', privKey);
  console.log('Public key:\t', ecc.privateToPublic(privKey))
})();