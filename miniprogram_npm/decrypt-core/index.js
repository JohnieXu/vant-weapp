module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { __MODS__[modId].m.exports.__proto__ = m.exports.__proto__; Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; var desp = Object.getOwnPropertyDescriptor(m.exports, k); if(desp && desp.configurable) Object.defineProperty(m.exports, k, { set: function(val) { __MODS__[modId].m.exports[k] = val; }, get: function() { return __MODS__[modId].m.exports[k]; } }); }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1641193462449, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "decrypt", {
  enumerable: true,
  get: function get() {
    return _crypt.decrypt;
  }
});
Object.defineProperty(exports, "encrypt", {
  enumerable: true,
  get: function get() {
    return _crypt.encrypt;
  }
});

var _crypt = require("./crypt");
}, function(modId) {var map = {"./crypt":1641193462450}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1641193462450, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.encrypt = exports.decrypt = void 0;

var _crypto = require("./crypto");

// const { resolveContent, createContent } = require('./tripledes3.js')
var decrypt = function decrypt(data, appKey) {
  return (0, _crypto.resolveContent)(data, appKey);
};

exports.decrypt = decrypt;

var encrypt = function encrypt(data, appKey) {
  return (0, _crypto.createContent)(data, appKey);
};

exports.encrypt = encrypt;
}, function(modId) { var map = {"./crypto":1641193462451}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1641193462451, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createContent = createContent;
exports.decryptByDES = decryptByDES;
exports.encryptByDES = encryptByDES;
exports.resolveContent = resolveContent;

var _encHex = _interopRequireDefault(require("crypto-js/enc-hex"));

var _tripledes = _interopRequireDefault(require("crypto-js/tripledes"));

var _core = _interopRequireDefault(require("crypto-js/core"));

var _util = require("./util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-use-before-define */

/* eslint-disable no-param-reassign */

/* eslint-disable no-bitwise */

/* eslint-disable no-plusplus */

/* eslint-disable func-names */

/* eslint-disable no-underscore-dangle */
// const Hex = require('crypto-js/enc-hex')
// const TripleDES = require('crypto-js/tripledes')
// const Core = require('crypto-js/core')

/**
 * Electronic Codebook block mode.
 */
var CryptoECB = function () {
  var ECB = _core.default.lib.BlockCipherMode.extend();

  ECB.Encryptor = ECB.extend({
    processBlock: function processBlock(words, offset) {
      this._cipher.encryptBlock(words, offset);
    }
  });
  ECB.Decryptor = ECB.extend({
    processBlock: function processBlock(words, offset) {
      this._cipher.decryptBlock(words, offset);
    }
  });
  return ECB;
}();
/**
* A noop padding strategy.
*/


var NoPadding = {
  pad: function pad() {},
  unpad: function unpad() {}
}; // 加密

function encryptByDES(mpiKey, message, isSessionKey) {
  mpiKey += mpiKey.substring(0, 16); // console.log("秘钥："+mpiKey)
  // 转16进制
  // console.log(message)
  // 过程密钥不做填充

  if (!isSessionKey) {
    message = (0, _util.padding80)(message, true); // console.log('padding:'+message)
  }

  message = _encHex.default.parse(message); // console.log(`mpiKey: ${mpiKey}`)
  // console.log(`message: ${message}`)

  var keyHex = _encHex.default.parse(mpiKey);

  var encrypted = _tripledes.default.encrypt(message, keyHex, {
    mode: CryptoECB,
    padding: NoPadding
  }); // console.log("加密密文："+encrypted.ciphertext.toString().toUpperCase())


  return encrypted.ciphertext.toString().toUpperCase();
} // 3des解密


function decryptByDES(mpiKey, ciphertext) {
  // mpiKey = "77c3052b141a481dd2f377c51571812c"
  mpiKey += mpiKey.substring(0, 16);

  var keyHex = _encHex.default.parse(mpiKey);

  ciphertext = _encHex.default.parse(ciphertext); // direct decrypt ciphertext

  var decrypted = _tripledes.default.decrypt({
    ciphertext: ciphertext
  }, keyHex, {
    mode: CryptoECB,
    padding: NoPadding
  });

  var data = decrypted.toString(); // console.log(`data:${data}`)

  data = (0, _util.hexCharCodeToStr)(data); // console.log('data2:'+data)

  var num = data.lastIndexOf('80'); // 截取actionInfoString
  // 最后一个'80'出现的位置

  if (num !== -1) {
    data = data.substring(0, num);
  }

  var result = (0, _util.hexCharCodeToStr)(data);
  return result;
}
/**
* 创建加密报文
* @param config
*/


function createContent(config, appkey) {
  // 最终生成密文
  // 生成随机数
  var randData = (0, _util.s2as)(32); // console.log("随机数:"+randData)

  var mpiKey = appkey; // 获取过程密钥

  var processKey = encryptByDES(mpiKey, randData, true); // console.log("过程秘钥:"+processKey)
  // 加密ActionInfo
  // console.log('json明文:'+JSON.stringify(config))

  var src = (0, _util.strToHexCharCode)(JSON.stringify(config)); // console.log('16进制明文:'+src)

  var actionInfo = encryptByDES(processKey, src, false);
  var encStr = randData + actionInfo;
  return encStr;
} // 解析数据


function resolveContent(actionInfo, appkey) {
  var mpiKey = appkey; // 获取随机数

  var randData = actionInfo.substring(0, 32); // console.log(`de-randData : ${randData}`)
  // 获取应用密文

  var singData = actionInfo.substring(32, actionInfo.length); // console.log(`de-enData : ${singData}`)
  // 获取过程密钥

  var processKey = encryptByDES(mpiKey, randData, true); // console.log(`de-processKey : ${processKey}`)
  // 解密singData

  var actionInfoString = decryptByDES(processKey, singData); // console.log(`de-HexString : ${actionInfoString}`)
  // console.log(`actionInfoString:${actionInfoString}`)

  var res;

  try {
    res = JSON.parse(actionInfoString);
  } catch (e) {
    res = actionInfoString;
  } // console.log('parse json:'+json)


  return res;
}
}, function(modId) { var map = {"./util":1641193462452}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1641193462452, function(require, module, exports) {


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.byteToString = byteToString;
exports.hexCharCodeToStr = hexCharCodeToStr;
exports.hexDecode = hexDecode;
exports.hexEncode = hexEncode;
exports.padding80 = padding80;
exports.s2as = s2as;
exports.strToHexCharCode = strToHexCharCode;
exports.stringToByte = stringToByte;

/* eslint-disable no-use-before-define */

/* eslint-disable no-param-reassign */

/* eslint-disable no-underscore-dangle */

/* eslint-disable no-bitwise */

/* eslint-disable no-plusplus */
function s2as(length) {
  var strNumber = '';

  for (var i = 0; i < length; i++) {
    strNumber += (Math.floor(Math.random() * 10000) % 10).toString();
  }

  var result = '';

  for (var j = 0; j < strNumber.length; j++) {
    result += String.fromCharCode(strNumber.substring(j, j + 1).charCodeAt());
  }

  return result;
} // 字符串转16进制


function strToHexCharCode(str) {
  // 根据默认编码获取字节数组
  var bytes = stringToByte(str);
  var hexString = '0123456789abcdef';
  var sb = ''; // 将字节数组中每个字节拆解成2位16进制整数

  for (var i = 0; i < bytes.length; i++) {
    sb += hexString.charAt((bytes[i] & 0xf0) >> 4);
    sb += hexString.charAt((bytes[i] & 0x0f) >> 0);
  }

  return sb.toString();
} // 16进制转字符串


function hexCharCodeToStr(hexCharCodeStr) {
  var baos = [];
  var hexString = '0123456789abcdef'; // 将每2位16进制整数组装成一个字节

  for (var i = 0; i < hexCharCodeStr.length; i += 2) {
    baos.push(hexString.indexOf(hexCharCodeStr.charAt(i)) << 4 | hexString.indexOf(hexCharCodeStr.charAt(i + 1)));
  }

  return byteToString(baos);
} // 补80


function padding80(data) {
  var toHex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var padlen = 8 - data.length / 2 % 8;
  var padstr = '';

  for (var i = 0; i < padlen - 1; i++) {
    padstr += '00';
  }

  data = "".concat(data, "80").concat(padstr);
  data = toHex ? strToHexCharCode(data) : data;
  return data;
} // 字节转string


function byteToString(arr) {
  if (typeof arr === 'string') {
    return arr;
  }

  var str = '';
  var _arr = arr;

  for (var i = 0; i < _arr.length; i++) {
    var one = _arr[i].toString(2);

    var v = one.match(/^1+?(?=0)/);

    if (v && one.length === 8) {
      var bytesLength = v[0].length;

      var store = _arr[i].toString(2).slice(7 - bytesLength);

      for (var st = 1; st < bytesLength; st++) {
        store += _arr[st + i].toString(2).slice(2);
      }

      str += String.fromCharCode(parseInt(store, 2));
      i += bytesLength - 1;
    } else {
      str += String.fromCharCode(_arr[i]);
    }
  }

  return str;
} // string转字节


function stringToByte(str) {
  var bytes = [];
  var len;
  var c; // eslint-disable-next-line prefer-const

  len = str.length;

  for (var i = 0; i < len; i++) {
    c = str.charCodeAt(i);

    if (c >= 0x010000 && c <= 0x10ffff) {
      bytes.push(c >> 18 & 0x07 | 0xf0);
      bytes.push(c >> 12 & 0x3f | 0x80);
      bytes.push(c >> 6 & 0x3f | 0x80);
      bytes.push(c & 0x3f | 0x80);
    } else if (c >= 0x000800 && c <= 0x00ffff) {
      bytes.push(c >> 12 & 0x0f | 0xe0);
      bytes.push(c >> 6 & 0x3f | 0x80);
      bytes.push(c & 0x3f | 0x80);
    } else if (c >= 0x000080 && c <= 0x0007ff) {
      bytes.push(c >> 6 & 0x1f | 0xc0);
      bytes.push(c & 0x3f | 0x80);
    } else {
      bytes.push(c & 0xff);
    }
  }

  return bytes;
}
/**
 * @deprecated 此方法转换有误，使用 strToHexCharCode 方法代替
 * @param {String} str 待转换的字符串
 * @returns 十六进制字符串
 */


function hexEncode(str) {
  var hex;
  var i;
  var result = '';

  for (i = 0; i < str.length; i++) {
    hex = str.charCodeAt(i).toString(16);
    result += "000".concat(hex).slice(-4);
  }

  return result;
}
/**
 * @deprecated 此方法转换有误，使用 hexCharCodeToStr 方法代替
 * @param {String} str 待转换的十六进制字符串
 * @returns 字符串
 */


function hexDecode(str) {
  var j;
  var hexes = str.match(/.{1,4}/g) || [];
  var back = '';

  for (j = 0; j < hexes.length; j++) {
    back += String.fromCharCode(parseInt(hexes[j], 16));
  }

  return back;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1641193462449);
})()
//# sourceMappingURL=index.js.map