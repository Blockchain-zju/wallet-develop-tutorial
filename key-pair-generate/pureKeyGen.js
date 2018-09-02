const ecc = require('eosjs-ecc');

async function genKeyPair() {
  const privKey = await ecc.randomKey();
  console.log('Private key:\t', privKey);
  console.log('Public key:\t', ecc.privateToPublic(privKey))
}

(async () => {
  genKeyPair()
})();