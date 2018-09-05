const {Aes} = require('eosjs-ecc');
const {genKeyPair} = require('../utils');

(async () => {
  const keyPair = await genKeyPair();
  const plain = "i love zjubca";
  const {nonce, message, checksum} = await Aes.encrypt(keyPair.privKey, keyPair.pubKey, plain, "123");
  console.log(`encrypt nonce ${nonce}, message ${message.toString('hex')}, checksum ${checksum}`);
  const hex = message.toString('hex')
  const deText = await Aes.decrypt(keyPair.privKey, keyPair.pubKey, nonce, Buffer.from(hex, 'hex'), checksum);
  console.log('decrypt text: \t', deText.toString())
})();