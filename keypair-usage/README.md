# 公私钥使用指南
在区块链系统中，公私钥主要有两个用途：
1. 加解密
2. 数字签名与验签

## eosjs-ecc API补充
官方文档中未给出加解密的API，在这里给出。
加解密功能主要由`Aes`模块提供。

### encrypt
**Parameters**
- `privKey` 私钥
- `pubKey` 公钥
- `message` 明文字符串
- `nonce` 一个随机值

**Return**
- `nonce` 所使用的随机值，**解密时会用到**
- `message` Buffer类型的密文
- `checksum` 校验和，**解密时会用到**

### decrypt
**Parameters**
- `privKey` 私钥
- `pubKey` 公钥
- `nonce` 一个随机值
- `message` 密文，即`encrypt`函数返回的message
- `checksum` 校验和

**Return**
- `message` Buffer类型的明文