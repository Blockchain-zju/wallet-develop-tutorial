const {PrivateKey} = require('eosjs-ecc');
const bip39 = require('bip39');

// 生成助记词
function genMnemonics() {
  // 根据BIP39协议，随机生成助记词
  const mnemonics = bip39.generateMnemonic();
  console.log("mnemonics:\t", mnemonics);
  return mnemonics
}

// 使用助记词恢复私钥
function privKeyRecover(mnemonics) {
  // 通过助记词提取seed
  let seed = bip39.mnemonicToSeed(mnemonics);
  // console.log(seed)
  // 使用种子生成私钥。使用相同的种子能够生成相同的私钥。
  let privKey = PrivateKey.fromSeed(seed.toString());
  console.log('Private key:\t', privKey.toString());
  console.log('Public key:\t', PrivateKey.fromString(privKey.toString()).toPublic().toString())
}

(() => {
  const mnemonics = genMnemonics();
  privKeyRecover(mnemonics)
})();