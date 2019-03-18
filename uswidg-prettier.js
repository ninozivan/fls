window.UserVoice = {
 events: window.UserVoice || [],
 push: function(x) {
  window.UserVoice.events.push(x)
 },
 account: {
  "active_widgets": [],
  "campaign": null,
  "name": "ShowingTime.com",
  "white_labeled": true,
  "widget2_domain": "widget.uservoice.com",
  "subdomain_ssl_host": "help.myhome.show",
  "subdomain_site_host": "help.myhome.show",
  "subdomain_key": "showingtimehelp",
  "subdomain_id": 237978,
  "client_key": "E07PxL0p7o3jyBFHQpjhg",
  "client_options": null,
  "smartvote_autoprompt_enabled": true,
  "satisfaction_autoprompt_enabled": true,
  "messages": {
   "Loading": "Loading"
  },
  "has_ticketing_system": true,
  "has_feedback_system": true,
  "has_smartvote": true,
  "has_satisfaction": true,
  "source_version": 1552916894,
  "deactivated": false
 },
 client_widgets: {},
 manifest: {
  "tab-left-dark-no-bullhorn": "/pkg/clients/widget2/tab-left-dark-no-bullhorn-9669fb4a9d79416e9dc17618c9ed226faf8171ce461449f1282d6fcc2d6aa338.png",
  "tab-left-light-no-bullhorn": "/pkg/clients/widget2/tab-left-light-no-bullhorn-22005a1309b6593c2eafb9f5321f3e77834963069451d85657c9373b1513d47f.png",
  "tab-right-dark-no-bullhorn": "/pkg/clients/widget2/tab-right-dark-no-bullhorn-6c8fc4d589a9d68b16c89b8bd810aee48f11a826d292d22d2b5491cd2a072495.png",
  "tab-right-light-no-bullhorn": "/pkg/clients/widget2/tab-right-light-no-bullhorn-5d328c32f884bd477a82e24e95355e2ef41eed9a98f0a393e1354d2089dbc995.png",
  "tab-horizontal-dark-no-bullhorn": "/pkg/clients/widget2/tab-horizontal-dark-no-bullhorn-ae2f0f4ee5366ac297a76055000da8256a23b7ff3ed9bd6c24317e3cf350139d.png",
  "tab-horizontal-light-no-bullhorn": "/pkg/clients/widget2/tab-horizontal-light-no-bullhorn-32b202e4d461169a377f8750d26bef3947f3c24e9ef3bdce25a317e4e773148d.png",
  "close": "/pkg/clients/widget2/close-88877208b604c275adc17eac27513230d68cc0222e3a4cb147bbc0feba5d267c.png",
  "pb": "/pkg/clients/widget2/UserVoice-logo-light-c40af2f05c5f1dfe06de1a83875730553d9b6c8c663f980e700e1c5a1f1fac56.svg",
  "screenshot": "/pkg/clients/omnibox/screenshot-e7753ef39bd767a7c877dbee778dde8d93f4d9b9bf5b6471341eb8482c4825db.js"
 },
 kombucha_domain: 'https://by2.uservoice.com'
};
"undefined" != typeof UserVoice && UserVoice.showLightbox || ! function(t, e, o) {
  function i(t) {
   F("Error: " + t + " See https://www.uservoice.com/o/javascript-sdk for more help.")
  }

  function s(t) {
   for (var e = [], o = 0; o < t.length; o++) e.push(t[o]);
   return e
  }

  function n(t, e, o, i, s) {
   var n = t - e / 2;
   return o > n - s && (n = o + s), n + e + s > i && (n = i - e - s), n
  }

  function r(e) {
   if ("getComputedStyle" in t) {
    for (var i = ["transitionDuration", "MozTransitionDuration", "WebkitTransitionDuration", "OTransitionDuration", "msTransitionDuration"], s = 0, n = 0, r = i.length; r > n; n++) {
     var a = i[n],
      l = Y.getComputedStyle(e)[a] || e.style[a];
     if (l) {
      s = 1e3 * parseFloat(l);
      break
     }
    }
    if (0 !== s) {
     var p = Y.data(e, "transition-timer"),
      c = Y.data(e, "transition-timeout-at"),
      d = +new Date + s;
     Y.addClass(e, "uv-is-transitioning"), e.offsetWidth, (p === o || d > c) && (clearTimeout(p), Y.data(e, "transition-timer", setTimeout(function() {
      Y.removeClass(e, "uv-is-transitioning"), e.offsetWidth
     }, s)), Y.data(e, "transition-timeout-at", d))
    }
   }
  }

  function a(t) {
   meta = e.createElement("meta"), meta.setAttribute("name", "viewport"), meta.setAttribute("content", t), e.head.appendChild(meta)
  }

  function l() {
   for (var t, o = e.getElementsByTagName("meta"), i = 0; i < o.length; i++)
    if (/viewport/i.test(o[i].getAttribute("name"))) {
     t = o[i];
     break
    }
   return t
  }

  function p() {
   if (!M) {
    var t = l(),
     e = /user-scalable\s*=\s*(0|1|no|yes)/;
    if (t) {
     j = t;
     var o = t.getAttribute("content");
     t.parentNode.removeChild(t), a(e.test(o) ? o.replace(e, "user-scalable=0") : o + "; user-scalable=0")
    } else a("user-scalable=0");
    M = !0
   }
  }

  function c() {
   if (M) {
    var t = l();
    t.parentNode.removeChild(t), j ? e.head.appendChild(j) : a("user-scalable=1"), M = !1
   }
  }

  function d(t, e) {
   return t.replace(/\#\{([^{}]*)\}/g, function(t, o) {
    var i = e[o];
    return "string" == typeof i || "number" == typeof i ? i : t
   })
  }

  function u(t) {
   var o = e.createElement("div");
   o.addClass('xxxxyyyyyy');
   return o.innerHTML = t, e.body.appendChild(o.firstChild), e.body.lastChild
  }

  function h(t) {
   return t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  }

  function g(t, e) {
   e || (e = function(t) {
    return t
   });
   var o = [];
   for (var i in t)
    if (t.hasOwnProperty(i)) {
     var s = e(i) + "=" + e(t[i]);
     o.push(s)
    }
   return o.join("&")
  }

  function m(t) {
   for (var e = Array.prototype.slice.call(arguments, 1), o = e.length, i = 0; o > i; i++)
    for (var s in e[i]) e[i].hasOwnProperty(s) && ("object" == typeof t[s] && "object" == typeof e[i][s] ? m(t[s], e[i][s]) : t[s] = e[i][s]);
   return t
  }

  function f(t, o) {
   var i = e.createElement("style");
   i.type = "text/css", i.media = o || "screen", i.styleSheet ? i.styleSheet.cssText = t : i.appendChild(e.createTextNode(t)), e.getElementsByTagName("head")[0].appendChild(i)
  }

  function b() {
   X || (f("#uvTab,.uv-tray,.uv-icon,.uv-popover,.uv-bubble{display:none!important}", "print"), X = !0)
  }

  function v() {
   W || (f(".uv-icon:hover{opacity:1}"), W = !0)
  }

  function x() {
   return e.getElementsByTagName("html")[0]
  }

  function y() {
   var o = e.documentElement,
    i = o && o.clientWidth || e.body.clientWidth,
    s = t.innerHeight || o && o.clientHeight || e.body.clientHeight;
   return {
    width: i,
    height: s
   }
  }

  function _(t) {
   return ((new Date).getTime() - t) / 1e3 / 60 / 60 / 24
  }

  function w(t) {
   return t && (t.tab_color !== o && (t.trigger_background_color = t.tab_color), t.tab_position !== o && (t.trigger_position = t.tab_position)), t || {}
  }

  function C(t, e) {
   return e && ("support" === e.mode ? e.post_suggestion_enabled = !1 : "feedback" === e.mode && (e.contact_enabled = !1), delete e.mode, e.default_mode !== o && (e.classic_default_mode = e.default_mode), w(e)), E({
    mode: t
   }, e || {})
  }

  function S(t, e) {
   if (ot.hasOwnProperty(t) || (ot[t] = {}), ot[t].hasOwnProperty(e)) return ot[t][e];
   var o = t.split("*");
   if (1 === o.length) return ot[t][e] = t === e;
   var i = o.shift();
   if (!e.startsWith(i)) return ot[t][e] = !1;
   var s = e.substr(i.length),
    n = o.pop();
   if (!s.endsWith(n)) return ot[t][e] = !1;
   s = s.substr(0, s.length - n.length);
   for (var r = 0; r < o.length; r++) {
    var a = o[r],
     l = s.indexOf(a);
    if (-1 === l) return ot[t][e] = !1;
    s = s.substr(l + a.length)
   }
   return ot[t][e] = !0
  }

  function U() {
   U.fired || (U.fired = !0, UserVoice.account.deactivated || (tt.tracker.trackExternalView(), tt.tracker.ready()), tt.scan())
  }
  var z = {};
  z.sanitizeValue = function(t, e) {
    function o(t) {
     if ("[object Date]" === Object.prototype.toString.call(t)) return t.getTime();
     if ("string" == typeof t) {
      var e = Date.parse(t);
      if (!isNaN(e)) return e
     }
     var o = parseInt(t, 10);
     if (isNaN(o)) return 0;
     var i = 4102444800 > o;
     return i ? 1e3 * o : o
    }
    var i;
    switch (e) {
     case "boolean":
      i = "true" === t || t === !0 ? !0 : !1;
      break;
     case "timestamp":
      i = o(t);
      break;
     case "int":
      i = parseInt(t, 10), isNaN(i) && (i = 0);
      break;
     case "float":
      i = parseFloat(t), isNaN(i) && (i = 0);
      break;
     case "string":
      i = [t].toString();
      break;
     default:
      i = t
    }
    return i
   }, z.isValidSize = function(t, e) {
    if ("int32cents" === e) {
     var o = 2147483647,
      i = -2147483648,
      s = 100 * t;
     return o >= s && s >= i
    }
    return t.length <= e
   }, z.uTF8Encode = function(t) {
    t = t.replace(/\x0d\x0a/g, "\n");
    for (var e = "", o = 0; o < t.length; o++) {
     var i = t.charCodeAt(o);
     128 > i ? e += String.fromCharCode(i) : i > 127 && 2048 > i ? (e += String.fromCharCode(i >> 6 | 192), e += String.fromCharCode(63 & i | 128)) : (e += String.fromCharCode(i >> 12 | 224), e += String.fromCharCode(i >> 6 & 63 | 128), e += String.fromCharCode(63 & i | 128))
    }
    return e
   }, z.base64Encode = function(t) {
    var e, o, i, s, n, r, a, l = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
     p = "",
     c = 0;
    for (t = z.uTF8Encode(t); c < t.length;) e = t.charCodeAt(c++), o = t.charCodeAt(c++), i = t.charCodeAt(c++), s = e >> 2, n = (3 & e) << 4 | o >> 4, r = (15 & o) << 2 | i >> 6, a = 63 & i, isNaN(o) ? r = a = 64 : isNaN(i) && (a = 64), p = p + l.charAt(s) + l.charAt(n) + l.charAt(r) + l.charAt(a);
    return p
   }, z.extend = function(t) {
    for (var e = Array.prototype.slice.call(arguments, 1), o = e.length, i = 0; o > i; i++)
     for (var s in e[i]) e[i].hasOwnProperty(s) && (t[s] = e[i][s]);
    return t
   }, z.values = function(t) {
    var e, o = [];
    if (null == t) return o;
    for (e in t) t.hasOwnProperty(e) && o.push(t[e]);
    return o
   }, z.setCookie = function(t, o, i) {
    i = z.extend({
     path: "/",
     domain: "",
     expires: new Date
    }, i || {});
    var s = [t, "=", encodeURIComponent(o), "; path=", i.path, "; domain=", i.domain];
    return i.expires && (i.expires.setFullYear(i.expires.getFullYear() + 1), s.push("; expires="), s.push(i.expires.toUTCString())), "https:" == e.location.protocol && s.push("; Secure"), e.cookie = s.join(""), o
   }, z.getCookie = function(t) {
    for (var o, i = (e.cookie || "").split(";"), s = i.length, n = 0; s > n; n++)
     if (o = z.trim(i[n]), o.substr(0, t.length + 1) === t + "=") return decodeURIComponent(o.substr(t.length + 1))
   }, z.deleteCookie = function(t, e) {
    var o = new Date;
    o.setFullYear(o.getFullYear() - 30), e = z.extend({
     expires: o
    }, e || {}), z.setCookie(t, "", e)
   }, z.trim = function(t) {
    var e = String.prototype.trim;
    return e ? e.apply(t) : t.replace(/^\s+|\s+$/g, "")
   }, z.isSpider = function() {
    return /(google web preview|baiduspider|yandexbot)/i.test(t.navigator.userAgent)
   }, z.log = function() {
    "undefined" != typeof console && "undefined" != typeof console.log && "undefined" != typeof console.log.apply && console.log.apply(console, arguments)
   },
   function() {
    function e(t) {
     return 10 > t ? "0" + t : t
    }

    function o(t) {
     return a.lastIndex = 0, a.test(t) ? '"' + t.replace(a, function(t) {
      var e = l[t];
      return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
     }) + '"' : '"' + t + '"'
    }

    function i(t, e) {
     var a, l, p, c, d, u = s,
      h = e[t];
     switch (h && "object" == typeof h && "function" == typeof h.toJSON && (h = h.toJSON(t)), "function" == typeof r && (h = r.call(e, t, h)), typeof h) {
      case "string":
       return o(h);
      case "number":
       return isFinite(h) ? String(h) : "null";
      case "boolean":
      case "null":
       return String(h);
      case "object":
       if (!h) return "null";
       if (s += n, d = [], "[object Array]" === Object.prototype.toString.apply(h)) {
        for (c = h.length, a = 0; c > a; a += 1) d[a] = i(a, h) || "null";
        return p = 0 === d.length ? "[]" : s ? "[\n" + s + d.join(",\n" + s) + "\n" + u + "]" : "[" + d.join(",") + "]", s = u, p
       }
       if (r && "object" == typeof r)
        for (c = r.length, a = 0; c > a; a += 1) "string" == typeof r[a] && (l = r[a], p = i(l, h), p && d.push(o(l) + (s ? ": " : ":") + p));
       else
        for (l in h) Object.prototype.hasOwnProperty.call(h, l) && (p = i(l, h), p && d.push(o(l) + (s ? ": " : ":") + p));
       return p = 0 === d.length ? "{}" : s ? "{\n" + s + d.join(",\n" + s) + "\n" + u + "}" : "{" + d.join(",") + "}", s = u, p
     }
    }
    "object" != typeof JSON && (t.JSON = {}), "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
     return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + e(this.getUTCMonth() + 1) + "-" + e(this.getUTCDate()) + "T" + e(this.getUTCHours()) + ":" + e(this.getUTCMinutes()) + ":" + e(this.getUTCSeconds()) + "Z" : null
    }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
     return this.valueOf()
    });
    var s, n, r, a = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
     l = {
      "\b": "\\b",
      "	": "\\t",
      "\n": "\\n",
      "\f": "\\f",
      "\r": "\\r",
      '"': '\\"',
      "\\": "\\\\"
     };
    "function" != typeof JSON.stringify && (JSON.stringify = function(t, e, o) {
     var a;
     if (s = "", n = "", "number" == typeof o)
      for (a = 0; o > a; a += 1) n += " ";
     else "string" == typeof o && (n = o);
     if (r = e, e && "function" != typeof e && ("object" != typeof e || "number" != typeof e.length)) throw new Error("JSON.stringify");
     return i("", {
      "": t
     })
    })
   }();
  var O, T = function(t, o) {
    function i(e, o) {
     var s = this;
     this.subdomain = e, this.config = z.extend({}, i.default_config, o || {}), this.kombuchaId = a++, this.sessionCallbackName = "__uvSessionData" + this.kombuchaId, t[this.sessionCallbackName] = function(t) {
      s.sync(t)
     }, this.tracks = [], this.identity = null, this.session = null, this.uvts = null, this.previousIdentity = null, this.isReady = !1, this.needsIdentityFlush = !1, this.needsSessionFlush = !1, this.firedUvts = !1, this.firedSession = !1, this.syncedSession = !0, this.cookieable = null, this.initFromCookie(), t.__kombuchas.push(this)
    }

    function s(t) {
     this.props = {}, !t === Object(t) && (t = {}), this.set(z.extend({}, t, {
      o: (new Date).getTimezoneOffset()
     }))
    }

    function n() {
     this.store = new r, this.recurrent = this.store.get("r"), this.store.set("r", !0)
    }

    function r() {
     var e = "x";
     this.storage = null;
     try {
      this.storage = "sessionStorage" in t && t.sessionStorage, this.set(e, e), this.get(e) !== e ? this.storage = null : this.remove(e)
     } catch (o) {
      this.storage = null
     }
    }
    var a = 0;
    t.__kombuchas = t.__kombuchas || [], i.prototype.initFromCookie = function() {
     var t = z.getCookie(this.config.cookie_name);
     this.log("Kombucha#initFromCookie: %s", t), t && this.setUvts(t)
    }, i.prototype.sendTraits = function() {
     if (this.identity) {
      var t = encodeURIComponent(z.base64Encode(JSON.stringify({
       u: this.identity.toJSON()
      })));
      if (t !== this.previousIdentity) {
       this.previousIdentity = t;
       var e = new XMLHttpRequest,
        o = [this.config.domain, "/t2/", this.subdomain, "/identify?d=", t].join("");
       e.open("POST", o), e.setRequestHeader("Content-Type", "application/json"), e.send()
      }
     }
    }, i.prototype.identify = function(t, e) {
     this.log("Kombucha#identify: %O", t);
     var e = "undefined" != typeof e ? e : !1;
     try {
      this.identity ? (e === !0 && (this.identity.props = {}), this.identity.set(t)) : this.identity = new s(t), this.needsIdentityFlush = !0, this.flush()
     } catch (o) {
      console.log("not sending traits due to client identify error: ", o)
     }
    }, i.prototype.getIdentity = function(t) {
     return this.identity ? this.identity.toJSON() : void 0
    }, i.prototype.syncSession = function() {
     this.syncedSession = !1, this.identify({})
    }, i.prototype.updateSession = function(t) {
     this.log("Kombucha#updateSession: %O", t), this.needsSessionFlush = z.extend({}, this.needsSessionFlush || {}, this.session.set(t)), this.flush()
    }, i.prototype.getSession = function(t) {
     return this.session.get(t)
    }, i.prototype.dumpSession = function() {
     return this.session.toJSON()
    }, i.prototype.sync = function(t) {
     this.log("Kombucha#sync: %O", t), t === Object(t) && (this.session.set(t), t.uvts && this.setUvts(t.uvts), this.syncCreatedAt(), this.fireSession())
    }, i.prototype.syncCreatedAt = function() {
     var t = this.identity && this.identity.get("created_at");
     t && (this.log("Kombucha#syncCreatedAt: %O", t), this.session.set({
      created_at: t
     }))
    }, i.prototype.fireSession = function() {
     this.session.isEnabled() && (this.firedSession ? this.syncedSession || ("function" == typeof this.config.onSync && this.config.onSync(), this.syncedSession = !0) : ("function" == typeof this.config.onSession && this.config.onSession(), this.firedSession = !0))
    }, i.prototype.setUvts = function(t) {
     this.uvts = t, z.setCookie(this.config.cookie_name, t, {
      domain: this.cookieDomain()
     }), this.firedUvts || ("function" == typeof this.config.onUvts && this.config.onUvts(t), this.firedUvts = !0)
    }, i.prototype.setConfig = function(t) {
     this.config = z.extend(this.config, t)
    }, i.prototype.setChannel = function(t) {
     this.setConfig({
      channel: t
     })
    }, i.prototype.track = function(t, e, o) {
     var i = {
      evt: t,
      props: e
     };
     o && (i.channel = o), this.tracks.push(i), this.flush()
    }, i.prototype.trackExternalView = function() {
     this.log("Kombucha#trackExternalView: %s", this.config.channel), "external" === this.config.channel && this.track("view_page", {
      u: e.location.toString(),
      r: e.referrer
     })
    }, i.prototype.flush = function() {
     if (this.isReady && this.config.enabled) {
      var t = 0,
       e = this.tracks.length;
      if (this.log("Kombucha#flush: %s", e), this.uvts || this.shouldTrack())
       for ((0 === e && this.needsIdentityFlush || this.needsSessionFlush) && this.sendTrack({
         evt: "identify"
        }); e > t; t += 1) this.sendTrack(this.tracks.shift())
     }
    }, i.prototype.sendTrack = function(t) {
     var o, i = {},
      s = !this.syncedSession || !this.session.recurrent && !this.firedSession;
     o = this.config.v2 && "autoprompt" !== t.evt ? [this.config.domain, "/t2/", this.subdomain, "/", this.normalizeV2Channel(t.channel || this.config.channel)] : [this.config.domain, "/t/", this.subdomain, "/", l[t.channel || this.config.channel] || "_", "/", p[t.evt] || "_"], this.uvts && (o.push("/"), o.push(this.uvts)), o.push("/track.js?_=" + (new Date).getTime()), o.push("&s=" + (s ? "0" : "1")), o = o.join(""), this.needsIdentityFlush && (i.u = this.identity.toJSON(), this.needsIdentityFlush = !1), this.needsSessionFlush === Object(this.needsSessionFlush) && (i.u = z.extend({}, i.u || {}, this.needsSessionFlush), this.needsSessionFlush = !1), t.props && z.values(t.props).length > 0 && (i.e = t.props), this.log("Kombucha#sendTrack: %s, %O", o, i), i = z.values(i).length > 0 ? encodeURIComponent(z.base64Encode(JSON.stringify(i))) : null;
     var n, r, a;
     a = ["&c=", this.sessionCallbackName], i && (a.push("&d="), a.push(i)), n = e.getElementsByTagName("script")[0], r = e.createElement("script"), r.type = "application/javascript", r.async = !0, r.defer = !0, r.src = o + a.join(""), n.parentNode.insertBefore(r, n)
    }, i.prototype.ready = function() {
     this.log("Kombucha#ready: %s", this.isReady), this.isReady || (this.isReady = !0, this.session = new n, this.flush(), this.afterReady())
    }, i.prototype.afterReady = function() {}, i.prototype.shouldTrack = function() {
     return !z.isSpider() && this.haveCookies()
    }, i.prototype.haveCookies = function() {
     return null === this.cookieable && (z.setCookie("__uvt", "1", {
      domain: this.cookieDomain()
     }), this.cookieable = !!z.getCookie("__uvt"), z.deleteCookie("__uvt", {
      domain: this.cookieDomain()
     })), this.log("Kombucha#haveCookies: %s", this.cookieable), this.cookieable
    }, i.prototype.log = function() {
     this.config.logging_enabled && z.log.apply(null, arguments)
    }, i.prototype.cookieDomain = function(e) {
     return e || t.location.hostname
    }, i.prototype.normalizeV2Channel = function(t) {
     switch (t = (t || "").toLowerCase()) {
      case "web":
      case "omnibox":
      case "portal":
      case "ios_app":
      case "android_app":
      case "ios_sdk":
      case "adnroid_sdk":
      case "classic_widget":
       return t;
      case "smartvote_widget":
      case "instant_answers_widget":
      case "satisfaction_widget":
       return "omnibox";
      case "site2":
       return "portal";
      case "external":
       return "web";
      case "admin":
       return "web"
     }
     return "_"
    }, s.prototype.set = function(t) {
     var e, o;
     if (!t === Object(t) && (t = {}), t.account) {
      e = t.account, delete t.account;
      for (o in e) e.hasOwnProperty(o) && (t["account_" + o] = e[o])
     }
     for (o in t) {
      var i = 0 === o.indexOf("cf_") || 0 === o.indexOf("account_cf_");
      if ((s.keys.hasOwnProperty(o) || i) && (this.props[o] = z.sanitizeValue(t[o], s.keys[o]), s.sizeLimits[o] && !z.isValidSize(this.props[o], s.sizeLimits[o]))) {
       var n = o + " value " + this.props[o] + " overflow type " + s.keys[o] + "(" + s.sizeLimits[o] + ")";
       throw new Error(n)
      }
     }
     return this.props
    }, s.prototype.get = function(t) {
     return this.props[t]
    }, s.prototype.toJSON = function() {
     var t = this.props,
      e = t.account || {},
      o = {};
     for (k in t) 0 === k.indexOf("account_") ? e[k.substr(8)] = t[k] : 0 !== k.indexOf("account") && (o[k] = t[k]);
     return o.account = e, o
    }, s.keys = {
     o: "int",
     name: "string",
     email: "string",
     id: "string",
     type: "string",
     created_at: "timestamp",
     account_name: "string",
     account_id: "string",
     account_monthly_rate: "float",
     account_ltv: "float",
     account_plan: "string",
     account_created_at: "timestamp"
    }, s.sizeLimits = {
     name: 255,
     email: 255,
     id: 255,
     account_id: 255,
     type: 255,
     account_name: 255,
     account_monthly_rate: "int32cents",
     account_ltv: "int32cents",
     account_plan: 255
    }, n.prototype.set = function(t) {
     var e, o = {};
     for (e in t) n.keys.hasOwnProperty(e) && (o[e] = z.sanitizeValue(t[e], n.keys[e]));
     for (e in o) o.hasOwnProperty(e) && this.store.set(e, o[e]);
     return o
    }, n.prototype.get = function(t) {
     return this.store.get(t)
    }, n.prototype.toJSON = function() {
     var t, e = {};
     for (var i in n.keys) n.keys.hasOwnProperty(i) && (t = this.get(i), t !== o && (e[i] = t));
     return e
    }, n.prototype.isEnabled = function() {
     return this.store.isEnabled()
    }, n.keys = {
     created_at: "timestamp",
     active_days: "int",
     autoprompt_disabled: "boolean",
     smartvote: "boolean",
     satisfaction: "boolean",
     last_smartvote_autoprompt_at: "timestamp",
     last_satisfaction_autoprompt_at: "timestamp",
     last_sat_at: "timestamp",
     last_smartvote_at: "timestamp",
     dismissed_smartvote_at: "timestamp",
     dismissed_sat_at: "timestamp",
     autoprompted_satisfaction_at: "timestamp",
     autoprompted_smartvote_at: "timestamp"
    }, r.prototype.isEnabled = function() {
     return !!this.storage
    }, r.prototype.get = function(t) {
     if (this.storage) {
      var e, o = this.storage.getItem(this.makeKey(t));
      try {
       e = JSON.parse(o)
      } catch (i) {}
      return e
     }
    }, r.prototype.set = function(t, e) {
     this.storage && this.storage.setItem(this.makeKey(t), JSON.stringify(e))
    }, r.prototype.remove = function(t) {
     this.storage && this.storage.removeItem(this.makeKey(t))
    }, r.prototype.makeKey = function(t) {
     return r.namespace + t
    }, r.namespace = "__uv_";
    var l = {
      external: "x",
      classic_widget: "w",
      smartvote_widget: "e",
      instant_answers_widget: "o",
      satisfaction_widget: "t",
      site2: "s",
      admin: "a"
     },
     p = {
      view_page: "p",
      view_forum: "m",
      view_topic: "c",
      view_kb: "k",
      view_channel: "o",
      view_idea: "i",
      view_article: "f",
      view_comparison: "a",
      authenticate: "u",
      search_ideas: "s",
      search_articles: "r",
      vote_idea: "v",
      vote_article: "z",
      submit_ticket: "t",
      submit_idea: "d",
      subscribe_idea: "b",
      rate_satisfaction: "e",
      identify: "y",
      comment_idea: "h",
      dismiss: "w",
      autoprompt: "x",
      pick_idea: "1",
      view_tweet_button: "2",
      clicked_tweet_button: "3",
      posted_tweet: "4"
     };
    return i.default_config = {
     cookie_name: "uvts",
     domain: t.UserVoice.kombucha_domain,
     channel: "external",
     enabled: !0,
     logging_enabled: !1
    }, i
   }(this),
   V = z.base64Encode,
   E = z.extend,
   F = (z.values, z.setCookie, z.getCookie, z.lpad, z.trim, z.log),
   N = ".uv-icon{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;display:inline-block;cursor:pointer;position:relative;-moz-transition:all 300ms;-o-transition:all 300ms;-webkit-transition:all 300ms;transition:all 300ms;width:39px;height:39px;position:fixed;z-index:100002;opacity:0.8;-moz-transition:opacity 100ms;-o-transition:opacity 100ms;-webkit-transition:opacity 100ms;transition:opacity 100ms}.uv-icon.uv-bottom-right{bottom:10px;right:12px}.uv-icon.uv-top-right{top:10px;right:12px}.uv-icon.uv-bottom-left{bottom:10px;left:12px}.uv-icon.uv-top-left{top:10px;left:12px}.uv-icon.uv-is-selected{opacity:1}.uv-icon svg{width:39px;height:39px}.uv-icon-trigger{display:block;width:39px;height:39px}.uv-popover{font-family:sans-serif;font-weight:100;font-size:13px;color:black;position:fixed;z-index:100001}.uv-popover-content{-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;background:white;border:1px solid transparent;position:relative;width:325px;height:325px;-moz-transition:background 200ms;-o-transition:background 200ms;-webkit-transition:background 200ms;transition:background 200ms}.uv-bottom .uv-popover-content{-moz-box-shadow:rgba(0,0,0,0.3) 0 -10px 60px,rgba(0,0,0,0.1) 0 0 20px;-webkit-box-shadow:rgba(0,0,0,0.3) 0 -10px 60px,rgba(0,0,0,0.1) 0 0 20px;box-shadow:rgba(0,0,0,0.3) 0 -10px 60px,rgba(0,0,0,0.1) 0 0 20px}.uv-top .uv-popover-content{-moz-box-shadow:rgba(0,0,0,0.3) 0 10px 60px,rgba(0,0,0,0.1) 0 0 20px;-webkit-box-shadow:rgba(0,0,0,0.3) 0 10px 60px,rgba(0,0,0,0.1) 0 0 20px;box-shadow:rgba(0,0,0,0.3) 0 10px 60px,rgba(0,0,0,0.1) 0 0 20px}.uv-left .uv-popover-content{-moz-box-shadow:rgba(0,0,0,0.3) 10px 0 60px,rgba(0,0,0,0.1) 0 0 20px;-webkit-box-shadow:rgba(0,0,0,0.3) 10px 0 60px,rgba(0,0,0,0.1) 0 0 20px;box-shadow:rgba(0,0,0,0.3) 10px 0 60px,rgba(0,0,0,0.1) 0 0 20px}.uv-right .uv-popover-content{-moz-box-shadow:rgba(0,0,0,0.3) -10px 0 60px,rgba(0,0,0,0.1) 0 0 20px;-webkit-box-shadow:rgba(0,0,0,0.3) -10px 0 60px,rgba(0,0,0,0.1) 0 0 20px;box-shadow:rgba(0,0,0,0.3) -10px 0 60px,rgba(0,0,0,0.1) 0 0 20px}.uv-ie8 .uv-popover-content{position:relative}.uv-ie8 .uv-popover-content .uv-popover-content-shadow{display:block;background:black;content:'';position:absolute;left:-15px;top:-15px;width:100%;height:100%;filter:progid:DXImageTransform.Microsoft.Blur(PixelRadius=15,MakeShadow=true,ShadowOpacity=0.30);z-index:-1}.uv-popover-tail{border:9px solid transparent;width:0;z-index:10;position:absolute;-moz-transition:border-top-color 200ms;-o-transition:border-top-color 200ms;-webkit-transition:border-top-color 200ms;transition:border-top-color 200ms}.uv-top .uv-popover-tail{bottom:-20px;border-top:11px solid white}.uv-bottom .uv-popover-tail{top:-20px;border-bottom:11px solid white}.uv-left .uv-popover-tail{right:-20px;border-left:11px solid white}.uv-right .uv-popover-tail{left:-20px;border-right:11px solid white}.uv-popover-loading{background:white;-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;position:absolute;width:100%;height:100%;left:0;top:0}.uv-popover-loading-text{position:absolute;top:50%;margin-top:-0.5em;width:100%;text-align:center}.uv-popover-iframe-container{height:100%}.uv-popover-iframe{-moz-border-radius:5px;-webkit-border-radius:5px;border-radius:5px;overflow:hidden}.uv-is-hidden{display:none}.uv-is-invisible{display:block !important;visibility:hidden !important}.uv-is-transitioning{display:block !important}.uv-no-transition{-moz-transition:none !important;-webkit-transition:none !important;-o-transition:color 0 ease-in !important;transition:none !important}.uv-fade{opacity:1;-moz-transition:opacity 200ms ease-out;-o-transition:opacity 200ms ease-out;-webkit-transition:opacity 200ms ease-out;transition:opacity 200ms ease-out}.uv-fade.uv-is-hidden{opacity:0}.uv-scale-top,.uv-scale-top-left,.uv-scale-top-right,.uv-scale-bottom,.uv-scale-bottom-left,.uv-scale-bottom-right,.uv-scale-right,.uv-scale-right-top,.uv-scale-right-bottom,.uv-scale-left,.uv-scale-left-top,.uv-scale-left-bottom,.uv-slide-top,.uv-slide-bottom,.uv-slide-left,.uv-slide-right{opacity:1;-moz-transition:all 80ms ease-out;-o-transition:all 80ms ease-out;-webkit-transition:all 80ms ease-out;transition:all 80ms ease-out}.uv-scale-top.uv-is-hidden{opacity:0;-moz-transform:scale(0.8) translateY(-15%);-ms-transform:scale(0.8) translateY(-15%);-webkit-transform:scale(0.8) translateY(-15%);transform:scale(0.8) translateY(-15%)}.uv-scale-top-left.uv-is-hidden{opacity:0;-moz-transform:scale(0.8) translateY(-15%) translateX(-10%);-ms-transform:scale(0.8) translateY(-15%) translateX(-10%);-webkit-transform:scale(0.8) translateY(-15%) translateX(-10%);transform:scale(0.8) translateY(-15%) translateX(-10%)}.uv-scale-top-right.uv-is-hidden{opacity:0;-moz-transform:scale(0.8) translateY(-15%) translateX(10%);-ms-transform:scale(0.8) translateY(-15%) translateX(10%);-webkit-transform:scale(0.8) translateY(-15%) translateX(10%);transform:scale(0.8) translateY(-15%) translateX(10%)}.uv-scale-bottom.uv-is-hidden{opacity:0;-moz-transform:scale(0.8) translateY(15%);-ms-transform:scale(0.8) translateY(15%);-webkit-transform:scale(0.8) translateY(15%);transform:scale(0.8) translateY(15%)}.uv-scale-bottom-left.uv-is-hidden{opacity:0;-moz-transform:scale(0.8) translateY(15%) translateX(-10%);-ms-transform:scale(0.8) translateY(15%) translateX(-10%);-webkit-transform:scale(0.8) translateY(15%) translateX(-10%);transform:scale(0.8) translateY(15%) translateX(-10%)}.uv-scale-bottom-right.uv-is-hidden{opacity:0;-moz-transform:scale(0.8) translateY(15%) translateX(10%);-ms-transform:scale(0.8) translateY(15%) translateX(10%);-webkit-transform:scale(0.8) translateY(15%) translateX(10%);transform:scale(0.8) translateY(15%) translateX(10%)}.uv-scale-right.uv-is-hidden{opacity:0;-moz-transform:scale(0.8) translateX(15%);-ms-transform:scale(0.8) translateX(15%);-webkit-transform:scale(0.8) translateX(15%);transform:scale(0.8) translateX(15%)}.uv-scale-right-top.uv-is-hidden{opacity:0;-moz-transform:scale(0.8) translateX(15%) translateY(-10%);-ms-transform:scale(0.8) translateX(15%) translateY(-10%);-webkit-transform:scale(0.8) translateX(15%) translateY(-10%);transform:scale(0.8) translateX(15%) translateY(-10%)}.uv-scale-right-bottom.uv-is-hidden{opacity:0;-moz-transform:scale(0.8) translateX(15%) translateY(10%);-ms-transform:scale(0.8) translateX(15%) translateY(10%);-webkit-transform:scale(0.8) translateX(15%) translateY(10%);transform:scale(0.8) translateX(15%) translateY(10%)}.uv-scale-left.uv-is-hidden{opacity:0;-moz-transform:scale(0.8) translateX(-15%);-ms-transform:scale(0.8) translateX(-15%);-webkit-transform:scale(0.8) translateX(-15%);transform:scale(0.8) translateX(-15%)}.uv-scale-left-top.uv-is-hidden{opacity:0;-moz-transform:scale(0.8) translateX(-15%) translateY(-10%);-ms-transform:scale(0.8) translateX(-15%) translateY(-10%);-webkit-transform:scale(0.8) translateX(-15%) translateY(-10%);transform:scale(0.8) translateX(-15%) translateY(-10%)}.uv-scale-left-bottom.uv-is-hidden{opacity:0;-moz-transform:scale(0.8) translateX(-15%) translateY(10%);-ms-transform:scale(0.8) translateX(-15%) translateY(10%);-webkit-transform:scale(0.8) translateX(-15%) translateY(10%);transform:scale(0.8) translateX(-15%) translateY(10%)}.uv-slide-top.uv-is-hidden{-moz-transform:translateY(-100%);-ms-transform:translateY(-100%);-webkit-transform:translateY(-100%);transform:translateY(-100%)}.uv-slide-bottom.uv-is-hidden{-moz-transform:translateY(100%);-ms-transform:translateY(100%);-webkit-transform:translateY(100%);transform:translateY(100%)}.uv-slide-left.uv-is-hidden{-moz-transform:translateX(-100%);-ms-transform:translateX(-100%);-webkit-transform:translateX(-100%);transform:translateX(-100%)}.uv-slide-right.uv-is-hidden{-moz-transform:translateX(100%);-ms-transform:translateX(100%);-webkit-transform:translateX(100%);transform:translateX(100%)}\n",
   I = function() {
    function e(t) {
     this.events = t, this.timer = null, this.last_hash = null
    }
    return e.prototype.listen = function() {
     var e = this;
     return "postMessage" in t && ("addEventListener" in t ? t.addEventListener("message", function(t) {
      e.dispatchEvent.apply(e, [t])
     }, !1) : t.attachEvent("onmessage", function(t) {
      e.dispatchEvent.apply(e, [t])
     })), this
    }, e.prototype.dispatchEvent = function(t) {
     var e = t.data;
     try {
      e = JSON.parse(e)
     } catch (o) {}
     if (e === Object(e))
      for (var i in e) e.hasOwnProperty(i) && this.events.hasOwnProperty(i) && this.events[i](e[i], t.source, t.origin);
     else this.events.hasOwnProperty(e) && this.events[e]()
    }, e.getHash = function() {
     var e = t.location.href.match(/#(.*)$/);
     return e ? e[1] : ""
    }, e
   }(),
   A = {};
  A.match = function(t) {
   return t.test(navigator.userAgent)
  }, A.match(/IEMobile/i) ? A.ieMobile = !0 : A.match(/msie (\d+\.\d+);/i) ? (A.ie = !0, A.version = parseInt(RegExp.$1, 10), A["ie" + A.version] = !0, A.ieCompatibility = 7 === A.version && A.match(/Trident/i), A.ieQuirks = e.compatMode && "BackCompat" === e.compatMode) : A.match(/Trident.*rv:(\d+)/i) && (A.ie = !0, A.version = parseInt(RegExp.$1, 10), A["ie" + A.version] = !0), A.touch = "ontouchstart" in t, A.mobile = A.match(/Android.*Mobile|iPhone|IEMobile/i), A.tablet = !A.mobile && A.match(/Android|iOS/i), A.iOS = "ontouchstart" in t && A.match(/like Mac OS X/i);
  var j, L = function(t) {
    return UserVoice.account.messages[t]
   },
   Y = function() {
    var o = function() {
      var t, o, i;
      if (1 === arguments.length ? (t = e, o = "div", i = arguments[0]) : 2 === arguments.length ? (t = arguments[0], o = "div", i = arguments[1]) : (t = arguments[0], o = arguments[1], i = arguments[2]), t.querySelector) return t.querySelector(o + "." + i);
      for (var s = t.getElementsByTagName(o), n = new RegExp("\b" + i + "\b", "gmi"), r = 0; r < s.length; r++)
       if (n.test(s[r].className)) return s[r];
      return null
     },
     i = 0;
    return o.uniqId = function() {
     return i += 1, "uv-" + i
    }, o.identify = function(t) {
     var e = t.getAttribute("id");
     return e ? e : (e = o.uniqId(), t.setAttribute("id", e), e)
    }, o.data = function() {
     function t(t, i, s) {
      var n = o.identify(t);
      return e[n] = e[n] || {}, arguments.length > 2 ? e[n][i] = s : e[n][i]
     }
     var e = {};
     return t
    }(), o.addClass = function(t, e) {
     new RegExp("(^|\\s+)" + e + "(\\s+|$)").test(t.className) || (t.className += (t.className ? " " : "") + e)
    }, o.removeClass = function(t, e) {
     t.className = t.className.replace(new RegExp("(?:^|\\s+)" + e + "(?:\\s+|$)", "g"), " ")
    }, o.hasClass = function(t, e) {
     return t.className.indexOf(e) > -1
    }, o.dimensions = function(t) {
     var e = t.display;
     if ("none" !== e && null !== e) return {
      width: t.offsetWidth,
      height: t.offsetHeight
     };
     var o = t.style,
      i = o.visibility,
      s = o.position,
      n = o.display;
     o.visibility = "hidden", o.position = "absolute", o.display = "block";
     var r = t.clientWidth,
      a = t.clientHeight;
     return o.display = n, o.position = s, o.visibility = i, {
      width: r,
      height: a
     }
    }, o.offset = function(t) {
     for (var e = t, o = {
       top: 0,
       left: 0
      }; e;) o.top += e.offsetTop, o.left += e.offsetLeft, e = e.offsetParent;
     return o
    }, o.on = function(e, o, i) {
     "addEventListener" in e ? e.addEventListener(o, i, !1) : e.attachEvent("on" + o, function() {
      return i.call(e, t.event)
     })
    }, o.off = function(t, e, o) {
     "removeEventListener" in t ? t.removeEventListener(e, o, !1) : t.detachEvent(e, o)
    }, o.one = function(t, e, i) {
     var s = function() {
      i(arguments), o.off(t, e, s)
     };
     o.on(t, e, s)
    }, o.ready = function(o) {
     if (e.addEventListener) "complete" === e.readyState ? o() : (e.addEventListener("DOMContentLoaded", o, !1), t.addEventListener("load", o, !1));
     else if (e.attachEvent) {
      e.attachEvent("onreadystatechange", o), t.attachEvent("onload", o);
      var i = !1;
      try {
       i = null === t.frameElement
      } catch (s) {}
      e.documentElement.doScroll && i
     }
    }, o.element = function(t) {
     return t.nodeName ? t : e.getElementById(t.substr(1))
    }, o.getComputedStyle = function(e) {
     var o = t.getComputedStyle(e);
     return o ? o : {}
    }, o
   }(),
   M = !1,
   X = !1,
   W = !1,
   D = ["https:" === e.location.protocol ? "https://" : "http://", "widget.uservoice.com"].join(""),
   P = {
    "tab-light-bottom-right": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid red;border-bottom:none;-moz-border-radius:4px 4px 0 0;-webkit-border-radius:4px 4px 0 0;border-radius:4px 4px 0 0;-moz-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;right:10px;bottom:0;z-index:9999;background-color:##{color};border-color:##{color};",
    "tab-dark-bottom-right": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid #FFF;border-bottom:none;-moz-border-radius:4px 4px 0 0;-webkit-border-radius:4px 4px 0 0;border-radius:4px 4px 0 0;-moz-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;right:10px;bottom:0;z-index:9999;background-color:##{color};",
    "tab-light-top-right": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid red;border-top:none;-moz-border-radius:0 0 4px 4px;-webkit-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px;-moz-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;right:10px;top:0;z-index:9999;background-color:##{color};border-color:##{color};",
    "tab-dark-top-right": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid #FFF;border-top:none;-moz-border-radius:0 0 4px 4px;-webkit-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px;-moz-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;right:10px;top:0;z-index:9999;background-color:##{color};",
    "tab-light-bottom-left": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid red;border-bottom:none;-moz-border-radius:4px 4px 0 0;-webkit-border-radius:4px 4px 0 0;border-radius:4px 4px 0 0;-moz-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;left:10px;bottom:0;z-index:9999;background-color:##{color};border-color:##{color};",
    "tab-dark-bottom-left": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid #FFF;border-bottom:none;-moz-border-radius:4px 4px 0 0;-webkit-border-radius:4px 4px 0 0;border-radius:4px 4px 0 0;-moz-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.25) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;left:10px;bottom:0;z-index:9999;background-color:##{color};",
    "tab-light-top-left": "background:red url(#{bgImage}) 0 50% no-repeat;border:1px solid red;border-top:none;-moz-border-radius:0 0 4px 4px;-webkit-border-radius:0 0 4px 4px;border-radius:0 0 4px 4px;-moz-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;-webkit-box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;box-shadow:inset rgba(255,255,255,.9) 1px 1px 1px, rgba(0,0,0,.5) 0 1px 2px;font:normal normal bold 14px/1em Arial, sans-serif;position:fixed;left:10px;top:0;z-index:9999;background-color:##{color};border-color:##{color};",