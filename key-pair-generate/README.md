# EOS公私钥生成指南
公私钥生成主要使用官方提供的[js-sdk](https://github.com/EOSIO/eosjs-ecc)
## 原理
### 助记词
助记词是明文私钥的另一种表现形式, 最早是由 BIP39 提案提出, 其目的是为了帮助用户记忆复杂的私钥 (64位的哈希值)。助记词一般由12、15、18、21个单词构成, 这些单词都取自一个固定词库, 其生成顺序也是按照一定算法而来, 所以用户没必要担心随便输入 12 个单词就会生成一个地址。虽然助记词和 Keystore 都可以作为私钥的另一种表现形式, 但与 Keystore 不同的是, 助记词是未经加密的私钥, 没有任何安全性可言, 任何人得到了你的助记词, 可以不费吹灰之力的夺走你的资产。所以在用户在备份助记词之后, 一定要注意三点:
 
1. 尽可能采用物理介质备份, 例如用笔抄在纸上等, 尽可能不要采用截屏或者拍照之后放在联网的设备里, 以防被黑客窃取;
2. 多次验证备份的助记词是否正确, 一旦抄错一两个单词, 那么将对后续找回正确的助记词带来巨大的困难;
3. 将备份后的助记词妥善保管, 做好防盗防丢措施。
 
 **助记词等于私钥，绝对不能泄露。**
 
## 例子
### 纯公私钥生成
[demo](./pureKeyGen.js)

### 带有助记词的公私钥生成
[demo](./mnemonicsKeyGen.js)

## Wallet中使用私钥的正确姿势
- **私钥存在前端，并由对称密钥（创建或导入钱包时用户自定义的字符串）加密，永不触网。**
- 用户可使用助记词或私钥明文恢复钱包。
- 签名过程在前端，私钥不允许出现在各种形式的网络请求中。