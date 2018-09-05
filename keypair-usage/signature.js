const ecc = require('eosjs-ecc');
const {genKeyPair} = require('../utils');

(async () => {
  const plain = "i love zjubca";
  const keyPair = await genKeyPair();

  // generate signature
  const signature = ecc.sign(plain, keyPair.privKey);
  console.log('signature: \t', signature);

  //verify signature
  if (ecc.verify(signature, plain, keyPair.pubKey)) {
    console.log('verify signature success!')
  }

  // recover public key and verify
  if (ecc.recover(signature, plain) === keyPair.pubKey) {
    console.log('recover public key success!')
  }
})();