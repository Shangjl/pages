function Xr(r, e) {
  var t = Object.setPrototypeOf;
  t ? t(r, e) : r.__proto__ = e;
}
function Wr(r, e) {
  e === void 0 && (e = r.constructor);
  var t = Error.captureStackTrace;
  t && t(r, e);
}
var zr = /* @__PURE__ */ function() {
  var r = function(t, n) {
    return r = Object.setPrototypeOf || {
      __proto__: []
    } instanceof Array && function(i, a) {
      i.__proto__ = a;
    } || function(i, a) {
      for (var o in a)
        Object.prototype.hasOwnProperty.call(a, o) && (i[o] = a[o]);
    }, r(t, n);
  };
  return function(e, t) {
    if (typeof t != "function" && t !== null) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Yr = function(r) {
  zr(e, r);
  function e(t, n) {
    var i = this.constructor, a = r.call(this, t, n) || this;
    return Object.defineProperty(a, "name", {
      value: i.name,
      enumerable: !1,
      configurable: !0
    }), Xr(a, i.prototype), Wr(a), a;
  }
  return e;
}(Error), jr = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), ye = (
  /** @class */
  function(r) {
    jr(e, r);
    function e(t) {
      t === void 0 && (t = void 0);
      var n = r.call(this, t) || this;
      return n.message = t, n;
    }
    return e.prototype.getKind = function() {
      var t = this.constructor;
      return t.kind;
    }, e.kind = "Exception", e;
  }(Yr)
), Zr = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Ie = (
  /** @class */
  function(r) {
    Zr(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.kind = "ArgumentException", e;
  }(ye)
), $r = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), N = (
  /** @class */
  function(r) {
    $r(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.kind = "IllegalArgumentException", e;
  }(ye)
), Kr = (
  /** @class */
  function() {
    function r(e) {
      if (this.binarizer = e, e === null)
        throw new N("Binarizer must be non-null.");
    }
    return r.prototype.getWidth = function() {
      return this.binarizer.getWidth();
    }, r.prototype.getHeight = function() {
      return this.binarizer.getHeight();
    }, r.prototype.getBlackRow = function(e, t) {
      return this.binarizer.getBlackRow(e, t);
    }, r.prototype.getBlackMatrix = function() {
      return (this.matrix === null || this.matrix === void 0) && (this.matrix = this.binarizer.getBlackMatrix()), this.matrix;
    }, r.prototype.isCropSupported = function() {
      return this.binarizer.getLuminanceSource().isCropSupported();
    }, r.prototype.crop = function(e, t, n, i) {
      var a = this.binarizer.getLuminanceSource().crop(e, t, n, i);
      return new r(this.binarizer.createBinarizer(a));
    }, r.prototype.isRotateSupported = function() {
      return this.binarizer.getLuminanceSource().isRotateSupported();
    }, r.prototype.rotateCounterClockwise = function() {
      var e = this.binarizer.getLuminanceSource().rotateCounterClockwise();
      return new r(this.binarizer.createBinarizer(e));
    }, r.prototype.rotateCounterClockwise45 = function() {
      var e = this.binarizer.getLuminanceSource().rotateCounterClockwise45();
      return new r(this.binarizer.createBinarizer(e));
    }, r.prototype.toString = function() {
      try {
        return this.getBlackMatrix().toString();
      } catch {
        return "";
      }
    }, r;
  }()
), qr = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), oe = (
  /** @class */
  function(r) {
    qr(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.getChecksumInstance = function() {
      return new e();
    }, e.kind = "ChecksumException", e;
  }(ye)
), Qr = (
  /** @class */
  function() {
    function r(e) {
      this.source = e;
    }
    return r.prototype.getLuminanceSource = function() {
      return this.source;
    }, r.prototype.getWidth = function() {
      return this.source.getWidth();
    }, r.prototype.getHeight = function() {
      return this.source.getHeight();
    }, r;
  }()
), Y = (
  /** @class */
  function() {
    function r() {
    }
    return r.arraycopy = function(e, t, n, i, a) {
      for (; a--; )
        n[i++] = e[t++];
    }, r.currentTimeMillis = function() {
      return Date.now();
    }, r;
  }()
), Jr = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Ut = (
  /** @class */
  function(r) {
    Jr(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.kind = "IndexOutOfBoundsException", e;
  }(ye)
), en = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), jt = (
  /** @class */
  function(r) {
    en(e, r);
    function e(t, n) {
      t === void 0 && (t = void 0), n === void 0 && (n = void 0);
      var i = r.call(this, n) || this;
      return i.index = t, i.message = n, i;
    }
    return e.kind = "ArrayIndexOutOfBoundsException", e;
  }(Ut)
), tn = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, re = (
  /** @class */
  function() {
    function r() {
    }
    return r.fill = function(e, t) {
      for (var n = 0, i = e.length; n < i; n++)
        e[n] = t;
    }, r.fillWithin = function(e, t, n, i) {
      r.rangeCheck(e.length, t, n);
      for (var a = t; a < n; a++)
        e[a] = i;
    }, r.rangeCheck = function(e, t, n) {
      if (t > n)
        throw new N("fromIndex(" + t + ") > toIndex(" + n + ")");
      if (t < 0)
        throw new jt(t);
      if (n > e)
        throw new jt(n);
    }, r.asList = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      return e;
    }, r.create = function(e, t, n) {
      var i = Array.from({ length: e });
      return i.map(function(a) {
        return Array.from({ length: t }).fill(n);
      });
    }, r.createInt32Array = function(e, t, n) {
      var i = Array.from({ length: e });
      return i.map(function(a) {
        return Int32Array.from({ length: t }).fill(n);
      });
    }, r.equals = function(e, t) {
      if (!e || !t || !e.length || !t.length || e.length !== t.length)
        return !1;
      for (var n = 0, i = e.length; n < i; n++)
        if (e[n] !== t[n])
          return !1;
      return !0;
    }, r.hashCode = function(e) {
      var t, n;
      if (e === null)
        return 0;
      var i = 1;
      try {
        for (var a = tn(e), o = a.next(); !o.done; o = a.next()) {
          var f = o.value;
          i = 31 * i + f;
        }
      } catch (u) {
        t = { error: u };
      } finally {
        try {
          o && !o.done && (n = a.return) && n.call(a);
        } finally {
          if (t) throw t.error;
        }
      }
      return i;
    }, r.fillUint8Array = function(e, t) {
      for (var n = 0; n !== e.length; n++)
        e[n] = t;
    }, r.copyOf = function(e, t) {
      return e.slice(0, t);
    }, r.copyOfUint8Array = function(e, t) {
      if (e.length <= t) {
        var n = new Uint8Array(t);
        return n.set(e), n;
      }
      return e.slice(0, t);
    }, r.copyOfRange = function(e, t, n) {
      var i = n - t, a = new Int32Array(i);
      return Y.arraycopy(e, t, a, 0, i), a;
    }, r.binarySearch = function(e, t, n) {
      n === void 0 && (n = r.numberComparator);
      for (var i = 0, a = e.length - 1; i <= a; ) {
        var o = a + i >> 1, f = n(t, e[o]);
        if (f > 0)
          i = o + 1;
        else if (f < 0)
          a = o - 1;
        else
          return o;
      }
      return -i - 1;
    }, r.numberComparator = function(e, t) {
      return e - t;
    }, r;
  }()
), B = (
  /** @class */
  function() {
    function r() {
    }
    return r.numberOfTrailingZeros = function(e) {
      var t;
      if (e === 0)
        return 32;
      var n = 31;
      return t = e << 16, t !== 0 && (n -= 16, e = t), t = e << 8, t !== 0 && (n -= 8, e = t), t = e << 4, t !== 0 && (n -= 4, e = t), t = e << 2, t !== 0 && (n -= 2, e = t), n - (e << 1 >>> 31);
    }, r.numberOfLeadingZeros = function(e) {
      if (e === 0)
        return 32;
      var t = 1;
      return e >>> 16 || (t += 16, e <<= 16), e >>> 24 || (t += 8, e <<= 8), e >>> 28 || (t += 4, e <<= 4), e >>> 30 || (t += 2, e <<= 2), t -= e >>> 31, t;
    }, r.toHexString = function(e) {
      return e.toString(16);
    }, r.toBinaryString = function(e) {
      return String(parseInt(String(e), 2));
    }, r.bitCount = function(e) {
      return e = e - (e >>> 1 & 1431655765), e = (e & 858993459) + (e >>> 2 & 858993459), e = e + (e >>> 4) & 252645135, e = e + (e >>> 8), e = e + (e >>> 16), e & 63;
    }, r.truncDivision = function(e, t) {
      return Math.trunc(e / t);
    }, r.parseInt = function(e, t) {
      return t === void 0 && (t = void 0), parseInt(e, t);
    }, r.MIN_VALUE_32_BITS = -2147483648, r.MAX_VALUE = Number.MAX_SAFE_INTEGER, r;
  }()
), fe = (
  /** @class */
  function() {
    function r(e, t) {
      e === void 0 ? (this.size = 0, this.bits = new Int32Array(1)) : (this.size = e, t == null ? this.bits = r.makeArray(e) : this.bits = t);
    }
    return r.prototype.getSize = function() {
      return this.size;
    }, r.prototype.getSizeInBytes = function() {
      return Math.floor((this.size + 7) / 8);
    }, r.prototype.ensureCapacity = function(e) {
      if (e > this.bits.length * 32) {
        var t = r.makeArray(e);
        Y.arraycopy(this.bits, 0, t, 0, this.bits.length), this.bits = t;
      }
    }, r.prototype.get = function(e) {
      return (this.bits[Math.floor(e / 32)] & 1 << (e & 31)) !== 0;
    }, r.prototype.set = function(e) {
      this.bits[Math.floor(e / 32)] |= 1 << (e & 31);
    }, r.prototype.flip = function(e) {
      this.bits[Math.floor(e / 32)] ^= 1 << (e & 31);
    }, r.prototype.getNextSet = function(e) {
      var t = this.size;
      if (e >= t)
        return t;
      var n = this.bits, i = Math.floor(e / 32), a = n[i];
      a &= ~((1 << (e & 31)) - 1);
      for (var o = n.length; a === 0; ) {
        if (++i === o)
          return t;
        a = n[i];
      }
      var f = i * 32 + B.numberOfTrailingZeros(a);
      return f > t ? t : f;
    }, r.prototype.getNextUnset = function(e) {
      var t = this.size;
      if (e >= t)
        return t;
      var n = this.bits, i = Math.floor(e / 32), a = ~n[i];
      a &= ~((1 << (e & 31)) - 1);
      for (var o = n.length; a === 0; ) {
        if (++i === o)
          return t;
        a = ~n[i];
      }
      var f = i * 32 + B.numberOfTrailingZeros(a);
      return f > t ? t : f;
    }, r.prototype.setBulk = function(e, t) {
      this.bits[Math.floor(e / 32)] = t;
    }, r.prototype.setRange = function(e, t) {
      if (t < e || e < 0 || t > this.size)
        throw new N();
      if (t !== e) {
        t--;
        for (var n = Math.floor(e / 32), i = Math.floor(t / 32), a = this.bits, o = n; o <= i; o++) {
          var f = o > n ? 0 : e & 31, u = o < i ? 31 : t & 31, s = (2 << u) - (1 << f);
          a[o] |= s;
        }
      }
    }, r.prototype.clear = function() {
      for (var e = this.bits.length, t = this.bits, n = 0; n < e; n++)
        t[n] = 0;
    }, r.prototype.isRange = function(e, t, n) {
      if (t < e || e < 0 || t > this.size)
        throw new N();
      if (t === e)
        return !0;
      t--;
      for (var i = Math.floor(e / 32), a = Math.floor(t / 32), o = this.bits, f = i; f <= a; f++) {
        var u = f > i ? 0 : e & 31, s = f < a ? 31 : t & 31, c = (2 << s) - (1 << u) & 4294967295;
        if ((o[f] & c) !== (n ? c : 0))
          return !1;
      }
      return !0;
    }, r.prototype.appendBit = function(e) {
      this.ensureCapacity(this.size + 1), e && (this.bits[Math.floor(this.size / 32)] |= 1 << (this.size & 31)), this.size++;
    }, r.prototype.appendBits = function(e, t) {
      if (t < 0 || t > 32)
        throw new N("Num bits must be between 0 and 32");
      this.ensureCapacity(this.size + t);
      for (var n = t; n > 0; n--)
        this.appendBit((e >> n - 1 & 1) === 1);
    }, r.prototype.appendBitArray = function(e) {
      var t = e.size;
      this.ensureCapacity(this.size + t);
      for (var n = 0; n < t; n++)
        this.appendBit(e.get(n));
    }, r.prototype.xor = function(e) {
      if (this.size !== e.size)
        throw new N("Sizes don't match");
      for (var t = this.bits, n = 0, i = t.length; n < i; n++)
        t[n] ^= e.bits[n];
    }, r.prototype.toBytes = function(e, t, n, i) {
      for (var a = 0; a < i; a++) {
        for (var o = 0, f = 0; f < 8; f++)
          this.get(e) && (o |= 1 << 7 - f), e++;
        t[n + a] = /*(byte)*/
        o;
      }
    }, r.prototype.getBitArray = function() {
      return this.bits;
    }, r.prototype.reverse = function() {
      for (var e = new Int32Array(this.bits.length), t = Math.floor((this.size - 1) / 32), n = t + 1, i = this.bits, a = 0; a < n; a++) {
        var o = i[a];
        o = o >> 1 & 1431655765 | (o & 1431655765) << 1, o = o >> 2 & 858993459 | (o & 858993459) << 2, o = o >> 4 & 252645135 | (o & 252645135) << 4, o = o >> 8 & 16711935 | (o & 16711935) << 8, o = o >> 16 & 65535 | (o & 65535) << 16, e[t - a] = /*(int)*/
        o;
      }
      if (this.size !== n * 32) {
        for (var f = n * 32 - this.size, u = e[0] >>> f, a = 1; a < n; a++) {
          var s = e[a];
          u |= s << 32 - f, e[a - 1] = u, u = s >>> f;
        }
        e[n - 1] = u;
      }
      this.bits = e;
    }, r.makeArray = function(e) {
      return new Int32Array(Math.floor((e + 31) / 32));
    }, r.prototype.equals = function(e) {
      if (!(e instanceof r))
        return !1;
      var t = e;
      return this.size === t.size && re.equals(this.bits, t.bits);
    }, r.prototype.hashCode = function() {
      return 31 * this.size + re.hashCode(this.bits);
    }, r.prototype.toString = function() {
      for (var e = "", t = 0, n = this.size; t < n; t++)
        t & 7 || (e += " "), e += this.get(t) ? "X" : ".";
      return e;
    }, r.prototype.clone = function() {
      return new r(this.size, this.bits.slice());
    }, r.prototype.toArray = function() {
      for (var e = [], t = 0, n = this.size; t < n; t++)
        e.push(this.get(t));
      return e;
    }, r;
  }()
), St;
(function(r) {
  r[r.OTHER = 0] = "OTHER", r[r.PURE_BARCODE = 1] = "PURE_BARCODE", r[r.POSSIBLE_FORMATS = 2] = "POSSIBLE_FORMATS", r[r.TRY_HARDER = 3] = "TRY_HARDER", r[r.CHARACTER_SET = 4] = "CHARACTER_SET", r[r.ALLOWED_LENGTHS = 5] = "ALLOWED_LENGTHS", r[r.ASSUME_CODE_39_CHECK_DIGIT = 6] = "ASSUME_CODE_39_CHECK_DIGIT", r[r.ENABLE_CODE_39_EXTENDED_MODE = 7] = "ENABLE_CODE_39_EXTENDED_MODE", r[r.ASSUME_GS1 = 8] = "ASSUME_GS1", r[r.RETURN_CODABAR_START_END = 9] = "RETURN_CODABAR_START_END", r[r.NEED_RESULT_POINT_CALLBACK = 10] = "NEED_RESULT_POINT_CALLBACK", r[r.ALLOWED_EAN_EXTENSIONS = 11] = "ALLOWED_EAN_EXTENSIONS";
})(St || (St = {}));
const $ = St;
var rn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), O = (
  /** @class */
  function(r) {
    rn(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.getFormatInstance = function() {
      return new e();
    }, e.kind = "FormatException", e;
  }(ye)
), nn = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, X;
(function(r) {
  r[r.Cp437 = 0] = "Cp437", r[r.ISO8859_1 = 1] = "ISO8859_1", r[r.ISO8859_2 = 2] = "ISO8859_2", r[r.ISO8859_3 = 3] = "ISO8859_3", r[r.ISO8859_4 = 4] = "ISO8859_4", r[r.ISO8859_5 = 5] = "ISO8859_5", r[r.ISO8859_6 = 6] = "ISO8859_6", r[r.ISO8859_7 = 7] = "ISO8859_7", r[r.ISO8859_8 = 8] = "ISO8859_8", r[r.ISO8859_9 = 9] = "ISO8859_9", r[r.ISO8859_10 = 10] = "ISO8859_10", r[r.ISO8859_11 = 11] = "ISO8859_11", r[r.ISO8859_13 = 12] = "ISO8859_13", r[r.ISO8859_14 = 13] = "ISO8859_14", r[r.ISO8859_15 = 14] = "ISO8859_15", r[r.ISO8859_16 = 15] = "ISO8859_16", r[r.SJIS = 16] = "SJIS", r[r.Cp1250 = 17] = "Cp1250", r[r.Cp1251 = 18] = "Cp1251", r[r.Cp1252 = 19] = "Cp1252", r[r.Cp1256 = 20] = "Cp1256", r[r.UnicodeBigUnmarked = 21] = "UnicodeBigUnmarked", r[r.UTF8 = 22] = "UTF8", r[r.ASCII = 23] = "ASCII", r[r.Big5 = 24] = "Big5", r[r.GB18030 = 25] = "GB18030", r[r.EUC_KR = 26] = "EUC_KR";
})(X || (X = {}));
var te = (
  /** @class */
  function() {
    function r(e, t, n) {
      for (var i, a, o = [], f = 3; f < arguments.length; f++)
        o[f - 3] = arguments[f];
      this.valueIdentifier = e, this.name = n, typeof t == "number" ? this.values = Int32Array.from([t]) : this.values = t, this.otherEncodingNames = o, r.VALUE_IDENTIFIER_TO_ECI.set(e, this), r.NAME_TO_ECI.set(n, this);
      for (var u = this.values, s = 0, c = u.length; s !== c; s++) {
        var h = u[s];
        r.VALUES_TO_ECI.set(h, this);
      }
      try {
        for (var l = nn(o), d = l.next(); !d.done; d = l.next()) {
          var v = d.value;
          r.NAME_TO_ECI.set(v, this);
        }
      } catch (x) {
        i = { error: x };
      } finally {
        try {
          d && !d.done && (a = l.return) && a.call(l);
        } finally {
          if (i) throw i.error;
        }
      }
    }
    return r.prototype.getValueIdentifier = function() {
      return this.valueIdentifier;
    }, r.prototype.getName = function() {
      return this.name;
    }, r.prototype.getValue = function() {
      return this.values[0];
    }, r.getCharacterSetECIByValue = function(e) {
      if (e < 0 || e >= 900)
        throw new O("incorect value");
      var t = r.VALUES_TO_ECI.get(e);
      if (t === void 0)
        throw new O("incorect value");
      return t;
    }, r.getCharacterSetECIByName = function(e) {
      var t = r.NAME_TO_ECI.get(e);
      if (t === void 0)
        throw new O("incorect value");
      return t;
    }, r.prototype.equals = function(e) {
      if (!(e instanceof r))
        return !1;
      var t = e;
      return this.getName() === t.getName();
    }, r.VALUE_IDENTIFIER_TO_ECI = /* @__PURE__ */ new Map(), r.VALUES_TO_ECI = /* @__PURE__ */ new Map(), r.NAME_TO_ECI = /* @__PURE__ */ new Map(), r.Cp437 = new r(X.Cp437, Int32Array.from([0, 2]), "Cp437"), r.ISO8859_1 = new r(X.ISO8859_1, Int32Array.from([1, 3]), "ISO-8859-1", "ISO88591", "ISO8859_1"), r.ISO8859_2 = new r(X.ISO8859_2, 4, "ISO-8859-2", "ISO88592", "ISO8859_2"), r.ISO8859_3 = new r(X.ISO8859_3, 5, "ISO-8859-3", "ISO88593", "ISO8859_3"), r.ISO8859_4 = new r(X.ISO8859_4, 6, "ISO-8859-4", "ISO88594", "ISO8859_4"), r.ISO8859_5 = new r(X.ISO8859_5, 7, "ISO-8859-5", "ISO88595", "ISO8859_5"), r.ISO8859_6 = new r(X.ISO8859_6, 8, "ISO-8859-6", "ISO88596", "ISO8859_6"), r.ISO8859_7 = new r(X.ISO8859_7, 9, "ISO-8859-7", "ISO88597", "ISO8859_7"), r.ISO8859_8 = new r(X.ISO8859_8, 10, "ISO-8859-8", "ISO88598", "ISO8859_8"), r.ISO8859_9 = new r(X.ISO8859_9, 11, "ISO-8859-9", "ISO88599", "ISO8859_9"), r.ISO8859_10 = new r(X.ISO8859_10, 12, "ISO-8859-10", "ISO885910", "ISO8859_10"), r.ISO8859_11 = new r(X.ISO8859_11, 13, "ISO-8859-11", "ISO885911", "ISO8859_11"), r.ISO8859_13 = new r(X.ISO8859_13, 15, "ISO-8859-13", "ISO885913", "ISO8859_13"), r.ISO8859_14 = new r(X.ISO8859_14, 16, "ISO-8859-14", "ISO885914", "ISO8859_14"), r.ISO8859_15 = new r(X.ISO8859_15, 17, "ISO-8859-15", "ISO885915", "ISO8859_15"), r.ISO8859_16 = new r(X.ISO8859_16, 18, "ISO-8859-16", "ISO885916", "ISO8859_16"), r.SJIS = new r(X.SJIS, 20, "SJIS", "Shift_JIS"), r.Cp1250 = new r(X.Cp1250, 21, "Cp1250", "windows-1250"), r.Cp1251 = new r(X.Cp1251, 22, "Cp1251", "windows-1251"), r.Cp1252 = new r(X.Cp1252, 23, "Cp1252", "windows-1252"), r.Cp1256 = new r(X.Cp1256, 24, "Cp1256", "windows-1256"), r.UnicodeBigUnmarked = new r(X.UnicodeBigUnmarked, 25, "UnicodeBigUnmarked", "UTF-16BE", "UnicodeBig"), r.UTF8 = new r(X.UTF8, 26, "UTF8", "UTF-8"), r.ASCII = new r(X.ASCII, Int32Array.from([27, 170]), "ASCII", "US-ASCII"), r.Big5 = new r(X.Big5, 28, "Big5"), r.GB18030 = new r(X.GB18030, 29, "GB18030", "GB2312", "EUC_CN", "GBK"), r.EUC_KR = new r(X.EUC_KR, 30, "EUC_KR", "EUC-KR"), r;
  }()
), an = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), at = (
  /** @class */
  function(r) {
    an(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.kind = "UnsupportedOperationException", e;
  }(ye)
), Ee = (
  /** @class */
  function() {
    function r() {
    }
    return r.decode = function(e, t) {
      var n = this.encodingName(t);
      return this.customDecoder ? this.customDecoder(e, n) : typeof TextDecoder > "u" || this.shouldDecodeOnFallback(n) ? this.decodeFallback(e, n) : new TextDecoder(n).decode(e);
    }, r.shouldDecodeOnFallback = function(e) {
      return !r.isBrowser() && e === "ISO-8859-1";
    }, r.encode = function(e, t) {
      var n = this.encodingName(t);
      return this.customEncoder ? this.customEncoder(e, n) : typeof TextEncoder > "u" ? this.encodeFallback(e) : new TextEncoder().encode(e);
    }, r.isBrowser = function() {
      return typeof window < "u" && {}.toString.call(window) === "[object Window]";
    }, r.encodingName = function(e) {
      return typeof e == "string" ? e : e.getName();
    }, r.encodingCharacterSet = function(e) {
      return e instanceof te ? e : te.getCharacterSetECIByName(e);
    }, r.decodeFallback = function(e, t) {
      var n = this.encodingCharacterSet(t);
      if (r.isDecodeFallbackSupported(n)) {
        for (var i = "", a = 0, o = e.length; a < o; a++) {
          var f = e[a].toString(16);
          f.length < 2 && (f = "0" + f), i += "%" + f;
        }
        return decodeURIComponent(i);
      }
      if (n.equals(te.UnicodeBigUnmarked))
        return String.fromCharCode.apply(null, new Uint16Array(e.buffer));
      throw new at("Encoding " + this.encodingName(t) + " not supported by fallback.");
    }, r.isDecodeFallbackSupported = function(e) {
      return e.equals(te.UTF8) || e.equals(te.ISO8859_1) || e.equals(te.ASCII);
    }, r.encodeFallback = function(e) {
      for (var t = btoa(unescape(encodeURIComponent(e))), n = t.split(""), i = [], a = 0; a < n.length; a++)
        i.push(n[a].charCodeAt(0));
      return new Uint8Array(i);
    }, r;
  }()
), F = (
  /** @class */
  function() {
    function r() {
    }
    return r.castAsNonUtf8Char = function(e, t) {
      t === void 0 && (t = null);
      var n = t ? t.getName() : this.ISO88591;
      return Ee.decode(new Uint8Array([e]), n);
    }, r.guessEncoding = function(e, t) {
      if (t != null && t.get($.CHARACTER_SET) !== void 0)
        return t.get($.CHARACTER_SET).toString();
      for (var n = e.length, i = !0, a = !0, o = !0, f = 0, u = 0, s = 0, c = 0, h = 0, l = 0, d = 0, v = 0, x = 0, g = 0, _ = 0, y = e.length > 3 && e[0] === /*(byte) */
      239 && e[1] === /*(byte) */
      187 && e[2] === /*(byte) */
      191, A = 0; A < n && (i || a || o); A++) {
        var E = e[A] & 255;
        o && (f > 0 ? E & 128 ? f-- : o = !1 : E & 128 && (E & 64 ? (f++, E & 32 ? (f++, E & 16 ? (f++, E & 8 ? o = !1 : c++) : s++) : u++) : o = !1)), i && (E > 127 && E < 160 ? i = !1 : E > 159 && (E < 192 || E === 215 || E === 247) && _++), a && (h > 0 ? E < 64 || E === 127 || E > 252 ? a = !1 : h-- : E === 128 || E === 160 || E > 239 ? a = !1 : E > 160 && E < 224 ? (l++, v = 0, d++, d > x && (x = d)) : E > 127 ? (h++, d = 0, v++, v > g && (g = v)) : (d = 0, v = 0));
      }
      return o && f > 0 && (o = !1), a && h > 0 && (a = !1), o && (y || u + s + c > 0) ? r.UTF8 : a && (r.ASSUME_SHIFT_JIS || x >= 3 || g >= 3) ? r.SHIFT_JIS : i && a ? x === 2 && l === 2 || _ * 10 >= n ? r.SHIFT_JIS : r.ISO88591 : i ? r.ISO88591 : a ? r.SHIFT_JIS : o ? r.UTF8 : r.PLATFORM_DEFAULT_ENCODING;
    }, r.format = function(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      var i = -1;
      function a(f, u, s, c, h, l) {
        if (f === "%%")
          return "%";
        if (t[++i] !== void 0) {
          f = c ? parseInt(c.substr(1)) : void 0;
          var d = h ? parseInt(h.substr(1)) : void 0, v;
          switch (l) {
            case "s":
              v = t[i];
              break;
            case "c":
              v = t[i][0];
              break;
            case "f":
              v = parseFloat(t[i]).toFixed(f);
              break;
            case "p":
              v = parseFloat(t[i]).toPrecision(f);
              break;
            case "e":
              v = parseFloat(t[i]).toExponential(f);
              break;
            case "x":
              v = parseInt(t[i]).toString(d || 16);
              break;
            case "d":
              v = parseFloat(parseInt(t[i], d || 10).toPrecision(f)).toFixed(0);
              break;
          }
          v = typeof v == "object" ? JSON.stringify(v) : (+v).toString(d);
          for (var x = parseInt(s), g = s && s[0] + "" == "0" ? "0" : " "; v.length < x; )
            v = u !== void 0 ? v + g : g + v;
          return v;
        }
      }
      var o = /%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g;
      return e.replace(o, a);
    }, r.getBytes = function(e, t) {
      return Ee.encode(e, t);
    }, r.getCharCode = function(e, t) {
      return t === void 0 && (t = 0), e.charCodeAt(t);
    }, r.getCharAt = function(e) {
      return String.fromCharCode(e);
    }, r.SHIFT_JIS = te.SJIS.getName(), r.GB2312 = "GB2312", r.ISO88591 = te.ISO8859_1.getName(), r.EUC_JP = "EUC_JP", r.UTF8 = te.UTF8.getName(), r.PLATFORM_DEFAULT_ENCODING = r.UTF8, r.ASSUME_SHIFT_JIS = !1, r;
  }()
), M = (
  /** @class */
  function() {
    function r(e) {
      e === void 0 && (e = ""), this.value = e;
    }
    return r.prototype.enableDecoding = function(e) {
      return this.encoding = e, this;
    }, r.prototype.append = function(e) {
      return typeof e == "string" ? this.value += e.toString() : this.encoding ? this.value += F.castAsNonUtf8Char(e, this.encoding) : this.value += String.fromCharCode(e), this;
    }, r.prototype.appendChars = function(e, t, n) {
      for (var i = t; t < t + n; i++)
        this.append(e[i]);
      return this;
    }, r.prototype.length = function() {
      return this.value.length;
    }, r.prototype.charAt = function(e) {
      return this.value.charAt(e);
    }, r.prototype.deleteCharAt = function(e) {
      this.value = this.value.substr(0, e) + this.value.substring(e + 1);
    }, r.prototype.setCharAt = function(e, t) {
      this.value = this.value.substr(0, e) + t + this.value.substr(e + 1);
    }, r.prototype.substring = function(e, t) {
      return this.value.substring(e, t);
    }, r.prototype.setLengthToZero = function() {
      this.value = "";
    }, r.prototype.toString = function() {
      return this.value;
    }, r.prototype.insert = function(e, t) {
      this.value = this.value.substring(0, e) + t + this.value.substring(e);
    }, r;
  }()
), Te = (
  /** @class */
  function() {
    function r(e, t, n, i) {
      if (this.width = e, this.height = t, this.rowSize = n, this.bits = i, t == null && (t = e), this.height = t, e < 1 || t < 1)
        throw new N("Both dimensions must be greater than 0");
      n == null && (n = Math.floor((e + 31) / 32)), this.rowSize = n, i == null && (this.bits = new Int32Array(this.rowSize * this.height));
    }
    return r.parseFromBooleanArray = function(e) {
      for (var t = e.length, n = e[0].length, i = new r(n, t), a = 0; a < t; a++)
        for (var o = e[a], f = 0; f < n; f++)
          o[f] && i.set(f, a);
      return i;
    }, r.parseFromString = function(e, t, n) {
      if (e === null)
        throw new N("stringRepresentation cannot be null");
      for (var i = new Array(e.length), a = 0, o = 0, f = -1, u = 0, s = 0; s < e.length; )
        if (e.charAt(s) === `
` || e.charAt(s) === "\r") {
          if (a > o) {
            if (f === -1)
              f = a - o;
            else if (a - o !== f)
              throw new N("row lengths do not match");
            o = a, u++;
          }
          s++;
        } else if (e.substring(s, s + t.length) === t)
          s += t.length, i[a] = !0, a++;
        else if (e.substring(s, s + n.length) === n)
          s += n.length, i[a] = !1, a++;
        else
          throw new N("illegal character encountered: " + e.substring(s));
      if (a > o) {
        if (f === -1)
          f = a - o;
        else if (a - o !== f)
          throw new N("row lengths do not match");
        u++;
      }
      for (var c = new r(f, u), h = 0; h < a; h++)
        i[h] && c.set(Math.floor(h % f), Math.floor(h / f));
      return c;
    }, r.prototype.get = function(e, t) {
      var n = t * this.rowSize + Math.floor(e / 32);
      return (this.bits[n] >>> (e & 31) & 1) !== 0;
    }, r.prototype.set = function(e, t) {
      var n = t * this.rowSize + Math.floor(e / 32);
      this.bits[n] |= 1 << (e & 31) & 4294967295;
    }, r.prototype.unset = function(e, t) {
      var n = t * this.rowSize + Math.floor(e / 32);
      this.bits[n] &= ~(1 << (e & 31) & 4294967295);
    }, r.prototype.flip = function(e, t) {
      var n = t * this.rowSize + Math.floor(e / 32);
      this.bits[n] ^= 1 << (e & 31) & 4294967295;
    }, r.prototype.xor = function(e) {
      if (this.width !== e.getWidth() || this.height !== e.getHeight() || this.rowSize !== e.getRowSize())
        throw new N("input matrix dimensions do not match");
      for (var t = new fe(Math.floor(this.width / 32) + 1), n = this.rowSize, i = this.bits, a = 0, o = this.height; a < o; a++)
        for (var f = a * n, u = e.getRow(a, t).getBitArray(), s = 0; s < n; s++)
          i[f + s] ^= u[s];
    }, r.prototype.clear = function() {
      for (var e = this.bits, t = e.length, n = 0; n < t; n++)
        e[n] = 0;
    }, r.prototype.setRegion = function(e, t, n, i) {
      if (t < 0 || e < 0)
        throw new N("Left and top must be nonnegative");
      if (i < 1 || n < 1)
        throw new N("Height and width must be at least 1");
      var a = e + n, o = t + i;
      if (o > this.height || a > this.width)
        throw new N("The region must fit inside the matrix");
      for (var f = this.rowSize, u = this.bits, s = t; s < o; s++)
        for (var c = s * f, h = e; h < a; h++)
          u[c + Math.floor(h / 32)] |= 1 << (h & 31) & 4294967295;
    }, r.prototype.getRow = function(e, t) {
      t == null || t.getSize() < this.width ? t = new fe(this.width) : t.clear();
      for (var n = this.rowSize, i = this.bits, a = e * n, o = 0; o < n; o++)
        t.setBulk(o * 32, i[a + o]);
      return t;
    }, r.prototype.setRow = function(e, t) {
      Y.arraycopy(t.getBitArray(), 0, this.bits, e * this.rowSize, this.rowSize);
    }, r.prototype.rotate180 = function() {
      for (var e = this.getWidth(), t = this.getHeight(), n = new fe(e), i = new fe(e), a = 0, o = Math.floor((t + 1) / 2); a < o; a++)
        n = this.getRow(a, n), i = this.getRow(t - 1 - a, i), n.reverse(), i.reverse(), this.setRow(a, i), this.setRow(t - 1 - a, n);
    }, r.prototype.getEnclosingRectangle = function() {
      for (var e = this.width, t = this.height, n = this.rowSize, i = this.bits, a = e, o = t, f = -1, u = -1, s = 0; s < t; s++)
        for (var c = 0; c < n; c++) {
          var h = i[s * n + c];
          if (h !== 0) {
            if (s < o && (o = s), s > u && (u = s), c * 32 < a) {
              for (var l = 0; !(h << 31 - l & 4294967295); )
                l++;
              c * 32 + l < a && (a = c * 32 + l);
            }
            if (c * 32 + 31 > f) {
              for (var l = 31; !(h >>> l); )
                l--;
              c * 32 + l > f && (f = c * 32 + l);
            }
          }
        }
      return f < a || u < o ? null : Int32Array.from([a, o, f - a + 1, u - o + 1]);
    }, r.prototype.getTopLeftOnBit = function() {
      for (var e = this.rowSize, t = this.bits, n = 0; n < t.length && t[n] === 0; )
        n++;
      if (n === t.length)
        return null;
      for (var i = n / e, a = n % e * 32, o = t[n], f = 0; !(o << 31 - f & 4294967295); )
        f++;
      return a += f, Int32Array.from([a, i]);
    }, r.prototype.getBottomRightOnBit = function() {
      for (var e = this.rowSize, t = this.bits, n = t.length - 1; n >= 0 && t[n] === 0; )
        n--;
      if (n < 0)
        return null;
      for (var i = Math.floor(n / e), a = Math.floor(n % e) * 32, o = t[n], f = 31; !(o >>> f); )
        f--;
      return a += f, Int32Array.from([a, i]);
    }, r.prototype.getWidth = function() {
      return this.width;
    }, r.prototype.getHeight = function() {
      return this.height;
    }, r.prototype.getRowSize = function() {
      return this.rowSize;
    }, r.prototype.equals = function(e) {
      if (!(e instanceof r))
        return !1;
      var t = e;
      return this.width === t.width && this.height === t.height && this.rowSize === t.rowSize && re.equals(this.bits, t.bits);
    }, r.prototype.hashCode = function() {
      var e = this.width;
      return e = 31 * e + this.width, e = 31 * e + this.height, e = 31 * e + this.rowSize, e = 31 * e + re.hashCode(this.bits), e;
    }, r.prototype.toString = function(e, t, n) {
      return e === void 0 && (e = "X "), t === void 0 && (t = "  "), n === void 0 && (n = `
`), this.buildToString(e, t, n);
    }, r.prototype.buildToString = function(e, t, n) {
      for (var i = new M(), a = 0, o = this.height; a < o; a++) {
        for (var f = 0, u = this.width; f < u; f++)
          i.append(this.get(f, a) ? e : t);
        i.append(n);
      }
      return i.toString();
    }, r.prototype.clone = function() {
      return new r(this.width, this.height, this.rowSize, this.bits.slice());
    }, r;
  }()
), on = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), C = (
  /** @class */
  function(r) {
    on(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.getNotFoundInstance = function() {
      return new e();
    }, e.kind = "NotFoundException", e;
  }(ye)
), fn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), un = (
  /** @class */
  function(r) {
    fn(e, r);
    function e(t) {
      var n = r.call(this, t) || this;
      return n.luminances = e.EMPTY, n.buckets = new Int32Array(e.LUMINANCE_BUCKETS), n;
    }
    return e.prototype.getBlackRow = function(t, n) {
      var i = this.getLuminanceSource(), a = i.getWidth();
      n == null || n.getSize() < a ? n = new fe(a) : n.clear(), this.initArrays(a);
      for (var o = i.getRow(t, this.luminances), f = this.buckets, u = 0; u < a; u++)
        f[(o[u] & 255) >> e.LUMINANCE_SHIFT]++;
      var s = e.estimateBlackPoint(f);
      if (a < 3)
        for (var u = 0; u < a; u++)
          (o[u] & 255) < s && n.set(u);
      else
        for (var c = o[0] & 255, h = o[1] & 255, u = 1; u < a - 1; u++) {
          var l = o[u + 1] & 255;
          (h * 4 - c - l) / 2 < s && n.set(u), c = h, h = l;
        }
      return n;
    }, e.prototype.getBlackMatrix = function() {
      var t = this.getLuminanceSource(), n = t.getWidth(), i = t.getHeight(), a = new Te(n, i);
      this.initArrays(n);
      for (var o = this.buckets, f = 1; f < 5; f++)
        for (var u = Math.floor(i * f / 5), s = t.getRow(u, this.luminances), c = Math.floor(n * 4 / 5), h = Math.floor(n / 5); h < c; h++) {
          var l = s[h] & 255;
          o[l >> e.LUMINANCE_SHIFT]++;
        }
      for (var d = e.estimateBlackPoint(o), v = t.getMatrix(), f = 0; f < i; f++)
        for (var x = f * n, h = 0; h < n; h++) {
          var l = v[x + h] & 255;
          l < d && a.set(h, f);
        }
      return a;
    }, e.prototype.createBinarizer = function(t) {
      return new e(t);
    }, e.prototype.initArrays = function(t) {
      this.luminances.length < t && (this.luminances = new Uint8ClampedArray(t));
      for (var n = this.buckets, i = 0; i < e.LUMINANCE_BUCKETS; i++)
        n[i] = 0;
    }, e.estimateBlackPoint = function(t) {
      for (var n = t.length, i = 0, a = 0, o = 0, f = 0; f < n; f++)
        t[f] > o && (a = f, o = t[f]), t[f] > i && (i = t[f]);
      for (var u = 0, s = 0, f = 0; f < n; f++) {
        var c = f - a, h = t[f] * c * c;
        h > s && (u = f, s = h);
      }
      if (a > u) {
        var l = a;
        a = u, u = l;
      }
      if (u - a <= n / 16)
        throw new C();
      for (var d = u - 1, v = -1, f = u - 1; f > a; f--) {
        var x = f - a, h = x * x * (u - f) * (i - t[f]);
        h > v && (d = f, v = h);
      }
      return d << e.LUMINANCE_SHIFT;
    }, e.LUMINANCE_BITS = 5, e.LUMINANCE_SHIFT = 8 - e.LUMINANCE_BITS, e.LUMINANCE_BUCKETS = 1 << e.LUMINANCE_BITS, e.EMPTY = Uint8ClampedArray.from([0]), e;
  }(Qr)
), sn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), cn = (
  /** @class */
  function(r) {
    sn(e, r);
    function e(t) {
      var n = r.call(this, t) || this;
      return n.matrix = null, n;
    }
    return e.prototype.getBlackMatrix = function() {
      if (this.matrix !== null)
        return this.matrix;
      var t = this.getLuminanceSource(), n = t.getWidth(), i = t.getHeight();
      if (n >= e.MINIMUM_DIMENSION && i >= e.MINIMUM_DIMENSION) {
        var a = t.getMatrix(), o = n >> e.BLOCK_SIZE_POWER;
        n & e.BLOCK_SIZE_MASK && o++;
        var f = i >> e.BLOCK_SIZE_POWER;
        i & e.BLOCK_SIZE_MASK && f++;
        var u = e.calculateBlackPoints(a, o, f, n, i), s = new Te(n, i);
        e.calculateThresholdForBlock(a, o, f, n, i, u, s), this.matrix = s;
      } else
        this.matrix = r.prototype.getBlackMatrix.call(this);
      return this.matrix;
    }, e.prototype.createBinarizer = function(t) {
      return new e(t);
    }, e.calculateThresholdForBlock = function(t, n, i, a, o, f, u) {
      for (var s = o - e.BLOCK_SIZE, c = a - e.BLOCK_SIZE, h = 0; h < i; h++) {
        var l = h << e.BLOCK_SIZE_POWER;
        l > s && (l = s);
        for (var d = e.cap(h, 2, i - 3), v = 0; v < n; v++) {
          var x = v << e.BLOCK_SIZE_POWER;
          x > c && (x = c);
          for (var g = e.cap(v, 2, n - 3), _ = 0, y = -2; y <= 2; y++) {
            var A = f[d + y];
            _ += A[g - 2] + A[g - 1] + A[g] + A[g + 1] + A[g + 2];
          }
          var E = _ / 25;
          e.thresholdBlock(t, x, l, E, a, u);
        }
      }
    }, e.cap = function(t, n, i) {
      return t < n ? n : t > i ? i : t;
    }, e.thresholdBlock = function(t, n, i, a, o, f) {
      for (var u = 0, s = i * o + n; u < e.BLOCK_SIZE; u++, s += o)
        for (var c = 0; c < e.BLOCK_SIZE; c++)
          (t[s + c] & 255) <= a && f.set(n + c, i + u);
    }, e.calculateBlackPoints = function(t, n, i, a, o) {
      for (var f = o - e.BLOCK_SIZE, u = a - e.BLOCK_SIZE, s = new Array(i), c = 0; c < i; c++) {
        s[c] = new Int32Array(n);
        var h = c << e.BLOCK_SIZE_POWER;
        h > f && (h = f);
        for (var l = 0; l < n; l++) {
          var d = l << e.BLOCK_SIZE_POWER;
          d > u && (d = u);
          for (var v = 0, x = 255, g = 0, _ = 0, y = h * a + d; _ < e.BLOCK_SIZE; _++, y += a) {
            for (var A = 0; A < e.BLOCK_SIZE; A++) {
              var E = t[y + A] & 255;
              v += E, E < x && (x = E), E > g && (g = E);
            }
            if (g - x > e.MIN_DYNAMIC_RANGE)
              for (_++, y += a; _ < e.BLOCK_SIZE; _++, y += a)
                for (var A = 0; A < e.BLOCK_SIZE; A++)
                  v += t[y + A] & 255;
          }
          var I = v >> e.BLOCK_SIZE_POWER * 2;
          if (g - x <= e.MIN_DYNAMIC_RANGE && (I = x / 2, c > 0 && l > 0)) {
            var S = (s[c - 1][l] + 2 * s[c][l - 1] + s[c - 1][l - 1]) / 4;
            x < S && (I = S);
          }
          s[c][l] = I;
        }
      }
      return s;
    }, e.BLOCK_SIZE_POWER = 3, e.BLOCK_SIZE = 1 << e.BLOCK_SIZE_POWER, e.BLOCK_SIZE_MASK = e.BLOCK_SIZE - 1, e.MINIMUM_DIMENSION = e.BLOCK_SIZE * 5, e.MIN_DYNAMIC_RANGE = 24, e;
  }(un)
), ct = (
  /** @class */
  function() {
    function r(e, t) {
      this.width = e, this.height = t;
    }
    return r.prototype.getWidth = function() {
      return this.width;
    }, r.prototype.getHeight = function() {
      return this.height;
    }, r.prototype.isCropSupported = function() {
      return !1;
    }, r.prototype.crop = function(e, t, n, i) {
      throw new at("This luminance source does not support cropping.");
    }, r.prototype.isRotateSupported = function() {
      return !1;
    }, r.prototype.rotateCounterClockwise = function() {
      throw new at("This luminance source does not support rotation by 90 degrees.");
    }, r.prototype.rotateCounterClockwise45 = function() {
      throw new at("This luminance source does not support rotation by 45 degrees.");
    }, r.prototype.toString = function() {
      for (var e = new Uint8ClampedArray(this.width), t = new M(), n = 0; n < this.height; n++) {
        for (var i = this.getRow(n, e), a = 0; a < this.width; a++) {
          var o = i[a] & 255, f = void 0;
          o < 64 ? f = "#" : o < 128 ? f = "+" : o < 192 ? f = "." : f = " ", t.append(f);
        }
        t.append(`
`);
      }
      return t.toString();
    }, r;
  }()
), hn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Ht = (
  /** @class */
  function(r) {
    hn(e, r);
    function e(t) {
      var n = r.call(this, t.getWidth(), t.getHeight()) || this;
      return n.delegate = t, n;
    }
    return e.prototype.getRow = function(t, n) {
      for (var i = this.delegate.getRow(t, n), a = this.getWidth(), o = 0; o < a; o++)
        i[o] = /*(byte)*/
        255 - (i[o] & 255);
      return i;
    }, e.prototype.getMatrix = function() {
      for (var t = this.delegate.getMatrix(), n = this.getWidth() * this.getHeight(), i = new Uint8ClampedArray(n), a = 0; a < n; a++)
        i[a] = /*(byte)*/
        255 - (t[a] & 255);
      return i;
    }, e.prototype.isCropSupported = function() {
      return this.delegate.isCropSupported();
    }, e.prototype.crop = function(t, n, i, a) {
      return new e(this.delegate.crop(t, n, i, a));
    }, e.prototype.isRotateSupported = function() {
      return this.delegate.isRotateSupported();
    }, e.prototype.invert = function() {
      return this.delegate;
    }, e.prototype.rotateCounterClockwise = function() {
      return new e(this.delegate.rotateCounterClockwise());
    }, e.prototype.rotateCounterClockwise45 = function() {
      return new e(this.delegate.rotateCounterClockwise45());
    }, e;
  }(ct)
), ln = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), dn = (
  /** @class */
  function(r) {
    ln(e, r);
    function e(t) {
      var n = r.call(this, t.width, t.height) || this;
      return n.canvas = t, n.tempCanvasElement = null, n.buffer = e.makeBufferFromCanvasImageData(t), n;
    }
    return e.makeBufferFromCanvasImageData = function(t) {
      var n = t.getContext("2d").getImageData(0, 0, t.width, t.height);
      return e.toGrayscaleBuffer(n.data, t.width, t.height);
    }, e.toGrayscaleBuffer = function(t, n, i) {
      var a = new Uint8ClampedArray(n * i);
      if (e.FRAME_INDEX = !e.FRAME_INDEX, e.FRAME_INDEX)
        for (var o = 0, f = 0, u = t.length; o < u; o += 4, f++) {
          var s = void 0, c = t[o + 3];
          if (c === 0)
            s = 255;
          else {
            var h = t[o], l = t[o + 1], d = t[o + 2];
            s = 306 * h + 601 * l + 117 * d + 512 >> 10;
          }
          a[f] = s;
        }
      else
        for (var o = 0, f = 0, v = t.length; o < v; o += 4, f++) {
          var s = void 0, c = t[o + 3];
          if (c === 0)
            s = 255;
          else {
            var h = t[o], l = t[o + 1], d = t[o + 2];
            s = 306 * h + 601 * l + 117 * d + 512 >> 10;
          }
          a[f] = 255 - s;
        }
      return a;
    }, e.prototype.getRow = function(t, n) {
      if (t < 0 || t >= this.getHeight())
        throw new N("Requested row is outside the image: " + t);
      var i = this.getWidth(), a = t * i;
      return n === null ? n = this.buffer.slice(a, a + i) : (n.length < i && (n = new Uint8ClampedArray(i)), n.set(this.buffer.slice(a, a + i))), n;
    }, e.prototype.getMatrix = function() {
      return this.buffer;
    }, e.prototype.isCropSupported = function() {
      return !0;
    }, e.prototype.crop = function(t, n, i, a) {
      return r.prototype.crop.call(this, t, n, i, a), this;
    }, e.prototype.isRotateSupported = function() {
      return !0;
    }, e.prototype.rotateCounterClockwise = function() {
      return this.rotate(-90), this;
    }, e.prototype.rotateCounterClockwise45 = function() {
      return this.rotate(-45), this;
    }, e.prototype.getTempCanvasElement = function() {
      if (this.tempCanvasElement === null) {
        var t = this.canvas.ownerDocument.createElement("canvas");
        t.width = this.canvas.width, t.height = this.canvas.height, this.tempCanvasElement = t;
      }
      return this.tempCanvasElement;
    }, e.prototype.rotate = function(t) {
      var n = this.getTempCanvasElement(), i = n.getContext("2d"), a = t * e.DEGREE_TO_RADIANS, o = this.canvas.width, f = this.canvas.height, u = Math.ceil(Math.abs(Math.cos(a)) * o + Math.abs(Math.sin(a)) * f), s = Math.ceil(Math.abs(Math.sin(a)) * o + Math.abs(Math.cos(a)) * f);
      return n.width = u, n.height = s, i.translate(u / 2, s / 2), i.rotate(a), i.drawImage(this.canvas, o / -2, f / -2), this.buffer = e.makeBufferFromCanvasImageData(n), this;
    }, e.prototype.invert = function() {
      return new Ht(this);
    }, e.DEGREE_TO_RADIANS = Math.PI / 180, e.FRAME_INDEX = !0, e;
  }(ct)
), vn = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.deviceId = e, this.label = t, this.kind = "videoinput", this.groupId = n || void 0;
    }
    return r.prototype.toJSON = function() {
      return {
        kind: this.kind,
        groupId: this.groupId,
        deviceId: this.deviceId,
        label: this.label
      };
    }, r;
  }()
), de = function(r, e, t, n) {
  function i(a) {
    return a instanceof t ? a : new t(function(o) {
      o(a);
    });
  }
  return new (t || (t = Promise))(function(a, o) {
    function f(c) {
      try {
        s(n.next(c));
      } catch (h) {
        o(h);
      }
    }
    function u(c) {
      try {
        s(n.throw(c));
      } catch (h) {
        o(h);
      }
    }
    function s(c) {
      c.done ? a(c.value) : i(c.value).then(f, u);
    }
    s((n = n.apply(r, e || [])).next());
  });
}, ve = function(r, e) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, o;
  return o = { next: f(0), throw: f(1), return: f(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function f(s) {
    return function(c) {
      return u([s, c]);
    };
  }
  function u(s) {
    if (n) throw new TypeError("Generator is already executing.");
    for (; t; ) try {
      if (n = 1, i && (a = s[0] & 2 ? i.return : s[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, s[1])).done) return a;
      switch (i = 0, a && (s = [s[0] & 2, a.value]), s[0]) {
        case 0:
        case 1:
          a = s;
          break;
        case 4:
          return t.label++, { value: s[1], done: !1 };
        case 5:
          t.label++, i = s[1], s = [0];
          continue;
        case 7:
          s = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (s[0] === 6 || s[0] === 2)) {
            t = 0;
            continue;
          }
          if (s[0] === 3 && (!a || s[1] > a[0] && s[1] < a[3])) {
            t.label = s[1];
            break;
          }
          if (s[0] === 6 && t.label < a[1]) {
            t.label = a[1], a = s;
            break;
          }
          if (a && t.label < a[2]) {
            t.label = a[2], t.ops.push(s);
            break;
          }
          a[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      s = e.call(r, t);
    } catch (c) {
      s = [6, c], i = 0;
    } finally {
      n = a = 0;
    }
    if (s[0] & 5) throw s[1];
    return { value: s[0] ? s[1] : void 0, done: !0 };
  }
}, pn = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, We = (
  /** @class */
  function() {
    function r(e, t, n) {
      t === void 0 && (t = 500), this.reader = e, this.timeBetweenScansMillis = t, this._hints = n, this._stopContinuousDecode = !1, this._stopAsyncDecode = !1, this._timeBetweenDecodingAttempts = 0;
    }
    return Object.defineProperty(r.prototype, "hasNavigator", {
      /**
       * If navigator is present.
       */
      get: function() {
        return typeof navigator < "u";
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "isMediaDevicesSuported", {
      /**
       * If mediaDevices under navigator is supported.
       */
      get: function() {
        return this.hasNavigator && !!navigator.mediaDevices;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "canEnumerateDevices", {
      /**
       * If enumerateDevices under navigator is supported.
       */
      get: function() {
        return !!(this.isMediaDevicesSuported && navigator.mediaDevices.enumerateDevices);
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "timeBetweenDecodingAttempts", {
      /** Time between two decoding tries in milli seconds. */
      get: function() {
        return this._timeBetweenDecodingAttempts;
      },
      /**
       * Change the time span the decoder waits between two decoding tries.
       *
       * @param {number} millis Time between two decoding tries in milli seconds.
       */
      set: function(e) {
        this._timeBetweenDecodingAttempts = e < 0 ? 0 : e;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(r.prototype, "hints", {
      /**
       * Sets the hints.
       */
      get: function() {
        return this._hints;
      },
      /**
       * Sets the hints.
       */
      set: function(e) {
        this._hints = e || null;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.listVideoInputDevices = function() {
      return de(this, void 0, void 0, function() {
        var e, t, n, i, a, o, f, u, s, c, h, l;
        return ve(this, function(d) {
          switch (d.label) {
            case 0:
              if (!this.hasNavigator)
                throw new Error("Can't enumerate devices, navigator is not present.");
              if (!this.canEnumerateDevices)
                throw new Error("Can't enumerate devices, method not supported.");
              return [4, navigator.mediaDevices.enumerateDevices()];
            case 1:
              e = d.sent(), t = [];
              try {
                for (n = pn(e), i = n.next(); !i.done; i = n.next())
                  a = i.value, o = a.kind === "video" ? "videoinput" : a.kind, o === "videoinput" && (f = a.deviceId || a.id, u = a.label || "Video device " + (t.length + 1), s = a.groupId, c = { deviceId: f, label: u, kind: o, groupId: s }, t.push(c));
              } catch (v) {
                h = { error: v };
              } finally {
                try {
                  i && !i.done && (l = n.return) && l.call(n);
                } finally {
                  if (h) throw h.error;
                }
              }
              return [2, t];
          }
        });
      });
    }, r.prototype.getVideoInputDevices = function() {
      return de(this, void 0, void 0, function() {
        var e;
        return ve(this, function(t) {
          switch (t.label) {
            case 0:
              return [4, this.listVideoInputDevices()];
            case 1:
              return e = t.sent(), [2, e.map(function(n) {
                return new vn(n.deviceId, n.label);
              })];
          }
        });
      });
    }, r.prototype.findDeviceById = function(e) {
      return de(this, void 0, void 0, function() {
        var t;
        return ve(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, this.listVideoInputDevices()];
            case 1:
              return t = n.sent(), t ? [2, t.find(function(i) {
                return i.deviceId === e;
              })] : [2, null];
          }
        });
      });
    }, r.prototype.decodeFromInputVideoDevice = function(e, t) {
      return de(this, void 0, void 0, function() {
        return ve(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, this.decodeOnceFromVideoDevice(e, t)];
            case 1:
              return [2, n.sent()];
          }
        });
      });
    }, r.prototype.decodeOnceFromVideoDevice = function(e, t) {
      return de(this, void 0, void 0, function() {
        var n, i;
        return ve(this, function(a) {
          switch (a.label) {
            case 0:
              return this.reset(), e ? n = { deviceId: { exact: e } } : n = { facingMode: "environment" }, i = { video: n }, [4, this.decodeOnceFromConstraints(i, t)];
            case 1:
              return [2, a.sent()];
          }
        });
      });
    }, r.prototype.decodeOnceFromConstraints = function(e, t) {
      return de(this, void 0, void 0, function() {
        var n;
        return ve(this, function(i) {
          switch (i.label) {
            case 0:
              return [4, navigator.mediaDevices.getUserMedia(e)];
            case 1:
              return n = i.sent(), [4, this.decodeOnceFromStream(n, t)];
            case 2:
              return [2, i.sent()];
          }
        });
      });
    }, r.prototype.decodeOnceFromStream = function(e, t) {
      return de(this, void 0, void 0, function() {
        var n, i;
        return ve(this, function(a) {
          switch (a.label) {
            case 0:
              return this.reset(), [4, this.attachStreamToVideo(e, t)];
            case 1:
              return n = a.sent(), [4, this.decodeOnce(n)];
            case 2:
              return i = a.sent(), [2, i];
          }
        });
      });
    }, r.prototype.decodeFromInputVideoDeviceContinuously = function(e, t, n) {
      return de(this, void 0, void 0, function() {
        return ve(this, function(i) {
          switch (i.label) {
            case 0:
              return [4, this.decodeFromVideoDevice(e, t, n)];
            case 1:
              return [2, i.sent()];
          }
        });
      });
    }, r.prototype.decodeFromVideoDevice = function(e, t, n) {
      return de(this, void 0, void 0, function() {
        var i, a;
        return ve(this, function(o) {
          switch (o.label) {
            case 0:
              return e ? i = { deviceId: { exact: e } } : i = { facingMode: "environment" }, a = { video: i }, [4, this.decodeFromConstraints(a, t, n)];
            case 1:
              return [2, o.sent()];
          }
        });
      });
    }, r.prototype.decodeFromConstraints = function(e, t, n) {
      return de(this, void 0, void 0, function() {
        var i;
        return ve(this, function(a) {
          switch (a.label) {
            case 0:
              return [4, navigator.mediaDevices.getUserMedia(e)];
            case 1:
              return i = a.sent(), [4, this.decodeFromStream(i, t, n)];
            case 2:
              return [2, a.sent()];
          }
        });
      });
    }, r.prototype.decodeFromStream = function(e, t, n) {
      return de(this, void 0, void 0, function() {
        var i;
        return ve(this, function(a) {
          switch (a.label) {
            case 0:
              return this.reset(), [4, this.attachStreamToVideo(e, t)];
            case 1:
              return i = a.sent(), [4, this.decodeContinuously(i, n)];
            case 2:
              return [2, a.sent()];
          }
        });
      });
    }, r.prototype.stopAsyncDecode = function() {
      this._stopAsyncDecode = !0;
    }, r.prototype.stopContinuousDecode = function() {
      this._stopContinuousDecode = !0;
    }, r.prototype.attachStreamToVideo = function(e, t) {
      return de(this, void 0, void 0, function() {
        var n;
        return ve(this, function(i) {
          switch (i.label) {
            case 0:
              return n = this.prepareVideoElement(t), this.addVideoSource(n, e), this.videoElement = n, this.stream = e, [4, this.playVideoOnLoadAsync(n)];
            case 1:
              return i.sent(), [2, n];
          }
        });
      });
    }, r.prototype.playVideoOnLoadAsync = function(e) {
      var t = this;
      return new Promise(function(n, i) {
        return t.playVideoOnLoad(e, function() {
          return n();
        });
      });
    }, r.prototype.playVideoOnLoad = function(e, t) {
      var n = this;
      this.videoEndedListener = function() {
        return n.stopStreams();
      }, this.videoCanPlayListener = function() {
        return n.tryPlayVideo(e);
      }, e.addEventListener("ended", this.videoEndedListener), e.addEventListener("canplay", this.videoCanPlayListener), e.addEventListener("playing", t), this.tryPlayVideo(e);
    }, r.prototype.isVideoPlaying = function(e) {
      return e.currentTime > 0 && !e.paused && !e.ended && e.readyState > 2;
    }, r.prototype.tryPlayVideo = function(e) {
      return de(this, void 0, void 0, function() {
        return ve(this, function(t) {
          switch (t.label) {
            case 0:
              if (this.isVideoPlaying(e))
                return console.warn("Trying to play video that is already playing."), [
                  2
                  /*return*/
                ];
              t.label = 1;
            case 1:
              return t.trys.push([1, 3, , 4]), [4, e.play()];
            case 2:
              return t.sent(), [3, 4];
            case 3:
              return t.sent(), console.warn("It was not possible to play the video."), [3, 4];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.getMediaElement = function(e, t) {
      var n = document.getElementById(e);
      if (!n)
        throw new Ie("element with id '" + e + "' not found");
      if (n.nodeName.toLowerCase() !== t.toLowerCase())
        throw new Ie("element with id '" + e + "' must be an " + t + " element");
      return n;
    }, r.prototype.decodeFromImage = function(e, t) {
      if (!e && !t)
        throw new Ie("either imageElement with a src set or an url must be provided");
      return t && !e ? this.decodeFromImageUrl(t) : this.decodeFromImageElement(e);
    }, r.prototype.decodeFromVideo = function(e, t) {
      if (!e && !t)
        throw new Ie("Either an element with a src set or an URL must be provided");
      return t && !e ? this.decodeFromVideoUrl(t) : this.decodeFromVideoElement(e);
    }, r.prototype.decodeFromVideoContinuously = function(e, t, n) {
      if (e === void 0 && t === void 0)
        throw new Ie("Either an element with a src set or an URL must be provided");
      return t && !e ? this.decodeFromVideoUrlContinuously(t, n) : this.decodeFromVideoElementContinuously(e, n);
    }, r.prototype.decodeFromImageElement = function(e) {
      if (!e)
        throw new Ie("An image element must be provided.");
      this.reset();
      var t = this.prepareImageElement(e);
      this.imageElement = t;
      var n;
      return this.isImageLoaded(t) ? n = this.decodeOnce(t, !1, !0) : n = this._decodeOnLoadImage(t), n;
    }, r.prototype.decodeFromVideoElement = function(e) {
      var t = this._decodeFromVideoElementSetup(e);
      return this._decodeOnLoadVideo(t);
    }, r.prototype.decodeFromVideoElementContinuously = function(e, t) {
      var n = this._decodeFromVideoElementSetup(e);
      return this._decodeOnLoadVideoContinuously(n, t);
    }, r.prototype._decodeFromVideoElementSetup = function(e) {
      if (!e)
        throw new Ie("A video element must be provided.");
      this.reset();
      var t = this.prepareVideoElement(e);
      return this.videoElement = t, t;
    }, r.prototype.decodeFromImageUrl = function(e) {
      if (!e)
        throw new Ie("An URL must be provided.");
      this.reset();
      var t = this.prepareImageElement();
      this.imageElement = t;
      var n = this._decodeOnLoadImage(t);
      return t.src = e, n;
    }, r.prototype.decodeFromVideoUrl = function(e) {
      if (!e)
        throw new Ie("An URL must be provided.");
      this.reset();
      var t = this.prepareVideoElement(), n = this.decodeFromVideoElement(t);
      return t.src = e, n;
    }, r.prototype.decodeFromVideoUrlContinuously = function(e, t) {
      if (!e)
        throw new Ie("An URL must be provided.");
      this.reset();
      var n = this.prepareVideoElement(), i = this.decodeFromVideoElementContinuously(n, t);
      return n.src = e, i;
    }, r.prototype._decodeOnLoadImage = function(e) {
      var t = this;
      return new Promise(function(n, i) {
        t.imageLoadedListener = function() {
          return t.decodeOnce(e, !1, !0).then(n, i);
        }, e.addEventListener("load", t.imageLoadedListener);
      });
    }, r.prototype._decodeOnLoadVideo = function(e) {
      return de(this, void 0, void 0, function() {
        return ve(this, function(t) {
          switch (t.label) {
            case 0:
              return [4, this.playVideoOnLoadAsync(e)];
            case 1:
              return t.sent(), [4, this.decodeOnce(e)];
            case 2:
              return [2, t.sent()];
          }
        });
      });
    }, r.prototype._decodeOnLoadVideoContinuously = function(e, t) {
      return de(this, void 0, void 0, function() {
        return ve(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, this.playVideoOnLoadAsync(e)];
            case 1:
              return n.sent(), this.decodeContinuously(e, t), [
                2
                /*return*/
              ];
          }
        });
      });
    }, r.prototype.isImageLoaded = function(e) {
      return !(!e.complete || e.naturalWidth === 0);
    }, r.prototype.prepareImageElement = function(e) {
      var t;
      return typeof e > "u" && (t = document.createElement("img"), t.width = 200, t.height = 200), typeof e == "string" && (t = this.getMediaElement(e, "img")), e instanceof HTMLImageElement && (t = e), t;
    }, r.prototype.prepareVideoElement = function(e) {
      var t;
      return !e && typeof document < "u" && (t = document.createElement("video"), t.width = 200, t.height = 200), typeof e == "string" && (t = this.getMediaElement(e, "video")), e instanceof HTMLVideoElement && (t = e), t.setAttribute("autoplay", "true"), t.setAttribute("muted", "true"), t.setAttribute("playsinline", "true"), t;
    }, r.prototype.decodeOnce = function(e, t, n) {
      var i = this;
      t === void 0 && (t = !0), n === void 0 && (n = !0), this._stopAsyncDecode = !1;
      var a = function(o, f) {
        if (i._stopAsyncDecode) {
          f(new C("Video stream has ended before any code could be detected.")), i._stopAsyncDecode = void 0;
          return;
        }
        try {
          var u = i.decode(e);
          o(u);
        } catch (l) {
          var s = t && l instanceof C, c = l instanceof oe || l instanceof O, h = c && n;
          if (s || h)
            return setTimeout(a, i._timeBetweenDecodingAttempts, o, f);
          f(l);
        }
      };
      return new Promise(function(o, f) {
        return a(o, f);
      });
    }, r.prototype.decodeContinuously = function(e, t) {
      var n = this;
      this._stopContinuousDecode = !1;
      var i = function() {
        if (n._stopContinuousDecode) {
          n._stopContinuousDecode = void 0;
          return;
        }
        try {
          var a = n.decode(e);
          t(a, null), setTimeout(i, n.timeBetweenScansMillis);
        } catch (u) {
          t(null, u);
          var o = u instanceof oe || u instanceof O, f = u instanceof C;
          (o || f) && setTimeout(i, n._timeBetweenDecodingAttempts);
        }
      };
      i();
    }, r.prototype.decode = function(e) {
      var t = this.createBinaryBitmap(e);
      return this.decodeBitmap(t);
    }, r.prototype.createBinaryBitmap = function(e) {
      this.getCaptureCanvasContext(e), e instanceof HTMLVideoElement ? this.drawFrameOnCanvas(e) : this.drawImageOnCanvas(e);
      var t = this.getCaptureCanvas(e), n = new dn(t), i = new cn(n);
      return new Kr(i);
    }, r.prototype.getCaptureCanvasContext = function(e) {
      if (!this.captureCanvasContext) {
        var t = this.getCaptureCanvas(e), n = void 0;
        try {
          n = t.getContext("2d", { willReadFrequently: !0 });
        } catch {
          n = t.getContext("2d");
        }
        this.captureCanvasContext = n;
      }
      return this.captureCanvasContext;
    }, r.prototype.getCaptureCanvas = function(e) {
      if (!this.captureCanvas) {
        var t = this.createCaptureCanvas(e);
        this.captureCanvas = t;
      }
      return this.captureCanvas;
    }, r.prototype.drawFrameOnCanvas = function(e, t, n) {
      t === void 0 && (t = {
        sx: 0,
        sy: 0,
        sWidth: e.videoWidth,
        sHeight: e.videoHeight,
        dx: 0,
        dy: 0,
        dWidth: e.videoWidth,
        dHeight: e.videoHeight
      }), n === void 0 && (n = this.captureCanvasContext), n.drawImage(e, t.sx, t.sy, t.sWidth, t.sHeight, t.dx, t.dy, t.dWidth, t.dHeight);
    }, r.prototype.drawImageOnCanvas = function(e, t, n) {
      t === void 0 && (t = {
        sx: 0,
        sy: 0,
        sWidth: e.naturalWidth,
        sHeight: e.naturalHeight,
        dx: 0,
        dy: 0,
        dWidth: e.naturalWidth,
        dHeight: e.naturalHeight
      }), n === void 0 && (n = this.captureCanvasContext), n.drawImage(e, t.sx, t.sy, t.sWidth, t.sHeight, t.dx, t.dy, t.dWidth, t.dHeight);
    }, r.prototype.decodeBitmap = function(e) {
      return this.reader.decode(e, this._hints);
    }, r.prototype.createCaptureCanvas = function(e) {
      if (typeof document > "u")
        return this._destroyCaptureCanvas(), null;
      var t = document.createElement("canvas"), n, i;
      return typeof e < "u" && (e instanceof HTMLVideoElement ? (n = e.videoWidth, i = e.videoHeight) : e instanceof HTMLImageElement && (n = e.naturalWidth || e.width, i = e.naturalHeight || e.height)), t.style.width = n + "px", t.style.height = i + "px", t.width = n, t.height = i, t;
    }, r.prototype.stopStreams = function() {
      this.stream && (this.stream.getVideoTracks().forEach(function(e) {
        return e.stop();
      }), this.stream = void 0), this._stopAsyncDecode === !1 && this.stopAsyncDecode(), this._stopContinuousDecode === !1 && this.stopContinuousDecode();
    }, r.prototype.reset = function() {
      this.stopStreams(), this._destroyVideoElement(), this._destroyImageElement(), this._destroyCaptureCanvas();
    }, r.prototype._destroyVideoElement = function() {
      this.videoElement && (typeof this.videoEndedListener < "u" && this.videoElement.removeEventListener("ended", this.videoEndedListener), typeof this.videoPlayingEventListener < "u" && this.videoElement.removeEventListener("playing", this.videoPlayingEventListener), typeof this.videoCanPlayListener < "u" && this.videoElement.removeEventListener("loadedmetadata", this.videoCanPlayListener), this.cleanVideoSource(this.videoElement), this.videoElement = void 0);
    }, r.prototype._destroyImageElement = function() {
      this.imageElement && (this.imageLoadedListener !== void 0 && this.imageElement.removeEventListener("load", this.imageLoadedListener), this.imageElement.src = void 0, this.imageElement.removeAttribute("src"), this.imageElement = void 0);
    }, r.prototype._destroyCaptureCanvas = function() {
      this.captureCanvasContext = void 0, this.captureCanvas = void 0;
    }, r.prototype.addVideoSource = function(e, t) {
      try {
        e.srcObject = t;
      } catch {
        e.src = URL.createObjectURL(t);
      }
    }, r.prototype.cleanVideoSource = function(e) {
      try {
        e.srcObject = null;
      } catch {
        e.src = "";
      }
      this.videoElement.removeAttribute("src");
    }, r;
  }()
), le = (
  /** @class */
  function() {
    function r(e, t, n, i, a, o) {
      n === void 0 && (n = t == null ? 0 : 8 * t.length), o === void 0 && (o = Y.currentTimeMillis()), this.text = e, this.rawBytes = t, this.numBits = n, this.resultPoints = i, this.format = a, this.timestamp = o, this.text = e, this.rawBytes = t, n == null ? this.numBits = t == null ? 0 : 8 * t.length : this.numBits = n, this.resultPoints = i, this.format = a, this.resultMetadata = null, o == null ? this.timestamp = Y.currentTimeMillis() : this.timestamp = o;
    }
    return r.prototype.getText = function() {
      return this.text;
    }, r.prototype.getRawBytes = function() {
      return this.rawBytes;
    }, r.prototype.getNumBits = function() {
      return this.numBits;
    }, r.prototype.getResultPoints = function() {
      return this.resultPoints;
    }, r.prototype.getBarcodeFormat = function() {
      return this.format;
    }, r.prototype.getResultMetadata = function() {
      return this.resultMetadata;
    }, r.prototype.putMetadata = function(e, t) {
      this.resultMetadata === null && (this.resultMetadata = /* @__PURE__ */ new Map()), this.resultMetadata.set(e, t);
    }, r.prototype.putAllMetadata = function(e) {
      e !== null && (this.resultMetadata === null ? this.resultMetadata = e : this.resultMetadata = new Map(e));
    }, r.prototype.addResultPoints = function(e) {
      var t = this.resultPoints;
      if (t === null)
        this.resultPoints = e;
      else if (e !== null && e.length > 0) {
        var n = new Array(t.length + e.length);
        Y.arraycopy(t, 0, n, 0, t.length), Y.arraycopy(e, 0, n, t.length, e.length), this.resultPoints = n;
      }
    }, r.prototype.getTimestamp = function() {
      return this.timestamp;
    }, r.prototype.toString = function() {
      return this.text;
    }, r;
  }()
), mt;
(function(r) {
  r[r.AZTEC = 0] = "AZTEC", r[r.CODABAR = 1] = "CODABAR", r[r.CODE_39 = 2] = "CODE_39", r[r.CODE_93 = 3] = "CODE_93", r[r.CODE_128 = 4] = "CODE_128", r[r.DATA_MATRIX = 5] = "DATA_MATRIX", r[r.EAN_8 = 6] = "EAN_8", r[r.EAN_13 = 7] = "EAN_13", r[r.ITF = 8] = "ITF", r[r.MAXICODE = 9] = "MAXICODE", r[r.PDF_417 = 10] = "PDF_417", r[r.QR_CODE = 11] = "QR_CODE", r[r.RSS_14 = 12] = "RSS_14", r[r.RSS_EXPANDED = 13] = "RSS_EXPANDED", r[r.UPC_A = 14] = "UPC_A", r[r.UPC_E = 15] = "UPC_E", r[r.UPC_EAN_EXTENSION = 16] = "UPC_EAN_EXTENSION";
})(mt || (mt = {}));
const b = mt;
var Ot;
(function(r) {
  r[r.OTHER = 0] = "OTHER", r[r.ORIENTATION = 1] = "ORIENTATION", r[r.BYTE_SEGMENTS = 2] = "BYTE_SEGMENTS", r[r.ERROR_CORRECTION_LEVEL = 3] = "ERROR_CORRECTION_LEVEL", r[r.ISSUE_NUMBER = 4] = "ISSUE_NUMBER", r[r.SUGGESTED_PRICE = 5] = "SUGGESTED_PRICE", r[r.POSSIBLE_COUNTRY = 6] = "POSSIBLE_COUNTRY", r[r.UPC_EAN_EXTENSION = 7] = "UPC_EAN_EXTENSION", r[r.PDF417_EXTRA_METADATA = 8] = "PDF417_EXTRA_METADATA", r[r.STRUCTURED_APPEND_SEQUENCE = 9] = "STRUCTURED_APPEND_SEQUENCE", r[r.STRUCTURED_APPEND_PARITY = 10] = "STRUCTURED_APPEND_PARITY";
})(Ot || (Ot = {}));
const ce = Ot;
var ht = (
  /** @class */
  function() {
    function r(e, t, n, i, a, o) {
      a === void 0 && (a = -1), o === void 0 && (o = -1), this.rawBytes = e, this.text = t, this.byteSegments = n, this.ecLevel = i, this.structuredAppendSequenceNumber = a, this.structuredAppendParity = o, this.numBits = e == null ? 0 : 8 * e.length;
    }
    return r.prototype.getRawBytes = function() {
      return this.rawBytes;
    }, r.prototype.getNumBits = function() {
      return this.numBits;
    }, r.prototype.setNumBits = function(e) {
      this.numBits = e;
    }, r.prototype.getText = function() {
      return this.text;
    }, r.prototype.getByteSegments = function() {
      return this.byteSegments;
    }, r.prototype.getECLevel = function() {
      return this.ecLevel;
    }, r.prototype.getErrorsCorrected = function() {
      return this.errorsCorrected;
    }, r.prototype.setErrorsCorrected = function(e) {
      this.errorsCorrected = e;
    }, r.prototype.getErasures = function() {
      return this.erasures;
    }, r.prototype.setErasures = function(e) {
      this.erasures = e;
    }, r.prototype.getOther = function() {
      return this.other;
    }, r.prototype.setOther = function(e) {
      this.other = e;
    }, r.prototype.hasStructuredAppend = function() {
      return this.structuredAppendParity >= 0 && this.structuredAppendSequenceNumber >= 0;
    }, r.prototype.getStructuredAppendParity = function() {
      return this.structuredAppendParity;
    }, r.prototype.getStructuredAppendSequenceNumber = function() {
      return this.structuredAppendSequenceNumber;
    }, r;
  }()
), Ze = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.exp = function(e) {
      return this.expTable[e];
    }, r.prototype.log = function(e) {
      if (e === 0)
        throw new N();
      return this.logTable[e];
    }, r.addOrSubtract = function(e, t) {
      return e ^ t;
    }, r;
  }()
), Pe = (
  /** @class */
  function() {
    function r(e, t) {
      if (t.length === 0)
        throw new N();
      this.field = e;
      var n = t.length;
      if (n > 1 && t[0] === 0) {
        for (var i = 1; i < n && t[i] === 0; )
          i++;
        i === n ? this.coefficients = Int32Array.from([0]) : (this.coefficients = new Int32Array(n - i), Y.arraycopy(t, i, this.coefficients, 0, this.coefficients.length));
      } else
        this.coefficients = t;
    }
    return r.prototype.getCoefficients = function() {
      return this.coefficients;
    }, r.prototype.getDegree = function() {
      return this.coefficients.length - 1;
    }, r.prototype.isZero = function() {
      return this.coefficients[0] === 0;
    }, r.prototype.getCoefficient = function(e) {
      return this.coefficients[this.coefficients.length - 1 - e];
    }, r.prototype.evaluateAt = function(e) {
      if (e === 0)
        return this.getCoefficient(0);
      var t = this.coefficients, n;
      if (e === 1) {
        n = 0;
        for (var i = 0, a = t.length; i !== a; i++) {
          var o = t[i];
          n = Ze.addOrSubtract(n, o);
        }
        return n;
      }
      n = t[0];
      for (var f = t.length, u = this.field, i = 1; i < f; i++)
        n = Ze.addOrSubtract(u.multiply(e, n), t[i]);
      return n;
    }, r.prototype.addOrSubtract = function(e) {
      if (!this.field.equals(e.field))
        throw new N("GenericGFPolys do not have same GenericGF field");
      if (this.isZero())
        return e;
      if (e.isZero())
        return this;
      var t = this.coefficients, n = e.coefficients;
      if (t.length > n.length) {
        var i = t;
        t = n, n = i;
      }
      var a = new Int32Array(n.length), o = n.length - t.length;
      Y.arraycopy(n, 0, a, 0, o);
      for (var f = o; f < n.length; f++)
        a[f] = Ze.addOrSubtract(t[f - o], n[f]);
      return new r(this.field, a);
    }, r.prototype.multiply = function(e) {
      if (!this.field.equals(e.field))
        throw new N("GenericGFPolys do not have same GenericGF field");
      if (this.isZero() || e.isZero())
        return this.field.getZero();
      for (var t = this.coefficients, n = t.length, i = e.coefficients, a = i.length, o = new Int32Array(n + a - 1), f = this.field, u = 0; u < n; u++)
        for (var s = t[u], c = 0; c < a; c++)
          o[u + c] = Ze.addOrSubtract(o[u + c], f.multiply(s, i[c]));
      return new r(f, o);
    }, r.prototype.multiplyScalar = function(e) {
      if (e === 0)
        return this.field.getZero();
      if (e === 1)
        return this;
      for (var t = this.coefficients.length, n = this.field, i = new Int32Array(t), a = this.coefficients, o = 0; o < t; o++)
        i[o] = n.multiply(a[o], e);
      return new r(n, i);
    }, r.prototype.multiplyByMonomial = function(e, t) {
      if (e < 0)
        throw new N();
      if (t === 0)
        return this.field.getZero();
      for (var n = this.coefficients, i = n.length, a = new Int32Array(i + e), o = this.field, f = 0; f < i; f++)
        a[f] = o.multiply(n[f], t);
      return new r(o, a);
    }, r.prototype.divide = function(e) {
      if (!this.field.equals(e.field))
        throw new N("GenericGFPolys do not have same GenericGF field");
      if (e.isZero())
        throw new N("Divide by 0");
      for (var t = this.field, n = t.getZero(), i = this, a = e.getCoefficient(e.getDegree()), o = t.inverse(a); i.getDegree() >= e.getDegree() && !i.isZero(); ) {
        var f = i.getDegree() - e.getDegree(), u = t.multiply(i.getCoefficient(i.getDegree()), o), s = e.multiplyByMonomial(f, u), c = t.buildMonomial(f, u);
        n = n.addOrSubtract(c), i = i.addOrSubtract(s);
      }
      return [n, i];
    }, r.prototype.toString = function() {
      for (var e = "", t = this.getDegree(); t >= 0; t--) {
        var n = this.getCoefficient(t);
        if (n !== 0) {
          if (n < 0 ? (e += " - ", n = -n) : e.length > 0 && (e += " + "), t === 0 || n !== 1) {
            var i = this.field.log(n);
            i === 0 ? e += "1" : i === 1 ? e += "a" : (e += "a^", e += i);
          }
          t !== 0 && (t === 1 ? e += "x" : (e += "x^", e += t));
        }
      }
      return e;
    }, r;
  }()
), xn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Tr = (
  /** @class */
  function(r) {
    xn(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.kind = "ArithmeticException", e;
  }(ye)
), gn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), ge = (
  /** @class */
  function(r) {
    gn(e, r);
    function e(t, n, i) {
      var a = r.call(this) || this;
      a.primitive = t, a.size = n, a.generatorBase = i;
      for (var o = new Int32Array(n), f = 1, u = 0; u < n; u++)
        o[u] = f, f *= 2, f >= n && (f ^= t, f &= n - 1);
      a.expTable = o;
      for (var s = new Int32Array(n), u = 0; u < n - 1; u++)
        s[o[u]] = u;
      return a.logTable = s, a.zero = new Pe(a, Int32Array.from([0])), a.one = new Pe(a, Int32Array.from([1])), a;
    }
    return e.prototype.getZero = function() {
      return this.zero;
    }, e.prototype.getOne = function() {
      return this.one;
    }, e.prototype.buildMonomial = function(t, n) {
      if (t < 0)
        throw new N();
      if (n === 0)
        return this.zero;
      var i = new Int32Array(t + 1);
      return i[0] = n, new Pe(this, i);
    }, e.prototype.inverse = function(t) {
      if (t === 0)
        throw new Tr();
      return this.expTable[this.size - this.logTable[t] - 1];
    }, e.prototype.multiply = function(t, n) {
      return t === 0 || n === 0 ? 0 : this.expTable[(this.logTable[t] + this.logTable[n]) % (this.size - 1)];
    }, e.prototype.getSize = function() {
      return this.size;
    }, e.prototype.getGeneratorBase = function() {
      return this.generatorBase;
    }, e.prototype.toString = function() {
      return "GF(0x" + B.toHexString(this.primitive) + "," + this.size + ")";
    }, e.prototype.equals = function(t) {
      return t === this;
    }, e.AZTEC_DATA_12 = new e(4201, 4096, 1), e.AZTEC_DATA_10 = new e(1033, 1024, 1), e.AZTEC_DATA_6 = new e(67, 64, 1), e.AZTEC_PARAM = new e(19, 16, 1), e.QR_CODE_FIELD_256 = new e(285, 256, 0), e.DATA_MATRIX_FIELD_256 = new e(301, 256, 1), e.AZTEC_DATA_8 = e.DATA_MATRIX_FIELD_256, e.MAXICODE_FIELD_64 = e.AZTEC_DATA_6, e;
  }(Ze)
), yn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Je = (
  /** @class */
  function(r) {
    yn(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.kind = "ReedSolomonException", e;
  }(ye)
), _n = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Qe = (
  /** @class */
  function(r) {
    _n(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.kind = "IllegalStateException", e;
  }(ye)
), lt = (
  /** @class */
  function() {
    function r(e) {
      this.field = e;
    }
    return r.prototype.decode = function(e, t) {
      for (var n = this.field, i = new Pe(n, e), a = new Int32Array(t), o = !0, f = 0; f < t; f++) {
        var u = i.evaluateAt(n.exp(f + n.getGeneratorBase()));
        a[a.length - 1 - f] = u, u !== 0 && (o = !1);
      }
      if (!o)
        for (var s = new Pe(n, a), c = this.runEuclideanAlgorithm(n.buildMonomial(t, 1), s, t), h = c[0], l = c[1], d = this.findErrorLocations(h), v = this.findErrorMagnitudes(l, d), f = 0; f < d.length; f++) {
          var x = e.length - 1 - n.log(d[f]);
          if (x < 0)
            throw new Je("Bad error location");
          e[x] = ge.addOrSubtract(e[x], v[f]);
        }
    }, r.prototype.runEuclideanAlgorithm = function(e, t, n) {
      if (e.getDegree() < t.getDegree()) {
        var i = e;
        e = t, t = i;
      }
      for (var a = this.field, o = e, f = t, u = a.getZero(), s = a.getOne(); f.getDegree() >= (n / 2 | 0); ) {
        var c = o, h = u;
        if (o = f, u = s, o.isZero())
          throw new Je("r_{i-1} was zero");
        f = c;
        for (var l = a.getZero(), d = o.getCoefficient(o.getDegree()), v = a.inverse(d); f.getDegree() >= o.getDegree() && !f.isZero(); ) {
          var x = f.getDegree() - o.getDegree(), g = a.multiply(f.getCoefficient(f.getDegree()), v);
          l = l.addOrSubtract(a.buildMonomial(x, g)), f = f.addOrSubtract(o.multiplyByMonomial(x, g));
        }
        if (s = l.multiply(u).addOrSubtract(h), f.getDegree() >= o.getDegree())
          throw new Qe("Division algorithm failed to reduce polynomial?");
      }
      var _ = s.getCoefficient(0);
      if (_ === 0)
        throw new Je("sigmaTilde(0) was zero");
      var y = a.inverse(_), A = s.multiplyScalar(y), E = f.multiplyScalar(y);
      return [A, E];
    }, r.prototype.findErrorLocations = function(e) {
      var t = e.getDegree();
      if (t === 1)
        return Int32Array.from([e.getCoefficient(1)]);
      for (var n = new Int32Array(t), i = 0, a = this.field, o = 1; o < a.getSize() && i < t; o++)
        e.evaluateAt(o) === 0 && (n[i] = a.inverse(o), i++);
      if (i !== t)
        throw new Je("Error locator degree does not match number of roots");
      return n;
    }, r.prototype.findErrorMagnitudes = function(e, t) {
      for (var n = t.length, i = new Int32Array(n), a = this.field, o = 0; o < n; o++) {
        for (var f = a.inverse(t[o]), u = 1, s = 0; s < n; s++)
          if (o !== s) {
            var c = a.multiply(t[s], f), h = c & 1 ? c & -2 : c | 1;
            u = a.multiply(u, h);
          }
        i[o] = a.multiply(e.evaluateAt(f), a.inverse(u)), a.getGeneratorBase() !== 0 && (i[o] = a.multiply(i[o], f));
      }
      return i;
    }, r;
  }()
), ue;
(function(r) {
  r[r.UPPER = 0] = "UPPER", r[r.LOWER = 1] = "LOWER", r[r.MIXED = 2] = "MIXED", r[r.DIGIT = 3] = "DIGIT", r[r.PUNCT = 4] = "PUNCT", r[r.BINARY = 5] = "BINARY";
})(ue || (ue = {}));
var Zt = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.decode = function(e) {
      this.ddata = e;
      var t = e.getBits(), n = this.extractBits(t), i = this.correctBits(n), a = r.convertBoolArrayToByteArray(i), o = r.getEncodedData(i), f = new ht(a, o, null, null);
      return f.setNumBits(i.length), f;
    }, r.highLevelDecode = function(e) {
      return this.getEncodedData(e);
    }, r.getEncodedData = function(e) {
      for (var t = e.length, n = ue.UPPER, i = ue.UPPER, a = "", o = 0; o < t; )
        if (i === ue.BINARY) {
          if (t - o < 5)
            break;
          var f = r.readCode(e, o, 5);
          if (o += 5, f === 0) {
            if (t - o < 11)
              break;
            f = r.readCode(e, o, 11) + 31, o += 11;
          }
          for (var u = 0; u < f; u++) {
            if (t - o < 8) {
              o = t;
              break;
            }
            var s = r.readCode(e, o, 8);
            a += /*(char)*/
            F.castAsNonUtf8Char(s), o += 8;
          }
          i = n;
        } else {
          var c = i === ue.DIGIT ? 4 : 5;
          if (t - o < c)
            break;
          var s = r.readCode(e, o, c);
          o += c;
          var h = r.getCharacter(i, s);
          h.startsWith("CTRL_") ? (n = i, i = r.getTable(h.charAt(5)), h.charAt(6) === "L" && (n = i)) : (a += h, i = n);
        }
      return a;
    }, r.getTable = function(e) {
      switch (e) {
        case "L":
          return ue.LOWER;
        case "P":
          return ue.PUNCT;
        case "M":
          return ue.MIXED;
        case "D":
          return ue.DIGIT;
        case "B":
          return ue.BINARY;
        case "U":
        default:
          return ue.UPPER;
      }
    }, r.getCharacter = function(e, t) {
      switch (e) {
        case ue.UPPER:
          return r.UPPER_TABLE[t];
        case ue.LOWER:
          return r.LOWER_TABLE[t];
        case ue.MIXED:
          return r.MIXED_TABLE[t];
        case ue.PUNCT:
          return r.PUNCT_TABLE[t];
        case ue.DIGIT:
          return r.DIGIT_TABLE[t];
        default:
          throw new Qe("Bad table");
      }
    }, r.prototype.correctBits = function(e) {
      var t, n;
      this.ddata.getNbLayers() <= 2 ? (n = 6, t = ge.AZTEC_DATA_6) : this.ddata.getNbLayers() <= 8 ? (n = 8, t = ge.AZTEC_DATA_8) : this.ddata.getNbLayers() <= 22 ? (n = 10, t = ge.AZTEC_DATA_10) : (n = 12, t = ge.AZTEC_DATA_12);
      var i = this.ddata.getNbDatablocks(), a = e.length / n;
      if (a < i)
        throw new O();
      for (var o = e.length % n, f = new Int32Array(a), u = 0; u < a; u++, o += n)
        f[u] = r.readCode(e, o, n);
      try {
        var s = new lt(t);
        s.decode(f, a - i);
      } catch (g) {
        throw new O(g);
      }
      for (var c = (1 << n) - 1, h = 0, u = 0; u < i; u++) {
        var l = f[u];
        if (l === 0 || l === c)
          throw new O();
        (l === 1 || l === c - 1) && h++;
      }
      for (var d = new Array(i * n - h), v = 0, u = 0; u < i; u++) {
        var l = f[u];
        if (l === 1 || l === c - 1)
          d.fill(l > 1, v, v + n - 1), v += n - 1;
        else
          for (var x = n - 1; x >= 0; --x)
            d[v++] = (l & 1 << x) !== 0;
      }
      return d;
    }, r.prototype.extractBits = function(e) {
      var t = this.ddata.isCompact(), n = this.ddata.getNbLayers(), i = (t ? 11 : 14) + n * 4, a = new Int32Array(i), o = new Array(this.totalBitsInLayer(n, t));
      if (t)
        for (var f = 0; f < a.length; f++)
          a[f] = f;
      else
        for (var u = i + 1 + 2 * B.truncDivision(B.truncDivision(i, 2) - 1, 15), s = i / 2, c = B.truncDivision(u, 2), f = 0; f < s; f++) {
          var h = f + B.truncDivision(f, 15);
          a[s - f - 1] = c - h - 1, a[s + f] = c + h + 1;
        }
      for (var f = 0, l = 0; f < n; f++) {
        for (var d = (n - f) * 4 + (t ? 9 : 12), v = f * 2, x = i - 1 - v, g = 0; g < d; g++)
          for (var _ = g * 2, y = 0; y < 2; y++)
            o[l + _ + y] = e.get(a[v + y], a[v + g]), o[l + 2 * d + _ + y] = e.get(a[v + g], a[x - y]), o[l + 4 * d + _ + y] = e.get(a[x - y], a[x - g]), o[l + 6 * d + _ + y] = e.get(a[x - g], a[v + y]);
        l += d * 8;
      }
      return o;
    }, r.readCode = function(e, t, n) {
      for (var i = 0, a = t; a < t + n; a++)
        i <<= 1, e[a] && (i |= 1);
      return i;
    }, r.readByte = function(e, t) {
      var n = e.length - t;
      return n >= 8 ? r.readCode(e, t, 8) : r.readCode(e, t, n) << 8 - n;
    }, r.convertBoolArrayToByteArray = function(e) {
      for (var t = new Uint8Array((e.length + 7) / 8), n = 0; n < t.length; n++)
        t[n] = r.readByte(e, 8 * n);
      return t;
    }, r.prototype.totalBitsInLayer = function(e, t) {
      return ((t ? 88 : 112) + 16 * e) * e;
    }, r.UPPER_TABLE = [
      "CTRL_PS",
      " ",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "CTRL_LL",
      "CTRL_ML",
      "CTRL_DL",
      "CTRL_BS"
    ], r.LOWER_TABLE = [
      "CTRL_PS",
      " ",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "CTRL_US",
      "CTRL_ML",
      "CTRL_DL",
      "CTRL_BS"
    ], r.MIXED_TABLE = [
      "CTRL_PS",
      " ",
      "",
      "",
      "",
      "",
      "",
      "",
      "\x07",
      "\b",
      "	",
      `
`,
      "\v",
      "\f",
      "\r",
      "\x1B",
      "",
      "",
      "",
      "",
      "@",
      "\\",
      "^",
      "_",
      "`",
      "|",
      "~",
      "",
      "CTRL_LL",
      "CTRL_UL",
      "CTRL_PL",
      "CTRL_BS"
    ], r.PUNCT_TABLE = [
      "",
      "\r",
      `\r
`,
      ". ",
      ", ",
      ": ",
      "!",
      '"',
      "#",
      "$",
      "%",
      "&",
      "'",
      "(",
      ")",
      "*",
      "+",
      ",",
      "-",
      ".",
      "/",
      ":",
      ";",
      "<",
      "=",
      ">",
      "?",
      "[",
      "]",
      "{",
      "}",
      "CTRL_UL"
    ], r.DIGIT_TABLE = [
      "CTRL_PS",
      " ",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      ",",
      ".",
      "CTRL_UL",
      "CTRL_US"
    ], r;
  }()
), U = (
  /** @class */
  function() {
    function r() {
    }
    return r.round = function(e) {
      return isNaN(e) ? 0 : e <= Number.MIN_SAFE_INTEGER ? Number.MIN_SAFE_INTEGER : e >= Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : (
        /*(int) */
        e + (e < 0 ? -0.5 : 0.5) | 0
      );
    }, r.distance = function(e, t, n, i) {
      var a = e - n, o = t - i;
      return (
        /*(float) */
        Math.sqrt(a * a + o * o)
      );
    }, r.sum = function(e) {
      for (var t = 0, n = 0, i = e.length; n !== i; n++) {
        var a = e[n];
        t += a;
      }
      return t;
    }, r;
  }()
), Tt = (
  /** @class */
  function() {
    function r() {
    }
    return r.floatToIntBits = function(e) {
      return e;
    }, r.MAX_VALUE = Number.MAX_SAFE_INTEGER, r;
  }()
), T = (
  /** @class */
  function() {
    function r(e, t) {
      this.x = e, this.y = t;
    }
    return r.prototype.getX = function() {
      return this.x;
    }, r.prototype.getY = function() {
      return this.y;
    }, r.prototype.equals = function(e) {
      if (e instanceof r) {
        var t = e;
        return this.x === t.x && this.y === t.y;
      }
      return !1;
    }, r.prototype.hashCode = function() {
      return 31 * Tt.floatToIntBits(this.x) + Tt.floatToIntBits(this.y);
    }, r.prototype.toString = function() {
      return "(" + this.x + "," + this.y + ")";
    }, r.orderBestPatterns = function(e) {
      var t = this.distance(e[0], e[1]), n = this.distance(e[1], e[2]), i = this.distance(e[0], e[2]), a, o, f;
      if (n >= t && n >= i ? (o = e[0], a = e[1], f = e[2]) : i >= n && i >= t ? (o = e[1], a = e[0], f = e[2]) : (o = e[2], a = e[0], f = e[1]), this.crossProductZ(a, o, f) < 0) {
        var u = a;
        a = f, f = u;
      }
      e[0] = a, e[1] = o, e[2] = f;
    }, r.distance = function(e, t) {
      return U.distance(e.x, e.y, t.x, t.y);
    }, r.crossProductZ = function(e, t, n) {
      var i = t.x, a = t.y;
      return (n.x - i) * (e.y - a) - (n.y - a) * (e.x - i);
    }, r;
  }()
), Vt = (
  /** @class */
  function() {
    function r(e, t) {
      this.bits = e, this.points = t;
    }
    return r.prototype.getBits = function() {
      return this.bits;
    }, r.prototype.getPoints = function() {
      return this.points;
    }, r;
  }()
), wn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), An = (
  /** @class */
  function(r) {
    wn(e, r);
    function e(t, n, i, a, o) {
      var f = r.call(this, t, n) || this;
      return f.compact = i, f.nbDatablocks = a, f.nbLayers = o, f;
    }
    return e.prototype.getNbLayers = function() {
      return this.nbLayers;
    }, e.prototype.getNbDatablocks = function() {
      return this.nbDatablocks;
    }, e.prototype.isCompact = function() {
      return this.compact;
    }, e;
  }(Vt)
), Dt = (
  /** @class */
  function() {
    function r(e, t, n, i) {
      this.image = e, this.height = e.getHeight(), this.width = e.getWidth(), t == null && (t = r.INIT_SIZE), n == null && (n = e.getWidth() / 2 | 0), i == null && (i = e.getHeight() / 2 | 0);
      var a = t / 2 | 0;
      if (this.leftInit = n - a, this.rightInit = n + a, this.upInit = i - a, this.downInit = i + a, this.upInit < 0 || this.leftInit < 0 || this.downInit >= this.height || this.rightInit >= this.width)
        throw new C();
    }
    return r.prototype.detect = function() {
      for (var e = this.leftInit, t = this.rightInit, n = this.upInit, i = this.downInit, a = !1, o = !0, f = !1, u = !1, s = !1, c = !1, h = !1, l = this.width, d = this.height; o; ) {
        o = !1;
        for (var v = !0; (v || !u) && t < l; )
          v = this.containsBlackPoint(n, i, t, !1), v ? (t++, o = !0, u = !0) : u || t++;
        if (t >= l) {
          a = !0;
          break;
        }
        for (var x = !0; (x || !s) && i < d; )
          x = this.containsBlackPoint(e, t, i, !0), x ? (i++, o = !0, s = !0) : s || i++;
        if (i >= d) {
          a = !0;
          break;
        }
        for (var g = !0; (g || !c) && e >= 0; )
          g = this.containsBlackPoint(n, i, e, !1), g ? (e--, o = !0, c = !0) : c || e--;
        if (e < 0) {
          a = !0;
          break;
        }
        for (var _ = !0; (_ || !h) && n >= 0; )
          _ = this.containsBlackPoint(e, t, n, !0), _ ? (n--, o = !0, h = !0) : h || n--;
        if (n < 0) {
          a = !0;
          break;
        }
        o && (f = !0);
      }
      if (!a && f) {
        for (var y = t - e, A = null, E = 1; A === null && E < y; E++)
          A = this.getBlackPointOnSegment(e, i - E, e + E, i);
        if (A == null)
          throw new C();
        for (var I = null, E = 1; I === null && E < y; E++)
          I = this.getBlackPointOnSegment(e, n + E, e + E, n);
        if (I == null)
          throw new C();
        for (var S = null, E = 1; S === null && E < y; E++)
          S = this.getBlackPointOnSegment(t, n + E, t - E, n);
        if (S == null)
          throw new C();
        for (var m = null, E = 1; m === null && E < y; E++)
          m = this.getBlackPointOnSegment(t, i - E, t - E, i);
        if (m == null)
          throw new C();
        return this.centerEdges(m, A, S, I);
      } else
        throw new C();
    }, r.prototype.getBlackPointOnSegment = function(e, t, n, i) {
      for (var a = U.round(U.distance(e, t, n, i)), o = (n - e) / a, f = (i - t) / a, u = this.image, s = 0; s < a; s++) {
        var c = U.round(e + s * o), h = U.round(t + s * f);
        if (u.get(c, h))
          return new T(c, h);
      }
      return null;
    }, r.prototype.centerEdges = function(e, t, n, i) {
      var a = e.getX(), o = e.getY(), f = t.getX(), u = t.getY(), s = n.getX(), c = n.getY(), h = i.getX(), l = i.getY(), d = r.CORR;
      return a < this.width / 2 ? [
        new T(h - d, l + d),
        new T(f + d, u + d),
        new T(s - d, c - d),
        new T(a + d, o - d)
      ] : [
        new T(h + d, l + d),
        new T(f + d, u - d),
        new T(s - d, c + d),
        new T(a - d, o - d)
      ];
    }, r.prototype.containsBlackPoint = function(e, t, n, i) {
      var a = this.image;
      if (i) {
        for (var o = e; o <= t; o++)
          if (a.get(o, n))
            return !0;
      } else
        for (var f = e; f <= t; f++)
          if (a.get(n, f))
            return !0;
      return !1;
    }, r.INIT_SIZE = 10, r.CORR = 1, r;
  }()
), $t = (
  /** @class */
  function() {
    function r() {
    }
    return r.checkAndNudgePoints = function(e, t) {
      for (var n = e.getWidth(), i = e.getHeight(), a = !0, o = 0; o < t.length && a; o += 2) {
        var f = Math.floor(t[o]), u = Math.floor(t[o + 1]);
        if (f < -1 || f > n || u < -1 || u > i)
          throw new C();
        a = !1, f === -1 ? (t[o] = 0, a = !0) : f === n && (t[o] = n - 1, a = !0), u === -1 ? (t[o + 1] = 0, a = !0) : u === i && (t[o + 1] = i - 1, a = !0);
      }
      a = !0;
      for (var o = t.length - 2; o >= 0 && a; o -= 2) {
        var f = Math.floor(t[o]), u = Math.floor(t[o + 1]);
        if (f < -1 || f > n || u < -1 || u > i)
          throw new C();
        a = !1, f === -1 ? (t[o] = 0, a = !0) : f === n && (t[o] = n - 1, a = !0), u === -1 ? (t[o + 1] = 0, a = !0) : u === i && (t[o + 1] = i - 1, a = !0);
      }
    }, r;
  }()
), Dr = (
  /** @class */
  function() {
    function r(e, t, n, i, a, o, f, u, s) {
      this.a11 = e, this.a21 = t, this.a31 = n, this.a12 = i, this.a22 = a, this.a32 = o, this.a13 = f, this.a23 = u, this.a33 = s;
    }
    return r.quadrilateralToQuadrilateral = function(e, t, n, i, a, o, f, u, s, c, h, l, d, v, x, g) {
      var _ = r.quadrilateralToSquare(e, t, n, i, a, o, f, u), y = r.squareToQuadrilateral(s, c, h, l, d, v, x, g);
      return y.times(_);
    }, r.prototype.transformPoints = function(e) {
      for (var t = e.length, n = this.a11, i = this.a12, a = this.a13, o = this.a21, f = this.a22, u = this.a23, s = this.a31, c = this.a32, h = this.a33, l = 0; l < t; l += 2) {
        var d = e[l], v = e[l + 1], x = a * d + u * v + h;
        e[l] = (n * d + o * v + s) / x, e[l + 1] = (i * d + f * v + c) / x;
      }
    }, r.prototype.transformPointsWithValues = function(e, t) {
      for (var n = this.a11, i = this.a12, a = this.a13, o = this.a21, f = this.a22, u = this.a23, s = this.a31, c = this.a32, h = this.a33, l = e.length, d = 0; d < l; d++) {
        var v = e[d], x = t[d], g = a * v + u * x + h;
        e[d] = (n * v + o * x + s) / g, t[d] = (i * v + f * x + c) / g;
      }
    }, r.squareToQuadrilateral = function(e, t, n, i, a, o, f, u) {
      var s = e - n + a - f, c = t - i + o - u;
      if (s === 0 && c === 0)
        return new r(n - e, a - n, e, i - t, o - i, t, 0, 0, 1);
      var h = n - a, l = f - a, d = i - o, v = u - o, x = h * v - l * d, g = (s * v - l * c) / x, _ = (h * c - s * d) / x;
      return new r(n - e + g * n, f - e + _ * f, e, i - t + g * i, u - t + _ * u, t, g, _, 1);
    }, r.quadrilateralToSquare = function(e, t, n, i, a, o, f, u) {
      return r.squareToQuadrilateral(e, t, n, i, a, o, f, u).buildAdjoint();
    }, r.prototype.buildAdjoint = function() {
      return new r(this.a22 * this.a33 - this.a23 * this.a32, this.a23 * this.a31 - this.a21 * this.a33, this.a21 * this.a32 - this.a22 * this.a31, this.a13 * this.a32 - this.a12 * this.a33, this.a11 * this.a33 - this.a13 * this.a31, this.a12 * this.a31 - this.a11 * this.a32, this.a12 * this.a23 - this.a13 * this.a22, this.a13 * this.a21 - this.a11 * this.a23, this.a11 * this.a22 - this.a12 * this.a21);
    }, r.prototype.times = function(e) {
      return new r(this.a11 * e.a11 + this.a21 * e.a12 + this.a31 * e.a13, this.a11 * e.a21 + this.a21 * e.a22 + this.a31 * e.a23, this.a11 * e.a31 + this.a21 * e.a32 + this.a31 * e.a33, this.a12 * e.a11 + this.a22 * e.a12 + this.a32 * e.a13, this.a12 * e.a21 + this.a22 * e.a22 + this.a32 * e.a23, this.a12 * e.a31 + this.a22 * e.a32 + this.a32 * e.a33, this.a13 * e.a11 + this.a23 * e.a12 + this.a33 * e.a13, this.a13 * e.a21 + this.a23 * e.a22 + this.a33 * e.a23, this.a13 * e.a31 + this.a23 * e.a32 + this.a33 * e.a33);
    }, r;
  }()
), En = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Cn = (
  /** @class */
  function(r) {
    En(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.sampleGrid = function(t, n, i, a, o, f, u, s, c, h, l, d, v, x, g, _, y, A, E) {
      var I = Dr.quadrilateralToQuadrilateral(a, o, f, u, s, c, h, l, d, v, x, g, _, y, A, E);
      return this.sampleGridWithTransform(t, n, i, I);
    }, e.prototype.sampleGridWithTransform = function(t, n, i, a) {
      if (n <= 0 || i <= 0)
        throw new C();
      for (var o = new Te(n, i), f = new Float32Array(2 * n), u = 0; u < i; u++) {
        for (var s = f.length, c = u + 0.5, h = 0; h < s; h += 2)
          f[h] = h / 2 + 0.5, f[h + 1] = c;
        a.transformPoints(f), $t.checkAndNudgePoints(t, f);
        try {
          for (var h = 0; h < s; h += 2)
            t.get(Math.floor(f[h]), Math.floor(f[h + 1])) && o.set(h / 2, u);
        } catch {
          throw new C();
        }
      }
      return o;
    }, e;
  }($t)
), Gt = (
  /** @class */
  function() {
    function r() {
    }
    return r.setGridSampler = function(e) {
      r.gridSampler = e;
    }, r.getInstance = function() {
      return r.gridSampler;
    }, r.gridSampler = new Cn(), r;
  }()
), xe = (
  /** @class */
  function() {
    function r(e, t) {
      this.x = e, this.y = t;
    }
    return r.prototype.toResultPoint = function() {
      return new T(this.getX(), this.getY());
    }, r.prototype.getX = function() {
      return this.x;
    }, r.prototype.getY = function() {
      return this.y;
    }, r;
  }()
), In = (
  /** @class */
  function() {
    function r(e) {
      this.EXPECTED_CORNER_BITS = new Int32Array([
        3808,
        476,
        2107,
        1799
      ]), this.image = e;
    }
    return r.prototype.detect = function() {
      return this.detectMirror(!1);
    }, r.prototype.detectMirror = function(e) {
      var t = this.getMatrixCenter(), n = this.getBullsEyeCorners(t);
      if (e) {
        var i = n[0];
        n[0] = n[2], n[2] = i;
      }
      this.extractParameters(n);
      var a = this.sampleGrid(this.image, n[this.shift % 4], n[(this.shift + 1) % 4], n[(this.shift + 2) % 4], n[(this.shift + 3) % 4]), o = this.getMatrixCornerPoints(n);
      return new An(a, o, this.compact, this.nbDataBlocks, this.nbLayers);
    }, r.prototype.extractParameters = function(e) {
      if (!this.isValidPoint(e[0]) || !this.isValidPoint(e[1]) || !this.isValidPoint(e[2]) || !this.isValidPoint(e[3]))
        throw new C();
      var t = 2 * this.nbCenterLayers, n = new Int32Array([
        this.sampleLine(e[0], e[1], t),
        this.sampleLine(e[1], e[2], t),
        this.sampleLine(e[2], e[3], t),
        this.sampleLine(e[3], e[0], t)
        // Top
      ]);
      this.shift = this.getRotation(n, t);
      for (var i = 0, a = 0; a < 4; a++) {
        var o = n[(this.shift + a) % 4];
        this.compact ? (i <<= 7, i += o >> 1 & 127) : (i <<= 10, i += (o >> 2 & 992) + (o >> 1 & 31));
      }
      var f = this.getCorrectedParameterData(i, this.compact);
      this.compact ? (this.nbLayers = (f >> 6) + 1, this.nbDataBlocks = (f & 63) + 1) : (this.nbLayers = (f >> 11) + 1, this.nbDataBlocks = (f & 2047) + 1);
    }, r.prototype.getRotation = function(e, t) {
      var n = 0;
      e.forEach(function(a, o, f) {
        var u = (a >> t - 2 << 1) + (a & 1);
        n = (n << 3) + u;
      }), n = ((n & 1) << 11) + (n >> 1);
      for (var i = 0; i < 4; i++)
        if (B.bitCount(n ^ this.EXPECTED_CORNER_BITS[i]) <= 2)
          return i;
      throw new C();
    }, r.prototype.getCorrectedParameterData = function(e, t) {
      var n, i;
      t ? (n = 7, i = 2) : (n = 10, i = 4);
      for (var a = n - i, o = new Int32Array(n), f = n - 1; f >= 0; --f)
        o[f] = e & 15, e >>= 4;
      try {
        var u = new lt(ge.AZTEC_PARAM);
        u.decode(o, a);
      } catch {
        throw new C();
      }
      for (var s = 0, f = 0; f < i; f++)
        s = (s << 4) + o[f];
      return s;
    }, r.prototype.getBullsEyeCorners = function(e) {
      var t = e, n = e, i = e, a = e, o = !0;
      for (this.nbCenterLayers = 1; this.nbCenterLayers < 9; this.nbCenterLayers++) {
        var f = this.getFirstDifferent(t, o, 1, -1), u = this.getFirstDifferent(n, o, 1, 1), s = this.getFirstDifferent(i, o, -1, 1), c = this.getFirstDifferent(a, o, -1, -1);
        if (this.nbCenterLayers > 2) {
          var h = this.distancePoint(c, f) * this.nbCenterLayers / (this.distancePoint(a, t) * (this.nbCenterLayers + 2));
          if (h < 0.75 || h > 1.25 || !this.isWhiteOrBlackRectangle(f, u, s, c))
            break;
        }
        t = f, n = u, i = s, a = c, o = !o;
      }
      if (this.nbCenterLayers !== 5 && this.nbCenterLayers !== 7)
        throw new C();
      this.compact = this.nbCenterLayers === 5;
      var l = new T(t.getX() + 0.5, t.getY() - 0.5), d = new T(n.getX() + 0.5, n.getY() + 0.5), v = new T(i.getX() - 0.5, i.getY() + 0.5), x = new T(a.getX() - 0.5, a.getY() - 0.5);
      return this.expandSquare([l, d, v, x], 2 * this.nbCenterLayers - 3, 2 * this.nbCenterLayers);
    }, r.prototype.getMatrixCenter = function() {
      var e, t, n, i;
      try {
        var a = new Dt(this.image).detect();
        e = a[0], t = a[1], n = a[2], i = a[3];
      } catch {
        var o = this.image.getWidth() / 2, f = this.image.getHeight() / 2;
        e = this.getFirstDifferent(new xe(o + 7, f - 7), !1, 1, -1).toResultPoint(), t = this.getFirstDifferent(new xe(o + 7, f + 7), !1, 1, 1).toResultPoint(), n = this.getFirstDifferent(new xe(o - 7, f + 7), !1, -1, 1).toResultPoint(), i = this.getFirstDifferent(new xe(o - 7, f - 7), !1, -1, -1).toResultPoint();
      }
      var u = U.round((e.getX() + i.getX() + t.getX() + n.getX()) / 4), s = U.round((e.getY() + i.getY() + t.getY() + n.getY()) / 4);
      try {
        var a = new Dt(this.image, 15, u, s).detect();
        e = a[0], t = a[1], n = a[2], i = a[3];
      } catch {
        e = this.getFirstDifferent(new xe(u + 7, s - 7), !1, 1, -1).toResultPoint(), t = this.getFirstDifferent(new xe(u + 7, s + 7), !1, 1, 1).toResultPoint(), n = this.getFirstDifferent(new xe(u - 7, s + 7), !1, -1, 1).toResultPoint(), i = this.getFirstDifferent(new xe(u - 7, s - 7), !1, -1, -1).toResultPoint();
      }
      return u = U.round((e.getX() + i.getX() + t.getX() + n.getX()) / 4), s = U.round((e.getY() + i.getY() + t.getY() + n.getY()) / 4), new xe(u, s);
    }, r.prototype.getMatrixCornerPoints = function(e) {
      return this.expandSquare(e, 2 * this.nbCenterLayers, this.getDimension());
    }, r.prototype.sampleGrid = function(e, t, n, i, a) {
      var o = Gt.getInstance(), f = this.getDimension(), u = f / 2 - this.nbCenterLayers, s = f / 2 + this.nbCenterLayers;
      return o.sampleGrid(
        e,
        f,
        f,
        u,
        u,
        // topleft
        s,
        u,
        // topright
        s,
        s,
        // bottomright
        u,
        s,
        // bottomleft
        t.getX(),
        t.getY(),
        n.getX(),
        n.getY(),
        i.getX(),
        i.getY(),
        a.getX(),
        a.getY()
      );
    }, r.prototype.sampleLine = function(e, t, n) {
      for (var i = 0, a = this.distanceResultPoint(e, t), o = a / n, f = e.getX(), u = e.getY(), s = o * (t.getX() - e.getX()) / a, c = o * (t.getY() - e.getY()) / a, h = 0; h < n; h++)
        this.image.get(U.round(f + h * s), U.round(u + h * c)) && (i |= 1 << n - h - 1);
      return i;
    }, r.prototype.isWhiteOrBlackRectangle = function(e, t, n, i) {
      var a = 3;
      e = new xe(e.getX() - a, e.getY() + a), t = new xe(t.getX() - a, t.getY() - a), n = new xe(n.getX() + a, n.getY() - a), i = new xe(i.getX() + a, i.getY() + a);
      var o = this.getColor(i, e);
      if (o === 0)
        return !1;
      var f = this.getColor(e, t);
      return f !== o || (f = this.getColor(t, n), f !== o) ? !1 : (f = this.getColor(n, i), f === o);
    }, r.prototype.getColor = function(e, t) {
      for (var n = this.distancePoint(e, t), i = (t.getX() - e.getX()) / n, a = (t.getY() - e.getY()) / n, o = 0, f = e.getX(), u = e.getY(), s = this.image.get(e.getX(), e.getY()), c = Math.ceil(n), h = 0; h < c; h++)
        f += i, u += a, this.image.get(U.round(f), U.round(u)) !== s && o++;
      var l = o / n;
      return l > 0.1 && l < 0.9 ? 0 : l <= 0.1 === s ? 1 : -1;
    }, r.prototype.getFirstDifferent = function(e, t, n, i) {
      for (var a = e.getX() + n, o = e.getY() + i; this.isValid(a, o) && this.image.get(a, o) === t; )
        a += n, o += i;
      for (a -= n, o -= i; this.isValid(a, o) && this.image.get(a, o) === t; )
        a += n;
      for (a -= n; this.isValid(a, o) && this.image.get(a, o) === t; )
        o += i;
      return o -= i, new xe(a, o);
    }, r.prototype.expandSquare = function(e, t, n) {
      var i = n / (2 * t), a = e[0].getX() - e[2].getX(), o = e[0].getY() - e[2].getY(), f = (e[0].getX() + e[2].getX()) / 2, u = (e[0].getY() + e[2].getY()) / 2, s = new T(f + i * a, u + i * o), c = new T(f - i * a, u - i * o);
      a = e[1].getX() - e[3].getX(), o = e[1].getY() - e[3].getY(), f = (e[1].getX() + e[3].getX()) / 2, u = (e[1].getY() + e[3].getY()) / 2;
      var h = new T(f + i * a, u + i * o), l = new T(f - i * a, u - i * o), d = [s, h, c, l];
      return d;
    }, r.prototype.isValid = function(e, t) {
      return e >= 0 && e < this.image.getWidth() && t > 0 && t < this.image.getHeight();
    }, r.prototype.isValidPoint = function(e) {
      var t = U.round(e.getX()), n = U.round(e.getY());
      return this.isValid(t, n);
    }, r.prototype.distancePoint = function(e, t) {
      return U.distance(e.getX(), e.getY(), t.getX(), t.getY());
    }, r.prototype.distanceResultPoint = function(e, t) {
      return U.distance(e.getX(), e.getY(), t.getX(), t.getY());
    }, r.prototype.getDimension = function() {
      return this.compact ? 4 * this.nbLayers + 11 : this.nbLayers <= 4 ? 4 * this.nbLayers + 15 : 4 * this.nbLayers + 2 * (B.truncDivision(this.nbLayers - 4, 8) + 1) + 15;
    }, r;
  }()
), bt = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.decode = function(e, t) {
      t === void 0 && (t = null);
      var n = null, i = new In(e.getBlackMatrix()), a = null, o = null;
      try {
        var f = i.detectMirror(!1);
        a = f.getPoints(), this.reportFoundResultPoints(t, a), o = new Zt().decode(f);
      } catch (h) {
        n = h;
      }
      if (o == null)
        try {
          var f = i.detectMirror(!0);
          a = f.getPoints(), this.reportFoundResultPoints(t, a), o = new Zt().decode(f);
        } catch (h) {
          throw n ?? h;
        }
      var u = new le(o.getText(), o.getRawBytes(), o.getNumBits(), a, b.AZTEC, Y.currentTimeMillis()), s = o.getByteSegments();
      s != null && u.putMetadata(ce.BYTE_SEGMENTS, s);
      var c = o.getECLevel();
      return c != null && u.putMetadata(ce.ERROR_CORRECTION_LEVEL, c), u;
    }, r.prototype.reportFoundResultPoints = function(e, t) {
      if (e != null) {
        var n = e.get($.NEED_RESULT_POINT_CALLBACK);
        n != null && t.forEach(function(i, a, o) {
          n.foundPossibleResultPoint(i);
        });
      }
    }, r.prototype.reset = function() {
    }, r;
  }()
), Sn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
(function(r) {
  Sn(e, r);
  function e(t) {
    return t === void 0 && (t = 500), r.call(this, new bt(), t) || this;
  }
  return e;
})(We);
var ne = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.decode = function(e, t) {
      try {
        return this.doDecode(e, t);
      } catch {
        var n = t && t.get($.TRY_HARDER) === !0;
        if (n && e.isRotateSupported()) {
          var i = e.rotateCounterClockwise(), a = this.doDecode(i, t), o = a.getResultMetadata(), f = 270;
          o !== null && o.get(ce.ORIENTATION) === !0 && (f = f + o.get(ce.ORIENTATION) % 360), a.putMetadata(ce.ORIENTATION, f);
          var u = a.getResultPoints();
          if (u !== null)
            for (var s = i.getHeight(), c = 0; c < u.length; c++)
              u[c] = new T(s - u[c].getY() - 1, u[c].getX());
          return a;
        } else
          throw new C();
      }
    }, r.prototype.reset = function() {
    }, r.prototype.doDecode = function(e, t) {
      var n = e.getWidth(), i = e.getHeight(), a = new fe(n), o = t && t.get($.TRY_HARDER) === !0, f = Math.max(1, i >> (o ? 8 : 5)), u;
      o ? u = i : u = 15;
      for (var s = Math.trunc(i / 2), c = 0; c < u; c++) {
        var h = Math.trunc((c + 1) / 2), l = (c & 1) === 0, d = s + f * (l ? h : -h);
        if (d < 0 || d >= i)
          break;
        try {
          a = e.getBlackRow(d, a);
        } catch {
          continue;
        }
        for (var v = function(y) {
          if (y === 1 && (a.reverse(), t && t.get($.NEED_RESULT_POINT_CALLBACK) === !0)) {
            var A = /* @__PURE__ */ new Map();
            t.forEach(function(S, m) {
              return A.set(m, S);
            }), A.delete($.NEED_RESULT_POINT_CALLBACK), t = A;
          }
          try {
            var E = x.decodeRow(d, a, t);
            if (y === 1) {
              E.putMetadata(ce.ORIENTATION, 180);
              var I = E.getResultPoints();
              I !== null && (I[0] = new T(n - I[0].getX() - 1, I[0].getY()), I[1] = new T(n - I[1].getX() - 1, I[1].getY()));
            }
            return { value: E };
          } catch {
          }
        }, x = this, g = 0; g < 2; g++) {
          var _ = v(g);
          if (typeof _ == "object")
            return _.value;
        }
      }
      throw new C();
    }, r.recordPattern = function(e, t, n) {
      for (var i = n.length, a = 0; a < i; a++)
        n[a] = 0;
      var o = e.getSize();
      if (t >= o)
        throw new C();
      for (var f = !e.get(t), u = 0, s = t; s < o; ) {
        if (e.get(s) !== f)
          n[u]++;
        else {
          if (++u === i)
            break;
          n[u] = 1, f = !f;
        }
        s++;
      }
      if (!(u === i || u === i - 1 && s === o))
        throw new C();
    }, r.recordPatternInReverse = function(e, t, n) {
      for (var i = n.length, a = e.get(t); t > 0 && i >= 0; )
        e.get(--t) !== a && (i--, a = !a);
      if (i >= 0)
        throw new C();
      r.recordPattern(e, t + 1, n);
    }, r.patternMatchVariance = function(e, t, n) {
      for (var i = e.length, a = 0, o = 0, f = 0; f < i; f++)
        a += e[f], o += t[f];
      if (a < o)
        return Number.POSITIVE_INFINITY;
      var u = a / o;
      n *= u;
      for (var s = 0, c = 0; c < i; c++) {
        var h = e[c], l = t[c] * u, d = h > l ? h - l : l - h;
        if (d > n)
          return Number.POSITIVE_INFINITY;
        s += d;
      }
      return s / a;
    }, r;
  }()
), mn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Kt = (
  /** @class */
  function(r) {
    mn(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.findStartPattern = function(t) {
      for (var n = t.getSize(), i = t.getNextSet(0), a = 0, o = Int32Array.from([0, 0, 0, 0, 0, 0]), f = i, u = !1, s = 6, c = i; c < n; c++)
        if (t.get(c) !== u)
          o[a]++;
        else {
          if (a === s - 1) {
            for (var h = e.MAX_AVG_VARIANCE, l = -1, d = e.CODE_START_A; d <= e.CODE_START_C; d++) {
              var v = ne.patternMatchVariance(o, e.CODE_PATTERNS[d], e.MAX_INDIVIDUAL_VARIANCE);
              v < h && (h = v, l = d);
            }
            if (l >= 0 && t.isRange(Math.max(0, f - (c - f) / 2), f, !1))
              return Int32Array.from([f, c, l]);
            f += o[0] + o[1], o = o.slice(2, o.length), o[a - 1] = 0, o[a] = 0, a--;
          } else
            a++;
          o[a] = 1, u = !u;
        }
      throw new C();
    }, e.decodeCode = function(t, n, i) {
      ne.recordPattern(t, i, n);
      for (var a = e.MAX_AVG_VARIANCE, o = -1, f = 0; f < e.CODE_PATTERNS.length; f++) {
        var u = e.CODE_PATTERNS[f], s = this.patternMatchVariance(n, u, e.MAX_INDIVIDUAL_VARIANCE);
        s < a && (a = s, o = f);
      }
      if (o >= 0)
        return o;
      throw new C();
    }, e.prototype.decodeRow = function(t, n, i) {
      var a = i && i.get($.ASSUME_GS1) === !0, o = e.findStartPattern(n), f = o[2], u = 0, s = new Uint8Array(20);
      s[u++] = f;
      var c;
      switch (f) {
        case e.CODE_START_A:
          c = e.CODE_CODE_A;
          break;
        case e.CODE_START_B:
          c = e.CODE_CODE_B;
          break;
        case e.CODE_START_C:
          c = e.CODE_CODE_C;
          break;
        default:
          throw new O();
      }
      for (var h = !1, l = !1, d = "", v = o[0], x = o[1], g = Int32Array.from([0, 0, 0, 0, 0, 0]), _ = 0, y = 0, A = f, E = 0, I = !0, S = !1, m = !1; !h; ) {
        var D = l;
        switch (l = !1, _ = y, y = e.decodeCode(n, g, x), s[u++] = y, y !== e.CODE_STOP && (I = !0), y !== e.CODE_STOP && (E++, A += E * y), v = x, x += g.reduce(function(vt, pt) {
          return vt + pt;
        }, 0), y) {
          case e.CODE_START_A:
          case e.CODE_START_B:
          case e.CODE_START_C:
            throw new O();
        }
        switch (c) {
          case e.CODE_CODE_A:
            if (y < 64)
              m === S ? d += String.fromCharCode(32 + y) : d += String.fromCharCode(32 + y + 128), m = !1;
            else if (y < 96)
              m === S ? d += String.fromCharCode(y - 64) : d += String.fromCharCode(y + 64), m = !1;
            else
              switch (y !== e.CODE_STOP && (I = !1), y) {
                case e.CODE_FNC_1:
                  a && (d.length === 0 ? d += "]C1" : d += "");
                  break;
                case e.CODE_FNC_2:
                case e.CODE_FNC_3:
                  break;
                case e.CODE_FNC_4_A:
                  !S && m ? (S = !0, m = !1) : S && m ? (S = !1, m = !1) : m = !0;
                  break;
                case e.CODE_SHIFT:
                  l = !0, c = e.CODE_CODE_B;
                  break;
                case e.CODE_CODE_B:
                  c = e.CODE_CODE_B;
                  break;
                case e.CODE_CODE_C:
                  c = e.CODE_CODE_C;
                  break;
                case e.CODE_STOP:
                  h = !0;
                  break;
              }
            break;
          case e.CODE_CODE_B:
            if (y < 96)
              m === S ? d += String.fromCharCode(32 + y) : d += String.fromCharCode(32 + y + 128), m = !1;
            else
              switch (y !== e.CODE_STOP && (I = !1), y) {
                case e.CODE_FNC_1:
                  a && (d.length === 0 ? d += "]C1" : d += "");
                  break;
                case e.CODE_FNC_2:
                case e.CODE_FNC_3:
                  break;
                case e.CODE_FNC_4_B:
                  !S && m ? (S = !0, m = !1) : S && m ? (S = !1, m = !1) : m = !0;
                  break;
                case e.CODE_SHIFT:
                  l = !0, c = e.CODE_CODE_A;
                  break;
                case e.CODE_CODE_A:
                  c = e.CODE_CODE_A;
                  break;
                case e.CODE_CODE_C:
                  c = e.CODE_CODE_C;
                  break;
                case e.CODE_STOP:
                  h = !0;
                  break;
              }
            break;
          case e.CODE_CODE_C:
            if (y < 100)
              y < 10 && (d += "0"), d += y;
            else
              switch (y !== e.CODE_STOP && (I = !1), y) {
                case e.CODE_FNC_1:
                  a && (d.length === 0 ? d += "]C1" : d += "");
                  break;
                case e.CODE_CODE_A:
                  c = e.CODE_CODE_A;
                  break;
                case e.CODE_CODE_B:
                  c = e.CODE_CODE_B;
                  break;
                case e.CODE_STOP:
                  h = !0;
                  break;
              }
            break;
        }
        D && (c = c === e.CODE_CODE_A ? e.CODE_CODE_B : e.CODE_CODE_A);
      }
      var P = x - v;
      if (x = n.getNextUnset(x), !n.isRange(x, Math.min(n.getSize(), x + (x - v) / 2), !1))
        throw new C();
      if (A -= E * _, A % 103 !== _)
        throw new oe();
      var R = d.length;
      if (R === 0)
        throw new C();
      R > 0 && I && (c === e.CODE_CODE_C ? d = d.substring(0, R - 2) : d = d.substring(0, R - 1));
      for (var q = (o[1] + o[0]) / 2, L = v + P / 2, K = s.length, _e = new Uint8Array(K), De = 0; De < K; De++)
        _e[De] = s[De];
      var dt = [new T(q, t), new T(L, t)];
      return new le(d, _e, 0, dt, b.CODE_128, (/* @__PURE__ */ new Date()).getTime());
    }, e.CODE_PATTERNS = [
      Int32Array.from([2, 1, 2, 2, 2, 2]),
      Int32Array.from([2, 2, 2, 1, 2, 2]),
      Int32Array.from([2, 2, 2, 2, 2, 1]),
      Int32Array.from([1, 2, 1, 2, 2, 3]),
      Int32Array.from([1, 2, 1, 3, 2, 2]),
      Int32Array.from([1, 3, 1, 2, 2, 2]),
      Int32Array.from([1, 2, 2, 2, 1, 3]),
      Int32Array.from([1, 2, 2, 3, 1, 2]),
      Int32Array.from([1, 3, 2, 2, 1, 2]),
      Int32Array.from([2, 2, 1, 2, 1, 3]),
      Int32Array.from([2, 2, 1, 3, 1, 2]),
      Int32Array.from([2, 3, 1, 2, 1, 2]),
      Int32Array.from([1, 1, 2, 2, 3, 2]),
      Int32Array.from([1, 2, 2, 1, 3, 2]),
      Int32Array.from([1, 2, 2, 2, 3, 1]),
      Int32Array.from([1, 1, 3, 2, 2, 2]),
      Int32Array.from([1, 2, 3, 1, 2, 2]),
      Int32Array.from([1, 2, 3, 2, 2, 1]),
      Int32Array.from([2, 2, 3, 2, 1, 1]),
      Int32Array.from([2, 2, 1, 1, 3, 2]),
      Int32Array.from([2, 2, 1, 2, 3, 1]),
      Int32Array.from([2, 1, 3, 2, 1, 2]),
      Int32Array.from([2, 2, 3, 1, 1, 2]),
      Int32Array.from([3, 1, 2, 1, 3, 1]),
      Int32Array.from([3, 1, 1, 2, 2, 2]),
      Int32Array.from([3, 2, 1, 1, 2, 2]),
      Int32Array.from([3, 2, 1, 2, 2, 1]),
      Int32Array.from([3, 1, 2, 2, 1, 2]),
      Int32Array.from([3, 2, 2, 1, 1, 2]),
      Int32Array.from([3, 2, 2, 2, 1, 1]),
      Int32Array.from([2, 1, 2, 1, 2, 3]),
      Int32Array.from([2, 1, 2, 3, 2, 1]),
      Int32Array.from([2, 3, 2, 1, 2, 1]),
      Int32Array.from([1, 1, 1, 3, 2, 3]),
      Int32Array.from([1, 3, 1, 1, 2, 3]),
      Int32Array.from([1, 3, 1, 3, 2, 1]),
      Int32Array.from([1, 1, 2, 3, 1, 3]),
      Int32Array.from([1, 3, 2, 1, 1, 3]),
      Int32Array.from([1, 3, 2, 3, 1, 1]),
      Int32Array.from([2, 1, 1, 3, 1, 3]),
      Int32Array.from([2, 3, 1, 1, 1, 3]),
      Int32Array.from([2, 3, 1, 3, 1, 1]),
      Int32Array.from([1, 1, 2, 1, 3, 3]),
      Int32Array.from([1, 1, 2, 3, 3, 1]),
      Int32Array.from([1, 3, 2, 1, 3, 1]),
      Int32Array.from([1, 1, 3, 1, 2, 3]),
      Int32Array.from([1, 1, 3, 3, 2, 1]),
      Int32Array.from([1, 3, 3, 1, 2, 1]),
      Int32Array.from([3, 1, 3, 1, 2, 1]),
      Int32Array.from([2, 1, 1, 3, 3, 1]),
      Int32Array.from([2, 3, 1, 1, 3, 1]),
      Int32Array.from([2, 1, 3, 1, 1, 3]),
      Int32Array.from([2, 1, 3, 3, 1, 1]),
      Int32Array.from([2, 1, 3, 1, 3, 1]),
      Int32Array.from([3, 1, 1, 1, 2, 3]),
      Int32Array.from([3, 1, 1, 3, 2, 1]),
      Int32Array.from([3, 3, 1, 1, 2, 1]),
      Int32Array.from([3, 1, 2, 1, 1, 3]),
      Int32Array.from([3, 1, 2, 3, 1, 1]),
      Int32Array.from([3, 3, 2, 1, 1, 1]),
      Int32Array.from([3, 1, 4, 1, 1, 1]),
      Int32Array.from([2, 2, 1, 4, 1, 1]),
      Int32Array.from([4, 3, 1, 1, 1, 1]),
      Int32Array.from([1, 1, 1, 2, 2, 4]),
      Int32Array.from([1, 1, 1, 4, 2, 2]),
      Int32Array.from([1, 2, 1, 1, 2, 4]),
      Int32Array.from([1, 2, 1, 4, 2, 1]),
      Int32Array.from([1, 4, 1, 1, 2, 2]),
      Int32Array.from([1, 4, 1, 2, 2, 1]),
      Int32Array.from([1, 1, 2, 2, 1, 4]),
      Int32Array.from([1, 1, 2, 4, 1, 2]),
      Int32Array.from([1, 2, 2, 1, 1, 4]),
      Int32Array.from([1, 2, 2, 4, 1, 1]),
      Int32Array.from([1, 4, 2, 1, 1, 2]),
      Int32Array.from([1, 4, 2, 2, 1, 1]),
      Int32Array.from([2, 4, 1, 2, 1, 1]),
      Int32Array.from([2, 2, 1, 1, 1, 4]),
      Int32Array.from([4, 1, 3, 1, 1, 1]),
      Int32Array.from([2, 4, 1, 1, 1, 2]),
      Int32Array.from([1, 3, 4, 1, 1, 1]),
      Int32Array.from([1, 1, 1, 2, 4, 2]),
      Int32Array.from([1, 2, 1, 1, 4, 2]),
      Int32Array.from([1, 2, 1, 2, 4, 1]),
      Int32Array.from([1, 1, 4, 2, 1, 2]),
      Int32Array.from([1, 2, 4, 1, 1, 2]),
      Int32Array.from([1, 2, 4, 2, 1, 1]),
      Int32Array.from([4, 1, 1, 2, 1, 2]),
      Int32Array.from([4, 2, 1, 1, 1, 2]),
      Int32Array.from([4, 2, 1, 2, 1, 1]),
      Int32Array.from([2, 1, 2, 1, 4, 1]),
      Int32Array.from([2, 1, 4, 1, 2, 1]),
      Int32Array.from([4, 1, 2, 1, 2, 1]),
      Int32Array.from([1, 1, 1, 1, 4, 3]),
      Int32Array.from([1, 1, 1, 3, 4, 1]),
      Int32Array.from([1, 3, 1, 1, 4, 1]),
      Int32Array.from([1, 1, 4, 1, 1, 3]),
      Int32Array.from([1, 1, 4, 3, 1, 1]),
      Int32Array.from([4, 1, 1, 1, 1, 3]),
      Int32Array.from([4, 1, 1, 3, 1, 1]),
      Int32Array.from([1, 1, 3, 1, 4, 1]),
      Int32Array.from([1, 1, 4, 1, 3, 1]),
      Int32Array.from([3, 1, 1, 1, 4, 1]),
      Int32Array.from([4, 1, 1, 1, 3, 1]),
      Int32Array.from([2, 1, 1, 4, 1, 2]),
      Int32Array.from([2, 1, 1, 2, 1, 4]),
      Int32Array.from([2, 1, 1, 2, 3, 2]),
      Int32Array.from([2, 3, 3, 1, 1, 1, 2])
    ], e.MAX_AVG_VARIANCE = 0.25, e.MAX_INDIVIDUAL_VARIANCE = 0.7, e.CODE_SHIFT = 98, e.CODE_CODE_C = 99, e.CODE_CODE_B = 100, e.CODE_CODE_A = 101, e.CODE_FNC_1 = 102, e.CODE_FNC_2 = 97, e.CODE_FNC_3 = 96, e.CODE_FNC_4_A = 101, e.CODE_FNC_4_B = 100, e.CODE_START_A = 103, e.CODE_START_B = 104, e.CODE_START_C = 105, e.CODE_STOP = 106, e;
  }(ne)
), On = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), xt = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, qt = (
  /** @class */
  function(r) {
    On(e, r);
    function e(t, n) {
      t === void 0 && (t = !1), n === void 0 && (n = !1);
      var i = r.call(this) || this;
      return i.usingCheckDigit = t, i.extendedMode = n, i.decodeRowResult = "", i.counters = new Int32Array(9), i;
    }
    return e.prototype.decodeRow = function(t, n, i) {
      var a, o, f, u, s = this.counters;
      s.fill(0), this.decodeRowResult = "";
      var c = e.findAsteriskPattern(n, s), h = n.getNextSet(c[1]), l = n.getSize(), d, v;
      do {
        e.recordPattern(n, h, s);
        var x = e.toNarrowWidePattern(s);
        if (x < 0)
          throw new C();
        d = e.patternToChar(x), this.decodeRowResult += d, v = h;
        try {
          for (var g = (a = void 0, xt(s)), _ = g.next(); !_.done; _ = g.next()) {
            var y = _.value;
            h += y;
          }
        } catch (K) {
          a = { error: K };
        } finally {
          try {
            _ && !_.done && (o = g.return) && o.call(g);
          } finally {
            if (a) throw a.error;
          }
        }
        h = n.getNextSet(h);
      } while (d !== "*");
      this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
      var A = 0;
      try {
        for (var E = xt(s), I = E.next(); !I.done; I = E.next()) {
          var y = I.value;
          A += y;
        }
      } catch (K) {
        f = { error: K };
      } finally {
        try {
          I && !I.done && (u = E.return) && u.call(E);
        } finally {
          if (f) throw f.error;
        }
      }
      var S = h - v - A;
      if (h !== l && S * 2 < A)
        throw new C();
      if (this.usingCheckDigit) {
        for (var m = this.decodeRowResult.length - 1, D = 0, P = 0; P < m; P++)
          D += e.ALPHABET_STRING.indexOf(this.decodeRowResult.charAt(P));
        if (this.decodeRowResult.charAt(m) !== e.ALPHABET_STRING.charAt(D % 43))
          throw new oe();
        this.decodeRowResult = this.decodeRowResult.substring(0, m);
      }
      if (this.decodeRowResult.length === 0)
        throw new C();
      var R;
      this.extendedMode ? R = e.decodeExtended(this.decodeRowResult) : R = this.decodeRowResult;
      var q = (c[1] + c[0]) / 2, L = v + A / 2;
      return new le(R, null, 0, [new T(q, t), new T(L, t)], b.CODE_39, (/* @__PURE__ */ new Date()).getTime());
    }, e.findAsteriskPattern = function(t, n) {
      for (var i = t.getSize(), a = t.getNextSet(0), o = 0, f = a, u = !1, s = n.length, c = a; c < i; c++)
        if (t.get(c) !== u)
          n[o]++;
        else {
          if (o === s - 1) {
            if (this.toNarrowWidePattern(n) === e.ASTERISK_ENCODING && t.isRange(Math.max(0, f - Math.floor((c - f) / 2)), f, !1))
              return [f, c];
            f += n[0] + n[1], n.copyWithin(0, 2, 2 + o - 1), n[o - 1] = 0, n[o] = 0, o--;
          } else
            o++;
          n[o] = 1, u = !u;
        }
      throw new C();
    }, e.toNarrowWidePattern = function(t) {
      var n, i, a = t.length, o = 0, f;
      do {
        var u = 2147483647;
        try {
          for (var s = (n = void 0, xt(t)), c = s.next(); !c.done; c = s.next()) {
            var h = c.value;
            h < u && h > o && (u = h);
          }
        } catch (x) {
          n = { error: x };
        } finally {
          try {
            c && !c.done && (i = s.return) && i.call(s);
          } finally {
            if (n) throw n.error;
          }
        }
        o = u, f = 0;
        for (var l = 0, d = 0, v = 0; v < a; v++) {
          var h = t[v];
          h > o && (d |= 1 << a - 1 - v, f++, l += h);
        }
        if (f === 3) {
          for (var v = 0; v < a && f > 0; v++) {
            var h = t[v];
            if (h > o && (f--, h * 2 >= l))
              return -1;
          }
          return d;
        }
      } while (f > 3);
      return -1;
    }, e.patternToChar = function(t) {
      for (var n = 0; n < e.CHARACTER_ENCODINGS.length; n++)
        if (e.CHARACTER_ENCODINGS[n] === t)
          return e.ALPHABET_STRING.charAt(n);
      if (t === e.ASTERISK_ENCODING)
        return "*";
      throw new C();
    }, e.decodeExtended = function(t) {
      for (var n = t.length, i = "", a = 0; a < n; a++) {
        var o = t.charAt(a);
        if (o === "+" || o === "$" || o === "%" || o === "/") {
          var f = t.charAt(a + 1), u = "\0";
          switch (o) {
            case "+":
              if (f >= "A" && f <= "Z")
                u = String.fromCharCode(f.charCodeAt(0) + 32);
              else
                throw new O();
              break;
            case "$":
              if (f >= "A" && f <= "Z")
                u = String.fromCharCode(f.charCodeAt(0) - 64);
              else
                throw new O();
              break;
            case "%":
              if (f >= "A" && f <= "E")
                u = String.fromCharCode(f.charCodeAt(0) - 38);
              else if (f >= "F" && f <= "J")
                u = String.fromCharCode(f.charCodeAt(0) - 11);
              else if (f >= "K" && f <= "O")
                u = String.fromCharCode(f.charCodeAt(0) + 16);
              else if (f >= "P" && f <= "T")
                u = String.fromCharCode(f.charCodeAt(0) + 43);
              else if (f === "U")
                u = "\0";
              else if (f === "V")
                u = "@";
              else if (f === "W")
                u = "`";
              else if (f === "X" || f === "Y" || f === "Z")
                u = "";
              else
                throw new O();
              break;
            case "/":
              if (f >= "A" && f <= "O")
                u = String.fromCharCode(f.charCodeAt(0) - 32);
              else if (f === "Z")
                u = ":";
              else
                throw new O();
              break;
          }
          i += u, a++;
        } else
          i += o;
      }
      return i;
    }, e.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%", e.CHARACTER_ENCODINGS = [
      52,
      289,
      97,
      352,
      49,
      304,
      112,
      37,
      292,
      100,
      265,
      73,
      328,
      25,
      280,
      88,
      13,
      268,
      76,
      28,
      259,
      67,
      322,
      19,
      274,
      82,
      7,
      262,
      70,
      22,
      385,
      193,
      448,
      145,
      400,
      208,
      133,
      388,
      196,
      168,
      162,
      138,
      42
      // /-%
    ], e.ASTERISK_ENCODING = 148, e;
  }(ne)
), Tn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), gt = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Qt = (
  /** @class */
  function(r) {
    Tn(e, r);
    function e() {
      var t = r.call(this) || this;
      return t.decodeRowResult = "", t.counters = new Int32Array(6), t;
    }
    return e.prototype.decodeRow = function(t, n, i) {
      var a, o, f, u, s = this.findAsteriskPattern(n), c = n.getNextSet(s[1]), h = n.getSize(), l = this.counters;
      l.fill(0), this.decodeRowResult = "";
      var d, v;
      do {
        e.recordPattern(n, c, l);
        var x = this.toPattern(l);
        if (x < 0)
          throw new C();
        d = this.patternToChar(x), this.decodeRowResult += d, v = c;
        try {
          for (var g = (a = void 0, gt(l)), _ = g.next(); !_.done; _ = g.next()) {
            var y = _.value;
            c += y;
          }
        } catch (P) {
          a = { error: P };
        } finally {
          try {
            _ && !_.done && (o = g.return) && o.call(g);
          } finally {
            if (a) throw a.error;
          }
        }
        c = n.getNextSet(c);
      } while (d !== "*");
      this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 1);
      var A = 0;
      try {
        for (var E = gt(l), I = E.next(); !I.done; I = E.next()) {
          var y = I.value;
          A += y;
        }
      } catch (P) {
        f = { error: P };
      } finally {
        try {
          I && !I.done && (u = E.return) && u.call(E);
        } finally {
          if (f) throw f.error;
        }
      }
      if (c === h || !n.get(c))
        throw new C();
      if (this.decodeRowResult.length < 2)
        throw new C();
      this.checkChecksums(this.decodeRowResult), this.decodeRowResult = this.decodeRowResult.substring(0, this.decodeRowResult.length - 2);
      var S = this.decodeExtended(this.decodeRowResult), m = (s[1] + s[0]) / 2, D = v + A / 2;
      return new le(S, null, 0, [new T(m, t), new T(D, t)], b.CODE_93, (/* @__PURE__ */ new Date()).getTime());
    }, e.prototype.findAsteriskPattern = function(t) {
      var n = t.getSize(), i = t.getNextSet(0);
      this.counters.fill(0);
      for (var a = this.counters, o = i, f = !1, u = a.length, s = 0, c = i; c < n; c++)
        if (t.get(c) !== f)
          a[s]++;
        else {
          if (s === u - 1) {
            if (this.toPattern(a) === e.ASTERISK_ENCODING)
              return new Int32Array([o, c]);
            o += a[0] + a[1], a.copyWithin(0, 2, 2 + s - 1), a[s - 1] = 0, a[s] = 0, s--;
          } else
            s++;
          a[s] = 1, f = !f;
        }
      throw new C();
    }, e.prototype.toPattern = function(t) {
      var n, i, a = 0;
      try {
        for (var o = gt(t), f = o.next(); !f.done; f = o.next()) {
          var u = f.value;
          a += u;
        }
      } catch (v) {
        n = { error: v };
      } finally {
        try {
          f && !f.done && (i = o.return) && i.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      for (var s = 0, c = t.length, h = 0; h < c; h++) {
        var l = Math.round(t[h] * 9 / a);
        if (l < 1 || l > 4)
          return -1;
        if (h & 1)
          s <<= l;
        else
          for (var d = 0; d < l; d++)
            s = s << 1 | 1;
      }
      return s;
    }, e.prototype.patternToChar = function(t) {
      for (var n = 0; n < e.CHARACTER_ENCODINGS.length; n++)
        if (e.CHARACTER_ENCODINGS[n] === t)
          return e.ALPHABET_STRING.charAt(n);
      throw new C();
    }, e.prototype.decodeExtended = function(t) {
      for (var n = t.length, i = "", a = 0; a < n; a++) {
        var o = t.charAt(a);
        if (o >= "a" && o <= "d") {
          if (a >= n - 1)
            throw new O();
          var f = t.charAt(a + 1), u = "\0";
          switch (o) {
            case "d":
              if (f >= "A" && f <= "Z")
                u = String.fromCharCode(f.charCodeAt(0) + 32);
              else
                throw new O();
              break;
            case "a":
              if (f >= "A" && f <= "Z")
                u = String.fromCharCode(f.charCodeAt(0) - 64);
              else
                throw new O();
              break;
            case "b":
              if (f >= "A" && f <= "E")
                u = String.fromCharCode(f.charCodeAt(0) - 38);
              else if (f >= "F" && f <= "J")
                u = String.fromCharCode(f.charCodeAt(0) - 11);
              else if (f >= "K" && f <= "O")
                u = String.fromCharCode(f.charCodeAt(0) + 16);
              else if (f >= "P" && f <= "T")
                u = String.fromCharCode(f.charCodeAt(0) + 43);
              else if (f === "U")
                u = "\0";
              else if (f === "V")
                u = "@";
              else if (f === "W")
                u = "`";
              else if (f >= "X" && f <= "Z")
                u = "";
              else
                throw new O();
              break;
            case "c":
              if (f >= "A" && f <= "O")
                u = String.fromCharCode(f.charCodeAt(0) - 32);
              else if (f === "Z")
                u = ":";
              else
                throw new O();
              break;
          }
          i += u, a++;
        } else
          i += o;
      }
      return i;
    }, e.prototype.checkChecksums = function(t) {
      var n = t.length;
      this.checkOneChecksum(t, n - 2, 20), this.checkOneChecksum(t, n - 1, 15);
    }, e.prototype.checkOneChecksum = function(t, n, i) {
      for (var a = 1, o = 0, f = n - 1; f >= 0; f--)
        o += a * e.ALPHABET_STRING.indexOf(t.charAt(f)), ++a > i && (a = 1);
      if (t.charAt(n) !== e.ALPHABET_STRING[o % 47])
        throw new oe();
    }, e.ALPHABET_STRING = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ-. $/+%abcd*", e.CHARACTER_ENCODINGS = [
      276,
      328,
      324,
      322,
      296,
      292,
      290,
      336,
      274,
      266,
      424,
      420,
      418,
      404,
      402,
      394,
      360,
      356,
      354,
      308,
      282,
      344,
      332,
      326,
      300,
      278,
      436,
      434,
      428,
      422,
      406,
      410,
      364,
      358,
      310,
      314,
      302,
      468,
      466,
      458,
      366,
      374,
      430,
      294,
      474,
      470,
      306,
      350
    ], e.ASTERISK_ENCODING = e.CHARACTER_ENCODINGS[47], e;
  }(ne)
), Dn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), bn = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Jt = (
  /** @class */
  function(r) {
    Dn(e, r);
    function e() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.narrowLineWidth = -1, t;
    }
    return e.prototype.decodeRow = function(t, n, i) {
      var a, o, f = this.decodeStart(n), u = this.decodeEnd(n), s = new M();
      e.decodeMiddle(n, f[1], u[0], s);
      var c = s.toString(), h = null;
      i != null && (h = i.get($.ALLOWED_LENGTHS)), h == null && (h = e.DEFAULT_ALLOWED_LENGTHS);
      var l = c.length, d = !1, v = 0;
      try {
        for (var x = bn(h), g = x.next(); !g.done; g = x.next()) {
          var _ = g.value;
          if (l === _) {
            d = !0;
            break;
          }
          _ > v && (v = _);
        }
      } catch (E) {
        a = { error: E };
      } finally {
        try {
          g && !g.done && (o = x.return) && o.call(x);
        } finally {
          if (a) throw a.error;
        }
      }
      if (!d && l > v && (d = !0), !d)
        throw new O();
      var y = [new T(f[1], t), new T(u[0], t)], A = new le(
        c,
        null,
        // no natural byte representation for these barcodes
        0,
        y,
        b.ITF,
        (/* @__PURE__ */ new Date()).getTime()
      );
      return A;
    }, e.decodeMiddle = function(t, n, i, a) {
      var o = new Int32Array(10), f = new Int32Array(5), u = new Int32Array(5);
      for (o.fill(0), f.fill(0), u.fill(0); n < i; ) {
        ne.recordPattern(t, n, o);
        for (var s = 0; s < 5; s++) {
          var c = 2 * s;
          f[s] = o[c], u[s] = o[c + 1];
        }
        var h = e.decodeDigit(f);
        a.append(h.toString()), h = this.decodeDigit(u), a.append(h.toString()), o.forEach(function(l) {
          n += l;
        });
      }
    }, e.prototype.decodeStart = function(t) {
      var n = e.skipWhiteSpace(t), i = e.findGuardPattern(t, n, e.START_PATTERN);
      return this.narrowLineWidth = (i[1] - i[0]) / 4, this.validateQuietZone(t, i[0]), i;
    }, e.prototype.validateQuietZone = function(t, n) {
      var i = this.narrowLineWidth * 10;
      i = i < n ? i : n;
      for (var a = n - 1; i > 0 && a >= 0 && !t.get(a); a--)
        i--;
      if (i !== 0)
        throw new C();
    }, e.skipWhiteSpace = function(t) {
      var n = t.getSize(), i = t.getNextSet(0);
      if (i === n)
        throw new C();
      return i;
    }, e.prototype.decodeEnd = function(t) {
      t.reverse();
      try {
        var n = e.skipWhiteSpace(t), i = void 0;
        try {
          i = e.findGuardPattern(t, n, e.END_PATTERN_REVERSED[0]);
        } catch (o) {
          o instanceof C && (i = e.findGuardPattern(t, n, e.END_PATTERN_REVERSED[1]));
        }
        this.validateQuietZone(t, i[0]);
        var a = i[0];
        return i[0] = t.getSize() - i[1], i[1] = t.getSize() - a, i;
      } finally {
        t.reverse();
      }
    }, e.findGuardPattern = function(t, n, i) {
      var a = i.length, o = new Int32Array(a), f = t.getSize(), u = !1, s = 0, c = n;
      o.fill(0);
      for (var h = n; h < f; h++)
        if (t.get(h) !== u)
          o[s]++;
        else {
          if (s === a - 1) {
            if (ne.patternMatchVariance(o, i, e.MAX_INDIVIDUAL_VARIANCE) < e.MAX_AVG_VARIANCE)
              return [c, h];
            c += o[0] + o[1], Y.arraycopy(o, 2, o, 0, s - 1), o[s - 1] = 0, o[s] = 0, s--;
          } else
            s++;
          o[s] = 1, u = !u;
        }
      throw new C();
    }, e.decodeDigit = function(t) {
      for (var n = e.MAX_AVG_VARIANCE, i = -1, a = e.PATTERNS.length, o = 0; o < a; o++) {
        var f = e.PATTERNS[o], u = ne.patternMatchVariance(t, f, e.MAX_INDIVIDUAL_VARIANCE);
        u < n ? (n = u, i = o) : u === n && (i = -1);
      }
      if (i >= 0)
        return i % 10;
      throw new C();
    }, e.PATTERNS = [
      Int32Array.from([1, 1, 2, 2, 1]),
      Int32Array.from([2, 1, 1, 1, 2]),
      Int32Array.from([1, 2, 1, 1, 2]),
      Int32Array.from([2, 2, 1, 1, 1]),
      Int32Array.from([1, 1, 2, 1, 2]),
      Int32Array.from([2, 1, 2, 1, 1]),
      Int32Array.from([1, 2, 2, 1, 1]),
      Int32Array.from([1, 1, 1, 2, 2]),
      Int32Array.from([2, 1, 1, 2, 1]),
      Int32Array.from([1, 2, 1, 2, 1]),
      Int32Array.from([1, 1, 3, 3, 1]),
      Int32Array.from([3, 1, 1, 1, 3]),
      Int32Array.from([1, 3, 1, 1, 3]),
      Int32Array.from([3, 3, 1, 1, 1]),
      Int32Array.from([1, 1, 3, 1, 3]),
      Int32Array.from([3, 1, 3, 1, 1]),
      Int32Array.from([1, 3, 3, 1, 1]),
      Int32Array.from([1, 1, 1, 3, 3]),
      Int32Array.from([3, 1, 1, 3, 1]),
      Int32Array.from([1, 3, 1, 3, 1])
      // 9
    ], e.MAX_AVG_VARIANCE = 0.38, e.MAX_INDIVIDUAL_VARIANCE = 0.5, e.DEFAULT_ALLOWED_LENGTHS = [6, 8, 10, 12, 14], e.START_PATTERN = Int32Array.from([1, 1, 1, 1]), e.END_PATTERN_REVERSED = [
      Int32Array.from([1, 1, 2]),
      Int32Array.from([1, 1, 3])
      // 3x
    ], e;
  }(ne)
), Nn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Xe = (
  /** @class */
  function(r) {
    Nn(e, r);
    function e() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.decodeRowStringBuffer = "", t;
    }
    return e.findStartGuardPattern = function(t) {
      for (var n = !1, i, a = 0, o = Int32Array.from([0, 0, 0]); !n; ) {
        o = Int32Array.from([0, 0, 0]), i = e.findGuardPattern(t, a, !1, this.START_END_PATTERN, o);
        var f = i[0];
        a = i[1];
        var u = f - (a - f);
        u >= 0 && (n = t.isRange(u, f, !1));
      }
      return i;
    }, e.checkChecksum = function(t) {
      return e.checkStandardUPCEANChecksum(t);
    }, e.checkStandardUPCEANChecksum = function(t) {
      var n = t.length;
      if (n === 0)
        return !1;
      var i = parseInt(t.charAt(n - 1), 10);
      return e.getStandardUPCEANChecksum(t.substring(0, n - 1)) === i;
    }, e.getStandardUPCEANChecksum = function(t) {
      for (var n = t.length, i = 0, a = n - 1; a >= 0; a -= 2) {
        var o = t.charAt(a).charCodeAt(0) - 48;
        if (o < 0 || o > 9)
          throw new O();
        i += o;
      }
      i *= 3;
      for (var a = n - 2; a >= 0; a -= 2) {
        var o = t.charAt(a).charCodeAt(0) - 48;
        if (o < 0 || o > 9)
          throw new O();
        i += o;
      }
      return (1e3 - i) % 10;
    }, e.decodeEnd = function(t, n) {
      return e.findGuardPattern(t, n, !1, e.START_END_PATTERN, new Int32Array(e.START_END_PATTERN.length).fill(0));
    }, e.findGuardPatternWithoutCounters = function(t, n, i, a) {
      return this.findGuardPattern(t, n, i, a, new Int32Array(a.length));
    }, e.findGuardPattern = function(t, n, i, a, o) {
      var f = t.getSize();
      n = i ? t.getNextUnset(n) : t.getNextSet(n);
      for (var u = 0, s = n, c = a.length, h = i, l = n; l < f; l++)
        if (t.get(l) !== h)
          o[u]++;
        else {
          if (u === c - 1) {
            if (ne.patternMatchVariance(o, a, e.MAX_INDIVIDUAL_VARIANCE) < e.MAX_AVG_VARIANCE)
              return Int32Array.from([s, l]);
            s += o[0] + o[1];
            for (var d = o.slice(2, o.length), v = 0; v < u - 1; v++)
              o[v] = d[v];
            o[u - 1] = 0, o[u] = 0, u--;
          } else
            u++;
          o[u] = 1, h = !h;
        }
      throw new C();
    }, e.decodeDigit = function(t, n, i, a) {
      this.recordPattern(t, i, n);
      for (var o = this.MAX_AVG_VARIANCE, f = -1, u = a.length, s = 0; s < u; s++) {
        var c = a[s], h = ne.patternMatchVariance(n, c, e.MAX_INDIVIDUAL_VARIANCE);
        h < o && (o = h, f = s);
      }
      if (f >= 0)
        return f;
      throw new C();
    }, e.MAX_AVG_VARIANCE = 0.48, e.MAX_INDIVIDUAL_VARIANCE = 0.7, e.START_END_PATTERN = Int32Array.from([1, 1, 1]), e.MIDDLE_PATTERN = Int32Array.from([1, 1, 1, 1, 1]), e.END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]), e.L_PATTERNS = [
      Int32Array.from([3, 2, 1, 1]),
      Int32Array.from([2, 2, 2, 1]),
      Int32Array.from([2, 1, 2, 2]),
      Int32Array.from([1, 4, 1, 1]),
      Int32Array.from([1, 1, 3, 2]),
      Int32Array.from([1, 2, 3, 1]),
      Int32Array.from([1, 1, 1, 4]),
      Int32Array.from([1, 3, 1, 2]),
      Int32Array.from([1, 2, 1, 3]),
      Int32Array.from([3, 1, 1, 2])
    ], e;
  }(ne)
), Rn = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Pn = (
  /** @class */
  function() {
    function r() {
      this.CHECK_DIGIT_ENCODINGS = [24, 20, 18, 17, 12, 6, 3, 10, 9, 5], this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), this.decodeRowStringBuffer = "";
    }
    return r.prototype.decodeRow = function(e, t, n) {
      var i = this.decodeRowStringBuffer, a = this.decodeMiddle(t, n, i), o = i.toString(), f = r.parseExtensionString(o), u = [
        new T((n[0] + n[1]) / 2, e),
        new T(a, e)
      ], s = new le(o, null, 0, u, b.UPC_EAN_EXTENSION, (/* @__PURE__ */ new Date()).getTime());
      return f != null && s.putAllMetadata(f), s;
    }, r.prototype.decodeMiddle = function(e, t, n) {
      var i, a, o = this.decodeMiddleCounters;
      o[0] = 0, o[1] = 0, o[2] = 0, o[3] = 0;
      for (var f = e.getSize(), u = t[1], s = 0, c = 0; c < 5 && u < f; c++) {
        var h = Xe.decodeDigit(e, o, u, Xe.L_AND_G_PATTERNS);
        n += String.fromCharCode(48 + h % 10);
        try {
          for (var l = (i = void 0, Rn(o)), d = l.next(); !d.done; d = l.next()) {
            var v = d.value;
            u += v;
          }
        } catch (g) {
          i = { error: g };
        } finally {
          try {
            d && !d.done && (a = l.return) && a.call(l);
          } finally {
            if (i) throw i.error;
          }
        }
        h >= 10 && (s |= 1 << 4 - c), c !== 4 && (u = e.getNextSet(u), u = e.getNextUnset(u));
      }
      if (n.length !== 5)
        throw new C();
      var x = this.determineCheckDigit(s);
      if (r.extensionChecksum(n.toString()) !== x)
        throw new C();
      return u;
    }, r.extensionChecksum = function(e) {
      for (var t = e.length, n = 0, i = t - 2; i >= 0; i -= 2)
        n += e.charAt(i).charCodeAt(0) - 48;
      n *= 3;
      for (var i = t - 1; i >= 0; i -= 2)
        n += e.charAt(i).charCodeAt(0) - 48;
      return n *= 3, n % 10;
    }, r.prototype.determineCheckDigit = function(e) {
      for (var t = 0; t < 10; t++)
        if (e === this.CHECK_DIGIT_ENCODINGS[t])
          return t;
      throw new C();
    }, r.parseExtensionString = function(e) {
      if (e.length !== 5)
        return null;
      var t = r.parseExtension5String(e);
      return t == null ? null : /* @__PURE__ */ new Map([[ce.SUGGESTED_PRICE, t]]);
    }, r.parseExtension5String = function(e) {
      var t;
      switch (e.charAt(0)) {
        case "0":
          t = "£";
          break;
        case "5":
          t = "$";
          break;
        case "9":
          switch (e) {
            case "90000":
              return null;
            case "99991":
              return "0.00";
            case "99990":
              return "Used";
          }
          t = "";
          break;
        default:
          t = "";
          break;
      }
      var n = parseInt(e.substring(1)), i = (n / 100).toString(), a = n % 100, o = a < 10 ? "0" + a : a.toString();
      return t + i + "." + o;
    }, r;
  }()
), Mn = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Bn = (
  /** @class */
  function() {
    function r() {
      this.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), this.decodeRowStringBuffer = "";
    }
    return r.prototype.decodeRow = function(e, t, n) {
      var i = this.decodeRowStringBuffer, a = this.decodeMiddle(t, n, i), o = i.toString(), f = r.parseExtensionString(o), u = [
        new T((n[0] + n[1]) / 2, e),
        new T(a, e)
      ], s = new le(o, null, 0, u, b.UPC_EAN_EXTENSION, (/* @__PURE__ */ new Date()).getTime());
      return f != null && s.putAllMetadata(f), s;
    }, r.prototype.decodeMiddle = function(e, t, n) {
      var i, a, o = this.decodeMiddleCounters;
      o[0] = 0, o[1] = 0, o[2] = 0, o[3] = 0;
      for (var f = e.getSize(), u = t[1], s = 0, c = 0; c < 2 && u < f; c++) {
        var h = Xe.decodeDigit(e, o, u, Xe.L_AND_G_PATTERNS);
        n += String.fromCharCode(48 + h % 10);
        try {
          for (var l = (i = void 0, Mn(o)), d = l.next(); !d.done; d = l.next()) {
            var v = d.value;
            u += v;
          }
        } catch (x) {
          i = { error: x };
        } finally {
          try {
            d && !d.done && (a = l.return) && a.call(l);
          } finally {
            if (i) throw i.error;
          }
        }
        h >= 10 && (s |= 1 << 1 - c), c !== 1 && (u = e.getNextSet(u), u = e.getNextUnset(u));
      }
      if (n.length !== 2)
        throw new C();
      if (parseInt(n.toString()) % 4 !== s)
        throw new C();
      return u;
    }, r.parseExtensionString = function(e) {
      return e.length !== 2 ? null : /* @__PURE__ */ new Map([[ce.ISSUE_NUMBER, parseInt(e)]]);
    }, r;
  }()
), Fn = (
  /** @class */
  function() {
    function r() {
    }
    return r.decodeRow = function(e, t, n) {
      var i = Xe.findGuardPattern(t, n, !1, this.EXTENSION_START_PATTERN, new Int32Array(this.EXTENSION_START_PATTERN.length).fill(0));
      try {
        var a = new Pn();
        return a.decodeRow(e, t, i);
      } catch {
        var o = new Bn();
        return o.decodeRow(e, t, i);
      }
    }, r.EXTENSION_START_PATTERN = Int32Array.from([1, 1, 2]), r;
  }()
), Ln = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), ee = (
  /** @class */
  function(r) {
    Ln(e, r);
    function e() {
      var t = r.call(this) || this;
      t.decodeRowStringBuffer = "", e.L_AND_G_PATTERNS = e.L_PATTERNS.map(function(f) {
        return Int32Array.from(f);
      });
      for (var n = 10; n < 20; n++) {
        for (var i = e.L_PATTERNS[n - 10], a = new Int32Array(i.length), o = 0; o < i.length; o++)
          a[o] = i[i.length - o - 1];
        e.L_AND_G_PATTERNS[n] = a;
      }
      return t;
    }
    return e.prototype.decodeRow = function(t, n, i) {
      var a = e.findStartGuardPattern(n), o = i == null ? null : i.get($.NEED_RESULT_POINT_CALLBACK);
      if (o != null) {
        var f = new T((a[0] + a[1]) / 2, t);
        o.foundPossibleResultPoint(f);
      }
      var u = this.decodeMiddle(n, a, this.decodeRowStringBuffer), s = u.rowOffset, c = u.resultString;
      if (o != null) {
        var h = new T(s, t);
        o.foundPossibleResultPoint(h);
      }
      var l = e.decodeEnd(n, s);
      if (o != null) {
        var d = new T((l[0] + l[1]) / 2, t);
        o.foundPossibleResultPoint(d);
      }
      var v = l[1], x = v + (v - l[0]);
      if (x >= n.getSize() || !n.isRange(v, x, !1))
        throw new C();
      var g = c.toString();
      if (g.length < 8)
        throw new O();
      if (!e.checkChecksum(g))
        throw new oe();
      var _ = (a[1] + a[0]) / 2, y = (l[1] + l[0]) / 2, A = this.getBarcodeFormat(), E = [new T(_, t), new T(y, t)], I = new le(g, null, 0, E, A, (/* @__PURE__ */ new Date()).getTime()), S = 0;
      try {
        var m = Fn.decodeRow(t, n, l[1]);
        I.putMetadata(ce.UPC_EAN_EXTENSION, m.getText()), I.putAllMetadata(m.getResultMetadata()), I.addResultPoints(m.getResultPoints()), S = m.getText().length;
      } catch {
      }
      var D = i == null ? null : i.get($.ALLOWED_EAN_EXTENSIONS);
      if (D != null) {
        var P = !1;
        for (var R in D)
          if (S.toString() === R) {
            P = !0;
            break;
          }
        if (!P)
          throw new C();
      }
      return A === b.EAN_13 || b.UPC_A, I;
    }, e.checkChecksum = function(t) {
      return e.checkStandardUPCEANChecksum(t);
    }, e.checkStandardUPCEANChecksum = function(t) {
      var n = t.length;
      if (n === 0)
        return !1;
      var i = parseInt(t.charAt(n - 1), 10);
      return e.getStandardUPCEANChecksum(t.substring(0, n - 1)) === i;
    }, e.getStandardUPCEANChecksum = function(t) {
      for (var n = t.length, i = 0, a = n - 1; a >= 0; a -= 2) {
        var o = t.charAt(a).charCodeAt(0) - 48;
        if (o < 0 || o > 9)
          throw new O();
        i += o;
      }
      i *= 3;
      for (var a = n - 2; a >= 0; a -= 2) {
        var o = t.charAt(a).charCodeAt(0) - 48;
        if (o < 0 || o > 9)
          throw new O();
        i += o;
      }
      return (1e3 - i) % 10;
    }, e.decodeEnd = function(t, n) {
      return e.findGuardPattern(t, n, !1, e.START_END_PATTERN, new Int32Array(e.START_END_PATTERN.length).fill(0));
    }, e;
  }(Xe)
), kn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), er = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Nt = (
  /** @class */
  function(r) {
    kn(e, r);
    function e() {
      var t = r.call(this) || this;
      return t.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), t;
    }
    return e.prototype.decodeMiddle = function(t, n, i) {
      var a, o, f, u, s = this.decodeMiddleCounters;
      s[0] = 0, s[1] = 0, s[2] = 0, s[3] = 0;
      for (var c = t.getSize(), h = n[1], l = 0, d = 0; d < 6 && h < c; d++) {
        var v = ee.decodeDigit(t, s, h, ee.L_AND_G_PATTERNS);
        i += String.fromCharCode(48 + v % 10);
        try {
          for (var x = (a = void 0, er(s)), g = x.next(); !g.done; g = x.next()) {
            var _ = g.value;
            h += _;
          }
        } catch (I) {
          a = { error: I };
        } finally {
          try {
            g && !g.done && (o = x.return) && o.call(x);
          } finally {
            if (a) throw a.error;
          }
        }
        v >= 10 && (l |= 1 << 5 - d);
      }
      i = e.determineFirstDigit(i, l);
      var y = ee.findGuardPattern(t, h, !0, ee.MIDDLE_PATTERN, new Int32Array(ee.MIDDLE_PATTERN.length).fill(0));
      h = y[1];
      for (var d = 0; d < 6 && h < c; d++) {
        var v = ee.decodeDigit(t, s, h, ee.L_PATTERNS);
        i += String.fromCharCode(48 + v);
        try {
          for (var A = (f = void 0, er(s)), E = A.next(); !E.done; E = A.next()) {
            var _ = E.value;
            h += _;
          }
        } catch (m) {
          f = { error: m };
        } finally {
          try {
            E && !E.done && (u = A.return) && u.call(A);
          } finally {
            if (f) throw f.error;
          }
        }
      }
      return { rowOffset: h, resultString: i };
    }, e.prototype.getBarcodeFormat = function() {
      return b.EAN_13;
    }, e.determineFirstDigit = function(t, n) {
      for (var i = 0; i < 10; i++)
        if (n === this.FIRST_DIGIT_ENCODINGS[i])
          return t = String.fromCharCode(48 + i) + t, t;
      throw new C();
    }, e.FIRST_DIGIT_ENCODINGS = [0, 11, 13, 14, 19, 25, 28, 21, 22, 26], e;
  }(ee)
), Un = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), tr = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, rr = (
  /** @class */
  function(r) {
    Un(e, r);
    function e() {
      var t = r.call(this) || this;
      return t.decodeMiddleCounters = Int32Array.from([0, 0, 0, 0]), t;
    }
    return e.prototype.decodeMiddle = function(t, n, i) {
      var a, o, f, u, s = this.decodeMiddleCounters;
      s[0] = 0, s[1] = 0, s[2] = 0, s[3] = 0;
      for (var c = t.getSize(), h = n[1], l = 0; l < 4 && h < c; l++) {
        var d = ee.decodeDigit(t, s, h, ee.L_PATTERNS);
        i += String.fromCharCode(48 + d);
        try {
          for (var v = (a = void 0, tr(s)), x = v.next(); !x.done; x = v.next()) {
            var g = x.value;
            h += g;
          }
        } catch (E) {
          a = { error: E };
        } finally {
          try {
            x && !x.done && (o = v.return) && o.call(v);
          } finally {
            if (a) throw a.error;
          }
        }
      }
      var _ = ee.findGuardPattern(t, h, !0, ee.MIDDLE_PATTERN, new Int32Array(ee.MIDDLE_PATTERN.length).fill(0));
      h = _[1];
      for (var l = 0; l < 4 && h < c; l++) {
        var d = ee.decodeDigit(t, s, h, ee.L_PATTERNS);
        i += String.fromCharCode(48 + d);
        try {
          for (var y = (f = void 0, tr(s)), A = y.next(); !A.done; A = y.next()) {
            var g = A.value;
            h += g;
          }
        } catch (S) {
          f = { error: S };
        } finally {
          try {
            A && !A.done && (u = y.return) && u.call(y);
          } finally {
            if (f) throw f.error;
          }
        }
      }
      return { rowOffset: h, resultString: i };
    }, e.prototype.getBarcodeFormat = function() {
      return b.EAN_8;
    }, e;
  }(ee)
), Hn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), nr = (
  /** @class */
  function(r) {
    Hn(e, r);
    function e() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.ean13Reader = new Nt(), t;
    }
    return e.prototype.getBarcodeFormat = function() {
      return b.UPC_A;
    }, e.prototype.decode = function(t, n) {
      return this.maybeReturnResult(this.ean13Reader.decode(t));
    }, e.prototype.decodeRow = function(t, n, i) {
      return this.maybeReturnResult(this.ean13Reader.decodeRow(t, n, i));
    }, e.prototype.decodeMiddle = function(t, n, i) {
      return this.ean13Reader.decodeMiddle(t, n, i);
    }, e.prototype.maybeReturnResult = function(t) {
      var n = t.getText();
      if (n.charAt(0) === "0") {
        var i = new le(n.substring(1), null, null, t.getResultPoints(), b.UPC_A);
        return t.getResultMetadata() != null && i.putAllMetadata(t.getResultMetadata()), i;
      } else
        throw new C();
    }, e.prototype.reset = function() {
      this.ean13Reader.reset();
    }, e;
  }(ee)
), Vn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Gn = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, ir = (
  /** @class */
  function(r) {
    Vn(e, r);
    function e() {
      var t = r.call(this) || this;
      return t.decodeMiddleCounters = new Int32Array(4), t;
    }
    return e.prototype.decodeMiddle = function(t, n, i) {
      var a, o, f = this.decodeMiddleCounters.map(function(g) {
        return g;
      });
      f[0] = 0, f[1] = 0, f[2] = 0, f[3] = 0;
      for (var u = t.getSize(), s = n[1], c = 0, h = 0; h < 6 && s < u; h++) {
        var l = e.decodeDigit(t, f, s, e.L_AND_G_PATTERNS);
        i += String.fromCharCode(48 + l % 10);
        try {
          for (var d = (a = void 0, Gn(f)), v = d.next(); !v.done; v = d.next()) {
            var x = v.value;
            s += x;
          }
        } catch (g) {
          a = { error: g };
        } finally {
          try {
            v && !v.done && (o = d.return) && o.call(d);
          } finally {
            if (a) throw a.error;
          }
        }
        l >= 10 && (c |= 1 << 5 - h);
      }
      return e.determineNumSysAndCheckDigit(new M(i), c), s;
    }, e.prototype.decodeEnd = function(t, n) {
      return e.findGuardPatternWithoutCounters(t, n, !0, e.MIDDLE_END_PATTERN);
    }, e.prototype.checkChecksum = function(t) {
      return ee.checkChecksum(e.convertUPCEtoUPCA(t));
    }, e.determineNumSysAndCheckDigit = function(t, n) {
      for (var i = 0; i <= 1; i++)
        for (var a = 0; a < 10; a++)
          if (n === this.NUMSYS_AND_CHECK_DIGIT_PATTERNS[i][a]) {
            t.insert(
              0,
              /*(char)*/
              "0" + i
            ), t.append(
              /*(char)*/
              "0" + a
            );
            return;
          }
      throw C.getNotFoundInstance();
    }, e.prototype.getBarcodeFormat = function() {
      return b.UPC_E;
    }, e.convertUPCEtoUPCA = function(t) {
      var n = t.slice(1, 7).split("").map(function(o) {
        return o.charCodeAt(0);
      }), i = new M(
        /*12*/
      );
      i.append(t.charAt(0));
      var a = n[5];
      switch (a) {
        case 0:
        case 1:
        case 2:
          i.appendChars(n, 0, 2), i.append(a), i.append("0000"), i.appendChars(n, 2, 3);
          break;
        case 3:
          i.appendChars(n, 0, 3), i.append("00000"), i.appendChars(n, 3, 2);
          break;
        case 4:
          i.appendChars(n, 0, 4), i.append("00000"), i.append(n[4]);
          break;
        default:
          i.appendChars(n, 0, 5), i.append("0000"), i.append(a);
          break;
      }
      return t.length >= 8 && i.append(t.charAt(7)), i.toString();
    }, e.MIDDLE_END_PATTERN = Int32Array.from([1, 1, 1, 1, 1, 1]), e.NUMSYS_AND_CHECK_DIGIT_PATTERNS = [
      Int32Array.from([56, 52, 50, 49, 44, 38, 35, 42, 41, 37]),
      Int32Array.from([7, 11, 13, 14, 19, 25, 28, 21, 22, 1])
    ], e;
  }(ee)
), Xn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), ar = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, yt = (
  /** @class */
  function(r) {
    Xn(e, r);
    function e(t) {
      var n = r.call(this) || this, i = t == null ? null : t.get($.POSSIBLE_FORMATS), a = [];
      return i != null && (i.indexOf(b.EAN_13) > -1 && a.push(new Nt()), i.indexOf(b.UPC_A) > -1 && a.push(new nr()), i.indexOf(b.EAN_8) > -1 && a.push(new rr()), i.indexOf(b.UPC_E) > -1 && a.push(new ir())), a.length === 0 && (a.push(new Nt()), a.push(new nr()), a.push(new rr()), a.push(new ir())), n.readers = a, n;
    }
    return e.prototype.decodeRow = function(t, n, i) {
      var a, o;
      try {
        for (var f = ar(this.readers), u = f.next(); !u.done; u = f.next()) {
          var s = u.value;
          try {
            var c = s.decodeRow(t, n, i), h = c.getBarcodeFormat() === b.EAN_13 && c.getText().charAt(0) === "0", l = i == null ? null : i.get($.POSSIBLE_FORMATS), d = l == null || l.includes(b.UPC_A);
            if (h && d) {
              var v = c.getRawBytes(), x = new le(c.getText().substring(1), v, v ? v.length : null, c.getResultPoints(), b.UPC_A);
              return x.putAllMetadata(c.getResultMetadata()), x;
            }
            return c;
          } catch {
          }
        }
      } catch (g) {
        a = { error: g };
      } finally {
        try {
          u && !u.done && (o = f.return) && o.call(f);
        } finally {
          if (a) throw a.error;
        }
      }
      throw new C();
    }, e.prototype.reset = function() {
      var t, n;
      try {
        for (var i = ar(this.readers), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          o.reset();
        }
      } catch (f) {
        t = { error: f };
      } finally {
        try {
          a && !a.done && (n = i.return) && n.call(i);
        } finally {
          if (t) throw t.error;
        }
      }
    }, e;
  }(ne)
), Wn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), zn = (
  /** @class */
  function(r) {
    Wn(e, r);
    function e() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.CODA_BAR_CHAR_SET = {
        nnnnnww: "0",
        nnnnwwn: "1",
        nnnwnnw: "2",
        wwnnnnn: "3",
        nnwnnwn: "4",
        wnnnnwn: "5",
        nwnnnnw: "6",
        nwnnwnn: "7",
        nwwnnnn: "8",
        wnnwnnn: "9",
        nnnwwnn: "-",
        nnwwnnn: "$",
        wnnnwnw: ":",
        wnwnnnw: "/",
        wnwnwnn: ".",
        nnwwwww: "+",
        nnwwnwn: "A",
        nwnwnnw: "B",
        nnnwnww: "C",
        nnnwwwn: "D"
      }, t;
    }
    return e.prototype.decodeRow = function(t, n, i) {
      var a = this.getValidRowData(n);
      if (!a)
        throw new C();
      var o = this.codaBarDecodeRow(a.row);
      if (!o)
        throw new C();
      return new le(o, null, 0, [new T(a.left, t), new T(a.right, t)], b.CODABAR, (/* @__PURE__ */ new Date()).getTime());
    }, e.prototype.getValidRowData = function(t) {
      var n = t.toArray(), i = n.indexOf(!0);
      if (i === -1)
        return null;
      var a = n.lastIndexOf(!0);
      if (a <= i)
        return null;
      n = n.slice(i, a + 1);
      for (var o = [], f = n[0], u = 1, s = 1; s < n.length; s++)
        n[s] === f ? u++ : (f = n[s], o.push(u), u = 1);
      return o.push(u), o.length < 23 && (o.length + 1) % 8 !== 0 ? null : { row: o, left: i, right: a };
    }, e.prototype.codaBarDecodeRow = function(t) {
      for (var n = [], i = Math.ceil(t.reduce(function(u, s) {
        return (u + s) / 2;
      }, 0)); t.length > 0; ) {
        var a = t.splice(0, 8).splice(0, 7), o = a.map(function(u) {
          return u < i ? "n" : "w";
        }).join("");
        if (this.CODA_BAR_CHAR_SET[o] === void 0)
          return null;
        n.push(this.CODA_BAR_CHAR_SET[o]);
      }
      var f = n.join("");
      return this.validCodaBarString(f) ? f : null;
    }, e.prototype.validCodaBarString = function(t) {
      var n = /^[A-D].{1,}[A-D]$/;
      return n.test(t);
    }, e;
  }(ne)
), Yn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), jn = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Le = (
  /** @class */
  function(r) {
    Yn(e, r);
    function e() {
      var t = r.call(this) || this;
      return t.decodeFinderCounters = new Int32Array(4), t.dataCharacterCounters = new Int32Array(8), t.oddRoundingErrors = new Array(4), t.evenRoundingErrors = new Array(4), t.oddCounts = new Array(t.dataCharacterCounters.length / 2), t.evenCounts = new Array(t.dataCharacterCounters.length / 2), t;
    }
    return e.prototype.getDecodeFinderCounters = function() {
      return this.decodeFinderCounters;
    }, e.prototype.getDataCharacterCounters = function() {
      return this.dataCharacterCounters;
    }, e.prototype.getOddRoundingErrors = function() {
      return this.oddRoundingErrors;
    }, e.prototype.getEvenRoundingErrors = function() {
      return this.evenRoundingErrors;
    }, e.prototype.getOddCounts = function() {
      return this.oddCounts;
    }, e.prototype.getEvenCounts = function() {
      return this.evenCounts;
    }, e.prototype.parseFinderValue = function(t, n) {
      for (var i = 0; i < n.length; i++)
        if (ne.patternMatchVariance(t, n[i], e.MAX_INDIVIDUAL_VARIANCE) < e.MAX_AVG_VARIANCE)
          return i;
      throw new C();
    }, e.count = function(t) {
      return U.sum(new Int32Array(t));
    }, e.increment = function(t, n) {
      for (var i = 0, a = n[0], o = 1; o < t.length; o++)
        n[o] > a && (a = n[o], i = o);
      t[i]++;
    }, e.decrement = function(t, n) {
      for (var i = 0, a = n[0], o = 1; o < t.length; o++)
        n[o] < a && (a = n[o], i = o);
      t[i]--;
    }, e.isFinderPattern = function(t) {
      var n, i, a = t[0] + t[1], o = a + t[2] + t[3], f = a / o;
      if (f >= e.MIN_FINDER_PATTERN_RATIO && f <= e.MAX_FINDER_PATTERN_RATIO) {
        var u = Number.MAX_SAFE_INTEGER, s = Number.MIN_SAFE_INTEGER;
        try {
          for (var c = jn(t), h = c.next(); !h.done; h = c.next()) {
            var l = h.value;
            l > s && (s = l), l < u && (u = l);
          }
        } catch (d) {
          n = { error: d };
        } finally {
          try {
            h && !h.done && (i = c.return) && i.call(c);
          } finally {
            if (n) throw n.error;
          }
        }
        return s < 10 * u;
      }
      return !1;
    }, e.MAX_AVG_VARIANCE = 0.2, e.MAX_INDIVIDUAL_VARIANCE = 0.45, e.MIN_FINDER_PATTERN_RATIO = 9.5 / 12, e.MAX_FINDER_PATTERN_RATIO = 12.5 / 14, e;
  }(ne)
), ut = (
  /** @class */
  function() {
    function r(e, t) {
      this.value = e, this.checksumPortion = t;
    }
    return r.prototype.getValue = function() {
      return this.value;
    }, r.prototype.getChecksumPortion = function() {
      return this.checksumPortion;
    }, r.prototype.toString = function() {
      return this.value + "(" + this.checksumPortion + ")";
    }, r.prototype.equals = function(e) {
      if (!(e instanceof r))
        return !1;
      var t = e;
      return this.value === t.value && this.checksumPortion === t.checksumPortion;
    }, r.prototype.hashCode = function() {
      return this.value ^ this.checksumPortion;
    }, r;
  }()
), br = (
  /** @class */
  function() {
    function r(e, t, n, i, a) {
      this.value = e, this.startEnd = t, this.value = e, this.startEnd = t, this.resultPoints = new Array(), this.resultPoints.push(new T(n, a)), this.resultPoints.push(new T(i, a));
    }
    return r.prototype.getValue = function() {
      return this.value;
    }, r.prototype.getStartEnd = function() {
      return this.startEnd;
    }, r.prototype.getResultPoints = function() {
      return this.resultPoints;
    }, r.prototype.equals = function(e) {
      if (!(e instanceof r))
        return !1;
      var t = e;
      return this.value === t.value;
    }, r.prototype.hashCode = function() {
      return this.value;
    }, r;
  }()
), Zn = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Ve = (
  /** @class */
  function() {
    function r() {
    }
    return r.getRSSvalue = function(e, t, n) {
      var i, a, o = 0;
      try {
        for (var f = Zn(e), u = f.next(); !u.done; u = f.next()) {
          var s = u.value;
          o += s;
        }
      } catch (y) {
        i = { error: y };
      } finally {
        try {
          u && !u.done && (a = f.return) && a.call(f);
        } finally {
          if (i) throw i.error;
        }
      }
      for (var c = 0, h = 0, l = e.length, d = 0; d < l - 1; d++) {
        var v = void 0;
        for (v = 1, h |= 1 << d; v < e[d]; v++, h &= ~(1 << d)) {
          var x = r.combins(o - v - 1, l - d - 2);
          if (n && h === 0 && o - v - (l - d - 1) >= l - d - 1 && (x -= r.combins(o - v - (l - d), l - d - 2)), l - d - 1 > 1) {
            for (var g = 0, _ = o - v - (l - d - 2); _ > t; _--)
              g += r.combins(o - v - _ - 1, l - d - 3);
            x -= g * (l - 1 - d);
          } else o - v > t && x--;
          c += x;
        }
        o -= v;
      }
      return c;
    }, r.combins = function(e, t) {
      var n, i;
      e - t > t ? (i = t, n = e - t) : (i = e - t, n = t);
      for (var a = 1, o = 1, f = e; f > n; f--)
        a *= f, o <= i && (a /= o, o++);
      for (; o <= i; )
        a /= o, o++;
      return a;
    }, r;
  }()
), $n = (
  /** @class */
  function() {
    function r() {
    }
    return r.buildBitArray = function(e) {
      var t = e.length * 2 - 1;
      e[e.length - 1].getRightChar() == null && (t -= 1);
      for (var n = 12 * t, i = new fe(n), a = 0, o = e[0], f = o.getRightChar().getValue(), u = 11; u >= 0; --u)
        f & 1 << u && i.set(a), a++;
      for (var u = 1; u < e.length; ++u) {
        for (var s = e[u], c = s.getLeftChar().getValue(), h = 11; h >= 0; --h)
          c & 1 << h && i.set(a), a++;
        if (s.getRightChar() !== null)
          for (var l = s.getRightChar().getValue(), h = 11; h >= 0; --h)
            l & 1 << h && i.set(a), a++;
      }
      return i;
    }, r;
  }()
), Be = (
  /** @class */
  function() {
    function r(e, t) {
      t ? this.decodedInformation = null : (this.finished = e, this.decodedInformation = t);
    }
    return r.prototype.getDecodedInformation = function() {
      return this.decodedInformation;
    }, r.prototype.isFinished = function() {
      return this.finished;
    }, r;
  }()
), Xt = (
  /** @class */
  function() {
    function r(e) {
      this.newPosition = e;
    }
    return r.prototype.getNewPosition = function() {
      return this.newPosition;
    }, r;
  }()
), Kn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Ce = (
  /** @class */
  function(r) {
    Kn(e, r);
    function e(t, n) {
      var i = r.call(this, t) || this;
      return i.value = n, i;
    }
    return e.prototype.getValue = function() {
      return this.value;
    }, e.prototype.isFNC1 = function() {
      return this.value === e.FNC1;
    }, e.FNC1 = "$", e;
  }(Xt)
), qn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Fe = (
  /** @class */
  function(r) {
    qn(e, r);
    function e(t, n, i) {
      var a = r.call(this, t) || this;
      return i ? (a.remaining = !0, a.remainingValue = a.remainingValue) : (a.remaining = !1, a.remainingValue = 0), a.newString = n, a;
    }
    return e.prototype.getNewString = function() {
      return this.newString;
    }, e.prototype.isRemaining = function() {
      return this.remaining;
    }, e.prototype.getRemainingValue = function() {
      return this.remainingValue;
    }, e;
  }(Xt)
), Qn = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), He = (
  /** @class */
  function(r) {
    Qn(e, r);
    function e(t, n, i) {
      var a = r.call(this, t) || this;
      if (n < 0 || n > 10 || i < 0 || i > 10)
        throw new O();
      return a.firstDigit = n, a.secondDigit = i, a;
    }
    return e.prototype.getFirstDigit = function() {
      return this.firstDigit;
    }, e.prototype.getSecondDigit = function() {
      return this.secondDigit;
    }, e.prototype.getValue = function() {
      return this.firstDigit * 10 + this.secondDigit;
    }, e.prototype.isFirstDigitFNC1 = function() {
      return this.firstDigit === e.FNC1;
    }, e.prototype.isSecondDigitFNC1 = function() {
      return this.secondDigit === e.FNC1;
    }, e.prototype.isAnyFNC1 = function() {
      return this.firstDigit === e.FNC1 || this.secondDigit === e.FNC1;
    }, e.FNC1 = 10, e;
  }(Xt)
), et = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Jn = (
  /** @class */
  function() {
    function r() {
    }
    return r.parseFieldsInGeneralPurpose = function(e) {
      var t, n, i, a, o, f, u, s;
      if (!e)
        return null;
      if (e.length < 2)
        throw new C();
      var c = e.substring(0, 2);
      try {
        for (var h = et(r.TWO_DIGIT_DATA_LENGTH), l = h.next(); !l.done; l = h.next()) {
          var d = l.value;
          if (d[0] === c)
            return d[1] === r.VARIABLE_LENGTH ? r.processVariableAI(2, d[2], e) : r.processFixedAI(2, d[1], e);
        }
      } catch (S) {
        t = { error: S };
      } finally {
        try {
          l && !l.done && (n = h.return) && n.call(h);
        } finally {
          if (t) throw t.error;
        }
      }
      if (e.length < 3)
        throw new C();
      var v = e.substring(0, 3);
      try {
        for (var x = et(r.THREE_DIGIT_DATA_LENGTH), g = x.next(); !g.done; g = x.next()) {
          var d = g.value;
          if (d[0] === v)
            return d[1] === r.VARIABLE_LENGTH ? r.processVariableAI(3, d[2], e) : r.processFixedAI(3, d[1], e);
        }
      } catch (S) {
        i = { error: S };
      } finally {
        try {
          g && !g.done && (a = x.return) && a.call(x);
        } finally {
          if (i) throw i.error;
        }
      }
      try {
        for (var _ = et(r.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH), y = _.next(); !y.done; y = _.next()) {
          var d = y.value;
          if (d[0] === v)
            return d[1] === r.VARIABLE_LENGTH ? r.processVariableAI(4, d[2], e) : r.processFixedAI(4, d[1], e);
        }
      } catch (S) {
        o = { error: S };
      } finally {
        try {
          y && !y.done && (f = _.return) && f.call(_);
        } finally {
          if (o) throw o.error;
        }
      }
      if (e.length < 4)
        throw new C();
      var A = e.substring(0, 4);
      try {
        for (var E = et(r.FOUR_DIGIT_DATA_LENGTH), I = E.next(); !I.done; I = E.next()) {
          var d = I.value;
          if (d[0] === A)
            return d[1] === r.VARIABLE_LENGTH ? r.processVariableAI(4, d[2], e) : r.processFixedAI(4, d[1], e);
        }
      } catch (S) {
        u = { error: S };
      } finally {
        try {
          I && !I.done && (s = E.return) && s.call(E);
        } finally {
          if (u) throw u.error;
        }
      }
      throw new C();
    }, r.processFixedAI = function(e, t, n) {
      if (n.length < e)
        throw new C();
      var i = n.substring(0, e);
      if (n.length < e + t)
        throw new C();
      var a = n.substring(e, e + t), o = n.substring(e + t), f = "(" + i + ")" + a, u = r.parseFieldsInGeneralPurpose(o);
      return u == null ? f : f + u;
    }, r.processVariableAI = function(e, t, n) {
      var i = n.substring(0, e), a;
      n.length < e + t ? a = n.length : a = e + t;
      var o = n.substring(e, a), f = n.substring(a), u = "(" + i + ")" + o, s = r.parseFieldsInGeneralPurpose(f);
      return s == null ? u : u + s;
    }, r.VARIABLE_LENGTH = [], r.TWO_DIGIT_DATA_LENGTH = [
      ["00", 18],
      ["01", 14],
      ["02", 14],
      ["10", r.VARIABLE_LENGTH, 20],
      ["11", 6],
      ["12", 6],
      ["13", 6],
      ["15", 6],
      ["17", 6],
      ["20", 2],
      ["21", r.VARIABLE_LENGTH, 20],
      ["22", r.VARIABLE_LENGTH, 29],
      ["30", r.VARIABLE_LENGTH, 8],
      ["37", r.VARIABLE_LENGTH, 8],
      // internal company codes
      ["90", r.VARIABLE_LENGTH, 30],
      ["91", r.VARIABLE_LENGTH, 30],
      ["92", r.VARIABLE_LENGTH, 30],
      ["93", r.VARIABLE_LENGTH, 30],
      ["94", r.VARIABLE_LENGTH, 30],
      ["95", r.VARIABLE_LENGTH, 30],
      ["96", r.VARIABLE_LENGTH, 30],
      ["97", r.VARIABLE_LENGTH, 3],
      ["98", r.VARIABLE_LENGTH, 30],
      ["99", r.VARIABLE_LENGTH, 30]
    ], r.THREE_DIGIT_DATA_LENGTH = [
      // Same format as above
      ["240", r.VARIABLE_LENGTH, 30],
      ["241", r.VARIABLE_LENGTH, 30],
      ["242", r.VARIABLE_LENGTH, 6],
      ["250", r.VARIABLE_LENGTH, 30],
      ["251", r.VARIABLE_LENGTH, 30],
      ["253", r.VARIABLE_LENGTH, 17],
      ["254", r.VARIABLE_LENGTH, 20],
      ["400", r.VARIABLE_LENGTH, 30],
      ["401", r.VARIABLE_LENGTH, 30],
      ["402", 17],
      ["403", r.VARIABLE_LENGTH, 30],
      ["410", 13],
      ["411", 13],
      ["412", 13],
      ["413", 13],
      ["414", 13],
      ["420", r.VARIABLE_LENGTH, 20],
      ["421", r.VARIABLE_LENGTH, 15],
      ["422", 3],
      ["423", r.VARIABLE_LENGTH, 15],
      ["424", 3],
      ["425", 3],
      ["426", 3]
    ], r.THREE_DIGIT_PLUS_DIGIT_DATA_LENGTH = [
      // Same format as above
      ["310", 6],
      ["311", 6],
      ["312", 6],
      ["313", 6],
      ["314", 6],
      ["315", 6],
      ["316", 6],
      ["320", 6],
      ["321", 6],
      ["322", 6],
      ["323", 6],
      ["324", 6],
      ["325", 6],
      ["326", 6],
      ["327", 6],
      ["328", 6],
      ["329", 6],
      ["330", 6],
      ["331", 6],
      ["332", 6],
      ["333", 6],
      ["334", 6],
      ["335", 6],
      ["336", 6],
      ["340", 6],
      ["341", 6],
      ["342", 6],
      ["343", 6],
      ["344", 6],
      ["345", 6],
      ["346", 6],
      ["347", 6],
      ["348", 6],
      ["349", 6],
      ["350", 6],
      ["351", 6],
      ["352", 6],
      ["353", 6],
      ["354", 6],
      ["355", 6],
      ["356", 6],
      ["357", 6],
      ["360", 6],
      ["361", 6],
      ["362", 6],
      ["363", 6],
      ["364", 6],
      ["365", 6],
      ["366", 6],
      ["367", 6],
      ["368", 6],
      ["369", 6],
      ["390", r.VARIABLE_LENGTH, 15],
      ["391", r.VARIABLE_LENGTH, 18],
      ["392", r.VARIABLE_LENGTH, 15],
      ["393", r.VARIABLE_LENGTH, 18],
      ["703", r.VARIABLE_LENGTH, 30]
    ], r.FOUR_DIGIT_DATA_LENGTH = [
      // Same format as above
      ["7001", 13],
      ["7002", r.VARIABLE_LENGTH, 30],
      ["7003", 10],
      ["8001", 14],
      ["8002", r.VARIABLE_LENGTH, 20],
      ["8003", r.VARIABLE_LENGTH, 30],
      ["8004", r.VARIABLE_LENGTH, 30],
      ["8005", 6],
      ["8006", 18],
      ["8007", r.VARIABLE_LENGTH, 30],
      ["8008", r.VARIABLE_LENGTH, 12],
      ["8018", 18],
      ["8020", r.VARIABLE_LENGTH, 25],
      ["8100", 6],
      ["8101", 10],
      ["8102", 2],
      ["8110", r.VARIABLE_LENGTH, 70],
      ["8200", r.VARIABLE_LENGTH, 70]
    ], r;
  }()
), ot = (
  /** @class */
  function() {
    function r(e) {
      this.buffer = new M(), this.information = e;
    }
    return r.prototype.decodeAllCodes = function(e, t) {
      var n = t, i = null;
      do {
        var a = this.decodeGeneralPurposeField(n, i), o = Jn.parseFieldsInGeneralPurpose(a.getNewString());
        if (o != null && e.append(o), a.isRemaining() ? i = "" + a.getRemainingValue() : i = null, n === a.getNewPosition())
          break;
        n = a.getNewPosition();
      } while (!0);
      return e.toString();
    }, r.prototype.isStillNumeric = function(e) {
      if (e + 7 > this.information.getSize())
        return e + 4 <= this.information.getSize();
      for (var t = e; t < e + 3; ++t)
        if (this.information.get(t))
          return !0;
      return this.information.get(e + 3);
    }, r.prototype.decodeNumeric = function(e) {
      if (e + 7 > this.information.getSize()) {
        var t = this.extractNumericValueFromBitArray(e, 4);
        return t === 0 ? new He(this.information.getSize(), He.FNC1, He.FNC1) : new He(this.information.getSize(), t - 1, He.FNC1);
      }
      var n = this.extractNumericValueFromBitArray(e, 7), i = (n - 8) / 11, a = (n - 8) % 11;
      return new He(e + 7, i, a);
    }, r.prototype.extractNumericValueFromBitArray = function(e, t) {
      return r.extractNumericValueFromBitArray(this.information, e, t);
    }, r.extractNumericValueFromBitArray = function(e, t, n) {
      for (var i = 0, a = 0; a < n; ++a)
        e.get(t + a) && (i |= 1 << n - a - 1);
      return i;
    }, r.prototype.decodeGeneralPurposeField = function(e, t) {
      this.buffer.setLengthToZero(), t != null && this.buffer.append(t), this.current.setPosition(e);
      var n = this.parseBlocks();
      return n != null && n.isRemaining() ? new Fe(this.current.getPosition(), this.buffer.toString(), n.getRemainingValue()) : new Fe(this.current.getPosition(), this.buffer.toString());
    }, r.prototype.parseBlocks = function() {
      var e, t;
      do {
        var n = this.current.getPosition();
        this.current.isAlpha() ? (t = this.parseAlphaBlock(), e = t.isFinished()) : this.current.isIsoIec646() ? (t = this.parseIsoIec646Block(), e = t.isFinished()) : (t = this.parseNumericBlock(), e = t.isFinished());
        var i = n !== this.current.getPosition();
        if (!i && !e)
          break;
      } while (!e);
      return t.getDecodedInformation();
    }, r.prototype.parseNumericBlock = function() {
      for (; this.isStillNumeric(this.current.getPosition()); ) {
        var e = this.decodeNumeric(this.current.getPosition());
        if (this.current.setPosition(e.getNewPosition()), e.isFirstDigitFNC1()) {
          var t = void 0;
          return e.isSecondDigitFNC1() ? t = new Fe(this.current.getPosition(), this.buffer.toString()) : t = new Fe(this.current.getPosition(), this.buffer.toString(), e.getSecondDigit()), new Be(!0, t);
        }
        if (this.buffer.append(e.getFirstDigit()), e.isSecondDigitFNC1()) {
          var t = new Fe(this.current.getPosition(), this.buffer.toString());
          return new Be(!0, t);
        }
        this.buffer.append(e.getSecondDigit());
      }
      return this.isNumericToAlphaNumericLatch(this.current.getPosition()) && (this.current.setAlpha(), this.current.incrementPosition(4)), new Be(!1);
    }, r.prototype.parseIsoIec646Block = function() {
      for (; this.isStillIsoIec646(this.current.getPosition()); ) {
        var e = this.decodeIsoIec646(this.current.getPosition());
        if (this.current.setPosition(e.getNewPosition()), e.isFNC1()) {
          var t = new Fe(this.current.getPosition(), this.buffer.toString());
          return new Be(!0, t);
        }
        this.buffer.append(e.getValue());
      }
      return this.isAlphaOr646ToNumericLatch(this.current.getPosition()) ? (this.current.incrementPosition(3), this.current.setNumeric()) : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) && (this.current.getPosition() + 5 < this.information.getSize() ? this.current.incrementPosition(5) : this.current.setPosition(this.information.getSize()), this.current.setAlpha()), new Be(!1);
    }, r.prototype.parseAlphaBlock = function() {
      for (; this.isStillAlpha(this.current.getPosition()); ) {
        var e = this.decodeAlphanumeric(this.current.getPosition());
        if (this.current.setPosition(e.getNewPosition()), e.isFNC1()) {
          var t = new Fe(this.current.getPosition(), this.buffer.toString());
          return new Be(!0, t);
        }
        this.buffer.append(e.getValue());
      }
      return this.isAlphaOr646ToNumericLatch(this.current.getPosition()) ? (this.current.incrementPosition(3), this.current.setNumeric()) : this.isAlphaTo646ToAlphaLatch(this.current.getPosition()) && (this.current.getPosition() + 5 < this.information.getSize() ? this.current.incrementPosition(5) : this.current.setPosition(this.information.getSize()), this.current.setIsoIec646()), new Be(!1);
    }, r.prototype.isStillIsoIec646 = function(e) {
      if (e + 5 > this.information.getSize())
        return !1;
      var t = this.extractNumericValueFromBitArray(e, 5);
      if (t >= 5 && t < 16)
        return !0;
      if (e + 7 > this.information.getSize())
        return !1;
      var n = this.extractNumericValueFromBitArray(e, 7);
      if (n >= 64 && n < 116)
        return !0;
      if (e + 8 > this.information.getSize())
        return !1;
      var i = this.extractNumericValueFromBitArray(e, 8);
      return i >= 232 && i < 253;
    }, r.prototype.decodeIsoIec646 = function(e) {
      var t = this.extractNumericValueFromBitArray(e, 5);
      if (t === 15)
        return new Ce(e + 5, Ce.FNC1);
      if (t >= 5 && t < 15)
        return new Ce(e + 5, "0" + (t - 5));
      var n = this.extractNumericValueFromBitArray(e, 7);
      if (n >= 64 && n < 90)
        return new Ce(e + 7, "" + (n + 1));
      if (n >= 90 && n < 116)
        return new Ce(e + 7, "" + (n + 7));
      var i = this.extractNumericValueFromBitArray(e, 8), a;
      switch (i) {
        case 232:
          a = "!";
          break;
        case 233:
          a = '"';
          break;
        case 234:
          a = "%";
          break;
        case 235:
          a = "&";
          break;
        case 236:
          a = "'";
          break;
        case 237:
          a = "(";
          break;
        case 238:
          a = ")";
          break;
        case 239:
          a = "*";
          break;
        case 240:
          a = "+";
          break;
        case 241:
          a = ",";
          break;
        case 242:
          a = "-";
          break;
        case 243:
          a = ".";
          break;
        case 244:
          a = "/";
          break;
        case 245:
          a = ":";
          break;
        case 246:
          a = ";";
          break;
        case 247:
          a = "<";
          break;
        case 248:
          a = "=";
          break;
        case 249:
          a = ">";
          break;
        case 250:
          a = "?";
          break;
        case 251:
          a = "_";
          break;
        case 252:
          a = " ";
          break;
        default:
          throw new O();
      }
      return new Ce(e + 8, a);
    }, r.prototype.isStillAlpha = function(e) {
      if (e + 5 > this.information.getSize())
        return !1;
      var t = this.extractNumericValueFromBitArray(e, 5);
      if (t >= 5 && t < 16)
        return !0;
      if (e + 6 > this.information.getSize())
        return !1;
      var n = this.extractNumericValueFromBitArray(e, 6);
      return n >= 16 && n < 63;
    }, r.prototype.decodeAlphanumeric = function(e) {
      var t = this.extractNumericValueFromBitArray(e, 5);
      if (t === 15)
        return new Ce(e + 5, Ce.FNC1);
      if (t >= 5 && t < 15)
        return new Ce(e + 5, "0" + (t - 5));
      var n = this.extractNumericValueFromBitArray(e, 6);
      if (n >= 32 && n < 58)
        return new Ce(e + 6, "" + (n + 33));
      var i;
      switch (n) {
        case 58:
          i = "*";
          break;
        case 59:
          i = ",";
          break;
        case 60:
          i = "-";
          break;
        case 61:
          i = ".";
          break;
        case 62:
          i = "/";
          break;
        default:
          throw new Qe("Decoding invalid alphanumeric value: " + n);
      }
      return new Ce(e + 6, i);
    }, r.prototype.isAlphaTo646ToAlphaLatch = function(e) {
      if (e + 1 > this.information.getSize())
        return !1;
      for (var t = 0; t < 5 && t + e < this.information.getSize(); ++t)
        if (t === 2) {
          if (!this.information.get(e + 2))
            return !1;
        } else if (this.information.get(e + t))
          return !1;
      return !0;
    }, r.prototype.isAlphaOr646ToNumericLatch = function(e) {
      if (e + 3 > this.information.getSize())
        return !1;
      for (var t = e; t < e + 3; ++t)
        if (this.information.get(t))
          return !1;
      return !0;
    }, r.prototype.isNumericToAlphaNumericLatch = function(e) {
      if (e + 1 > this.information.getSize())
        return !1;
      for (var t = 0; t < 4 && t + e < this.information.getSize(); ++t)
        if (this.information.get(e + t))
          return !1;
      return !0;
    }, r;
  }()
), Nr = (
  /** @class */
  function() {
    function r(e) {
      this.information = e, this.generalDecoder = new ot(e);
    }
    return r.prototype.getInformation = function() {
      return this.information;
    }, r.prototype.getGeneralDecoder = function() {
      return this.generalDecoder;
    }, r;
  }()
), ei = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Se = (
  /** @class */
  function(r) {
    ei(e, r);
    function e(t) {
      return r.call(this, t) || this;
    }
    return e.prototype.encodeCompressedGtin = function(t, n) {
      t.append("(01)");
      var i = t.length();
      t.append("9"), this.encodeCompressedGtinWithoutAI(t, n, i);
    }, e.prototype.encodeCompressedGtinWithoutAI = function(t, n, i) {
      for (var a = 0; a < 4; ++a) {
        var o = this.getGeneralDecoder().extractNumericValueFromBitArray(n + 10 * a, 10);
        o / 100 === 0 && t.append("0"), o / 10 === 0 && t.append("0"), t.append(o);
      }
      e.appendCheckDigit(t, i);
    }, e.appendCheckDigit = function(t, n) {
      for (var i = 0, a = 0; a < 13; a++) {
        var o = t.charAt(a + n).charCodeAt(0) - 48;
        i += a & 1 ? o : 3 * o;
      }
      i = 10 - i % 10, i === 10 && (i = 0), t.append(i);
    }, e.GTIN_SIZE = 40, e;
  }(Nr)
), ti = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), ri = (
  /** @class */
  function(r) {
    ti(e, r);
    function e(t) {
      return r.call(this, t) || this;
    }
    return e.prototype.parseInformation = function() {
      var t = new M();
      t.append("(01)");
      var n = t.length(), i = this.getGeneralDecoder().extractNumericValueFromBitArray(e.HEADER_SIZE, 4);
      return t.append(i), this.encodeCompressedGtinWithoutAI(t, e.HEADER_SIZE + 4, n), this.getGeneralDecoder().decodeAllCodes(t, e.HEADER_SIZE + 44);
    }, e.HEADER_SIZE = 4, e;
  }(Se)
), ni = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), ii = (
  /** @class */
  function(r) {
    ni(e, r);
    function e(t) {
      return r.call(this, t) || this;
    }
    return e.prototype.parseInformation = function() {
      var t = new M();
      return this.getGeneralDecoder().decodeAllCodes(t, e.HEADER_SIZE);
    }, e.HEADER_SIZE = 5, e;
  }(Nr)
), ai = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), ft = (
  /** @class */
  function(r) {
    ai(e, r);
    function e(t) {
      return r.call(this, t) || this;
    }
    return e.prototype.encodeCompressedWeight = function(t, n, i) {
      var a = this.getGeneralDecoder().extractNumericValueFromBitArray(n, i);
      this.addWeightCode(t, a);
      for (var o = this.checkWeight(a), f = 1e5, u = 0; u < 5; ++u)
        o / f === 0 && t.append("0"), f /= 10;
      t.append(o);
    }, e;
  }(Se)
), oi = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Rr = (
  /** @class */
  function(r) {
    oi(e, r);
    function e(t) {
      return r.call(this, t) || this;
    }
    return e.prototype.parseInformation = function() {
      if (this.getInformation().getSize() !== e.HEADER_SIZE + ft.GTIN_SIZE + e.WEIGHT_SIZE)
        throw new C();
      var t = new M();
      return this.encodeCompressedGtin(t, e.HEADER_SIZE), this.encodeCompressedWeight(t, e.HEADER_SIZE + ft.GTIN_SIZE, e.WEIGHT_SIZE), t.toString();
    }, e.HEADER_SIZE = 5, e.WEIGHT_SIZE = 15, e;
  }(ft)
), fi = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), ui = (
  /** @class */
  function(r) {
    fi(e, r);
    function e(t) {
      return r.call(this, t) || this;
    }
    return e.prototype.addWeightCode = function(t, n) {
      t.append("(3103)");
    }, e.prototype.checkWeight = function(t) {
      return t;
    }, e;
  }(Rr)
), si = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), ci = (
  /** @class */
  function(r) {
    si(e, r);
    function e(t) {
      return r.call(this, t) || this;
    }
    return e.prototype.addWeightCode = function(t, n) {
      n < 1e4 ? t.append("(3202)") : t.append("(3203)");
    }, e.prototype.checkWeight = function(t) {
      return t < 1e4 ? t : t - 1e4;
    }, e;
  }(Rr)
), hi = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), li = (
  /** @class */
  function(r) {
    hi(e, r);
    function e(t) {
      return r.call(this, t) || this;
    }
    return e.prototype.parseInformation = function() {
      if (this.getInformation().getSize() < e.HEADER_SIZE + Se.GTIN_SIZE)
        throw new C();
      var t = new M();
      this.encodeCompressedGtin(t, e.HEADER_SIZE);
      var n = this.getGeneralDecoder().extractNumericValueFromBitArray(e.HEADER_SIZE + Se.GTIN_SIZE, e.LAST_DIGIT_SIZE);
      t.append("(392"), t.append(n), t.append(")");
      var i = this.getGeneralDecoder().decodeGeneralPurposeField(e.HEADER_SIZE + Se.GTIN_SIZE + e.LAST_DIGIT_SIZE, null);
      return t.append(i.getNewString()), t.toString();
    }, e.HEADER_SIZE = 8, e.LAST_DIGIT_SIZE = 2, e;
  }(Se)
), di = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), vi = (
  /** @class */
  function(r) {
    di(e, r);
    function e(t) {
      return r.call(this, t) || this;
    }
    return e.prototype.parseInformation = function() {
      if (this.getInformation().getSize() < e.HEADER_SIZE + Se.GTIN_SIZE)
        throw new C();
      var t = new M();
      this.encodeCompressedGtin(t, e.HEADER_SIZE);
      var n = this.getGeneralDecoder().extractNumericValueFromBitArray(e.HEADER_SIZE + Se.GTIN_SIZE, e.LAST_DIGIT_SIZE);
      t.append("(393"), t.append(n), t.append(")");
      var i = this.getGeneralDecoder().extractNumericValueFromBitArray(e.HEADER_SIZE + Se.GTIN_SIZE + e.LAST_DIGIT_SIZE, e.FIRST_THREE_DIGITS_SIZE);
      i / 100 === 0 && t.append("0"), i / 10 === 0 && t.append("0"), t.append(i);
      var a = this.getGeneralDecoder().decodeGeneralPurposeField(e.HEADER_SIZE + Se.GTIN_SIZE + e.LAST_DIGIT_SIZE + e.FIRST_THREE_DIGITS_SIZE, null);
      return t.append(a.getNewString()), t.toString();
    }, e.HEADER_SIZE = 8, e.LAST_DIGIT_SIZE = 2, e.FIRST_THREE_DIGITS_SIZE = 10, e;
  }(Se)
), pi = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), be = (
  /** @class */
  function(r) {
    pi(e, r);
    function e(t, n, i) {
      var a = r.call(this, t) || this;
      return a.dateCode = i, a.firstAIdigits = n, a;
    }
    return e.prototype.parseInformation = function() {
      if (this.getInformation().getSize() !== e.HEADER_SIZE + e.GTIN_SIZE + e.WEIGHT_SIZE + e.DATE_SIZE)
        throw new C();
      var t = new M();
      return this.encodeCompressedGtin(t, e.HEADER_SIZE), this.encodeCompressedWeight(t, e.HEADER_SIZE + e.GTIN_SIZE, e.WEIGHT_SIZE), this.encodeCompressedDate(t, e.HEADER_SIZE + e.GTIN_SIZE + e.WEIGHT_SIZE), t.toString();
    }, e.prototype.encodeCompressedDate = function(t, n) {
      var i = this.getGeneralDecoder().extractNumericValueFromBitArray(n, e.DATE_SIZE);
      if (i !== 38400) {
        t.append("("), t.append(this.dateCode), t.append(")");
        var a = i % 32;
        i /= 32;
        var o = i % 12 + 1;
        i /= 12;
        var f = i;
        f / 10 === 0 && t.append("0"), t.append(f), o / 10 === 0 && t.append("0"), t.append(o), a / 10 === 0 && t.append("0"), t.append(a);
      }
    }, e.prototype.addWeightCode = function(t, n) {
      t.append("("), t.append(this.firstAIdigits), t.append(n / 1e5), t.append(")");
    }, e.prototype.checkWeight = function(t) {
      return t % 1e5;
    }, e.HEADER_SIZE = 8, e.WEIGHT_SIZE = 20, e.DATE_SIZE = 16, e;
  }(ft)
);
function xi(r) {
  try {
    if (r.get(1))
      return new ri(r);
    if (!r.get(2))
      return new ii(r);
    var e = ot.extractNumericValueFromBitArray(r, 1, 4);
    switch (e) {
      case 4:
        return new ui(r);
      case 5:
        return new ci(r);
    }
    var t = ot.extractNumericValueFromBitArray(r, 1, 5);
    switch (t) {
      case 12:
        return new li(r);
      case 13:
        return new vi(r);
    }
    var n = ot.extractNumericValueFromBitArray(r, 1, 7);
    switch (n) {
      case 56:
        return new be(r, "310", "11");
      case 57:
        return new be(r, "320", "11");
      case 58:
        return new be(r, "310", "13");
      case 59:
        return new be(r, "320", "13");
      case 60:
        return new be(r, "310", "15");
      case 61:
        return new be(r, "320", "15");
      case 62:
        return new be(r, "310", "17");
      case 63:
        return new be(r, "320", "17");
    }
  } catch (i) {
    throw console.log(i), new Qe("unknown decoder: " + r);
  }
}
var or = (
  /** @class */
  function() {
    function r(e, t, n, i) {
      this.leftchar = e, this.rightchar = t, this.finderpattern = n, this.maybeLast = i;
    }
    return r.prototype.mayBeLast = function() {
      return this.maybeLast;
    }, r.prototype.getLeftChar = function() {
      return this.leftchar;
    }, r.prototype.getRightChar = function() {
      return this.rightchar;
    }, r.prototype.getFinderPattern = function() {
      return this.finderpattern;
    }, r.prototype.mustBeLast = function() {
      return this.rightchar == null;
    }, r.prototype.toString = function() {
      return "[ " + this.leftchar + ", " + this.rightchar + " : " + (this.finderpattern == null ? "null" : this.finderpattern.getValue()) + " ]";
    }, r.equals = function(e, t) {
      return e instanceof r ? r.equalsOrNull(e.leftchar, t.leftchar) && r.equalsOrNull(e.rightchar, t.rightchar) && r.equalsOrNull(e.finderpattern, t.finderpattern) : !1;
    }, r.equalsOrNull = function(e, t) {
      return e === null ? t === null : r.equals(e, t);
    }, r.prototype.hashCode = function() {
      var e = this.leftchar.getValue() ^ this.rightchar.getValue() ^ this.finderpattern.getValue();
      return e;
    }, r;
  }()
), gi = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.pairs = e, this.rowNumber = t, this.wasReversed = n;
    }
    return r.prototype.getPairs = function() {
      return this.pairs;
    }, r.prototype.getRowNumber = function() {
      return this.rowNumber;
    }, r.prototype.isReversed = function() {
      return this.wasReversed;
    }, r.prototype.isEquivalent = function(e) {
      return this.checkEqualitity(this, e);
    }, r.prototype.toString = function() {
      return "{ " + this.pairs + " }";
    }, r.prototype.equals = function(e, t) {
      return e instanceof r ? this.checkEqualitity(e, t) && e.wasReversed === t.wasReversed : !1;
    }, r.prototype.checkEqualitity = function(e, t) {
      if (!(!e || !t)) {
        var n;
        return e.forEach(function(i, a) {
          t.forEach(function(o) {
            i.getLeftChar().getValue() === o.getLeftChar().getValue() && i.getRightChar().getValue() === o.getRightChar().getValue() && i.getFinderPatter().getValue() === o.getFinderPatter().getValue() && (n = !0);
          });
        }), n;
      }
    }, r;
  }()
), yi = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Ne = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, _i = (
  /** @class */
  function(r) {
    yi(e, r);
    function e() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.pairs = new Array(e.MAX_PAIRS), t.rows = new Array(), t.startEnd = [2], t;
    }
    return e.prototype.decodeRow = function(t, n, i) {
      this.pairs.length = 0, this.startFromEven = !1;
      try {
        return e.constructResult(this.decodeRow2pairs(t, n));
      } catch {
      }
      return this.pairs.length = 0, this.startFromEven = !0, e.constructResult(this.decodeRow2pairs(t, n));
    }, e.prototype.reset = function() {
      this.pairs.length = 0, this.rows.length = 0;
    }, e.prototype.decodeRow2pairs = function(t, n) {
      for (var i = !1; !i; )
        try {
          this.pairs.push(this.retrieveNextPair(n, this.pairs, t));
        } catch (f) {
          if (f instanceof C) {
            if (!this.pairs.length)
              throw new C();
            i = !0;
          }
        }
      if (this.checkChecksum())
        return this.pairs;
      var a;
      if (this.rows.length ? a = !0 : a = !1, this.storeRow(t, !1), a) {
        var o = this.checkRowsBoolean(!1);
        if (o != null || (o = this.checkRowsBoolean(!0), o != null))
          return o;
      }
      throw new C();
    }, e.prototype.checkRowsBoolean = function(t) {
      if (this.rows.length > 25)
        return this.rows.length = 0, null;
      this.pairs.length = 0, t && (this.rows = this.rows.reverse());
      var n = null;
      try {
        n = this.checkRows(new Array(), 0);
      } catch (i) {
        console.log(i);
      }
      return t && (this.rows = this.rows.reverse()), n;
    }, e.prototype.checkRows = function(t, n) {
      for (var i, a, o = n; o < this.rows.length; o++) {
        var f = this.rows[o];
        this.pairs.length = 0;
        try {
          for (var u = (i = void 0, Ne(t)), s = u.next(); !s.done; s = u.next()) {
            var c = s.value;
            this.pairs.push(c.getPairs());
          }
        } catch (l) {
          i = { error: l };
        } finally {
          try {
            s && !s.done && (a = u.return) && a.call(u);
          } finally {
            if (i) throw i.error;
          }
        }
        if (this.pairs.push(f.getPairs()), !!e.isValidSequence(this.pairs)) {
          if (this.checkChecksum())
            return this.pairs;
          var h = new Array(t);
          h.push(f);
          try {
            return this.checkRows(h, o + 1);
          } catch (l) {
            console.log(l);
          }
        }
      }
      throw new C();
    }, e.isValidSequence = function(t) {
      var n, i;
      try {
        for (var a = Ne(e.FINDER_PATTERN_SEQUENCES), o = a.next(); !o.done; o = a.next()) {
          var f = o.value;
          if (!(t.length > f.length)) {
            for (var u = !0, s = 0; s < t.length; s++)
              if (t[s].getFinderPattern().getValue() !== f[s]) {
                u = !1;
                break;
              }
            if (u)
              return !0;
          }
        }
      } catch (c) {
        n = { error: c };
      } finally {
        try {
          o && !o.done && (i = a.return) && i.call(a);
        } finally {
          if (n) throw n.error;
        }
      }
      return !1;
    }, e.prototype.storeRow = function(t, n) {
      for (var i = 0, a = !1, o = !1; i < this.rows.length; ) {
        var f = this.rows[i];
        if (f.getRowNumber() > t) {
          o = f.isEquivalent(this.pairs);
          break;
        }
        a = f.isEquivalent(this.pairs), i++;
      }
      o || a || e.isPartialRow(this.pairs, this.rows) || (this.rows.push(i, new gi(this.pairs, t, n)), this.removePartialRows(this.pairs, this.rows));
    }, e.prototype.removePartialRows = function(t, n) {
      var i, a, o, f, u, s;
      try {
        for (var c = Ne(n), h = c.next(); !h.done; h = c.next()) {
          var l = h.value;
          if (l.getPairs().length !== t.length) {
            var d = !0;
            try {
              for (var v = (o = void 0, Ne(l.getPairs())), x = v.next(); !x.done; x = v.next()) {
                var g = x.value, _ = !1;
                try {
                  for (var y = (u = void 0, Ne(t)), A = y.next(); !A.done; A = y.next()) {
                    var E = A.value;
                    if (or.equals(g, E)) {
                      _ = !0;
                      break;
                    }
                  }
                } catch (I) {
                  u = { error: I };
                } finally {
                  try {
                    A && !A.done && (s = y.return) && s.call(y);
                  } finally {
                    if (u) throw u.error;
                  }
                }
                _ || (d = !1);
              }
            } catch (I) {
              o = { error: I };
            } finally {
              try {
                x && !x.done && (f = v.return) && f.call(v);
              } finally {
                if (o) throw o.error;
              }
            }
          }
        }
      } catch (I) {
        i = { error: I };
      } finally {
        try {
          h && !h.done && (a = c.return) && a.call(c);
        } finally {
          if (i) throw i.error;
        }
      }
    }, e.isPartialRow = function(t, n) {
      var i, a, o, f, u, s;
      try {
        for (var c = Ne(n), h = c.next(); !h.done; h = c.next()) {
          var l = h.value, d = !0;
          try {
            for (var v = (o = void 0, Ne(t)), x = v.next(); !x.done; x = v.next()) {
              var g = x.value, _ = !1;
              try {
                for (var y = (u = void 0, Ne(l.getPairs())), A = y.next(); !A.done; A = y.next()) {
                  var E = A.value;
                  if (g.equals(E)) {
                    _ = !0;
                    break;
                  }
                }
              } catch (I) {
                u = { error: I };
              } finally {
                try {
                  A && !A.done && (s = y.return) && s.call(y);
                } finally {
                  if (u) throw u.error;
                }
              }
              if (!_) {
                d = !1;
                break;
              }
            }
          } catch (I) {
            o = { error: I };
          } finally {
            try {
              x && !x.done && (f = v.return) && f.call(v);
            } finally {
              if (o) throw o.error;
            }
          }
          if (d)
            return !0;
        }
      } catch (I) {
        i = { error: I };
      } finally {
        try {
          h && !h.done && (a = c.return) && a.call(c);
        } finally {
          if (i) throw i.error;
        }
      }
      return !1;
    }, e.prototype.getRows = function() {
      return this.rows;
    }, e.constructResult = function(t) {
      var n = $n.buildBitArray(t), i = xi(n), a = i.parseInformation(), o = t[0].getFinderPattern().getResultPoints(), f = t[t.length - 1].getFinderPattern().getResultPoints(), u = [o[0], o[1], f[0], f[1]];
      return new le(a, null, null, u, b.RSS_EXPANDED, null);
    }, e.prototype.checkChecksum = function() {
      var t = this.pairs.get(0), n = t.getLeftChar(), i = t.getRightChar();
      if (i === null)
        return !1;
      for (var a = i.getChecksumPortion(), o = 2, f = 1; f < this.pairs.size(); ++f) {
        var u = this.pairs.get(f);
        a += u.getLeftChar().getChecksumPortion(), o++;
        var s = u.getRightChar();
        s != null && (a += s.getChecksumPortion(), o++);
      }
      a %= 211;
      var c = 211 * (o - 4) + a;
      return c === n.getValue();
    }, e.getNextSecondBar = function(t, n) {
      var i;
      return t.get(n) ? (i = t.getNextUnset(n), i = t.getNextSet(i)) : (i = t.getNextSet(n), i = t.getNextUnset(i)), i;
    }, e.prototype.retrieveNextPair = function(t, n, i) {
      var a = n.length % 2 === 0;
      this.startFromEven && (a = !a);
      var o, f = !0, u = -1;
      do
        this.findNextPair(t, n, u), o = this.parseFoundFinderPattern(t, i, a), o === null ? u = e.getNextSecondBar(t, this.startEnd[0]) : f = !1;
      while (f);
      var s = this.decodeDataCharacter(t, o, a, !0);
      if (!this.isEmptyPair(n) && n[n.length - 1].mustBeLast())
        throw new C();
      var c;
      try {
        c = this.decodeDataCharacter(t, o, a, !1);
      } catch (h) {
        c = null, console.log(h);
      }
      return new or(s, c, o, !0);
    }, e.prototype.isEmptyPair = function(t) {
      return t.length === 0;
    }, e.prototype.findNextPair = function(t, n, i) {
      var a = this.getDecodeFinderCounters();
      a[0] = 0, a[1] = 0, a[2] = 0, a[3] = 0;
      var o = t.getSize(), f;
      if (i >= 0)
        f = i;
      else if (this.isEmptyPair(n))
        f = 0;
      else {
        var u = n[n.length - 1];
        f = u.getFinderPattern().getStartEnd()[1];
      }
      var s = n.length % 2 !== 0;
      this.startFromEven && (s = !s);
      for (var c = !1; f < o && (c = !t.get(f), !!c); )
        f++;
      for (var h = 0, l = f, d = f; d < o; d++)
        if (t.get(d) !== c)
          a[h]++;
        else {
          if (h === 3) {
            if (s && e.reverseCounters(a), e.isFinderPattern(a)) {
              this.startEnd[0] = l, this.startEnd[1] = d;
              return;
            }
            s && e.reverseCounters(a), l += a[0] + a[1], a[0] = a[2], a[1] = a[3], a[2] = 0, a[3] = 0, h--;
          } else
            h++;
          a[h] = 1, c = !c;
        }
      throw new C();
    }, e.reverseCounters = function(t) {
      for (var n = t.length, i = 0; i < n / 2; ++i) {
        var a = t[i];
        t[i] = t[n - i - 1], t[n - i - 1] = a;
      }
    }, e.prototype.parseFoundFinderPattern = function(t, n, i) {
      var a, o, f;
      if (i) {
        for (var u = this.startEnd[0] - 1; u >= 0 && !t.get(u); )
          u--;
        u++, a = this.startEnd[0] - u, o = u, f = this.startEnd[1];
      } else
        o = this.startEnd[0], f = t.getNextUnset(this.startEnd[1] + 1), a = f - this.startEnd[1];
      var s = this.getDecodeFinderCounters();
      Y.arraycopy(s, 0, s, 1, s.length - 1), s[0] = a;
      var c;
      try {
        c = this.parseFinderValue(s, e.FINDER_PATTERNS);
      } catch {
        return null;
      }
      return new br(c, [o, f], o, f, n);
    }, e.prototype.decodeDataCharacter = function(t, n, i, a) {
      for (var o = this.getDataCharacterCounters(), f = 0; f < o.length; f++)
        o[f] = 0;
      if (a)
        e.recordPatternInReverse(t, n.getStartEnd()[0], o);
      else {
        e.recordPattern(t, n.getStartEnd()[1], o);
        for (var u = 0, s = o.length - 1; u < s; u++, s--) {
          var c = o[u];
          o[u] = o[s], o[s] = c;
        }
      }
      var h = 17, l = U.sum(new Int32Array(o)) / h, d = (n.getStartEnd()[1] - n.getStartEnd()[0]) / 15;
      if (Math.abs(l - d) / d > 0.3)
        throw new C();
      for (var v = this.getOddCounts(), x = this.getEvenCounts(), g = this.getOddRoundingErrors(), _ = this.getEvenRoundingErrors(), u = 0; u < o.length; u++) {
        var y = 1 * o[u] / l, A = y + 0.5;
        if (A < 1) {
          if (y < 0.3)
            throw new C();
          A = 1;
        } else if (A > 8) {
          if (y > 8.7)
            throw new C();
          A = 8;
        }
        var E = u / 2;
        u & 1 ? (x[E] = A, _[E] = y - A) : (v[E] = A, g[E] = y - A);
      }
      this.adjustOddEvenCounts(h);
      for (var I = 4 * n.getValue() + (i ? 0 : 2) + (a ? 0 : 1) - 1, S = 0, m = 0, u = v.length - 1; u >= 0; u--) {
        if (e.isNotA1left(n, i, a)) {
          var D = e.WEIGHTS[I][2 * u];
          m += v[u] * D;
        }
        S += v[u];
      }
      for (var P = 0, u = x.length - 1; u >= 0; u--)
        if (e.isNotA1left(n, i, a)) {
          var D = e.WEIGHTS[I][2 * u + 1];
          P += x[u] * D;
        }
      var R = m + P;
      if (S & 1 || S > 13 || S < 4)
        throw new C();
      var q = (13 - S) / 2, L = e.SYMBOL_WIDEST[q], K = 9 - L, _e = Ve.getRSSvalue(v, L, !0), De = Ve.getRSSvalue(x, K, !1), dt = e.EVEN_TOTAL_SUBSET[q], vt = e.GSUM[q], pt = _e * dt + De + vt;
      return new ut(pt, R);
    }, e.isNotA1left = function(t, n, i) {
      return !(t.getValue() === 0 && n && i);
    }, e.prototype.adjustOddEvenCounts = function(t) {
      var n = U.sum(new Int32Array(this.getOddCounts())), i = U.sum(new Int32Array(this.getEvenCounts())), a = !1, o = !1;
      n > 13 ? o = !0 : n < 4 && (a = !0);
      var f = !1, u = !1;
      i > 13 ? u = !0 : i < 4 && (f = !0);
      var s = n + i - t, c = (n & 1) === 1, h = (i & 1) === 0;
      if (s === 1)
        if (c) {
          if (h)
            throw new C();
          o = !0;
        } else {
          if (!h)
            throw new C();
          u = !0;
        }
      else if (s === -1)
        if (c) {
          if (h)
            throw new C();
          a = !0;
        } else {
          if (!h)
            throw new C();
          f = !0;
        }
      else if (s === 0) {
        if (c) {
          if (!h)
            throw new C();
          n < i ? (a = !0, u = !0) : (o = !0, f = !0);
        } else if (h)
          throw new C();
      } else
        throw new C();
      if (a) {
        if (o)
          throw new C();
        e.increment(this.getOddCounts(), this.getOddRoundingErrors());
      }
      if (o && e.decrement(this.getOddCounts(), this.getOddRoundingErrors()), f) {
        if (u)
          throw new C();
        e.increment(this.getEvenCounts(), this.getOddRoundingErrors());
      }
      u && e.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
    }, e.SYMBOL_WIDEST = [7, 5, 4, 3, 1], e.EVEN_TOTAL_SUBSET = [4, 20, 52, 104, 204], e.GSUM = [0, 348, 1388, 2948, 3988], e.FINDER_PATTERNS = [
      Int32Array.from([1, 8, 4, 1]),
      Int32Array.from([3, 6, 4, 1]),
      Int32Array.from([3, 4, 6, 1]),
      Int32Array.from([3, 2, 8, 1]),
      Int32Array.from([2, 6, 5, 1]),
      Int32Array.from([2, 2, 9, 1])
    ], e.WEIGHTS = [
      [1, 3, 9, 27, 81, 32, 96, 77],
      [20, 60, 180, 118, 143, 7, 21, 63],
      [189, 145, 13, 39, 117, 140, 209, 205],
      [193, 157, 49, 147, 19, 57, 171, 91],
      [62, 186, 136, 197, 169, 85, 44, 132],
      [185, 133, 188, 142, 4, 12, 36, 108],
      [113, 128, 173, 97, 80, 29, 87, 50],
      [150, 28, 84, 41, 123, 158, 52, 156],
      [46, 138, 203, 187, 139, 206, 196, 166],
      [76, 17, 51, 153, 37, 111, 122, 155],
      [43, 129, 176, 106, 107, 110, 119, 146],
      [16, 48, 144, 10, 30, 90, 59, 177],
      [109, 116, 137, 200, 178, 112, 125, 164],
      [70, 210, 208, 202, 184, 130, 179, 115],
      [134, 191, 151, 31, 93, 68, 204, 190],
      [148, 22, 66, 198, 172, 94, 71, 2],
      [6, 18, 54, 162, 64, 192, 154, 40],
      [120, 149, 25, 75, 14, 42, 126, 167],
      [79, 26, 78, 23, 69, 207, 199, 175],
      [103, 98, 83, 38, 114, 131, 182, 124],
      [161, 61, 183, 127, 170, 88, 53, 159],
      [55, 165, 73, 8, 24, 72, 5, 15],
      [45, 135, 194, 160, 58, 174, 100, 89]
    ], e.FINDER_PAT_A = 0, e.FINDER_PAT_B = 1, e.FINDER_PAT_C = 2, e.FINDER_PAT_D = 3, e.FINDER_PAT_E = 4, e.FINDER_PAT_F = 5, e.FINDER_PATTERN_SEQUENCES = [
      [e.FINDER_PAT_A, e.FINDER_PAT_A],
      [
        e.FINDER_PAT_A,
        e.FINDER_PAT_B,
        e.FINDER_PAT_B
      ],
      [
        e.FINDER_PAT_A,
        e.FINDER_PAT_C,
        e.FINDER_PAT_B,
        e.FINDER_PAT_D
      ],
      [
        e.FINDER_PAT_A,
        e.FINDER_PAT_E,
        e.FINDER_PAT_B,
        e.FINDER_PAT_D,
        e.FINDER_PAT_C
      ],
      [
        e.FINDER_PAT_A,
        e.FINDER_PAT_E,
        e.FINDER_PAT_B,
        e.FINDER_PAT_D,
        e.FINDER_PAT_D,
        e.FINDER_PAT_F
      ],
      [
        e.FINDER_PAT_A,
        e.FINDER_PAT_E,
        e.FINDER_PAT_B,
        e.FINDER_PAT_D,
        e.FINDER_PAT_E,
        e.FINDER_PAT_F,
        e.FINDER_PAT_F
      ],
      [
        e.FINDER_PAT_A,
        e.FINDER_PAT_A,
        e.FINDER_PAT_B,
        e.FINDER_PAT_B,
        e.FINDER_PAT_C,
        e.FINDER_PAT_C,
        e.FINDER_PAT_D,
        e.FINDER_PAT_D
      ],
      [
        e.FINDER_PAT_A,
        e.FINDER_PAT_A,
        e.FINDER_PAT_B,
        e.FINDER_PAT_B,
        e.FINDER_PAT_C,
        e.FINDER_PAT_C,
        e.FINDER_PAT_D,
        e.FINDER_PAT_E,
        e.FINDER_PAT_E
      ],
      [
        e.FINDER_PAT_A,
        e.FINDER_PAT_A,
        e.FINDER_PAT_B,
        e.FINDER_PAT_B,
        e.FINDER_PAT_C,
        e.FINDER_PAT_C,
        e.FINDER_PAT_D,
        e.FINDER_PAT_E,
        e.FINDER_PAT_F,
        e.FINDER_PAT_F
      ],
      [
        e.FINDER_PAT_A,
        e.FINDER_PAT_A,
        e.FINDER_PAT_B,
        e.FINDER_PAT_B,
        e.FINDER_PAT_C,
        e.FINDER_PAT_D,
        e.FINDER_PAT_D,
        e.FINDER_PAT_E,
        e.FINDER_PAT_E,
        e.FINDER_PAT_F,
        e.FINDER_PAT_F
      ]
    ], e.MAX_PAIRS = 11, e;
  }(Le)
), wi = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Ai = (
  /** @class */
  function(r) {
    wi(e, r);
    function e(t, n, i) {
      var a = r.call(this, t, n) || this;
      return a.count = 0, a.finderPattern = i, a;
    }
    return e.prototype.getFinderPattern = function() {
      return this.finderPattern;
    }, e.prototype.getCount = function() {
      return this.count;
    }, e.prototype.incrementCount = function() {
      this.count++;
    }, e;
  }(ut)
), Ei = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), _t = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, fr = (
  /** @class */
  function(r) {
    Ei(e, r);
    function e() {
      var t = r !== null && r.apply(this, arguments) || this;
      return t.possibleLeftPairs = [], t.possibleRightPairs = [], t;
    }
    return e.prototype.decodeRow = function(t, n, i) {
      var a, o, f, u, s = this.decodePair(n, !1, t, i);
      e.addOrTally(this.possibleLeftPairs, s), n.reverse();
      var c = this.decodePair(n, !0, t, i);
      e.addOrTally(this.possibleRightPairs, c), n.reverse();
      try {
        for (var h = _t(this.possibleLeftPairs), l = h.next(); !l.done; l = h.next()) {
          var d = l.value;
          if (d.getCount() > 1)
            try {
              for (var v = (f = void 0, _t(this.possibleRightPairs)), x = v.next(); !x.done; x = v.next()) {
                var g = x.value;
                if (g.getCount() > 1 && e.checkChecksum(d, g))
                  return e.constructResult(d, g);
              }
            } catch (_) {
              f = { error: _ };
            } finally {
              try {
                x && !x.done && (u = v.return) && u.call(v);
              } finally {
                if (f) throw f.error;
              }
            }
        }
      } catch (_) {
        a = { error: _ };
      } finally {
        try {
          l && !l.done && (o = h.return) && o.call(h);
        } finally {
          if (a) throw a.error;
        }
      }
      throw new C();
    }, e.addOrTally = function(t, n) {
      var i, a;
      if (n != null) {
        var o = !1;
        try {
          for (var f = _t(t), u = f.next(); !u.done; u = f.next()) {
            var s = u.value;
            if (s.getValue() === n.getValue()) {
              s.incrementCount(), o = !0;
              break;
            }
          }
        } catch (c) {
          i = { error: c };
        } finally {
          try {
            u && !u.done && (a = f.return) && a.call(f);
          } finally {
            if (i) throw i.error;
          }
        }
        o || t.push(n);
      }
    }, e.prototype.reset = function() {
      this.possibleLeftPairs.length = 0, this.possibleRightPairs.length = 0;
    }, e.constructResult = function(t, n) {
      for (var i = 4537077 * t.getValue() + n.getValue(), a = new String(i).toString(), o = new M(), f = 13 - a.length; f > 0; f--)
        o.append("0");
      o.append(a);
      for (var u = 0, f = 0; f < 13; f++) {
        var s = o.charAt(f).charCodeAt(0) - 48;
        u += f & 1 ? s : 3 * s;
      }
      u = 10 - u % 10, u === 10 && (u = 0), o.append(u.toString());
      var c = t.getFinderPattern().getResultPoints(), h = n.getFinderPattern().getResultPoints();
      return new le(o.toString(), null, 0, [c[0], c[1], h[0], h[1]], b.RSS_14, (/* @__PURE__ */ new Date()).getTime());
    }, e.checkChecksum = function(t, n) {
      var i = (t.getChecksumPortion() + 16 * n.getChecksumPortion()) % 79, a = 9 * t.getFinderPattern().getValue() + n.getFinderPattern().getValue();
      return a > 72 && a--, a > 8 && a--, i === a;
    }, e.prototype.decodePair = function(t, n, i, a) {
      try {
        var o = this.findFinderPattern(t, n), f = this.parseFoundFinderPattern(t, i, n, o), u = a == null ? null : a.get($.NEED_RESULT_POINT_CALLBACK);
        if (u != null) {
          var s = (o[0] + o[1]) / 2;
          n && (s = t.getSize() - 1 - s), u.foundPossibleResultPoint(new T(s, i));
        }
        var c = this.decodeDataCharacter(t, f, !0), h = this.decodeDataCharacter(t, f, !1);
        return new Ai(1597 * c.getValue() + h.getValue(), c.getChecksumPortion() + 4 * h.getChecksumPortion(), f);
      } catch {
        return null;
      }
    }, e.prototype.decodeDataCharacter = function(t, n, i) {
      for (var a = this.getDataCharacterCounters(), o = 0; o < a.length; o++)
        a[o] = 0;
      if (i)
        ne.recordPatternInReverse(t, n.getStartEnd()[0], a);
      else {
        ne.recordPattern(t, n.getStartEnd()[1] + 1, a);
        for (var f = 0, u = a.length - 1; f < u; f++, u--) {
          var s = a[f];
          a[f] = a[u], a[u] = s;
        }
      }
      for (var c = i ? 16 : 15, h = U.sum(new Int32Array(a)) / c, l = this.getOddCounts(), d = this.getEvenCounts(), v = this.getOddRoundingErrors(), x = this.getEvenRoundingErrors(), f = 0; f < a.length; f++) {
        var g = a[f] / h, _ = Math.floor(g + 0.5);
        _ < 1 ? _ = 1 : _ > 8 && (_ = 8);
        var y = Math.floor(f / 2);
        f & 1 ? (d[y] = _, x[y] = g - _) : (l[y] = _, v[y] = g - _);
      }
      this.adjustOddEvenCounts(i, c);
      for (var A = 0, E = 0, f = l.length - 1; f >= 0; f--)
        E *= 9, E += l[f], A += l[f];
      for (var I = 0, S = 0, f = d.length - 1; f >= 0; f--)
        I *= 9, I += d[f], S += d[f];
      var m = E + 3 * I;
      if (i) {
        if (A & 1 || A > 12 || A < 4)
          throw new C();
        var D = (12 - A) / 2, P = e.OUTSIDE_ODD_WIDEST[D], R = 9 - P, q = Ve.getRSSvalue(l, P, !1), L = Ve.getRSSvalue(d, R, !0), K = e.OUTSIDE_EVEN_TOTAL_SUBSET[D], _e = e.OUTSIDE_GSUM[D];
        return new ut(q * K + L + _e, m);
      } else {
        if (S & 1 || S > 10 || S < 4)
          throw new C();
        var D = (10 - S) / 2, P = e.INSIDE_ODD_WIDEST[D], R = 9 - P, q = Ve.getRSSvalue(l, P, !0), L = Ve.getRSSvalue(d, R, !1), De = e.INSIDE_ODD_TOTAL_SUBSET[D], _e = e.INSIDE_GSUM[D];
        return new ut(L * De + q + _e, m);
      }
    }, e.prototype.findFinderPattern = function(t, n) {
      var i = this.getDecodeFinderCounters();
      i[0] = 0, i[1] = 0, i[2] = 0, i[3] = 0;
      for (var a = t.getSize(), o = !1, f = 0; f < a && (o = !t.get(f), n !== o); )
        f++;
      for (var u = 0, s = f, c = f; c < a; c++)
        if (t.get(c) !== o)
          i[u]++;
        else {
          if (u === 3) {
            if (Le.isFinderPattern(i))
              return [s, c];
            s += i[0] + i[1], i[0] = i[2], i[1] = i[3], i[2] = 0, i[3] = 0, u--;
          } else
            u++;
          i[u] = 1, o = !o;
        }
      throw new C();
    }, e.prototype.parseFoundFinderPattern = function(t, n, i, a) {
      for (var o = t.get(a[0]), f = a[0] - 1; f >= 0 && o !== t.get(f); )
        f--;
      f++;
      var u = a[0] - f, s = this.getDecodeFinderCounters(), c = new Int32Array(s.length);
      Y.arraycopy(s, 0, c, 1, s.length - 1), c[0] = u;
      var h = this.parseFinderValue(c, e.FINDER_PATTERNS), l = f, d = a[1];
      return i && (l = t.getSize() - 1 - l, d = t.getSize() - 1 - d), new br(h, [f, a[1]], l, d, n);
    }, e.prototype.adjustOddEvenCounts = function(t, n) {
      var i = U.sum(new Int32Array(this.getOddCounts())), a = U.sum(new Int32Array(this.getEvenCounts())), o = !1, f = !1, u = !1, s = !1;
      t ? (i > 12 ? f = !0 : i < 4 && (o = !0), a > 12 ? s = !0 : a < 4 && (u = !0)) : (i > 11 ? f = !0 : i < 5 && (o = !0), a > 10 ? s = !0 : a < 4 && (u = !0));
      var c = i + a - n, h = (i & 1) === (t ? 1 : 0), l = (a & 1) === 1;
      if (c === 1)
        if (h) {
          if (l)
            throw new C();
          f = !0;
        } else {
          if (!l)
            throw new C();
          s = !0;
        }
      else if (c === -1)
        if (h) {
          if (l)
            throw new C();
          o = !0;
        } else {
          if (!l)
            throw new C();
          u = !0;
        }
      else if (c === 0) {
        if (h) {
          if (!l)
            throw new C();
          i < a ? (o = !0, s = !0) : (f = !0, u = !0);
        } else if (l)
          throw new C();
      } else
        throw new C();
      if (o) {
        if (f)
          throw new C();
        Le.increment(this.getOddCounts(), this.getOddRoundingErrors());
      }
      if (f && Le.decrement(this.getOddCounts(), this.getOddRoundingErrors()), u) {
        if (s)
          throw new C();
        Le.increment(this.getEvenCounts(), this.getOddRoundingErrors());
      }
      s && Le.decrement(this.getEvenCounts(), this.getEvenRoundingErrors());
    }, e.OUTSIDE_EVEN_TOTAL_SUBSET = [1, 10, 34, 70, 126], e.INSIDE_ODD_TOTAL_SUBSET = [4, 20, 48, 81], e.OUTSIDE_GSUM = [0, 161, 961, 2015, 2715], e.INSIDE_GSUM = [0, 336, 1036, 1516], e.OUTSIDE_ODD_WIDEST = [8, 6, 4, 3, 1], e.INSIDE_ODD_WIDEST = [2, 4, 6, 8], e.FINDER_PATTERNS = [
      Int32Array.from([3, 8, 2, 1]),
      Int32Array.from([3, 5, 5, 1]),
      Int32Array.from([3, 3, 7, 1]),
      Int32Array.from([3, 1, 9, 1]),
      Int32Array.from([2, 7, 4, 1]),
      Int32Array.from([2, 5, 6, 1]),
      Int32Array.from([2, 3, 8, 1]),
      Int32Array.from([1, 5, 7, 1]),
      Int32Array.from([1, 3, 9, 1])
    ], e;
  }(Le)
), Ci = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), $e = (
  /** @class */
  function(r) {
    Ci(e, r);
    function e(t) {
      var n = r.call(this) || this;
      n.readers = [];
      var i = t ? t.get($.POSSIBLE_FORMATS) : null, a = t && t.get($.ASSUME_CODE_39_CHECK_DIGIT) !== void 0, o = t && t.get($.ENABLE_CODE_39_EXTENDED_MODE) !== void 0;
      return i && ((i.includes(b.EAN_13) || i.includes(b.UPC_A) || i.includes(b.EAN_8) || i.includes(b.UPC_E)) && n.readers.push(new yt(t)), i.includes(b.CODE_39) && n.readers.push(new qt(a, o)), i.includes(b.CODE_93) && n.readers.push(new Qt()), i.includes(b.CODE_128) && n.readers.push(new Kt()), i.includes(b.ITF) && n.readers.push(new Jt()), i.includes(b.CODABAR) && n.readers.push(new zn()), i.includes(b.RSS_14) && n.readers.push(new fr()), i.includes(b.RSS_EXPANDED) && (console.warn("RSS Expanded reader IS NOT ready for production yet! use at your own risk."), n.readers.push(new _i()))), n.readers.length === 0 && (n.readers.push(new yt(t)), n.readers.push(new qt()), n.readers.push(new Qt()), n.readers.push(new yt(t)), n.readers.push(new Kt()), n.readers.push(new Jt()), n.readers.push(new fr())), n;
    }
    return e.prototype.decodeRow = function(t, n, i) {
      for (var a = 0; a < this.readers.length; a++)
        try {
          return this.readers[a].decodeRow(t, n, i);
        } catch {
        }
      throw new C();
    }, e.prototype.reset = function() {
      this.readers.forEach(function(t) {
        return t.reset();
      });
    }, e;
  }(ne)
), Ii = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
(function(r) {
  Ii(e, r);
  function e(t, n) {
    return t === void 0 && (t = 500), r.call(this, new $e(n), t, n) || this;
  }
  return e;
})(We);
var ur = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, G = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.ecCodewords = e, this.ecBlocks = [t], n && this.ecBlocks.push(n);
    }
    return r.prototype.getECCodewords = function() {
      return this.ecCodewords;
    }, r.prototype.getECBlocks = function() {
      return this.ecBlocks;
    }, r;
  }()
), H = (
  /** @class */
  function() {
    function r(e, t) {
      this.count = e, this.dataCodewords = t;
    }
    return r.prototype.getCount = function() {
      return this.count;
    }, r.prototype.getDataCodewords = function() {
      return this.dataCodewords;
    }, r;
  }()
), Si = (
  /** @class */
  function() {
    function r(e, t, n, i, a, o) {
      var f, u;
      this.versionNumber = e, this.symbolSizeRows = t, this.symbolSizeColumns = n, this.dataRegionSizeRows = i, this.dataRegionSizeColumns = a, this.ecBlocks = o;
      var s = 0, c = o.getECCodewords(), h = o.getECBlocks();
      try {
        for (var l = ur(h), d = l.next(); !d.done; d = l.next()) {
          var v = d.value;
          s += v.getCount() * (v.getDataCodewords() + c);
        }
      } catch (x) {
        f = { error: x };
      } finally {
        try {
          d && !d.done && (u = l.return) && u.call(l);
        } finally {
          if (f) throw f.error;
        }
      }
      this.totalCodewords = s;
    }
    return r.prototype.getVersionNumber = function() {
      return this.versionNumber;
    }, r.prototype.getSymbolSizeRows = function() {
      return this.symbolSizeRows;
    }, r.prototype.getSymbolSizeColumns = function() {
      return this.symbolSizeColumns;
    }, r.prototype.getDataRegionSizeRows = function() {
      return this.dataRegionSizeRows;
    }, r.prototype.getDataRegionSizeColumns = function() {
      return this.dataRegionSizeColumns;
    }, r.prototype.getTotalCodewords = function() {
      return this.totalCodewords;
    }, r.prototype.getECBlocks = function() {
      return this.ecBlocks;
    }, r.getVersionForDimensions = function(e, t) {
      var n, i;
      if (e & 1 || t & 1)
        throw new O();
      try {
        for (var a = ur(r.VERSIONS), o = a.next(); !o.done; o = a.next()) {
          var f = o.value;
          if (f.symbolSizeRows === e && f.symbolSizeColumns === t)
            return f;
        }
      } catch (u) {
        n = { error: u };
      } finally {
        try {
          o && !o.done && (i = a.return) && i.call(a);
        } finally {
          if (n) throw n.error;
        }
      }
      throw new O();
    }, r.prototype.toString = function() {
      return "" + this.versionNumber;
    }, r.buildVersions = function() {
      return [
        new r(1, 10, 10, 8, 8, new G(5, new H(1, 3))),
        new r(2, 12, 12, 10, 10, new G(7, new H(1, 5))),
        new r(3, 14, 14, 12, 12, new G(10, new H(1, 8))),
        new r(4, 16, 16, 14, 14, new G(12, new H(1, 12))),
        new r(5, 18, 18, 16, 16, new G(14, new H(1, 18))),
        new r(6, 20, 20, 18, 18, new G(18, new H(1, 22))),
        new r(7, 22, 22, 20, 20, new G(20, new H(1, 30))),
        new r(8, 24, 24, 22, 22, new G(24, new H(1, 36))),
        new r(9, 26, 26, 24, 24, new G(28, new H(1, 44))),
        new r(10, 32, 32, 14, 14, new G(36, new H(1, 62))),
        new r(11, 36, 36, 16, 16, new G(42, new H(1, 86))),
        new r(12, 40, 40, 18, 18, new G(48, new H(1, 114))),
        new r(13, 44, 44, 20, 20, new G(56, new H(1, 144))),
        new r(14, 48, 48, 22, 22, new G(68, new H(1, 174))),
        new r(15, 52, 52, 24, 24, new G(42, new H(2, 102))),
        new r(16, 64, 64, 14, 14, new G(56, new H(2, 140))),
        new r(17, 72, 72, 16, 16, new G(36, new H(4, 92))),
        new r(18, 80, 80, 18, 18, new G(48, new H(4, 114))),
        new r(19, 88, 88, 20, 20, new G(56, new H(4, 144))),
        new r(20, 96, 96, 22, 22, new G(68, new H(4, 174))),
        new r(21, 104, 104, 24, 24, new G(56, new H(6, 136))),
        new r(22, 120, 120, 18, 18, new G(68, new H(6, 175))),
        new r(23, 132, 132, 20, 20, new G(62, new H(8, 163))),
        new r(24, 144, 144, 22, 22, new G(62, new H(8, 156), new H(2, 155))),
        new r(25, 8, 18, 6, 16, new G(7, new H(1, 5))),
        new r(26, 8, 32, 6, 14, new G(11, new H(1, 10))),
        new r(27, 12, 26, 10, 24, new G(14, new H(1, 16))),
        new r(28, 12, 36, 10, 16, new G(18, new H(1, 22))),
        new r(29, 16, 36, 14, 16, new G(24, new H(1, 32))),
        new r(30, 16, 48, 14, 22, new G(28, new H(1, 49)))
      ];
    }, r.VERSIONS = r.buildVersions(), r;
  }()
), mi = (
  /** @class */
  function() {
    function r(e) {
      var t = e.getHeight();
      if (t < 8 || t > 144 || t & 1)
        throw new O();
      this.version = r.readVersion(e), this.mappingBitMatrix = this.extractDataRegion(e), this.readMappingMatrix = new Te(this.mappingBitMatrix.getWidth(), this.mappingBitMatrix.getHeight());
    }
    return r.prototype.getVersion = function() {
      return this.version;
    }, r.readVersion = function(e) {
      var t = e.getHeight(), n = e.getWidth();
      return Si.getVersionForDimensions(t, n);
    }, r.prototype.readCodewords = function() {
      var e = new Int8Array(this.version.getTotalCodewords()), t = 0, n = 4, i = 0, a = this.mappingBitMatrix.getHeight(), o = this.mappingBitMatrix.getWidth(), f = !1, u = !1, s = !1, c = !1;
      do
        if (n === a && i === 0 && !f)
          e[t++] = this.readCorner1(a, o) & 255, n -= 2, i += 2, f = !0;
        else if (n === a - 2 && i === 0 && o & 3 && !u)
          e[t++] = this.readCorner2(a, o) & 255, n -= 2, i += 2, u = !0;
        else if (n === a + 4 && i === 2 && !(o & 7) && !s)
          e[t++] = this.readCorner3(a, o) & 255, n -= 2, i += 2, s = !0;
        else if (n === a - 2 && i === 0 && (o & 7) === 4 && !c)
          e[t++] = this.readCorner4(a, o) & 255, n -= 2, i += 2, c = !0;
        else {
          do
            n < a && i >= 0 && !this.readMappingMatrix.get(i, n) && (e[t++] = this.readUtah(n, i, a, o) & 255), n -= 2, i += 2;
          while (n >= 0 && i < o);
          n += 1, i += 3;
          do
            n >= 0 && i < o && !this.readMappingMatrix.get(i, n) && (e[t++] = this.readUtah(n, i, a, o) & 255), n += 2, i -= 2;
          while (n < a && i >= 0);
          n += 3, i += 1;
        }
      while (n < a || i < o);
      if (t !== this.version.getTotalCodewords())
        throw new O();
      return e;
    }, r.prototype.readModule = function(e, t, n, i) {
      return e < 0 && (e += n, t += 4 - (n + 4 & 7)), t < 0 && (t += i, e += 4 - (i + 4 & 7)), this.readMappingMatrix.set(t, e), this.mappingBitMatrix.get(t, e);
    }, r.prototype.readUtah = function(e, t, n, i) {
      var a = 0;
      return this.readModule(e - 2, t - 2, n, i) && (a |= 1), a <<= 1, this.readModule(e - 2, t - 1, n, i) && (a |= 1), a <<= 1, this.readModule(e - 1, t - 2, n, i) && (a |= 1), a <<= 1, this.readModule(e - 1, t - 1, n, i) && (a |= 1), a <<= 1, this.readModule(e - 1, t, n, i) && (a |= 1), a <<= 1, this.readModule(e, t - 2, n, i) && (a |= 1), a <<= 1, this.readModule(e, t - 1, n, i) && (a |= 1), a <<= 1, this.readModule(e, t, n, i) && (a |= 1), a;
    }, r.prototype.readCorner1 = function(e, t) {
      var n = 0;
      return this.readModule(e - 1, 0, e, t) && (n |= 1), n <<= 1, this.readModule(e - 1, 1, e, t) && (n |= 1), n <<= 1, this.readModule(e - 1, 2, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 2, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 1, e, t) && (n |= 1), n <<= 1, this.readModule(1, t - 1, e, t) && (n |= 1), n <<= 1, this.readModule(2, t - 1, e, t) && (n |= 1), n <<= 1, this.readModule(3, t - 1, e, t) && (n |= 1), n;
    }, r.prototype.readCorner2 = function(e, t) {
      var n = 0;
      return this.readModule(e - 3, 0, e, t) && (n |= 1), n <<= 1, this.readModule(e - 2, 0, e, t) && (n |= 1), n <<= 1, this.readModule(e - 1, 0, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 4, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 3, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 2, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 1, e, t) && (n |= 1), n <<= 1, this.readModule(1, t - 1, e, t) && (n |= 1), n;
    }, r.prototype.readCorner3 = function(e, t) {
      var n = 0;
      return this.readModule(e - 1, 0, e, t) && (n |= 1), n <<= 1, this.readModule(e - 1, t - 1, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 3, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 2, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 1, e, t) && (n |= 1), n <<= 1, this.readModule(1, t - 3, e, t) && (n |= 1), n <<= 1, this.readModule(1, t - 2, e, t) && (n |= 1), n <<= 1, this.readModule(1, t - 1, e, t) && (n |= 1), n;
    }, r.prototype.readCorner4 = function(e, t) {
      var n = 0;
      return this.readModule(e - 3, 0, e, t) && (n |= 1), n <<= 1, this.readModule(e - 2, 0, e, t) && (n |= 1), n <<= 1, this.readModule(e - 1, 0, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 2, e, t) && (n |= 1), n <<= 1, this.readModule(0, t - 1, e, t) && (n |= 1), n <<= 1, this.readModule(1, t - 1, e, t) && (n |= 1), n <<= 1, this.readModule(2, t - 1, e, t) && (n |= 1), n <<= 1, this.readModule(3, t - 1, e, t) && (n |= 1), n;
    }, r.prototype.extractDataRegion = function(e) {
      var t = this.version.getSymbolSizeRows(), n = this.version.getSymbolSizeColumns();
      if (e.getHeight() !== t)
        throw new N("Dimension of bitMatrix must match the version size");
      for (var i = this.version.getDataRegionSizeRows(), a = this.version.getDataRegionSizeColumns(), o = t / i | 0, f = n / a | 0, u = o * i, s = f * a, c = new Te(s, u), h = 0; h < o; ++h)
        for (var l = h * i, d = 0; d < f; ++d)
          for (var v = d * a, x = 0; x < i; ++x)
            for (var g = h * (i + 2) + 1 + x, _ = l + x, y = 0; y < a; ++y) {
              var A = d * (a + 2) + 1 + y;
              if (e.get(A, g)) {
                var E = v + y;
                c.set(E, _);
              }
            }
      return c;
    }, r;
  }()
), sr = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Oi = (
  /** @class */
  function() {
    function r(e, t) {
      this.numDataCodewords = e, this.codewords = t;
    }
    return r.getDataBlocks = function(e, t) {
      var n, i, a, o, f = t.getECBlocks(), u = 0, s = f.getECBlocks();
      try {
        for (var c = sr(s), h = c.next(); !h.done; h = c.next()) {
          var l = h.value;
          u += l.getCount();
        }
      } catch (_e) {
        n = { error: _e };
      } finally {
        try {
          h && !h.done && (i = c.return) && i.call(c);
        } finally {
          if (n) throw n.error;
        }
      }
      var d = new Array(u), v = 0;
      try {
        for (var x = sr(s), g = x.next(); !g.done; g = x.next())
          for (var l = g.value, _ = 0; _ < l.getCount(); _++) {
            var y = l.getDataCodewords(), A = f.getECCodewords() + y;
            d[v++] = new r(y, new Uint8Array(A));
          }
      } catch (_e) {
        a = { error: _e };
      } finally {
        try {
          g && !g.done && (o = x.return) && o.call(x);
        } finally {
          if (a) throw a.error;
        }
      }
      for (var E = d[0].codewords.length, I = E - f.getECCodewords(), S = I - 1, m = 0, _ = 0; _ < S; _++)
        for (var D = 0; D < v; D++)
          d[D].codewords[_] = e[m++];
      for (var P = t.getVersionNumber() === 24, R = P ? 8 : v, D = 0; D < R; D++)
        d[D].codewords[I - 1] = e[m++];
      for (var q = d[0].codewords.length, _ = I; _ < q; _++)
        for (var D = 0; D < v; D++) {
          var L = P ? (D + 8) % v : D, K = P && L > 7 ? _ - 1 : _;
          d[L].codewords[K] = e[m++];
        }
      if (m !== e.length)
        throw new N();
      return d;
    }, r.prototype.getNumDataCodewords = function() {
      return this.numDataCodewords;
    }, r.prototype.getCodewords = function() {
      return this.codewords;
    }, r;
  }()
), Pr = (
  /** @class */
  function() {
    function r(e) {
      this.bytes = e, this.byteOffset = 0, this.bitOffset = 0;
    }
    return r.prototype.getBitOffset = function() {
      return this.bitOffset;
    }, r.prototype.getByteOffset = function() {
      return this.byteOffset;
    }, r.prototype.readBits = function(e) {
      if (e < 1 || e > 32 || e > this.available())
        throw new N("" + e);
      var t = 0, n = this.bitOffset, i = this.byteOffset, a = this.bytes;
      if (n > 0) {
        var o = 8 - n, f = e < o ? e : o, u = o - f, s = 255 >> 8 - f << u;
        t = (a[i] & s) >> u, e -= f, n += f, n === 8 && (n = 0, i++);
      }
      if (e > 0) {
        for (; e >= 8; )
          t = t << 8 | a[i] & 255, i++, e -= 8;
        if (e > 0) {
          var u = 8 - e, s = 255 >> u << u;
          t = t << e | (a[i] & s) >> u, n += e;
        }
      }
      return this.bitOffset = n, this.byteOffset = i, t;
    }, r.prototype.available = function() {
      return 8 * (this.bytes.length - this.byteOffset) - this.bitOffset;
    }, r;
  }()
), Q;
(function(r) {
  r[r.PAD_ENCODE = 0] = "PAD_ENCODE", r[r.ASCII_ENCODE = 1] = "ASCII_ENCODE", r[r.C40_ENCODE = 2] = "C40_ENCODE", r[r.TEXT_ENCODE = 3] = "TEXT_ENCODE", r[r.ANSIX12_ENCODE = 4] = "ANSIX12_ENCODE", r[r.EDIFACT_ENCODE = 5] = "EDIFACT_ENCODE", r[r.BASE256_ENCODE = 6] = "BASE256_ENCODE";
})(Q || (Q = {}));
var Ti = (
  /** @class */
  function() {
    function r() {
    }
    return r.decode = function(e) {
      var t = new Pr(e), n = new M(), i = new M(), a = new Array(), o = Q.ASCII_ENCODE;
      do
        if (o === Q.ASCII_ENCODE)
          o = this.decodeAsciiSegment(t, n, i);
        else {
          switch (o) {
            case Q.C40_ENCODE:
              this.decodeC40Segment(t, n);
              break;
            case Q.TEXT_ENCODE:
              this.decodeTextSegment(t, n);
              break;
            case Q.ANSIX12_ENCODE:
              this.decodeAnsiX12Segment(t, n);
              break;
            case Q.EDIFACT_ENCODE:
              this.decodeEdifactSegment(t, n);
              break;
            case Q.BASE256_ENCODE:
              this.decodeBase256Segment(t, n, a);
              break;
            default:
              throw new O();
          }
          o = Q.ASCII_ENCODE;
        }
      while (o !== Q.PAD_ENCODE && t.available() > 0);
      return i.length() > 0 && n.append(i.toString()), new ht(e, n.toString(), a.length === 0 ? null : a, null);
    }, r.decodeAsciiSegment = function(e, t, n) {
      var i = !1;
      do {
        var a = e.readBits(8);
        if (a === 0)
          throw new O();
        if (a <= 128)
          return i && (a += 128), t.append(String.fromCharCode(a - 1)), Q.ASCII_ENCODE;
        if (a === 129)
          return Q.PAD_ENCODE;
        if (a <= 229) {
          var o = a - 130;
          o < 10 && t.append("0"), t.append("" + o);
        } else
          switch (a) {
            case 230:
              return Q.C40_ENCODE;
            case 231:
              return Q.BASE256_ENCODE;
            case 232:
              t.append("");
              break;
            case 233:
            case 234:
              break;
            case 235:
              i = !0;
              break;
            case 236:
              t.append("[)>05"), n.insert(0, "");
              break;
            case 237:
              t.append("[)>06"), n.insert(0, "");
              break;
            case 238:
              return Q.ANSIX12_ENCODE;
            case 239:
              return Q.TEXT_ENCODE;
            case 240:
              return Q.EDIFACT_ENCODE;
            case 241:
              break;
            default:
              if (a !== 254 || e.available() !== 0)
                throw new O();
              break;
          }
      } while (e.available() > 0);
      return Q.ASCII_ENCODE;
    }, r.decodeC40Segment = function(e, t) {
      var n = !1, i = [], a = 0;
      do {
        if (e.available() === 8)
          return;
        var o = e.readBits(8);
        if (o === 254)
          return;
        this.parseTwoBytes(o, e.readBits(8), i);
        for (var f = 0; f < 3; f++) {
          var u = i[f];
          switch (a) {
            case 0:
              if (u < 3)
                a = u + 1;
              else if (u < this.C40_BASIC_SET_CHARS.length) {
                var s = this.C40_BASIC_SET_CHARS[u];
                n ? (t.append(String.fromCharCode(s.charCodeAt(0) + 128)), n = !1) : t.append(s);
              } else
                throw new O();
              break;
            case 1:
              n ? (t.append(String.fromCharCode(u + 128)), n = !1) : t.append(String.fromCharCode(u)), a = 0;
              break;
            case 2:
              if (u < this.C40_SHIFT2_SET_CHARS.length) {
                var s = this.C40_SHIFT2_SET_CHARS[u];
                n ? (t.append(String.fromCharCode(s.charCodeAt(0) + 128)), n = !1) : t.append(s);
              } else
                switch (u) {
                  case 27:
                    t.append("");
                    break;
                  case 30:
                    n = !0;
                    break;
                  default:
                    throw new O();
                }
              a = 0;
              break;
            case 3:
              n ? (t.append(String.fromCharCode(u + 224)), n = !1) : t.append(String.fromCharCode(u + 96)), a = 0;
              break;
            default:
              throw new O();
          }
        }
      } while (e.available() > 0);
    }, r.decodeTextSegment = function(e, t) {
      var n = !1, i = [], a = 0;
      do {
        if (e.available() === 8)
          return;
        var o = e.readBits(8);
        if (o === 254)
          return;
        this.parseTwoBytes(o, e.readBits(8), i);
        for (var f = 0; f < 3; f++) {
          var u = i[f];
          switch (a) {
            case 0:
              if (u < 3)
                a = u + 1;
              else if (u < this.TEXT_BASIC_SET_CHARS.length) {
                var s = this.TEXT_BASIC_SET_CHARS[u];
                n ? (t.append(String.fromCharCode(s.charCodeAt(0) + 128)), n = !1) : t.append(s);
              } else
                throw new O();
              break;
            case 1:
              n ? (t.append(String.fromCharCode(u + 128)), n = !1) : t.append(String.fromCharCode(u)), a = 0;
              break;
            case 2:
              if (u < this.TEXT_SHIFT2_SET_CHARS.length) {
                var s = this.TEXT_SHIFT2_SET_CHARS[u];
                n ? (t.append(String.fromCharCode(s.charCodeAt(0) + 128)), n = !1) : t.append(s);
              } else
                switch (u) {
                  case 27:
                    t.append("");
                    break;
                  case 30:
                    n = !0;
                    break;
                  default:
                    throw new O();
                }
              a = 0;
              break;
            case 3:
              if (u < this.TEXT_SHIFT3_SET_CHARS.length) {
                var s = this.TEXT_SHIFT3_SET_CHARS[u];
                n ? (t.append(String.fromCharCode(s.charCodeAt(0) + 128)), n = !1) : t.append(s), a = 0;
              } else
                throw new O();
              break;
            default:
              throw new O();
          }
        }
      } while (e.available() > 0);
    }, r.decodeAnsiX12Segment = function(e, t) {
      var n = [];
      do {
        if (e.available() === 8)
          return;
        var i = e.readBits(8);
        if (i === 254)
          return;
        this.parseTwoBytes(i, e.readBits(8), n);
        for (var a = 0; a < 3; a++) {
          var o = n[a];
          switch (o) {
            case 0:
              t.append("\r");
              break;
            case 1:
              t.append("*");
              break;
            case 2:
              t.append(">");
              break;
            case 3:
              t.append(" ");
              break;
            default:
              if (o < 14)
                t.append(String.fromCharCode(o + 44));
              else if (o < 40)
                t.append(String.fromCharCode(o + 51));
              else
                throw new O();
              break;
          }
        }
      } while (e.available() > 0);
    }, r.parseTwoBytes = function(e, t, n) {
      var i = (e << 8) + t - 1, a = Math.floor(i / 1600);
      n[0] = a, i -= a * 1600, a = Math.floor(i / 40), n[1] = a, n[2] = i - a * 40;
    }, r.decodeEdifactSegment = function(e, t) {
      do {
        if (e.available() <= 16)
          return;
        for (var n = 0; n < 4; n++) {
          var i = e.readBits(6);
          if (i === 31) {
            var a = 8 - e.getBitOffset();
            a !== 8 && e.readBits(a);
            return;
          }
          i & 32 || (i |= 64), t.append(String.fromCharCode(i));
        }
      } while (e.available() > 0);
    }, r.decodeBase256Segment = function(e, t, n) {
      var i = 1 + e.getByteOffset(), a = this.unrandomize255State(e.readBits(8), i++), o;
      if (a === 0 ? o = e.available() / 8 | 0 : a < 250 ? o = a : o = 250 * (a - 249) + this.unrandomize255State(e.readBits(8), i++), o < 0)
        throw new O();
      for (var f = new Uint8Array(o), u = 0; u < o; u++) {
        if (e.available() < 8)
          throw new O();
        f[u] = this.unrandomize255State(e.readBits(8), i++);
      }
      n.push(f);
      try {
        t.append(Ee.decode(f, F.ISO88591));
      } catch (s) {
        throw new Qe("Platform does not support required encoding: " + s.message);
      }
    }, r.unrandomize255State = function(e, t) {
      var n = 149 * t % 255 + 1, i = e - n;
      return i >= 0 ? i : i + 256;
    }, r.C40_BASIC_SET_CHARS = [
      "*",
      "*",
      "*",
      " ",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z"
    ], r.C40_SHIFT2_SET_CHARS = [
      "!",
      '"',
      "#",
      "$",
      "%",
      "&",
      "'",
      "(",
      ")",
      "*",
      "+",
      ",",
      "-",
      ".",
      "/",
      ":",
      ";",
      "<",
      "=",
      ">",
      "?",
      "@",
      "[",
      "\\",
      "]",
      "^",
      "_"
    ], r.TEXT_BASIC_SET_CHARS = [
      "*",
      "*",
      "*",
      " ",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ], r.TEXT_SHIFT2_SET_CHARS = r.C40_SHIFT2_SET_CHARS, r.TEXT_SHIFT3_SET_CHARS = [
      "`",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "{",
      "|",
      "}",
      "~",
      ""
    ], r;
  }()
), Di = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, bi = (
  /** @class */
  function() {
    function r() {
      this.rsDecoder = new lt(ge.DATA_MATRIX_FIELD_256);
    }
    return r.prototype.decode = function(e) {
      var t, n, i = new mi(e), a = i.getVersion(), o = i.readCodewords(), f = Oi.getDataBlocks(o, a), u = 0;
      try {
        for (var s = Di(f), c = s.next(); !c.done; c = s.next()) {
          var h = c.value;
          u += h.getNumDataCodewords();
        }
      } catch (A) {
        t = { error: A };
      } finally {
        try {
          c && !c.done && (n = s.return) && n.call(s);
        } finally {
          if (t) throw t.error;
        }
      }
      for (var l = new Uint8Array(u), d = f.length, v = 0; v < d; v++) {
        var x = f[v], g = x.getCodewords(), _ = x.getNumDataCodewords();
        this.correctErrors(g, _);
        for (var y = 0; y < _; y++)
          l[y * d + v] = g[y];
      }
      return Ti.decode(l);
    }, r.prototype.correctErrors = function(e, t) {
      var n = new Int32Array(e);
      try {
        this.rsDecoder.decode(n, e.length - t);
      } catch {
        throw new oe();
      }
      for (var i = 0; i < t; i++)
        e[i] = n[i];
    }, r;
  }()
), Ni = (
  /** @class */
  function() {
    function r(e) {
      this.image = e, this.rectangleDetector = new Dt(this.image);
    }
    return r.prototype.detect = function() {
      var e = this.rectangleDetector.detect(), t = this.detectSolid1(e);
      if (t = this.detectSolid2(t), t[3] = this.correctTopRight(t), !t[3])
        throw new C();
      t = this.shiftToModuleCenter(t);
      var n = t[0], i = t[1], a = t[2], o = t[3], f = this.transitionsBetween(n, o) + 1, u = this.transitionsBetween(a, o) + 1;
      (f & 1) === 1 && (f += 1), (u & 1) === 1 && (u += 1), 4 * f < 7 * u && 4 * u < 7 * f && (f = u = Math.max(f, u));
      var s = r.sampleGrid(this.image, n, i, a, o, f, u);
      return new Vt(s, [n, i, a, o]);
    }, r.shiftPoint = function(e, t, n) {
      var i = (t.getX() - e.getX()) / (n + 1), a = (t.getY() - e.getY()) / (n + 1);
      return new T(e.getX() + i, e.getY() + a);
    }, r.moveAway = function(e, t, n) {
      var i = e.getX(), a = e.getY();
      return i < t ? i -= 1 : i += 1, a < n ? a -= 1 : a += 1, new T(i, a);
    }, r.prototype.detectSolid1 = function(e) {
      var t = e[0], n = e[1], i = e[3], a = e[2], o = this.transitionsBetween(t, n), f = this.transitionsBetween(n, i), u = this.transitionsBetween(i, a), s = this.transitionsBetween(a, t), c = o, h = [a, t, n, i];
      return c > f && (c = f, h[0] = t, h[1] = n, h[2] = i, h[3] = a), c > u && (c = u, h[0] = n, h[1] = i, h[2] = a, h[3] = t), c > s && (h[0] = i, h[1] = a, h[2] = t, h[3] = n), h;
    }, r.prototype.detectSolid2 = function(e) {
      var t = e[0], n = e[1], i = e[2], a = e[3], o = this.transitionsBetween(t, a), f = r.shiftPoint(n, i, (o + 1) * 4), u = r.shiftPoint(i, n, (o + 1) * 4), s = this.transitionsBetween(f, t), c = this.transitionsBetween(u, a);
      return s < c ? (e[0] = t, e[1] = n, e[2] = i, e[3] = a) : (e[0] = n, e[1] = i, e[2] = a, e[3] = t), e;
    }, r.prototype.correctTopRight = function(e) {
      var t = e[0], n = e[1], i = e[2], a = e[3], o = this.transitionsBetween(t, a), f = this.transitionsBetween(n, a), u = r.shiftPoint(t, n, (f + 1) * 4), s = r.shiftPoint(i, n, (o + 1) * 4);
      o = this.transitionsBetween(u, a), f = this.transitionsBetween(s, a);
      var c = new T(a.getX() + (i.getX() - n.getX()) / (o + 1), a.getY() + (i.getY() - n.getY()) / (o + 1)), h = new T(a.getX() + (t.getX() - n.getX()) / (f + 1), a.getY() + (t.getY() - n.getY()) / (f + 1));
      if (!this.isValid(c))
        return this.isValid(h) ? h : null;
      if (!this.isValid(h))
        return c;
      var l = this.transitionsBetween(u, c) + this.transitionsBetween(s, c), d = this.transitionsBetween(u, h) + this.transitionsBetween(s, h);
      return l > d ? c : h;
    }, r.prototype.shiftToModuleCenter = function(e) {
      var t = e[0], n = e[1], i = e[2], a = e[3], o = this.transitionsBetween(t, a) + 1, f = this.transitionsBetween(i, a) + 1, u = r.shiftPoint(t, n, f * 4), s = r.shiftPoint(i, n, o * 4);
      o = this.transitionsBetween(u, a) + 1, f = this.transitionsBetween(s, a) + 1, (o & 1) === 1 && (o += 1), (f & 1) === 1 && (f += 1);
      var c = (t.getX() + n.getX() + i.getX() + a.getX()) / 4, h = (t.getY() + n.getY() + i.getY() + a.getY()) / 4;
      t = r.moveAway(t, c, h), n = r.moveAway(n, c, h), i = r.moveAway(i, c, h), a = r.moveAway(a, c, h);
      var l, d;
      return u = r.shiftPoint(t, n, f * 4), u = r.shiftPoint(u, a, o * 4), l = r.shiftPoint(n, t, f * 4), l = r.shiftPoint(l, i, o * 4), s = r.shiftPoint(i, a, f * 4), s = r.shiftPoint(s, n, o * 4), d = r.shiftPoint(a, i, f * 4), d = r.shiftPoint(d, t, o * 4), [u, l, s, d];
    }, r.prototype.isValid = function(e) {
      return e.getX() >= 0 && e.getX() < this.image.getWidth() && e.getY() > 0 && e.getY() < this.image.getHeight();
    }, r.sampleGrid = function(e, t, n, i, a, o, f) {
      var u = Gt.getInstance();
      return u.sampleGrid(e, o, f, 0.5, 0.5, o - 0.5, 0.5, o - 0.5, f - 0.5, 0.5, f - 0.5, t.getX(), t.getY(), a.getX(), a.getY(), i.getX(), i.getY(), n.getX(), n.getY());
    }, r.prototype.transitionsBetween = function(e, t) {
      var n = Math.trunc(e.getX()), i = Math.trunc(e.getY()), a = Math.trunc(t.getX()), o = Math.trunc(t.getY()), f = Math.abs(o - i) > Math.abs(a - n);
      if (f) {
        var u = n;
        n = i, i = u, u = a, a = o, o = u;
      }
      for (var s = Math.abs(a - n), c = Math.abs(o - i), h = -s / 2, l = i < o ? 1 : -1, d = n < a ? 1 : -1, v = 0, x = this.image.get(f ? i : n, f ? n : i), g = n, _ = i; g !== a; g += d) {
        var y = this.image.get(f ? _ : g, f ? g : _);
        if (y !== x && (v++, x = y), h += c, h > 0) {
          if (_ === o)
            break;
          _ += l, h -= s;
        }
      }
      return v;
    }, r;
  }()
), Rt = (
  /** @class */
  function() {
    function r() {
      this.decoder = new bi();
    }
    return r.prototype.decode = function(e, t) {
      t === void 0 && (t = null);
      var n, i;
      if (t != null && t.has($.PURE_BARCODE)) {
        var a = r.extractPureBits(e.getBlackMatrix());
        n = this.decoder.decode(a), i = r.NO_POINTS;
      } else {
        var o = new Ni(e.getBlackMatrix()).detect();
        n = this.decoder.decode(o.getBits()), i = o.getPoints();
      }
      var f = n.getRawBytes(), u = new le(n.getText(), f, 8 * f.length, i, b.DATA_MATRIX, Y.currentTimeMillis()), s = n.getByteSegments();
      s != null && u.putMetadata(ce.BYTE_SEGMENTS, s);
      var c = n.getECLevel();
      return c != null && u.putMetadata(ce.ERROR_CORRECTION_LEVEL, c), u;
    }, r.prototype.reset = function() {
    }, r.extractPureBits = function(e) {
      var t = e.getTopLeftOnBit(), n = e.getBottomRightOnBit();
      if (t == null || n == null)
        throw new C();
      var i = this.moduleSize(t, e), a = t[1], o = n[1], f = t[0], u = n[0], s = (u - f + 1) / i, c = (o - a + 1) / i;
      if (s <= 0 || c <= 0)
        throw new C();
      var h = i / 2;
      a += h, f += h;
      for (var l = new Te(s, c), d = 0; d < c; d++)
        for (var v = a + d * i, x = 0; x < s; x++)
          e.get(f + x * i, v) && l.set(x, d);
      return l;
    }, r.moduleSize = function(e, t) {
      for (var n = t.getWidth(), i = e[0], a = e[1]; i < n && t.get(i, a); )
        i++;
      if (i === n)
        throw new C();
      var o = i - e[0];
      if (o === 0)
        throw new C();
      return o;
    }, r.NO_POINTS = [], r;
  }()
), Ri = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
(function(r) {
  Ri(e, r);
  function e(t) {
    return t === void 0 && (t = 500), r.call(this, new Rt(), t) || this;
  }
  return e;
})(We);
var Ge;
(function(r) {
  r[r.L = 0] = "L", r[r.M = 1] = "M", r[r.Q = 2] = "Q", r[r.H = 3] = "H";
})(Ge || (Ge = {}));
var Pi = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.value = e, this.stringValue = t, this.bits = n, r.FOR_BITS.set(n, this), r.FOR_VALUE.set(e, this);
    }
    return r.prototype.getValue = function() {
      return this.value;
    }, r.prototype.getBits = function() {
      return this.bits;
    }, r.fromString = function(e) {
      switch (e) {
        case "L":
          return r.L;
        case "M":
          return r.M;
        case "Q":
          return r.Q;
        case "H":
          return r.H;
        default:
          throw new Ie(e + "not available");
      }
    }, r.prototype.toString = function() {
      return this.stringValue;
    }, r.prototype.equals = function(e) {
      if (!(e instanceof r))
        return !1;
      var t = e;
      return this.value === t.value;
    }, r.forBits = function(e) {
      if (e < 0 || e >= r.FOR_BITS.size)
        throw new N();
      return r.FOR_BITS.get(e);
    }, r.FOR_BITS = /* @__PURE__ */ new Map(), r.FOR_VALUE = /* @__PURE__ */ new Map(), r.L = new r(Ge.L, "L", 1), r.M = new r(Ge.M, "M", 0), r.Q = new r(Ge.Q, "Q", 3), r.H = new r(Ge.H, "H", 2), r;
  }()
), Mi = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Mr = (
  /** @class */
  function() {
    function r(e) {
      this.errorCorrectionLevel = Pi.forBits(e >> 3 & 3), this.dataMask = /*(byte) */
      e & 7;
    }
    return r.numBitsDiffering = function(e, t) {
      return B.bitCount(e ^ t);
    }, r.decodeFormatInformation = function(e, t) {
      var n = r.doDecodeFormatInformation(e, t);
      return n !== null ? n : r.doDecodeFormatInformation(e ^ r.FORMAT_INFO_MASK_QR, t ^ r.FORMAT_INFO_MASK_QR);
    }, r.doDecodeFormatInformation = function(e, t) {
      var n, i, a = Number.MAX_SAFE_INTEGER, o = 0;
      try {
        for (var f = Mi(r.FORMAT_INFO_DECODE_LOOKUP), u = f.next(); !u.done; u = f.next()) {
          var s = u.value, c = s[0];
          if (c === e || c === t)
            return new r(s[1]);
          var h = r.numBitsDiffering(e, c);
          h < a && (o = s[1], a = h), e !== t && (h = r.numBitsDiffering(t, c), h < a && (o = s[1], a = h));
        }
      } catch (l) {
        n = { error: l };
      } finally {
        try {
          u && !u.done && (i = f.return) && i.call(f);
        } finally {
          if (n) throw n.error;
        }
      }
      return a <= 3 ? new r(o) : null;
    }, r.prototype.getErrorCorrectionLevel = function() {
      return this.errorCorrectionLevel;
    }, r.prototype.getDataMask = function() {
      return this.dataMask;
    }, r.prototype.hashCode = function() {
      return this.errorCorrectionLevel.getBits() << 3 | this.dataMask;
    }, r.prototype.equals = function(e) {
      if (!(e instanceof r))
        return !1;
      var t = e;
      return this.errorCorrectionLevel === t.errorCorrectionLevel && this.dataMask === t.dataMask;
    }, r.FORMAT_INFO_MASK_QR = 21522, r.FORMAT_INFO_DECODE_LOOKUP = [
      Int32Array.from([21522, 0]),
      Int32Array.from([20773, 1]),
      Int32Array.from([24188, 2]),
      Int32Array.from([23371, 3]),
      Int32Array.from([17913, 4]),
      Int32Array.from([16590, 5]),
      Int32Array.from([20375, 6]),
      Int32Array.from([19104, 7]),
      Int32Array.from([30660, 8]),
      Int32Array.from([29427, 9]),
      Int32Array.from([32170, 10]),
      Int32Array.from([30877, 11]),
      Int32Array.from([26159, 12]),
      Int32Array.from([25368, 13]),
      Int32Array.from([27713, 14]),
      Int32Array.from([26998, 15]),
      Int32Array.from([5769, 16]),
      Int32Array.from([5054, 17]),
      Int32Array.from([7399, 18]),
      Int32Array.from([6608, 19]),
      Int32Array.from([1890, 20]),
      Int32Array.from([597, 21]),
      Int32Array.from([3340, 22]),
      Int32Array.from([2107, 23]),
      Int32Array.from([13663, 24]),
      Int32Array.from([12392, 25]),
      Int32Array.from([16177, 26]),
      Int32Array.from([14854, 27]),
      Int32Array.from([9396, 28]),
      Int32Array.from([8579, 29]),
      Int32Array.from([11994, 30]),
      Int32Array.from([11245, 31])
    ], r;
  }()
), Bi = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, w = (
  /** @class */
  function() {
    function r(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      this.ecCodewordsPerBlock = e, this.ecBlocks = t;
    }
    return r.prototype.getECCodewordsPerBlock = function() {
      return this.ecCodewordsPerBlock;
    }, r.prototype.getNumBlocks = function() {
      var e, t, n = 0, i = this.ecBlocks;
      try {
        for (var a = Bi(i), o = a.next(); !o.done; o = a.next()) {
          var f = o.value;
          n += f.getCount();
        }
      } catch (u) {
        e = { error: u };
      } finally {
        try {
          o && !o.done && (t = a.return) && t.call(a);
        } finally {
          if (e) throw e.error;
        }
      }
      return n;
    }, r.prototype.getTotalECCodewords = function() {
      return this.ecCodewordsPerBlock * this.getNumBlocks();
    }, r.prototype.getECBlocks = function() {
      return this.ecBlocks;
    }, r;
  }()
), p = (
  /** @class */
  function() {
    function r(e, t) {
      this.count = e, this.dataCodewords = t;
    }
    return r.prototype.getCount = function() {
      return this.count;
    }, r.prototype.getDataCodewords = function() {
      return this.dataCodewords;
    }, r;
  }()
), Fi = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Ue = (
  /** @class */
  function() {
    function r(e, t) {
      for (var n, i, a = [], o = 2; o < arguments.length; o++)
        a[o - 2] = arguments[o];
      this.versionNumber = e, this.alignmentPatternCenters = t, this.ecBlocks = a;
      var f = 0, u = a[0].getECCodewordsPerBlock(), s = a[0].getECBlocks();
      try {
        for (var c = Fi(s), h = c.next(); !h.done; h = c.next()) {
          var l = h.value;
          f += l.getCount() * (l.getDataCodewords() + u);
        }
      } catch (d) {
        n = { error: d };
      } finally {
        try {
          h && !h.done && (i = c.return) && i.call(c);
        } finally {
          if (n) throw n.error;
        }
      }
      this.totalCodewords = f;
    }
    return r.prototype.getVersionNumber = function() {
      return this.versionNumber;
    }, r.prototype.getAlignmentPatternCenters = function() {
      return this.alignmentPatternCenters;
    }, r.prototype.getTotalCodewords = function() {
      return this.totalCodewords;
    }, r.prototype.getDimensionForVersion = function() {
      return 17 + 4 * this.versionNumber;
    }, r.prototype.getECBlocksForLevel = function(e) {
      return this.ecBlocks[e.getValue()];
    }, r.getProvisionalVersionForDimension = function(e) {
      if (e % 4 !== 1)
        throw new O();
      try {
        return this.getVersionForNumber((e - 17) / 4);
      } catch {
        throw new O();
      }
    }, r.getVersionForNumber = function(e) {
      if (e < 1 || e > 40)
        throw new N();
      return r.VERSIONS[e - 1];
    }, r.decodeVersionInformation = function(e) {
      for (var t = Number.MAX_SAFE_INTEGER, n = 0, i = 0; i < r.VERSION_DECODE_INFO.length; i++) {
        var a = r.VERSION_DECODE_INFO[i];
        if (a === e)
          return r.getVersionForNumber(i + 7);
        var o = Mr.numBitsDiffering(e, a);
        o < t && (n = i + 7, t = o);
      }
      return t <= 3 ? r.getVersionForNumber(n) : null;
    }, r.prototype.buildFunctionPattern = function() {
      var e = this.getDimensionForVersion(), t = new Te(e);
      t.setRegion(0, 0, 9, 9), t.setRegion(e - 8, 0, 8, 9), t.setRegion(0, e - 8, 9, 8);
      for (var n = this.alignmentPatternCenters.length, i = 0; i < n; i++)
        for (var a = this.alignmentPatternCenters[i] - 2, o = 0; o < n; o++)
          i === 0 && (o === 0 || o === n - 1) || i === n - 1 && o === 0 || t.setRegion(this.alignmentPatternCenters[o] - 2, a, 5, 5);
      return t.setRegion(6, 9, 1, e - 17), t.setRegion(9, 6, e - 17, 1), this.versionNumber > 6 && (t.setRegion(e - 11, 0, 3, 6), t.setRegion(0, e - 11, 6, 3)), t;
    }, r.prototype.toString = function() {
      return "" + this.versionNumber;
    }, r.VERSION_DECODE_INFO = Int32Array.from([
      31892,
      34236,
      39577,
      42195,
      48118,
      51042,
      55367,
      58893,
      63784,
      68472,
      70749,
      76311,
      79154,
      84390,
      87683,
      92361,
      96236,
      102084,
      102881,
      110507,
      110734,
      117786,
      119615,
      126325,
      127568,
      133589,
      136944,
      141498,
      145311,
      150283,
      152622,
      158308,
      161089,
      167017
    ]), r.VERSIONS = [
      new r(1, new Int32Array(0), new w(7, new p(1, 19)), new w(10, new p(1, 16)), new w(13, new p(1, 13)), new w(17, new p(1, 9))),
      new r(2, Int32Array.from([6, 18]), new w(10, new p(1, 34)), new w(16, new p(1, 28)), new w(22, new p(1, 22)), new w(28, new p(1, 16))),
      new r(3, Int32Array.from([6, 22]), new w(15, new p(1, 55)), new w(26, new p(1, 44)), new w(18, new p(2, 17)), new w(22, new p(2, 13))),
      new r(4, Int32Array.from([6, 26]), new w(20, new p(1, 80)), new w(18, new p(2, 32)), new w(26, new p(2, 24)), new w(16, new p(4, 9))),
      new r(5, Int32Array.from([6, 30]), new w(26, new p(1, 108)), new w(24, new p(2, 43)), new w(18, new p(2, 15), new p(2, 16)), new w(22, new p(2, 11), new p(2, 12))),
      new r(6, Int32Array.from([6, 34]), new w(18, new p(2, 68)), new w(16, new p(4, 27)), new w(24, new p(4, 19)), new w(28, new p(4, 15))),
      new r(7, Int32Array.from([6, 22, 38]), new w(20, new p(2, 78)), new w(18, new p(4, 31)), new w(18, new p(2, 14), new p(4, 15)), new w(26, new p(4, 13), new p(1, 14))),
      new r(8, Int32Array.from([6, 24, 42]), new w(24, new p(2, 97)), new w(22, new p(2, 38), new p(2, 39)), new w(22, new p(4, 18), new p(2, 19)), new w(26, new p(4, 14), new p(2, 15))),
      new r(9, Int32Array.from([6, 26, 46]), new w(30, new p(2, 116)), new w(22, new p(3, 36), new p(2, 37)), new w(20, new p(4, 16), new p(4, 17)), new w(24, new p(4, 12), new p(4, 13))),
      new r(10, Int32Array.from([6, 28, 50]), new w(18, new p(2, 68), new p(2, 69)), new w(26, new p(4, 43), new p(1, 44)), new w(24, new p(6, 19), new p(2, 20)), new w(28, new p(6, 15), new p(2, 16))),
      new r(11, Int32Array.from([6, 30, 54]), new w(20, new p(4, 81)), new w(30, new p(1, 50), new p(4, 51)), new w(28, new p(4, 22), new p(4, 23)), new w(24, new p(3, 12), new p(8, 13))),
      new r(12, Int32Array.from([6, 32, 58]), new w(24, new p(2, 92), new p(2, 93)), new w(22, new p(6, 36), new p(2, 37)), new w(26, new p(4, 20), new p(6, 21)), new w(28, new p(7, 14), new p(4, 15))),
      new r(13, Int32Array.from([6, 34, 62]), new w(26, new p(4, 107)), new w(22, new p(8, 37), new p(1, 38)), new w(24, new p(8, 20), new p(4, 21)), new w(22, new p(12, 11), new p(4, 12))),
      new r(14, Int32Array.from([6, 26, 46, 66]), new w(30, new p(3, 115), new p(1, 116)), new w(24, new p(4, 40), new p(5, 41)), new w(20, new p(11, 16), new p(5, 17)), new w(24, new p(11, 12), new p(5, 13))),
      new r(15, Int32Array.from([6, 26, 48, 70]), new w(22, new p(5, 87), new p(1, 88)), new w(24, new p(5, 41), new p(5, 42)), new w(30, new p(5, 24), new p(7, 25)), new w(24, new p(11, 12), new p(7, 13))),
      new r(16, Int32Array.from([6, 26, 50, 74]), new w(24, new p(5, 98), new p(1, 99)), new w(28, new p(7, 45), new p(3, 46)), new w(24, new p(15, 19), new p(2, 20)), new w(30, new p(3, 15), new p(13, 16))),
      new r(17, Int32Array.from([6, 30, 54, 78]), new w(28, new p(1, 107), new p(5, 108)), new w(28, new p(10, 46), new p(1, 47)), new w(28, new p(1, 22), new p(15, 23)), new w(28, new p(2, 14), new p(17, 15))),
      new r(18, Int32Array.from([6, 30, 56, 82]), new w(30, new p(5, 120), new p(1, 121)), new w(26, new p(9, 43), new p(4, 44)), new w(28, new p(17, 22), new p(1, 23)), new w(28, new p(2, 14), new p(19, 15))),
      new r(19, Int32Array.from([6, 30, 58, 86]), new w(28, new p(3, 113), new p(4, 114)), new w(26, new p(3, 44), new p(11, 45)), new w(26, new p(17, 21), new p(4, 22)), new w(26, new p(9, 13), new p(16, 14))),
      new r(20, Int32Array.from([6, 34, 62, 90]), new w(28, new p(3, 107), new p(5, 108)), new w(26, new p(3, 41), new p(13, 42)), new w(30, new p(15, 24), new p(5, 25)), new w(28, new p(15, 15), new p(10, 16))),
      new r(21, Int32Array.from([6, 28, 50, 72, 94]), new w(28, new p(4, 116), new p(4, 117)), new w(26, new p(17, 42)), new w(28, new p(17, 22), new p(6, 23)), new w(30, new p(19, 16), new p(6, 17))),
      new r(22, Int32Array.from([6, 26, 50, 74, 98]), new w(28, new p(2, 111), new p(7, 112)), new w(28, new p(17, 46)), new w(30, new p(7, 24), new p(16, 25)), new w(24, new p(34, 13))),
      new r(23, Int32Array.from([6, 30, 54, 78, 102]), new w(30, new p(4, 121), new p(5, 122)), new w(28, new p(4, 47), new p(14, 48)), new w(30, new p(11, 24), new p(14, 25)), new w(30, new p(16, 15), new p(14, 16))),
      new r(24, Int32Array.from([6, 28, 54, 80, 106]), new w(30, new p(6, 117), new p(4, 118)), new w(28, new p(6, 45), new p(14, 46)), new w(30, new p(11, 24), new p(16, 25)), new w(30, new p(30, 16), new p(2, 17))),
      new r(25, Int32Array.from([6, 32, 58, 84, 110]), new w(26, new p(8, 106), new p(4, 107)), new w(28, new p(8, 47), new p(13, 48)), new w(30, new p(7, 24), new p(22, 25)), new w(30, new p(22, 15), new p(13, 16))),
      new r(26, Int32Array.from([6, 30, 58, 86, 114]), new w(28, new p(10, 114), new p(2, 115)), new w(28, new p(19, 46), new p(4, 47)), new w(28, new p(28, 22), new p(6, 23)), new w(30, new p(33, 16), new p(4, 17))),
      new r(27, Int32Array.from([6, 34, 62, 90, 118]), new w(30, new p(8, 122), new p(4, 123)), new w(28, new p(22, 45), new p(3, 46)), new w(30, new p(8, 23), new p(26, 24)), new w(30, new p(12, 15), new p(28, 16))),
      new r(28, Int32Array.from([6, 26, 50, 74, 98, 122]), new w(30, new p(3, 117), new p(10, 118)), new w(28, new p(3, 45), new p(23, 46)), new w(30, new p(4, 24), new p(31, 25)), new w(30, new p(11, 15), new p(31, 16))),
      new r(29, Int32Array.from([6, 30, 54, 78, 102, 126]), new w(30, new p(7, 116), new p(7, 117)), new w(28, new p(21, 45), new p(7, 46)), new w(30, new p(1, 23), new p(37, 24)), new w(30, new p(19, 15), new p(26, 16))),
      new r(30, Int32Array.from([6, 26, 52, 78, 104, 130]), new w(30, new p(5, 115), new p(10, 116)), new w(28, new p(19, 47), new p(10, 48)), new w(30, new p(15, 24), new p(25, 25)), new w(30, new p(23, 15), new p(25, 16))),
      new r(31, Int32Array.from([6, 30, 56, 82, 108, 134]), new w(30, new p(13, 115), new p(3, 116)), new w(28, new p(2, 46), new p(29, 47)), new w(30, new p(42, 24), new p(1, 25)), new w(30, new p(23, 15), new p(28, 16))),
      new r(32, Int32Array.from([6, 34, 60, 86, 112, 138]), new w(30, new p(17, 115)), new w(28, new p(10, 46), new p(23, 47)), new w(30, new p(10, 24), new p(35, 25)), new w(30, new p(19, 15), new p(35, 16))),
      new r(33, Int32Array.from([6, 30, 58, 86, 114, 142]), new w(30, new p(17, 115), new p(1, 116)), new w(28, new p(14, 46), new p(21, 47)), new w(30, new p(29, 24), new p(19, 25)), new w(30, new p(11, 15), new p(46, 16))),
      new r(34, Int32Array.from([6, 34, 62, 90, 118, 146]), new w(30, new p(13, 115), new p(6, 116)), new w(28, new p(14, 46), new p(23, 47)), new w(30, new p(44, 24), new p(7, 25)), new w(30, new p(59, 16), new p(1, 17))),
      new r(35, Int32Array.from([6, 30, 54, 78, 102, 126, 150]), new w(30, new p(12, 121), new p(7, 122)), new w(28, new p(12, 47), new p(26, 48)), new w(30, new p(39, 24), new p(14, 25)), new w(30, new p(22, 15), new p(41, 16))),
      new r(36, Int32Array.from([6, 24, 50, 76, 102, 128, 154]), new w(30, new p(6, 121), new p(14, 122)), new w(28, new p(6, 47), new p(34, 48)), new w(30, new p(46, 24), new p(10, 25)), new w(30, new p(2, 15), new p(64, 16))),
      new r(37, Int32Array.from([6, 28, 54, 80, 106, 132, 158]), new w(30, new p(17, 122), new p(4, 123)), new w(28, new p(29, 46), new p(14, 47)), new w(30, new p(49, 24), new p(10, 25)), new w(30, new p(24, 15), new p(46, 16))),
      new r(38, Int32Array.from([6, 32, 58, 84, 110, 136, 162]), new w(30, new p(4, 122), new p(18, 123)), new w(28, new p(13, 46), new p(32, 47)), new w(30, new p(48, 24), new p(14, 25)), new w(30, new p(42, 15), new p(32, 16))),
      new r(39, Int32Array.from([6, 26, 54, 82, 110, 138, 166]), new w(30, new p(20, 117), new p(4, 118)), new w(28, new p(40, 47), new p(7, 48)), new w(30, new p(43, 24), new p(22, 25)), new w(30, new p(10, 15), new p(67, 16))),
      new r(40, Int32Array.from([6, 30, 58, 86, 114, 142, 170]), new w(30, new p(19, 118), new p(6, 119)), new w(28, new p(18, 47), new p(31, 48)), new w(30, new p(34, 24), new p(34, 25)), new w(30, new p(20, 15), new p(61, 16)))
    ], r;
  }()
), ie;
(function(r) {
  r[r.DATA_MASK_000 = 0] = "DATA_MASK_000", r[r.DATA_MASK_001 = 1] = "DATA_MASK_001", r[r.DATA_MASK_010 = 2] = "DATA_MASK_010", r[r.DATA_MASK_011 = 3] = "DATA_MASK_011", r[r.DATA_MASK_100 = 4] = "DATA_MASK_100", r[r.DATA_MASK_101 = 5] = "DATA_MASK_101", r[r.DATA_MASK_110 = 6] = "DATA_MASK_110", r[r.DATA_MASK_111 = 7] = "DATA_MASK_111";
})(ie || (ie = {}));
var cr = (
  /** @class */
  function() {
    function r(e, t) {
      this.value = e, this.isMasked = t;
    }
    return r.prototype.unmaskBitMatrix = function(e, t) {
      for (var n = 0; n < t; n++)
        for (var i = 0; i < t; i++)
          this.isMasked(n, i) && e.flip(i, n);
    }, r.values = /* @__PURE__ */ new Map([
      /**
       * 000: mask bits for which (x + y) mod 2 == 0
       */
      [ie.DATA_MASK_000, new r(ie.DATA_MASK_000, function(e, t) {
        return (e + t & 1) === 0;
      })],
      /**
       * 001: mask bits for which x mod 2 == 0
       */
      [ie.DATA_MASK_001, new r(ie.DATA_MASK_001, function(e, t) {
        return (e & 1) === 0;
      })],
      /**
       * 010: mask bits for which y mod 3 == 0
       */
      [ie.DATA_MASK_010, new r(ie.DATA_MASK_010, function(e, t) {
        return t % 3 === 0;
      })],
      /**
       * 011: mask bits for which (x + y) mod 3 == 0
       */
      [ie.DATA_MASK_011, new r(ie.DATA_MASK_011, function(e, t) {
        return (e + t) % 3 === 0;
      })],
      /**
       * 100: mask bits for which (x/2 + y/3) mod 2 == 0
       */
      [ie.DATA_MASK_100, new r(ie.DATA_MASK_100, function(e, t) {
        return (Math.floor(e / 2) + Math.floor(t / 3) & 1) === 0;
      })],
      /**
       * 101: mask bits for which xy mod 2 + xy mod 3 == 0
       * equivalently, such that xy mod 6 == 0
       */
      [ie.DATA_MASK_101, new r(ie.DATA_MASK_101, function(e, t) {
        return e * t % 6 === 0;
      })],
      /**
       * 110: mask bits for which (xy mod 2 + xy mod 3) mod 2 == 0
       * equivalently, such that xy mod 6 < 3
       */
      [ie.DATA_MASK_110, new r(ie.DATA_MASK_110, function(e, t) {
        return e * t % 6 < 3;
      })],
      /**
       * 111: mask bits for which ((x+y)mod 2 + xy mod 3) mod 2 == 0
       * equivalently, such that (x + y + xy mod 3) mod 2 == 0
       */
      [ie.DATA_MASK_111, new r(ie.DATA_MASK_111, function(e, t) {
        return (e + t + e * t % 3 & 1) === 0;
      })]
    ]), r;
  }()
), Li = (
  /** @class */
  function() {
    function r(e) {
      var t = e.getHeight();
      if (t < 21 || (t & 3) !== 1)
        throw new O();
      this.bitMatrix = e;
    }
    return r.prototype.readFormatInformation = function() {
      if (this.parsedFormatInfo !== null && this.parsedFormatInfo !== void 0)
        return this.parsedFormatInfo;
      for (var e = 0, t = 0; t < 6; t++)
        e = this.copyBit(t, 8, e);
      e = this.copyBit(7, 8, e), e = this.copyBit(8, 8, e), e = this.copyBit(8, 7, e);
      for (var n = 5; n >= 0; n--)
        e = this.copyBit(8, n, e);
      for (var i = this.bitMatrix.getHeight(), a = 0, o = i - 7, n = i - 1; n >= o; n--)
        a = this.copyBit(8, n, a);
      for (var t = i - 8; t < i; t++)
        a = this.copyBit(t, 8, a);
      if (this.parsedFormatInfo = Mr.decodeFormatInformation(e, a), this.parsedFormatInfo !== null)
        return this.parsedFormatInfo;
      throw new O();
    }, r.prototype.readVersion = function() {
      if (this.parsedVersion !== null && this.parsedVersion !== void 0)
        return this.parsedVersion;
      var e = this.bitMatrix.getHeight(), t = Math.floor((e - 17) / 4);
      if (t <= 6)
        return Ue.getVersionForNumber(t);
      for (var n = 0, i = e - 11, a = 5; a >= 0; a--)
        for (var o = e - 9; o >= i; o--)
          n = this.copyBit(o, a, n);
      var f = Ue.decodeVersionInformation(n);
      if (f !== null && f.getDimensionForVersion() === e)
        return this.parsedVersion = f, f;
      n = 0;
      for (var o = 5; o >= 0; o--)
        for (var a = e - 9; a >= i; a--)
          n = this.copyBit(o, a, n);
      if (f = Ue.decodeVersionInformation(n), f !== null && f.getDimensionForVersion() === e)
        return this.parsedVersion = f, f;
      throw new O();
    }, r.prototype.copyBit = function(e, t, n) {
      var i = this.isMirror ? this.bitMatrix.get(t, e) : this.bitMatrix.get(e, t);
      return i ? n << 1 | 1 : n << 1;
    }, r.prototype.readCodewords = function() {
      var e = this.readFormatInformation(), t = this.readVersion(), n = cr.values.get(e.getDataMask()), i = this.bitMatrix.getHeight();
      n.unmaskBitMatrix(this.bitMatrix, i);
      for (var a = t.buildFunctionPattern(), o = !0, f = new Uint8Array(t.getTotalCodewords()), u = 0, s = 0, c = 0, h = i - 1; h > 0; h -= 2) {
        h === 6 && h--;
        for (var l = 0; l < i; l++)
          for (var d = o ? i - 1 - l : l, v = 0; v < 2; v++)
            a.get(h - v, d) || (c++, s <<= 1, this.bitMatrix.get(h - v, d) && (s |= 1), c === 8 && (f[u++] = /*(byte) */
            s, c = 0, s = 0));
        o = !o;
      }
      if (u !== t.getTotalCodewords())
        throw new O();
      return f;
    }, r.prototype.remask = function() {
      if (this.parsedFormatInfo !== null) {
        var e = cr.values.get(this.parsedFormatInfo.getDataMask()), t = this.bitMatrix.getHeight();
        e.unmaskBitMatrix(this.bitMatrix, t);
      }
    }, r.prototype.setMirror = function(e) {
      this.parsedVersion = null, this.parsedFormatInfo = null, this.isMirror = e;
    }, r.prototype.mirror = function() {
      for (var e = this.bitMatrix, t = 0, n = e.getWidth(); t < n; t++)
        for (var i = t + 1, a = e.getHeight(); i < a; i++)
          e.get(t, i) !== e.get(i, t) && (e.flip(i, t), e.flip(t, i));
    }, r;
  }()
), hr = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, ki = (
  /** @class */
  function() {
    function r(e, t) {
      this.numDataCodewords = e, this.codewords = t;
    }
    return r.getDataBlocks = function(e, t, n) {
      var i, a, o, f;
      if (e.length !== t.getTotalCodewords())
        throw new N();
      var u = t.getECBlocksForLevel(n), s = 0, c = u.getECBlocks();
      try {
        for (var h = hr(c), l = h.next(); !l.done; l = h.next()) {
          var d = l.value;
          s += d.getCount();
        }
      } catch (K) {
        i = { error: K };
      } finally {
        try {
          l && !l.done && (a = h.return) && a.call(h);
        } finally {
          if (i) throw i.error;
        }
      }
      var v = new Array(s), x = 0;
      try {
        for (var g = hr(c), _ = g.next(); !_.done; _ = g.next())
          for (var d = _.value, y = 0; y < d.getCount(); y++) {
            var A = d.getDataCodewords(), E = u.getECCodewordsPerBlock() + A;
            v[x++] = new r(A, new Uint8Array(E));
          }
      } catch (K) {
        o = { error: K };
      } finally {
        try {
          _ && !_.done && (f = g.return) && f.call(g);
        } finally {
          if (o) throw o.error;
        }
      }
      for (var I = v[0].codewords.length, S = v.length - 1; S >= 0; ) {
        var m = v[S].codewords.length;
        if (m === I)
          break;
        S--;
      }
      S++;
      for (var D = I - u.getECCodewordsPerBlock(), P = 0, y = 0; y < D; y++)
        for (var R = 0; R < x; R++)
          v[R].codewords[y] = e[P++];
      for (var R = S; R < x; R++)
        v[R].codewords[D] = e[P++];
      for (var q = v[0].codewords.length, y = D; y < q; y++)
        for (var R = 0; R < x; R++) {
          var L = R < S ? y : y + 1;
          v[R].codewords[L] = e[P++];
        }
      return v;
    }, r.prototype.getNumDataCodewords = function() {
      return this.numDataCodewords;
    }, r.prototype.getCodewords = function() {
      return this.codewords;
    }, r;
  }()
), we;
(function(r) {
  r[r.TERMINATOR = 0] = "TERMINATOR", r[r.NUMERIC = 1] = "NUMERIC", r[r.ALPHANUMERIC = 2] = "ALPHANUMERIC", r[r.STRUCTURED_APPEND = 3] = "STRUCTURED_APPEND", r[r.BYTE = 4] = "BYTE", r[r.ECI = 5] = "ECI", r[r.KANJI = 6] = "KANJI", r[r.FNC1_FIRST_POSITION = 7] = "FNC1_FIRST_POSITION", r[r.FNC1_SECOND_POSITION = 8] = "FNC1_SECOND_POSITION", r[r.HANZI = 9] = "HANZI";
})(we || (we = {}));
var Z = (
  /** @class */
  function() {
    function r(e, t, n, i) {
      this.value = e, this.stringValue = t, this.characterCountBitsForVersions = n, this.bits = i, r.FOR_BITS.set(i, this), r.FOR_VALUE.set(e, this);
    }
    return r.forBits = function(e) {
      var t = r.FOR_BITS.get(e);
      if (t === void 0)
        throw new N();
      return t;
    }, r.prototype.getCharacterCountBits = function(e) {
      var t = e.getVersionNumber(), n;
      return t <= 9 ? n = 0 : t <= 26 ? n = 1 : n = 2, this.characterCountBitsForVersions[n];
    }, r.prototype.getValue = function() {
      return this.value;
    }, r.prototype.getBits = function() {
      return this.bits;
    }, r.prototype.equals = function(e) {
      if (!(e instanceof r))
        return !1;
      var t = e;
      return this.value === t.value;
    }, r.prototype.toString = function() {
      return this.stringValue;
    }, r.FOR_BITS = /* @__PURE__ */ new Map(), r.FOR_VALUE = /* @__PURE__ */ new Map(), r.TERMINATOR = new r(we.TERMINATOR, "TERMINATOR", Int32Array.from([0, 0, 0]), 0), r.NUMERIC = new r(we.NUMERIC, "NUMERIC", Int32Array.from([10, 12, 14]), 1), r.ALPHANUMERIC = new r(we.ALPHANUMERIC, "ALPHANUMERIC", Int32Array.from([9, 11, 13]), 2), r.STRUCTURED_APPEND = new r(we.STRUCTURED_APPEND, "STRUCTURED_APPEND", Int32Array.from([0, 0, 0]), 3), r.BYTE = new r(we.BYTE, "BYTE", Int32Array.from([8, 16, 16]), 4), r.ECI = new r(we.ECI, "ECI", Int32Array.from([0, 0, 0]), 7), r.KANJI = new r(we.KANJI, "KANJI", Int32Array.from([8, 10, 12]), 8), r.FNC1_FIRST_POSITION = new r(we.FNC1_FIRST_POSITION, "FNC1_FIRST_POSITION", Int32Array.from([0, 0, 0]), 5), r.FNC1_SECOND_POSITION = new r(we.FNC1_SECOND_POSITION, "FNC1_SECOND_POSITION", Int32Array.from([0, 0, 0]), 9), r.HANZI = new r(we.HANZI, "HANZI", Int32Array.from([8, 10, 12]), 13), r;
  }()
), Ui = (
  /** @class */
  function() {
    function r() {
    }
    return r.decode = function(e, t, n, i) {
      var a = new Pr(e), o = new M(), f = new Array(), u = -1, s = -1;
      try {
        var c = null, h = !1, l = void 0;
        do {
          if (a.available() < 4)
            l = Z.TERMINATOR;
          else {
            var d = a.readBits(4);
            l = Z.forBits(d);
          }
          switch (l) {
            case Z.TERMINATOR:
              break;
            case Z.FNC1_FIRST_POSITION:
            case Z.FNC1_SECOND_POSITION:
              h = !0;
              break;
            case Z.STRUCTURED_APPEND:
              if (a.available() < 16)
                throw new O();
              u = a.readBits(8), s = a.readBits(8);
              break;
            case Z.ECI:
              var v = r.parseECIValue(a);
              if (c = te.getCharacterSetECIByValue(v), c === null)
                throw new O();
              break;
            case Z.HANZI:
              var x = a.readBits(4), g = a.readBits(l.getCharacterCountBits(t));
              x === r.GB2312_SUBSET && r.decodeHanziSegment(a, o, g);
              break;
            default:
              var _ = a.readBits(l.getCharacterCountBits(t));
              switch (l) {
                case Z.NUMERIC:
                  r.decodeNumericSegment(a, o, _);
                  break;
                case Z.ALPHANUMERIC:
                  r.decodeAlphanumericSegment(a, o, _, h);
                  break;
                case Z.BYTE:
                  r.decodeByteSegment(a, o, _, c, f, i);
                  break;
                case Z.KANJI:
                  r.decodeKanjiSegment(a, o, _);
                  break;
                default:
                  throw new O();
              }
              break;
          }
        } while (l !== Z.TERMINATOR);
      } catch {
        throw new O();
      }
      return new ht(e, o.toString(), f.length === 0 ? null : f, n === null ? null : n.toString(), u, s);
    }, r.decodeHanziSegment = function(e, t, n) {
      if (n * 13 > e.available())
        throw new O();
      for (var i = new Uint8Array(2 * n), a = 0; n > 0; ) {
        var o = e.readBits(13), f = o / 96 << 8 & 4294967295 | o % 96;
        f < 959 ? f += 41377 : f += 42657, i[a] = /*(byte) */
        f >> 8 & 255, i[a + 1] = /*(byte) */
        f & 255, a += 2, n--;
      }
      try {
        t.append(Ee.decode(i, F.GB2312));
      } catch (u) {
        throw new O(u);
      }
    }, r.decodeKanjiSegment = function(e, t, n) {
      if (n * 13 > e.available())
        throw new O();
      for (var i = new Uint8Array(2 * n), a = 0; n > 0; ) {
        var o = e.readBits(13), f = o / 192 << 8 & 4294967295 | o % 192;
        f < 7936 ? f += 33088 : f += 49472, i[a] = /*(byte) */
        f >> 8, i[a + 1] = /*(byte) */
        f, a += 2, n--;
      }
      try {
        t.append(Ee.decode(i, F.SHIFT_JIS));
      } catch (u) {
        throw new O(u);
      }
    }, r.decodeByteSegment = function(e, t, n, i, a, o) {
      if (8 * n > e.available())
        throw new O();
      for (var f = new Uint8Array(n), u = 0; u < n; u++)
        f[u] = /*(byte) */
        e.readBits(8);
      var s;
      i === null ? s = F.guessEncoding(f, o) : s = i.getName();
      try {
        t.append(Ee.decode(f, s));
      } catch (c) {
        throw new O(c);
      }
      a.push(f);
    }, r.toAlphaNumericChar = function(e) {
      if (e >= r.ALPHANUMERIC_CHARS.length)
        throw new O();
      return r.ALPHANUMERIC_CHARS[e];
    }, r.decodeAlphanumericSegment = function(e, t, n, i) {
      for (var a = t.length(); n > 1; ) {
        if (e.available() < 11)
          throw new O();
        var o = e.readBits(11);
        t.append(r.toAlphaNumericChar(Math.floor(o / 45))), t.append(r.toAlphaNumericChar(o % 45)), n -= 2;
      }
      if (n === 1) {
        if (e.available() < 6)
          throw new O();
        t.append(r.toAlphaNumericChar(e.readBits(6)));
      }
      if (i)
        for (var f = a; f < t.length(); f++)
          t.charAt(f) === "%" && (f < t.length() - 1 && t.charAt(f + 1) === "%" ? t.deleteCharAt(f + 1) : t.setCharAt(f, ""));
    }, r.decodeNumericSegment = function(e, t, n) {
      for (; n >= 3; ) {
        if (e.available() < 10)
          throw new O();
        var i = e.readBits(10);
        if (i >= 1e3)
          throw new O();
        t.append(r.toAlphaNumericChar(Math.floor(i / 100))), t.append(r.toAlphaNumericChar(Math.floor(i / 10) % 10)), t.append(r.toAlphaNumericChar(i % 10)), n -= 3;
      }
      if (n === 2) {
        if (e.available() < 7)
          throw new O();
        var a = e.readBits(7);
        if (a >= 100)
          throw new O();
        t.append(r.toAlphaNumericChar(Math.floor(a / 10))), t.append(r.toAlphaNumericChar(a % 10));
      } else if (n === 1) {
        if (e.available() < 4)
          throw new O();
        var o = e.readBits(4);
        if (o >= 10)
          throw new O();
        t.append(r.toAlphaNumericChar(o));
      }
    }, r.parseECIValue = function(e) {
      var t = e.readBits(8);
      if (!(t & 128))
        return t & 127;
      if ((t & 192) === 128) {
        var n = e.readBits(8);
        return (t & 63) << 8 & 4294967295 | n;
      }
      if ((t & 224) === 192) {
        var i = e.readBits(16);
        return (t & 31) << 16 & 4294967295 | i;
      }
      throw new O();
    }, r.ALPHANUMERIC_CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:", r.GB2312_SUBSET = 1, r;
  }()
), Br = (
  /** @class */
  function() {
    function r(e) {
      this.mirrored = e;
    }
    return r.prototype.isMirrored = function() {
      return this.mirrored;
    }, r.prototype.applyMirroredCorrection = function(e) {
      if (!(!this.mirrored || e === null || e.length < 3)) {
        var t = e[0];
        e[0] = e[2], e[2] = t;
      }
    }, r;
  }()
), lr = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Hi = (
  /** @class */
  function() {
    function r() {
      this.rsDecoder = new lt(ge.QR_CODE_FIELD_256);
    }
    return r.prototype.decodeBooleanArray = function(e, t) {
      return this.decodeBitMatrix(Te.parseFromBooleanArray(e), t);
    }, r.prototype.decodeBitMatrix = function(e, t) {
      var n = new Li(e), i = null;
      try {
        return this.decodeBitMatrixParser(n, t);
      } catch (o) {
        i = o;
      }
      try {
        n.remask(), n.setMirror(!0), n.readVersion(), n.readFormatInformation(), n.mirror();
        var a = this.decodeBitMatrixParser(n, t);
        return a.setOther(new Br(!0)), a;
      } catch (o) {
        throw i !== null ? i : o;
      }
    }, r.prototype.decodeBitMatrixParser = function(e, t) {
      var n, i, a, o, f = e.readVersion(), u = e.readFormatInformation().getErrorCorrectionLevel(), s = e.readCodewords(), c = ki.getDataBlocks(s, f, u), h = 0;
      try {
        for (var l = lr(c), d = l.next(); !d.done; d = l.next()) {
          var v = d.value;
          h += v.getNumDataCodewords();
        }
      } catch (S) {
        n = { error: S };
      } finally {
        try {
          d && !d.done && (i = l.return) && i.call(l);
        } finally {
          if (n) throw n.error;
        }
      }
      var x = new Uint8Array(h), g = 0;
      try {
        for (var _ = lr(c), y = _.next(); !y.done; y = _.next()) {
          var v = y.value, A = v.getCodewords(), E = v.getNumDataCodewords();
          this.correctErrors(A, E);
          for (var I = 0; I < E; I++)
            x[g++] = A[I];
        }
      } catch (S) {
        a = { error: S };
      } finally {
        try {
          y && !y.done && (o = _.return) && o.call(_);
        } finally {
          if (a) throw a.error;
        }
      }
      return Ui.decode(x, f, u, t);
    }, r.prototype.correctErrors = function(e, t) {
      var n = new Int32Array(e);
      try {
        this.rsDecoder.decode(n, e.length - t);
      } catch {
        throw new oe();
      }
      for (var i = 0; i < t; i++)
        e[i] = /*(byte) */
        n[i];
    }, r;
  }()
), Vi = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Gi = (
  /** @class */
  function(r) {
    Vi(e, r);
    function e(t, n, i) {
      var a = r.call(this, t, n) || this;
      return a.estimatedModuleSize = i, a;
    }
    return e.prototype.aboutEquals = function(t, n, i) {
      if (Math.abs(n - this.getY()) <= t && Math.abs(i - this.getX()) <= t) {
        var a = Math.abs(t - this.estimatedModuleSize);
        return a <= 1 || a <= this.estimatedModuleSize;
      }
      return !1;
    }, e.prototype.combineEstimate = function(t, n, i) {
      var a = (this.getX() + n) / 2, o = (this.getY() + t) / 2, f = (this.estimatedModuleSize + i) / 2;
      return new e(a, o, f);
    }, e;
  }(T)
), Xi = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Wi = (
  /** @class */
  function() {
    function r(e, t, n, i, a, o, f) {
      this.image = e, this.startX = t, this.startY = n, this.width = i, this.height = a, this.moduleSize = o, this.resultPointCallback = f, this.possibleCenters = [], this.crossCheckStateCount = new Int32Array(3);
    }
    return r.prototype.find = function() {
      for (var e = this.startX, t = this.height, n = this.width, i = e + n, a = this.startY + t / 2, o = new Int32Array(3), f = this.image, u = 0; u < t; u++) {
        var s = a + (u & 1 ? -Math.floor((u + 1) / 2) : Math.floor((u + 1) / 2));
        o[0] = 0, o[1] = 0, o[2] = 0;
        for (var c = e; c < i && !f.get(c, s); )
          c++;
        for (var h = 0; c < i; ) {
          if (f.get(c, s))
            if (h === 1)
              o[1]++;
            else if (h === 2) {
              if (this.foundPatternCross(o)) {
                var l = this.handlePossibleCenter(o, s, c);
                if (l !== null)
                  return l;
              }
              o[0] = o[2], o[1] = 1, o[2] = 0, h = 1;
            } else
              o[++h]++;
          else
            h === 1 && h++, o[h]++;
          c++;
        }
        if (this.foundPatternCross(o)) {
          var l = this.handlePossibleCenter(o, s, i);
          if (l !== null)
            return l;
        }
      }
      if (this.possibleCenters.length !== 0)
        return this.possibleCenters[0];
      throw new C();
    }, r.centerFromEnd = function(e, t) {
      return t - e[2] - e[1] / 2;
    }, r.prototype.foundPatternCross = function(e) {
      for (var t = this.moduleSize, n = t / 2, i = 0; i < 3; i++)
        if (Math.abs(t - e[i]) >= n)
          return !1;
      return !0;
    }, r.prototype.crossCheckVertical = function(e, t, n, i) {
      var a = this.image, o = a.getHeight(), f = this.crossCheckStateCount;
      f[0] = 0, f[1] = 0, f[2] = 0;
      for (var u = e; u >= 0 && a.get(t, u) && f[1] <= n; )
        f[1]++, u--;
      if (u < 0 || f[1] > n)
        return NaN;
      for (; u >= 0 && !a.get(t, u) && f[0] <= n; )
        f[0]++, u--;
      if (f[0] > n)
        return NaN;
      for (u = e + 1; u < o && a.get(t, u) && f[1] <= n; )
        f[1]++, u++;
      if (u === o || f[1] > n)
        return NaN;
      for (; u < o && !a.get(t, u) && f[2] <= n; )
        f[2]++, u++;
      if (f[2] > n)
        return NaN;
      var s = f[0] + f[1] + f[2];
      return 5 * Math.abs(s - i) >= 2 * i ? NaN : this.foundPatternCross(f) ? r.centerFromEnd(f, u) : NaN;
    }, r.prototype.handlePossibleCenter = function(e, t, n) {
      var i, a, o = e[0] + e[1] + e[2], f = r.centerFromEnd(e, n), u = this.crossCheckVertical(
        t,
        /*(int) */
        f,
        2 * e[1],
        o
      );
      if (!isNaN(u)) {
        var s = (e[0] + e[1] + e[2]) / 3;
        try {
          for (var c = Xi(this.possibleCenters), h = c.next(); !h.done; h = c.next()) {
            var l = h.value;
            if (l.aboutEquals(s, u, f))
              return l.combineEstimate(u, f, s);
          }
        } catch (v) {
          i = { error: v };
        } finally {
          try {
            h && !h.done && (a = c.return) && a.call(c);
          } finally {
            if (i) throw i.error;
          }
        }
        var d = new Gi(f, u, s);
        this.possibleCenters.push(d), this.resultPointCallback !== null && this.resultPointCallback !== void 0 && this.resultPointCallback.foundPossibleResultPoint(d);
      }
      return null;
    }, r;
  }()
), zi = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Yi = (
  /** @class */
  function(r) {
    zi(e, r);
    function e(t, n, i, a) {
      var o = r.call(this, t, n) || this;
      return o.estimatedModuleSize = i, o.count = a, a === void 0 && (o.count = 1), o;
    }
    return e.prototype.getEstimatedModuleSize = function() {
      return this.estimatedModuleSize;
    }, e.prototype.getCount = function() {
      return this.count;
    }, e.prototype.aboutEquals = function(t, n, i) {
      if (Math.abs(n - this.getY()) <= t && Math.abs(i - this.getX()) <= t) {
        var a = Math.abs(t - this.estimatedModuleSize);
        return a <= 1 || a <= this.estimatedModuleSize;
      }
      return !1;
    }, e.prototype.combineEstimate = function(t, n, i) {
      var a = this.count + 1, o = (this.count * this.getX() + n) / a, f = (this.count * this.getY() + t) / a, u = (this.count * this.estimatedModuleSize + i) / a;
      return new e(o, f, u, a);
    }, e;
  }(T)
), ji = (
  /** @class */
  function() {
    function r(e) {
      this.bottomLeft = e[0], this.topLeft = e[1], this.topRight = e[2];
    }
    return r.prototype.getBottomLeft = function() {
      return this.bottomLeft;
    }, r.prototype.getTopLeft = function() {
      return this.topLeft;
    }, r.prototype.getTopRight = function() {
      return this.topRight;
    }, r;
  }()
), ze = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Zi = (
  /** @class */
  function() {
    function r(e, t) {
      this.image = e, this.resultPointCallback = t, this.possibleCenters = [], this.crossCheckStateCount = new Int32Array(5), this.resultPointCallback = t;
    }
    return r.prototype.getImage = function() {
      return this.image;
    }, r.prototype.getPossibleCenters = function() {
      return this.possibleCenters;
    }, r.prototype.find = function(e) {
      var t = e != null && e.get($.TRY_HARDER) !== void 0, n = e != null && e.get($.PURE_BARCODE) !== void 0, i = this.image, a = i.getHeight(), o = i.getWidth(), f = Math.floor(3 * a / (4 * r.MAX_MODULES));
      (f < r.MIN_SKIP || t) && (f = r.MIN_SKIP);
      for (var u = !1, s = new Int32Array(5), c = f - 1; c < a && !u; c += f) {
        s[0] = 0, s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0;
        for (var h = 0, l = 0; l < o; l++)
          if (i.get(l, c))
            (h & 1) === 1 && h++, s[h]++;
          else if (h & 1)
            s[h]++;
          else if (h === 4)
            if (r.foundPatternCross(s)) {
              var d = this.handlePossibleCenter(s, c, l, n);
              if (d === !0)
                if (f = 2, this.hasSkipped === !0)
                  u = this.haveMultiplyConfirmedCenters();
                else {
                  var v = this.findRowSkip();
                  v > s[2] && (c += v - s[2] - f, l = o - 1);
                }
              else {
                s[0] = s[2], s[1] = s[3], s[2] = s[4], s[3] = 1, s[4] = 0, h = 3;
                continue;
              }
              h = 0, s[0] = 0, s[1] = 0, s[2] = 0, s[3] = 0, s[4] = 0;
            } else
              s[0] = s[2], s[1] = s[3], s[2] = s[4], s[3] = 1, s[4] = 0, h = 3;
          else
            s[++h]++;
        if (r.foundPatternCross(s)) {
          var d = this.handlePossibleCenter(s, c, o, n);
          d === !0 && (f = s[0], this.hasSkipped && (u = this.haveMultiplyConfirmedCenters()));
        }
      }
      var x = this.selectBestPatterns();
      return T.orderBestPatterns(x), new ji(x);
    }, r.centerFromEnd = function(e, t) {
      return t - e[4] - e[3] - e[2] / 2;
    }, r.foundPatternCross = function(e) {
      for (var t = 0, n = 0; n < 5; n++) {
        var i = e[n];
        if (i === 0)
          return !1;
        t += i;
      }
      if (t < 7)
        return !1;
      var a = t / 7, o = a / 2;
      return Math.abs(a - e[0]) < o && Math.abs(a - e[1]) < o && Math.abs(3 * a - e[2]) < 3 * o && Math.abs(a - e[3]) < o && Math.abs(a - e[4]) < o;
    }, r.prototype.getCrossCheckStateCount = function() {
      var e = this.crossCheckStateCount;
      return e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0, e[4] = 0, e;
    }, r.prototype.crossCheckDiagonal = function(e, t, n, i) {
      for (var a = this.getCrossCheckStateCount(), o = 0, f = this.image; e >= o && t >= o && f.get(t - o, e - o); )
        a[2]++, o++;
      if (e < o || t < o)
        return !1;
      for (; e >= o && t >= o && !f.get(t - o, e - o) && a[1] <= n; )
        a[1]++, o++;
      if (e < o || t < o || a[1] > n)
        return !1;
      for (; e >= o && t >= o && f.get(t - o, e - o) && a[0] <= n; )
        a[0]++, o++;
      if (a[0] > n)
        return !1;
      var u = f.getHeight(), s = f.getWidth();
      for (o = 1; e + o < u && t + o < s && f.get(t + o, e + o); )
        a[2]++, o++;
      if (e + o >= u || t + o >= s)
        return !1;
      for (; e + o < u && t + o < s && !f.get(t + o, e + o) && a[3] < n; )
        a[3]++, o++;
      if (e + o >= u || t + o >= s || a[3] >= n)
        return !1;
      for (; e + o < u && t + o < s && f.get(t + o, e + o) && a[4] < n; )
        a[4]++, o++;
      if (a[4] >= n)
        return !1;
      var c = a[0] + a[1] + a[2] + a[3] + a[4];
      return Math.abs(c - i) < 2 * i && r.foundPatternCross(a);
    }, r.prototype.crossCheckVertical = function(e, t, n, i) {
      for (var a = this.image, o = a.getHeight(), f = this.getCrossCheckStateCount(), u = e; u >= 0 && a.get(t, u); )
        f[2]++, u--;
      if (u < 0)
        return NaN;
      for (; u >= 0 && !a.get(t, u) && f[1] <= n; )
        f[1]++, u--;
      if (u < 0 || f[1] > n)
        return NaN;
      for (; u >= 0 && a.get(t, u) && f[0] <= n; )
        f[0]++, u--;
      if (f[0] > n)
        return NaN;
      for (u = e + 1; u < o && a.get(t, u); )
        f[2]++, u++;
      if (u === o)
        return NaN;
      for (; u < o && !a.get(t, u) && f[3] < n; )
        f[3]++, u++;
      if (u === o || f[3] >= n)
        return NaN;
      for (; u < o && a.get(t, u) && f[4] < n; )
        f[4]++, u++;
      if (f[4] >= n)
        return NaN;
      var s = f[0] + f[1] + f[2] + f[3] + f[4];
      return 5 * Math.abs(s - i) >= 2 * i ? NaN : r.foundPatternCross(f) ? r.centerFromEnd(f, u) : NaN;
    }, r.prototype.crossCheckHorizontal = function(e, t, n, i) {
      for (var a = this.image, o = a.getWidth(), f = this.getCrossCheckStateCount(), u = e; u >= 0 && a.get(u, t); )
        f[2]++, u--;
      if (u < 0)
        return NaN;
      for (; u >= 0 && !a.get(u, t) && f[1] <= n; )
        f[1]++, u--;
      if (u < 0 || f[1] > n)
        return NaN;
      for (; u >= 0 && a.get(u, t) && f[0] <= n; )
        f[0]++, u--;
      if (f[0] > n)
        return NaN;
      for (u = e + 1; u < o && a.get(u, t); )
        f[2]++, u++;
      if (u === o)
        return NaN;
      for (; u < o && !a.get(u, t) && f[3] < n; )
        f[3]++, u++;
      if (u === o || f[3] >= n)
        return NaN;
      for (; u < o && a.get(u, t) && f[4] < n; )
        f[4]++, u++;
      if (f[4] >= n)
        return NaN;
      var s = f[0] + f[1] + f[2] + f[3] + f[4];
      return 5 * Math.abs(s - i) >= i ? NaN : r.foundPatternCross(f) ? r.centerFromEnd(f, u) : NaN;
    }, r.prototype.handlePossibleCenter = function(e, t, n, i) {
      var a = e[0] + e[1] + e[2] + e[3] + e[4], o = r.centerFromEnd(e, n), f = this.crossCheckVertical(
        t,
        /*(int) */
        Math.floor(o),
        e[2],
        a
      );
      if (!isNaN(f) && (o = this.crossCheckHorizontal(
        /*(int) */
        Math.floor(o),
        /*(int) */
        Math.floor(f),
        e[2],
        a
      ), !isNaN(o) && (!i || this.crossCheckDiagonal(
        /*(int) */
        Math.floor(f),
        /*(int) */
        Math.floor(o),
        e[2],
        a
      )))) {
        for (var u = a / 7, s = !1, c = this.possibleCenters, h = 0, l = c.length; h < l; h++) {
          var d = c[h];
          if (d.aboutEquals(u, f, o)) {
            c[h] = d.combineEstimate(f, o, u), s = !0;
            break;
          }
        }
        if (!s) {
          var v = new Yi(o, f, u);
          c.push(v), this.resultPointCallback !== null && this.resultPointCallback !== void 0 && this.resultPointCallback.foundPossibleResultPoint(v);
        }
        return !0;
      }
      return !1;
    }, r.prototype.findRowSkip = function() {
      var e, t, n = this.possibleCenters.length;
      if (n <= 1)
        return 0;
      var i = null;
      try {
        for (var a = ze(this.possibleCenters), o = a.next(); !o.done; o = a.next()) {
          var f = o.value;
          if (f.getCount() >= r.CENTER_QUORUM)
            if (i == null)
              i = f;
            else
              return this.hasSkipped = !0, /*(int) */
              Math.floor((Math.abs(i.getX() - f.getX()) - Math.abs(i.getY() - f.getY())) / 2);
        }
      } catch (u) {
        e = { error: u };
      } finally {
        try {
          o && !o.done && (t = a.return) && t.call(a);
        } finally {
          if (e) throw e.error;
        }
      }
      return 0;
    }, r.prototype.haveMultiplyConfirmedCenters = function() {
      var e, t, n, i, a = 0, o = 0, f = this.possibleCenters.length;
      try {
        for (var u = ze(this.possibleCenters), s = u.next(); !s.done; s = u.next()) {
          var c = s.value;
          c.getCount() >= r.CENTER_QUORUM && (a++, o += c.getEstimatedModuleSize());
        }
      } catch (x) {
        e = { error: x };
      } finally {
        try {
          s && !s.done && (t = u.return) && t.call(u);
        } finally {
          if (e) throw e.error;
        }
      }
      if (a < 3)
        return !1;
      var h = o / f, l = 0;
      try {
        for (var d = ze(this.possibleCenters), v = d.next(); !v.done; v = d.next()) {
          var c = v.value;
          l += Math.abs(c.getEstimatedModuleSize() - h);
        }
      } catch (x) {
        n = { error: x };
      } finally {
        try {
          v && !v.done && (i = d.return) && i.call(d);
        } finally {
          if (n) throw n.error;
        }
      }
      return l <= 0.05 * o;
    }, r.prototype.selectBestPatterns = function() {
      var e, t, n, i, a = this.possibleCenters.length;
      if (a < 3)
        throw new C();
      var o = this.possibleCenters, f;
      if (a > 3) {
        var u = 0, s = 0;
        try {
          for (var c = ze(this.possibleCenters), h = c.next(); !h.done; h = c.next()) {
            var l = h.value, d = l.getEstimatedModuleSize();
            u += d, s += d * d;
          }
        } catch (I) {
          e = { error: I };
        } finally {
          try {
            h && !h.done && (t = c.return) && t.call(c);
          } finally {
            if (e) throw e.error;
          }
        }
        f = u / a;
        var v = Math.sqrt(s / a - f * f);
        o.sort(
          /**
           * <p>Orders by furthest from average</p>
           */
          // FurthestFromAverageComparator implements Comparator<FinderPattern>
          function(I, S) {
            var m = Math.abs(S.getEstimatedModuleSize() - f), D = Math.abs(I.getEstimatedModuleSize() - f);
            return m < D ? -1 : m > D ? 1 : 0;
          }
        );
        for (var x = Math.max(0.2 * f, v), g = 0; g < o.length && o.length > 3; g++) {
          var _ = o[g];
          Math.abs(_.getEstimatedModuleSize() - f) > x && (o.splice(g, 1), g--);
        }
      }
      if (o.length > 3) {
        var u = 0;
        try {
          for (var y = ze(o), A = y.next(); !A.done; A = y.next()) {
            var E = A.value;
            u += E.getEstimatedModuleSize();
          }
        } catch (S) {
          n = { error: S };
        } finally {
          try {
            A && !A.done && (i = y.return) && i.call(y);
          } finally {
            if (n) throw n.error;
          }
        }
        f = u / o.length, o.sort(
          /**
           * <p>Orders by {@link FinderPattern#getCount()}, descending.</p>
           */
          // CenterComparator implements Comparator<FinderPattern>
          function(S, m) {
            if (m.getCount() === S.getCount()) {
              var D = Math.abs(m.getEstimatedModuleSize() - f), P = Math.abs(S.getEstimatedModuleSize() - f);
              return D < P ? 1 : D > P ? -1 : 0;
            } else
              return m.getCount() - S.getCount();
          }
        ), o.splice(3);
      }
      return [
        o[0],
        o[1],
        o[2]
      ];
    }, r.CENTER_QUORUM = 2, r.MIN_SKIP = 3, r.MAX_MODULES = 57, r;
  }()
), $i = (
  /** @class */
  function() {
    function r(e) {
      this.image = e;
    }
    return r.prototype.getImage = function() {
      return this.image;
    }, r.prototype.getResultPointCallback = function() {
      return this.resultPointCallback;
    }, r.prototype.detect = function(e) {
      this.resultPointCallback = e == null ? null : (
        /*(ResultPointCallback) */
        e.get($.NEED_RESULT_POINT_CALLBACK)
      );
      var t = new Zi(this.image, this.resultPointCallback), n = t.find(e);
      return this.processFinderPatternInfo(n);
    }, r.prototype.processFinderPatternInfo = function(e) {
      var t = e.getTopLeft(), n = e.getTopRight(), i = e.getBottomLeft(), a = this.calculateModuleSize(t, n, i);
      if (a < 1)
        throw new C("No pattern found in proccess finder.");
      var o = r.computeDimension(t, n, i, a), f = Ue.getProvisionalVersionForDimension(o), u = f.getDimensionForVersion() - 7, s = null;
      if (f.getAlignmentPatternCenters().length > 0)
        for (var c = n.getX() - t.getX() + i.getX(), h = n.getY() - t.getY() + i.getY(), l = 1 - 3 / u, d = (
          /*(int) */
          Math.floor(t.getX() + l * (c - t.getX()))
        ), v = (
          /*(int) */
          Math.floor(t.getY() + l * (h - t.getY()))
        ), x = 4; x <= 16; x <<= 1)
          try {
            s = this.findAlignmentInRegion(a, d, v, x);
            break;
          } catch (A) {
            if (!(A instanceof C))
              throw A;
          }
      var g = r.createTransform(t, n, i, s, o), _ = r.sampleGrid(this.image, g, o), y;
      return s === null ? y = [i, t, n] : y = [i, t, n, s], new Vt(_, y);
    }, r.createTransform = function(e, t, n, i, a) {
      var o = a - 3.5, f, u, s, c;
      return i !== null ? (f = i.getX(), u = i.getY(), s = o - 3, c = s) : (f = t.getX() - e.getX() + n.getX(), u = t.getY() - e.getY() + n.getY(), s = o, c = o), Dr.quadrilateralToQuadrilateral(3.5, 3.5, o, 3.5, s, c, 3.5, o, e.getX(), e.getY(), t.getX(), t.getY(), f, u, n.getX(), n.getY());
    }, r.sampleGrid = function(e, t, n) {
      var i = Gt.getInstance();
      return i.sampleGridWithTransform(e, n, n, t);
    }, r.computeDimension = function(e, t, n, i) {
      var a = U.round(T.distance(e, t) / i), o = U.round(T.distance(e, n) / i), f = Math.floor((a + o) / 2) + 7;
      switch (f & 3) {
        case 0:
          f++;
          break;
        case 2:
          f--;
          break;
        case 3:
          throw new C("Dimensions could be not found.");
      }
      return f;
    }, r.prototype.calculateModuleSize = function(e, t, n) {
      return (this.calculateModuleSizeOneWay(e, t) + this.calculateModuleSizeOneWay(e, n)) / 2;
    }, r.prototype.calculateModuleSizeOneWay = function(e, t) {
      var n = this.sizeOfBlackWhiteBlackRunBothWays(
        /*(int) */
        Math.floor(e.getX()),
        /*(int) */
        Math.floor(e.getY()),
        /*(int) */
        Math.floor(t.getX()),
        /*(int) */
        Math.floor(t.getY())
      ), i = this.sizeOfBlackWhiteBlackRunBothWays(
        /*(int) */
        Math.floor(t.getX()),
        /*(int) */
        Math.floor(t.getY()),
        /*(int) */
        Math.floor(e.getX()),
        /*(int) */
        Math.floor(e.getY())
      );
      return isNaN(n) ? i / 7 : isNaN(i) ? n / 7 : (n + i) / 14;
    }, r.prototype.sizeOfBlackWhiteBlackRunBothWays = function(e, t, n, i) {
      var a = this.sizeOfBlackWhiteBlackRun(e, t, n, i), o = 1, f = e - (n - e);
      f < 0 ? (o = e / /*(float) */
      (e - f), f = 0) : f >= this.image.getWidth() && (o = (this.image.getWidth() - 1 - e) / /*(float) */
      (f - e), f = this.image.getWidth() - 1);
      var u = (
        /*(int) */
        Math.floor(t - (i - t) * o)
      );
      return o = 1, u < 0 ? (o = t / /*(float) */
      (t - u), u = 0) : u >= this.image.getHeight() && (o = (this.image.getHeight() - 1 - t) / /*(float) */
      (u - t), u = this.image.getHeight() - 1), f = /*(int) */
      Math.floor(e + (f - e) * o), a += this.sizeOfBlackWhiteBlackRun(e, t, f, u), a - 1;
    }, r.prototype.sizeOfBlackWhiteBlackRun = function(e, t, n, i) {
      var a = Math.abs(i - t) > Math.abs(n - e);
      if (a) {
        var o = e;
        e = t, t = o, o = n, n = i, i = o;
      }
      for (var f = Math.abs(n - e), u = Math.abs(i - t), s = -f / 2, c = e < n ? 1 : -1, h = t < i ? 1 : -1, l = 0, d = n + c, v = e, x = t; v !== d; v += c) {
        var g = a ? x : v, _ = a ? v : x;
        if (l === 1 === this.image.get(g, _)) {
          if (l === 2)
            return U.distance(v, x, e, t);
          l++;
        }
        if (s += u, s > 0) {
          if (x === i)
            break;
          x += h, s -= f;
        }
      }
      return l === 2 ? U.distance(n + c, i, e, t) : NaN;
    }, r.prototype.findAlignmentInRegion = function(e, t, n, i) {
      var a = (
        /*(int) */
        Math.floor(i * e)
      ), o = Math.max(0, t - a), f = Math.min(this.image.getWidth() - 1, t + a);
      if (f - o < e * 3)
        throw new C("Alignment top exceeds estimated module size.");
      var u = Math.max(0, n - a), s = Math.min(this.image.getHeight() - 1, n + a);
      if (s - u < e * 3)
        throw new C("Alignment bottom exceeds estimated module size.");
      var c = new Wi(this.image, o, u, f - o, s - u, e, this.resultPointCallback);
      return c.find();
    }, r;
  }()
), Pt = (
  /** @class */
  function() {
    function r() {
      this.decoder = new Hi();
    }
    return r.prototype.getDecoder = function() {
      return this.decoder;
    }, r.prototype.decode = function(e, t) {
      var n, i;
      if (t != null && t.get($.PURE_BARCODE) !== void 0) {
        var a = r.extractPureBits(e.getBlackMatrix());
        n = this.decoder.decodeBitMatrix(a, t), i = r.NO_POINTS;
      } else {
        var o = new $i(e.getBlackMatrix()).detect(t);
        n = this.decoder.decodeBitMatrix(o.getBits(), t), i = o.getPoints();
      }
      n.getOther() instanceof Br && n.getOther().applyMirroredCorrection(i);
      var f = new le(n.getText(), n.getRawBytes(), void 0, i, b.QR_CODE, void 0), u = n.getByteSegments();
      u !== null && f.putMetadata(ce.BYTE_SEGMENTS, u);
      var s = n.getECLevel();
      return s !== null && f.putMetadata(ce.ERROR_CORRECTION_LEVEL, s), n.hasStructuredAppend() && (f.putMetadata(ce.STRUCTURED_APPEND_SEQUENCE, n.getStructuredAppendSequenceNumber()), f.putMetadata(ce.STRUCTURED_APPEND_PARITY, n.getStructuredAppendParity())), f;
    }, r.prototype.reset = function() {
    }, r.extractPureBits = function(e) {
      var t = e.getTopLeftOnBit(), n = e.getBottomRightOnBit();
      if (t === null || n === null)
        throw new C();
      var i = this.moduleSize(t, e), a = t[1], o = n[1], f = t[0], u = n[0];
      if (f >= u || a >= o)
        throw new C();
      if (o - a !== u - f && (u = f + (o - a), u >= e.getWidth()))
        throw new C();
      var s = Math.round((u - f + 1) / i), c = Math.round((o - a + 1) / i);
      if (s <= 0 || c <= 0)
        throw new C();
      if (c !== s)
        throw new C();
      var h = (
        /*(int) */
        Math.floor(i / 2)
      );
      a += h, f += h;
      var l = f + /*(int) */
      Math.floor((s - 1) * i) - u;
      if (l > 0) {
        if (l > h)
          throw new C();
        f -= l;
      }
      var d = a + /*(int) */
      Math.floor((c - 1) * i) - o;
      if (d > 0) {
        if (d > h)
          throw new C();
        a -= d;
      }
      for (var v = new Te(s, c), x = 0; x < c; x++)
        for (var g = a + /*(int) */
        Math.floor(x * i), _ = 0; _ < s; _++)
          e.get(f + /*(int) */
          Math.floor(_ * i), g) && v.set(_, x);
      return v;
    }, r.moduleSize = function(e, t) {
      for (var n = t.getHeight(), i = t.getWidth(), a = e[0], o = e[1], f = !0, u = 0; a < i && o < n; ) {
        if (f !== t.get(a, o)) {
          if (++u === 5)
            break;
          f = !f;
        }
        a++, o++;
      }
      if (a === i || o === n)
        throw new C();
      return (a - e[0]) / 7;
    }, r.NO_POINTS = new Array(), r;
  }()
), Ki = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, k = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.PDF417Common = function() {
    }, r.getBitCountSum = function(e) {
      return U.sum(e);
    }, r.toIntArray = function(e) {
      var t, n;
      if (e == null || !e.length)
        return r.EMPTY_INT_ARRAY;
      var i = new Int32Array(e.length), a = 0;
      try {
        for (var o = Ki(e), f = o.next(); !f.done; f = o.next()) {
          var u = f.value;
          i[a++] = u;
        }
      } catch (s) {
        t = { error: s };
      } finally {
        try {
          f && !f.done && (n = o.return) && n.call(o);
        } finally {
          if (t) throw t.error;
        }
      }
      return i;
    }, r.getCodeword = function(e) {
      var t = re.binarySearch(r.SYMBOL_TABLE, e & 262143);
      return t < 0 ? -1 : (r.CODEWORD_TABLE[t] - 1) % r.NUMBER_OF_CODEWORDS;
    }, r.NUMBER_OF_CODEWORDS = 929, r.MAX_CODEWORDS_IN_BARCODE = r.NUMBER_OF_CODEWORDS - 1, r.MIN_ROWS_IN_BARCODE = 3, r.MAX_ROWS_IN_BARCODE = 90, r.MODULES_IN_CODEWORD = 17, r.MODULES_IN_STOP_PATTERN = 18, r.BARS_IN_MODULE = 8, r.EMPTY_INT_ARRAY = new Int32Array([]), r.SYMBOL_TABLE = Int32Array.from([
      66142,
      66170,
      66206,
      66236,
      66290,
      66292,
      66350,
      66382,
      66396,
      66454,
      66470,
      66476,
      66594,
      66600,
      66614,
      66626,
      66628,
      66632,
      66640,
      66654,
      66662,
      66668,
      66682,
      66690,
      66718,
      66720,
      66748,
      66758,
      66776,
      66798,
      66802,
      66804,
      66820,
      66824,
      66832,
      66846,
      66848,
      66876,
      66880,
      66936,
      66950,
      66956,
      66968,
      66992,
      67006,
      67022,
      67036,
      67042,
      67044,
      67048,
      67062,
      67118,
      67150,
      67164,
      67214,
      67228,
      67256,
      67294,
      67322,
      67350,
      67366,
      67372,
      67398,
      67404,
      67416,
      67438,
      67474,
      67476,
      67490,
      67492,
      67496,
      67510,
      67618,
      67624,
      67650,
      67656,
      67664,
      67678,
      67686,
      67692,
      67706,
      67714,
      67716,
      67728,
      67742,
      67744,
      67772,
      67782,
      67788,
      67800,
      67822,
      67826,
      67828,
      67842,
      67848,
      67870,
      67872,
      67900,
      67904,
      67960,
      67974,
      67992,
      68016,
      68030,
      68046,
      68060,
      68066,
      68068,
      68072,
      68086,
      68104,
      68112,
      68126,
      68128,
      68156,
      68160,
      68216,
      68336,
      68358,
      68364,
      68376,
      68400,
      68414,
      68448,
      68476,
      68494,
      68508,
      68536,
      68546,
      68548,
      68552,
      68560,
      68574,
      68582,
      68588,
      68654,
      68686,
      68700,
      68706,
      68708,
      68712,
      68726,
      68750,
      68764,
      68792,
      68802,
      68804,
      68808,
      68816,
      68830,
      68838,
      68844,
      68858,
      68878,
      68892,
      68920,
      68976,
      68990,
      68994,
      68996,
      69e3,
      69008,
      69022,
      69024,
      69052,
      69062,
      69068,
      69080,
      69102,
      69106,
      69108,
      69142,
      69158,
      69164,
      69190,
      69208,
      69230,
      69254,
      69260,
      69272,
      69296,
      69310,
      69326,
      69340,
      69386,
      69394,
      69396,
      69410,
      69416,
      69430,
      69442,
      69444,
      69448,
      69456,
      69470,
      69478,
      69484,
      69554,
      69556,
      69666,
      69672,
      69698,
      69704,
      69712,
      69726,
      69754,
      69762,
      69764,
      69776,
      69790,
      69792,
      69820,
      69830,
      69836,
      69848,
      69870,
      69874,
      69876,
      69890,
      69918,
      69920,
      69948,
      69952,
      70008,
      70022,
      70040,
      70064,
      70078,
      70094,
      70108,
      70114,
      70116,
      70120,
      70134,
      70152,
      70174,
      70176,
      70264,
      70384,
      70412,
      70448,
      70462,
      70496,
      70524,
      70542,
      70556,
      70584,
      70594,
      70600,
      70608,
      70622,
      70630,
      70636,
      70664,
      70672,
      70686,
      70688,
      70716,
      70720,
      70776,
      70896,
      71136,
      71180,
      71192,
      71216,
      71230,
      71264,
      71292,
      71360,
      71416,
      71452,
      71480,
      71536,
      71550,
      71554,
      71556,
      71560,
      71568,
      71582,
      71584,
      71612,
      71622,
      71628,
      71640,
      71662,
      71726,
      71732,
      71758,
      71772,
      71778,
      71780,
      71784,
      71798,
      71822,
      71836,
      71864,
      71874,
      71880,
      71888,
      71902,
      71910,
      71916,
      71930,
      71950,
      71964,
      71992,
      72048,
      72062,
      72066,
      72068,
      72080,
      72094,
      72096,
      72124,
      72134,
      72140,
      72152,
      72174,
      72178,
      72180,
      72206,
      72220,
      72248,
      72304,
      72318,
      72416,
      72444,
      72456,
      72464,
      72478,
      72480,
      72508,
      72512,
      72568,
      72588,
      72600,
      72624,
      72638,
      72654,
      72668,
      72674,
      72676,
      72680,
      72694,
      72726,
      72742,
      72748,
      72774,
      72780,
      72792,
      72814,
      72838,
      72856,
      72880,
      72894,
      72910,
      72924,
      72930,
      72932,
      72936,
      72950,
      72966,
      72972,
      72984,
      73008,
      73022,
      73056,
      73084,
      73102,
      73116,
      73144,
      73156,
      73160,
      73168,
      73182,
      73190,
      73196,
      73210,
      73226,
      73234,
      73236,
      73250,
      73252,
      73256,
      73270,
      73282,
      73284,
      73296,
      73310,
      73318,
      73324,
      73346,
      73348,
      73352,
      73360,
      73374,
      73376,
      73404,
      73414,
      73420,
      73432,
      73454,
      73498,
      73518,
      73522,
      73524,
      73550,
      73564,
      73570,
      73572,
      73576,
      73590,
      73800,
      73822,
      73858,
      73860,
      73872,
      73886,
      73888,
      73916,
      73944,
      73970,
      73972,
      73992,
      74014,
      74016,
      74044,
      74048,
      74104,
      74118,
      74136,
      74160,
      74174,
      74210,
      74212,
      74216,
      74230,
      74244,
      74256,
      74270,
      74272,
      74360,
      74480,
      74502,
      74508,
      74544,
      74558,
      74592,
      74620,
      74638,
      74652,
      74680,
      74690,
      74696,
      74704,
      74726,
      74732,
      74782,
      74784,
      74812,
      74992,
      75232,
      75288,
      75326,
      75360,
      75388,
      75456,
      75512,
      75576,
      75632,
      75646,
      75650,
      75652,
      75664,
      75678,
      75680,
      75708,
      75718,
      75724,
      75736,
      75758,
      75808,
      75836,
      75840,
      75896,
      76016,
      76256,
      76736,
      76824,
      76848,
      76862,
      76896,
      76924,
      76992,
      77048,
      77296,
      77340,
      77368,
      77424,
      77438,
      77536,
      77564,
      77572,
      77576,
      77584,
      77600,
      77628,
      77632,
      77688,
      77702,
      77708,
      77720,
      77744,
      77758,
      77774,
      77788,
      77870,
      77902,
      77916,
      77922,
      77928,
      77966,
      77980,
      78008,
      78018,
      78024,
      78032,
      78046,
      78060,
      78074,
      78094,
      78136,
      78192,
      78206,
      78210,
      78212,
      78224,
      78238,
      78240,
      78268,
      78278,
      78284,
      78296,
      78322,
      78324,
      78350,
      78364,
      78448,
      78462,
      78560,
      78588,
      78600,
      78622,
      78624,
      78652,
      78656,
      78712,
      78726,
      78744,
      78768,
      78782,
      78798,
      78812,
      78818,
      78820,
      78824,
      78838,
      78862,
      78876,
      78904,
      78960,
      78974,
      79072,
      79100,
      79296,
      79352,
      79368,
      79376,
      79390,
      79392,
      79420,
      79424,
      79480,
      79600,
      79628,
      79640,
      79664,
      79678,
      79712,
      79740,
      79772,
      79800,
      79810,
      79812,
      79816,
      79824,
      79838,
      79846,
      79852,
      79894,
      79910,
      79916,
      79942,
      79948,
      79960,
      79982,
      79988,
      80006,
      80024,
      80048,
      80062,
      80078,
      80092,
      80098,
      80100,
      80104,
      80134,
      80140,
      80176,
      80190,
      80224,
      80252,
      80270,
      80284,
      80312,
      80328,
      80336,
      80350,
      80358,
      80364,
      80378,
      80390,
      80396,
      80408,
      80432,
      80446,
      80480,
      80508,
      80576,
      80632,
      80654,
      80668,
      80696,
      80752,
      80766,
      80776,
      80784,
      80798,
      80800,
      80828,
      80844,
      80856,
      80878,
      80882,
      80884,
      80914,
      80916,
      80930,
      80932,
      80936,
      80950,
      80962,
      80968,
      80976,
      80990,
      80998,
      81004,
      81026,
      81028,
      81040,
      81054,
      81056,
      81084,
      81094,
      81100,
      81112,
      81134,
      81154,
      81156,
      81160,
      81168,
      81182,
      81184,
      81212,
      81216,
      81272,
      81286,
      81292,
      81304,
      81328,
      81342,
      81358,
      81372,
      81380,
      81384,
      81398,
      81434,
      81454,
      81458,
      81460,
      81486,
      81500,
      81506,
      81508,
      81512,
      81526,
      81550,
      81564,
      81592,
      81602,
      81604,
      81608,
      81616,
      81630,
      81638,
      81644,
      81702,
      81708,
      81722,
      81734,
      81740,
      81752,
      81774,
      81778,
      81780,
      82050,
      82078,
      82080,
      82108,
      82180,
      82184,
      82192,
      82206,
      82208,
      82236,
      82240,
      82296,
      82316,
      82328,
      82352,
      82366,
      82402,
      82404,
      82408,
      82440,
      82448,
      82462,
      82464,
      82492,
      82496,
      82552,
      82672,
      82694,
      82700,
      82712,
      82736,
      82750,
      82784,
      82812,
      82830,
      82882,
      82884,
      82888,
      82896,
      82918,
      82924,
      82952,
      82960,
      82974,
      82976,
      83004,
      83008,
      83064,
      83184,
      83424,
      83468,
      83480,
      83504,
      83518,
      83552,
      83580,
      83648,
      83704,
      83740,
      83768,
      83824,
      83838,
      83842,
      83844,
      83848,
      83856,
      83872,
      83900,
      83910,
      83916,
      83928,
      83950,
      83984,
      84e3,
      84028,
      84032,
      84088,
      84208,
      84448,
      84928,
      85040,
      85054,
      85088,
      85116,
      85184,
      85240,
      85488,
      85560,
      85616,
      85630,
      85728,
      85756,
      85764,
      85768,
      85776,
      85790,
      85792,
      85820,
      85824,
      85880,
      85894,
      85900,
      85912,
      85936,
      85966,
      85980,
      86048,
      86080,
      86136,
      86256,
      86496,
      86976,
      88160,
      88188,
      88256,
      88312,
      88560,
      89056,
      89200,
      89214,
      89312,
      89340,
      89536,
      89592,
      89608,
      89616,
      89632,
      89664,
      89720,
      89840,
      89868,
      89880,
      89904,
      89952,
      89980,
      89998,
      90012,
      90040,
      90190,
      90204,
      90254,
      90268,
      90296,
      90306,
      90308,
      90312,
      90334,
      90382,
      90396,
      90424,
      90480,
      90494,
      90500,
      90504,
      90512,
      90526,
      90528,
      90556,
      90566,
      90572,
      90584,
      90610,
      90612,
      90638,
      90652,
      90680,
      90736,
      90750,
      90848,
      90876,
      90884,
      90888,
      90896,
      90910,
      90912,
      90940,
      90944,
      91e3,
      91014,
      91020,
      91032,
      91056,
      91070,
      91086,
      91100,
      91106,
      91108,
      91112,
      91126,
      91150,
      91164,
      91192,
      91248,
      91262,
      91360,
      91388,
      91584,
      91640,
      91664,
      91678,
      91680,
      91708,
      91712,
      91768,
      91888,
      91928,
      91952,
      91966,
      92e3,
      92028,
      92046,
      92060,
      92088,
      92098,
      92100,
      92104,
      92112,
      92126,
      92134,
      92140,
      92188,
      92216,
      92272,
      92384,
      92412,
      92608,
      92664,
      93168,
      93200,
      93214,
      93216,
      93244,
      93248,
      93304,
      93424,
      93664,
      93720,
      93744,
      93758,
      93792,
      93820,
      93888,
      93944,
      93980,
      94008,
      94064,
      94078,
      94084,
      94088,
      94096,
      94110,
      94112,
      94140,
      94150,
      94156,
      94168,
      94246,
      94252,
      94278,
      94284,
      94296,
      94318,
      94342,
      94348,
      94360,
      94384,
      94398,
      94414,
      94428,
      94440,
      94470,
      94476,
      94488,
      94512,
      94526,
      94560,
      94588,
      94606,
      94620,
      94648,
      94658,
      94660,
      94664,
      94672,
      94686,
      94694,
      94700,
      94714,
      94726,
      94732,
      94744,
      94768,
      94782,
      94816,
      94844,
      94912,
      94968,
      94990,
      95004,
      95032,
      95088,
      95102,
      95112,
      95120,
      95134,
      95136,
      95164,
      95180,
      95192,
      95214,
      95218,
      95220,
      95244,
      95256,
      95280,
      95294,
      95328,
      95356,
      95424,
      95480,
      95728,
      95758,
      95772,
      95800,
      95856,
      95870,
      95968,
      95996,
      96008,
      96016,
      96030,
      96032,
      96060,
      96064,
      96120,
      96152,
      96176,
      96190,
      96220,
      96226,
      96228,
      96232,
      96290,
      96292,
      96296,
      96310,
      96322,
      96324,
      96328,
      96336,
      96350,
      96358,
      96364,
      96386,
      96388,
      96392,
      96400,
      96414,
      96416,
      96444,
      96454,
      96460,
      96472,
      96494,
      96498,
      96500,
      96514,
      96516,
      96520,
      96528,
      96542,
      96544,
      96572,
      96576,
      96632,
      96646,
      96652,
      96664,
      96688,
      96702,
      96718,
      96732,
      96738,
      96740,
      96744,
      96758,
      96772,
      96776,
      96784,
      96798,
      96800,
      96828,
      96832,
      96888,
      97008,
      97030,
      97036,
      97048,
      97072,
      97086,
      97120,
      97148,
      97166,
      97180,
      97208,
      97220,
      97224,
      97232,
      97246,
      97254,
      97260,
      97326,
      97330,
      97332,
      97358,
      97372,
      97378,
      97380,
      97384,
      97398,
      97422,
      97436,
      97464,
      97474,
      97476,
      97480,
      97488,
      97502,
      97510,
      97516,
      97550,
      97564,
      97592,
      97648,
      97666,
      97668,
      97672,
      97680,
      97694,
      97696,
      97724,
      97734,
      97740,
      97752,
      97774,
      97830,
      97836,
      97850,
      97862,
      97868,
      97880,
      97902,
      97906,
      97908,
      97926,
      97932,
      97944,
      97968,
      97998,
      98012,
      98018,
      98020,
      98024,
      98038,
      98618,
      98674,
      98676,
      98838,
      98854,
      98874,
      98892,
      98904,
      98926,
      98930,
      98932,
      98968,
      99006,
      99042,
      99044,
      99048,
      99062,
      99166,
      99194,
      99246,
      99286,
      99350,
      99366,
      99372,
      99386,
      99398,
      99416,
      99438,
      99442,
      99444,
      99462,
      99504,
      99518,
      99534,
      99548,
      99554,
      99556,
      99560,
      99574,
      99590,
      99596,
      99608,
      99632,
      99646,
      99680,
      99708,
      99726,
      99740,
      99768,
      99778,
      99780,
      99784,
      99792,
      99806,
      99814,
      99820,
      99834,
      99858,
      99860,
      99874,
      99880,
      99894,
      99906,
      99920,
      99934,
      99962,
      99970,
      99972,
      99976,
      99984,
      99998,
      1e5,
      100028,
      100038,
      100044,
      100056,
      100078,
      100082,
      100084,
      100142,
      100174,
      100188,
      100246,
      100262,
      100268,
      100306,
      100308,
      100390,
      100396,
      100410,
      100422,
      100428,
      100440,
      100462,
      100466,
      100468,
      100486,
      100504,
      100528,
      100542,
      100558,
      100572,
      100578,
      100580,
      100584,
      100598,
      100620,
      100656,
      100670,
      100704,
      100732,
      100750,
      100792,
      100802,
      100808,
      100816,
      100830,
      100838,
      100844,
      100858,
      100888,
      100912,
      100926,
      100960,
      100988,
      101056,
      101112,
      101148,
      101176,
      101232,
      101246,
      101250,
      101252,
      101256,
      101264,
      101278,
      101280,
      101308,
      101318,
      101324,
      101336,
      101358,
      101362,
      101364,
      101410,
      101412,
      101416,
      101430,
      101442,
      101448,
      101456,
      101470,
      101478,
      101498,
      101506,
      101508,
      101520,
      101534,
      101536,
      101564,
      101580,
      101618,
      101620,
      101636,
      101640,
      101648,
      101662,
      101664,
      101692,
      101696,
      101752,
      101766,
      101784,
      101838,
      101858,
      101860,
      101864,
      101934,
      101938,
      101940,
      101966,
      101980,
      101986,
      101988,
      101992,
      102030,
      102044,
      102072,
      102082,
      102084,
      102088,
      102096,
      102138,
      102166,
      102182,
      102188,
      102214,
      102220,
      102232,
      102254,
      102282,
      102290,
      102292,
      102306,
      102308,
      102312,
      102326,
      102444,
      102458,
      102470,
      102476,
      102488,
      102514,
      102516,
      102534,
      102552,
      102576,
      102590,
      102606,
      102620,
      102626,
      102632,
      102646,
      102662,
      102668,
      102704,
      102718,
      102752,
      102780,
      102798,
      102812,
      102840,
      102850,
      102856,
      102864,
      102878,
      102886,
      102892,
      102906,
      102936,
      102974,
      103008,
      103036,
      103104,
      103160,
      103224,
      103280,
      103294,
      103298,
      103300,
      103312,
      103326,
      103328,
      103356,
      103366,
      103372,
      103384,
      103406,
      103410,
      103412,
      103472,
      103486,
      103520,
      103548,
      103616,
      103672,
      103920,
      103992,
      104048,
      104062,
      104160,
      104188,
      104194,
      104196,
      104200,
      104208,
      104224,
      104252,
      104256,
      104312,
      104326,
      104332,
      104344,
      104368,
      104382,
      104398,
      104412,
      104418,
      104420,
      104424,
      104482,
      104484,
      104514,
      104520,
      104528,
      104542,
      104550,
      104570,
      104578,
      104580,
      104592,
      104606,
      104608,
      104636,
      104652,
      104690,
      104692,
      104706,
      104712,
      104734,
      104736,
      104764,
      104768,
      104824,
      104838,
      104856,
      104910,
      104930,
      104932,
      104936,
      104968,
      104976,
      104990,
      104992,
      105020,
      105024,
      105080,
      105200,
      105240,
      105278,
      105312,
      105372,
      105410,
      105412,
      105416,
      105424,
      105446,
      105518,
      105524,
      105550,
      105564,
      105570,
      105572,
      105576,
      105614,
      105628,
      105656,
      105666,
      105672,
      105680,
      105702,
      105722,
      105742,
      105756,
      105784,
      105840,
      105854,
      105858,
      105860,
      105864,
      105872,
      105888,
      105932,
      105970,
      105972,
      106006,
      106022,
      106028,
      106054,
      106060,
      106072,
      106100,
      106118,
      106124,
      106136,
      106160,
      106174,
      106190,
      106210,
      106212,
      106216,
      106250,
      106258,
      106260,
      106274,
      106276,
      106280,
      106306,
      106308,
      106312,
      106320,
      106334,
      106348,
      106394,
      106414,
      106418,
      106420,
      106566,
      106572,
      106610,
      106612,
      106630,
      106636,
      106648,
      106672,
      106686,
      106722,
      106724,
      106728,
      106742,
      106758,
      106764,
      106776,
      106800,
      106814,
      106848,
      106876,
      106894,
      106908,
      106936,
      106946,
      106948,
      106952,
      106960,
      106974,
      106982,
      106988,
      107032,
      107056,
      107070,
      107104,
      107132,
      107200,
      107256,
      107292,
      107320,
      107376,
      107390,
      107394,
      107396,
      107400,
      107408,
      107422,
      107424,
      107452,
      107462,
      107468,
      107480,
      107502,
      107506,
      107508,
      107544,
      107568,
      107582,
      107616,
      107644,
      107712,
      107768,
      108016,
      108060,
      108088,
      108144,
      108158,
      108256,
      108284,
      108290,
      108292,
      108296,
      108304,
      108318,
      108320,
      108348,
      108352,
      108408,
      108422,
      108428,
      108440,
      108464,
      108478,
      108494,
      108508,
      108514,
      108516,
      108520,
      108592,
      108640,
      108668,
      108736,
      108792,
      109040,
      109536,
      109680,
      109694,
      109792,
      109820,
      110016,
      110072,
      110084,
      110088,
      110096,
      110112,
      110140,
      110144,
      110200,
      110320,
      110342,
      110348,
      110360,
      110384,
      110398,
      110432,
      110460,
      110478,
      110492,
      110520,
      110532,
      110536,
      110544,
      110558,
      110658,
      110686,
      110714,
      110722,
      110724,
      110728,
      110736,
      110750,
      110752,
      110780,
      110796,
      110834,
      110836,
      110850,
      110852,
      110856,
      110864,
      110878,
      110880,
      110908,
      110912,
      110968,
      110982,
      111e3,
      111054,
      111074,
      111076,
      111080,
      111108,
      111112,
      111120,
      111134,
      111136,
      111164,
      111168,
      111224,
      111344,
      111372,
      111422,
      111456,
      111516,
      111554,
      111556,
      111560,
      111568,
      111590,
      111632,
      111646,
      111648,
      111676,
      111680,
      111736,
      111856,
      112096,
      112152,
      112224,
      112252,
      112320,
      112440,
      112514,
      112516,
      112520,
      112528,
      112542,
      112544,
      112588,
      112686,
      112718,
      112732,
      112782,
      112796,
      112824,
      112834,
      112836,
      112840,
      112848,
      112870,
      112890,
      112910,
      112924,
      112952,
      113008,
      113022,
      113026,
      113028,
      113032,
      113040,
      113054,
      113056,
      113100,
      113138,
      113140,
      113166,
      113180,
      113208,
      113264,
      113278,
      113376,
      113404,
      113416,
      113424,
      113440,
      113468,
      113472,
      113560,
      113614,
      113634,
      113636,
      113640,
      113686,
      113702,
      113708,
      113734,
      113740,
      113752,
      113778,
      113780,
      113798,
      113804,
      113816,
      113840,
      113854,
      113870,
      113890,
      113892,
      113896,
      113926,
      113932,
      113944,
      113968,
      113982,
      114016,
      114044,
      114076,
      114114,
      114116,
      114120,
      114128,
      114150,
      114170,
      114194,
      114196,
      114210,
      114212,
      114216,
      114242,
      114244,
      114248,
      114256,
      114270,
      114278,
      114306,
      114308,
      114312,
      114320,
      114334,
      114336,
      114364,
      114380,
      114420,
      114458,
      114478,
      114482,
      114484,
      114510,
      114524,
      114530,
      114532,
      114536,
      114842,
      114866,
      114868,
      114970,
      114994,
      114996,
      115042,
      115044,
      115048,
      115062,
      115130,
      115226,
      115250,
      115252,
      115278,
      115292,
      115298,
      115300,
      115304,
      115318,
      115342,
      115394,
      115396,
      115400,
      115408,
      115422,
      115430,
      115436,
      115450,
      115478,
      115494,
      115514,
      115526,
      115532,
      115570,
      115572,
      115738,
      115758,
      115762,
      115764,
      115790,
      115804,
      115810,
      115812,
      115816,
      115830,
      115854,
      115868,
      115896,
      115906,
      115912,
      115920,
      115934,
      115942,
      115948,
      115962,
      115996,
      116024,
      116080,
      116094,
      116098,
      116100,
      116104,
      116112,
      116126,
      116128,
      116156,
      116166,
      116172,
      116184,
      116206,
      116210,
      116212,
      116246,
      116262,
      116268,
      116282,
      116294,
      116300,
      116312,
      116334,
      116338,
      116340,
      116358,
      116364,
      116376,
      116400,
      116414,
      116430,
      116444,
      116450,
      116452,
      116456,
      116498,
      116500,
      116514,
      116520,
      116534,
      116546,
      116548,
      116552,
      116560,
      116574,
      116582,
      116588,
      116602,
      116654,
      116694,
      116714,
      116762,
      116782,
      116786,
      116788,
      116814,
      116828,
      116834,
      116836,
      116840,
      116854,
      116878,
      116892,
      116920,
      116930,
      116936,
      116944,
      116958,
      116966,
      116972,
      116986,
      117006,
      117048,
      117104,
      117118,
      117122,
      117124,
      117136,
      117150,
      117152,
      117180,
      117190,
      117196,
      117208,
      117230,
      117234,
      117236,
      117304,
      117360,
      117374,
      117472,
      117500,
      117506,
      117508,
      117512,
      117520,
      117536,
      117564,
      117568,
      117624,
      117638,
      117644,
      117656,
      117680,
      117694,
      117710,
      117724,
      117730,
      117732,
      117736,
      117750,
      117782,
      117798,
      117804,
      117818,
      117830,
      117848,
      117874,
      117876,
      117894,
      117936,
      117950,
      117966,
      117986,
      117988,
      117992,
      118022,
      118028,
      118040,
      118064,
      118078,
      118112,
      118140,
      118172,
      118210,
      118212,
      118216,
      118224,
      118238,
      118246,
      118266,
      118306,
      118312,
      118338,
      118352,
      118366,
      118374,
      118394,
      118402,
      118404,
      118408,
      118416,
      118430,
      118432,
      118460,
      118476,
      118514,
      118516,
      118574,
      118578,
      118580,
      118606,
      118620,
      118626,
      118628,
      118632,
      118678,
      118694,
      118700,
      118730,
      118738,
      118740,
      118830,
      118834,
      118836,
      118862,
      118876,
      118882,
      118884,
      118888,
      118902,
      118926,
      118940,
      118968,
      118978,
      118980,
      118984,
      118992,
      119006,
      119014,
      119020,
      119034,
      119068,
      119096,
      119152,
      119166,
      119170,
      119172,
      119176,
      119184,
      119198,
      119200,
      119228,
      119238,
      119244,
      119256,
      119278,
      119282,
      119284,
      119324,
      119352,
      119408,
      119422,
      119520,
      119548,
      119554,
      119556,
      119560,
      119568,
      119582,
      119584,
      119612,
      119616,
      119672,
      119686,
      119692,
      119704,
      119728,
      119742,
      119758,
      119772,
      119778,
      119780,
      119784,
      119798,
      119920,
      119934,
      120032,
      120060,
      120256,
      120312,
      120324,
      120328,
      120336,
      120352,
      120384,
      120440,
      120560,
      120582,
      120588,
      120600,
      120624,
      120638,
      120672,
      120700,
      120718,
      120732,
      120760,
      120770,
      120772,
      120776,
      120784,
      120798,
      120806,
      120812,
      120870,
      120876,
      120890,
      120902,
      120908,
      120920,
      120946,
      120948,
      120966,
      120972,
      120984,
      121008,
      121022,
      121038,
      121058,
      121060,
      121064,
      121078,
      121100,
      121112,
      121136,
      121150,
      121184,
      121212,
      121244,
      121282,
      121284,
      121288,
      121296,
      121318,
      121338,
      121356,
      121368,
      121392,
      121406,
      121440,
      121468,
      121536,
      121592,
      121656,
      121730,
      121732,
      121736,
      121744,
      121758,
      121760,
      121804,
      121842,
      121844,
      121890,
      121922,
      121924,
      121928,
      121936,
      121950,
      121958,
      121978,
      121986,
      121988,
      121992,
      122e3,
      122014,
      122016,
      122044,
      122060,
      122098,
      122100,
      122116,
      122120,
      122128,
      122142,
      122144,
      122172,
      122176,
      122232,
      122246,
      122264,
      122318,
      122338,
      122340,
      122344,
      122414,
      122418,
      122420,
      122446,
      122460,
      122466,
      122468,
      122472,
      122510,
      122524,
      122552,
      122562,
      122564,
      122568,
      122576,
      122598,
      122618,
      122646,
      122662,
      122668,
      122694,
      122700,
      122712,
      122738,
      122740,
      122762,
      122770,
      122772,
      122786,
      122788,
      122792,
      123018,
      123026,
      123028,
      123042,
      123044,
      123048,
      123062,
      123098,
      123146,
      123154,
      123156,
      123170,
      123172,
      123176,
      123190,
      123202,
      123204,
      123208,
      123216,
      123238,
      123244,
      123258,
      123290,
      123314,
      123316,
      123402,
      123410,
      123412,
      123426,
      123428,
      123432,
      123446,
      123458,
      123464,
      123472,
      123486,
      123494,
      123500,
      123514,
      123522,
      123524,
      123528,
      123536,
      123552,
      123580,
      123590,
      123596,
      123608,
      123630,
      123634,
      123636,
      123674,
      123698,
      123700,
      123740,
      123746,
      123748,
      123752,
      123834,
      123914,
      123922,
      123924,
      123938,
      123944,
      123958,
      123970,
      123976,
      123984,
      123998,
      124006,
      124012,
      124026,
      124034,
      124036,
      124048,
      124062,
      124064,
      124092,
      124102,
      124108,
      124120,
      124142,
      124146,
      124148,
      124162,
      124164,
      124168,
      124176,
      124190,
      124192,
      124220,
      124224,
      124280,
      124294,
      124300,
      124312,
      124336,
      124350,
      124366,
      124380,
      124386,
      124388,
      124392,
      124406,
      124442,
      124462,
      124466,
      124468,
      124494,
      124508,
      124514,
      124520,
      124558,
      124572,
      124600,
      124610,
      124612,
      124616,
      124624,
      124646,
      124666,
      124694,
      124710,
      124716,
      124730,
      124742,
      124748,
      124760,
      124786,
      124788,
      124818,
      124820,
      124834,
      124836,
      124840,
      124854,
      124946,
      124948,
      124962,
      124964,
      124968,
      124982,
      124994,
      124996,
      125e3,
      125008,
      125022,
      125030,
      125036,
      125050,
      125058,
      125060,
      125064,
      125072,
      125086,
      125088,
      125116,
      125126,
      125132,
      125144,
      125166,
      125170,
      125172,
      125186,
      125188,
      125192,
      125200,
      125216,
      125244,
      125248,
      125304,
      125318,
      125324,
      125336,
      125360,
      125374,
      125390,
      125404,
      125410,
      125412,
      125416,
      125430,
      125444,
      125448,
      125456,
      125472,
      125504,
      125560,
      125680,
      125702,
      125708,
      125720,
      125744,
      125758,
      125792,
      125820,
      125838,
      125852,
      125880,
      125890,
      125892,
      125896,
      125904,
      125918,
      125926,
      125932,
      125978,
      125998,
      126002,
      126004,
      126030,
      126044,
      126050,
      126052,
      126056,
      126094,
      126108,
      126136,
      126146,
      126148,
      126152,
      126160,
      126182,
      126202,
      126222,
      126236,
      126264,
      126320,
      126334,
      126338,
      126340,
      126344,
      126352,
      126366,
      126368,
      126412,
      126450,
      126452,
      126486,
      126502,
      126508,
      126522,
      126534,
      126540,
      126552,
      126574,
      126578,
      126580,
      126598,
      126604,
      126616,
      126640,
      126654,
      126670,
      126684,
      126690,
      126692,
      126696,
      126738,
      126754,
      126756,
      126760,
      126774,
      126786,
      126788,
      126792,
      126800,
      126814,
      126822,
      126828,
      126842,
      126894,
      126898,
      126900,
      126934,
      127126,
      127142,
      127148,
      127162,
      127178,
      127186,
      127188,
      127254,
      127270,
      127276,
      127290,
      127302,
      127308,
      127320,
      127342,
      127346,
      127348,
      127370,
      127378,
      127380,
      127394,
      127396,
      127400,
      127450,
      127510,
      127526,
      127532,
      127546,
      127558,
      127576,
      127598,
      127602,
      127604,
      127622,
      127628,
      127640,
      127664,
      127678,
      127694,
      127708,
      127714,
      127716,
      127720,
      127734,
      127754,
      127762,
      127764,
      127778,
      127784,
      127810,
      127812,
      127816,
      127824,
      127838,
      127846,
      127866,
      127898,
      127918,
      127922,
      127924,
      128022,
      128038,
      128044,
      128058,
      128070,
      128076,
      128088,
      128110,
      128114,
      128116,
      128134,
      128140,
      128152,
      128176,
      128190,
      128206,
      128220,
      128226,
      128228,
      128232,
      128246,
      128262,
      128268,
      128280,
      128304,
      128318,
      128352,
      128380,
      128398,
      128412,
      128440,
      128450,
      128452,
      128456,
      128464,
      128478,
      128486,
      128492,
      128506,
      128522,
      128530,
      128532,
      128546,
      128548,
      128552,
      128566,
      128578,
      128580,
      128584,
      128592,
      128606,
      128614,
      128634,
      128642,
      128644,
      128648,
      128656,
      128670,
      128672,
      128700,
      128716,
      128754,
      128756,
      128794,
      128814,
      128818,
      128820,
      128846,
      128860,
      128866,
      128868,
      128872,
      128886,
      128918,
      128934,
      128940,
      128954,
      128978,
      128980,
      129178,
      129198,
      129202,
      129204,
      129238,
      129258,
      129306,
      129326,
      129330,
      129332,
      129358,
      129372,
      129378,
      129380,
      129384,
      129398,
      129430,
      129446,
      129452,
      129466,
      129482,
      129490,
      129492,
      129562,
      129582,
      129586,
      129588,
      129614,
      129628,
      129634,
      129636,
      129640,
      129654,
      129678,
      129692,
      129720,
      129730,
      129732,
      129736,
      129744,
      129758,
      129766,
      129772,
      129814,
      129830,
      129836,
      129850,
      129862,
      129868,
      129880,
      129902,
      129906,
      129908,
      129930,
      129938,
      129940,
      129954,
      129956,
      129960,
      129974,
      130010
    ]), r.CODEWORD_TABLE = Int32Array.from([
      2627,
      1819,
      2622,
      2621,
      1813,
      1812,
      2729,
      2724,
      2723,
      2779,
      2774,
      2773,
      902,
      896,
      908,
      868,
      865,
      861,
      859,
      2511,
      873,
      871,
      1780,
      835,
      2493,
      825,
      2491,
      842,
      837,
      844,
      1764,
      1762,
      811,
      810,
      809,
      2483,
      807,
      2482,
      806,
      2480,
      815,
      814,
      813,
      812,
      2484,
      817,
      816,
      1745,
      1744,
      1742,
      1746,
      2655,
      2637,
      2635,
      2626,
      2625,
      2623,
      2628,
      1820,
      2752,
      2739,
      2737,
      2728,
      2727,
      2725,
      2730,
      2785,
      2783,
      2778,
      2777,
      2775,
      2780,
      787,
      781,
      747,
      739,
      736,
      2413,
      754,
      752,
      1719,
      692,
      689,
      681,
      2371,
      678,
      2369,
      700,
      697,
      694,
      703,
      1688,
      1686,
      642,
      638,
      2343,
      631,
      2341,
      627,
      2338,
      651,
      646,
      643,
      2345,
      654,
      652,
      1652,
      1650,
      1647,
      1654,
      601,
      599,
      2322,
      596,
      2321,
      594,
      2319,
      2317,
      611,
      610,
      608,
      606,
      2324,
      603,
      2323,
      615,
      614,
      612,
      1617,
      1616,
      1614,
      1612,
      616,
      1619,
      1618,
      2575,
      2538,
      2536,
      905,
      901,
      898,
      909,
      2509,
      2507,
      2504,
      870,
      867,
      864,
      860,
      2512,
      875,
      872,
      1781,
      2490,
      2489,
      2487,
      2485,
      1748,
      836,
      834,
      832,
      830,
      2494,
      827,
      2492,
      843,
      841,
      839,
      845,
      1765,
      1763,
      2701,
      2676,
      2674,
      2653,
      2648,
      2656,
      2634,
      2633,
      2631,
      2629,
      1821,
      2638,
      2636,
      2770,
      2763,
      2761,
      2750,
      2745,
      2753,
      2736,
      2735,
      2733,
      2731,
      1848,
      2740,
      2738,
      2786,
      2784,
      591,
      588,
      576,
      569,
      566,
      2296,
      1590,
      537,
      534,
      526,
      2276,
      522,
      2274,
      545,
      542,
      539,
      548,
      1572,
      1570,
      481,
      2245,
      466,
      2242,
      462,
      2239,
      492,
      485,
      482,
      2249,
      496,
      494,
      1534,
      1531,
      1528,
      1538,
      413,
      2196,
      406,
      2191,
      2188,
      425,
      419,
      2202,
      415,
      2199,
      432,
      430,
      427,
      1472,
      1467,
      1464,
      433,
      1476,
      1474,
      368,
      367,
      2160,
      365,
      2159,
      362,
      2157,
      2155,
      2152,
      378,
      377,
      375,
      2166,
      372,
      2165,
      369,
      2162,
      383,
      381,
      379,
      2168,
      1419,
      1418,
      1416,
      1414,
      385,
      1411,
      384,
      1423,
      1422,
      1420,
      1424,
      2461,
      802,
      2441,
      2439,
      790,
      786,
      783,
      794,
      2409,
      2406,
      2403,
      750,
      742,
      738,
      2414,
      756,
      753,
      1720,
      2367,
      2365,
      2362,
      2359,
      1663,
      693,
      691,
      684,
      2373,
      680,
      2370,
      702,
      699,
      696,
      704,
      1690,
      1687,
      2337,
      2336,
      2334,
      2332,
      1624,
      2329,
      1622,
      640,
      637,
      2344,
      634,
      2342,
      630,
      2340,
      650,
      648,
      645,
      2346,
      655,
      653,
      1653,
      1651,
      1649,
      1655,
      2612,
      2597,
      2595,
      2571,
      2568,
      2565,
      2576,
      2534,
      2529,
      2526,
      1787,
      2540,
      2537,
      907,
      904,
      900,
      910,
      2503,
      2502,
      2500,
      2498,
      1768,
      2495,
      1767,
      2510,
      2508,
      2506,
      869,
      866,
      863,
      2513,
      876,
      874,
      1782,
      2720,
      2713,
      2711,
      2697,
      2694,
      2691,
      2702,
      2672,
      2670,
      2664,
      1828,
      2678,
      2675,
      2647,
      2646,
      2644,
      2642,
      1823,
      2639,
      1822,
      2654,
      2652,
      2650,
      2657,
      2771,
      1855,
      2765,
      2762,
      1850,
      1849,
      2751,
      2749,
      2747,
      2754,
      353,
      2148,
      344,
      342,
      336,
      2142,
      332,
      2140,
      345,
      1375,
      1373,
      306,
      2130,
      299,
      2128,
      295,
      2125,
      319,
      314,
      311,
      2132,
      1354,
      1352,
      1349,
      1356,
      262,
      257,
      2101,
      253,
      2096,
      2093,
      274,
      273,
      267,
      2107,
      263,
      2104,
      280,
      278,
      275,
      1316,
      1311,
      1308,
      1320,
      1318,
      2052,
      202,
      2050,
      2044,
      2040,
      219,
      2063,
      212,
      2060,
      208,
      2055,
      224,
      221,
      2066,
      1260,
      1258,
      1252,
      231,
      1248,
      229,
      1266,
      1264,
      1261,
      1268,
      155,
      1998,
      153,
      1996,
      1994,
      1991,
      1988,
      165,
      164,
      2007,
      162,
      2006,
      159,
      2003,
      2e3,
      172,
      171,
      169,
      2012,
      166,
      2010,
      1186,
      1184,
      1182,
      1179,
      175,
      1176,
      173,
      1192,
      1191,
      1189,
      1187,
      176,
      1194,
      1193,
      2313,
      2307,
      2305,
      592,
      589,
      2294,
      2292,
      2289,
      578,
      572,
      568,
      2297,
      580,
      1591,
      2272,
      2267,
      2264,
      1547,
      538,
      536,
      529,
      2278,
      525,
      2275,
      547,
      544,
      541,
      1574,
      1571,
      2237,
      2235,
      2229,
      1493,
      2225,
      1489,
      478,
      2247,
      470,
      2244,
      465,
      2241,
      493,
      488,
      484,
      2250,
      498,
      495,
      1536,
      1533,
      1530,
      1539,
      2187,
      2186,
      2184,
      2182,
      1432,
      2179,
      1430,
      2176,
      1427,
      414,
      412,
      2197,
      409,
      2195,
      405,
      2193,
      2190,
      426,
      424,
      421,
      2203,
      418,
      2201,
      431,
      429,
      1473,
      1471,
      1469,
      1466,
      434,
      1477,
      1475,
      2478,
      2472,
      2470,
      2459,
      2457,
      2454,
      2462,
      803,
      2437,
      2432,
      2429,
      1726,
      2443,
      2440,
      792,
      789,
      785,
      2401,
      2399,
      2393,
      1702,
      2389,
      1699,
      2411,
      2408,
      2405,
      745,
      741,
      2415,
      758,
      755,
      1721,
      2358,
      2357,
      2355,
      2353,
      1661,
      2350,
      1660,
      2347,
      1657,
      2368,
      2366,
      2364,
      2361,
      1666,
      690,
      687,
      2374,
      683,
      2372,
      701,
      698,
      705,
      1691,
      1689,
      2619,
      2617,
      2610,
      2608,
      2605,
      2613,
      2593,
      2588,
      2585,
      1803,
      2599,
      2596,
      2563,
      2561,
      2555,
      1797,
      2551,
      1795,
      2573,
      2570,
      2567,
      2577,
      2525,
      2524,
      2522,
      2520,
      1786,
      2517,
      1785,
      2514,
      1783,
      2535,
      2533,
      2531,
      2528,
      1788,
      2541,
      2539,
      906,
      903,
      911,
      2721,
      1844,
      2715,
      2712,
      1838,
      1836,
      2699,
      2696,
      2693,
      2703,
      1827,
      1826,
      1824,
      2673,
      2671,
      2669,
      2666,
      1829,
      2679,
      2677,
      1858,
      1857,
      2772,
      1854,
      1853,
      1851,
      1856,
      2766,
      2764,
      143,
      1987,
      139,
      1986,
      135,
      133,
      131,
      1984,
      128,
      1983,
      125,
      1981,
      138,
      137,
      136,
      1985,
      1133,
      1132,
      1130,
      112,
      110,
      1974,
      107,
      1973,
      104,
      1971,
      1969,
      122,
      121,
      119,
      117,
      1977,
      114,
      1976,
      124,
      1115,
      1114,
      1112,
      1110,
      1117,
      1116,
      84,
      83,
      1953,
      81,
      1952,
      78,
      1950,
      1948,
      1945,
      94,
      93,
      91,
      1959,
      88,
      1958,
      85,
      1955,
      99,
      97,
      95,
      1961,
      1086,
      1085,
      1083,
      1081,
      1078,
      100,
      1090,
      1089,
      1087,
      1091,
      49,
      47,
      1917,
      44,
      1915,
      1913,
      1910,
      1907,
      59,
      1926,
      56,
      1925,
      53,
      1922,
      1919,
      66,
      64,
      1931,
      61,
      1929,
      1042,
      1040,
      1038,
      71,
      1035,
      70,
      1032,
      68,
      1048,
      1047,
      1045,
      1043,
      1050,
      1049,
      12,
      10,
      1869,
      1867,
      1864,
      1861,
      21,
      1880,
      19,
      1877,
      1874,
      1871,
      28,
      1888,
      25,
      1886,
      22,
      1883,
      982,
      980,
      977,
      974,
      32,
      30,
      991,
      989,
      987,
      984,
      34,
      995,
      994,
      992,
      2151,
      2150,
      2147,
      2146,
      2144,
      356,
      355,
      354,
      2149,
      2139,
      2138,
      2136,
      2134,
      1359,
      343,
      341,
      338,
      2143,
      335,
      2141,
      348,
      347,
      346,
      1376,
      1374,
      2124,
      2123,
      2121,
      2119,
      1326,
      2116,
      1324,
      310,
      308,
      305,
      2131,
      302,
      2129,
      298,
      2127,
      320,
      318,
      316,
      313,
      2133,
      322,
      321,
      1355,
      1353,
      1351,
      1357,
      2092,
      2091,
      2089,
      2087,
      1276,
      2084,
      1274,
      2081,
      1271,
      259,
      2102,
      256,
      2100,
      252,
      2098,
      2095,
      272,
      269,
      2108,
      266,
      2106,
      281,
      279,
      277,
      1317,
      1315,
      1313,
      1310,
      282,
      1321,
      1319,
      2039,
      2037,
      2035,
      2032,
      1203,
      2029,
      1200,
      1197,
      207,
      2053,
      205,
      2051,
      201,
      2049,
      2046,
      2043,
      220,
      218,
      2064,
      215,
      2062,
      211,
      2059,
      228,
      226,
      223,
      2069,
      1259,
      1257,
      1254,
      232,
      1251,
      230,
      1267,
      1265,
      1263,
      2316,
      2315,
      2312,
      2311,
      2309,
      2314,
      2304,
      2303,
      2301,
      2299,
      1593,
      2308,
      2306,
      590,
      2288,
      2287,
      2285,
      2283,
      1578,
      2280,
      1577,
      2295,
      2293,
      2291,
      579,
      577,
      574,
      571,
      2298,
      582,
      581,
      1592,
      2263,
      2262,
      2260,
      2258,
      1545,
      2255,
      1544,
      2252,
      1541,
      2273,
      2271,
      2269,
      2266,
      1550,
      535,
      532,
      2279,
      528,
      2277,
      546,
      543,
      549,
      1575,
      1573,
      2224,
      2222,
      2220,
      1486,
      2217,
      1485,
      2214,
      1482,
      1479,
      2238,
      2236,
      2234,
      2231,
      1496,
      2228,
      1492,
      480,
      477,
      2248,
      473,
      2246,
      469,
      2243,
      490,
      487,
      2251,
      497,
      1537,
      1535,
      1532,
      2477,
      2476,
      2474,
      2479,
      2469,
      2468,
      2466,
      2464,
      1730,
      2473,
      2471,
      2453,
      2452,
      2450,
      2448,
      1729,
      2445,
      1728,
      2460,
      2458,
      2456,
      2463,
      805,
      804,
      2428,
      2427,
      2425,
      2423,
      1725,
      2420,
      1724,
      2417,
      1722,
      2438,
      2436,
      2434,
      2431,
      1727,
      2444,
      2442,
      793,
      791,
      788,
      795,
      2388,
      2386,
      2384,
      1697,
      2381,
      1696,
      2378,
      1694,
      1692,
      2402,
      2400,
      2398,
      2395,
      1703,
      2392,
      1701,
      2412,
      2410,
      2407,
      751,
      748,
      744,
      2416,
      759,
      757,
      1807,
      2620,
      2618,
      1806,
      1805,
      2611,
      2609,
      2607,
      2614,
      1802,
      1801,
      1799,
      2594,
      2592,
      2590,
      2587,
      1804,
      2600,
      2598,
      1794,
      1793,
      1791,
      1789,
      2564,
      2562,
      2560,
      2557,
      1798,
      2554,
      1796,
      2574,
      2572,
      2569,
      2578,
      1847,
      1846,
      2722,
      1843,
      1842,
      1840,
      1845,
      2716,
      2714,
      1835,
      1834,
      1832,
      1830,
      1839,
      1837,
      2700,
      2698,
      2695,
      2704,
      1817,
      1811,
      1810,
      897,
      862,
      1777,
      829,
      826,
      838,
      1760,
      1758,
      808,
      2481,
      1741,
      1740,
      1738,
      1743,
      2624,
      1818,
      2726,
      2776,
      782,
      740,
      737,
      1715,
      686,
      679,
      695,
      1682,
      1680,
      639,
      628,
      2339,
      647,
      644,
      1645,
      1643,
      1640,
      1648,
      602,
      600,
      597,
      595,
      2320,
      593,
      2318,
      609,
      607,
      604,
      1611,
      1610,
      1608,
      1606,
      613,
      1615,
      1613,
      2328,
      926,
      924,
      892,
      886,
      899,
      857,
      850,
      2505,
      1778,
      824,
      823,
      821,
      819,
      2488,
      818,
      2486,
      833,
      831,
      828,
      840,
      1761,
      1759,
      2649,
      2632,
      2630,
      2746,
      2734,
      2732,
      2782,
      2781,
      570,
      567,
      1587,
      531,
      527,
      523,
      540,
      1566,
      1564,
      476,
      467,
      463,
      2240,
      486,
      483,
      1524,
      1521,
      1518,
      1529,
      411,
      403,
      2192,
      399,
      2189,
      423,
      416,
      1462,
      1457,
      1454,
      428,
      1468,
      1465,
      2210,
      366,
      363,
      2158,
      360,
      2156,
      357,
      2153,
      376,
      373,
      370,
      2163,
      1410,
      1409,
      1407,
      1405,
      382,
      1402,
      380,
      1417,
      1415,
      1412,
      1421,
      2175,
      2174,
      777,
      774,
      771,
      784,
      732,
      725,
      722,
      2404,
      743,
      1716,
      676,
      674,
      668,
      2363,
      665,
      2360,
      685,
      1684,
      1681,
      626,
      624,
      622,
      2335,
      620,
      2333,
      617,
      2330,
      641,
      635,
      649,
      1646,
      1644,
      1642,
      2566,
      928,
      925,
      2530,
      2527,
      894,
      891,
      888,
      2501,
      2499,
      2496,
      858,
      856,
      854,
      851,
      1779,
      2692,
      2668,
      2665,
      2645,
      2643,
      2640,
      2651,
      2768,
      2759,
      2757,
      2744,
      2743,
      2741,
      2748,
      352,
      1382,
      340,
      337,
      333,
      1371,
      1369,
      307,
      300,
      296,
      2126,
      315,
      312,
      1347,
      1342,
      1350,
      261,
      258,
      250,
      2097,
      246,
      2094,
      271,
      268,
      264,
      1306,
      1301,
      1298,
      276,
      1312,
      1309,
      2115,
      203,
      2048,
      195,
      2045,
      191,
      2041,
      213,
      209,
      2056,
      1246,
      1244,
      1238,
      225,
      1234,
      222,
      1256,
      1253,
      1249,
      1262,
      2080,
      2079,
      154,
      1997,
      150,
      1995,
      147,
      1992,
      1989,
      163,
      160,
      2004,
      156,
      2001,
      1175,
      1174,
      1172,
      1170,
      1167,
      170,
      1164,
      167,
      1185,
      1183,
      1180,
      1177,
      174,
      1190,
      1188,
      2025,
      2024,
      2022,
      587,
      586,
      564,
      559,
      556,
      2290,
      573,
      1588,
      520,
      518,
      512,
      2268,
      508,
      2265,
      530,
      1568,
      1565,
      461,
      457,
      2233,
      450,
      2230,
      446,
      2226,
      479,
      471,
      489,
      1526,
      1523,
      1520,
      397,
      395,
      2185,
      392,
      2183,
      389,
      2180,
      2177,
      410,
      2194,
      402,
      422,
      1463,
      1461,
      1459,
      1456,
      1470,
      2455,
      799,
      2433,
      2430,
      779,
      776,
      773,
      2397,
      2394,
      2390,
      734,
      728,
      724,
      746,
      1717,
      2356,
      2354,
      2351,
      2348,
      1658,
      677,
      675,
      673,
      670,
      667,
      688,
      1685,
      1683,
      2606,
      2589,
      2586,
      2559,
      2556,
      2552,
      927,
      2523,
      2521,
      2518,
      2515,
      1784,
      2532,
      895,
      893,
      890,
      2718,
      2709,
      2707,
      2689,
      2687,
      2684,
      2663,
      2662,
      2660,
      2658,
      1825,
      2667,
      2769,
      1852,
      2760,
      2758,
      142,
      141,
      1139,
      1138,
      134,
      132,
      129,
      126,
      1982,
      1129,
      1128,
      1126,
      1131,
      113,
      111,
      108,
      105,
      1972,
      101,
      1970,
      120,
      118,
      115,
      1109,
      1108,
      1106,
      1104,
      123,
      1113,
      1111,
      82,
      79,
      1951,
      75,
      1949,
      72,
      1946,
      92,
      89,
      86,
      1956,
      1077,
      1076,
      1074,
      1072,
      98,
      1069,
      96,
      1084,
      1082,
      1079,
      1088,
      1968,
      1967,
      48,
      45,
      1916,
      42,
      1914,
      39,
      1911,
      1908,
      60,
      57,
      54,
      1923,
      50,
      1920,
      1031,
      1030,
      1028,
      1026,
      67,
      1023,
      65,
      1020,
      62,
      1041,
      1039,
      1036,
      1033,
      69,
      1046,
      1044,
      1944,
      1943,
      1941,
      11,
      9,
      1868,
      7,
      1865,
      1862,
      1859,
      20,
      1878,
      16,
      1875,
      13,
      1872,
      970,
      968,
      966,
      963,
      29,
      960,
      26,
      23,
      983,
      981,
      978,
      975,
      33,
      971,
      31,
      990,
      988,
      985,
      1906,
      1904,
      1902,
      993,
      351,
      2145,
      1383,
      331,
      330,
      328,
      326,
      2137,
      323,
      2135,
      339,
      1372,
      1370,
      294,
      293,
      291,
      289,
      2122,
      286,
      2120,
      283,
      2117,
      309,
      303,
      317,
      1348,
      1346,
      1344,
      245,
      244,
      242,
      2090,
      239,
      2088,
      236,
      2085,
      2082,
      260,
      2099,
      249,
      270,
      1307,
      1305,
      1303,
      1300,
      1314,
      189,
      2038,
      186,
      2036,
      183,
      2033,
      2030,
      2026,
      206,
      198,
      2047,
      194,
      216,
      1247,
      1245,
      1243,
      1240,
      227,
      1237,
      1255,
      2310,
      2302,
      2300,
      2286,
      2284,
      2281,
      565,
      563,
      561,
      558,
      575,
      1589,
      2261,
      2259,
      2256,
      2253,
      1542,
      521,
      519,
      517,
      514,
      2270,
      511,
      533,
      1569,
      1567,
      2223,
      2221,
      2218,
      2215,
      1483,
      2211,
      1480,
      459,
      456,
      453,
      2232,
      449,
      474,
      491,
      1527,
      1525,
      1522,
      2475,
      2467,
      2465,
      2451,
      2449,
      2446,
      801,
      800,
      2426,
      2424,
      2421,
      2418,
      1723,
      2435,
      780,
      778,
      775,
      2387,
      2385,
      2382,
      2379,
      1695,
      2375,
      1693,
      2396,
      735,
      733,
      730,
      727,
      749,
      1718,
      2616,
      2615,
      2604,
      2603,
      2601,
      2584,
      2583,
      2581,
      2579,
      1800,
      2591,
      2550,
      2549,
      2547,
      2545,
      1792,
      2542,
      1790,
      2558,
      929,
      2719,
      1841,
      2710,
      2708,
      1833,
      1831,
      2690,
      2688,
      2686,
      1815,
      1809,
      1808,
      1774,
      1756,
      1754,
      1737,
      1736,
      1734,
      1739,
      1816,
      1711,
      1676,
      1674,
      633,
      629,
      1638,
      1636,
      1633,
      1641,
      598,
      1605,
      1604,
      1602,
      1600,
      605,
      1609,
      1607,
      2327,
      887,
      853,
      1775,
      822,
      820,
      1757,
      1755,
      1584,
      524,
      1560,
      1558,
      468,
      464,
      1514,
      1511,
      1508,
      1519,
      408,
      404,
      400,
      1452,
      1447,
      1444,
      417,
      1458,
      1455,
      2208,
      364,
      361,
      358,
      2154,
      1401,
      1400,
      1398,
      1396,
      374,
      1393,
      371,
      1408,
      1406,
      1403,
      1413,
      2173,
      2172,
      772,
      726,
      723,
      1712,
      672,
      669,
      666,
      682,
      1678,
      1675,
      625,
      623,
      621,
      618,
      2331,
      636,
      632,
      1639,
      1637,
      1635,
      920,
      918,
      884,
      880,
      889,
      849,
      848,
      847,
      846,
      2497,
      855,
      852,
      1776,
      2641,
      2742,
      2787,
      1380,
      334,
      1367,
      1365,
      301,
      297,
      1340,
      1338,
      1335,
      1343,
      255,
      251,
      247,
      1296,
      1291,
      1288,
      265,
      1302,
      1299,
      2113,
      204,
      196,
      192,
      2042,
      1232,
      1230,
      1224,
      214,
      1220,
      210,
      1242,
      1239,
      1235,
      1250,
      2077,
      2075,
      151,
      148,
      1993,
      144,
      1990,
      1163,
      1162,
      1160,
      1158,
      1155,
      161,
      1152,
      157,
      1173,
      1171,
      1168,
      1165,
      168,
      1181,
      1178,
      2021,
      2020,
      2018,
      2023,
      585,
      560,
      557,
      1585,
      516,
      509,
      1562,
      1559,
      458,
      447,
      2227,
      472,
      1516,
      1513,
      1510,
      398,
      396,
      393,
      390,
      2181,
      386,
      2178,
      407,
      1453,
      1451,
      1449,
      1446,
      420,
      1460,
      2209,
      769,
      764,
      720,
      712,
      2391,
      729,
      1713,
      664,
      663,
      661,
      659,
      2352,
      656,
      2349,
      671,
      1679,
      1677,
      2553,
      922,
      919,
      2519,
      2516,
      885,
      883,
      881,
      2685,
      2661,
      2659,
      2767,
      2756,
      2755,
      140,
      1137,
      1136,
      130,
      127,
      1125,
      1124,
      1122,
      1127,
      109,
      106,
      102,
      1103,
      1102,
      1100,
      1098,
      116,
      1107,
      1105,
      1980,
      80,
      76,
      73,
      1947,
      1068,
      1067,
      1065,
      1063,
      90,
      1060,
      87,
      1075,
      1073,
      1070,
      1080,
      1966,
      1965,
      46,
      43,
      40,
      1912,
      36,
      1909,
      1019,
      1018,
      1016,
      1014,
      58,
      1011,
      55,
      1008,
      51,
      1029,
      1027,
      1024,
      1021,
      63,
      1037,
      1034,
      1940,
      1939,
      1937,
      1942,
      8,
      1866,
      4,
      1863,
      1,
      1860,
      956,
      954,
      952,
      949,
      946,
      17,
      14,
      969,
      967,
      964,
      961,
      27,
      957,
      24,
      979,
      976,
      972,
      1901,
      1900,
      1898,
      1896,
      986,
      1905,
      1903,
      350,
      349,
      1381,
      329,
      327,
      324,
      1368,
      1366,
      292,
      290,
      287,
      284,
      2118,
      304,
      1341,
      1339,
      1337,
      1345,
      243,
      240,
      237,
      2086,
      233,
      2083,
      254,
      1297,
      1295,
      1293,
      1290,
      1304,
      2114,
      190,
      187,
      184,
      2034,
      180,
      2031,
      177,
      2027,
      199,
      1233,
      1231,
      1229,
      1226,
      217,
      1223,
      1241,
      2078,
      2076,
      584,
      555,
      554,
      552,
      550,
      2282,
      562,
      1586,
      507,
      506,
      504,
      502,
      2257,
      499,
      2254,
      515,
      1563,
      1561,
      445,
      443,
      441,
      2219,
      438,
      2216,
      435,
      2212,
      460,
      454,
      475,
      1517,
      1515,
      1512,
      2447,
      798,
      797,
      2422,
      2419,
      770,
      768,
      766,
      2383,
      2380,
      2376,
      721,
      719,
      717,
      714,
      731,
      1714,
      2602,
      2582,
      2580,
      2548,
      2546,
      2543,
      923,
      921,
      2717,
      2706,
      2705,
      2683,
      2682,
      2680,
      1771,
      1752,
      1750,
      1733,
      1732,
      1731,
      1735,
      1814,
      1707,
      1670,
      1668,
      1631,
      1629,
      1626,
      1634,
      1599,
      1598,
      1596,
      1594,
      1603,
      1601,
      2326,
      1772,
      1753,
      1751,
      1581,
      1554,
      1552,
      1504,
      1501,
      1498,
      1509,
      1442,
      1437,
      1434,
      401,
      1448,
      1445,
      2206,
      1392,
      1391,
      1389,
      1387,
      1384,
      359,
      1399,
      1397,
      1394,
      1404,
      2171,
      2170,
      1708,
      1672,
      1669,
      619,
      1632,
      1630,
      1628,
      1773,
      1378,
      1363,
      1361,
      1333,
      1328,
      1336,
      1286,
      1281,
      1278,
      248,
      1292,
      1289,
      2111,
      1218,
      1216,
      1210,
      197,
      1206,
      193,
      1228,
      1225,
      1221,
      1236,
      2073,
      2071,
      1151,
      1150,
      1148,
      1146,
      152,
      1143,
      149,
      1140,
      145,
      1161,
      1159,
      1156,
      1153,
      158,
      1169,
      1166,
      2017,
      2016,
      2014,
      2019,
      1582,
      510,
      1556,
      1553,
      452,
      448,
      1506,
      1500,
      394,
      391,
      387,
      1443,
      1441,
      1439,
      1436,
      1450,
      2207,
      765,
      716,
      713,
      1709,
      662,
      660,
      657,
      1673,
      1671,
      916,
      914,
      879,
      878,
      877,
      882,
      1135,
      1134,
      1121,
      1120,
      1118,
      1123,
      1097,
      1096,
      1094,
      1092,
      103,
      1101,
      1099,
      1979,
      1059,
      1058,
      1056,
      1054,
      77,
      1051,
      74,
      1066,
      1064,
      1061,
      1071,
      1964,
      1963,
      1007,
      1006,
      1004,
      1002,
      999,
      41,
      996,
      37,
      1017,
      1015,
      1012,
      1009,
      52,
      1025,
      1022,
      1936,
      1935,
      1933,
      1938,
      942,
      940,
      938,
      935,
      932,
      5,
      2,
      955,
      953,
      950,
      947,
      18,
      943,
      15,
      965,
      962,
      958,
      1895,
      1894,
      1892,
      1890,
      973,
      1899,
      1897,
      1379,
      325,
      1364,
      1362,
      288,
      285,
      1334,
      1332,
      1330,
      241,
      238,
      234,
      1287,
      1285,
      1283,
      1280,
      1294,
      2112,
      188,
      185,
      181,
      178,
      2028,
      1219,
      1217,
      1215,
      1212,
      200,
      1209,
      1227,
      2074,
      2072,
      583,
      553,
      551,
      1583,
      505,
      503,
      500,
      513,
      1557,
      1555,
      444,
      442,
      439,
      436,
      2213,
      455,
      451,
      1507,
      1505,
      1502,
      796,
      763,
      762,
      760,
      767,
      711,
      710,
      708,
      706,
      2377,
      718,
      715,
      1710,
      2544,
      917,
      915,
      2681,
      1627,
      1597,
      1595,
      2325,
      1769,
      1749,
      1747,
      1499,
      1438,
      1435,
      2204,
      1390,
      1388,
      1385,
      1395,
      2169,
      2167,
      1704,
      1665,
      1662,
      1625,
      1623,
      1620,
      1770,
      1329,
      1282,
      1279,
      2109,
      1214,
      1207,
      1222,
      2068,
      2065,
      1149,
      1147,
      1144,
      1141,
      146,
      1157,
      1154,
      2013,
      2011,
      2008,
      2015,
      1579,
      1549,
      1546,
      1495,
      1487,
      1433,
      1431,
      1428,
      1425,
      388,
      1440,
      2205,
      1705,
      658,
      1667,
      1664,
      1119,
      1095,
      1093,
      1978,
      1057,
      1055,
      1052,
      1062,
      1962,
      1960,
      1005,
      1003,
      1e3,
      997,
      38,
      1013,
      1010,
      1932,
      1930,
      1927,
      1934,
      941,
      939,
      936,
      933,
      6,
      930,
      3,
      951,
      948,
      944,
      1889,
      1887,
      1884,
      1881,
      959,
      1893,
      1891,
      35,
      1377,
      1360,
      1358,
      1327,
      1325,
      1322,
      1331,
      1277,
      1275,
      1272,
      1269,
      235,
      1284,
      2110,
      1205,
      1204,
      1201,
      1198,
      182,
      1195,
      179,
      1213,
      2070,
      2067,
      1580,
      501,
      1551,
      1548,
      440,
      437,
      1497,
      1494,
      1490,
      1503,
      761,
      709,
      707,
      1706,
      913,
      912,
      2198,
      1386,
      2164,
      2161,
      1621,
      1766,
      2103,
      1208,
      2058,
      2054,
      1145,
      1142,
      2005,
      2002,
      1999,
      2009,
      1488,
      1429,
      1426,
      2200,
      1698,
      1659,
      1656,
      1975,
      1053,
      1957,
      1954,
      1001,
      998,
      1924,
      1921,
      1918,
      1928,
      937,
      934,
      931,
      1879,
      1876,
      1873,
      1870,
      945,
      1885,
      1882,
      1323,
      1273,
      1270,
      2105,
      1202,
      1199,
      1196,
      1211,
      2061,
      2057,
      1576,
      1543,
      1540,
      1484,
      1481,
      1478,
      1491,
      1700
    ]), r;
  }()
), qi = (
  /** @class */
  function() {
    function r(e, t) {
      this.bits = e, this.points = t;
    }
    return r.prototype.getBits = function() {
      return this.bits;
    }, r.prototype.getPoints = function() {
      return this.points;
    }, r;
  }()
), Qi = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Ji = (
  /** @class */
  function() {
    function r() {
    }
    return r.detectMultiple = function(e, t, n) {
      var i = e.getBlackMatrix(), a = r.detect(n, i);
      return a.length || (i = i.clone(), i.rotate180(), a = r.detect(n, i)), new qi(i, a);
    }, r.detect = function(e, t) {
      for (var n, i, a = new Array(), o = 0, f = 0, u = !1; o < t.getHeight(); ) {
        var s = r.findVertices(t, o, f);
        if (s[0] == null && s[3] == null) {
          if (!u)
            break;
          u = !1, f = 0;
          try {
            for (var c = (n = void 0, Qi(a)), h = c.next(); !h.done; h = c.next()) {
              var l = h.value;
              l[1] != null && (o = Math.trunc(Math.max(o, l[1].getY()))), l[3] != null && (o = Math.max(o, Math.trunc(l[3].getY())));
            }
          } catch (d) {
            n = { error: d };
          } finally {
            try {
              h && !h.done && (i = c.return) && i.call(c);
            } finally {
              if (n) throw n.error;
            }
          }
          o += r.ROW_STEP;
          continue;
        }
        if (u = !0, a.push(s), !e)
          break;
        s[2] != null ? (f = Math.trunc(s[2].getX()), o = Math.trunc(s[2].getY())) : (f = Math.trunc(s[4].getX()), o = Math.trunc(s[4].getY()));
      }
      return a;
    }, r.findVertices = function(e, t, n) {
      var i = e.getHeight(), a = e.getWidth(), o = new Array(8);
      return r.copyToResult(o, r.findRowsWithPattern(e, i, a, t, n, r.START_PATTERN), r.INDEXES_START_PATTERN), o[4] != null && (n = Math.trunc(o[4].getX()), t = Math.trunc(o[4].getY())), r.copyToResult(o, r.findRowsWithPattern(e, i, a, t, n, r.STOP_PATTERN), r.INDEXES_STOP_PATTERN), o;
    }, r.copyToResult = function(e, t, n) {
      for (var i = 0; i < n.length; i++)
        e[n[i]] = t[i];
    }, r.findRowsWithPattern = function(e, t, n, i, a, o) {
      for (var f = new Array(4), u = !1, s = new Int32Array(o.length); i < t; i += r.ROW_STEP) {
        var c = r.findGuardPattern(e, a, i, n, !1, o, s);
        if (c != null) {
          for (; i > 0; ) {
            var h = r.findGuardPattern(e, a, --i, n, !1, o, s);
            if (h != null)
              c = h;
            else {
              i++;
              break;
            }
          }
          f[0] = new T(c[0], i), f[1] = new T(c[1], i), u = !0;
          break;
        }
      }
      var l = i + 1;
      if (u) {
        for (var d = 0, h = Int32Array.from([Math.trunc(f[0].getX()), Math.trunc(f[1].getX())]); l < t; l++) {
          var c = r.findGuardPattern(e, h[0], l, n, !1, o, s);
          if (c != null && Math.abs(h[0] - c[0]) < r.MAX_PATTERN_DRIFT && Math.abs(h[1] - c[1]) < r.MAX_PATTERN_DRIFT)
            h = c, d = 0;
          else {
            if (d > r.SKIPPED_ROW_COUNT_MAX)
              break;
            d++;
          }
        }
        l -= d + 1, f[2] = new T(h[0], l), f[3] = new T(h[1], l);
      }
      return l - i < r.BARCODE_MIN_HEIGHT && re.fill(f, null), f;
    }, r.findGuardPattern = function(e, t, n, i, a, o, f) {
      re.fillWithin(f, 0, f.length, 0);
      for (var u = t, s = 0; e.get(u, n) && u > 0 && s++ < r.MAX_PIXEL_DRIFT; )
        u--;
      for (var c = u, h = 0, l = o.length, d = a; c < i; c++) {
        var v = e.get(c, n);
        if (v !== d)
          f[h]++;
        else {
          if (h === l - 1) {
            if (r.patternMatchVariance(f, o, r.MAX_INDIVIDUAL_VARIANCE) < r.MAX_AVG_VARIANCE)
              return new Int32Array([u, c]);
            u += f[0] + f[1], Y.arraycopy(f, 2, f, 0, h - 1), f[h - 1] = 0, f[h] = 0, h--;
          } else
            h++;
          f[h] = 1, d = !d;
        }
      }
      return h === l - 1 && r.patternMatchVariance(f, o, r.MAX_INDIVIDUAL_VARIANCE) < r.MAX_AVG_VARIANCE ? new Int32Array([u, c - 1]) : null;
    }, r.patternMatchVariance = function(e, t, n) {
      for (var i = e.length, a = 0, o = 0, f = 0; f < i; f++)
        a += e[f], o += t[f];
      if (a < o)
        return (
          /*Float.POSITIVE_INFINITY*/
          1 / 0
        );
      var u = a / o;
      n *= u;
      for (var s = 0, c = 0; c < i; c++) {
        var h = e[c], l = t[c] * u, d = h > l ? h - l : l - h;
        if (d > n)
          return (
            /*Float.POSITIVE_INFINITY*/
            1 / 0
          );
        s += d;
      }
      return s / a;
    }, r.INDEXES_START_PATTERN = Int32Array.from([0, 4, 1, 5]), r.INDEXES_STOP_PATTERN = Int32Array.from([6, 2, 7, 3]), r.MAX_AVG_VARIANCE = 0.42, r.MAX_INDIVIDUAL_VARIANCE = 0.8, r.START_PATTERN = Int32Array.from([8, 1, 1, 1, 1, 1, 1, 3]), r.STOP_PATTERN = Int32Array.from([7, 1, 1, 3, 1, 1, 1, 2, 1]), r.MAX_PIXEL_DRIFT = 3, r.MAX_PATTERN_DRIFT = 5, r.SKIPPED_ROW_COUNT_MAX = 25, r.ROW_STEP = 5, r.BARCODE_MIN_HEIGHT = 10, r;
  }()
), ea = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, ke = (
  /** @class */
  function() {
    function r(e, t) {
      if (t.length === 0)
        throw new N();
      this.field = e;
      var n = (
        /*int*/
        t.length
      );
      if (n > 1 && t[0] === 0) {
        for (var i = (
          /*int*/
          1
        ); i < n && t[i] === 0; )
          i++;
        i === n ? this.coefficients = new Int32Array([0]) : (this.coefficients = new Int32Array(n - i), Y.arraycopy(t, i, this.coefficients, 0, this.coefficients.length));
      } else
        this.coefficients = t;
    }
    return r.prototype.getCoefficients = function() {
      return this.coefficients;
    }, r.prototype.getDegree = function() {
      return this.coefficients.length - 1;
    }, r.prototype.isZero = function() {
      return this.coefficients[0] === 0;
    }, r.prototype.getCoefficient = function(e) {
      return this.coefficients[this.coefficients.length - 1 - e];
    }, r.prototype.evaluateAt = function(e) {
      var t, n;
      if (e === 0)
        return this.getCoefficient(0);
      if (e === 1) {
        var i = (
          /*int*/
          0
        );
        try {
          for (var a = ea(this.coefficients), o = a.next(); !o.done; o = a.next()) {
            var f = o.value;
            i = this.field.add(i, f);
          }
        } catch (h) {
          t = { error: h };
        } finally {
          try {
            o && !o.done && (n = a.return) && n.call(a);
          } finally {
            if (t) throw t.error;
          }
        }
        return i;
      }
      for (var u = (
        /*int*/
        this.coefficients[0]
      ), s = (
        /*int*/
        this.coefficients.length
      ), c = 1; c < s; c++)
        u = this.field.add(this.field.multiply(e, u), this.coefficients[c]);
      return u;
    }, r.prototype.add = function(e) {
      if (!this.field.equals(e.field))
        throw new N("ModulusPolys do not have same ModulusGF field");
      if (this.isZero())
        return e;
      if (e.isZero())
        return this;
      var t = this.coefficients, n = e.coefficients;
      if (t.length > n.length) {
        var i = t;
        t = n, n = i;
      }
      var a = new Int32Array(n.length), o = (
        /*int*/
        n.length - t.length
      );
      Y.arraycopy(n, 0, a, 0, o);
      for (var f = o; f < n.length; f++)
        a[f] = this.field.add(t[f - o], n[f]);
      return new r(this.field, a);
    }, r.prototype.subtract = function(e) {
      if (!this.field.equals(e.field))
        throw new N("ModulusPolys do not have same ModulusGF field");
      return e.isZero() ? this : this.add(e.negative());
    }, r.prototype.multiply = function(e) {
      return e instanceof r ? this.multiplyOther(e) : this.multiplyScalar(e);
    }, r.prototype.multiplyOther = function(e) {
      if (!this.field.equals(e.field))
        throw new N("ModulusPolys do not have same ModulusGF field");
      if (this.isZero() || e.isZero())
        return new r(this.field, new Int32Array([0]));
      for (var t = this.coefficients, n = (
        /*int*/
        t.length
      ), i = e.coefficients, a = (
        /*int*/
        i.length
      ), o = new Int32Array(n + a - 1), f = 0; f < n; f++)
        for (var u = (
          /*int*/
          t[f]
        ), s = 0; s < a; s++)
          o[f + s] = this.field.add(o[f + s], this.field.multiply(u, i[s]));
      return new r(this.field, o);
    }, r.prototype.negative = function() {
      for (var e = (
        /*int*/
        this.coefficients.length
      ), t = new Int32Array(e), n = 0; n < e; n++)
        t[n] = this.field.subtract(0, this.coefficients[n]);
      return new r(this.field, t);
    }, r.prototype.multiplyScalar = function(e) {
      if (e === 0)
        return new r(this.field, new Int32Array([0]));
      if (e === 1)
        return this;
      for (var t = (
        /*int*/
        this.coefficients.length
      ), n = new Int32Array(t), i = 0; i < t; i++)
        n[i] = this.field.multiply(this.coefficients[i], e);
      return new r(this.field, n);
    }, r.prototype.multiplyByMonomial = function(e, t) {
      if (e < 0)
        throw new N();
      if (t === 0)
        return new r(this.field, new Int32Array([0]));
      for (var n = (
        /*int*/
        this.coefficients.length
      ), i = new Int32Array(n + e), a = 0; a < n; a++)
        i[a] = this.field.multiply(this.coefficients[a], t);
      return new r(this.field, i);
    }, r.prototype.toString = function() {
      for (var e = new M(
        /*8 * this.getDegree()*/
      ), t = this.getDegree(); t >= 0; t--) {
        var n = (
          /*int*/
          this.getCoefficient(t)
        );
        n !== 0 && (n < 0 ? (e.append(" - "), n = -n) : e.length() > 0 && e.append(" + "), (t === 0 || n !== 1) && e.append(n), t !== 0 && (t === 1 ? e.append("x") : (e.append("x^"), e.append(t))));
      }
      return e.toString();
    }, r;
  }()
), ta = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.add = function(e, t) {
      return (e + t) % this.modulus;
    }, r.prototype.subtract = function(e, t) {
      return (this.modulus + e - t) % this.modulus;
    }, r.prototype.exp = function(e) {
      return this.expTable[e];
    }, r.prototype.log = function(e) {
      if (e === 0)
        throw new N();
      return this.logTable[e];
    }, r.prototype.inverse = function(e) {
      if (e === 0)
        throw new Tr();
      return this.expTable[this.modulus - this.logTable[e] - 1];
    }, r.prototype.multiply = function(e, t) {
      return e === 0 || t === 0 ? 0 : this.expTable[(this.logTable[e] + this.logTable[t]) % (this.modulus - 1)];
    }, r.prototype.getSize = function() {
      return this.modulus;
    }, r.prototype.equals = function(e) {
      return e === this;
    }, r;
  }()
), ra = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), na = (
  /** @class */
  function(r) {
    ra(e, r);
    function e(t, n) {
      var i = r.call(this) || this;
      i.modulus = t, i.expTable = new Int32Array(t), i.logTable = new Int32Array(t);
      for (var a = (
        /*int*/
        1
      ), o = 0; o < t; o++)
        i.expTable[o] = a, a = a * n % t;
      for (var o = 0; o < t - 1; o++)
        i.logTable[i.expTable[o]] = o;
      return i.zero = new ke(i, new Int32Array([0])), i.one = new ke(i, new Int32Array([1])), i;
    }
    return e.prototype.getZero = function() {
      return this.zero;
    }, e.prototype.getOne = function() {
      return this.one;
    }, e.prototype.buildMonomial = function(t, n) {
      if (t < 0)
        throw new N();
      if (n === 0)
        return this.zero;
      var i = new Int32Array(t + 1);
      return i[0] = n, new ke(this, i);
    }, e.PDF417_GF = new e(k.NUMBER_OF_CODEWORDS, 3), e;
  }(ta)
), ia = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, aa = (
  /** @class */
  function() {
    function r() {
      this.field = na.PDF417_GF;
    }
    return r.prototype.decode = function(e, t, n) {
      for (var i, a, o = new ke(this.field, e), f = new Int32Array(t), u = !1, s = t; s > 0; s--) {
        var c = o.evaluateAt(this.field.exp(s));
        f[t - s] = c, c !== 0 && (u = !0);
      }
      if (!u)
        return 0;
      var h = this.field.getOne();
      if (n != null)
        try {
          for (var l = ia(n), d = l.next(); !d.done; d = l.next()) {
            var v = d.value, x = this.field.exp(e.length - 1 - v), g = new ke(this.field, new Int32Array([this.field.subtract(0, x), 1]));
            h = h.multiply(g);
          }
        } catch (D) {
          i = { error: D };
        } finally {
          try {
            d && !d.done && (a = l.return) && a.call(l);
          } finally {
            if (i) throw i.error;
          }
        }
      for (var _ = new ke(this.field, f), y = this.runEuclideanAlgorithm(this.field.buildMonomial(t, 1), _, t), A = y[0], E = y[1], I = this.findErrorLocations(A), S = this.findErrorMagnitudes(E, A, I), s = 0; s < I.length; s++) {
        var m = e.length - 1 - this.field.log(I[s]);
        if (m < 0)
          throw oe.getChecksumInstance();
        e[m] = this.field.subtract(e[m], S[s]);
      }
      return I.length;
    }, r.prototype.runEuclideanAlgorithm = function(e, t, n) {
      if (e.getDegree() < t.getDegree()) {
        var i = e;
        e = t, t = i;
      }
      for (var a = e, o = t, f = this.field.getZero(), u = this.field.getOne(); o.getDegree() >= Math.round(n / 2); ) {
        var s = a, c = f;
        if (a = o, f = u, a.isZero())
          throw oe.getChecksumInstance();
        o = s;
        for (var h = this.field.getZero(), l = a.getCoefficient(a.getDegree()), d = this.field.inverse(l); o.getDegree() >= a.getDegree() && !o.isZero(); ) {
          var v = o.getDegree() - a.getDegree(), x = this.field.multiply(o.getCoefficient(o.getDegree()), d);
          h = h.add(this.field.buildMonomial(v, x)), o = o.subtract(a.multiplyByMonomial(v, x));
        }
        u = h.multiply(f).subtract(c).negative();
      }
      var g = u.getCoefficient(0);
      if (g === 0)
        throw oe.getChecksumInstance();
      var _ = this.field.inverse(g), y = u.multiply(_), A = o.multiply(_);
      return [y, A];
    }, r.prototype.findErrorLocations = function(e) {
      for (var t = e.getDegree(), n = new Int32Array(t), i = 0, a = 1; a < this.field.getSize() && i < t; a++)
        e.evaluateAt(a) === 0 && (n[i] = this.field.inverse(a), i++);
      if (i !== t)
        throw oe.getChecksumInstance();
      return n;
    }, r.prototype.findErrorMagnitudes = function(e, t, n) {
      for (var i = t.getDegree(), a = new Int32Array(i), o = 1; o <= i; o++)
        a[i - o] = this.field.multiply(o, t.getCoefficient(o));
      for (var f = new ke(this.field, a), u = n.length, s = new Int32Array(u), o = 0; o < u; o++) {
        var c = this.field.inverse(n[o]), h = this.field.subtract(0, e.evaluateAt(c)), l = this.field.inverse(f.evaluateAt(c));
        s[o] = this.field.multiply(h, l);
      }
      return s;
    }, r;
  }()
), Mt = (
  /** @class */
  function() {
    function r(e, t, n, i, a) {
      e instanceof r ? this.constructor_2(e) : this.constructor_1(e, t, n, i, a);
    }
    return r.prototype.constructor_1 = function(e, t, n, i, a) {
      var o = t == null || n == null, f = i == null || a == null;
      if (o && f)
        throw new C();
      o ? (t = new T(0, i.getY()), n = new T(0, a.getY())) : f && (i = new T(e.getWidth() - 1, t.getY()), a = new T(e.getWidth() - 1, n.getY())), this.image = e, this.topLeft = t, this.bottomLeft = n, this.topRight = i, this.bottomRight = a, this.minX = Math.trunc(Math.min(t.getX(), n.getX())), this.maxX = Math.trunc(Math.max(i.getX(), a.getX())), this.minY = Math.trunc(Math.min(t.getY(), i.getY())), this.maxY = Math.trunc(Math.max(n.getY(), a.getY()));
    }, r.prototype.constructor_2 = function(e) {
      this.image = e.image, this.topLeft = e.getTopLeft(), this.bottomLeft = e.getBottomLeft(), this.topRight = e.getTopRight(), this.bottomRight = e.getBottomRight(), this.minX = e.getMinX(), this.maxX = e.getMaxX(), this.minY = e.getMinY(), this.maxY = e.getMaxY();
    }, r.merge = function(e, t) {
      return e == null ? t : t == null ? e : new r(e.image, e.topLeft, e.bottomLeft, t.topRight, t.bottomRight);
    }, r.prototype.addMissingRows = function(e, t, n) {
      var i = this.topLeft, a = this.bottomLeft, o = this.topRight, f = this.bottomRight;
      if (e > 0) {
        var u = n ? this.topLeft : this.topRight, s = Math.trunc(u.getY() - e);
        s < 0 && (s = 0);
        var c = new T(u.getX(), s);
        n ? i = c : o = c;
      }
      if (t > 0) {
        var h = n ? this.bottomLeft : this.bottomRight, l = Math.trunc(h.getY() + t);
        l >= this.image.getHeight() && (l = this.image.getHeight() - 1);
        var d = new T(h.getX(), l);
        n ? a = d : f = d;
      }
      return new r(this.image, i, a, o, f);
    }, r.prototype.getMinX = function() {
      return this.minX;
    }, r.prototype.getMaxX = function() {
      return this.maxX;
    }, r.prototype.getMinY = function() {
      return this.minY;
    }, r.prototype.getMaxY = function() {
      return this.maxY;
    }, r.prototype.getTopLeft = function() {
      return this.topLeft;
    }, r.prototype.getTopRight = function() {
      return this.topRight;
    }, r.prototype.getBottomLeft = function() {
      return this.bottomLeft;
    }, r.prototype.getBottomRight = function() {
      return this.bottomRight;
    }, r;
  }()
), oa = (
  /** @class */
  function() {
    function r(e, t, n, i) {
      this.columnCount = e, this.errorCorrectionLevel = i, this.rowCountUpperPart = t, this.rowCountLowerPart = n, this.rowCount = t + n;
    }
    return r.prototype.getColumnCount = function() {
      return this.columnCount;
    }, r.prototype.getErrorCorrectionLevel = function() {
      return this.errorCorrectionLevel;
    }, r.prototype.getRowCount = function() {
      return this.rowCount;
    }, r.prototype.getRowCountUpperPart = function() {
      return this.rowCountUpperPart;
    }, r.prototype.getRowCountLowerPart = function() {
      return this.rowCountLowerPart;
    }, r;
  }()
), Wt = (
  /** @class */
  function() {
    function r() {
      this.buffer = "";
    }
    return r.form = function(e, t) {
      var n = -1;
      function i(o, f, u, s, c, h) {
        if (o === "%%")
          return "%";
        if (t[++n] !== void 0) {
          o = s ? parseInt(s.substr(1)) : void 0;
          var l = c ? parseInt(c.substr(1)) : void 0, d;
          switch (h) {
            case "s":
              d = t[n];
              break;
            case "c":
              d = t[n][0];
              break;
            case "f":
              d = parseFloat(t[n]).toFixed(o);
              break;
            case "p":
              d = parseFloat(t[n]).toPrecision(o);
              break;
            case "e":
              d = parseFloat(t[n]).toExponential(o);
              break;
            case "x":
              d = parseInt(t[n]).toString(l || 16);
              break;
            case "d":
              d = parseFloat(parseInt(t[n], l || 10).toPrecision(o)).toFixed(0);
              break;
          }
          d = typeof d == "object" ? JSON.stringify(d) : (+d).toString(l);
          for (var v = parseInt(u), x = u && u[0] + "" == "0" ? "0" : " "; d.length < v; )
            d = f !== void 0 ? d + x : x + d;
          return d;
        }
      }
      var a = /%(-)?(0?[0-9]+)?([.][0-9]+)?([#][0-9]+)?([scfpexd%])/g;
      return e.replace(a, i);
    }, r.prototype.format = function(e) {
      for (var t = [], n = 1; n < arguments.length; n++)
        t[n - 1] = arguments[n];
      this.buffer += r.form(e, t);
    }, r.prototype.toString = function() {
      return this.buffer;
    }, r;
  }()
), fa = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Fr = (
  /** @class */
  function() {
    function r(e) {
      this.boundingBox = new Mt(e), this.codewords = new Array(e.getMaxY() - e.getMinY() + 1);
    }
    return r.prototype.getCodewordNearby = function(e) {
      var t = this.getCodeword(e);
      if (t != null)
        return t;
      for (var n = 1; n < r.MAX_NEARBY_DISTANCE; n++) {
        var i = this.imageRowToCodewordIndex(e) - n;
        if (i >= 0 && (t = this.codewords[i], t != null) || (i = this.imageRowToCodewordIndex(e) + n, i < this.codewords.length && (t = this.codewords[i], t != null)))
          return t;
      }
      return null;
    }, r.prototype.imageRowToCodewordIndex = function(e) {
      return e - this.boundingBox.getMinY();
    }, r.prototype.setCodeword = function(e, t) {
      this.codewords[this.imageRowToCodewordIndex(e)] = t;
    }, r.prototype.getCodeword = function(e) {
      return this.codewords[this.imageRowToCodewordIndex(e)];
    }, r.prototype.getBoundingBox = function() {
      return this.boundingBox;
    }, r.prototype.getCodewords = function() {
      return this.codewords;
    }, r.prototype.toString = function() {
      var e, t, n = new Wt(), i = 0;
      try {
        for (var a = fa(this.codewords), o = a.next(); !o.done; o = a.next()) {
          var f = o.value;
          if (f == null) {
            n.format("%3d:    |   %n", i++);
            continue;
          }
          n.format("%3d: %3d|%3d%n", i++, f.getRowNumber(), f.getValue());
        }
      } catch (u) {
        e = { error: u };
      } finally {
        try {
          o && !o.done && (t = a.return) && t.call(a);
        } finally {
          if (e) throw e.error;
        }
      }
      return n.toString();
    }, r.MAX_NEARBY_DISTANCE = 5, r;
  }()
), ua = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, sa = function(r, e) {
  var t = typeof Symbol == "function" && r[Symbol.iterator];
  if (!t) return r;
  var n = t.call(r), i, a = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = n.next()).done; ) a.push(i.value);
  } catch (f) {
    o = { error: f };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (o) throw o.error;
    }
  }
  return a;
}, Ke = (
  /** @class */
  function() {
    function r() {
      this.values = /* @__PURE__ */ new Map();
    }
    return r.prototype.setValue = function(e) {
      e = Math.trunc(e);
      var t = this.values.get(e);
      t == null && (t = 0), t++, this.values.set(e, t);
    }, r.prototype.getValue = function() {
      var e, t, n = -1, i = new Array(), a = function(h, l) {
        var d = {
          getKey: function() {
            return h;
          },
          getValue: function() {
            return l;
          }
        };
        d.getValue() > n ? (n = d.getValue(), i = [], i.push(d.getKey())) : d.getValue() === n && i.push(d.getKey());
      };
      try {
        for (var o = ua(this.values.entries()), f = o.next(); !f.done; f = o.next()) {
          var u = sa(f.value, 2), s = u[0], c = u[1];
          a(s, c);
        }
      } catch (h) {
        e = { error: h };
      } finally {
        try {
          f && !f.done && (t = o.return) && t.call(o);
        } finally {
          if (e) throw e.error;
        }
      }
      return k.toIntArray(i);
    }, r.prototype.getConfidence = function(e) {
      return this.values.get(e);
    }, r;
  }()
), ca = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), wt = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, dr = (
  /** @class */
  function(r) {
    ca(e, r);
    function e(t, n) {
      var i = r.call(this, t) || this;
      return i._isLeft = n, i;
    }
    return e.prototype.setRowNumbers = function() {
      var t, n;
      try {
        for (var i = wt(this.getCodewords()), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          o != null && o.setRowNumberAsRowIndicatorColumn();
        }
      } catch (f) {
        t = { error: f };
      } finally {
        try {
          a && !a.done && (n = i.return) && n.call(i);
        } finally {
          if (t) throw t.error;
        }
      }
    }, e.prototype.adjustCompleteIndicatorColumnRowNumbers = function(t) {
      var n = this.getCodewords();
      this.setRowNumbers(), this.removeIncorrectCodewords(n, t);
      for (var i = this.getBoundingBox(), a = this._isLeft ? i.getTopLeft() : i.getTopRight(), o = this._isLeft ? i.getBottomLeft() : i.getBottomRight(), f = this.imageRowToCodewordIndex(Math.trunc(a.getY())), u = this.imageRowToCodewordIndex(Math.trunc(o.getY())), s = -1, c = 1, h = 0, l = f; l < u; l++)
        if (n[l] != null) {
          var d = n[l], v = d.getRowNumber() - s;
          if (v === 0)
            h++;
          else if (v === 1)
            c = Math.max(c, h), h = 1, s = d.getRowNumber();
          else if (v < 0 || d.getRowNumber() >= t.getRowCount() || v > l)
            n[l] = null;
          else {
            var x = void 0;
            c > 2 ? x = (c - 2) * v : x = v;
            for (var g = x >= l, _ = 1; _ <= x && !g; _++)
              g = n[l - _] != null;
            g ? n[l] = null : (s = d.getRowNumber(), h = 1);
          }
        }
    }, e.prototype.getRowHeights = function() {
      var t, n, i = this.getBarcodeMetadata();
      if (i == null)
        return null;
      this.adjustIncompleteIndicatorColumnRowNumbers(i);
      var a = new Int32Array(i.getRowCount());
      try {
        for (var o = wt(this.getCodewords()), f = o.next(); !f.done; f = o.next()) {
          var u = f.value;
          if (u != null) {
            var s = u.getRowNumber();
            if (s >= a.length)
              continue;
            a[s]++;
          }
        }
      } catch (c) {
        t = { error: c };
      } finally {
        try {
          f && !f.done && (n = o.return) && n.call(o);
        } finally {
          if (t) throw t.error;
        }
      }
      return a;
    }, e.prototype.adjustIncompleteIndicatorColumnRowNumbers = function(t) {
      for (var n = this.getBoundingBox(), i = this._isLeft ? n.getTopLeft() : n.getTopRight(), a = this._isLeft ? n.getBottomLeft() : n.getBottomRight(), o = this.imageRowToCodewordIndex(Math.trunc(i.getY())), f = this.imageRowToCodewordIndex(Math.trunc(a.getY())), u = this.getCodewords(), s = -1, c = o; c < f; c++)
        if (u[c] != null) {
          var h = u[c];
          h.setRowNumberAsRowIndicatorColumn();
          var l = h.getRowNumber() - s;
          l === 0 || (l === 1 ? s = h.getRowNumber() : h.getRowNumber() >= t.getRowCount() ? u[c] = null : s = h.getRowNumber());
        }
    }, e.prototype.getBarcodeMetadata = function() {
      var t, n, i = this.getCodewords(), a = new Ke(), o = new Ke(), f = new Ke(), u = new Ke();
      try {
        for (var s = wt(i), c = s.next(); !c.done; c = s.next()) {
          var h = c.value;
          if (h != null) {
            h.setRowNumberAsRowIndicatorColumn();
            var l = h.getValue() % 30, d = h.getRowNumber();
            switch (this._isLeft || (d += 2), d % 3) {
              case 0:
                o.setValue(l * 3 + 1);
                break;
              case 1:
                u.setValue(l / 3), f.setValue(l % 3);
                break;
              case 2:
                a.setValue(l + 1);
                break;
            }
          }
        }
      } catch (x) {
        t = { error: x };
      } finally {
        try {
          c && !c.done && (n = s.return) && n.call(s);
        } finally {
          if (t) throw t.error;
        }
      }
      if (a.getValue().length === 0 || o.getValue().length === 0 || f.getValue().length === 0 || u.getValue().length === 0 || a.getValue()[0] < 1 || o.getValue()[0] + f.getValue()[0] < k.MIN_ROWS_IN_BARCODE || o.getValue()[0] + f.getValue()[0] > k.MAX_ROWS_IN_BARCODE)
        return null;
      var v = new oa(a.getValue()[0], o.getValue()[0], f.getValue()[0], u.getValue()[0]);
      return this.removeIncorrectCodewords(i, v), v;
    }, e.prototype.removeIncorrectCodewords = function(t, n) {
      for (var i = 0; i < t.length; i++) {
        var a = t[i];
        if (t[i] != null) {
          var o = a.getValue() % 30, f = a.getRowNumber();
          if (f > n.getRowCount()) {
            t[i] = null;
            continue;
          }
          switch (this._isLeft || (f += 2), f % 3) {
            case 0:
              o * 3 + 1 !== n.getRowCountUpperPart() && (t[i] = null);
              break;
            case 1:
              (Math.trunc(o / 3) !== n.getErrorCorrectionLevel() || o % 3 !== n.getRowCountLowerPart()) && (t[i] = null);
              break;
            case 2:
              o + 1 !== n.getColumnCount() && (t[i] = null);
              break;
          }
        }
      }
    }, e.prototype.isLeft = function() {
      return this._isLeft;
    }, e.prototype.toString = function() {
      return "IsLeft: " + this._isLeft + `
` + r.prototype.toString.call(this);
    }, e;
  }(Fr)
), ha = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, la = (
  /** @class */
  function() {
    function r(e, t) {
      this.ADJUST_ROW_NUMBER_SKIP = 2, this.barcodeMetadata = e, this.barcodeColumnCount = e.getColumnCount(), this.boundingBox = t, this.detectionResultColumns = new Array(this.barcodeColumnCount + 2);
    }
    return r.prototype.getDetectionResultColumns = function() {
      this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[0]), this.adjustIndicatorColumnRowNumbers(this.detectionResultColumns[this.barcodeColumnCount + 1]);
      var e = k.MAX_CODEWORDS_IN_BARCODE, t;
      do
        t = e, e = this.adjustRowNumbersAndGetCount();
      while (e > 0 && e < t);
      return this.detectionResultColumns;
    }, r.prototype.adjustIndicatorColumnRowNumbers = function(e) {
      e != null && e.adjustCompleteIndicatorColumnRowNumbers(this.barcodeMetadata);
    }, r.prototype.adjustRowNumbersAndGetCount = function() {
      var e = this.adjustRowNumbersByRow();
      if (e === 0)
        return 0;
      for (var t = 1; t < this.barcodeColumnCount + 1; t++)
        for (var n = this.detectionResultColumns[t].getCodewords(), i = 0; i < n.length; i++)
          n[i] != null && (n[i].hasValidRowNumber() || this.adjustRowNumbers(t, i, n));
      return e;
    }, r.prototype.adjustRowNumbersByRow = function() {
      this.adjustRowNumbersFromBothRI();
      var e = this.adjustRowNumbersFromLRI();
      return e + this.adjustRowNumbersFromRRI();
    }, r.prototype.adjustRowNumbersFromBothRI = function() {
      if (!(this.detectionResultColumns[0] == null || this.detectionResultColumns[this.barcodeColumnCount + 1] == null)) {
        for (var e = this.detectionResultColumns[0].getCodewords(), t = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords(), n = 0; n < e.length; n++)
          if (e[n] != null && t[n] != null && e[n].getRowNumber() === t[n].getRowNumber())
            for (var i = 1; i <= this.barcodeColumnCount; i++) {
              var a = this.detectionResultColumns[i].getCodewords()[n];
              a != null && (a.setRowNumber(e[n].getRowNumber()), a.hasValidRowNumber() || (this.detectionResultColumns[i].getCodewords()[n] = null));
            }
      }
    }, r.prototype.adjustRowNumbersFromRRI = function() {
      if (this.detectionResultColumns[this.barcodeColumnCount + 1] == null)
        return 0;
      for (var e = 0, t = this.detectionResultColumns[this.barcodeColumnCount + 1].getCodewords(), n = 0; n < t.length; n++)
        if (t[n] != null)
          for (var i = t[n].getRowNumber(), a = 0, o = this.barcodeColumnCount + 1; o > 0 && a < this.ADJUST_ROW_NUMBER_SKIP; o--) {
            var f = this.detectionResultColumns[o].getCodewords()[n];
            f != null && (a = r.adjustRowNumberIfValid(i, a, f), f.hasValidRowNumber() || e++);
          }
      return e;
    }, r.prototype.adjustRowNumbersFromLRI = function() {
      if (this.detectionResultColumns[0] == null)
        return 0;
      for (var e = 0, t = this.detectionResultColumns[0].getCodewords(), n = 0; n < t.length; n++)
        if (t[n] != null)
          for (var i = t[n].getRowNumber(), a = 0, o = 1; o < this.barcodeColumnCount + 1 && a < this.ADJUST_ROW_NUMBER_SKIP; o++) {
            var f = this.detectionResultColumns[o].getCodewords()[n];
            f != null && (a = r.adjustRowNumberIfValid(i, a, f), f.hasValidRowNumber() || e++);
          }
      return e;
    }, r.adjustRowNumberIfValid = function(e, t, n) {
      return n == null || n.hasValidRowNumber() || (n.isValidRowNumber(e) ? (n.setRowNumber(e), t = 0) : ++t), t;
    }, r.prototype.adjustRowNumbers = function(e, t, n) {
      var i, a;
      if (this.detectionResultColumns[e - 1] != null) {
        var o = n[t], f = this.detectionResultColumns[e - 1].getCodewords(), u = f;
        this.detectionResultColumns[e + 1] != null && (u = this.detectionResultColumns[e + 1].getCodewords());
        var s = new Array(14);
        s[2] = f[t], s[3] = u[t], t > 0 && (s[0] = n[t - 1], s[4] = f[t - 1], s[5] = u[t - 1]), t > 1 && (s[8] = n[t - 2], s[10] = f[t - 2], s[11] = u[t - 2]), t < n.length - 1 && (s[1] = n[t + 1], s[6] = f[t + 1], s[7] = u[t + 1]), t < n.length - 2 && (s[9] = n[t + 2], s[12] = f[t + 2], s[13] = u[t + 2]);
        try {
          for (var c = ha(s), h = c.next(); !h.done; h = c.next()) {
            var l = h.value;
            if (r.adjustRowNumber(o, l))
              return;
          }
        } catch (d) {
          i = { error: d };
        } finally {
          try {
            h && !h.done && (a = c.return) && a.call(c);
          } finally {
            if (i) throw i.error;
          }
        }
      }
    }, r.adjustRowNumber = function(e, t) {
      return t == null ? !1 : t.hasValidRowNumber() && t.getBucket() === e.getBucket() ? (e.setRowNumber(t.getRowNumber()), !0) : !1;
    }, r.prototype.getBarcodeColumnCount = function() {
      return this.barcodeColumnCount;
    }, r.prototype.getBarcodeRowCount = function() {
      return this.barcodeMetadata.getRowCount();
    }, r.prototype.getBarcodeECLevel = function() {
      return this.barcodeMetadata.getErrorCorrectionLevel();
    }, r.prototype.setBoundingBox = function(e) {
      this.boundingBox = e;
    }, r.prototype.getBoundingBox = function() {
      return this.boundingBox;
    }, r.prototype.setDetectionResultColumn = function(e, t) {
      this.detectionResultColumns[e] = t;
    }, r.prototype.getDetectionResultColumn = function(e) {
      return this.detectionResultColumns[e];
    }, r.prototype.toString = function() {
      var e = this.detectionResultColumns[0];
      e == null && (e = this.detectionResultColumns[this.barcodeColumnCount + 1]);
      for (var t = new Wt(), n = 0; n < e.getCodewords().length; n++) {
        t.format("CW %3d:", n);
        for (var i = 0; i < this.barcodeColumnCount + 2; i++) {
          if (this.detectionResultColumns[i] == null) {
            t.format("    |   ");
            continue;
          }
          var a = this.detectionResultColumns[i].getCodewords()[n];
          if (a == null) {
            t.format("    |   ");
            continue;
          }
          t.format(" %3d|%3d", a.getRowNumber(), a.getValue());
        }
        t.format("%n");
      }
      return t.toString();
    }, r;
  }()
), da = (
  /** @class */
  function() {
    function r(e, t, n, i) {
      this.rowNumber = r.BARCODE_ROW_UNKNOWN, this.startX = Math.trunc(e), this.endX = Math.trunc(t), this.bucket = Math.trunc(n), this.value = Math.trunc(i);
    }
    return r.prototype.hasValidRowNumber = function() {
      return this.isValidRowNumber(this.rowNumber);
    }, r.prototype.isValidRowNumber = function(e) {
      return e !== r.BARCODE_ROW_UNKNOWN && this.bucket === e % 3 * 3;
    }, r.prototype.setRowNumberAsRowIndicatorColumn = function() {
      this.rowNumber = Math.trunc(Math.trunc(this.value / 30) * 3 + Math.trunc(this.bucket / 3));
    }, r.prototype.getWidth = function() {
      return this.endX - this.startX;
    }, r.prototype.getStartX = function() {
      return this.startX;
    }, r.prototype.getEndX = function() {
      return this.endX;
    }, r.prototype.getBucket = function() {
      return this.bucket;
    }, r.prototype.getValue = function() {
      return this.value;
    }, r.prototype.getRowNumber = function() {
      return this.rowNumber;
    }, r.prototype.setRowNumber = function(e) {
      this.rowNumber = e;
    }, r.prototype.toString = function() {
      return this.rowNumber + "|" + this.value;
    }, r.BARCODE_ROW_UNKNOWN = -1, r;
  }()
), va = (
  /** @class */
  function() {
    function r() {
    }
    return r.initialize = function() {
      for (var e = 0; e < k.SYMBOL_TABLE.length; e++)
        for (var t = k.SYMBOL_TABLE[e], n = t & 1, i = 0; i < k.BARS_IN_MODULE; i++) {
          for (var a = 0; (t & 1) === n; )
            a += 1, t >>= 1;
          n = t & 1, r.RATIOS_TABLE[e] || (r.RATIOS_TABLE[e] = new Array(k.BARS_IN_MODULE)), r.RATIOS_TABLE[e][k.BARS_IN_MODULE - i - 1] = Math.fround(a / k.MODULES_IN_CODEWORD);
        }
      this.bSymbolTableReady = !0;
    }, r.getDecodedValue = function(e) {
      var t = r.getDecodedCodewordValue(r.sampleBitCounts(e));
      return t !== -1 ? t : r.getClosestDecodedValue(e);
    }, r.sampleBitCounts = function(e) {
      for (var t = U.sum(e), n = new Int32Array(k.BARS_IN_MODULE), i = 0, a = 0, o = 0; o < k.MODULES_IN_CODEWORD; o++) {
        var f = t / (2 * k.MODULES_IN_CODEWORD) + o * t / k.MODULES_IN_CODEWORD;
        a + e[i] <= f && (a += e[i], i++), n[i]++;
      }
      return n;
    }, r.getDecodedCodewordValue = function(e) {
      var t = r.getBitValue(e);
      return k.getCodeword(t) === -1 ? -1 : t;
    }, r.getBitValue = function(e) {
      for (var t = (
        /*long*/
        0
      ), n = 0; n < e.length; n++)
        for (var i = 0; i < e[n]; i++)
          t = t << 1 | (n % 2 === 0 ? 1 : 0);
      return Math.trunc(t);
    }, r.getClosestDecodedValue = function(e) {
      var t = U.sum(e), n = new Array(k.BARS_IN_MODULE);
      if (t > 1)
        for (var i = 0; i < n.length; i++)
          n[i] = Math.fround(e[i] / t);
      var a = Tt.MAX_VALUE, o = -1;
      this.bSymbolTableReady || r.initialize();
      for (var f = 0; f < r.RATIOS_TABLE.length; f++) {
        for (var u = 0, s = r.RATIOS_TABLE[f], c = 0; c < k.BARS_IN_MODULE; c++) {
          var h = Math.fround(s[c] - n[c]);
          if (u += Math.fround(h * h), u >= a)
            break;
        }
        u < a && (a = u, o = k.SYMBOL_TABLE[f]);
      }
      return o;
    }, r.bSymbolTableReady = !1, r.RATIOS_TABLE = new Array(k.SYMBOL_TABLE.length).map(function(e) {
      return new Array(k.BARS_IN_MODULE);
    }), r;
  }()
), pa = (
  /** @class */
  function() {
    function r() {
      this.segmentCount = -1, this.fileSize = -1, this.timestamp = -1, this.checksum = -1;
    }
    return r.prototype.getSegmentIndex = function() {
      return this.segmentIndex;
    }, r.prototype.setSegmentIndex = function(e) {
      this.segmentIndex = e;
    }, r.prototype.getFileId = function() {
      return this.fileId;
    }, r.prototype.setFileId = function(e) {
      this.fileId = e;
    }, r.prototype.getOptionalData = function() {
      return this.optionalData;
    }, r.prototype.setOptionalData = function(e) {
      this.optionalData = e;
    }, r.prototype.isLastSegment = function() {
      return this.lastSegment;
    }, r.prototype.setLastSegment = function(e) {
      this.lastSegment = e;
    }, r.prototype.getSegmentCount = function() {
      return this.segmentCount;
    }, r.prototype.setSegmentCount = function(e) {
      this.segmentCount = e;
    }, r.prototype.getSender = function() {
      return this.sender || null;
    }, r.prototype.setSender = function(e) {
      this.sender = e;
    }, r.prototype.getAddressee = function() {
      return this.addressee || null;
    }, r.prototype.setAddressee = function(e) {
      this.addressee = e;
    }, r.prototype.getFileName = function() {
      return this.fileName;
    }, r.prototype.setFileName = function(e) {
      this.fileName = e;
    }, r.prototype.getFileSize = function() {
      return this.fileSize;
    }, r.prototype.setFileSize = function(e) {
      this.fileSize = e;
    }, r.prototype.getChecksum = function() {
      return this.checksum;
    }, r.prototype.setChecksum = function(e) {
      this.checksum = e;
    }, r.prototype.getTimestamp = function() {
      return this.timestamp;
    }, r.prototype.setTimestamp = function(e) {
      this.timestamp = e;
    }, r;
  }()
), vr = (
  /** @class */
  function() {
    function r() {
    }
    return r.parseLong = function(e, t) {
      return t === void 0 && (t = void 0), parseInt(e, t);
    }, r;
  }()
), xa = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), ga = (
  /** @class */
  function(r) {
    xa(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.kind = "NullPointerException", e;
  }(ye)
), ya = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.writeBytes = function(e) {
      this.writeBytesOffset(e, 0, e.length);
    }, r.prototype.writeBytesOffset = function(e, t, n) {
      if (e == null)
        throw new ga();
      if (t < 0 || t > e.length || n < 0 || t + n > e.length || t + n < 0)
        throw new Ut();
      if (n === 0)
        return;
      for (var i = 0; i < n; i++)
        this.write(e[t + i]);
    }, r.prototype.flush = function() {
    }, r.prototype.close = function() {
    }, r;
  }()
), _a = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), wa = (
  /** @class */
  function(r) {
    _a(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e;
  }(ye)
), Aa = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Ea = (
  /** @class */
  function(r) {
    Aa(e, r);
    function e(t) {
      t === void 0 && (t = 32);
      var n = r.call(this) || this;
      if (n.count = 0, t < 0)
        throw new N("Negative initial size: " + t);
      return n.buf = new Uint8Array(t), n;
    }
    return e.prototype.ensureCapacity = function(t) {
      t - this.buf.length > 0 && this.grow(t);
    }, e.prototype.grow = function(t) {
      var n = this.buf.length, i = n << 1;
      if (i - t < 0 && (i = t), i < 0) {
        if (t < 0)
          throw new wa();
        i = B.MAX_VALUE;
      }
      this.buf = re.copyOfUint8Array(this.buf, i);
    }, e.prototype.write = function(t) {
      this.ensureCapacity(this.count + 1), this.buf[this.count] = /*(byte)*/
      t, this.count += 1;
    }, e.prototype.writeBytesOffset = function(t, n, i) {
      if (n < 0 || n > t.length || i < 0 || n + i - t.length > 0)
        throw new Ut();
      this.ensureCapacity(this.count + i), Y.arraycopy(t, n, this.buf, this.count, i), this.count += i;
    }, e.prototype.writeTo = function(t) {
      t.writeBytesOffset(this.buf, 0, this.count);
    }, e.prototype.reset = function() {
      this.count = 0;
    }, e.prototype.toByteArray = function() {
      return re.copyOfUint8Array(this.buf, this.count);
    }, e.prototype.size = function() {
      return this.count;
    }, e.prototype.toString = function(t) {
      return t ? typeof t == "string" ? this.toString_string(t) : this.toString_number(t) : this.toString_void();
    }, e.prototype.toString_void = function() {
      return new String(
        this.buf
        /*, 0, this.count*/
      ).toString();
    }, e.prototype.toString_string = function(t) {
      return new String(
        this.buf
        /*, 0, this.count, charsetName*/
      ).toString();
    }, e.prototype.toString_number = function(t) {
      return new String(
        this.buf
        /*, hibyte, 0, this.count*/
      ).toString();
    }, e.prototype.close = function() {
    }, e;
  }(ya)
), z;
(function(r) {
  r[r.ALPHA = 0] = "ALPHA", r[r.LOWER = 1] = "LOWER", r[r.MIXED = 2] = "MIXED", r[r.PUNCT = 3] = "PUNCT", r[r.ALPHA_SHIFT = 4] = "ALPHA_SHIFT", r[r.PUNCT_SHIFT = 5] = "PUNCT_SHIFT";
})(z || (z = {}));
function Lr() {
  if (typeof window < "u")
    return window.BigInt || null;
  if (typeof global < "u")
    return global.BigInt || null;
  if (typeof self < "u")
    return self.BigInt || null;
  throw new Error("Can't search globals for BigInt!");
}
var tt;
function Re(r) {
  if (typeof tt > "u" && (tt = Lr()), tt === null)
    throw new Error("BigInt is not supported!");
  return tt(r);
}
function Ca() {
  var r = [];
  r[0] = Re(1);
  var e = Re(900);
  r[1] = e;
  for (var t = 2; t < 16; t++)
    r[t] = r[t - 1] * e;
  return r;
}
var Ia = (
  /** @class */
  function() {
    function r() {
    }
    return r.decode = function(e, t) {
      var n = new M(""), i = te.ISO8859_1;
      n.enableDecoding(i);
      for (var a = 1, o = e[a++], f = new pa(); a < e[0]; ) {
        switch (o) {
          case r.TEXT_COMPACTION_MODE_LATCH:
            a = r.textCompaction(e, a, n);
            break;
          case r.BYTE_COMPACTION_MODE_LATCH:
          case r.BYTE_COMPACTION_MODE_LATCH_6:
            a = r.byteCompaction(o, e, i, a, n);
            break;
          case r.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
            n.append(
              /*(char)*/
              e[a++]
            );
            break;
          case r.NUMERIC_COMPACTION_MODE_LATCH:
            a = r.numericCompaction(e, a, n);
            break;
          case r.ECI_CHARSET:
            te.getCharacterSetECIByValue(e[a++]);
            break;
          case r.ECI_GENERAL_PURPOSE:
            a += 2;
            break;
          case r.ECI_USER_DEFINED:
            a++;
            break;
          case r.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
            a = r.decodeMacroBlock(e, a, f);
            break;
          case r.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
          case r.MACRO_PDF417_TERMINATOR:
            throw new O();
          default:
            a--, a = r.textCompaction(e, a, n);
            break;
        }
        if (a < e.length)
          o = e[a++];
        else
          throw O.getFormatInstance();
      }
      if (n.length() === 0)
        throw O.getFormatInstance();
      var u = new ht(null, n.toString(), null, t);
      return u.setOther(f), u;
    }, r.decodeMacroBlock = function(e, t, n) {
      if (t + r.NUMBER_OF_SEQUENCE_CODEWORDS > e[0])
        throw O.getFormatInstance();
      for (var i = new Int32Array(r.NUMBER_OF_SEQUENCE_CODEWORDS), a = 0; a < r.NUMBER_OF_SEQUENCE_CODEWORDS; a++, t++)
        i[a] = e[t];
      n.setSegmentIndex(B.parseInt(r.decodeBase900toBase10(i, r.NUMBER_OF_SEQUENCE_CODEWORDS)));
      var o = new M();
      t = r.textCompaction(e, t, o), n.setFileId(o.toString());
      var f = -1;
      for (e[t] === r.BEGIN_MACRO_PDF417_OPTIONAL_FIELD && (f = t + 1); t < e[0]; )
        switch (e[t]) {
          case r.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
            switch (t++, e[t]) {
              case r.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME:
                var u = new M();
                t = r.textCompaction(e, t + 1, u), n.setFileName(u.toString());
                break;
              case r.MACRO_PDF417_OPTIONAL_FIELD_SENDER:
                var s = new M();
                t = r.textCompaction(e, t + 1, s), n.setSender(s.toString());
                break;
              case r.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE:
                var c = new M();
                t = r.textCompaction(e, t + 1, c), n.setAddressee(c.toString());
                break;
              case r.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT:
                var h = new M();
                t = r.numericCompaction(e, t + 1, h), n.setSegmentCount(B.parseInt(h.toString()));
                break;
              case r.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP:
                var l = new M();
                t = r.numericCompaction(e, t + 1, l), n.setTimestamp(vr.parseLong(l.toString()));
                break;
              case r.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM:
                var d = new M();
                t = r.numericCompaction(e, t + 1, d), n.setChecksum(B.parseInt(d.toString()));
                break;
              case r.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE:
                var v = new M();
                t = r.numericCompaction(e, t + 1, v), n.setFileSize(vr.parseLong(v.toString()));
                break;
              default:
                throw O.getFormatInstance();
            }
            break;
          case r.MACRO_PDF417_TERMINATOR:
            t++, n.setLastSegment(!0);
            break;
          default:
            throw O.getFormatInstance();
        }
      if (f !== -1) {
        var x = t - f;
        n.isLastSegment() && x--, n.setOptionalData(re.copyOfRange(e, f, f + x));
      }
      return t;
    }, r.textCompaction = function(e, t, n) {
      for (var i = new Int32Array((e[0] - t) * 2), a = new Int32Array((e[0] - t) * 2), o = 0, f = !1; t < e[0] && !f; ) {
        var u = e[t++];
        if (u < r.TEXT_COMPACTION_MODE_LATCH)
          i[o] = u / 30, i[o + 1] = u % 30, o += 2;
        else
          switch (u) {
            case r.TEXT_COMPACTION_MODE_LATCH:
              i[o++] = r.TEXT_COMPACTION_MODE_LATCH;
              break;
            case r.BYTE_COMPACTION_MODE_LATCH:
            case r.BYTE_COMPACTION_MODE_LATCH_6:
            case r.NUMERIC_COMPACTION_MODE_LATCH:
            case r.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
            case r.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
            case r.MACRO_PDF417_TERMINATOR:
              t--, f = !0;
              break;
            case r.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
              i[o] = r.MODE_SHIFT_TO_BYTE_COMPACTION_MODE, u = e[t++], a[o] = u, o++;
              break;
          }
      }
      return r.decodeTextCompaction(i, a, o, n), t;
    }, r.decodeTextCompaction = function(e, t, n, i) {
      for (var a = z.ALPHA, o = z.ALPHA, f = 0; f < n; ) {
        var u = e[f], s = (
          /*char*/
          ""
        );
        switch (a) {
          case z.ALPHA:
            if (u < 26)
              s = /*(char)('A' + subModeCh) */
              String.fromCharCode(65 + u);
            else
              switch (u) {
                case 26:
                  s = " ";
                  break;
                case r.LL:
                  a = z.LOWER;
                  break;
                case r.ML:
                  a = z.MIXED;
                  break;
                case r.PS:
                  o = a, a = z.PUNCT_SHIFT;
                  break;
                case r.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                  i.append(
                    /*(char)*/
                    t[f]
                  );
                  break;
                case r.TEXT_COMPACTION_MODE_LATCH:
                  a = z.ALPHA;
                  break;
              }
            break;
          case z.LOWER:
            if (u < 26)
              s = /*(char)('a' + subModeCh)*/
              String.fromCharCode(97 + u);
            else
              switch (u) {
                case 26:
                  s = " ";
                  break;
                case r.AS:
                  o = a, a = z.ALPHA_SHIFT;
                  break;
                case r.ML:
                  a = z.MIXED;
                  break;
                case r.PS:
                  o = a, a = z.PUNCT_SHIFT;
                  break;
                case r.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                  i.append(
                    /*(char)*/
                    t[f]
                  );
                  break;
                case r.TEXT_COMPACTION_MODE_LATCH:
                  a = z.ALPHA;
                  break;
              }
            break;
          case z.MIXED:
            if (u < r.PL)
              s = r.MIXED_CHARS[u];
            else
              switch (u) {
                case r.PL:
                  a = z.PUNCT;
                  break;
                case 26:
                  s = " ";
                  break;
                case r.LL:
                  a = z.LOWER;
                  break;
                case r.AL:
                  a = z.ALPHA;
                  break;
                case r.PS:
                  o = a, a = z.PUNCT_SHIFT;
                  break;
                case r.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                  i.append(
                    /*(char)*/
                    t[f]
                  );
                  break;
                case r.TEXT_COMPACTION_MODE_LATCH:
                  a = z.ALPHA;
                  break;
              }
            break;
          case z.PUNCT:
            if (u < r.PAL)
              s = r.PUNCT_CHARS[u];
            else
              switch (u) {
                case r.PAL:
                  a = z.ALPHA;
                  break;
                case r.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                  i.append(
                    /*(char)*/
                    t[f]
                  );
                  break;
                case r.TEXT_COMPACTION_MODE_LATCH:
                  a = z.ALPHA;
                  break;
              }
            break;
          case z.ALPHA_SHIFT:
            if (a = o, u < 26)
              s = /*(char)('A' + subModeCh)*/
              String.fromCharCode(65 + u);
            else
              switch (u) {
                case 26:
                  s = " ";
                  break;
                case r.TEXT_COMPACTION_MODE_LATCH:
                  a = z.ALPHA;
                  break;
              }
            break;
          case z.PUNCT_SHIFT:
            if (a = o, u < r.PAL)
              s = r.PUNCT_CHARS[u];
            else
              switch (u) {
                case r.PAL:
                  a = z.ALPHA;
                  break;
                case r.MODE_SHIFT_TO_BYTE_COMPACTION_MODE:
                  i.append(
                    /*(char)*/
                    t[f]
                  );
                  break;
                case r.TEXT_COMPACTION_MODE_LATCH:
                  a = z.ALPHA;
                  break;
              }
            break;
        }
        s !== "" && i.append(s), f++;
      }
    }, r.byteCompaction = function(e, t, n, i, a) {
      var o = new Ea(), f = 0, u = (
        /*long*/
        0
      ), s = !1;
      switch (e) {
        case r.BYTE_COMPACTION_MODE_LATCH:
          for (var c = new Int32Array(6), h = t[i++]; i < t[0] && !s; )
            switch (c[f++] = h, u = 900 * u + h, h = t[i++], h) {
              case r.TEXT_COMPACTION_MODE_LATCH:
              case r.BYTE_COMPACTION_MODE_LATCH:
              case r.NUMERIC_COMPACTION_MODE_LATCH:
              case r.BYTE_COMPACTION_MODE_LATCH_6:
              case r.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
              case r.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
              case r.MACRO_PDF417_TERMINATOR:
                i--, s = !0;
                break;
              default:
                if (f % 5 === 0 && f > 0) {
                  for (var l = 0; l < 6; ++l)
                    o.write(
                      /*(byte)*/
                      Number(Re(u) >> Re(8 * (5 - l)))
                    );
                  u = 0, f = 0;
                }
                break;
            }
          i === t[0] && h < r.TEXT_COMPACTION_MODE_LATCH && (c[f++] = h);
          for (var d = 0; d < f; d++)
            o.write(
              /*(byte)*/
              c[d]
            );
          break;
        case r.BYTE_COMPACTION_MODE_LATCH_6:
          for (; i < t[0] && !s; ) {
            var v = t[i++];
            if (v < r.TEXT_COMPACTION_MODE_LATCH)
              f++, u = 900 * u + v;
            else
              switch (v) {
                case r.TEXT_COMPACTION_MODE_LATCH:
                case r.BYTE_COMPACTION_MODE_LATCH:
                case r.NUMERIC_COMPACTION_MODE_LATCH:
                case r.BYTE_COMPACTION_MODE_LATCH_6:
                case r.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
                case r.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
                case r.MACRO_PDF417_TERMINATOR:
                  i--, s = !0;
                  break;
              }
            if (f % 5 === 0 && f > 0) {
              for (var l = 0; l < 6; ++l)
                o.write(
                  /*(byte)*/
                  Number(Re(u) >> Re(8 * (5 - l)))
                );
              u = 0, f = 0;
            }
          }
          break;
      }
      return a.append(Ee.decode(o.toByteArray(), n)), i;
    }, r.numericCompaction = function(e, t, n) {
      for (var i = 0, a = !1, o = new Int32Array(r.MAX_NUMERIC_CODEWORDS); t < e[0] && !a; ) {
        var f = e[t++];
        if (t === e[0] && (a = !0), f < r.TEXT_COMPACTION_MODE_LATCH)
          o[i] = f, i++;
        else
          switch (f) {
            case r.TEXT_COMPACTION_MODE_LATCH:
            case r.BYTE_COMPACTION_MODE_LATCH:
            case r.BYTE_COMPACTION_MODE_LATCH_6:
            case r.BEGIN_MACRO_PDF417_CONTROL_BLOCK:
            case r.BEGIN_MACRO_PDF417_OPTIONAL_FIELD:
            case r.MACRO_PDF417_TERMINATOR:
              t--, a = !0;
              break;
          }
        (i % r.MAX_NUMERIC_CODEWORDS === 0 || f === r.NUMERIC_COMPACTION_MODE_LATCH || a) && i > 0 && (n.append(r.decodeBase900toBase10(o, i)), i = 0);
      }
      return t;
    }, r.decodeBase900toBase10 = function(e, t) {
      for (var n = Re(0), i = 0; i < t; i++)
        n += r.EXP900[t - i - 1] * Re(e[i]);
      var a = n.toString();
      if (a.charAt(0) !== "1")
        throw new O();
      return a.substring(1);
    }, r.TEXT_COMPACTION_MODE_LATCH = 900, r.BYTE_COMPACTION_MODE_LATCH = 901, r.NUMERIC_COMPACTION_MODE_LATCH = 902, r.BYTE_COMPACTION_MODE_LATCH_6 = 924, r.ECI_USER_DEFINED = 925, r.ECI_GENERAL_PURPOSE = 926, r.ECI_CHARSET = 927, r.BEGIN_MACRO_PDF417_CONTROL_BLOCK = 928, r.BEGIN_MACRO_PDF417_OPTIONAL_FIELD = 923, r.MACRO_PDF417_TERMINATOR = 922, r.MODE_SHIFT_TO_BYTE_COMPACTION_MODE = 913, r.MAX_NUMERIC_CODEWORDS = 15, r.MACRO_PDF417_OPTIONAL_FIELD_FILE_NAME = 0, r.MACRO_PDF417_OPTIONAL_FIELD_SEGMENT_COUNT = 1, r.MACRO_PDF417_OPTIONAL_FIELD_TIME_STAMP = 2, r.MACRO_PDF417_OPTIONAL_FIELD_SENDER = 3, r.MACRO_PDF417_OPTIONAL_FIELD_ADDRESSEE = 4, r.MACRO_PDF417_OPTIONAL_FIELD_FILE_SIZE = 5, r.MACRO_PDF417_OPTIONAL_FIELD_CHECKSUM = 6, r.PL = 25, r.LL = 27, r.AS = 27, r.ML = 28, r.AL = 28, r.PS = 29, r.PAL = 29, r.PUNCT_CHARS = `;<>@[\\]_\`~!\r	,:
-.$/"|*()?{}'`, r.MIXED_CHARS = "0123456789&\r	,:#-.$/+%*=^", r.EXP900 = Lr() ? Ca() : [], r.NUMBER_OF_SEQUENCE_CODEWORDS = 2, r;
  }()
), Ye = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Sa = (
  /** @class */
  function() {
    function r() {
    }
    return r.decode = function(e, t, n, i, a, o, f) {
      for (var u = new Mt(e, t, n, i, a), s = null, c = null, h, l = !0; ; l = !1) {
        if (t != null && (s = r.getRowIndicatorColumn(e, u, t, !0, o, f)), i != null && (c = r.getRowIndicatorColumn(e, u, i, !1, o, f)), h = r.merge(s, c), h == null)
          throw C.getNotFoundInstance();
        var d = h.getBoundingBox();
        if (l && d != null && (d.getMinY() < u.getMinY() || d.getMaxY() > u.getMaxY()))
          u = d;
        else
          break;
      }
      h.setBoundingBox(u);
      var v = h.getBarcodeColumnCount() + 1;
      h.setDetectionResultColumn(0, s), h.setDetectionResultColumn(v, c);
      for (var x = s != null, g = 1; g <= v; g++) {
        var _ = x ? g : v - g;
        if (h.getDetectionResultColumn(_) === /* null */
        void 0) {
          var y = void 0;
          _ === 0 || _ === v ? y = new dr(u, _ === 0) : y = new Fr(u), h.setDetectionResultColumn(_, y);
          for (var A = -1, E = A, I = u.getMinY(); I <= u.getMaxY(); I++) {
            if (A = r.getStartColumn(h, _, I, x), A < 0 || A > u.getMaxX()) {
              if (E === -1)
                continue;
              A = E;
            }
            var S = r.detectCodeword(e, u.getMinX(), u.getMaxX(), x, A, I, o, f);
            S != null && (y.setCodeword(I, S), E = A, o = Math.min(o, S.getWidth()), f = Math.max(f, S.getWidth()));
          }
        }
      }
      return r.createDecoderResult(h);
    }, r.merge = function(e, t) {
      if (e == null && t == null)
        return null;
      var n = r.getBarcodeMetadata(e, t);
      if (n == null)
        return null;
      var i = Mt.merge(r.adjustBoundingBox(e), r.adjustBoundingBox(t));
      return new la(n, i);
    }, r.adjustBoundingBox = function(e) {
      var t, n;
      if (e == null)
        return null;
      var i = e.getRowHeights();
      if (i == null)
        return null;
      var a = r.getMax(i), o = 0;
      try {
        for (var f = Ye(i), u = f.next(); !u.done; u = f.next()) {
          var s = u.value;
          if (o += a - s, s > 0)
            break;
        }
      } catch (d) {
        t = { error: d };
      } finally {
        try {
          u && !u.done && (n = f.return) && n.call(f);
        } finally {
          if (t) throw t.error;
        }
      }
      for (var c = e.getCodewords(), h = 0; o > 0 && c[h] == null; h++)
        o--;
      for (var l = 0, h = i.length - 1; h >= 0 && (l += a - i[h], !(i[h] > 0)); h--)
        ;
      for (var h = c.length - 1; l > 0 && c[h] == null; h--)
        l--;
      return e.getBoundingBox().addMissingRows(o, l, e.isLeft());
    }, r.getMax = function(e) {
      var t, n, i = -1;
      try {
        for (var a = Ye(e), o = a.next(); !o.done; o = a.next()) {
          var f = o.value;
          i = Math.max(i, f);
        }
      } catch (u) {
        t = { error: u };
      } finally {
        try {
          o && !o.done && (n = a.return) && n.call(a);
        } finally {
          if (t) throw t.error;
        }
      }
      return i;
    }, r.getBarcodeMetadata = function(e, t) {
      var n;
      if (e == null || (n = e.getBarcodeMetadata()) == null)
        return t == null ? null : t.getBarcodeMetadata();
      var i;
      return t == null || (i = t.getBarcodeMetadata()) == null ? n : n.getColumnCount() !== i.getColumnCount() && n.getErrorCorrectionLevel() !== i.getErrorCorrectionLevel() && n.getRowCount() !== i.getRowCount() ? null : n;
    }, r.getRowIndicatorColumn = function(e, t, n, i, a, o) {
      for (var f = new dr(t, i), u = 0; u < 2; u++)
        for (var s = u === 0 ? 1 : -1, c = Math.trunc(Math.trunc(n.getX())), h = Math.trunc(Math.trunc(n.getY())); h <= t.getMaxY() && h >= t.getMinY(); h += s) {
          var l = r.detectCodeword(e, 0, e.getWidth(), i, c, h, a, o);
          l != null && (f.setCodeword(h, l), i ? c = l.getStartX() : c = l.getEndX());
        }
      return f;
    }, r.adjustCodewordCount = function(e, t) {
      var n = t[0][1], i = n.getValue(), a = e.getBarcodeColumnCount() * e.getBarcodeRowCount() - r.getNumberOfECCodeWords(e.getBarcodeECLevel());
      if (i.length === 0) {
        if (a < 1 || a > k.MAX_CODEWORDS_IN_BARCODE)
          throw C.getNotFoundInstance();
        n.setValue(a);
      } else i[0] !== a && n.setValue(a);
    }, r.createDecoderResult = function(e) {
      var t = r.createBarcodeMatrix(e);
      r.adjustCodewordCount(e, t);
      for (var n = new Array(), i = new Int32Array(e.getBarcodeRowCount() * e.getBarcodeColumnCount()), a = (
        /*List<int[]>*/
        []
      ), o = (
        /*Collection<Integer>*/
        new Array()
      ), f = 0; f < e.getBarcodeRowCount(); f++)
        for (var u = 0; u < e.getBarcodeColumnCount(); u++) {
          var s = t[f][u + 1].getValue(), c = f * e.getBarcodeColumnCount() + u;
          s.length === 0 ? n.push(c) : s.length === 1 ? i[c] = s[0] : (o.push(c), a.push(s));
        }
      for (var h = new Array(a.length), l = 0; l < h.length; l++)
        h[l] = a[l];
      return r.createDecoderResultFromAmbiguousValues(e.getBarcodeECLevel(), i, k.toIntArray(n), k.toIntArray(o), h);
    }, r.createDecoderResultFromAmbiguousValues = function(e, t, n, i, a) {
      for (var o = new Int32Array(i.length), f = 100; f-- > 0; ) {
        for (var u = 0; u < o.length; u++)
          t[i[u]] = a[u][o[u]];
        try {
          return r.decodeCodewords(t, e, n);
        } catch (c) {
          var s = c instanceof oe;
          if (!s)
            throw c;
        }
        if (o.length === 0)
          throw oe.getChecksumInstance();
        for (var u = 0; u < o.length; u++)
          if (o[u] < a[u].length - 1) {
            o[u]++;
            break;
          } else if (o[u] = 0, u === o.length - 1)
            throw oe.getChecksumInstance();
      }
      throw oe.getChecksumInstance();
    }, r.createBarcodeMatrix = function(e) {
      for (var t, n, i, a, o = Array.from({ length: e.getBarcodeRowCount() }, function() {
        return new Array(e.getBarcodeColumnCount() + 2);
      }), f = 0; f < o.length; f++)
        for (var u = 0; u < o[f].length; u++)
          o[f][u] = new Ke();
      var s = 0;
      try {
        for (var c = Ye(e.getDetectionResultColumns()), h = c.next(); !h.done; h = c.next()) {
          var l = h.value;
          if (l != null)
            try {
              for (var d = (i = void 0, Ye(l.getCodewords())), v = d.next(); !v.done; v = d.next()) {
                var x = v.value;
                if (x != null) {
                  var g = x.getRowNumber();
                  if (g >= 0) {
                    if (g >= o.length)
                      continue;
                    o[g][s].setValue(x.getValue());
                  }
                }
              }
            } catch (_) {
              i = { error: _ };
            } finally {
              try {
                v && !v.done && (a = d.return) && a.call(d);
              } finally {
                if (i) throw i.error;
              }
            }
          s++;
        }
      } catch (_) {
        t = { error: _ };
      } finally {
        try {
          h && !h.done && (n = c.return) && n.call(c);
        } finally {
          if (t) throw t.error;
        }
      }
      return o;
    }, r.isValidBarcodeColumn = function(e, t) {
      return t >= 0 && t <= e.getBarcodeColumnCount() + 1;
    }, r.getStartColumn = function(e, t, n, i) {
      var a, o, f = i ? 1 : -1, u = null;
      if (r.isValidBarcodeColumn(e, t - f) && (u = e.getDetectionResultColumn(t - f).getCodeword(n)), u != null)
        return i ? u.getEndX() : u.getStartX();
      if (u = e.getDetectionResultColumn(t).getCodewordNearby(n), u != null)
        return i ? u.getStartX() : u.getEndX();
      if (r.isValidBarcodeColumn(e, t - f) && (u = e.getDetectionResultColumn(t - f).getCodewordNearby(n)), u != null)
        return i ? u.getEndX() : u.getStartX();
      for (var s = 0; r.isValidBarcodeColumn(e, t - f); ) {
        t -= f;
        try {
          for (var c = (a = void 0, Ye(e.getDetectionResultColumn(t).getCodewords())), h = c.next(); !h.done; h = c.next()) {
            var l = h.value;
            if (l != null)
              return (i ? l.getEndX() : l.getStartX()) + f * s * (l.getEndX() - l.getStartX());
          }
        } catch (d) {
          a = { error: d };
        } finally {
          try {
            h && !h.done && (o = c.return) && o.call(c);
          } finally {
            if (a) throw a.error;
          }
        }
        s++;
      }
      return i ? e.getBoundingBox().getMinX() : e.getBoundingBox().getMaxX();
    }, r.detectCodeword = function(e, t, n, i, a, o, f, u) {
      a = r.adjustCodewordStartColumn(e, t, n, i, a, o);
      var s = r.getModuleBitCount(e, t, n, i, a, o);
      if (s == null)
        return null;
      var c, h = U.sum(s);
      if (i)
        c = a + h;
      else {
        for (var l = 0; l < s.length / 2; l++) {
          var d = s[l];
          s[l] = s[s.length - 1 - l], s[s.length - 1 - l] = d;
        }
        c = a, a = c - h;
      }
      if (!r.checkCodewordSkew(h, f, u))
        return null;
      var v = va.getDecodedValue(s), x = k.getCodeword(v);
      return x === -1 ? null : new da(a, c, r.getCodewordBucketNumber(v), x);
    }, r.getModuleBitCount = function(e, t, n, i, a, o) {
      for (var f = a, u = new Int32Array(8), s = 0, c = i ? 1 : -1, h = i; (i ? f < n : f >= t) && s < u.length; )
        e.get(f, o) === h ? (u[s]++, f += c) : (s++, h = !h);
      return s === u.length || f === (i ? n : t) && s === u.length - 1 ? u : null;
    }, r.getNumberOfECCodeWords = function(e) {
      return 2 << e;
    }, r.adjustCodewordStartColumn = function(e, t, n, i, a, o) {
      for (var f = a, u = i ? -1 : 1, s = 0; s < 2; s++) {
        for (; (i ? f >= t : f < n) && i === e.get(f, o); ) {
          if (Math.abs(a - f) > r.CODEWORD_SKEW_SIZE)
            return a;
          f += u;
        }
        u = -u, i = !i;
      }
      return f;
    }, r.checkCodewordSkew = function(e, t, n) {
      return t - r.CODEWORD_SKEW_SIZE <= e && e <= n + r.CODEWORD_SKEW_SIZE;
    }, r.decodeCodewords = function(e, t, n) {
      if (e.length === 0)
        throw O.getFormatInstance();
      var i = 1 << t + 1, a = r.correctErrors(e, n, i);
      r.verifyCodewordCount(e, i);
      var o = Ia.decode(e, "" + t);
      return o.setErrorsCorrected(a), o.setErasures(n.length), o;
    }, r.correctErrors = function(e, t, n) {
      if (t != null && t.length > n / 2 + r.MAX_ERRORS || n < 0 || n > r.MAX_EC_CODEWORDS)
        throw oe.getChecksumInstance();
      return r.errorCorrection.decode(e, n, t);
    }, r.verifyCodewordCount = function(e, t) {
      if (e.length < 4)
        throw O.getFormatInstance();
      var n = e[0];
      if (n > e.length)
        throw O.getFormatInstance();
      if (n === 0)
        if (t < e.length)
          e[0] = e.length - t;
        else
          throw O.getFormatInstance();
    }, r.getBitCountForCodeword = function(e) {
      for (var t = new Int32Array(8), n = 0, i = t.length - 1; !((e & 1) !== n && (n = e & 1, i--, i < 0)); )
        t[i]++, e >>= 1;
      return t;
    }, r.getCodewordBucketNumber = function(e) {
      return e instanceof Int32Array ? this.getCodewordBucketNumber_Int32Array(e) : this.getCodewordBucketNumber_number(e);
    }, r.getCodewordBucketNumber_number = function(e) {
      return r.getCodewordBucketNumber(r.getBitCountForCodeword(e));
    }, r.getCodewordBucketNumber_Int32Array = function(e) {
      return (e[0] - e[2] + e[4] - e[6] + 9) % 9;
    }, r.toString = function(e) {
      for (var t = new Wt(), n = 0; n < e.length; n++) {
        t.format("Row %2d: ", n);
        for (var i = 0; i < e[n].length; i++) {
          var a = e[n][i];
          a.getValue().length === 0 ? t.format("        ", null) : t.format("%4d(%2d)", a.getValue()[0], a.getConfidence(a.getValue()[0]));
        }
        t.format("%n");
      }
      return t.toString();
    }, r.CODEWORD_SKEW_SIZE = 2, r.MAX_ERRORS = 3, r.MAX_EC_CODEWORDS = 512, r.errorCorrection = new aa(), r;
  }()
), ma = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Bt = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.decode = function(e, t) {
      t === void 0 && (t = null);
      var n = r.decode(e, t, !1);
      if (n == null || n.length === 0 || n[0] == null)
        throw C.getNotFoundInstance();
      return n[0];
    }, r.prototype.decodeMultiple = function(e, t) {
      t === void 0 && (t = null);
      try {
        return r.decode(e, t, !0);
      } catch (n) {
        throw n instanceof O || n instanceof oe ? C.getNotFoundInstance() : n;
      }
    }, r.decode = function(e, t, n) {
      var i, a, o = new Array(), f = Ji.detectMultiple(e, t, n);
      try {
        for (var u = ma(f.getPoints()), s = u.next(); !s.done; s = u.next()) {
          var c = s.value, h = Sa.decode(f.getBits(), c[4], c[5], c[6], c[7], r.getMinCodewordWidth(c), r.getMaxCodewordWidth(c)), l = new le(h.getText(), h.getRawBytes(), void 0, c, b.PDF_417);
          l.putMetadata(ce.ERROR_CORRECTION_LEVEL, h.getECLevel());
          var d = h.getOther();
          d != null && l.putMetadata(ce.PDF417_EXTRA_METADATA, d), o.push(l);
        }
      } catch (v) {
        i = { error: v };
      } finally {
        try {
          s && !s.done && (a = u.return) && a.call(u);
        } finally {
          if (i) throw i.error;
        }
      }
      return o.map(function(v) {
        return v;
      });
    }, r.getMaxWidth = function(e, t) {
      return e == null || t == null ? 0 : Math.trunc(Math.abs(e.getX() - t.getX()));
    }, r.getMinWidth = function(e, t) {
      return e == null || t == null ? B.MAX_VALUE : Math.trunc(Math.abs(e.getX() - t.getX()));
    }, r.getMaxCodewordWidth = function(e) {
      return Math.floor(Math.max(Math.max(r.getMaxWidth(e[0], e[4]), r.getMaxWidth(e[6], e[2]) * k.MODULES_IN_CODEWORD / k.MODULES_IN_STOP_PATTERN), Math.max(r.getMaxWidth(e[1], e[5]), r.getMaxWidth(e[7], e[3]) * k.MODULES_IN_CODEWORD / k.MODULES_IN_STOP_PATTERN)));
    }, r.getMinCodewordWidth = function(e) {
      return Math.floor(Math.min(Math.min(r.getMinWidth(e[0], e[4]), r.getMinWidth(e[6], e[2]) * k.MODULES_IN_CODEWORD / k.MODULES_IN_STOP_PATTERN), Math.min(r.getMinWidth(e[1], e[5]), r.getMinWidth(e[7], e[3]) * k.MODULES_IN_CODEWORD / k.MODULES_IN_STOP_PATTERN)));
    }, r.prototype.reset = function() {
    }, r;
  }()
), Oa = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), pr = (
  /** @class */
  function(r) {
    Oa(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.kind = "ReaderException", e;
  }(ye)
), xr = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Ta = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.decode = function(e, t) {
      return this.setHints(t), this.decodeInternal(e);
    }, r.prototype.decodeWithState = function(e) {
      return (this.readers === null || this.readers === void 0) && this.setHints(null), this.decodeInternal(e);
    }, r.prototype.setHints = function(e) {
      this.hints = e;
      var t = e != null && e.get($.TRY_HARDER) !== void 0, n = e == null ? null : e.get($.POSSIBLE_FORMATS), i = new Array();
      if (n != null) {
        var a = n.some(function(o) {
          return o === b.UPC_A || o === b.UPC_E || o === b.EAN_13 || o === b.EAN_8 || o === b.CODABAR || o === b.CODE_39 || o === b.CODE_93 || o === b.CODE_128 || o === b.ITF || o === b.RSS_14 || o === b.RSS_EXPANDED;
        });
        a && !t && i.push(new $e(e)), n.includes(b.QR_CODE) && i.push(new Pt()), n.includes(b.DATA_MATRIX) && i.push(new Rt()), n.includes(b.AZTEC) && i.push(new bt()), n.includes(b.PDF_417) && i.push(new Bt()), a && t && i.push(new $e(e));
      }
      i.length === 0 && (t || i.push(new $e(e)), i.push(new Pt()), i.push(new Rt()), i.push(new bt()), i.push(new Bt()), t && i.push(new $e(e))), this.readers = i;
    }, r.prototype.reset = function() {
      var e, t;
      if (this.readers !== null)
        try {
          for (var n = xr(this.readers), i = n.next(); !i.done; i = n.next()) {
            var a = i.value;
            a.reset();
          }
        } catch (o) {
          e = { error: o };
        } finally {
          try {
            i && !i.done && (t = n.return) && t.call(n);
          } finally {
            if (e) throw e.error;
          }
        }
    }, r.prototype.decodeInternal = function(e) {
      var t, n;
      if (this.readers === null)
        throw new pr("No readers where selected, nothing can be read.");
      try {
        for (var i = xr(this.readers), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          try {
            return o.decode(e, this.hints);
          } catch (f) {
            if (f instanceof pr)
              continue;
          }
        }
      } catch (f) {
        t = { error: f };
      } finally {
        try {
          a && !a.done && (n = i.return) && n.call(i);
        } finally {
          if (t) throw t.error;
        }
      }
      throw new C("No MultiFormat Readers were able to detect the code.");
    }, r;
  }()
), Da = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), kr = (
  /** @class */
  function(r) {
    Da(e, r);
    function e(t, n) {
      t === void 0 && (t = null), n === void 0 && (n = 500);
      var i = this, a = new Ta();
      return a.setHints(t), i = r.call(this, a, n) || this, i;
    }
    return e.prototype.decodeBitmap = function(t) {
      return this.reader.decodeWithState(t);
    }, e;
  }(We)
), ba = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
(function(r) {
  ba(e, r);
  function e(t) {
    return t === void 0 && (t = 500), r.call(this, new Bt(), t) || this;
  }
  return e;
})(We);
var Na = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
(function(r) {
  Na(e, r);
  function e(t) {
    return t === void 0 && (t = 500), r.call(this, new Pt(), t) || this;
  }
  return e;
})(We);
var Ft;
(function(r) {
  r[r.ERROR_CORRECTION = 0] = "ERROR_CORRECTION", r[r.CHARACTER_SET = 1] = "CHARACTER_SET", r[r.DATA_MATRIX_SHAPE = 2] = "DATA_MATRIX_SHAPE", r[r.DATA_MATRIX_COMPACT = 3] = "DATA_MATRIX_COMPACT", r[r.MIN_SIZE = 4] = "MIN_SIZE", r[r.MAX_SIZE = 5] = "MAX_SIZE", r[r.MARGIN = 6] = "MARGIN", r[r.PDF417_COMPACT = 7] = "PDF417_COMPACT", r[r.PDF417_COMPACTION = 8] = "PDF417_COMPACTION", r[r.PDF417_DIMENSIONS = 9] = "PDF417_DIMENSIONS", r[r.AZTEC_LAYERS = 10] = "AZTEC_LAYERS", r[r.QR_VERSION = 11] = "QR_VERSION", r[r.GS1_FORMAT = 12] = "GS1_FORMAT", r[r.FORCE_C40 = 13] = "FORCE_C40";
})(Ft || (Ft = {}));
const rt = Ft;
var Ur = (
  /** @class */
  function() {
    function r(e) {
      this.field = e, this.cachedGenerators = [], this.cachedGenerators.push(new Pe(e, Int32Array.from([1])));
    }
    return r.prototype.buildGenerator = function(e) {
      var t = this.cachedGenerators;
      if (e >= t.length)
        for (var n = t[t.length - 1], i = this.field, a = t.length; a <= e; a++) {
          var o = n.multiply(new Pe(i, Int32Array.from([1, i.exp(a - 1 + i.getGeneratorBase())])));
          t.push(o), n = o;
        }
      return t[e];
    }, r.prototype.encode = function(e, t) {
      if (t === 0)
        throw new N("No error correction bytes");
      var n = e.length - t;
      if (n <= 0)
        throw new N("No data bytes provided");
      var i = this.buildGenerator(t), a = new Int32Array(n);
      Y.arraycopy(e, 0, a, 0, n);
      var o = new Pe(this.field, a);
      o = o.multiplyByMonomial(t, 1);
      for (var f = o.divide(i)[1], u = f.getCoefficients(), s = t - u.length, c = 0; c < s; c++)
        e[n + c] = 0;
      Y.arraycopy(u, 0, e, n + s, u.length);
    }, r;
  }()
), qe = (
  /** @class */
  function() {
    function r() {
    }
    return r.applyMaskPenaltyRule1 = function(e) {
      return r.applyMaskPenaltyRule1Internal(e, !0) + r.applyMaskPenaltyRule1Internal(e, !1);
    }, r.applyMaskPenaltyRule2 = function(e) {
      for (var t = 0, n = e.getArray(), i = e.getWidth(), a = e.getHeight(), o = 0; o < a - 1; o++)
        for (var f = n[o], u = 0; u < i - 1; u++) {
          var s = f[u];
          s === f[u + 1] && s === n[o + 1][u] && s === n[o + 1][u + 1] && t++;
        }
      return r.N2 * t;
    }, r.applyMaskPenaltyRule3 = function(e) {
      for (var t = 0, n = e.getArray(), i = e.getWidth(), a = e.getHeight(), o = 0; o < a; o++)
        for (var f = 0; f < i; f++) {
          var u = n[o];
          f + 6 < i && u[f] === 1 && u[f + 1] === 0 && u[f + 2] === 1 && u[f + 3] === 1 && u[f + 4] === 1 && u[f + 5] === 0 && u[f + 6] === 1 && (r.isWhiteHorizontal(u, f - 4, f) || r.isWhiteHorizontal(u, f + 7, f + 11)) && t++, o + 6 < a && n[o][f] === 1 && n[o + 1][f] === 0 && n[o + 2][f] === 1 && n[o + 3][f] === 1 && n[o + 4][f] === 1 && n[o + 5][f] === 0 && n[o + 6][f] === 1 && (r.isWhiteVertical(n, f, o - 4, o) || r.isWhiteVertical(n, f, o + 7, o + 11)) && t++;
        }
      return t * r.N3;
    }, r.isWhiteHorizontal = function(e, t, n) {
      t = Math.max(t, 0), n = Math.min(n, e.length);
      for (var i = t; i < n; i++)
        if (e[i] === 1)
          return !1;
      return !0;
    }, r.isWhiteVertical = function(e, t, n, i) {
      n = Math.max(n, 0), i = Math.min(i, e.length);
      for (var a = n; a < i; a++)
        if (e[a][t] === 1)
          return !1;
      return !0;
    }, r.applyMaskPenaltyRule4 = function(e) {
      for (var t = 0, n = e.getArray(), i = e.getWidth(), a = e.getHeight(), o = 0; o < a; o++)
        for (var f = n[o], u = 0; u < i; u++)
          f[u] === 1 && t++;
      var s = e.getHeight() * e.getWidth(), c = Math.floor(Math.abs(t * 2 - s) * 10 / s);
      return c * r.N4;
    }, r.getDataMaskBit = function(e, t, n) {
      var i, a;
      switch (e) {
        case 0:
          i = n + t & 1;
          break;
        case 1:
          i = n & 1;
          break;
        case 2:
          i = t % 3;
          break;
        case 3:
          i = (n + t) % 3;
          break;
        case 4:
          i = Math.floor(n / 2) + Math.floor(t / 3) & 1;
          break;
        case 5:
          a = n * t, i = (a & 1) + a % 3;
          break;
        case 6:
          a = n * t, i = (a & 1) + a % 3 & 1;
          break;
        case 7:
          a = n * t, i = a % 3 + (n + t & 1) & 1;
          break;
        default:
          throw new N("Invalid mask pattern: " + e);
      }
      return i === 0;
    }, r.applyMaskPenaltyRule1Internal = function(e, t) {
      for (var n = 0, i = t ? e.getHeight() : e.getWidth(), a = t ? e.getWidth() : e.getHeight(), o = e.getArray(), f = 0; f < i; f++) {
        for (var u = 0, s = -1, c = 0; c < a; c++) {
          var h = t ? o[f][c] : o[c][f];
          h === s ? u++ : (u >= 5 && (n += r.N1 + (u - 5)), u = 1, s = h);
        }
        u >= 5 && (n += r.N1 + (u - 5));
      }
      return n;
    }, r.N1 = 3, r.N2 = 3, r.N3 = 40, r.N4 = 10, r;
  }()
), Ra = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Pa = (
  /** @class */
  function() {
    function r(e, t) {
      this.width = e, this.height = t;
      for (var n = new Array(t), i = 0; i !== t; i++)
        n[i] = new Uint8Array(e);
      this.bytes = n;
    }
    return r.prototype.getHeight = function() {
      return this.height;
    }, r.prototype.getWidth = function() {
      return this.width;
    }, r.prototype.get = function(e, t) {
      return this.bytes[t][e];
    }, r.prototype.getArray = function() {
      return this.bytes;
    }, r.prototype.setNumber = function(e, t, n) {
      this.bytes[t][e] = n;
    }, r.prototype.setBoolean = function(e, t, n) {
      this.bytes[t][e] = /*(byte) */
      n ? 1 : 0;
    }, r.prototype.clear = function(e) {
      var t, n;
      try {
        for (var i = Ra(this.bytes), a = i.next(); !a.done; a = i.next()) {
          var o = a.value;
          re.fill(o, e);
        }
      } catch (f) {
        t = { error: f };
      } finally {
        try {
          a && !a.done && (n = i.return) && n.call(i);
        } finally {
          if (t) throw t.error;
        }
      }
    }, r.prototype.equals = function(e) {
      if (!(e instanceof r))
        return !1;
      var t = e;
      if (this.width !== t.width || this.height !== t.height)
        return !1;
      for (var n = 0, i = this.height; n < i; ++n)
        for (var a = this.bytes[n], o = t.bytes[n], f = 0, u = this.width; f < u; ++f)
          if (a[f] !== o[f])
            return !1;
      return !0;
    }, r.prototype.toString = function() {
      for (var e = new M(), t = 0, n = this.height; t < n; ++t) {
        for (var i = this.bytes[t], a = 0, o = this.width; a < o; ++a)
          switch (i[a]) {
            case 0:
              e.append(" 0");
              break;
            case 1:
              e.append(" 1");
              break;
            default:
              e.append("  ");
              break;
          }
        e.append(`
`);
      }
      return e.toString();
    }, r;
  }()
), Lt = (
  /** @class */
  function() {
    function r() {
      this.maskPattern = -1;
    }
    return r.prototype.getMode = function() {
      return this.mode;
    }, r.prototype.getECLevel = function() {
      return this.ecLevel;
    }, r.prototype.getVersion = function() {
      return this.version;
    }, r.prototype.getMaskPattern = function() {
      return this.maskPattern;
    }, r.prototype.getMatrix = function() {
      return this.matrix;
    }, r.prototype.toString = function() {
      var e = new M();
      return e.append(`<<
`), e.append(" mode: "), e.append(this.mode ? this.mode.toString() : "null"), e.append(`
 ecLevel: `), e.append(this.ecLevel ? this.ecLevel.toString() : "null"), e.append(`
 version: `), e.append(this.version ? this.version.toString() : "null"), e.append(`
 maskPattern: `), e.append(this.maskPattern.toString()), this.matrix ? (e.append(`
 matrix:
`), e.append(this.matrix.toString())) : e.append(`
 matrix: null
`), e.append(`>>
`), e.toString();
    }, r.prototype.setMode = function(e) {
      this.mode = e;
    }, r.prototype.setECLevel = function(e) {
      this.ecLevel = e;
    }, r.prototype.setVersion = function(e) {
      this.version = e;
    }, r.prototype.setMaskPattern = function(e) {
      this.maskPattern = e;
    }, r.prototype.setMatrix = function(e) {
      this.matrix = e;
    }, r.isValidMaskPattern = function(e) {
      return e >= 0 && e < r.NUM_MASK_PATTERNS;
    }, r.NUM_MASK_PATTERNS = 8, r;
  }()
), Ma = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), j = (
  /** @class */
  function(r) {
    Ma(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.kind = "WriterException", e;
  }(ye)
), gr = (
  /** @class */
  function() {
    function r() {
    }
    return r.clearMatrix = function(e) {
      e.clear(
        /*(byte) */
        /*-1*/
        255
      );
    }, r.buildMatrix = function(e, t, n, i, a) {
      r.clearMatrix(a), r.embedBasicPatterns(n, a), r.embedTypeInfo(t, i, a), r.maybeEmbedVersionInfo(n, a), r.embedDataBits(e, i, a);
    }, r.embedBasicPatterns = function(e, t) {
      r.embedPositionDetectionPatternsAndSeparators(t), r.embedDarkDotAtLeftBottomCorner(t), r.maybeEmbedPositionAdjustmentPatterns(e, t), r.embedTimingPatterns(t);
    }, r.embedTypeInfo = function(e, t, n) {
      var i = new fe();
      r.makeTypeInfoBits(e, t, i);
      for (var a = 0, o = i.getSize(); a < o; ++a) {
        var f = i.get(i.getSize() - 1 - a), u = r.TYPE_INFO_COORDINATES[a], s = u[0], c = u[1];
        if (n.setBoolean(s, c, f), a < 8) {
          var h = n.getWidth() - a - 1, l = 8;
          n.setBoolean(h, l, f);
        } else {
          var h = 8, l = n.getHeight() - 7 + (a - 8);
          n.setBoolean(h, l, f);
        }
      }
    }, r.maybeEmbedVersionInfo = function(e, t) {
      if (!(e.getVersionNumber() < 7)) {
        var n = new fe();
        r.makeVersionInfoBits(e, n);
        for (var i = 6 * 3 - 1, a = 0; a < 6; ++a)
          for (var o = 0; o < 3; ++o) {
            var f = n.get(i);
            i--, t.setBoolean(a, t.getHeight() - 11 + o, f), t.setBoolean(t.getHeight() - 11 + o, a, f);
          }
      }
    }, r.embedDataBits = function(e, t, n) {
      for (var i = 0, a = -1, o = n.getWidth() - 1, f = n.getHeight() - 1; o > 0; ) {
        for (o === 6 && (o -= 1); f >= 0 && f < n.getHeight(); ) {
          for (var u = 0; u < 2; ++u) {
            var s = o - u;
            if (r.isEmpty(n.get(s, f))) {
              var c = void 0;
              i < e.getSize() ? (c = e.get(i), ++i) : c = !1, t !== 255 && qe.getDataMaskBit(t, s, f) && (c = !c), n.setBoolean(s, f, c);
            }
          }
          f += a;
        }
        a = -a, f += a, o -= 2;
      }
      if (i !== e.getSize())
        throw new j("Not all bits consumed: " + i + "/" + e.getSize());
    }, r.findMSBSet = function(e) {
      return 32 - B.numberOfLeadingZeros(e);
    }, r.calculateBCHCode = function(e, t) {
      if (t === 0)
        throw new N("0 polynomial");
      var n = r.findMSBSet(t);
      for (e <<= n - 1; r.findMSBSet(e) >= n; )
        e ^= t << r.findMSBSet(e) - n;
      return e;
    }, r.makeTypeInfoBits = function(e, t, n) {
      if (!Lt.isValidMaskPattern(t))
        throw new j("Invalid mask pattern");
      var i = e.getBits() << 3 | t;
      n.appendBits(i, 5);
      var a = r.calculateBCHCode(i, r.TYPE_INFO_POLY);
      n.appendBits(a, 10);
      var o = new fe();
      if (o.appendBits(r.TYPE_INFO_MASK_PATTERN, 15), n.xor(o), n.getSize() !== 15)
        throw new j("should not happen but we got: " + n.getSize());
    }, r.makeVersionInfoBits = function(e, t) {
      t.appendBits(e.getVersionNumber(), 6);
      var n = r.calculateBCHCode(e.getVersionNumber(), r.VERSION_INFO_POLY);
      if (t.appendBits(n, 12), t.getSize() !== 18)
        throw new j("should not happen but we got: " + t.getSize());
    }, r.isEmpty = function(e) {
      return e === 255;
    }, r.embedTimingPatterns = function(e) {
      for (var t = 8; t < e.getWidth() - 8; ++t) {
        var n = (t + 1) % 2;
        r.isEmpty(e.get(t, 6)) && e.setNumber(t, 6, n), r.isEmpty(e.get(6, t)) && e.setNumber(6, t, n);
      }
    }, r.embedDarkDotAtLeftBottomCorner = function(e) {
      if (e.get(8, e.getHeight() - 8) === 0)
        throw new j();
      e.setNumber(8, e.getHeight() - 8, 1);
    }, r.embedHorizontalSeparationPattern = function(e, t, n) {
      for (var i = 0; i < 8; ++i) {
        if (!r.isEmpty(n.get(e + i, t)))
          throw new j();
        n.setNumber(e + i, t, 0);
      }
    }, r.embedVerticalSeparationPattern = function(e, t, n) {
      for (var i = 0; i < 7; ++i) {
        if (!r.isEmpty(n.get(e, t + i)))
          throw new j();
        n.setNumber(e, t + i, 0);
      }
    }, r.embedPositionAdjustmentPattern = function(e, t, n) {
      for (var i = 0; i < 5; ++i)
        for (var a = r.POSITION_ADJUSTMENT_PATTERN[i], o = 0; o < 5; ++o)
          n.setNumber(e + o, t + i, a[o]);
    }, r.embedPositionDetectionPattern = function(e, t, n) {
      for (var i = 0; i < 7; ++i)
        for (var a = r.POSITION_DETECTION_PATTERN[i], o = 0; o < 7; ++o)
          n.setNumber(e + o, t + i, a[o]);
    }, r.embedPositionDetectionPatternsAndSeparators = function(e) {
      var t = r.POSITION_DETECTION_PATTERN[0].length;
      r.embedPositionDetectionPattern(0, 0, e), r.embedPositionDetectionPattern(e.getWidth() - t, 0, e), r.embedPositionDetectionPattern(0, e.getWidth() - t, e);
      var n = 8;
      r.embedHorizontalSeparationPattern(0, n - 1, e), r.embedHorizontalSeparationPattern(e.getWidth() - n, n - 1, e), r.embedHorizontalSeparationPattern(0, e.getWidth() - n, e);
      var i = 7;
      r.embedVerticalSeparationPattern(i, 0, e), r.embedVerticalSeparationPattern(e.getHeight() - i - 1, 0, e), r.embedVerticalSeparationPattern(i, e.getHeight() - i, e);
    }, r.maybeEmbedPositionAdjustmentPatterns = function(e, t) {
      if (!(e.getVersionNumber() < 2))
        for (var n = e.getVersionNumber() - 1, i = r.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE[n], a = 0, o = i.length; a !== o; a++) {
          var f = i[a];
          if (f >= 0)
            for (var u = 0; u !== o; u++) {
              var s = i[u];
              s >= 0 && r.isEmpty(t.get(s, f)) && r.embedPositionAdjustmentPattern(s - 2, f - 2, t);
            }
        }
    }, r.POSITION_DETECTION_PATTERN = Array.from([
      Int32Array.from([1, 1, 1, 1, 1, 1, 1]),
      Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
      Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
      Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
      Int32Array.from([1, 0, 1, 1, 1, 0, 1]),
      Int32Array.from([1, 0, 0, 0, 0, 0, 1]),
      Int32Array.from([1, 1, 1, 1, 1, 1, 1])
    ]), r.POSITION_ADJUSTMENT_PATTERN = Array.from([
      Int32Array.from([1, 1, 1, 1, 1]),
      Int32Array.from([1, 0, 0, 0, 1]),
      Int32Array.from([1, 0, 1, 0, 1]),
      Int32Array.from([1, 0, 0, 0, 1]),
      Int32Array.from([1, 1, 1, 1, 1])
    ]), r.POSITION_ADJUSTMENT_PATTERN_COORDINATE_TABLE = Array.from([
      Int32Array.from([-1, -1, -1, -1, -1, -1, -1]),
      Int32Array.from([6, 18, -1, -1, -1, -1, -1]),
      Int32Array.from([6, 22, -1, -1, -1, -1, -1]),
      Int32Array.from([6, 26, -1, -1, -1, -1, -1]),
      Int32Array.from([6, 30, -1, -1, -1, -1, -1]),
      Int32Array.from([6, 34, -1, -1, -1, -1, -1]),
      Int32Array.from([6, 22, 38, -1, -1, -1, -1]),
      Int32Array.from([6, 24, 42, -1, -1, -1, -1]),
      Int32Array.from([6, 26, 46, -1, -1, -1, -1]),
      Int32Array.from([6, 28, 50, -1, -1, -1, -1]),
      Int32Array.from([6, 30, 54, -1, -1, -1, -1]),
      Int32Array.from([6, 32, 58, -1, -1, -1, -1]),
      Int32Array.from([6, 34, 62, -1, -1, -1, -1]),
      Int32Array.from([6, 26, 46, 66, -1, -1, -1]),
      Int32Array.from([6, 26, 48, 70, -1, -1, -1]),
      Int32Array.from([6, 26, 50, 74, -1, -1, -1]),
      Int32Array.from([6, 30, 54, 78, -1, -1, -1]),
      Int32Array.from([6, 30, 56, 82, -1, -1, -1]),
      Int32Array.from([6, 30, 58, 86, -1, -1, -1]),
      Int32Array.from([6, 34, 62, 90, -1, -1, -1]),
      Int32Array.from([6, 28, 50, 72, 94, -1, -1]),
      Int32Array.from([6, 26, 50, 74, 98, -1, -1]),
      Int32Array.from([6, 30, 54, 78, 102, -1, -1]),
      Int32Array.from([6, 28, 54, 80, 106, -1, -1]),
      Int32Array.from([6, 32, 58, 84, 110, -1, -1]),
      Int32Array.from([6, 30, 58, 86, 114, -1, -1]),
      Int32Array.from([6, 34, 62, 90, 118, -1, -1]),
      Int32Array.from([6, 26, 50, 74, 98, 122, -1]),
      Int32Array.from([6, 30, 54, 78, 102, 126, -1]),
      Int32Array.from([6, 26, 52, 78, 104, 130, -1]),
      Int32Array.from([6, 30, 56, 82, 108, 134, -1]),
      Int32Array.from([6, 34, 60, 86, 112, 138, -1]),
      Int32Array.from([6, 30, 58, 86, 114, 142, -1]),
      Int32Array.from([6, 34, 62, 90, 118, 146, -1]),
      Int32Array.from([6, 30, 54, 78, 102, 126, 150]),
      Int32Array.from([6, 24, 50, 76, 102, 128, 154]),
      Int32Array.from([6, 28, 54, 80, 106, 132, 158]),
      Int32Array.from([6, 32, 58, 84, 110, 136, 162]),
      Int32Array.from([6, 26, 54, 82, 110, 138, 166]),
      Int32Array.from([6, 30, 58, 86, 114, 142, 170])
    ]), r.TYPE_INFO_COORDINATES = Array.from([
      Int32Array.from([8, 0]),
      Int32Array.from([8, 1]),
      Int32Array.from([8, 2]),
      Int32Array.from([8, 3]),
      Int32Array.from([8, 4]),
      Int32Array.from([8, 5]),
      Int32Array.from([8, 7]),
      Int32Array.from([8, 8]),
      Int32Array.from([7, 8]),
      Int32Array.from([5, 8]),
      Int32Array.from([4, 8]),
      Int32Array.from([3, 8]),
      Int32Array.from([2, 8]),
      Int32Array.from([1, 8]),
      Int32Array.from([0, 8])
    ]), r.VERSION_INFO_POLY = 7973, r.TYPE_INFO_POLY = 1335, r.TYPE_INFO_MASK_PATTERN = 21522, r;
  }()
), Ba = (
  /** @class */
  function() {
    function r(e, t) {
      this.dataBytes = e, this.errorCorrectionBytes = t;
    }
    return r.prototype.getDataBytes = function() {
      return this.dataBytes;
    }, r.prototype.getErrorCorrectionBytes = function() {
      return this.errorCorrectionBytes;
    }, r;
  }()
), yr = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
(function() {
  function r() {
  }
  return r.calculateMaskPenalty = function(e) {
    return qe.applyMaskPenaltyRule1(e) + qe.applyMaskPenaltyRule2(e) + qe.applyMaskPenaltyRule3(e) + qe.applyMaskPenaltyRule4(e);
  }, r.encode = function(e, t, n) {
    n === void 0 && (n = null);
    var i = r.DEFAULT_BYTE_MODE_ENCODING, a = n !== null && n.get(rt.CHARACTER_SET) !== void 0;
    a && (i = n.get(rt.CHARACTER_SET).toString());
    var o = this.chooseMode(e, i), f = new fe();
    if (o === Z.BYTE && (a || r.DEFAULT_BYTE_MODE_ENCODING !== i)) {
      var u = te.getCharacterSetECIByName(i);
      u !== void 0 && this.appendECI(u, f);
    }
    this.appendModeInfo(o, f);
    var s = new fe();
    this.appendBytes(e, o, s, i);
    var c;
    if (n !== null && n.get(rt.QR_VERSION) !== void 0) {
      var h = Number.parseInt(n.get(rt.QR_VERSION).toString(), 10);
      c = Ue.getVersionForNumber(h);
      var l = this.calculateBitsNeeded(o, f, s, c);
      if (!this.willFit(l, c, t))
        throw new j("Data too big for requested version");
    } else
      c = this.recommendVersion(t, o, f, s);
    var d = new fe();
    d.appendBitArray(f);
    var v = o === Z.BYTE ? s.getSizeInBytes() : e.length;
    this.appendLengthInfo(v, c, o, d), d.appendBitArray(s);
    var x = c.getECBlocksForLevel(t), g = c.getTotalCodewords() - x.getTotalECCodewords();
    this.terminateBits(g, d);
    var _ = this.interleaveWithECBytes(d, c.getTotalCodewords(), g, x.getNumBlocks()), y = new Lt();
    y.setECLevel(t), y.setMode(o), y.setVersion(c);
    var A = c.getDimensionForVersion(), E = new Pa(A, A), I = this.chooseMaskPattern(_, t, c, E);
    return y.setMaskPattern(I), gr.buildMatrix(_, t, c, I, E), y.setMatrix(E), y;
  }, r.recommendVersion = function(e, t, n, i) {
    var a = this.calculateBitsNeeded(t, n, i, Ue.getVersionForNumber(1)), o = this.chooseVersion(a, e), f = this.calculateBitsNeeded(t, n, i, o);
    return this.chooseVersion(f, e);
  }, r.calculateBitsNeeded = function(e, t, n, i) {
    return t.getSize() + e.getCharacterCountBits(i) + n.getSize();
  }, r.getAlphanumericCode = function(e) {
    return e < r.ALPHANUMERIC_TABLE.length ? r.ALPHANUMERIC_TABLE[e] : -1;
  }, r.chooseMode = function(e, t) {
    if (t === void 0 && (t = null), te.SJIS.getName() === t && this.isOnlyDoubleByteKanji(e))
      return Z.KANJI;
    for (var n = !1, i = !1, a = 0, o = e.length; a < o; ++a) {
      var f = e.charAt(a);
      if (r.isDigit(f))
        n = !0;
      else if (this.getAlphanumericCode(f.charCodeAt(0)) !== -1)
        i = !0;
      else
        return Z.BYTE;
    }
    return i ? Z.ALPHANUMERIC : n ? Z.NUMERIC : Z.BYTE;
  }, r.isOnlyDoubleByteKanji = function(e) {
    var t;
    try {
      t = Ee.encode(e, te.SJIS);
    } catch {
      return !1;
    }
    var n = t.length;
    if (n % 2 !== 0)
      return !1;
    for (var i = 0; i < n; i += 2) {
      var a = t[i] & 255;
      if ((a < 129 || a > 159) && (a < 224 || a > 235))
        return !1;
    }
    return !0;
  }, r.chooseMaskPattern = function(e, t, n, i) {
    for (var a = Number.MAX_SAFE_INTEGER, o = -1, f = 0; f < Lt.NUM_MASK_PATTERNS; f++) {
      gr.buildMatrix(e, t, n, f, i);
      var u = this.calculateMaskPenalty(i);
      u < a && (a = u, o = f);
    }
    return o;
  }, r.chooseVersion = function(e, t) {
    for (var n = 1; n <= 40; n++) {
      var i = Ue.getVersionForNumber(n);
      if (r.willFit(e, i, t))
        return i;
    }
    throw new j("Data too big");
  }, r.willFit = function(e, t, n) {
    var i = t.getTotalCodewords(), a = t.getECBlocksForLevel(n), o = a.getTotalECCodewords(), f = i - o, u = (e + 7) / 8;
    return f >= u;
  }, r.terminateBits = function(e, t) {
    var n = e * 8;
    if (t.getSize() > n)
      throw new j("data bits cannot fit in the QR Code" + t.getSize() + " > " + n);
    for (var i = 0; i < 4 && t.getSize() < n; ++i)
      t.appendBit(!1);
    var a = t.getSize() & 7;
    if (a > 0)
      for (var i = a; i < 8; i++)
        t.appendBit(!1);
    for (var o = e - t.getSizeInBytes(), i = 0; i < o; ++i)
      t.appendBits(i & 1 ? 17 : 236, 8);
    if (t.getSize() !== n)
      throw new j("Bits size does not equal capacity");
  }, r.getNumDataBytesAndNumECBytesForBlockID = function(e, t, n, i, a, o) {
    if (i >= n)
      throw new j("Block ID too large");
    var f = e % n, u = n - f, s = Math.floor(e / n), c = s + 1, h = Math.floor(t / n), l = h + 1, d = s - h, v = c - l;
    if (d !== v)
      throw new j("EC bytes mismatch");
    if (n !== u + f)
      throw new j("RS blocks mismatch");
    if (e !== (h + d) * u + (l + v) * f)
      throw new j("Total bytes mismatch");
    i < u ? (a[0] = h, o[0] = d) : (a[0] = l, o[0] = v);
  }, r.interleaveWithECBytes = function(e, t, n, i) {
    var a, o, f, u;
    if (e.getSizeInBytes() !== n)
      throw new j("Number of bits and data bytes does not match");
    for (var s = 0, c = 0, h = 0, l = new Array(), d = 0; d < i; ++d) {
      var v = new Int32Array(1), x = new Int32Array(1);
      r.getNumDataBytesAndNumECBytesForBlockID(t, n, i, d, v, x);
      var g = v[0], _ = new Uint8Array(g);
      e.toBytes(8 * s, _, 0, g);
      var y = r.generateECBytes(_, x[0]);
      l.push(new Ba(_, y)), c = Math.max(c, g), h = Math.max(h, y.length), s += v[0];
    }
    if (n !== s)
      throw new j("Data bytes does not match offset");
    for (var A = new fe(), d = 0; d < c; ++d)
      try {
        for (var E = (a = void 0, yr(l)), I = E.next(); !I.done; I = E.next()) {
          var S = I.value, _ = S.getDataBytes();
          d < _.length && A.appendBits(_[d], 8);
        }
      } catch (R) {
        a = { error: R };
      } finally {
        try {
          I && !I.done && (o = E.return) && o.call(E);
        } finally {
          if (a) throw a.error;
        }
      }
    for (var d = 0; d < h; ++d)
      try {
        for (var m = (f = void 0, yr(l)), D = m.next(); !D.done; D = m.next()) {
          var S = D.value, y = S.getErrorCorrectionBytes();
          d < y.length && A.appendBits(y[d], 8);
        }
      } catch (R) {
        f = { error: R };
      } finally {
        try {
          D && !D.done && (u = m.return) && u.call(m);
        } finally {
          if (f) throw f.error;
        }
      }
    if (t !== A.getSizeInBytes())
      throw new j("Interleaving error: " + t + " and " + A.getSizeInBytes() + " differ.");
    return A;
  }, r.generateECBytes = function(e, t) {
    for (var n = e.length, i = new Int32Array(n + t), a = 0; a < n; a++)
      i[a] = e[a] & 255;
    new Ur(ge.QR_CODE_FIELD_256).encode(i, t);
    for (var o = new Uint8Array(t), a = 0; a < t; a++)
      o[a] = /*(byte) */
      i[n + a];
    return o;
  }, r.appendModeInfo = function(e, t) {
    t.appendBits(e.getBits(), 4);
  }, r.appendLengthInfo = function(e, t, n, i) {
    var a = n.getCharacterCountBits(t);
    if (e >= 1 << a)
      throw new j(e + " is bigger than " + ((1 << a) - 1));
    i.appendBits(e, a);
  }, r.appendBytes = function(e, t, n, i) {
    switch (t) {
      case Z.NUMERIC:
        r.appendNumericBytes(e, n);
        break;
      case Z.ALPHANUMERIC:
        r.appendAlphanumericBytes(e, n);
        break;
      case Z.BYTE:
        r.append8BitBytes(e, n, i);
        break;
      case Z.KANJI:
        r.appendKanjiBytes(e, n);
        break;
      default:
        throw new j("Invalid mode: " + t);
    }
  }, r.getDigit = function(e) {
    return e.charCodeAt(0) - 48;
  }, r.isDigit = function(e) {
    var t = r.getDigit(e);
    return t >= 0 && t <= 9;
  }, r.appendNumericBytes = function(e, t) {
    for (var n = e.length, i = 0; i < n; ) {
      var a = r.getDigit(e.charAt(i));
      if (i + 2 < n) {
        var o = r.getDigit(e.charAt(i + 1)), f = r.getDigit(e.charAt(i + 2));
        t.appendBits(a * 100 + o * 10 + f, 10), i += 3;
      } else if (i + 1 < n) {
        var o = r.getDigit(e.charAt(i + 1));
        t.appendBits(a * 10 + o, 7), i += 2;
      } else
        t.appendBits(a, 4), i++;
    }
  }, r.appendAlphanumericBytes = function(e, t) {
    for (var n = e.length, i = 0; i < n; ) {
      var a = r.getAlphanumericCode(e.charCodeAt(i));
      if (a === -1)
        throw new j();
      if (i + 1 < n) {
        var o = r.getAlphanumericCode(e.charCodeAt(i + 1));
        if (o === -1)
          throw new j();
        t.appendBits(a * 45 + o, 11), i += 2;
      } else
        t.appendBits(a, 6), i++;
    }
  }, r.append8BitBytes = function(e, t, n) {
    var i;
    try {
      i = Ee.encode(e, n);
    } catch (u) {
      throw new j(u);
    }
    for (var a = 0, o = i.length; a !== o; a++) {
      var f = i[a];
      t.appendBits(f, 8);
    }
  }, r.appendKanjiBytes = function(e, t) {
    var n;
    try {
      n = Ee.encode(e, te.SJIS);
    } catch (h) {
      throw new j(h);
    }
    for (var i = n.length, a = 0; a < i; a += 2) {
      var o = n[a] & 255, f = n[a + 1] & 255, u = o << 8 & 4294967295 | f, s = -1;
      if (u >= 33088 && u <= 40956 ? s = u - 33088 : u >= 57408 && u <= 60351 && (s = u - 49472), s === -1)
        throw new j("Invalid byte sequence");
      var c = (s >> 8) * 192 + (s & 255);
      t.appendBits(c, 13);
    }
  }, r.appendECI = function(e, t) {
    t.appendBits(Z.ECI.getBits(), 4), t.appendBits(e.getValue(), 8);
  }, r.ALPHANUMERIC_TABLE = Int32Array.from([
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    36,
    -1,
    -1,
    -1,
    37,
    38,
    -1,
    -1,
    -1,
    -1,
    39,
    40,
    -1,
    41,
    42,
    43,
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    44,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    -1,
    -1,
    -1,
    -1,
    -1
  ]), r.DEFAULT_BYTE_MODE_ENCODING = te.UTF8.getName(), r;
})();
var Fa = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
(function(r) {
  Fa(e, r);
  function e(t, n, i, a, o, f, u, s) {
    var c = r.call(this, f, u) || this;
    if (c.yuvData = t, c.dataWidth = n, c.dataHeight = i, c.left = a, c.top = o, a + f > n || o + u > i)
      throw new N("Crop rectangle does not fit within image data.");
    return s && c.reverseHorizontal(f, u), c;
  }
  return e.prototype.getRow = function(t, n) {
    if (t < 0 || t >= this.getHeight())
      throw new N("Requested row is outside the image: " + t);
    var i = this.getWidth();
    (n == null || n.length < i) && (n = new Uint8ClampedArray(i));
    var a = (t + this.top) * this.dataWidth + this.left;
    return Y.arraycopy(this.yuvData, a, n, 0, i), n;
  }, e.prototype.getMatrix = function() {
    var t = this.getWidth(), n = this.getHeight();
    if (t === this.dataWidth && n === this.dataHeight)
      return this.yuvData;
    var i = t * n, a = new Uint8ClampedArray(i), o = this.top * this.dataWidth + this.left;
    if (t === this.dataWidth)
      return Y.arraycopy(this.yuvData, o, a, 0, i), a;
    for (var f = 0; f < n; f++) {
      var u = f * t;
      Y.arraycopy(this.yuvData, o, a, u, t), o += this.dataWidth;
    }
    return a;
  }, e.prototype.isCropSupported = function() {
    return !0;
  }, e.prototype.crop = function(t, n, i, a) {
    return new e(this.yuvData, this.dataWidth, this.dataHeight, this.left + t, this.top + n, i, a, !1);
  }, e.prototype.renderThumbnail = function() {
    for (var t = this.getWidth() / e.THUMBNAIL_SCALE_FACTOR, n = this.getHeight() / e.THUMBNAIL_SCALE_FACTOR, i = new Int32Array(t * n), a = this.yuvData, o = this.top * this.dataWidth + this.left, f = 0; f < n; f++) {
      for (var u = f * t, s = 0; s < t; s++) {
        var c = a[o + s * e.THUMBNAIL_SCALE_FACTOR] & 255;
        i[u + s] = 4278190080 | c * 65793;
      }
      o += this.dataWidth * e.THUMBNAIL_SCALE_FACTOR;
    }
    return i;
  }, e.prototype.getThumbnailWidth = function() {
    return this.getWidth() / e.THUMBNAIL_SCALE_FACTOR;
  }, e.prototype.getThumbnailHeight = function() {
    return this.getHeight() / e.THUMBNAIL_SCALE_FACTOR;
  }, e.prototype.reverseHorizontal = function(t, n) {
    for (var i = this.yuvData, a = 0, o = this.top * this.dataWidth + this.left; a < n; a++, o += this.dataWidth)
      for (var f = o + t / 2, u = o, s = o + t - 1; u < f; u++, s--) {
        var c = i[u];
        i[u] = i[s], i[s] = c;
      }
  }, e.prototype.invert = function() {
    return new Ht(this);
  }, e.THUMBNAIL_SCALE_FACTOR = 2, e;
})(ct);
var La = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
(function(r) {
  La(e, r);
  function e(t, n, i, a, o, f, u) {
    var s = r.call(this, n, i) || this;
    if (s.dataWidth = a, s.dataHeight = o, s.left = f, s.top = u, t.BYTES_PER_ELEMENT === 4) {
      for (var c = n * i, h = new Uint8ClampedArray(c), l = 0; l < c; l++) {
        var d = t[l], v = d >> 16 & 255, x = d >> 7 & 510, g = d & 255;
        h[l] = /*(byte) */
        (v + x + g) / 4 & 255;
      }
      s.luminances = h;
    } else
      s.luminances = t;
    if (a === void 0 && (s.dataWidth = n), o === void 0 && (s.dataHeight = i), f === void 0 && (s.left = 0), u === void 0 && (s.top = 0), s.left + n > s.dataWidth || s.top + i > s.dataHeight)
      throw new N("Crop rectangle does not fit within image data.");
    return s;
  }
  return e.prototype.getRow = function(t, n) {
    if (t < 0 || t >= this.getHeight())
      throw new N("Requested row is outside the image: " + t);
    var i = this.getWidth();
    (n == null || n.length < i) && (n = new Uint8ClampedArray(i));
    var a = (t + this.top) * this.dataWidth + this.left;
    return Y.arraycopy(this.luminances, a, n, 0, i), n;
  }, e.prototype.getMatrix = function() {
    var t = this.getWidth(), n = this.getHeight();
    if (t === this.dataWidth && n === this.dataHeight)
      return this.luminances;
    var i = t * n, a = new Uint8ClampedArray(i), o = this.top * this.dataWidth + this.left;
    if (t === this.dataWidth)
      return Y.arraycopy(this.luminances, o, a, 0, i), a;
    for (var f = 0; f < n; f++) {
      var u = f * t;
      Y.arraycopy(this.luminances, o, a, u, t), o += this.dataWidth;
    }
    return a;
  }, e.prototype.isCropSupported = function() {
    return !0;
  }, e.prototype.crop = function(t, n, i, a) {
    return new e(this.luminances, i, a, this.dataWidth, this.dataHeight, this.left + t, this.top + n);
  }, e.prototype.invert = function() {
    return new Ht(this);
  }, e;
})(ct);
var ka = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Ua = (
  /** @class */
  function(r) {
    ka(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.forName = function(t) {
      return this.getCharacterSetECIByName(t);
    }, e;
  }(te)
), Ha = (
  /** @class */
  function() {
    function r() {
    }
    return r.ISO_8859_1 = te.ISO8859_1, r;
  }()
), kt, Va = 301, Ga = function(r, e) {
  for (var t = 1, n = 0; n < 255; n++)
    e[n] = t, r[t] = n, t *= 2, t >= 256 && (t ^= Va);
  return {
    LOG: r,
    ALOG: e
  };
};
kt = Ga([], []), kt.LOG;
kt.ALOG;
var _r;
(function(r) {
  r[r.FORCE_NONE = 0] = "FORCE_NONE", r[r.FORCE_SQUARE = 1] = "FORCE_SQUARE", r[r.FORCE_RECTANGLE = 2] = "FORCE_RECTANGLE";
})(_r || (_r = {}));
var wr = 129, Hr = 230, Xa = 231, Wa = 235, za = 236, Ya = 237, ja = 238, Za = 239, $a = 240, At = 254, Ka = 254, Ar = "[)>05", Er = "[)>06", Cr = "", W = 0, se = 1, pe = 2, J = 3, ae = 4, he = 5, qa = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getEncodingMode = function() {
      return W;
    }, r.prototype.encode = function(e) {
      var t = me.determineConsecutiveDigitCount(e.getMessage(), e.pos);
      if (t >= 2)
        e.writeCodeword(this.encodeASCIIDigits(e.getMessage().charCodeAt(e.pos), e.getMessage().charCodeAt(e.pos + 1))), e.pos += 2;
      else {
        var n = e.getCurrentChar(), i = me.lookAheadTest(e.getMessage(), e.pos, this.getEncodingMode());
        if (i !== this.getEncodingMode())
          switch (i) {
            case he:
              e.writeCodeword(Xa), e.signalEncoderChange(he);
              return;
            case se:
              e.writeCodeword(Hr), e.signalEncoderChange(se);
              return;
            case J:
              e.writeCodeword(ja), e.signalEncoderChange(J);
              break;
            case pe:
              e.writeCodeword(Za), e.signalEncoderChange(pe);
              break;
            case ae:
              e.writeCodeword($a), e.signalEncoderChange(ae);
              break;
            default:
              throw new Error("Illegal mode: " + i);
          }
        else me.isExtendedASCII(n) ? (e.writeCodeword(Wa), e.writeCodeword(n - 128 + 1), e.pos++) : (e.writeCodeword(n + 1), e.pos++);
      }
    }, r.prototype.encodeASCIIDigits = function(e, t) {
      if (me.isDigit(e) && me.isDigit(t)) {
        var n = (e - 48) * 10 + (t - 48);
        return n + 130;
      }
      throw new Error("not digits: " + e + t);
    }, r;
  }()
), Qa = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getEncodingMode = function() {
      return he;
    }, r.prototype.encode = function(e) {
      var t = new M();
      for (t.append(0); e.hasMoreCharacters(); ) {
        var n = e.getCurrentChar();
        t.append(n), e.pos++;
        var i = me.lookAheadTest(e.getMessage(), e.pos, this.getEncodingMode());
        if (i !== this.getEncodingMode()) {
          e.signalEncoderChange(W);
          break;
        }
      }
      var a = t.length() - 1, o = 1, f = e.getCodewordCount() + a + o;
      e.updateSymbolInfo(f);
      var u = e.getSymbolInfo().getDataCapacity() - f > 0;
      if (e.hasMoreCharacters() || u)
        if (a <= 249)
          t.setCharAt(0, F.getCharAt(a));
        else if (a <= 1555)
          t.setCharAt(0, F.getCharAt(Math.floor(a / 250) + 249)), t.insert(1, F.getCharAt(a % 250));
        else
          throw new Error("Message length not in valid ranges: " + a);
      for (var s = 0, n = t.length(); s < n; s++)
        e.writeCodeword(this.randomize255State(t.charAt(s).charCodeAt(0), e.getCodewordCount() + 1));
    }, r.prototype.randomize255State = function(e, t) {
      var n = 149 * t % 255 + 1, i = e + n;
      return i <= 255 ? i : i - 256;
    }, r;
  }()
), zt = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getEncodingMode = function() {
      return se;
    }, r.prototype.encodeMaximal = function(e) {
      for (var t = new M(), n = 0, i = e.pos, a = 0; e.hasMoreCharacters(); ) {
        var o = e.getCurrentChar();
        e.pos++, n = this.encodeChar(o, t), t.length() % 3 === 0 && (i = e.pos, a = t.length());
      }
      if (a !== t.length()) {
        var f = Math.floor(t.length() / 3 * 2), u = Math.floor(e.getCodewordCount() + f + 1);
        e.updateSymbolInfo(u);
        var s = e.getSymbolInfo().getDataCapacity() - u, c = Math.floor(t.length() % 3);
        (c === 2 && s !== 2 || c === 1 && (n > 3 || s !== 1)) && (e.pos = i);
      }
      t.length() > 0 && e.writeCodeword(Hr), this.handleEOD(e, t);
    }, r.prototype.encode = function(e) {
      for (var t = new M(); e.hasMoreCharacters(); ) {
        var n = e.getCurrentChar();
        e.pos++;
        var i = this.encodeChar(n, t), a = Math.floor(t.length() / 3) * 2, o = e.getCodewordCount() + a;
        e.updateSymbolInfo(o);
        var f = e.getSymbolInfo().getDataCapacity() - o;
        if (!e.hasMoreCharacters()) {
          var u = new M();
          for (t.length() % 3 === 2 && f !== 2 && (i = this.backtrackOneCharacter(e, t, u, i)); t.length() % 3 === 1 && (i > 3 || f !== 1); )
            i = this.backtrackOneCharacter(e, t, u, i);
          break;
        }
        var s = t.length();
        if (s % 3 === 0) {
          var c = me.lookAheadTest(e.getMessage(), e.pos, this.getEncodingMode());
          if (c !== this.getEncodingMode()) {
            e.signalEncoderChange(W);
            break;
          }
        }
      }
      this.handleEOD(e, t);
    }, r.prototype.backtrackOneCharacter = function(e, t, n, i) {
      var a = t.length(), o = t.toString().substring(0, a - i);
      t.setLengthToZero(), t.append(o), e.pos--;
      var f = e.getCurrentChar();
      return i = this.encodeChar(f, n), e.resetSymbolInfo(), i;
    }, r.prototype.writeNextTriplet = function(e, t) {
      e.writeCodewords(this.encodeToCodewords(t.toString()));
      var n = t.toString().substring(3);
      t.setLengthToZero(), t.append(n);
    }, r.prototype.handleEOD = function(e, t) {
      var n = Math.floor(t.length() / 3 * 2), i = t.length() % 3, a = e.getCodewordCount() + n;
      e.updateSymbolInfo(a);
      var o = e.getSymbolInfo().getDataCapacity() - a;
      if (i === 2) {
        for (t.append("\0"); t.length() >= 3; )
          this.writeNextTriplet(e, t);
        e.hasMoreCharacters() && e.writeCodeword(At);
      } else if (o === 1 && i === 1) {
        for (; t.length() >= 3; )
          this.writeNextTriplet(e, t);
        e.hasMoreCharacters() && e.writeCodeword(At), e.pos--;
      } else if (i === 0) {
        for (; t.length() >= 3; )
          this.writeNextTriplet(e, t);
        (o > 0 || e.hasMoreCharacters()) && e.writeCodeword(At);
      } else
        throw new Error("Unexpected case. Please report!");
      e.signalEncoderChange(W);
    }, r.prototype.encodeChar = function(e, t) {
      if (e === 32)
        return t.append(3), 1;
      if (e >= 48 && e <= 57)
        return t.append(e - 48 + 4), 1;
      if (e >= 65 && e <= 90)
        return t.append(e - 65 + 14), 1;
      if (e < 32)
        return t.append(0), t.append(e), 2;
      if (e <= 47)
        return t.append(1), t.append(e - 33), 2;
      if (e <= 64)
        return t.append(1), t.append(e - 58 + 15), 2;
      if (e <= 95)
        return t.append(1), t.append(e - 91 + 22), 2;
      if (e <= 127)
        return t.append(2), t.append(e - 96), 2;
      t.append("1");
      var n = 2;
      return n += this.encodeChar(e - 128, t), n;
    }, r.prototype.encodeToCodewords = function(e) {
      var t = 1600 * e.charCodeAt(0) + 40 * e.charCodeAt(1) + e.charCodeAt(2) + 1, n = t / 256, i = t % 256, a = new M();
      return a.append(n), a.append(i), a.toString();
    }, r;
  }()
), Ja = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.getEncodingMode = function() {
      return ae;
    }, r.prototype.encode = function(e) {
      for (var t = new M(); e.hasMoreCharacters(); ) {
        var n = e.getCurrentChar();
        this.encodeChar(n, t), e.pos++;
        var i = t.length();
        if (i >= 4) {
          e.writeCodewords(this.encodeToCodewords(t.toString()));
          var a = t.toString().substring(4);
          t.setLengthToZero(), t.append(a);
          var o = me.lookAheadTest(e.getMessage(), e.pos, this.getEncodingMode());
          if (o !== this.getEncodingMode()) {
            e.signalEncoderChange(W);
            break;
          }
        }
      }
      t.append(F.getCharAt(31)), this.handleEOD(e, t);
    }, r.prototype.handleEOD = function(e, t) {
      try {
        var n = t.length();
        if (n === 0)
          return;
        if (n === 1) {
          e.updateSymbolInfo();
          var i = e.getSymbolInfo().getDataCapacity() - e.getCodewordCount(), a = e.getRemainingCharacters();
          if (a > i && (e.updateSymbolInfo(e.getCodewordCount() + 1), i = e.getSymbolInfo().getDataCapacity() - e.getCodewordCount()), a <= i && i <= 2)
            return;
        }
        if (n > 4)
          throw new Error("Count must not exceed 4");
        var o = n - 1, f = this.encodeToCodewords(t.toString()), u = !e.hasMoreCharacters(), s = u && o <= 2;
        if (o <= 2) {
          e.updateSymbolInfo(e.getCodewordCount() + o);
          var i = e.getSymbolInfo().getDataCapacity() - e.getCodewordCount();
          i >= 3 && (s = !1, e.updateSymbolInfo(e.getCodewordCount() + f.length));
        }
        s ? (e.resetSymbolInfo(), e.pos -= o) : e.writeCodewords(f);
      } finally {
        e.signalEncoderChange(W);
      }
    }, r.prototype.encodeChar = function(e, t) {
      e >= 32 && e <= 63 ? t.append(e) : e >= 64 && e <= 94 ? t.append(F.getCharAt(e - 64)) : me.illegalCharacter(F.getCharAt(e));
    }, r.prototype.encodeToCodewords = function(e) {
      var t = e.length;
      if (t === 0)
        throw new Error("StringBuilder must not be empty");
      var n = e.charAt(0).charCodeAt(0), i = t >= 2 ? e.charAt(1).charCodeAt(0) : 0, a = t >= 3 ? e.charAt(2).charCodeAt(0) : 0, o = t >= 4 ? e.charAt(3).charCodeAt(0) : 0, f = (n << 18) + (i << 12) + (a << 6) + o, u = f >> 16 & 255, s = f >> 8 & 255, c = f & 255, h = new M();
      return h.append(u), t >= 2 && h.append(s), t >= 3 && h.append(c), h.toString();
    }, r;
  }()
), eo = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), to = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, V = (
  /** @class */
  function() {
    function r(e, t, n, i, a, o, f, u) {
      f === void 0 && (f = 0), u === void 0 && (u = 0), this.rectangular = e, this.dataCapacity = t, this.errorCodewords = n, this.matrixWidth = i, this.matrixHeight = a, this.dataRegions = o, this.rsBlockData = f, this.rsBlockError = u;
    }
    return r.lookup = function(e, t, n, i, a) {
      var o, f;
      t === void 0 && (t = 0), n === void 0 && (n = null), i === void 0 && (i = null), a === void 0 && (a = !0);
      try {
        for (var u = to(no), s = u.next(); !s.done; s = u.next()) {
          var c = s.value;
          if (!(t === 1 && c.rectangular) && !(t === 2 && !c.rectangular) && !(n != null && (c.getSymbolWidth() < n.getWidth() || c.getSymbolHeight() < n.getHeight())) && !(i != null && (c.getSymbolWidth() > i.getWidth() || c.getSymbolHeight() > i.getHeight())) && e <= c.dataCapacity)
            return c;
        }
      } catch (h) {
        o = { error: h };
      } finally {
        try {
          s && !s.done && (f = u.return) && f.call(u);
        } finally {
          if (o) throw o.error;
        }
      }
      if (a)
        throw new Error("Can't find a symbol arrangement that matches the message. Data codewords: " + e);
      return null;
    }, r.prototype.getHorizontalDataRegions = function() {
      switch (this.dataRegions) {
        case 1:
          return 1;
        case 2:
        case 4:
          return 2;
        case 16:
          return 4;
        case 36:
          return 6;
        default:
          throw new Error("Cannot handle this number of data regions");
      }
    }, r.prototype.getVerticalDataRegions = function() {
      switch (this.dataRegions) {
        case 1:
        case 2:
          return 1;
        case 4:
          return 2;
        case 16:
          return 4;
        case 36:
          return 6;
        default:
          throw new Error("Cannot handle this number of data regions");
      }
    }, r.prototype.getSymbolDataWidth = function() {
      return this.getHorizontalDataRegions() * this.matrixWidth;
    }, r.prototype.getSymbolDataHeight = function() {
      return this.getVerticalDataRegions() * this.matrixHeight;
    }, r.prototype.getSymbolWidth = function() {
      return this.getSymbolDataWidth() + this.getHorizontalDataRegions() * 2;
    }, r.prototype.getSymbolHeight = function() {
      return this.getSymbolDataHeight() + this.getVerticalDataRegions() * 2;
    }, r.prototype.getCodewordCount = function() {
      return this.dataCapacity + this.errorCodewords;
    }, r.prototype.getInterleavedBlockCount = function() {
      return this.rsBlockData ? this.dataCapacity / this.rsBlockData : 1;
    }, r.prototype.getDataCapacity = function() {
      return this.dataCapacity;
    }, r.prototype.getErrorCodewords = function() {
      return this.errorCodewords;
    }, r.prototype.getDataLengthForInterleavedBlock = function(e) {
      return this.rsBlockData;
    }, r.prototype.getErrorLengthForInterleavedBlock = function(e) {
      return this.rsBlockError;
    }, r;
  }()
), ro = (
  /** @class */
  function(r) {
    eo(e, r);
    function e() {
      return r.call(this, !1, 1558, 620, 22, 22, 36, -1, 62) || this;
    }
    return e.prototype.getInterleavedBlockCount = function() {
      return 10;
    }, e.prototype.getDataLengthForInterleavedBlock = function(t) {
      return t <= 8 ? 156 : 155;
    }, e;
  }(V)
), no = [
  new V(!1, 3, 5, 8, 8, 1),
  new V(!1, 5, 7, 10, 10, 1),
  /*rect*/
  new V(!0, 5, 7, 16, 6, 1),
  new V(!1, 8, 10, 12, 12, 1),
  /*rect*/
  new V(!0, 10, 11, 14, 6, 2),
  new V(!1, 12, 12, 14, 14, 1),
  /*rect*/
  new V(!0, 16, 14, 24, 10, 1),
  new V(!1, 18, 14, 16, 16, 1),
  new V(!1, 22, 18, 18, 18, 1),
  /*rect*/
  new V(!0, 22, 18, 16, 10, 2),
  new V(!1, 30, 20, 20, 20, 1),
  /*rect*/
  new V(!0, 32, 24, 16, 14, 2),
  new V(!1, 36, 24, 22, 22, 1),
  new V(!1, 44, 28, 24, 24, 1),
  /*rect*/
  new V(!0, 49, 28, 22, 14, 2),
  new V(!1, 62, 36, 14, 14, 4),
  new V(!1, 86, 42, 16, 16, 4),
  new V(!1, 114, 48, 18, 18, 4),
  new V(!1, 144, 56, 20, 20, 4),
  new V(!1, 174, 68, 22, 22, 4),
  new V(!1, 204, 84, 24, 24, 4, 102, 42),
  new V(!1, 280, 112, 14, 14, 16, 140, 56),
  new V(!1, 368, 144, 16, 16, 16, 92, 36),
  new V(!1, 456, 192, 18, 18, 16, 114, 48),
  new V(!1, 576, 224, 20, 20, 16, 144, 56),
  new V(!1, 696, 272, 22, 22, 16, 174, 68),
  new V(!1, 816, 336, 24, 24, 16, 136, 56),
  new V(!1, 1050, 408, 18, 18, 36, 175, 68),
  new V(!1, 1304, 496, 20, 20, 36, 163, 62),
  new ro()
], io = (
  /** @class */
  function() {
    function r(e) {
      this.msg = e, this.pos = 0, this.skipAtEnd = 0;
      for (var t = e.split("").map(function(f) {
        return f.charCodeAt(0);
      }), n = new M(), i = 0, a = t.length; i < a; i++) {
        var o = String.fromCharCode(t[i] & 255);
        if (o === "?" && e.charAt(i) !== "?")
          throw new Error("Message contains characters outside ISO-8859-1 encoding.");
        n.append(o);
      }
      this.msg = n.toString(), this.shape = 0, this.codewords = new M(), this.newEncoding = -1;
    }
    return r.prototype.setSymbolShape = function(e) {
      this.shape = e;
    }, r.prototype.setSizeConstraints = function(e, t) {
      this.minSize = e, this.maxSize = t;
    }, r.prototype.getMessage = function() {
      return this.msg;
    }, r.prototype.setSkipAtEnd = function(e) {
      this.skipAtEnd = e;
    }, r.prototype.getCurrentChar = function() {
      return this.msg.charCodeAt(this.pos);
    }, r.prototype.getCurrent = function() {
      return this.msg.charCodeAt(this.pos);
    }, r.prototype.getCodewords = function() {
      return this.codewords;
    }, r.prototype.writeCodewords = function(e) {
      this.codewords.append(e);
    }, r.prototype.writeCodeword = function(e) {
      this.codewords.append(e);
    }, r.prototype.getCodewordCount = function() {
      return this.codewords.length();
    }, r.prototype.getNewEncoding = function() {
      return this.newEncoding;
    }, r.prototype.signalEncoderChange = function(e) {
      this.newEncoding = e;
    }, r.prototype.resetEncoderSignal = function() {
      this.newEncoding = -1;
    }, r.prototype.hasMoreCharacters = function() {
      return this.pos < this.getTotalMessageCharCount();
    }, r.prototype.getTotalMessageCharCount = function() {
      return this.msg.length - this.skipAtEnd;
    }, r.prototype.getRemainingCharacters = function() {
      return this.getTotalMessageCharCount() - this.pos;
    }, r.prototype.getSymbolInfo = function() {
      return this.symbolInfo;
    }, r.prototype.updateSymbolInfo = function(e) {
      e === void 0 && (e = this.getCodewordCount()), (this.symbolInfo == null || e > this.symbolInfo.getDataCapacity()) && (this.symbolInfo = V.lookup(e, this.shape, this.minSize, this.maxSize, !0));
    }, r.prototype.resetSymbolInfo = function() {
      this.symbolInfo = null;
    }, r;
  }()
), ao = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), oo = (
  /** @class */
  function(r) {
    ao(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.getEncodingMode = function() {
      return J;
    }, e.prototype.encode = function(t) {
      for (var n = new M(); t.hasMoreCharacters(); ) {
        var i = t.getCurrentChar();
        t.pos++, this.encodeChar(i, n);
        var a = n.length();
        if (a % 3 === 0) {
          this.writeNextTriplet(t, n);
          var o = me.lookAheadTest(t.getMessage(), t.pos, this.getEncodingMode());
          if (o !== this.getEncodingMode()) {
            t.signalEncoderChange(W);
            break;
          }
        }
      }
      this.handleEOD(t, n);
    }, e.prototype.encodeChar = function(t, n) {
      switch (t) {
        case 13:
          n.append(0);
          break;
        case 42:
          n.append(1);
          break;
        case 62:
          n.append(2);
          break;
        case 32:
          n.append(3);
          break;
        default:
          t >= 48 && t <= 57 ? n.append(t - 48 + 4) : t >= 65 && t <= 90 ? n.append(t - 65 + 14) : me.illegalCharacter(F.getCharAt(t));
          break;
      }
      return 1;
    }, e.prototype.handleEOD = function(t, n) {
      t.updateSymbolInfo();
      var i = t.getSymbolInfo().getDataCapacity() - t.getCodewordCount(), a = n.length();
      t.pos -= a, (t.getRemainingCharacters() > 1 || i > 1 || t.getRemainingCharacters() !== i) && t.writeCodeword(Ka), t.getNewEncoding() < 0 && t.signalEncoderChange(W);
    }, e;
  }(zt)
), fo = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), uo = (
  /** @class */
  function(r) {
    fo(e, r);
    function e() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return e.prototype.getEncodingMode = function() {
      return pe;
    }, e.prototype.encodeChar = function(t, n) {
      if (t === 32)
        return n.append(3), 1;
      if (t >= 48 && t <= 57)
        return n.append(t - 48 + 4), 1;
      if (t >= 97 && t <= 122)
        return n.append(t - 97 + 14), 1;
      if (t < 32)
        return n.append(0), n.append(t), 2;
      if (t <= 47)
        return n.append(1), n.append(t - 33), 2;
      if (t <= 64)
        return n.append(1), n.append(t - 58 + 15), 2;
      if (t >= 91 && t <= 95)
        return n.append(1), n.append(t - 91 + 22), 2;
      if (t === 96)
        return n.append(2), n.append(0), 2;
      if (t <= 90)
        return n.append(2), n.append(t - 65 + 1), 2;
      if (t <= 127)
        return n.append(2), n.append(t - 123 + 27), 2;
      n.append("1");
      var i = 2;
      return i += this.encodeChar(t - 128, n), i;
    }, e;
  }(zt)
), so = (
  /** @class */
  function() {
    function r() {
    }
    return r.randomize253State = function(e) {
      var t = 149 * e % 253 + 1, n = wr + t;
      return n <= 254 ? n : n - 254;
    }, r.encodeHighLevel = function(e, t, n, i, a) {
      t === void 0 && (t = 0), n === void 0 && (n = null), i === void 0 && (i = null), a === void 0 && (a = !1);
      var o = new zt(), f = [
        new qa(),
        o,
        new uo(),
        new oo(),
        new Ja(),
        new Qa()
      ], u = new io(e);
      u.setSymbolShape(t), u.setSizeConstraints(n, i), e.startsWith(Ar) && e.endsWith(Cr) ? (u.writeCodeword(za), u.setSkipAtEnd(2), u.pos += Ar.length) : e.startsWith(Er) && e.endsWith(Cr) && (u.writeCodeword(Ya), u.setSkipAtEnd(2), u.pos += Er.length);
      var s = W;
      for (a && (o.encodeMaximal(u), s = u.getNewEncoding(), u.resetEncoderSignal()); u.hasMoreCharacters(); )
        f[s].encode(u), u.getNewEncoding() >= 0 && (s = u.getNewEncoding(), u.resetEncoderSignal());
      var c = u.getCodewordCount();
      u.updateSymbolInfo();
      var h = u.getSymbolInfo().getDataCapacity();
      c < h && s !== W && s !== he && s !== ae && u.writeCodeword("þ");
      var l = u.getCodewords();
      for (l.length() < h && l.append(wr); l.length() < h; )
        l.append(this.randomize253State(l.length() + 1));
      return u.getCodewords().toString();
    }, r.lookAheadTest = function(e, t, n) {
      var i = this.lookAheadTestIntern(e, t, n);
      if (n === J && i === J) {
        for (var a = Math.min(t + 3, e.length), o = t; o < a; o++)
          if (!this.isNativeX12(e.charCodeAt(o)))
            return W;
      } else if (n === ae && i === ae) {
        for (var a = Math.min(t + 4, e.length), o = t; o < a; o++)
          if (!this.isNativeEDIFACT(e.charCodeAt(o)))
            return W;
      }
      return i;
    }, r.lookAheadTestIntern = function(e, t, n) {
      if (t >= e.length)
        return n;
      var i;
      n === W ? i = [0, 1, 1, 1, 1, 1.25] : (i = [1, 2, 2, 2, 2, 2.25], i[n] = 0);
      for (var a = 0, o = new Uint8Array(6), f = []; ; ) {
        if (t + a === e.length) {
          re.fill(o, 0), re.fill(f, 0);
          var u = this.findMinimums(i, f, B.MAX_VALUE, o), s = this.getMinimumCount(o);
          if (f[W] === u)
            return W;
          if (s === 1) {
            if (o[he] > 0)
              return he;
            if (o[ae] > 0)
              return ae;
            if (o[pe] > 0)
              return pe;
            if (o[J] > 0)
              return J;
          }
          return se;
        }
        var c = e.charCodeAt(t + a);
        if (a++, this.isDigit(c) ? i[W] += 0.5 : this.isExtendedASCII(c) ? (i[W] = Math.ceil(i[W]), i[W] += 2) : (i[W] = Math.ceil(i[W]), i[W]++), this.isNativeC40(c) ? i[se] += 2 / 3 : this.isExtendedASCII(c) ? i[se] += 8 / 3 : i[se] += 4 / 3, this.isNativeText(c) ? i[pe] += 2 / 3 : this.isExtendedASCII(c) ? i[pe] += 8 / 3 : i[pe] += 4 / 3, this.isNativeX12(c) ? i[J] += 2 / 3 : this.isExtendedASCII(c) ? i[J] += 13 / 3 : i[J] += 10 / 3, this.isNativeEDIFACT(c) ? i[ae] += 3 / 4 : this.isExtendedASCII(c) ? i[ae] += 17 / 4 : i[ae] += 13 / 4, this.isSpecialB256(c) ? i[he] += 4 : i[he]++, a >= 4) {
          if (re.fill(o, 0), re.fill(f, 0), this.findMinimums(i, f, B.MAX_VALUE, o), f[W] < this.min(f[he], f[se], f[pe], f[J], f[ae]))
            return W;
          if (f[he] < f[W] || f[he] + 1 < this.min(f[se], f[pe], f[J], f[ae]))
            return he;
          if (f[ae] + 1 < this.min(f[he], f[se], f[pe], f[J], f[W]))
            return ae;
          if (f[pe] + 1 < this.min(f[he], f[se], f[ae], f[J], f[W]))
            return pe;
          if (f[J] + 1 < this.min(f[he], f[se], f[ae], f[pe], f[W]))
            return J;
          if (f[se] + 1 < this.min(f[W], f[he], f[ae], f[pe])) {
            if (f[se] < f[J])
              return se;
            if (f[se] === f[J]) {
              for (var h = t + a + 1; h < e.length; ) {
                var l = e.charCodeAt(h);
                if (this.isX12TermSep(l))
                  return J;
                if (!this.isNativeX12(l))
                  break;
                h++;
              }
              return se;
            }
          }
        }
      }
    }, r.min = function(e, t, n, i, a) {
      var o = Math.min(e, Math.min(t, Math.min(n, i)));
      return a === void 0 ? o : Math.min(o, a);
    }, r.findMinimums = function(e, t, n, i) {
      for (var a = 0; a < 6; a++) {
        var o = t[a] = Math.ceil(e[a]);
        n > o && (n = o, re.fill(i, 0)), n === o && (i[a] = i[a] + 1);
      }
      return n;
    }, r.getMinimumCount = function(e) {
      for (var t = 0, n = 0; n < 6; n++)
        t += e[n];
      return t || 0;
    }, r.isDigit = function(e) {
      return e >= 48 && e <= 57;
    }, r.isExtendedASCII = function(e) {
      return e >= 128 && e <= 255;
    }, r.isNativeC40 = function(e) {
      return e === 32 || e >= 48 && e <= 57 || e >= 65 && e <= 90;
    }, r.isNativeText = function(e) {
      return e === 32 || e >= 48 && e <= 57 || e >= 97 && e <= 122;
    }, r.isNativeX12 = function(e) {
      return this.isX12TermSep(e) || e === 32 || e >= 48 && e <= 57 || e >= 65 && e <= 90;
    }, r.isX12TermSep = function(e) {
      return e === 13 || // CR
      e === 42 || e === 62;
    }, r.isNativeEDIFACT = function(e) {
      return e >= 32 && e <= 94;
    }, r.isSpecialB256 = function(e) {
      return !1;
    }, r.determineConsecutiveDigitCount = function(e, t) {
      t === void 0 && (t = 0);
      for (var n = e.length, i = t; i < n && this.isDigit(e.charCodeAt(i)); )
        i++;
      return i - t;
    }, r.illegalCharacter = function(e) {
      var t = B.toHexString(e.charCodeAt(0));
      throw t = "0000".substring(0, 4 - t.length) + t, new Error("Illegal character: " + e + " (0x" + t + ")");
    }, r;
  }()
);
const me = so;
var Et = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, Ir = (
  /** @class */
  function() {
    function r(e) {
      this.charset = e, this.name = e.name;
    }
    return r.prototype.canEncode = function(e) {
      try {
        return Ee.encode(e, this.charset) != null;
      } catch {
        return !1;
      }
    }, r;
  }()
), co = (
  /** @class */
  function() {
    function r(e, t, n) {
      var i, a, o, f, u, s;
      this.ENCODERS = [
        "IBM437",
        "ISO-8859-2",
        "ISO-8859-3",
        "ISO-8859-4",
        "ISO-8859-5",
        "ISO-8859-6",
        "ISO-8859-7",
        "ISO-8859-8",
        "ISO-8859-9",
        "ISO-8859-10",
        "ISO-8859-11",
        "ISO-8859-13",
        "ISO-8859-14",
        "ISO-8859-15",
        "ISO-8859-16",
        "windows-1250",
        "windows-1251",
        "windows-1252",
        "windows-1256",
        "Shift_JIS"
      ].map(function(P) {
        return new Ir(Ua.forName(P));
      }), this.encoders = [];
      var c = [];
      c.push(new Ir(Ha.ISO_8859_1));
      for (var h = t != null && t.name.startsWith("UTF"), l = 0; l < e.length; l++) {
        var d = !1;
        try {
          for (var v = (i = void 0, Et(c)), x = v.next(); !x.done; x = v.next()) {
            var g = x.value, _ = e.charAt(l), y = _.charCodeAt(0);
            if (y === n || g.canEncode(_)) {
              d = !0;
              break;
            }
          }
        } catch (P) {
          i = { error: P };
        } finally {
          try {
            x && !x.done && (a = v.return) && a.call(v);
          } finally {
            if (i) throw i.error;
          }
        }
        if (!d)
          try {
            for (var A = (o = void 0, Et(this.ENCODERS)), E = A.next(); !E.done; E = A.next()) {
              var g = E.value;
              if (g.canEncode(e.charAt(l))) {
                c.push(g), d = !0;
                break;
              }
            }
          } catch (P) {
            o = { error: P };
          } finally {
            try {
              E && !E.done && (f = A.return) && f.call(A);
            } finally {
              if (o) throw o.error;
            }
          }
        d || (h = !0);
      }
      if (c.length === 1 && !h)
        this.encoders = [c[0]];
      else {
        this.encoders = [];
        var I = 0;
        try {
          for (var S = Et(c), m = S.next(); !m.done; m = S.next()) {
            var g = m.value;
            this.encoders[I++] = g;
          }
        } catch (P) {
          u = { error: P };
        } finally {
          try {
            m && !m.done && (s = S.return) && s.call(S);
          } finally {
            if (u) throw u.error;
          }
        }
      }
      var D = -1;
      if (t != null) {
        for (var l = 0; l < this.encoders.length; l++)
          if (this.encoders[l] != null && t.name === this.encoders[l].name) {
            D = l;
            break;
          }
      }
      this.priorityEncoderIndex = D;
    }
    return r.prototype.length = function() {
      return this.encoders.length;
    }, r.prototype.getCharsetName = function(e) {
      if (!(e < this.length()))
        throw new Error("index must be less than length");
      return this.encoders[e].name;
    }, r.prototype.getCharset = function(e) {
      if (!(e < this.length()))
        throw new Error("index must be less than length");
      return this.encoders[e].charset;
    }, r.prototype.getECIValue = function(e) {
      return this.encoders[e].charset.getValueIdentifier();
    }, r.prototype.getPriorityEncoderIndex = function() {
      return this.priorityEncoderIndex;
    }, r.prototype.canEncode = function(e, t) {
      if (!(t < this.length()))
        throw new Error("index must be less than length");
      return !0;
    }, r.prototype.encode = function(e, t) {
      if (!(t < this.length()))
        throw new Error("index must be less than length");
      return Ee.encode(F.getCharAt(e), this.encoders[t].name);
    }, r;
  }()
), ho = 3, lo = (
  /** @class */
  function() {
    function r(e, t, n) {
      this.fnc1 = n;
      var i = new co(e, t, n);
      if (i.length() === 1)
        for (var a = 0; a < this.bytes.length; a++) {
          var o = e.charAt(a).charCodeAt(0);
          this.bytes[a] = o === n ? 1e3 : o;
        }
      else
        this.bytes = this.encodeMinimally(e, i, n);
    }
    return r.prototype.getFNC1Character = function() {
      return this.fnc1;
    }, r.prototype.length = function() {
      return this.bytes.length;
    }, r.prototype.haveNCharacters = function(e, t) {
      if (e + t - 1 >= this.bytes.length)
        return !1;
      for (var n = 0; n < t; n++)
        if (this.isECI(e + n))
          return !1;
      return !0;
    }, r.prototype.charAt = function(e) {
      if (e < 0 || e >= this.length())
        throw new Error("" + e);
      if (this.isECI(e))
        throw new Error("value at " + e + " is not a character but an ECI");
      return this.isFNC1(e) ? this.fnc1 : this.bytes[e];
    }, r.prototype.subSequence = function(e, t) {
      if (e < 0 || e > t || t > this.length())
        throw new Error("" + e);
      for (var n = new M(), i = e; i < t; i++) {
        if (this.isECI(i))
          throw new Error("value at " + i + " is not a character but an ECI");
        n.append(this.charAt(i));
      }
      return n.toString();
    }, r.prototype.isECI = function(e) {
      if (e < 0 || e >= this.length())
        throw new Error("" + e);
      return this.bytes[e] > 255 && this.bytes[e] <= 999;
    }, r.prototype.isFNC1 = function(e) {
      if (e < 0 || e >= this.length())
        throw new Error("" + e);
      return this.bytes[e] === 1e3;
    }, r.prototype.getECIValue = function(e) {
      if (e < 0 || e >= this.length())
        throw new Error("" + e);
      if (!this.isECI(e))
        throw new Error("value at " + e + " is not an ECI but a character");
      return this.bytes[e] - 256;
    }, r.prototype.addEdge = function(e, t, n) {
      (e[t][n.encoderIndex] == null || e[t][n.encoderIndex].cachedTotalSize > n.cachedTotalSize) && (e[t][n.encoderIndex] = n);
    }, r.prototype.addEdges = function(e, t, n, i, a, o) {
      var f = e.charAt(i).charCodeAt(0), u = 0, s = t.length();
      t.getPriorityEncoderIndex() >= 0 && (f === o || t.canEncode(f, t.getPriorityEncoderIndex())) && (u = t.getPriorityEncoderIndex(), s = u + 1);
      for (var c = u; c < s; c++)
        (f === o || t.canEncode(f, c)) && this.addEdge(n, i + 1, new Sr(f, t, c, a, o));
    }, r.prototype.encodeMinimally = function(e, t, n) {
      var i = e.length, a = new Sr[i + 1][t.length()]();
      this.addEdges(e, t, a, 0, null, n);
      for (var o = 1; o <= i; o++) {
        for (var f = 0; f < t.length(); f++)
          a[o][f] != null && o < i && this.addEdges(e, t, a, o, a[o][f], n);
        for (var f = 0; f < t.length(); f++)
          a[o - 1][f] = null;
      }
      for (var u = -1, s = B.MAX_VALUE, f = 0; f < t.length(); f++)
        if (a[i][f] != null) {
          var c = a[i][f];
          c.cachedTotalSize < s && (s = c.cachedTotalSize, u = f);
        }
      if (u < 0)
        throw new Error('Failed to encode "' + e + '"');
      for (var h = [], l = a[i][u]; l != null; ) {
        if (l.isFNC1())
          h.unshift(1e3);
        else
          for (var d = t.encode(l.c, l.encoderIndex), o = d.length - 1; o >= 0; o--)
            h.unshift(d[o] & 255);
        var v = l.previous === null ? 0 : l.previous.encoderIndex;
        v !== l.encoderIndex && h.unshift(256 + t.getECIValue(l.encoderIndex)), l = l.previous;
      }
      for (var x = [], o = 0; o < x.length; o++)
        x[o] = h[o];
      return x;
    }, r;
  }()
), Sr = (
  /** @class */
  function() {
    function r(e, t, n, i, a) {
      this.c = e, this.encoderSet = t, this.encoderIndex = n, this.previous = i, this.fnc1 = a, this.c = e === a ? 1e3 : e;
      var o = this.isFNC1() ? 1 : t.encode(e, n).length, f = i === null ? 0 : i.encoderIndex;
      f !== n && (o += ho), i != null && (o += i.cachedTotalSize), this.cachedTotalSize = o;
    }
    return r.prototype.isFNC1 = function() {
      return this.c === 1e3;
    }, r;
  }()
), vo = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}();
var mr;
(function(r) {
  r[r.ASCII = 0] = "ASCII", r[r.C40 = 1] = "C40", r[r.TEXT = 2] = "TEXT", r[r.X12 = 3] = "X12", r[r.EDF = 4] = "EDF", r[r.B256 = 5] = "B256";
})(mr || (mr = {}));
(function(r) {
  vo(e, r);
  function e(t, n, i, a, o) {
    var f = r.call(this, t, n, i) || this;
    return f.shape = a, f.macroId = o, f;
  }
  return e.prototype.getMacroId = function() {
    return this.macroId;
  }, e.prototype.getShapeHint = function() {
    return this.shape;
  }, e;
})(lo);
var po = (
  /** @class */
  function() {
    function r() {
    }
    return r.prototype.isCompact = function() {
      return this.compact;
    }, r.prototype.setCompact = function(e) {
      this.compact = e;
    }, r.prototype.getSize = function() {
      return this.size;
    }, r.prototype.setSize = function(e) {
      this.size = e;
    }, r.prototype.getLayers = function() {
      return this.layers;
    }, r.prototype.setLayers = function(e) {
      this.layers = e;
    }, r.prototype.getCodeWords = function() {
      return this.codeWords;
    }, r.prototype.setCodeWords = function(e) {
      this.codeWords = e;
    }, r.prototype.getMatrix = function() {
      return this.matrix;
    }, r.prototype.setMatrix = function(e) {
      this.matrix = e;
    }, r;
  }()
), Or = (
  /** @class */
  function() {
    function r() {
    }
    return r.singletonList = function(e) {
      return [e];
    }, r.min = function(e, t) {
      return e.sort(t)[0];
    }, r;
  }()
), xo = (
  /** @class */
  function() {
    function r(e) {
      this.previous = e;
    }
    return r.prototype.getPrevious = function() {
      return this.previous;
    }, r;
  }()
), go = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), Yt = (
  /** @class */
  function(r) {
    go(e, r);
    function e(t, n, i) {
      var a = r.call(this, t) || this;
      return a.value = n, a.bitCount = i, a;
    }
    return e.prototype.appendTo = function(t, n) {
      t.appendBits(this.value, this.bitCount);
    }, e.prototype.add = function(t, n) {
      return new e(this, t, n);
    }, e.prototype.addBinaryShift = function(t, n) {
      return console.warn("addBinaryShift on SimpleToken, this simply returns a copy of this token"), new e(this, t, n);
    }, e.prototype.toString = function() {
      var t = this.value & (1 << this.bitCount) - 1;
      return t |= 1 << this.bitCount, "<" + B.toBinaryString(t | 1 << this.bitCount).substring(1) + ">";
    }, e;
  }(xo)
), yo = /* @__PURE__ */ function() {
  var r = function(e, t) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, i) {
      n.__proto__ = i;
    } || function(n, i) {
      for (var a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
    }, r(e, t);
  };
  return function(e, t) {
    r(e, t);
    function n() {
      this.constructor = e;
    }
    e.prototype = t === null ? Object.create(t) : (n.prototype = t.prototype, new n());
  };
}(), _o = (
  /** @class */
  function(r) {
    yo(e, r);
    function e(t, n, i) {
      var a = r.call(this, t, 0, 0) || this;
      return a.binaryShiftStart = n, a.binaryShiftByteCount = i, a;
    }
    return e.prototype.appendTo = function(t, n) {
      for (var i = 0; i < this.binaryShiftByteCount; i++)
        (i === 0 || i === 31 && this.binaryShiftByteCount <= 62) && (t.appendBits(31, 5), this.binaryShiftByteCount > 62 ? t.appendBits(this.binaryShiftByteCount - 31, 16) : i === 0 ? t.appendBits(Math.min(this.binaryShiftByteCount, 31), 5) : t.appendBits(this.binaryShiftByteCount - 31, 5)), t.appendBits(n[this.binaryShiftStart + i], 8);
    }, e.prototype.addBinaryShift = function(t, n) {
      return new e(this, t, n);
    }, e.prototype.toString = function() {
      return "<" + this.binaryShiftStart + "::" + (this.binaryShiftStart + this.binaryShiftByteCount - 1) + ">";
    }, e;
  }(Yt)
);
function wo(r, e, t) {
  return new _o(r, e, t);
}
function je(r, e, t) {
  return new Yt(r, e, t);
}
var Ao = [
  "UPPER",
  "LOWER",
  "DIGIT",
  "MIXED",
  "PUNCT"
], Me = 0, st = 1, Ae = 2, Vr = 3, Oe = 4, Eo = new Yt(null, 0, 0), Ct = [
  Int32Array.from([
    0,
    (5 << 16) + 28,
    (5 << 16) + 30,
    (5 << 16) + 29,
    656318
    // UPPER -> MIXED -> PUNCT
  ]),
  Int32Array.from([
    (9 << 16) + 480 + 14,
    0,
    (5 << 16) + 30,
    (5 << 16) + 29,
    656318
    // LOWER -> MIXED -> PUNCT
  ]),
  Int32Array.from([
    (4 << 16) + 14,
    (9 << 16) + 448 + 28,
    0,
    (9 << 16) + 448 + 29,
    932798
    // DIGIT -> UPPER -> MIXED -> PUNCT
  ]),
  Int32Array.from([
    (5 << 16) + 29,
    (5 << 16) + 28,
    656318,
    0,
    (5 << 16) + 30
    // MIXED -> PUNCT
  ]),
  Int32Array.from([
    (5 << 16) + 31,
    656380,
    656382,
    656381,
    0
  ])
], Co = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
function Io(r) {
  var e, t;
  try {
    for (var n = Co(r), i = n.next(); !i.done; i = n.next()) {
      var a = i.value;
      re.fill(a, -1);
    }
  } catch (o) {
    e = { error: o };
  } finally {
    try {
      i && !i.done && (t = n.return) && t.call(n);
    } finally {
      if (e) throw e.error;
    }
  }
  return r[Me][Oe] = 0, r[st][Oe] = 0, r[st][Me] = 28, r[Vr][Oe] = 0, r[Ae][Oe] = 0, r[Ae][Me] = 15, r;
}
var Gr = Io(re.createInt32Array(6, 6)), So = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, mo = (
  /** @class */
  function() {
    function r(e, t, n, i) {
      this.token = e, this.mode = t, this.binaryShiftByteCount = n, this.bitCount = i;
    }
    return r.prototype.getMode = function() {
      return this.mode;
    }, r.prototype.getToken = function() {
      return this.token;
    }, r.prototype.getBinaryShiftByteCount = function() {
      return this.binaryShiftByteCount;
    }, r.prototype.getBitCount = function() {
      return this.bitCount;
    }, r.prototype.latchAndAppend = function(e, t) {
      var n = this.bitCount, i = this.token;
      if (e !== this.mode) {
        var a = Ct[this.mode][e];
        i = je(i, a & 65535, a >> 16), n += a >> 16;
      }
      var o = e === Ae ? 4 : 5;
      return i = je(i, t, o), new r(i, e, 0, n + o);
    }, r.prototype.shiftAndAppend = function(e, t) {
      var n = this.token, i = this.mode === Ae ? 4 : 5;
      return n = je(n, Gr[this.mode][e], i), n = je(n, t, 5), new r(n, this.mode, 0, this.bitCount + i + 5);
    }, r.prototype.addBinaryShiftChar = function(e) {
      var t = this.token, n = this.mode, i = this.bitCount;
      if (this.mode === Oe || this.mode === Ae) {
        var a = Ct[n][Me];
        t = je(t, a & 65535, a >> 16), i += a >> 16, n = Me;
      }
      var o = this.binaryShiftByteCount === 0 || this.binaryShiftByteCount === 31 ? 18 : this.binaryShiftByteCount === 62 ? 9 : 8, f = new r(t, n, this.binaryShiftByteCount + 1, i + o);
      return f.binaryShiftByteCount === 2078 && (f = f.endBinaryShift(e + 1)), f;
    }, r.prototype.endBinaryShift = function(e) {
      if (this.binaryShiftByteCount === 0)
        return this;
      var t = this.token;
      return t = wo(t, e - this.binaryShiftByteCount, this.binaryShiftByteCount), new r(t, this.mode, 0, this.bitCount);
    }, r.prototype.isBetterThanOrEqualTo = function(e) {
      var t = this.bitCount + (Ct[this.mode][e.mode] >> 16);
      return this.binaryShiftByteCount < e.binaryShiftByteCount ? t += r.calculateBinaryShiftCost(e) - r.calculateBinaryShiftCost(this) : this.binaryShiftByteCount > e.binaryShiftByteCount && e.binaryShiftByteCount > 0 && (t += 10), t <= e.bitCount;
    }, r.prototype.toBitArray = function(e) {
      for (var t, n, i = [], a = this.endBinaryShift(e.length).token; a !== null; a = a.getPrevious())
        i.unshift(a);
      var o = new fe();
      try {
        for (var f = So(i), u = f.next(); !u.done; u = f.next()) {
          var s = u.value;
          s.appendTo(o, e);
        }
      } catch (c) {
        t = { error: c };
      } finally {
        try {
          u && !u.done && (n = f.return) && n.call(f);
        } finally {
          if (t) throw t.error;
        }
      }
      return o;
    }, r.prototype.toString = function() {
      return F.format("%s bits=%d bytes=%d", Ao[this.mode], this.bitCount, this.binaryShiftByteCount);
    }, r.calculateBinaryShiftCost = function(e) {
      return e.binaryShiftByteCount > 62 ? 21 : e.binaryShiftByteCount > 31 ? 20 : e.binaryShiftByteCount > 0 ? 10 : 0;
    }, r.INITIAL_STATE = new r(Eo, Me, 0, 0), r;
  }()
);
function Oo(r) {
  var e = F.getCharCode(" "), t = F.getCharCode("."), n = F.getCharCode(",");
  r[Me][e] = 1;
  for (var i = F.getCharCode("Z"), a = F.getCharCode("A"), o = a; o <= i; o++)
    r[Me][o] = o - a + 2;
  r[st][e] = 1;
  for (var f = F.getCharCode("z"), u = F.getCharCode("a"), o = u; o <= f; o++)
    r[st][o] = o - u + 2;
  r[Ae][e] = 1;
  for (var s = F.getCharCode("9"), c = F.getCharCode("0"), o = c; o <= s; o++)
    r[Ae][o] = o - c + 2;
  r[Ae][n] = 12, r[Ae][t] = 13;
  for (var h = [
    "\0",
    " ",
    "",
    "",
    "",
    "",
    "",
    "",
    "\x07",
    "\b",
    "	",
    `
`,
    "\v",
    "\f",
    "\r",
    "\x1B",
    "",
    "",
    "",
    "",
    "@",
    "\\",
    "^",
    "_",
    "`",
    "|",
    "~",
    ""
  ], l = 0; l < h.length; l++)
    r[Vr][F.getCharCode(h[l])] = l;
  for (var d = [
    "\0",
    "\r",
    "\0",
    "\0",
    "\0",
    "\0",
    "!",
    "'",
    "#",
    "$",
    "%",
    "&",
    "'",
    "(",
    ")",
    "*",
    "+",
    ",",
    "-",
    ".",
    "/",
    ":",
    ";",
    "<",
    "=",
    ">",
    "?",
    "[",
    "]",
    "{",
    "}"
  ], l = 0; l < d.length; l++)
    F.getCharCode(d[l]) > 0 && (r[Oe][F.getCharCode(d[l])] = l);
  return r;
}
var It = Oo(re.createInt32Array(5, 256)), nt = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}, To = (
  /** @class */
  function() {
    function r(e) {
      this.text = e;
    }
    return r.prototype.encode = function() {
      for (var e = F.getCharCode(" "), t = F.getCharCode(`
`), n = Or.singletonList(mo.INITIAL_STATE), i = 0; i < this.text.length; i++) {
        var a = void 0, o = i + 1 < this.text.length ? this.text[i + 1] : 0;
        switch (this.text[i]) {
          case F.getCharCode("\r"):
            a = o === t ? 2 : 0;
            break;
          case F.getCharCode("."):
            a = o === e ? 3 : 0;
            break;
          case F.getCharCode(","):
            a = o === e ? 4 : 0;
            break;
          case F.getCharCode(":"):
            a = o === e ? 5 : 0;
            break;
          default:
            a = 0;
        }
        a > 0 ? (n = r.updateStateListForPair(n, i, a), i++) : n = this.updateStateListForChar(n, i);
      }
      var f = Or.min(n, function(u, s) {
        return u.getBitCount() - s.getBitCount();
      });
      return f.toBitArray(this.text);
    }, r.prototype.updateStateListForChar = function(e, t) {
      var n, i, a = [];
      try {
        for (var o = nt(e), f = o.next(); !f.done; f = o.next()) {
          var u = f.value;
          this.updateStateForChar(u, t, a);
        }
      } catch (s) {
        n = { error: s };
      } finally {
        try {
          f && !f.done && (i = o.return) && i.call(o);
        } finally {
          if (n) throw n.error;
        }
      }
      return r.simplifyStates(a);
    }, r.prototype.updateStateForChar = function(e, t, n) {
      for (var i = this.text[t] & 255, a = It[e.getMode()][i] > 0, o = null, f = 0; f <= Oe; f++) {
        var u = It[f][i];
        if (u > 0) {
          if (o == null && (o = e.endBinaryShift(t)), !a || f === e.getMode() || f === Ae) {
            var s = o.latchAndAppend(f, u);
            n.push(s);
          }
          if (!a && Gr[e.getMode()][f] >= 0) {
            var c = o.shiftAndAppend(f, u);
            n.push(c);
          }
        }
      }
      if (e.getBinaryShiftByteCount() > 0 || It[e.getMode()][i] === 0) {
        var h = e.addBinaryShiftChar(t);
        n.push(h);
      }
    }, r.updateStateListForPair = function(e, t, n) {
      var i, a, o = [];
      try {
        for (var f = nt(e), u = f.next(); !u.done; u = f.next()) {
          var s = u.value;
          this.updateStateForPair(s, t, n, o);
        }
      } catch (c) {
        i = { error: c };
      } finally {
        try {
          u && !u.done && (a = f.return) && a.call(f);
        } finally {
          if (i) throw i.error;
        }
      }
      return this.simplifyStates(o);
    }, r.updateStateForPair = function(e, t, n, i) {
      var a = e.endBinaryShift(t);
      if (i.push(a.latchAndAppend(Oe, n)), e.getMode() !== Oe && i.push(a.shiftAndAppend(Oe, n)), n === 3 || n === 4) {
        var o = a.latchAndAppend(Ae, 16 - n).latchAndAppend(Ae, 1);
        i.push(o);
      }
      if (e.getBinaryShiftByteCount() > 0) {
        var f = e.addBinaryShiftChar(t).addBinaryShiftChar(t + 1);
        i.push(f);
      }
    }, r.simplifyStates = function(e) {
      var t, n, i, a, o = [];
      try {
        for (var f = nt(e), u = f.next(); !u.done; u = f.next()) {
          var s = u.value, c = !0, h = function(g) {
            if (g.isBetterThanOrEqualTo(s))
              return c = !1, "break";
            s.isBetterThanOrEqualTo(g) && (o = o.filter(function(_) {
              return _ !== g;
            }));
          };
          try {
            for (var l = (i = void 0, nt(o)), d = l.next(); !d.done; d = l.next()) {
              var v = d.value, x = h(v);
              if (x === "break")
                break;
            }
          } catch (g) {
            i = { error: g };
          } finally {
            try {
              d && !d.done && (a = l.return) && a.call(l);
            } finally {
              if (i) throw i.error;
            }
          }
          c && o.push(s);
        }
      } catch (g) {
        t = { error: g };
      } finally {
        try {
          u && !u.done && (n = f.return) && n.call(f);
        } finally {
          if (t) throw t.error;
        }
      }
      return o;
    }, r;
  }()
), Do = function(r) {
  var e = typeof Symbol == "function" && Symbol.iterator, t = e && r[e], n = 0;
  if (t) return t.call(r);
  if (r && typeof r.length == "number") return {
    next: function() {
      return r && n >= r.length && (r = void 0), { value: r && r[n++], done: !r };
    }
  };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
(function() {
  function r() {
  }
  return r.encodeBytes = function(e) {
    return r.encode(e, r.DEFAULT_EC_PERCENT, r.DEFAULT_AZTEC_LAYERS);
  }, r.encode = function(e, t, n) {
    var i = new To(e).encode(), a = B.truncDivision(i.getSize() * t, 100) + 11, o = i.getSize() + a, f, u, s, c, h;
    if (n !== r.DEFAULT_AZTEC_LAYERS) {
      if (f = n < 0, u = Math.abs(n), u > (f ? r.MAX_NB_BITS_COMPACT : r.MAX_NB_BITS))
        throw new N(F.format("Illegal value %s for layers", n));
      s = r.totalBitsInLayer(u, f), c = r.WORD_SIZE[u];
      var l = s - s % c;
      if (h = r.stuffBits(i, c), h.getSize() + a > l)
        throw new N("Data to large for user specified layer");
      if (f && h.getSize() > c * 64)
        throw new N("Data to large for user specified layer");
    } else {
      c = 0, h = null;
      for (var d = 0; ; d++) {
        if (d > r.MAX_NB_BITS)
          throw new N("Data too large for an Aztec code");
        if (f = d <= 3, u = f ? d + 1 : d, s = r.totalBitsInLayer(u, f), !(o > s)) {
          (h == null || c !== r.WORD_SIZE[u]) && (c = r.WORD_SIZE[u], h = r.stuffBits(i, c));
          var l = s - s % c;
          if (!(f && h.getSize() > c * 64) && h.getSize() + a <= l)
            break;
        }
      }
    }
    var v = r.generateCheckWords(h, s, c), x = h.getSize() / c, g = r.generateModeMessage(f, u, x), _ = (f ? 11 : 14) + u * 4, y = new Int32Array(_), A;
    if (f) {
      A = _;
      for (var d = 0; d < y.length; d++)
        y[d] = d;
    } else {
      A = _ + 1 + 2 * B.truncDivision(B.truncDivision(_, 2) - 1, 15);
      for (var E = B.truncDivision(_, 2), I = B.truncDivision(A, 2), d = 0; d < E; d++) {
        var S = d + B.truncDivision(d, 15);
        y[E - d - 1] = I - S - 1, y[E + d] = I + S + 1;
      }
    }
    for (var m = new Te(A), d = 0, D = 0; d < u; d++) {
      for (var P = (u - d) * 4 + (f ? 9 : 12), R = 0; R < P; R++)
        for (var q = R * 2, L = 0; L < 2; L++)
          v.get(D + q + L) && m.set(y[d * 2 + L], y[d * 2 + R]), v.get(D + P * 2 + q + L) && m.set(y[d * 2 + R], y[_ - 1 - d * 2 - L]), v.get(D + P * 4 + q + L) && m.set(y[_ - 1 - d * 2 - L], y[_ - 1 - d * 2 - R]), v.get(D + P * 6 + q + L) && m.set(y[_ - 1 - d * 2 - R], y[d * 2 + L]);
      D += P * 8;
    }
    if (r.drawModeMessage(m, f, A, g), f)
      r.drawBullsEye(m, B.truncDivision(A, 2), 5);
    else {
      r.drawBullsEye(m, B.truncDivision(A, 2), 7);
      for (var d = 0, R = 0; d < B.truncDivision(_, 2) - 1; d += 15, R += 16)
        for (var L = B.truncDivision(A, 2) & 1; L < A; L += 2)
          m.set(B.truncDivision(A, 2) - R, L), m.set(B.truncDivision(A, 2) + R, L), m.set(L, B.truncDivision(A, 2) - R), m.set(L, B.truncDivision(A, 2) + R);
    }
    var K = new po();
    return K.setCompact(f), K.setSize(A), K.setLayers(u), K.setCodeWords(x), K.setMatrix(m), K;
  }, r.drawBullsEye = function(e, t, n) {
    for (var i = 0; i < n; i += 2)
      for (var a = t - i; a <= t + i; a++)
        e.set(a, t - i), e.set(a, t + i), e.set(t - i, a), e.set(t + i, a);
    e.set(t - n, t - n), e.set(t - n + 1, t - n), e.set(t - n, t - n + 1), e.set(t + n, t - n), e.set(t + n, t - n + 1), e.set(t + n, t + n - 1);
  }, r.generateModeMessage = function(e, t, n) {
    var i = new fe();
    return e ? (i.appendBits(t - 1, 2), i.appendBits(n - 1, 6), i = r.generateCheckWords(i, 28, 4)) : (i.appendBits(t - 1, 5), i.appendBits(n - 1, 11), i = r.generateCheckWords(i, 40, 4)), i;
  }, r.drawModeMessage = function(e, t, n, i) {
    var a = B.truncDivision(n, 2);
    if (t)
      for (var o = 0; o < 7; o++) {
        var f = a - 3 + o;
        i.get(o) && e.set(f, a - 5), i.get(o + 7) && e.set(a + 5, f), i.get(20 - o) && e.set(f, a + 5), i.get(27 - o) && e.set(a - 5, f);
      }
    else
      for (var o = 0; o < 10; o++) {
        var f = a - 5 + o + B.truncDivision(o, 5);
        i.get(o) && e.set(f, a - 7), i.get(o + 10) && e.set(a + 7, f), i.get(29 - o) && e.set(f, a + 7), i.get(39 - o) && e.set(a - 7, f);
      }
  }, r.generateCheckWords = function(e, t, n) {
    var i, a, o = e.getSize() / n, f = new Ur(r.getGF(n)), u = B.truncDivision(t, n), s = r.bitsToWords(e, n, u);
    f.encode(s, u - o);
    var c = t % n, h = new fe();
    h.appendBits(0, c);
    try {
      for (var l = Do(Array.from(s)), d = l.next(); !d.done; d = l.next()) {
        var v = d.value;
        h.appendBits(v, n);
      }
    } catch (x) {
      i = { error: x };
    } finally {
      try {
        d && !d.done && (a = l.return) && a.call(l);
      } finally {
        if (i) throw i.error;
      }
    }
    return h;
  }, r.bitsToWords = function(e, t, n) {
    var i = new Int32Array(n), a, o;
    for (a = 0, o = e.getSize() / t; a < o; a++) {
      for (var f = 0, u = 0; u < t; u++)
        f |= e.get(a * t + u) ? 1 << t - u - 1 : 0;
      i[a] = f;
    }
    return i;
  }, r.getGF = function(e) {
    switch (e) {
      case 4:
        return ge.AZTEC_PARAM;
      case 6:
        return ge.AZTEC_DATA_6;
      case 8:
        return ge.AZTEC_DATA_8;
      case 10:
        return ge.AZTEC_DATA_10;
      case 12:
        return ge.AZTEC_DATA_12;
      default:
        throw new N("Unsupported word size " + e);
    }
  }, r.stuffBits = function(e, t) {
    for (var n = new fe(), i = e.getSize(), a = (1 << t) - 2, o = 0; o < i; o += t) {
      for (var f = 0, u = 0; u < t; u++)
        (o + u >= i || e.get(o + u)) && (f |= 1 << t - 1 - u);
      (f & a) === a ? (n.appendBits(f & a, t), o--) : f & a ? n.appendBits(f, t) : (n.appendBits(f | 1, t), o--);
    }
    return n;
  }, r.totalBitsInLayer = function(e, t) {
    return ((t ? 88 : 112) + 16 * e) * e;
  }, r.DEFAULT_EC_PERCENT = 33, r.DEFAULT_AZTEC_LAYERS = 0, r.MAX_NB_BITS = 32, r.MAX_NB_BITS_COMPACT = 4, r.WORD_SIZE = Int32Array.from([
    4,
    6,
    6,
    8,
    8,
    8,
    8,
    8,
    8,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    10,
    12,
    12,
    12,
    12,
    12,
    12,
    12,
    12,
    12,
    12
  ]), r;
})();
const it = {
  allCameraDevices: [],
  currentCameraDeviceId: void 0
}, bo = `
    <div id="scan-container" style="width: 100vw;height: 100%;position: fixed;z-index: 10;top: 0;left: 0;display: flex;flex-direction: column;align-items: center;background-color: black">
        <video id="scan-video" autoplay style="height: 100%;width: 100vw;object-fit: cover;z-index: 11;"></video>
    </div>
`;
async function Bo() {
  const r = await No(), e = await navigator.mediaDevices.getUserMedia({
    video: {
      deviceId: r,
      width: { min: 1280, ideal: 2560, max: 4096 }
    }
  });
  return new Promise((t) => {
    document.body.insertAdjacentHTML("beforeend", bo);
    function n(a) {
      i.reset(), Po(e), Mo(), document.body.removeChild(document.querySelector("#scan-container")), t(a);
    }
    const i = new kr();
    i.decodeFromStream(e, "scan-video", (a) => {
      a && n(a.text);
    });
  });
}
async function No() {
  const { allCameraDevices: r, currentCameraDeviceId: e } = it;
  if (r.length > 0 && e)
    return it.currentCameraDeviceId;
  const t = await new kr().listVideoInputDevices(), n = Ro(t);
  return it.allCameraDevices = t.map((i) => ({
    label: i.label,
    value: i.deviceId
  })), it.currentCameraDeviceId = n, n;
}
function Ro(r) {
  const e = r.find((t) => t.label.includes("back") && t.label.includes("0"));
  return e ? e.deviceId : r[r.length - 1].deviceId;
}
function Po(r) {
  r && r.getTracks && r.getTracks().forEach((e) => {
    e.stop();
  });
}
function Mo(r = 100) {
  navigator.vibrate ? navigator.vibrate(r) : console.log("此设备不支持振动");
}
export {
  Bo as default
};
