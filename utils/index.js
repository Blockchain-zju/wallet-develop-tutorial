const ecc = require('eosjs-ecc');

async function genKeyPair() {
  const privKey = await ecc.randomKey();
  return {
    privKey,
    pubKey: ecc.privateToPublic(privKey)
  }
}

exports.genKeyPair = genKeyPair;