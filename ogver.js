    
    //not good version
    !function ()
    {
        var z = function () {
            var r = true;
            return function (t, e) {
                var n = r ? function () {
                    if (e) {
                        var r = e.apply(t, arguments);
                        e = null;
                        return r;
                    }
                } : function () {};
                r = false;
                return n;
            };
        }();
        var b = function () {
            var r = true;
            return function (t, e) {
                var n = r ? function () {
                    if (e) {
                        var r = e.apply(t, arguments);
                        e = null;
                        return r;
                    }
                } : function () {};
                r = false;
                return n;
            };
        }();
        !function () {
            !function (a) {
                var t = z(this, function () {
                    return t.toString().search("(((.+)+)+)+$").toString().constructor(t).search("(((.+)+)+)+$");
                });
                t();
                (function () {
                    b(this, function () {
                        var t = new RegExp("function *\\( *\\)");
                        var e = new RegExp("\\+\\+ *[a-zA-Z_$][0-9a-zA-Z_$]*", "i");
                        var u = _0x14a85c("init");
                        if (!t.test(u + "chain") || !e.test(u + "input")) {
                            u("0");
                        } else {
                            _0x14a85c();
                        }
                    })();
                })();
                "use strict";
                var d;
                var x = ("ontouchstart" in document.documentElement);
                function e(n) {
                    a(n).on("click.bs.dropdown", this.toggle);
                }
                var i = e.prototype;
                function C(n, r) {
                    var t;
                    if (d && (r = r || [d], d[0] !== r[0][0] ? t = d : (t = r[r.length - 1]).parent().hasClass("dropdown-menu") && (t = t.parent()), t.find(".show").removeClass("show"), t.find(".dropdown-menu").slideUp(150), t.hasClass("show") && t.removeClass("show"), t === d)) {
                        d = null;
                        a(".dropdown-backdrop").remove();
                    }
                }
                function m(n) {
                    n.attr("data-target");
                    var r = (r = r || (r = n.attr("href")) && /#[A-Za-z]/.test(r) && r.replace(/.*(?=#[^\s]*$)/, "")) && a(r);
                    return r && r.length ? r : n.parent();
                }
                i.toggle = function (n) {
                    var e = a(this);
                    if (("click" !== n.type || 0 !== n.clientX) && !e.is(".disabled, :disabled")) {
                        var e = m(e);
                        var u = e.hasClass("show");
                        var i = e.hasClass("dropdown-submenu") ? function (n) {
                            var r;
                            var t = [n];
                            for (; !r || r.hasClass("dropdown-submenu");) {
                                if ((r = (r = (r || n).parent()).hasClass("dropdown-menu") ? r.parent() : r).children("[data-toggle=\"dropdown\"]")) {
                                    t.unshift(r);
                                }
                            }
                            return t;
                        }(e) : null;
                        C(0, i);
                        if (!u) {
                            i = i || [e];
                            if (!(!x || e.closest(".navbar-nav").length || i[0].find(".dropdown-backdrop").length)) {
                                a("<div class=\"" + ".dropdown-backdrop".substr(1) + "\"/>").appendTo(i[0]).on("click", C);
                            }
                            var o;
                            var c;
                            var W = 0;
                            for (var f = i.length; W < f; W++) {
                                if (!i[W].hasClass("show")) {
                                    i[W].addClass("show");
                                    i[W].children(".dropdown-menu").slideDown(150);
                                    c = o = undefined;
                                    o = i[W].children(".dropdown-menu");
                                    c = i[W];
                                    if (o.hasClass("pull-center")) {
                                        o.css("margin-right", o.outerWidth() / -2);
                                    }
                                    if (o.hasClass("pull-middle")) {
                                        o.css("margin-top", o.outerHeight() / -2 - c.outerHeight() / 2);
                                    }
                                }
                            }
                            d = i[0];
                        }
                        return false;
                    }
                };
                i.keydown = function (n) {
                    if (/(38|40|27)/.test(n.keyCode)) {
                        var e = a(this);
                        n.preventDefault();
                        n.stopPropagation();
                        if (!e.is(".disabled, :disabled")) {
                            var u = m(e);
                            var i = u.hasClass("open");
                            if (!i || i && 27 == n.keyCode) {
                                if (27 == n.which) {
                                    u.find("[data-toggle=\"dropdown\"]").trigger("focus");
                                }
                                return e.trigger("click");
                            }
                            i = " li:not(.divider):visible a";
                            e = u.find("li:not(.divider):visible > input:not(disabled) ~ label, [role=\"menu\"]" + i + ", [role=\"listbox\"]" + i);
                            if (e.length) {
                                u = e.index(e.filter(":focus"));
                                if (38 == n.keyCode && 0 < u) {
                                    u--;
                                }
                                if (40 == n.keyCode && u < e.length - 1) {
                                    u++;
                                }
                                e.eq(u = ~u ? u : 0).trigger("focus");
                            }
                        }
                    }
                };
                i.change = function (n) {
                    var r;
                    var t;
                    var i = "";
                    var e = a(this).closest(".dropdown-menu");
                    var o = e.parent().find("[data-label-placement]");
                    if ((o = o && o.length ? o : e.parent().find("[data-toggle=\"dropdown\"]")) && o.length && false !== o.data("placeholder") && (null == o.data("placeholder") && o.data("placeholder", a.trim(o.text())), i = a.data(o[0], "placeholder"), r = parseInt(o.data("maxItems")), isNaN(r) && (r = 2), t = (t = o.data("maxText")) || "%s selected", (e = e.find(n.mBiYK("li > input", ":") + "checked")).length && (i = [], e.each(function () {
                        var r;
                        var t = a(this).parent().find("label").eq(0);
                        var e = t.find(".data-label");
                        if (t = (e.length ? ((r = a(n.QOtvA(n.QOtvA("<p", ">"), "<") + "/" + "p" + ">")).append(e.clone()), r) : t).html()) {
                            i.push(a.trim(t));
                        }
                    }), i = i.length > r ? t.replace("%s", i.length) : i.join(", ")), e = o.find(".caret"), o.html(i || ""), e.length) && o.append(" ")) {
                        e.appendTo(o);
                    }
                };
                function o() {
                    a(".dropdown-menu").each(function (n, r) {
                        i.change.call(r, null);
                    });
                }
                var W = a.fn.dropdown;
                a.fn.dropdown = function (t) {
                    return this.each(function () {
                        var n = a(this);
                        var r = n.data("bs.dropdown");
                        if (!r) {
                            n.data("bs.dropdown", r = new e(this));
                        }
                        if ("string" == typeof t) {
                            r[t].call(n);
                        }
                    });
                };
                a.fn.dropdown.Constructor = e;
                a.fn.dropdown.clearMenus = function (t) {
                    a(".dropdown-backdrop").remove();
                    a(".show [data-toggle=\"dropdown\"]").each(function () {
                        var n = m(a(this));
                        var r = {
                            relatedTarget: this
                        };
                        if (n[r.Hrvuk("has", "Class")]("open")) {
                            n.trigger(t = a.Event("hide.bs.dropdown", r));
                            if (!t.isDefaultPrevented()) {
                                n.removeClass("open").trigger("hidden.bs.dropdown", r);
                            }
                        }
                    });
                    return this;
                };
                a.fn.dropdown.noConflict = function () {
                    a.fn.dropdown = W;
                    return this;
                };
                a(document).ready(o).on("turbo:load", o).on("turbolinks:load", o);
                a(document).off(".bs.dropdown.data-api").on("click.bs.dropdown.data-api", C).on("click.bs.dropdown.data-api", "[data-toggle=\"dropdown\"]", i.toggle).on("click.bs.dropdown.data-api", ".dropdown-menu > li > input[type=\"checkbox\"] ~ label, .dropdown-menu > li > input[type=\"checkbox\"], .dropdown-menu.noclose > li, .dropdown-menu.noclose", function (n) {
                    n.stopPropagation();
                }).on("change.bs.dropdown.data-api", t.IWZOP(".dropdown-menu > li >", " ") + "input" + "[" + "type" + "=" + "\"" + "checkbox" + "\"" + "]" + "," + " " + "." + "dropdown" + "-" + "menu" + " " + ">" + " " + "li" + " " + ">" + " " + "input" + "[" + "type" + "=" + "\"" + "radio" + "\"" + "]", i.change).on("keydown.bs.dropdown.data-api", "[data-toggle=\"dropdown\"], [role=\"menu\"], [role=\"listbox\"]", i.keydown);
            }(jQuery);
            (function (n, r) {
                if ("object" == typeof exports && "undefined" != typeof module) {
                    module.exports = r();
                } else if ("function" == typeof define && define.amd) {
                    define(r);
                } else {
                    (n = "undefined" != typeof globalThis ? globalThis : n || self).DisDevTool = r();
                }
            })(this, function () {
                "use strict";
    
                function M(n) {
                    return (M = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (n) {
                        return typeof n;
                    } : function (n) {
                        return n && "function" == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n;
                    })(n);
                }
                function u(n, r) {
                    if (!(n instanceof r)) {
                        throw new TypeError(t.IWZOP("Cannot call a class as a ", "function"));
                    }
                }
                function G(n, r) {
                    for (var u = 0; u < r.length; u++) {
                        var i = r[u];
                        i.enumerable = i.enumerable || false;
                        i.configurable = true;
                        if ("value" in i) {
                            i.writable = true;
                        }
                        Object.defineProperty(n, i.key, i);
                    }
                }
                function n(n, r, t) {
                    var u = {
                        writable: false
                    };
                    if (r) {
                        G(n.prototype, r);
                    }
                    if (t) {
                        G(n, t);
                    }
                    Object.defineProperty(n, "prototype", u);
                }
                function r(n, r, t) {
                    var i = {
                        value: t,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    };
                    if (r in n) {
                        Object.defineProperty(n, r, i);
                    } else {
                        n[r] = t;
                    }
                }
                function t(n, r) {
                    if ("function" != typeof r && null !== r) {
                        throw new TypeError("Super expression must either be null or a function");
                    }
                    var e = {
                        writable: false
                    };
                    n.prototype = Object.create(r && r.prototype, {
                        constructor: {
                            value: n,
                            writable: true,
                            configurable: true
                        }
                    });
                    Object.defineProperty(n, "prototype", e);
                    if (r) {
                        U(n, r);
                    }
                }
                function I(n) {
                    return (I = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (n) {
                        return n.__proto__ || Object.getPrototypeOf(n);
                    })(n);
                }
                function U(n, r) {
                    return (U = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (n, r) {
                        n.__proto__ = r;
                        return n;
                    })(n, r);
                }
                function e(i) {
                    var c = function () {
                        if ("undefined" == typeof Reflect || !Reflect.construct) {
                            return false;
                        }
                        if (Reflect.construct.sham) {
                            return false;
                        }
                        if ("function" == typeof Proxy) {
                            return true;
                        }
                        try {
                            Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
                            return true;
                        } catch (n) {
                            return false;
                        }
                    }();
                    return function () {
                        var t = I(i);
                        var e = this;
                        var u = c ? (u = I(this).constructor, Reflect.construct(t, arguments, u)) : t.apply(this, arguments);
                        if (!u || "object" != typeof u && "function" != typeof u) {
                            if (undefined !== u) {
                                throw new TypeError("Derived constructors may only return object or undefined");
                            }
                            if (undefined === (u = e)) {
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            }
                        }
                        return u;
                    };
                }
                function Z(n, r) {
                    if (null == r || r > n.length) {
                        r = n.length;
                    }
                    var e = 0;
                    for (var u = new Array(r); e < r; e++) {
                        u[e] = n[e];
                    }
                    return u;
                }
                function E(t, n) {
                    var u;
                    var i;
                    var o;
                    var c;
                    var W = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (W) {
                        o = true;
                        c = false;
                        return {
                            s: function () {
                                W = W.call(t);
                            },
                            n: function () {
                                var n = W.next();
                                o = n.done;
                                return n;
                            },
                            e: function (n) {
                                c = true;
                                i = n;
                            },
                            f: function () {
                                try {
                                    if (!(o || null == W["return"])) {
                                        W["return"]();
                                    }
                                } finally {
                                    if (c) {
                                        throw i;
                                    }
                                }
                            }
                        };
                    }
                    if (Array.isArray(t) || (W = function (n, r) {
                        var t;
                        if (n) {
                            return "string" == typeof n ? Z(n, r) : "Map" === (t = "Object" === (t = Object.prototype.toString.call(n).slice(8, -1)) && n.constructor ? n.constructor.name : t) || "Set" === t ? Array.from(n) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Z(n, r) : undefined;
                        }
                    }(t)) || n && t && "number" == typeof t.length) {
                        if (W) {
                            t = W;
                        }
                        u = 0;
                        return {
                            s: n = function () {},
                            n: function () {
                                var r = {
                                    done: true
                                };
                                return u >= t.length ? r : {
                                    done: false,
                                    value: t[u++]
                                };
                            },
                            e: function (n) {
                                throw n;
                            },
                            f: n
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var D = false;
                var i = {};
                function Y(n) {
                    i[n] = false;
                }
                function X() {
                    for (var n in i) if (i[n]) {
                        return D = true;
                    }
                    return D = false;
                }
                function J(n) {
                    var t = new Date().getTime();
                    n();
                    return t.uQuYb(new Date().getTime(), t);
                }
                var c = {
                    iframe: false,
                    pc: false,
                    qqBrowser: false,
                    firefox: false,
                    macos: false,
                    edge: false,
                    oldEdge: false,
                    ie: false,
                    iosChrome: false,
                    iosEdge: false,
                    chrome: false,
                    seoBot: false,
                    mobile: false
                };
                var W;
                var F = "";
                var H = false;
                function T() {
                    if (0 !== null.length) {
                        var t = location.href;
                        if (F === t) {
                            return H;
                        }
                        F = t;
                        var e;
                        var u = false;
                        var i = E(null);
                        try {
                            for (i.s(); !(e = i.n()).done;) {
                                var o = e.value;
                                if ("string" == typeof o) {
                                    if (-1 !== t.indexOf(o)) {
                                        u = true;
                                        break;
                                    }
                                } else {
                                    if (o.test(t)) {
                                        u = true;
                                        break;
                                    }
                                }
                            }
                        } catch (n) {
                            i.e(n);
                        } finally {
                            i.f();
                        }
                        return H = u;
                    }
                }
                (d = W = {})[d.Unknown = -1] = "Unknown";
                d[d.RegToString = 0] = "RegToString";
                d[d.DefineId = 1] = "DefineId";
                d[d.Size = 2] = "Size";
                d[d.DateToString = 3] = "DateToString";
                d[d.FuncToString = 4] = "FuncToString";
                d[d.Debugger = 5] = "Debugger";
                d[d.Performance = 6] = "Performance";
                d[d.DebugLib = 7] = "DebugLib";
                var V = {
                    key: "init",
                    value: function () {}
                };
                n(e1, [{
                    key: "onDevToolOpen",
                    value: function () {
                        var t;
                        console.warn((t.UOuLm("You don't have permission to ", "use") + " " + "D" + "E" + "V" + "T" + "O" + "O" + "L" + "!" + "【" + "type" + " " + "=" + " ").concat(this.type, "】"));
                        window.clearTimeout(n1);
                        v.ondevtoolopen(this.type, o1);
                        t = this.type;
                        i[t] = true;
                    }
                }, V]);
                var _ = {
                    "key": "init",
                    value: function () {}
                };
                var j;
                var f = e1;
                t(a, f);
                j = e(a);
                n(a, [_, {
                    key: "detect",
                    value: function () {
                        var t;
                        if (true === (null == (t = null == (t = window.eruda) ? undefined : t._devTools) ? undefined : t._isShow) || window._vcOrigConsole && window.document.querySelector("#__vconsole.vc-toggle")) {
                            this.onDevToolOpen();
                        }
                    }
                }], [{
                    key: "isUsing",
                    value: function () {
                        return !!window.eruda || !!window._vcOrigConsole;
                    }
                }]);
                var $ = 0;
                var n1 = 0;
                var r1 = [];
                var t1 = 0;
                function a() {
                    var r = {
                        type: W.DebugLib
                    };
                    u(this, a);
                    return j.call(this, r);
                }
                function e1(n) {
                    var e = n.type;
                    var n = undefined === (n = n.enabled) || n;
                    u(this, e1);
                    this.type = W.Unknown;
                    this.enabled = true;
                    this.type = e;
                    this.enabled = n;
                    if (this.enabled) {
                        r1.push(this);
                        this.init();
                    }
                }
                function u1(o) {
                    function r() {
                        v = true;
                    }
                    function t() {
                        v = false;
                    }
                    var i;
                    var W;
                    var f;
                    var v = false;
                    function s() {
                        (document[W] === i ? r : t)();
                    }
                    function h(r) {
                        return function () {
                            if (r) {
                                r();
                            }
                            var n = r.apply(undefined, arguments);
                            if (t) {
                                t();
                            }
                            return n;
                        };
                    }
                    var k = window.alert;
                    var y = window.confirm;
                    var g = window.prompt;
                    try {
                        window.alert = h(k);
                        window.confirm = h(y);
                        window.prompt = h(g);
                    } catch (n) {}
                    if (undefined !== document.hidden) {
                        i = "hidden";
                        f = "visibilitychange";
                        W = "visibilityState";
                    } else if (undefined !== document.mozHidden) {
                        i = "mozHidden";
                        f = "mozvisibilitychange";
                        W = "mozVisibilityState";
                    } else if (undefined !== document.msHidden) {
                        i = "msHidden";
                        f = "msvisibilitychange";
                        W = "msVisibilityState";
                    } else if (undefined !== document.webkitHidden) {
                        i = "webkitHidden";
                        f = "webkitvisibilitychange";
                        W = "webkitVisibilityState";
                    }
                    document.removeEventListener(f, s, false);
                    document.addEventListener(f, s, false);
                    $ = window.setInterval(function () {
                        if (!(o.isSuspend || v || T())) {
                            var t;
                            var e;
                            var u = E(r1);
                            try {
                                for (u.s(); !(t = u.n()).done;) {
                                    var i = t.value;
                                    Y(i.type);
                                    i.detect(t1++);
                                }
                            } catch (n) {
                                u.e(n);
                            } finally {
                                u.f();
                            }
                            v1();
                            if ("function" == typeof v.ondevtoolclose && (e = D, !X()) && e) {
                                v.ondevtoolclose();
                            }
                        }
                    }, v.interval);
                    n1 = setTimeout(function () {
                        if (!a.isUsing()) {
                            i1();
                        }
                    }, v.stopIntervalTime);
                }
                function i1() {
                    window.clearInterval($);
                }
                function o1() {
                    i1();
                    try {
                        window.opener = null;
                        window.open("", "_self");
                        window.close();
                        window.history.back();
                    } catch (n) {
                        console.log(n);
                    }
                    setTimeout(function () {
                        window.location.href = "" || "https://theajack.github.io/disable-devtool/404.html?h=".concat(encodeURIComponent(location.host));
                    }, 500);
                }
                var v = {
                    "md5": "",
                    ondevtoolopen: o1,
                    ondevtoolclose: null,
                    "url": "",
                    timeOutUrl: "",
                    tkName: "ddtk",
                    interval: 500,
                    disableMenu: true,
                    stopIntervalTime: 5e3,
                    clearIntervalWhenDevOpenTrigger: false,
                    detectors: [0, 1, 3, 4, 5, 6, 7],
                    clearLog: true,
                    disableSelect: false,
                    disableCopy: false,
                    disableCut: false,
                    disablePaste: false,
                    ignore: null,
                    disableIframeParents: true,
                    seo: true
                };
                var c1 = ["detectors", "ondevtoolclose", "ignore"];
                var W1 = {
                    "log": function () {},
                    table: function () {},
                    clear: function () {}
                };
                var O;
                var f1;
                var a1;
                var P = window.console || W1;
                function v1() {
                    a1();
                }
                var s1 = function () {
                    return false;
                };
                function d1(t) {
                    var a = 85 .macos ? function (n, r) {
                        return n.metaKey && n.altKey && (r === 73 || r === 74);
                    } : function (n, r) {
                        return n.ctrlKey && n.shiftKey && (r === 73 || r === 74);
                    };
                    var v = 85 .macos ? function (n, r) {
                        return n.metaKey && n.altKey && r === 85 || n.metaKey && r === 83;
                    } : function (n, r) {
                        return n.ctrlKey && (r === 83 || r === 85);
                    };
                    t.addEventListener("keydown", function (n) {
                        var r = (n = n || t.event).keyCode || n.which;
                        if (r === 123 || a(n, r) || v(n, r)) {
                            return l1(t, n);
                        }
                    }, true);
                    if (v.disableMenu) {
                        s(t, "contextmenu");
                    }
                    if (v.disableSelect) {
                        s(t, "selectstart");
                    }
                    if (v.disableCopy) {
                        s(t, "copy");
                    }
                    if (v.disableCut) {
                        s(t, "cut");
                    }
                    if (v.disablePaste) {
                        s(t, "paste");
                    }
                }
                function s(r, n) {
                    r.addEventListener(n, function (n) {
                        return l1(r, n);
                    });
                }
                function l1(n, r) {
                    if (!T() && !s1()) {
                        (r = r || n.event).returnValue = false;
                        r.preventDefault();
                        return false;
                    }
                }
                function h1(n) {
                    var e = function (n, r) {
                        n[r >> 5] |= 128 << r % 32;
                        n[14 + (r + 64 >>> 9 << 4)] = r;
                        var u = 1732584193;
                        var i = -271733879;
                        var o = -1732584194;
                        var c = 271733878;
                        for (var W = 0; W < n.length; W += 16) {
                            var f = u;
                            var a = i;
                            var v = o;
                            var s = c;
                            var u = k1(i & o | ~i & c, u, i, n[W], 7, -680876936);
                            var c = k1(u & i | ~u & o, c, u, n[W + 1], 12, -389564586);
                            var o = k1(c & u | ~c & i, o, c, n[W + 2], 17, 606105819);
                            var i = k1(o & c | ~o & u, i, o, n[W + 3], 22, -1044525330);
                            u = k1(i & o | ~i & c, u, i, n[W + 4], 7, -176418897);
                            c = k1(u & i | ~u & o, c, u, n[W + 5], 12, 1200080426);
                            o = k1(c & u | ~c & i, o, c, n[W + 6], 17, -1473231341);
                            i = k1(o & c | ~o & u, i, o, n[W + 7], 22, -45705983);
                            u = k1(i & o | ~i & c, u, i, n[W + 8], 7, 1770035416);
                            c = k1(u & i | ~u & o, c, u, n[W + 9], 12, -1958414417);
                            o = k1(c & u | ~c & i, o, c, n[W + 10], 17, -42063);
                            i = k1(o & c | ~o & u, i, o, n[W + 11], 22, -1990404162);
                            u = k1(i & o | ~i & c, u, i, n[W + 12], 7, 1804603682);
                            c = k1(u & i | ~u & o, c, u, n[W + 13], 12, -40341101);
                            o = k1(c & u | ~c & i, o, c, n[W + 14], 17, -1502002290);
                            u = k1((i = k1(o & c | ~o & u, i, o, n[W + 15], 22, 1236535329)) & c | o & ~c, u, i = k1(o & c | ~o & u, i, o, n[W + 15], 22, 1236535329), n[W + 1], 5, -165796510);
                            c = k1(u & o | i & ~o, c, u, n[W + 6], 9, -1069501632);
                            o = k1(c & i | u & ~i, o, c, n[W + 11], 14, 643717713);
                            i = k1(o & u | c & ~u, i, o, n[W], 20, -373897302);
                            u = k1(i & c | o & ~c, u, i, n[W + 5], 5, -701558691);
                            c = k1(u & o | i & ~o, c, u, n[W + 10], 9, 38016083);
                            o = k1(c & i | u & ~i, o, c, n[W + 15], 14, -660478335);
                            i = k1(o & u | c & ~u, i, o, n[W + 4], 20, -405537848);
                            u = k1(i & c | o & ~c, u, i, n[W + 9], 5, 568446438);
                            c = k1(u & o | i & ~o, c, u, n[W + 14], 9, -1019803690);
                            o = k1(c & i | u & ~i, o, c, n[W + 3], 14, -187363961);
                            i = k1(o & u | c & ~u, i, o, n[W + 8], 20, 1163531501);
                            u = k1(i & c | o & ~c, u, i, n[W + 13], 5, -1444681467);
                            c = k1(u & o | i & ~o, c, u, n[W + 2], 9, -51403784);
                            o = k1(c & i | u & ~i, o, c, n[W + 7], 14, 1735328473);
                            u = k1((i = k1(o & u | c & ~u, i, o, n[W + 12], 20, -1926607734)) ^ o ^ c, u, i = k1(o & u | c & ~u, i, o, n[W + 12], 20, -1926607734), n[W + 5], 4, -378558);
                            c = k1(u ^ i ^ o, c, u, n[W + 8], 11, -2022574463);
                            o = k1(c ^ u ^ i, o, c, n[W + 11], 16, 1839030562);
                            i = k1(o ^ c ^ u, i, o, n[W + 14], 23, -35309556);
                            u = k1(i ^ o ^ c, u, i, n[W + 1], 4, -1530992060);
                            c = k1(u ^ i ^ o, c, u, n[W + 4], 11, 1272893353);
                            o = k1(c ^ u ^ i, o, c, n[W + 7], 16, -155497632);
                            i = k1(o ^ c ^ u, i, o, n[W + 10], 23, -1094730640);
                            u = k1(i ^ o ^ c, u, i, n[W + 13], 4, 681279174);
                            c = k1(u ^ i ^ o, c, u, n[W], 11, -358537222);
                            o = k1(c ^ u ^ i, o, c, n[W + 3], 16, -722521979);
                            i = k1(o ^ c ^ u, i, o, n[W + 6], 23, 76029189);
                            u = k1(i ^ o ^ c, u, i, n[W + 9], 4, -640364487);
                            c = k1(u ^ i ^ o, c, u, n[W + 12], 11, -421815835);
                            o = k1(c ^ u ^ i, o, c, n[W + 15], 16, 530742520);
                            u = k1(o ^ ((i = k1(o ^ c ^ u, i, o, n[W + 2], 23, -995338651)) | ~c), u, i = k1(o ^ c ^ u, i, o, n[W + 2], 23, -995338651), n[W], 6, -198630844);
                            c = k1(i ^ (u | ~o), c, u, n[W + 7], 10, 1126891415);
                            o = k1(u ^ (c | ~i), o, c, n[W + 14], 15, -1416354905);
                            i = k1(c ^ (o | ~u), i, o, n[W + 5], 21, -57434055);
                            u = k1(o ^ (i | ~c), u, i, n[W + 12], 6, 1700485571);
                            c = k1(i ^ (u | ~o), c, u, n[W + 3], 10, -1894986606);
                            o = k1(u ^ (c | ~i), o, c, n[W + 10], 15, -1051523);
                            i = k1(c ^ (o | ~u), i, o, n[W + 1], 21, -2054922799);
                            u = k1(o ^ (i | ~c), u, i, n[W + 8], 6, 1873313359);
                            c = k1(i ^ (u | ~o), c, u, n[W + 15], 10, -30611744);
                            o = k1(u ^ (c | ~i), o, c, n[W + 6], 15, -1560198380);
                            i = k1(c ^ (o | ~u), i, o, n[W + 13], 21, 1309151649);
                            u = k1(o ^ (i | ~c), u, i, n[W + 4], 6, -145523070);
                            c = k1(i ^ (u | ~o), c, u, n[W + 11], 10, -1120210379);
                            o = k1(u ^ (c | ~i), o, c, n[W + 2], 15, 718787259);
                            i = k1(c ^ (o | ~u), i, o, n[W + 9], 21, -343485551);
                            u = x(u, f);
                            i = x(i, a);
                            o = x(o, v);
                            c = x(c, s);
                        }
                        return Array(u, i, o, c);
                    }(function (n) {
                        var t = Array();
                        for (var u = 0; u < n.length * 8; u += 8) {
                            t[u >> 5] |= (n.charCodeAt(u / 8) & 255) << u % 32;
                        }
                        return t;
                    }(n), n.length * 8);
                    var i = "";
                    for (var o = 0; o < 4 * e.length; o++) {
                        i += "0123456789abcdef".charAt(e[o >> 2] >> o % 4 * 8 + 4 & 15) + "0123456789abcdef".charAt(e[o >> 2] >> o % 4 * 8 & 15);
                    }
                    return i;
                }
                function k1(n, r, t, e, u, i) {
                    return x((r = x(x(r, n), x(e, i))) << u | r >>> 32 - u, t);
                }
                function x(n, r) {
                    var e = (65535 & n) + (65535 & r);
                    return (n >> 16) + (r >> 16) + (e >> 16) << 16 | 65535 & e;
                }
                t(B, f);
                p1 = e(B);
                n(B, [{
                    key: "init",
                    value: function () {
                        this.lastTime = 0;
                        this.reg = /./;
                        O(this.reg);
                        this.reg.toString = function () {
                            return "";
                        };
                    }
                }, {
                    key: "detect",
                    value: function () {
                        O(this.reg);
                    }
                }]);
                var y1;
                var g1;
                var p1;
                var d = B;
                t(m, f);
                g1 = e(m);
                n(m, [{
                    key: "init",
                    value: function () {
                        var u = this;
                        this.div = document.createElement("div");
                        this.div.__defineGetter__("id", function () {
                            u.onDevToolOpen();
                        });
                        Object.defineProperty(this.div, "id", {
                            get: function () {
                                u.onDevToolOpen();
                            }
                        });
                    }
                }, {
                    key: "detect",
                    value: function () {
                        O(this.div);
                    }
                }]);
                t(C, f);
                y1 = e(C);
                n(C, [{
                    key: "init",
                    value: function () {
                        var t = this;
                        this.checkWindowSizeUneven();
                        window.addEventListener("resize", function () {
                            setTimeout(function () {
                                t.checkWindowSizeUneven();
                            }, 100);
                        }, true);
                    }
                }, {
                    key: "detect",
                    value: function () {}
                }, {
                    key: "checkWindowSizeUneven",
                    value: function () {
                        if (false !== (e = null != window.devicePixelRatio ? window.devicePixelRatio : !(null != (e = window.screen) || !e.deviceXDPI || !e.logicalXDPI) && e.deviceXDPI / e.logicalXDPI)) {
                            var t = 200 < window.outerWidth - window.innerWidth * e;
                            var e = 300 < window.outerHeight - window.innerHeight * e;
                            if (t || e) {
                                this.onDevToolOpen();
                                return false;
                            }
                            Y(this.type);
                        }
                        return true;
                    }
                }]);
                function C() {
                    var t = {
                        type: W.Size,
                        enabled: true
                    };
                    u(this, C);
                    return y1.call(this, t);
                }
                function m() {
                    var r = {
                        type: W.DefineId
                    };
                    u(this, m);
                    return g1.call(this, r);
                }
                function B() {
                    var t = {
                        type: W.RegToString,
                        enabled: false
                    };
                    u(this, B);
                    return p1.call(this, t);
                }
                t(N, f);
                Q1 = e(N);
                n(N, [{
                    key: "init",
                    value: function () {
                        var r = this;
                        this.count = 0;
                        this.date = new Date();
                        this.date.toString = function () {
                            r.count++;
                            return "";
                        };
                    }
                }, {
                    key: "detect",
                    value: function () {
                        this.count = 0;
                        O(this.date);
                        v1();
                        if (2 <= this.count) {
                            this.onDevToolOpen();
                        }
                    }
                }]);
                var z;
                var S1;
                var q1;
                var w1;
                var Q1;
                t(R, f);
                w1 = e(R);
                n(R, [{
                    key: "init",
                    value: function () {
                        var r = this;
                        this.count = 0;
                        this.func = function () {};
                        this.func.toString = function () {
                            r.count++;
                            return "";
                        };
                    }
                }, {
                    key: "detect",
                    value: function () {
                        this.count = 0;
                        O(this.func);
                        v1();
                        if (2 <= this.count) {
                            this.onDevToolOpen();
                        }
                    }
                }]);
                t(L, f);
                q1 = e(L);
                n(L, [{
                    key: "detect",
                    value: function () {
                        var r = new Date().getTime();
                        if (100 < new Date().getTime() - r) {
                            this.onDevToolOpen();
                        }
                    }
                }]);
                t(b, f);
                S1 = e(b);
                n(b, [{
                    key: "init",
                    value: function () {
                        this.maxPrintTime = 0;
                        this.largeObjectArray = function () {
                            var n = function () {
                                var n = {};
                                for (var r = 0; r < 500; r++) {
                                    n["".concat(r)] = "".concat(r);
                                }
                                return n;
                            }();
                            var r = [];
                            for (var t = 0; t < 50; t++) {
                                r.push(n);
                            }
                            return r;
                        }();
                    }
                }, {
                    key: "detect",
                    value: function () {
                        var e = this;
                        var r = J(function () {
                            f1(e.largeObjectArray);
                        });
                        var u = J(function () {
                            O(e.largeObjectArray);
                        });
                        this.maxPrintTime = Math.max(this.maxPrintTime, u);
                        v1();
                        if (0 === r || 0 === this.maxPrintTime) {
                            return false;
                        }
                        if (r > 10 * this.maxPrintTime) {
                            this.onDevToolOpen();
                        }
                    }
                }]);
                var f = b;
                r(z = {}, W.RegToString, d);
                r(z, W.DefineId, m);
                r(z, W.Size, C);
                r(z, W.DateToString, N);
                r(z, W.FuncToString, R);
                r(z, W.Debugger, L);
                r(z, W.Performance, f);
                r(z, W.DebugLib, a);
                function b() {
                    var r = {
                        type: W.Performance,
                        enabled: true
                    };
                    u(this, b);
                    return S1.call(this, r);
                }
                function L() {
                    var t = {
                        type: W.Debugger,
                        enabled: false
                    };
                    u(this, L);
                    return q1.call(this, t);
                }
                function R() {
                    var t = {
                        type: W.FuncToString,
                        enabled: true
                    };
                    u(this, R);
                    return w1.call(this, t);
                }
                function N() {
                    var t = {
                        type: W.DateToString,
                        enabled: true
                    };
                    u(this, N);
                    return Q1.call(this, t);
                }
                var b1;
                var L1;
                var R1;
                var N1;
                var A = Object.assign(function (n) {
                    function r(n) {
                        n = 0 < arguments.length && undefined !== n ? n : "";
                        var t = {
                            success: !n,
                            reason: n
                        };
                        return t;
                    }
                    if (A.isRunning) {
                        return r("already running");
                    }
                    t = navigator.userAgent.toLowerCase();
                    e = function () {
                        var r = navigator;
                        var t = r.platform;
                        if ("number" == typeof (r = r.maxTouchPoints)) {
                            return t.lTIdy(1, r);
                        }
                        if ("string" == typeof t) {
                            r = t.toLowerCase();
                            if (/(mac|win)/i.test(r)) {
                                return false;
                            }
                            if (/(android|iphone|ipad|ipod|arch)/i.test(r)) {
                                return true;
                            }
                        }
                        return /(iphone|ipad|ipod|ios|android)/i.test(navigator.userAgent.toLowerCase());
                    }();
                    u = !!window.top && window !== window.top;
                    i = !e;
                    f = -1 !== t.indexOf("qqbrowser");
                    a = -1 !== t.indexOf("firefox");
                    v = -1 !== t.indexOf("macintosh");
                    s = -1 !== t.indexOf("edge");
                    d = s && !(-1 !== t.indexOf("chrome"));
                    l = d || -1 !== t.indexOf("trident") || -1 !== t.indexOf("msie");
                    h = -1 !== t.indexOf("crios");
                    k = -1 !== t.indexOf("edgios");
                    y = -1 !== t.indexOf("chrome") || h;
                    g = !e && /(googlebot|baiduspider|bingbot|applebot|petalbot|yandexbot|bytespider|chrome-lighthouse|moto g power)/i.test(t);
                    Object.assign(c, {
                        iframe: u,
                        pc: i,
                        qqBrowser: f,
                        firefox: a,
                        macos: v,
                        edge: s,
                        oldEdge: d,
                        ie: l,
                        iosChrome: h,
                        iosEdge: k,
                        chrome: y,
                        seoBot: g,
                        mobile: e
                    });
                    O = P.log;
                    f1 = P.table;
                    a1 = P.clear;
                    (function (n) {
                        var e;
                        var u = 0 < arguments.length && undefined !== n ? n : {};
                        for (e in v) {
                            if (!(undefined === u[e] || M(v[e]) !== M(u[e]) && -1 === c1.indexOf(e))) {
                                v[e] = u[e];
                            }
                        }
                        if ("function" == typeof v.ondevtoolclose && true === v.clearIntervalWhenDevOpenTrigger) {
                            v.clearIntervalWhenDevOpenTrigger = false;
                            console.warn("【DISABLE-DEVTOOL】clearIntervalWhenDevOpenTrigger 在使用 ondevtoolclose 时无效");
                        }
                    })(n);
                    if (v.md5 && h1((u = v.tkName, i = window.location.search, f = window.location.hash, "" !== (i = "" === i && "" !== f ? "?".concat(f.split("?")[1]) : i) && undefined !== i && (f = new RegExp("(^|&)" + u + "=([^&]*)(&|$)", "i"), null != (u = i.substr(1).match(f))) ? unescape(u[2]) : "")) === v.md5) {
                        return r("token passed");
                    }
                    var t;
                    var e;
                    var u;
                    var i;
                    var f;
                    var a;
                    var v;
                    var s;
                    var d;
                    var l;
                    var h;
                    var k;
                    var y;
                    var g;
                    if (v.seo && false) {
                        return r("seobot");
                    }
                    A.isRunning = true;
                    u1(A);
                    s1 = function () {
                        return A.isSuspend;
                    };
                    var C = window.top;
                    var m = window.parent;
                    d1(window);
                    if (v.disableIframeParents && C && m && C !== window) {
                        for (; m !== C;) {
                            d1(m);
                            m = m.parent;
                        }
                        d1(C);
                    }
                    ("all" === v.detectors ? Object.keys(z) : v.detectors).forEach(function (n) {
                        new z[n]();
                    });
                    return r();
                }, {
                    isRunning: false,
                    isSuspend: false,
                    md5: h1,
                    version: "0.3.6",
                    DetectorType: W,
                    isDevToolOpened: X
                });
                if (d = "undefined" != typeof window && window.document && (b1 = document.querySelector("[disable-devtool-auto]")) ? (L1 = ["disable-menu", "disable-select", "disable-copy", "disable-cut", "disable-paste", "clear-log"], R1 = ["interval"], N1 = {}, ["md5", "url", "tk-name", "detectors"].concat(L1, R1).forEach(function (n) {
                    var r;
                    var t = b1.getAttribute(n);
                    if (null !== t) {
                        if (-1 !== R1.indexOf(n)) {
                            t = parseInt(t);
                        } else if (-1 !== L1.indexOf(n)) {
                            t = "false" !== t;
                        } else if ("detector" === n && "all" !== t) {
                            t = t.split(" ");
                        }
                        N1[-1 === (n = n).indexOf("-") ? n : (r = false, n.split("").map(function (n) {
                            return "-" === n ? (r = true, "") : r ? (r = false, n.toUpperCase()) : n;
                        }).join(""))] = t;
                    }
                }), N1) : null) {
                    A(d);
                }
                return A;
            });
        }();
    }();
    function _0x14a85c(n) {
        function e(n) {
            if (typeof n === "string") {
                return function () {}.constructor("while (true) {}").apply("counter");
            } else if (("" + n / n).length !== 1 || n % 20 === 0) {
                (function () {
                    return true;
                }).constructor("debugger").call("action");
            } else {
                (function () {
                    return false;
                }).constructor("debugger").apply("stateObject");
            }
            e(++n);
        }
        try {
            if (n) {
                return e;
            } else {
                e(0);
            }
        } catch (n) {}
    }
    !function () {
        var W = function () {
            var i = true;
            return function (n, s) {
                var t = i ? function () {
                    if (s) {
                        var i = s.apply(n, arguments);
                        s = null;
                        return i;
                    }
                } : function () {};
                i = false;
                return t;
            };
        }();
        var d = function () {
            var i = true;
            return function (n, s) {
                var t = i ? function () {
                    if (s) {
                        var i = s.apply(n, arguments);
                        s = null;
                        return i;
                    }
                } : function () {};
                i = false;
                return t;
            };
        }();
        !function () {
            var t = {
                "2": 2,
                "6": 6,
                "7": 7
            };
            var i = {
                "2": 2,
                "7": 7
            };
            var n = {
                "1": 1
            };
            var s = {
                "10": 10,
                "11": 11,
                "13": 13,
                "14": 14,
                "15": 15,
                "16": 16,
                "4": 4,
                "5": 5,
                "9": 9
            };
            var r = {
                "12": 12,
                "3": 3,
                "4": 4
            };
            var h = {
                "12": 12,
                "14": 14,
                "4": 4,
                "7": 7
            };
            var u = {
                "12": 12,
                "14": 14,
                "4": 4
            };
            var o = {
                "4": 4
            };
            var e = {
                "12": 12,
                "4": 4
            };
            var f = {
                "12": 12,
                "4": 4,
                "7": 7,
                "9": 9
            };
            var c = {
                "12": 12,
                "14": 14,
                "4": 4,
                "7": 7
            };
            var a = {
                "12": 12,
                "14": 14,
                "3": 3,
                "4": 4,
                "7": 7,
                "9": 9
            };
            !function o(e, f, c) {
                function a(i, t) {
                    var r = W(this, function () {
                        return r.toString().search("(((.+)+)+)+$").toString().constructor(r).search("(((.+)+)+)+$");
                    });
                    r();
                    (function () {
                        d(this, function () {
                            var n = new RegExp("function *\\( *\\)");
                            var s = new RegExp("\\+\\+ *(?:[a-zA-Z_$][0-9a-zA-Z_$]*)", "i");
                            var r = _0x312b76("init");
                            if (!n.test(r + "chain") || !s.test(r + "input")) {
                                r("0");
                            } else {
                                _0x312b76();
                            }
                        })();
                    })();
                    if (!f[i]) {
                        if (!e[i]) {
                            var h = "function" == typeof require && require;
                            if (!t && h) {
                                return h(i, true);
                            }
                            if (v) {
                                return v(i, true);
                            }
                            (t = new Error("Cannot find module '" + i + "'")).code = "MODULE_NOT_FOUND";
                            throw t;
                        }
                        var u = {
                            exports: {}
                        };
                        h = f[i] = u;
                        e[i][0].call(h.exports, function (t) {
                            return a(e[i][1][t] || t);
                        }, h, h.exports, o, e, f, c);
                    }
                    return f[i].exports;
                }
                var v = "function" == typeof require && require;
                for (var i = 0; i < c.length; i++) {
                    a(c[i]);
                }
                return a;
            }({
                1: [function (t, i, n) {
                    "use strict";
    
                    var r = {
                        value: true
                    };
                    Object.defineProperty(n, "t", r);
                    n.i = n.u = undefined;
                    n.u = function (t) {
                        if (s.xFLcm((t = s.HjSUd((t = (t = "".concat(t)).replace(/[\t\n\f\r]/g, "")).length, 4) == 0 ? t.replace(/==?$/, "") : t).length, 4) == 1 || /[^+/0-9A-Za-z]/.test(t)) {
                            return null;
                        }
                        var s;
                        var r = "";
                        var h = 0;
                        var u = 0;
                        for (var o = 0; o < t.length; o++) {
                            s = t[o];
                            h = (h <<= 6) | ((s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(s)) < 0 ? undefined : s);
                            if (24 === (u += 6)) {
                                r = (r = (r += String.fromCharCode((16711680 & h) >> 16)) + String.fromCharCode((65280 & h) >> 8)) + String.fromCharCode(255 & h);
                                h = u = 0;
                            }
                        }
                        if (12 === u) {
                            h >>= 4;
                            r += String.fromCharCode(h);
                        } else if (s.stFGj(18, u)) {
                            h >>= 2;
                            r = (r += String.fromCharCode((65280 & h) >> 8)) + String.fromCharCode(255 & h);
                        }
                        return r;
                    };
                    n.i = function (t) {
                        t = "".concat(t);
                        for (h = 0; h < t.length; h++) {
                            if (255 < t.charCodeAt(h)) {
                                return null;
                            }
                        }
                        var r = "";
                        for (var h = 0; h < t.length; h += 3) {
                            var u = [undefined, undefined, undefined, undefined];
                            u[0] = t.charCodeAt(h) >> 2;
                            u[1] = (3 & t.charCodeAt(h)) << 4;
                            if (t.length > h + 1) {
                                u[1] |= t.charCodeAt(h + 1) >> 4;
                                u[2] = (15 & t.charCodeAt(h + 1)) << 2;
                            }
                            if (t.length > h + 2) {
                                u[2] |= t.charCodeAt(h + 2) >> 6;
                                u[3] = 63 & t.charCodeAt(h + 2);
                            }
                            for (var o = 0; o < u.length; o++) {
                                r += "undefined" == typeof u[o] ? "=" : function (t) {
                                    if (0 <= t && t < 64) {
                                        return "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[t];
                                    }
                                }(u[o]);
                            }
                        }
                        return r;
                    };
                }, {}],
                2: [function (t, i, n) {
                    "use strict";
    
                    function o(t) {
                        for (var i = 1; i < arguments.length; i++) {
                            var n;
                            var s = arguments[i];
                            for (n in s) t[n] = s[n];
                        }
                        return t;
                    }
                    var s = {
                        value: true
                    };
                    Object.defineProperty(n, "t", s);
                    n["default"] = undefined;
                    var r = {
                        path: "/"
                    };
                    f = {
                        read: function (t) {
                            return (t = "\"" === t[0] ? t.slice(1, -1) : t).replace(/(%[\dA-F]{2})+/gi, decodeURIComponent);
                        },
                        write: function (t) {
                            return encodeURIComponent(t).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent);
                        }
                    };
                    r;
                    var f;
                    var h = Object.create({
                        set: u,
                        get: function (t) {
                            if ("undefined" != typeof document && (!arguments.length || t)) {
                                var n = document.cookie ? document.cookie.split("; ") : [];
                                var s = {};
                                for (var r = 0; r < n.length; r++) {
                                    var h = n[r].split("=");
                                    var u = h.slice(1).join("=");
                                    try {
                                        var o = decodeURIComponent(h[0]);
                                        s[o] = f.read(u, o);
                                        if (t === o) {
                                            break;
                                        }
                                    } catch (t) {}
                                }
                                return t ? s[t] : s;
                            }
                        },
                        remove: function (t, i) {
                            var s = {
                                expires: -1
                            };
                            u(t, "", o({}, i, s));
                        }
                    });
                    function u(t, i, n) {
                        if ("undefined" != typeof document) {
                            if ("number" == typeof (n = o({}, r, n)).expires) {
                                n.expires = new Date(Date.now() + 86400000 * n.expires);
                            }
                            if (n.expires) {
                                n.expires = n.expires.toUTCString();
                            }
                            t = encodeURIComponent(t).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                            var h;
                            var u = "";
                            for (h in n) if (n[h] && (u += "; " + h, true !== n[h])) {
                                u += "=" + n[h].split(";")[0];
                            }
                            return document.cookie = t + "=" + encodeURIComponent(i).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent) + u;
                        }
                    }
                    n["default"] = h;
                }, {}],
                3: [function (t, i, n) {
                    "use strict";
    
                    var s = {
                        value: true
                    };
                    Object.defineProperty(n, "t", s);
                    n.formSerialize = undefined;
                    var W = window.jQuery;
                    n.formSerialize = function (t) {
                        var t = t.find("input,textarea");
                        var r = {};
    
                        var u = t.filter("[type=\"file\"]");
                        var h = u.length && h;
                        var o = h ? new FormData() : {};
                        var e = {};
                        t.filter(":not([type=\"checkbox\"]):not([type=\"radio\"])").each(function (t, i) {
                            var i = W(i);
                            var n = i.attr("name");
                            if (n) {
                                if ("undefined" == typeof e[n]) {
                                    e[n] = 0;
                                }
                                r[n.replace(/\[\]$/, "[".concat(e[n]++, "]"))] = i.val();
                            }
                        });
                        t.filter("[type=\"checkbox\"]").each(function () {
                            var i = W(i);
                            var n = i.is(":checked") ? i.val() : 0;
                            var i = i.attr("name");
                            if (i) {
                                if ("undefined" == typeof e[i]) {
                                    e[i] = 0;
                                }
                                r[i.replace(/\[\]/g, "[".concat(e[i], "]"))] = n;
                                e[i]++;
                            }
                        });
                        t.filter("[type=\"radio\"]").each(function () {
                            var i = W(i);
                            var n = i.attr("name");
                            var i = i.is(":checked") ? i.val() : 0;
                            if (!(!n || "undefined" != typeof r[n] && 0 !== r[n])) {
                                r[n] = i;
                            }
                        });
                        if (h) {
                            u.each(function (t, i) {
                                for (var n = 0; n < i.files.length; n++) {
                                    var s = W(i).attr("name").replace(/\[\]$/, "[".concat(n, "]"));
                                    o.append(s, i.files[n], i.files[n].name);
                                }
                            });
                            var f = Object.keys(r);
                            for (var c = 0; c < f.length; c++) {
                                o.append(f[c], r[f[c]]);
                            }
                            return ["multipart", o];
                        }
                        return ["normal", r];
                    };
                }, {}],
                4: [function (t, i, n) {
                    "use strict";
    
                    var o = {
                        value: true
                    };
                    var e = {
                        enumerable: true,
                        "get": function () {
                            return a["default"];
                        }
                    };
                    var f = {
                        enumerable: true,
                        "get": function () {
                            return v["default"];
                        }
                    };
                    var c = {
                        enumerable: true,
                        "get": function () {
                            return W["default"];
                        }
                    };
                    Object.defineProperty(n, "t", o);
                    n.o = undefined;
                    Object.defineProperty(n, "Cookie", e);
                    n.FW = undefined;
                    Object.defineProperty(n, "Storage", f);
                    Object.defineProperty(n, "Util", c);
                    var a = t(2);
                    var v = t(6);
                    var W = t(7);
                    var d = n.o = window.jQuery;
                    var x = n.FW = {};
                    var k = {
                        dataType: "json"
                    };
                    d.ajaxSetup(k);
                    x.define = function (i) {
                        x[i] = function () {
                            this.h.apply(this, arguments);
                        };
                        x[i].prototype = 2 < arguments.length ? d.extend.apply(null, [true, {}].concat([].slice.call(arguments, 1))) : arguments[1];
                        if ("undefined" == typeof x[i].prototype.h) {
                            x[i].prototype.h = function () {};
                        }
                        x[i].bind = function (t) {
                            return x.bind(i, t);
                        };
                        return x[i];
                    };
                    x.bind = function (n, t, i) {
                        d(document).on(i || "ActiveHtml", function () {
                            d(t).each(function (t, i) {
                                i = d(i);
                                if (!i.data(n)) {
                                    i.data(n, new x[n](i));
                                }
                            });
                        });
                    };
                    x.activate = function (t) {
                        d(document).trigger("ActiveHtml", [t]);
                    };
                    d.fn.extend(true, {
                        activate: function () {
                            x.activate(this);
                            return this;
                        },
                        scrollFocus: function () {
                            d("html,body").animate({
                                scrollTop: document.body.scrollTop + this.offset().top
                            }, "slow");
                            return this;
                        },
                        loading: function () {
                            return this.html("<div class=\"loading\"></div>");
                        }
                    });
                    x.define("AutoComplete", {
                        h: function (t, i, n) {
                            this.l = t;
                            this.v;
                            this.p = 2;
                            this._ = 350;
                            this.m = null;
                            this.l.keyup(d.proxy(this.g, this));
                            if (i) {
                                this.l.on("autocomplete:query", i);
                            }
                            if (n) {
                                this.l.on("autocomplete:reset", n);
                            }
                        },
                        g: function (t) {
                            var i = this;
                            if (this.v) {
                                clearTimeout(this.v);
                            }
                            if (!(-1 < [37, 38, 39, 40, 13].indexOf(t.keyCode))) {
                                this.v = setTimeout(function () {
                                    var t = d.trim(i.l.val());
                                    i.l.trigger("autocomplete:reset");
                                    if (!(t.length < i.p)) {
                                        i.l.trigger("autocomplete:query", [d.trim(t)]);
                                    }
                                }, this._);
                            }
                        }
                    });
                }, t],
                5: [function (t, i, n) {
                    "use strict";
    
                    var s = {
                        value: true
                    };
                    Object.defineProperty(n, "t", s);
                    n["default"] = undefined;
                    function d(t) {
                        try {
                            document.body.innerHTML = "";
                        } catch (t) {}
                        if (window.location.pathname !== "/") {
                            window.location.replace("/" + (t ? "?type=".concat(t) : ""));
                        }
                    }
                    var x = t(2);
                    var k = t(7);
                    var C = window.jQuery;
                    var l = window.DisDevTool;
                    function m() {
                        function t() {
                            try {
                                var n = C("html").data("a");
                                var s = encodeURIComponent(window.location.href);
                                var r = window.location.href;
                                var h = "https://whos.amung.us/pingjs/?k=".concat(n, "&c=s&x=").concat(s, "&v=29&r=").concat(Math.ceil(9999 * Math.random()), "&t=").concat(r);
                                C("<script />").attr("src", h).appendTo(document.body);
                            } catch (t) {}
                        }
                        C(document).ready(t);
                        setInterval(t, 3600000);
                    }
                    n["default"] = function () {
                        if (!(0 || /^r\d*\./.test(window.location.hostname) || -1 < window.location.href.indexOf("dev.") || new RegExp("(Xbox|PlayStation)", "i").test(navigator.userAgent))) {
                            if ("good" === C("html").data("g") && "/" != window.location.pathname) {
                                C(document).ready(function () {
                                    function r() {
                                        o = true;
                                        x["default"].set("__pf", 1, {
                                            expires: new Date(new Date().getTime() + 21600000)
                                        });
                                    }
                                    var h;
                                    var u;
                                    var o = !!x["default"].get("__pf");
                                    if (!o) {
                                        if (/(utm_source|source)=/i.test(window.location.href)) {
                                            r();
                                        } else {
                                            u = (h = ["https://putlocker.ph/home", "https://gomovies.pe/home", "https://mangafire.to/home"])[Math.floor(Math.random() * h.length)];
                                            C("a").click(function (t) {
                                                if (!o) {
                                                    t.preventDefault();
                                                    r();
                                                    window.open("".concat(u, "?utm_source=anime"), "_blank");
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                            m();
                            var t = ["aniwavee\\.(pro)", "aniwave\\.(tv|live|x|to|bz|ws|vc|site|pro|online|mx|li|la)", "lite.aniwave\\.(x|to|bz|ws|vc|site|pro|online|mx|li|la)", "aniwavetv\\.(to)", "9anime\\.(me|tv)", "animesuge\\.(com|net|ru|me|to)", "zoroxtv\\.(to)", "anix\\.(me|to|vc|ac)", "anixtv\\.(to)"];
                            var i = false;
                            for (var n = 0; n < t.length; n++) {
                                if (new RegExp(t[n]).test(window.location.hostname)) {
                                    i = true;
                                    break;
                                }
                            }
                            if (!i) {
                                d();
                            }
                            var h;
                            var u;
                            var o;
                            var f = !!navigator.webdriver;
                            try {
                                var c;
                                var a = [];
                                Object.keys(window).forEach(function (t) {
                                    if (c = new RegExp("^([\\w]+)_(Symbol|Array|Promise)", "i").exec(t)) {
                                        a.push(c[1]);
                                    }
                                });
                                if (3 <= a.length && a[0] === a[1] && a[0] === a[2]) {
                                    f = true;
                                }
                            } catch (t) {}
                            if (f) {
                                setInterval(function () {
                                    return d();
                                }, 500);
                            }
                            try {
                                l(k["default"].k(["clearLog", false, "disableMenu", false, "ondevtoolopen", function (t) {
                                    if (6 != t && 4 != t) {
                                        d(t);
                                    }
                                }]));
                            } catch (t) {}
                            if (window.location.pathname !== "/") {
                                u = "sourceVersion";
                                (o = function () {
                                    var n = document.createElement("script");
                                    n.innerHTML = "//# sourceMappingURL=/app.js.map";
                                    document.body.appendChild(n);
                                    document.body.removeChild(n);
                                })();
                                setInterval(o, 1500);
                                setTimeout(function t() {
                                    if (h = h || null != x["default"].get(u)) {
                                        x["default"].remove(u);
                                        d();
                                    } else {
                                        setTimeout(t, 1000);
                                    }
                                }, 200);
                            }
                        }
                    };
                }, i],
                6: [function (t, i, n) {
                    "use strict";
    
                    var o;
                    var e = {
                        value: true
                    };
                    Object.defineProperty(n, "t", e);
                    n["default"] = undefined;
                    try {
                        o = window.localStorage || false;
                    } catch (t) {}
                    var f = {
                        S: {},
                        getItem: function (t) {
                            return this.S[t] || null;
                        },
                        setItem: function (t, i) {
                            this.S[t] = i;
                        },
                        removeItem: function (t) {
                            delete this.S[t];
                        },
                        clear: function () {
                            this.S = {};
                        }
                    };
                    var c = o || f;
                    n["default"] = {
                        get: function (t, i, n) {
                            var s = c.getItem(t);
                            if (null === s) {
                                return i;
                            }
                            if (n) {
                                return s;
                            }
                            try {
                                return JSON.parse(s);
                            } catch (t) {
                                return i;
                            }
                        },
                        set: function (t, i) {
                            try {
                                c.setItem(t, JSON.stringify(i));
                                return true;
                            } catch (t) {
                                return false;
                            }
                        },
                        remove: function (t) {
                            return c.removeItem(t);
                        },
                        clear: function () {
                            return c.clear();
                        }
                    };
                }, {}],
                7: [function (t, i, n) {
                    "use strict";
    
                    var r = {
                        value: true
                    };
                    Object.defineProperty(n, "t", r);
                    n["default"] = undefined;
                    var h = t(1);
                    var e = window.jQuery;
                    n["default"] = {
                        T: function () {
                            var t = Math.floor(t);
                            var i = "00".concat(Math.floor(t / 3600)).slice(-2);
                            var n = "00".concat(Math.floor(t % 3600 / 60)).slice(-2);
                            var t = "00".concat(Math.floor(t % 60)).slice(-2);
                            return "".concat(i, ":").concat(n, ":").concat(t);
                        },
                        C: function () {
                            var n = new Date().getTime();
                            return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (t) {
                                var i = (n + 16 * Math.random()) % 16 | 0;
                                n = Math.floor(n / 16);
                                return ("x" === t ? i : 3 & i | 8).toString(16);
                            });
                        },
                        M: function (t, i) {
                            return e.ajax(t, this.k(i));
                        },
                        k: function (t) {
                            var i = {};
                            if (t) {
                                for (var n = 0; n < t.length; n += 2) {
                                    if (t[n + 1] instanceof Array) {
                                        i[t[n]] = this.k(t[n + 1]);
                                    } else {
                                        i[t[n]] = t[n + 1];
                                    }
                                }
                            }
                            return i;
                        },
                        j: function (t) {
                            t = encodeURIComponent("".concat(t));
                            return function (t) {
    
                                var r = "";
                                for (var h = 0; h < t.length; h++) {
                                    var s;
                                    var r;
                                    var h;
                                    var u = t.charCodeAt(h);
                                    if (h % s == 7) {
                                        u += 6;
                                    } else if (s.zRBHL(h, s) == 5) {
                                        u -= 3;
                                    } else if (h % s == 3) {
                                        u += 6;
                                    } else if (h % s == 2) {
                                        u -= 5;
                                    } else if (h % s == 6) {
                                        u += 3;
                                    } else if (h % s == 0) {
                                        u -= 2;
                                    } else if (h % s == 4) {
                                        u += 2;
                                    } else if (s.UNOSa(h, s) == 1) {
                                        u -= 4;
                                    }
                                    r += String[s.ZwZda(s.vuDQe("from", "Char"), "Code")](u);
                                }
                                return r = W(r = r.split("").reverse().join(""));
                            }(W(this.O("tGn6kIpVXBEUmqjD", t)));
                        },
                        P: function (t) {
                            0;
                            t = h.u("".concat(t).replace(/_/g, "/").replace(/-/g, "+"));
                            t = this.O("LUyDrL4qIxtIxOGs", t);
                            return decodeURIComponent(t);
                        },
                        O: function (t, i) {
                            var r;
                            var h = [];
                            var u = 0;
                            var o = "";
                            for (var e = 0; e < 256; e++) {
                                h[e] = e;
                            }
                            for (e = 0; e < 256; e++) {
                                u = (u + h[e] + t.charCodeAt(e % t.length)) % 256;
                                r = h[e];
                                h[e] = h[u];
                                h[u] = r;
                            }
                            var e = 0;
                            var u = 0;
                            for (var f = 0; f < i.length; f++) {
                                r = h[e = (e + 1) % 256];
                                h[e] = h[u = (u + h[e]) % 256];
                                h[u] = r;
                                o += String.fromCharCode(i.charCodeAt(f) ^ h[(h[e] + h[u]) % 256]);
                            }
                            return o;
                        }
                    };
                    function W(t) {
                        0;
                        return "".concat(h.i(t)).replace(/\//g, "_").replace(/\+/g, "-");
                    }
                }, n],
                8: [function (t) {
                    "use strict";
    
                    var h = t(4);
                    var u = t(5);
                    var o = t(10);
                    var e = t(14);
                    var f = t(11);
                    var c = t(13);
                    var a = t(9);
                    var v = t(16);
                    var t = t(15);
                    0;
                    u["default"]();
                    0;
                    o["default"]();
                    0;
                    f["default"]();
                    0;
                    a["default"]();
                    0;
                    c["default"]();
                    0;
                    e["default"]();
                    0;
                    v["default"]();
                    0;
                    t["default"]();
                    0;
                    h.o("[data-toggle=\"tooltip\"]").tooltip();
                    0;
                    h.o(document).activate();
                    if ("serviceWorker" in navigator) {
                        navigator.serviceWorker.register("/sw.js");
                    }
                }, s],
                9: [function (t, i, n) {
                    "use strict";
    
                    var h = {
                        value: true
                    };
                    Object.defineProperty(n, "t", h);
                    n["default"] = n.AjaxForm = undefined;
                    function e(i, n) {
                        if (i.length) {
                            try {
                                var s = i.data("recaptcha");
                                if ("undefined" == typeof s) {
                                    s = v.render(i[0], {
                                        sitekey: W,
                                        theme: i.data("theme") || "light"
                                    });
                                    i.data("recaptcha", s);
                                }
                                v.reset(s);
                            } catch (t) {
                                if (!n || n < 5) {
                                    setTimeout(function () {
                                        return e(i, (n || 0) + 1);
                                    }, 500);
                                }
                            }
                        }
                    }
                    var f = t(4);
                    var c = t(3);
                    var a = t(12);
                    var v = window.grecaptcha;
                    var W = window.recaptchaSiteKey;
                    var d = n.AjaxForm = f.FW.define("AjaxForm", {
                        h: function (t) {
                            var i = this;
                            this.I = t;
                            this.A = t.find("input,textarea");
                            this.U = t.find("button[type=\"submit\"],button.submit");
                            this.D = t.find("span.captcha");
                            this.R = t.closest(".modal");
                            this.F = t.data("broadcast");
                            this.L();
                            this.U.click(function () {
                                return i.I.submit();
                            });
                            this.I.submit(f.o.proxy(this.N, this));
                            this.V();
                        },
                        L: function () {
                            var t = this;
                            if (this.R.length) {
                                this.R.on("shown.bs.modal", function () {
                                    t.q();
                                });
                            } else {
                                this.q();
                            }
                        },
                        W: function (t) {
                            if (!(this.B || (this.B = this.I.find(".loading"), this.B.length))) {
                                0;
                                this.B = f.o("<div class=\"loading\" />").hide().appendTo(this.I);
                            }
                            this.G = false;
                            if (t) {
                                this.B.show();
                                this.U.attr("disabled", true);
                            } else {
                                this.B.hide();
                                this.U.removeAttr("disabled");
                            }
                        },
                        H: function (t) {
                            var s;
                            var r = t.result;
                            if (t.messages && t.messages.length) {
                                s = d.Y;
                                if (400 <= t.status) {
                                    s = d.K;
                                } else if ("boolean" == typeof r && r) {
                                    s = d.J;
                                }
                                this.$(t.messages, s);
                            }
                            if (200 === t.status) {
                                this.X();
                            } else if (302 === t.status || 301 === t.status) {
                                setTimeout(function () {
                                    window.location.href = t.url;
                                }, 1000);
                                this.Z();
                            } else {
                                this.tt();
                            }
                            this.q();
                        },
                        q: function () {
                            e(this.D);
                        },
                        it: function () {
                            this.I[0].reset();
                        },
                        X: function () {
                            if (this.F) {
                                a.Broadcast.nt(this.F);
                            }
                            this.et();
                        },
                        tt: function () {
                            this.rt();
                        },
                        Z: function () {
                            this.st();
                        },
                        ut: function () {
                            this.I.find(".alert").remove();
                        },
                        $: function (t, i) {
                            0;
                            var r = f.o("<div class=\"alert\" />").append("<button type=\"button\" class=\"close\" data-dismiss=\"alert\"><span>&times;</span></button>");
                            if (i === d.J) {
                                r.addClass("alert-success");
                            } else if (i === d.K) {
                                r.addClass("alert-danger");
                            } else {
                                r.addClass("alert-info");
                            }
                            for (var h = 0; h < t.length; h++) {
                                0;
                                f.o("<div />").text(t[h]).appendTo(r);
                            }
                            r.hide();
                            this.I.prepend(r);
                            r.fadeIn();
                        },
                        ot: function () {
                            for (var i = 0; i < this.A.length; i++) {
                                0;
                                var n = f.o(this.A[i]);
                                if (n.attr("required") && "" === n.val()) {
                                    return false;
                                }
                            }
                            return true;
                        },
                        ht: function () {
                            return true;
                        },
                        N: function (t) {
                            var s = this;
                            t.preventDefault();
                            if (!this.G && this.ot() && this.ht()) {
                                this.W(true);
                                this.ut();
                                0;
                                t = "multipart" === (t = c.formSerialize(this.I))[0] ? {
                                    type: "POST",
                                    data: t[1],
                                    async: true,
                                    contentType: false,
                                    processData: false
                                } : {
                                    type: this.I.attr("method") || "GET",
                                    data: t[1]
                                };
                                f.o.ajax(this.I.attr("action"), t).done(function (t) {
                                    return s.H(t);
                                }).always(function () {
                                    return s.W(false);
                                });
                            }
                        },
                        V: function () {},
                        et: function () {},
                        rt: function () {},
                        st: function () {}
                    });
                    d.K = 1;
                    d.J = 2;
                    d.Y = 3;
                    var x = f.FW.define("NormalForm", {
                        h: function (t) {
                            this.D = t.find("span.captcha");
                            e(this.D);
                        }
                    });
                    n["default"] = function () {
                        d.bind("form.ajax");
                        x.bind("form.normal");
                    };
                }, r],
                10: [function (t, i, n) {
                    "use strict";
    
                    var o = {
                        value: true
                    };
                    Object.defineProperty(n, "t", o);
                    n["default"] = undefined;
                    var e = t(4);
                    var f = t(14);
                    var c = t(7);
                    var a = t(12);
                    var v = e.FW.define("FixedHeader", {
                        h: function (t) {
                            this.ct = t;
                            this.ft = false;
                            this.lt = parseInt(t.css("margin-top"));
                            if (!(window.innerWidth <= 1024 || (0, e.o)("body").hasClass("header-nofixed"))) {
                                this.dt();
                                0;
                                e.o(window).scroll(e.o.proxy(this.dt, this));
                            }
                        },
                        dt: function () {
                            if (window.pageYOffset >= this.lt) {
                                if (!this.ft) {
                                    this.ft = true;
                                    this.ct.addClass("fixed");
                                }
                            } else if (this.ft) {
                                this.ft = false;
                                this.ct.removeClass("fixed");
                            }
                        }
                    });
                    var W = e.FW.define("Shorting", {
                        h: function (t) {
                            this.vt = t;
                            this._t = t.find(".toggle");
                            this._t.click(e.o.proxy(this.gt, this));
                        },
                        gt: function () {
                            if (this.vt.hasClass("expand")) {
                                this._t.text("[more]");
                            } else {
                                this._t.text("[less]");
                            }
                            this.vt.toggleClass("expand");
                        }
                    });
                    var d = e.FW.define("LiveText", {
                        h: function (t) {
                            this.l = t;
                            0;
                            this.yt = e.o(t.data("live-text"));
                            t.keyup(e.o.proxy(this.wt, this));
                        },
                        wt: function () {
                            this.yt.text(this.l.val());
                        }
                    });
                    var x = e.FW.define("Switch", {
                        h: function (t) {
                            this.vt = t;
                            this.bt = t.children();
                            this.xt = t.data("switch");
                            this.kt = t.data("persist");
                            this.St = t.data("input");
                            this.Tt = this.bt.filter(".active").data("value");
                            if (this.kt) {
                                this.Tt = f.Visitor.Ct(this.xt);
                                this.Mt(this.Tt);
                                a.Broadcast.jt("change:".concat(this.xt), e.o.proxy(this.Ot, this));
                            }
                            if (this.St) {
                                0;
                                this.l = e.o("<input />").attr("type", "hidden").attr("name", this.xt).attr("value", this.Tt).insertAfter(this.vt);
                            }
                            this.bt.click(e.o.proxy(this.Et, this));
                        },
                        Ot: function (t) {
                            this.Mt(t);
                        },
                        Mt: function (t) {
                            t = this.bt.filter("[data-value=\"".concat(t, "\"]"));
                            if (t.length) {
                                this.Pt(t);
                            }
                        },
                        Pt: function (t) {
                            this.bt.removeClass("active");
                            t.addClass("active");
                            if (this.St) {
                                this.l.val(t.data("value"));
                            }
                        },
                        Et: function (t) {
                            var s;
                            0;
                            var t = e.o(t.currentTarget);
                            if (t.hasClass("active")) {
                                t = (s = t.next()).length ? s : this.bt.first();
                            }
                            this.Pt(t);
                            if (this.kt) {
                                f.Visitor.It(this.xt, t.data("value"));
                            }
                        }
                    });
                    var k = e.FW.define("DynamticTitle", {
                        h: function (t) {
                            this.At = t;
                            this.At.data("en", this.At.text());
                            this.xt = "title_lang";
                            this.Ut();
                            a.Broadcast.jt("change:".concat(this.xt), e.o.proxy(this.Dt, this));
                        },
                        Ut: function () {
                            var n = f.Visitor.Ct(this.xt);
                            if (n && n.length) {
                                this.Dt(n);
                            }
                        },
                        Dt: function (t) {
                            t = this.At.data(t);
                            if (!(t && t.length)) {
                                t = this.At.data("en");
                            }
                            this.At.text(t);
                        }
                    });
                    var C = e.FW.define("Menu", {
                        h: function (t) {
                            var i = this;
                            this.Rt = t;
                            0;
                            this._t = e.o("#menu-toggler");
                            this.Ft = this.Rt.children("ul");
                            this.Lt = this.Ft.children("li");
                            this.Nt = e.o.proxy(this.Vt, this);
                            this._t.click(function () {
                                i.gt(!i._t.hasClass("active"));
                            });
                            this.Lt.click(e.o.proxy(this.qt, this));
                        },
                        qt: function (r) {
                            this.Lt.each(function (t, i) {
                                0;
                                var n = e.o(i);
                                var s = n.children("a");
                                if (i !== r.currentTarget) {
                                    n.removeClass("active");
                                } else {
                                    n.toggleClass("active");
                                    if (1 == s.css("order")) {
                                        n.children("ul").slideToggle(150);
                                    }
                                }
                            });
                        },
                        Vt: function (t) {
                            if (!e.o.contains(this.Rt[0], t.target) && this._t[0] !== t.target && this._t.hasClass("active")) {
                                this.gt(false);
                            }
                        },
                        gt: function (t) {
                            if (false === t) {
                                this.Lt.removeClass("active");
                            }
                            if (this._t.hasClass("active")) {
                                this.Ft.slideUp(150);
                                0;
                                e.o(document).off("click", this.Nt);
                            } else {
                                this.Ft.slideDown(150);
                                0;
                                e.o(document).on("click", this.Nt);
                            }
                            this._t.toggleClass("active");
                        }
                    });
                    var l = e.FW.define("DisplayModes", {
                        h: function (t) {
                            0;
                            this.yt = e.o(t.data("target"));
                            this.Wt = t.find(".mode");
                            this.xt = this.yt.attr("id");
                            this.Wt.click(e.o.proxy(this.Bt, this));
                            this.Gt(f.Visitor.Ct(this.xt));
                        },
                        Gt: function (t) {
                            t = this.Wt.filter("[data-value=\"".concat(t, "\"]"));
                            if (t.length) {
                                this.Ht(t);
                            }
                        },
                        Ht: function (t) {
                            var s = t.data("value");
                            this.Wt.removeClass("active");
                            t.addClass("active");
                            if ("mode2" === s) {
                                this.yt.removeClass("mode3").addClass("mode2");
                            } else if ("mode3" === s) {
                                this.yt.addClass("mode2 mode3");
                            } else {
                                this.yt.removeClass("mode2 mode3");
                            }
                            f.Visitor.It(this.xt, s);
                        },
                        Bt: function (t) {
                            0;
                            t = e.o(t.currentTarget);
                            this.Ht(t);
                        }
                    });
                    var y = e.FW.define("Tabs", {
                        h: function (t) {
                            var i = t.data("tabs");
                            this.zt = i ? (0, e.o)(i) : t.closest("section").find(".tab-content");
                            this.Yt = t.find(".tab");
                            this.Kt = t.data("fade");
                            this.Yt.click(e.o.proxy(this.Jt, this));
                        },
                        $t: function (t) {
                            this.Yt.removeClass("active");
                            t.addClass("active");
                            this.zt.hide();
                            var s = this.zt.filter("[data-name=\"".concat(t.data("name"), "\"]"));
                            if (this.Kt) {
                                s.fadeIn();
                            } else {
                                s.show();
                            }
                            if (s.length && !/^#/.test(t.attr("href"))) {
                                window.history.replaceState("click", "", t.attr("href"));
                            }
                        },
                        Jt: function (t) {
                            t.preventDefault();
                            0;
                            t = e.o(t.currentTarget);
                            this.$t(t);
                        }
                    });
                    var m = e.FW.define("ContentSwitch", {
                        h: function (n) {
                            var s = null;
                            n.click(function (t) {
                                t.preventDefault();
                                (s = s || n.closest(".contents").find(s.EwXpy("[", "data") + "-" + "content" + "]")).hide();
                                s.filter("[data-content=\"".concat(n.data("content-switch"), "\"]")).show();
                            });
                        }
                    });
                    var S = e.FW.define("TopSearch", {
                        h: function (t) {
                            var s = this;
                            0;
                            this._t = e.o("#search-toggler");
                            this.Xt = t;
                            this.I = this.Xt.find("form");
                            this.l = this.Xt.find("input");
                            this.Zt = this.Xt.find("button");
                            this.Qt = this.l.attr("placeholder");
                            this.ti = false;
                            this.ii = this.Xt.find(".search-popup");
                            this.ni = this.ii.find(".s-close");
                            this.ei = this.ii.find("a.more");
                            this.ri = this.ii.find(".body");
                            this.si = [];
                            this.ui = -1;
                            new e.FW.AutoComplete(this.l, function (t, i) {
                                return s.oi(t, i);
                            }, function () {
                                return s.ai();
                            });
                            this.l.focus(e.o.proxy(this.hi, this)).keydown(e.o.proxy(this.wt, this)).keyup(e.o.proxy(this.wt, this)).keypress(e.o.proxy(this.wt, this)).change(e.o.proxy(this.wt, this));
                            this.Zt.click(function () {
                                return s.I.submit();
                            });
                            this._t.click(e.o.proxy(this.ci, this));
                            this.Nt = e.o.proxy(this.Vt, this);
                            0;
                            e.o(window).keydown(e.o.proxy(this.g, this));
                            this.ni.click(e.o.proxy(this.fi, this));
                            this.I.submit(e.o.proxy(this.N, this));
                        },
                        wt: function () {},
                        oi: function (t, i) {
                            var s = this;
                            this.li();
                            c["default"].M("ajax/anime/search", ["data", ["keyword", i]]).done(function (t) {
                                s.ri.hide().html(t.result.html).slideDown().activate();
                                s.si = s.ri.find(".item");
                                if (t.result.linkMore) {
                                    s.ei.attr("href", t.result.linkMore).show();
                                }
                            });
                        },
                        N: function (t) {
                            if (-1 < this.ui) {
                                t.preventDefault();
                                0;
                                window.location.href = e.o(this.si[this.ui]).attr("href");
                            } else if ("" === e.o.trim(this.l.val())) {
                                t.preventDefault();
                                this.l.attr("placeholder", "Enter your keyword here..").focus();
                            }
                        },
                        di: function () {
                            var t = this;
                            this.ti = true;
                            this.Xt.addClass("show");
                            this.ii.hide().slideDown(150);
                            this.vi();
                            setTimeout(function () {
                                t.l.focus();
                                0;
                                e.o(window).on("click", t.Nt);
                            }, 300);
                        },
                        pi: function () {
                            this.ti = false;
                            this.Xt.removeClass("show");
                            this.ii.slideUp(150);
                            0;
                            e.o(window).off("click", this.Nt);
                            this.vi();
                            this.l.blur();
                        },
                        _i: function () {
                            if (this.ti) {
                                this.pi();
                            } else {
                                this.di();
                            }
                        },
                        vi: function () {
                            this.l.val("").attr("placeholder", this.Qt).trigger("change");
                            this.ai();
                            this.li();
                        },
                        ai: function () {
                            this.ei.attr("href", "#").hide();
                            this.ri.empty();
                        },
                        li: function () {
                            this.si = [];
                            this.ui = -1;
                        },
                        hi: function () {
                            if (!this.ti) {
                                this.di();
                            }
                        },
                        fi: function () {
                            this.vi();
                        },
                        Vt: function (t) {
                            if (this._t[0] === t.target) {
                                this._i();
                            } else if (!e.o.contains(this.Xt[0], t.target)) {
                                this.pi();
                            }
                        },
                        mi: function (t) {
                            t = this.ui + t;
                            if (!(t < -1 || t >= this.si.length)) {
                                this.si.removeClass("active");
                                if (-1 < t) {
                                    0;
                                    e.o(this.si[t]).addClass("active");
                                }
                                this.ui = t;
                            }
                        },
                        g: function (t) {
                            if ("INPUT,TEXTAREA".indexOf(t.target.tagName) < 0 && 83 === t.keyCode) {
                                this.di();
                            } else if (27 === t.keyCode) {
                                if (t.target === this.l[0]) {
                                    if ("" === e.o.trim(this.l.val())) {
                                        this.pi();
                                    } else {
                                        this.vi();
                                    }
                                }
                            } else if (this.ti) {
                                if (38 === t.keyCode) {
                                    this.mi(-1);
                                } else if (40 === t.keyCode) {
                                    this.mi(1);
                                } else if (13 === t.keyCode) {
                                    this.I.submit();
                                }
                            }
                        },
                        ci: function () {
                            this._i();
                        }
                    });
                    var L = e.FW.define("Tooltip", {
                        h: function (r) {
                            var t;
                            var i;
                            var h = false;
                            if (!(window.innerWidth < 1024)) {
                                (t = r.tooltipster({
                                    contentAsHTML: true,
                                    updateAnimation: false,
                                    arrow: false,
                                    side: ["right", "left"],
                                    interactive: true,
                                    delay: 150,
                                    minWidth: 310,
                                    maxWidth: 310,
                                    content: "Loading...",
                                    functionBefore: function (i) {
                                        var s = {
                                            dataType: "html"
                                        };
                                        if (!h) {
                                            h = true;
                                            e.o.ajax((s.EwXpy("ajax", "/") + "anime" + "/" + "tooltip" + "/").concat(r.data("tip")), s).done(function (t) {
                                                return i.content(t);
                                            });
                                        }
                                    },
                                    functionPosition: function (t, i, n) {
                                        n.coord.top -= (i.geo.origin.size.height - n.size.height) / 2;
                                        n.coord.top += 0.3 * i.geo.origin.size.height;
                                        n.side;
                                        return n;
                                    }
                                }).tooltipster("instance")).on("before", i = function () {
                                    setTimeout(function () {
                                        try {
                                            0;
                                            e.o(r.tooltipster("elementTooltip")).activate();
                                        } catch (t) {}
                                    }, 10);
                                });
                                t.on("updated", i);
                            }
                        }
                    });
                    var g = e.FW.define("TimerCountDown", {
                        h: function (t) {
                            var n = this;
                            this.At = t;
                            this.gi = t.data("target");
                            this.yi = Math.max(0, this.gi - Math.floor(new Date().getTime() / 1000));
                            this.wi = t.data("step") || 1;
                            this.bi = t.data("format");
                            this.xi = t.data("zero-pad");
                            this.ki = t.data("divider") || ("human" == this.bi ? ", " : ":");
                            this.Si = t.data("reached");
                            this.dt();
                            this.v = setInterval(function () {
                                return n.dt();
                            }, 1000 * this.wi);
                        },
                        dt: function () {
                            this.yi = Math.max(0, this.yi - this.wi);
                            var t = this.Ti();
    
                            var i = "human" === this.bi ? this.Ci(t) : this.Mi(t);
                            this.At.text(i);
                            if (!this.yi) {
                                if (this.Si) {
                                    this.At.text(this.Si);
                                }
                                clearInterval(this.v);
                            }
                        },
                        Mi: function (t) {
                            var s = [];
                            if ("day" == this.xi || t.days) {
                                s.push(this.ji(t.days));
                                s.push(this.ji(t.hours));
                            } else if (!("hour" != this.xi && !t.hours)) {
                                s.push(this.ji(t.hours));
                            }
                            s.push(this.ji(t.minutes));
                            s.push(this.ji(t.seconds));
                            return s.join(this.ki);
                        },
                        Ci: function (t) {
                            var s = [];
                            if ("day" == this.xi || t.days) {
                                s.push("".concat(t.days, " day").concat(1 < t.days ? "s" : ""));
                                s.push("".concat(t.hours, " hour").concat(s.pfLsG(1, t.hours) ? "s" : ""));
                            } else if (!("hour" != this.xi && !t.hours)) {
                                s.push("".concat(t.hours, " hour").concat(1 < t.hours ? "s" : ""));
                            }
                            s.push("".concat(t.minutes, " minute").concat(s.nEmKy(1, t.minutes) ? "s" : ""));
                            s.push("".concat(t.seconds, " second").concat(1 < t.seconds ? "s" : ""));
                            return s.join(this.ki);
                        },
                        ji: function (t) {
                            return "00".concat(t).slice(-2);
                        },
                        Ti: function () {
                            return {
                                days: Math.floor(this.yi / 86400),
                                hours: Math.floor(this.yi % 86400 / 3600),
                                minutes: Math.floor(this.yi % 3600 / 60),
                                seconds: this.yi % 60
                            };
                        }
                    });
                    var p = e.FW.define("AdsClose", {
                        h: function (t) {
                            0;
                            var n = e.o("<div class=\"remove\"></div>");
                            n.click(function () {
                                t.slideUp(function () {
                                    t.remove();
                                });
                            });
                            n.appendTo(t);
                        }
                    });
                    var P = e.FW.define("ClickCopy", {
                        h: function (t) {
                            var i = this;
                            this.Oi = t;
                            this.yt = t.data("target") ? (0, e.o)(t.data("target")) : t;
                            this.Ei = t.data("target-attr") || "value";
                            t.click(function () {
                                return i.Pi();
                            });
                        },
                        Ii: function () {
                            this.Oi.attr("data-original-title", "Copied!").tooltip("show").attr("data-original-title", "Copy");
                        },
                        Pi: function () {
                            var n = this;
                            var s = this.yt.attr(this.Ei);
                            if (!navigator.clipboard) {
                                return this.Ai(s);
                            }
                            navigator.clipboard.writeText(s).then(function () {
                                return n.Ii();
                            });
                        },
                        Ai: function (t) {
                            var i = document.createElement("textarea");
                            i.value = t;
                            i.style.top = "0";
                            i.style.left = "0";
                            i.style.position = "fixed";
                            document.body.appendChild(i);
                            i.focus();
                            i.select();
                            try {
                                document.execCommand("copy");
                                this.Ii();
                            } catch (t) {}
                            document.body.removeChild(i);
                        }
                    });
                    var B = e.FW.define("BsTooltip", {
                        h: function (t) {
                            t.tooltip();
                        }
                    });
                    n["default"] = function () {
                        p.bind("section.adx");
                        v.bind("header");
                        B.bind("[data-toggle=\"tooltip\"]");
                        L.bind("[data-tip]");
                        S.bind("#search");
                        C.bind("#menu");
                        x.bind("[data-switch]");
                        k.bind(".d-title");
                        l.bind(".display-modes");
                        y.bind(".tabs, [data-tabs]");
                        m.bind("[data-content-switch]");
                        d.bind("[data-live-text]");
                        g.bind(".count-down");
                        W.bind(".shorting");
                        P.bind(".clickcopy");
                    };
                }, h],
                11: [function (t, i, n) {
                    "use strict";
    
                    var h = {
                        value: true
                    };
                    Object.defineProperty(n, "t", h);
                    n["default"] = undefined;
                    var u = t(4);
                    var o = t(14);
                    var c = t(12);
                    var a = window.Swiper;
                    var v = u.FW.define("Hotest", {
                        h: function (t) {
                            var h = {
                                delay: 5e3,
                                disableOnInteraction: false
                            };
                            new a(t[0], {
                                autoplay: h,
                                grabCursor: true,
                                loop: true,
                                pagination: {
                                    el: ".swiper-pagination",
                                    clickable: true,
                                    renderBullet: function (t, i) {
                                        return "<span class=\"".concat(i, "\"></span>");
                                    }
                                }
                            });
                        }
                    });
                    var W = u.FW.define("Schedule", {
                        h: function (t) {
                            this.vt = t;
                            this.Ui = new Date().getTimezoneOffset() / -60;
                            this.Di();
                        },
                        Di: function () {
                            var i = this;
                            var n = {
                                "tz": this.Ui
                            };
                            var s = {
                                data: n
                            };
                            u.o.ajax(s.RjhPU("ajax/", "home") + "/" + "schedule", s).done(function (t) {
                                i.vt.html(t.result).activate();
                                i.Ri();
                                i.Fi();
                                i.Li();
                            });
                        },
                        Li: function () {
                            var t = this;
                            this.Ni = this.ri.find(".more");
                            this.Ni.click(function () {
                                t.ri.toggleClass("expand");
                            });
                        },
                        Vi: function (t) {
                            var i = this;
                            this.ri.css("opacity", 0.5);
                            u.o.ajax("ajax/home/schedule/day", {
                                data: {
                                    tz: this.Ui,
                                    time: t.data("time")
                                }
                            }).done(function (t) {
                                i.ri.html(t.result).removeAttr("style").activate();
                                i.Li();
                            });
                        },
                        Fi: function () {
                            function n() {
                                var t = new Date();
                                s.Wi.text("".concat(t.toLocaleDateString(), " ").concat(t.toLocaleTimeString()));
                            }
                            var s = this;
                            this.ri = this.vt.find(".body");
                            this.qi = this.vt.find(".items .day .inner");
                            this.Wi = this.vt.find(".timenow");
                            this.qi.click(function (t) {
                                0;
                                t = u.o(t.currentTarget);
                                s.qi.closest(".day").removeClass("active");
                                t.closest(".day").addClass("active");
                                s.Vi(t);
                            });
                            n();
                            setInterval(n, 1000);
                        },
                        Ri: function () {
                            var n = this.vt.find(".swiper-container");
                            var s = this.vt.find(".next");
                            var r = this.vt.find(".prev");
                            var h = n.find(".swiper-slide.active").index();
                            var u = {
                                nextEl: s[0],
                                prevEl: r[0]
                            };
                            var o = {
                                navigation: u,
                                slidesPerView: "auto",
                                slidesPerGroup: 2
                            };
                            new a(n[0], o).slideTo(h);
                        }
                    });
                    var d = u.FW.define("HomeContinueWatching", {
                        h: function (t) {
                            var s = this;
                            this.vt = t;
                            c.Broadcast.jt("user:loaded", function () {
                                return s.Bi();
                            });
                        },
                        Bi: function () {
                            var n = this;
                            if (o.Visitor.Gi() && o.Visitor.Ct("show_playing_in_home")) {
                                c.Broadcast.jt("playing:removed", function () {
                                    return n.Hi();
                                });
                                this.Hi();
                            }
                        },
                        Hi: function () {
                            var i = this;
                            u.o.ajax("ajax/user/playing/widget/home").done(function (t) {
                                if (200 === t.status && t.result.count) {
                                    i.vt.html(t.result.html).show().activate();
                                }
                            });
                        }
                    });
                    var x = u.FW.define("RecentUpdate", {
                        h: function (t) {
                            this.vt = t;
                            this.Yt = t.find(".text-tabs .tab");
                            this.ri = t.find(".body");
                            this.zi = 1;
                            this.Yi = t.find(".paging > span.prev");
                            this.Ki = t.find(".paging > span.next");
                            this.Yt.click(u.o.proxy(this.Jt, this));
                            this.Yi.click(u.o.proxy(this.Ji, this));
                            this.Ki.click(u.o.proxy(this.Ji, this));
                            this.Yi.tooltip();
                            this.Ki.tooltip();
                            this.$i();
                            this.Xi();
                        },
                        Ji: function (t) {
                            0;
                            t = u.o(t.currentTarget);
                            if (t.hasClass("prev")) {
                                if (1 == this.zi) {
                                    return;
                                }
                                this.zi = Math.max(1, this.zi - 1);
                            } else {
                                this.zi = Math.max(1, this.zi + 1);
                            }
                            this.$i();
                            t.tooltip("show");
                            this.Zi();
                        },
                        $i: function () {
                            this.Yi.attr("data-original-title", "Page ".concat(Math.max(1, this.zi - 1)));
                            this.Ki.attr("data-original-title", "Page ".concat(this.zi + 1));
                            if (1 == this.zi) {
                                this.Yi.addClass("disabled");
                            } else {
                                this.Yi.removeClass("disabled");
                            }
                        },
                        Xi: function () {
                            var t = u.Storage.get("home_recent_update_tab");
                            if (t && "updated-all" != t) {
                                this.$t(t);
                            }
                        },
                        Jt: function (t) {
                            0;
                            t = u.o(t.currentTarget).data("name");
                            u.Storage.set("home_recent_update_tab", t);
                            this.$t(t);
                        },
                        $t: function (t) {
                            t = this.Yt.filter("[data-name=\"".concat(t, "\"]"));
                            this.zi = 1;
                            this.Yt.removeClass("active");
                            t.addClass("active");
                            this.$i();
                            this.Zi();
                        },
                        Zi: function () {
                            var i = this;
                            var t = this.Yt.filter(".active").data("name");
                            this.ri.css("opacity", 0.5);
                            u.o.ajax("ajax/home/widget/".concat(t), {
                                data: {
                                    page: this.zi
                                }
                            }).done(function (t) {
                                if (200 === t.status) {
                                    i.ri.html(t.result).activate();
                                }
                            }).always(function () {
                                i.ri.css("opacity", 1);
                            });
                        }
                    });
                    n["default"] = function () {
                        v.bind("#hotest");
                        W.bind("#schedule-block");
                        d.bind("#continue-watching");
                        x.bind("#recent-update");
                    };
                }, u],
                12: [function (t, i, n) {
                    "use strict";
    
                    var u = {
                        value: true
                    };
                    Object.defineProperty(n, "t", u);
                    n.Toast = n.Broadcast = undefined;
                    var a = t(4);
                    n.Broadcast = {
                        Qi: {},
                        jt: function (t, i) {
                            if ("undefined" == typeof this.Qi[t]) {
                                this.Qi[t] = [];
                            }
                            this.Qi[t].push(i);
                        },
                        nt: function (t, i) {
                            var s = [].slice.call(arguments, 1);
                            if ("undefined" != typeof this.Qi[t]) {
                                this.Qi[t].forEach(function (t) {
                                    setTimeout(function () {
                                        return t.apply(null, s);
                                    }, 1);
                                });
                            }
                        }
                    };
                    var o = n.Toast = function r(h, u, o) {
                        if ("string" == typeof h) {
                            h = [h];
                        }
                        if (!r.vt) {
                            0;
                            r.vt = a.o("<div id=\"toast\" />").appendTo(document.body);
                        }
                        for (var f = 0; f < h.length; f++) {
                            !function () {
                                0;
                                var n = a.o(h.wDNzy("<div class=\"alert\"", " ") + "/" + ">");
                                0;
                                var s = a.o(h.wDNzy("<span class=\"", "mx") + "-" + "2" + "\"" + " " + "/" + ">").text(h[f]);
                                if (u === r.J) {
                                    n.addClass("alert-success").append(h.wELkK("<i class=\"fa-solid fa-circle-check\"", ">") + "<" + "/" + "i" + ">");
                                } else if (u === r.K) {
                                    n.addClass("alert-danger").append("<i class=\"fa-solid fa-circle-exclamation\"></i>");
                                } else {
                                    n.addClass("alert-info").append(h.wDNzy(h.wDNzy("<i class=\"fa-solid fa-circle", "-") + "info" + "\"" + ">" + "<" + "/", "i") + ">");
                                }
                                n.append(s);
                                n.append(h.wELkK(h.CuAGf(h.LwBuG(h.mlRij(h.wDNzy("<button ", "type"), "=") + "\"" + "button" + "\"", " ") + "class" + "=" + "\"" + "close" + "\"", " ") + "data" + "-" + "dismiss" + "=", "\"") + "alert" + "\"" + ">" + "<" + "span" + ">" + "&" + "times" + ";" + "<" + "/" + "span" + ">" + "<" + "/" + "button" + ">");
                                n.hide();
                                n[h.YZAWC("fade", "In")]("fast");
                                setTimeout(function () {
                                    return n.fadeOut(function () {
                                        return n.remove();
                                    });
                                }, o || 3000);
                                r.vt.append(n);
                            }();
                        }
                    };
                    o.H = function (t) {
                        var i = t.result;
                        var n = o.Y;
                        if (t.messages && t.messages.length) {
                            if (400 <= t.status) {
                                n = o.K;
                            } else if ("boolean" == typeof i && i) {
                                n = o.J;
                            }
                            o(t.messages, n);
                        }
                    };
                    o.Y = 1;
                    o.J = 2;
                    o.K = 3;
                }, o],
                13: [function (t, i, n) {
                    "use strict";
    
                    var s = {
                        value: true
                    };
                    Object.defineProperty(n, "t", s);
                    n["default"] = undefined;
                    var u = t(4);
                    var o = t(12);
                    var e = u.FW.define("ListFilter", {
                        h: function (t) {
                            var s = this;
                            this.tn = t.find(".dropdown-menu .genres input");
                            this.nn = t.find("[name=\"keyword\"]");
                            0;
                            this.en = u.o("#exclude_watchlist");
                            o.Broadcast.jt("user:loaded", function (t) {
                                return s.Bi(t);
                            });
                            this.tn.click(function (t) {
                                return s.rn(t);
                            });
                            this.tn.each(function (t, i) {
                                0;
                                i = u.o(i);
                                if ("-" === "".concat(i.val())[0]) {
                                    i.addClass("exclude");
                                }
                            });
                        },
                        rn: function (t) {
                            0;
                            var n = u.o(t.currentTarget);
                            var s = "".concat(n.val());
                            var r = s.replace(/^-/, "");
                            if (!!n.is(":checked") || "-" === s[0]) {
                                n.removeClass("exclude").val(r);
                            } else {
                                t.preventDefault();
                                n.addClass("exclude").val("-".concat(r));
                            }
                        },
                        Bi: function (t) {
                            if (0 < t.sn) {
                                this.en.val(t.sn).closest("li").show();
                            }
                        }
                    });
                    n["default"] = function () {
                        e.bind("form.filters");
                    };
                }, e],
                14: [function (t, i, n) {
                    "use strict";
    
                    var s = {
                        value: true
                    };
                    Object.defineProperty(n, "t", s);
                    n["default"] = n.Visitor = undefined;
                    var f = t(4);
                    var r = t(9);
                    var c = t(12);
                    var a = t(7);
                    function h(t) {
                        return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                            return typeof t;
                        } : function (t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                        })(t);
                    }
                    var k = n.Visitor = {
                        sn: 0,
                        un: {},
                        on: null,
                        an: ["show_playing_in_home", "title_lang", "auto_next", "auto_play", "auto_load_comment", "skip_seconds", "auto_skip_intro", "prefered_source_type", "episode_list_style"],
                        hn: null,
                        cn: function (t) {
                            f.Storage.set("user.settings", this.un);
                            this.sn = t.id;
                            this.fn(t.folders);
                            this.ln(t.settings);
                            this.dn();
                            c.Broadcast.nt("user:loaded", this);
                        },
                        vi: function () {
                            this.sn = 0;
                        },
                        Gi: function () {
                            return 0 < this.sn;
                        },
                        vn: function () {
                            return !this.Gi() && ((0, c.Toast)("Please login to use this feature.", c.Toast.K), true);
                        },
                        H: function (t) {
                            this.sn = t.result.user.id;
                            this.pn.html(t.result.html).activate();
                            f.Storage.set("user.settings", this.un);
                            this.fn(t.result.user.folders);
                            this.ln(t.result.user.settings);
                            this.dn();
                        },
                        dn: function () {
                            if (this.Gi()) {
                                this._s();
                            }
                        },
                        ln: function (t) {
                            var s = Object.keys(t);
                            for (var r = 0; r < s.length; r++) {
                                var h = s[r];
                                var u = t[h];
                                if (this.Ct(h) !== u) {
                                    c.Broadcast.nt("change:".concat(h), u);
                                }
                                this.un[h] = u;
                                f.Storage.set(h, u);
                            }
                        },
                        mn: function () {
                            return f.Storage.get("user.folders", []);
                        },
                        fn: function (t) {
                            f.Storage.set("user.folders", t);
                        },
                        Ct: function (t) {
                            return "undefined" != typeof this.un[t] ? this.un[t] : f.Storage.get(t);
                        },
                        It: function (t, i) {
                            var s = this;
                            if (!(i === this.Ct(t) || (f.Storage.set(t, i), c.Broadcast.nt("change:".concat(t), i), this.an.indexOf(t) < 0))) {
                                this.un[t] = i;
                                if (this.Gi()) {
                                    if (this.on) {
                                        clearTimeout(this.on);
                                    }
                                    this.on = setTimeout(function () {
                                        return s.gn();
                                    }, 500);
                                }
                            }
                        },
                        gn: function () {
                            a["default"].M("ajax/user/update", ["type", "POST", "data", ["settings", this.un]]).done(function () {});
                        },
                        yn: function () {
                            var t = f.Storage.get("user.playing");
                            return t = (t = "object" !== h(t) ? null : t) && !Object.keys(t).length ? null : t;
                        },
                        wn: function (t, i, n, s) {
                            var h = this;
                            var u = this.yn() || {};
                            u[t] = [i, n, s];
                            f.Storage.set("user.playing", u);
                            if (this.Gi()) {
                                if (this.hn) {
                                    clearTimeout(this.hn);
                                }
                                this.hn = setTimeout(function () {
                                    return h._s();
                                }, 5000);
                            }
                        },
                        _s: function () {
                            var i = this.yn();
                            if (i) {
                                a["default"].M("ajax/user/playing/save", ["type", "POST", "data", ["playing", i]]).done(function () {
                                    f.Storage.remove("user.playing");
                                });
                            }
                        },
                        bn: function (t, i) {
                            if (0 < this.sn) {
                                a["default"].M("ajax/user/playing/get/".concat(t)).done(function (t) {
                                    if (200 === t.status) {
                                        i(t.result);
                                    }
                                });
                            }
                        },
                        xn: function () {
                            var t = f.Storage.get("user.lastwatched", []);
                            return t = f.o.isArray(t) ? t : [];
                        },
                        kn: function (t) {
                            var i = this.xn();
                            if (!(-1 < i.indexOf(t))) {
                                i.push(t);
                                f.Storage.set("user.lastwatched", i.slice(0, 3).sort());
                            }
                        }
                    };
                    var C = f.FW.define("UserPanel", {
                        h: function (t) {
                            var s = this;
                            this.pn = t;
                            this.Sn();
                            c.Broadcast.jt("user:updated", function () {
                                return s.Sn();
                            });
                            0;
                            f.o(window).on("beforeunload", function () {
                                return k.dn();
                            });
                        },
                        Sn: function () {
                            var n = this;
                            k.vi();
                            a["default"].M("ajax/user/panel").done(function (t) {
                                n.pn.html(t.result.html);
                                k.cn(t.result.user);
                            });
                        }
                    });
                    var l = f.FW.define("UserPlayingRemove", {
                        h: function (h) {
                            h.click(function () {
                                a["default"].M("ajax/user/playing/delete", ["type", "POST", "data", ["id", h.data("id")]]).done(function (t) {
                                    c.Toast.H(t);
                                    if (t.result) {
                                        c.Broadcast.nt("playing:removed");
                                        h.closest(".item").fadeOut();
                                    }
                                });
                            });
                        }
                    });
                    var y = f.FW.define("UserPlayingClear", {
                        h: function (t) {
                            t.click(function () {
                                var t = 100 * Math.random();
                                a["default"].M("ajax/user/playing/clear", ["type", "POST", "data", ["req_id", t, "vrf", a["default"].j(t)]]).done(function (t) {
                                    c.Toast.H(t);
                                    if (200 === t.status) {
                                        setTimeout(function () {
                                            return window.location.reload();
                                        }, 2000);
                                    }
                                });
                            });
                        }
                    });
                    var m = f.FW.define("UserFavourite", {
                        h: function (t) {
                            var s = this;
                            this.Tn = t;
                            this.Cn = t.data("id");
                            this.Mn = false;
                            this.jn = t.data("fetch");
                            this.On = t.find("[data-toggle=\"dropdown\"]");
                            this.En = t.data("folder");
                            this.Rt = t.find(".dropdown-menu");
                            this.Pn = t.find(".folders");
                            this.In = t.find(".folder-name");
                            if (this.jn) {
                                c.Broadcast.jt("user:loaded", function () {
                                    return s.An();
                                });
                            }
                            this.Tn.mouseenter(f.o.proxy(this.Un, this));
                            this.Tn.click(f.o.proxy(this.Dn, this));
                            this.Rt.on("click", ".dropdown-item", f.o.proxy(this.Rn, this));
                        },
                        An: function () {
                            var i = this;
                            if (k.Gi()) {
                                this.Tn.hide();
                                a["default"].M("ajax/user/favourite/get/".concat(this.Cn)).done(function (t) {
                                    if (200 === t.status) {
                                        i.En = t.result;
                                        i.Fn();
                                        i.Tn.show();
                                    }
                                });
                            } else {
                                this.Fn();
                            }
                        },
                        Dn: function (t) {
                            if (k.vn()) {
                                t.stopPropagation();
                            }
                        },
                        Rn: function (t) {
                            0;
                            t = f.o(t.currentTarget).data("id");
                            this.En = t;
                            this.Fn();
                            a["default"].M("ajax/user/favourite/save", ["type", "POST", "data", ["id", this.Cn, "folder", t]]).done(function (t) {
                                c.Toast.H(t);
                            });
                        },
                        Fn: function () {
                            this.Pn.empty();
                            var i = k.mn();
                            if (this.On.data("add") && this.On.data("edit")) {
                                this.On.html(this.On.data(this.En ? "edit" : "add"));
                            }
                            if (this.En) {
                                i.push({
                                    id: 0,
                                    name: "<i class=\"fa-solid fa-circle-minus text-danger\"></i> Remove",
                                    html: true
                                });
                            }
                            for (var n = 0; n < i.length; n++) {
                                0;
                                var s = f.o("<a class=\"dropdown-item\" />").attr("data-id", i[n].id);
                                if (i[n].html) {
                                    s.html(i[n].name);
                                } else {
                                    s.text(i[n].name);
                                }
                                if (this.En == i[n].id) {
                                    s.addClass("active");
                                    this.In.text(i[n].name);
                                }
                                this.Pn.append(s);
                            }
                        },
                        Un: function () {
                            if (!this.Mn) {
                                this.Mn = true;
                                this.Fn();
                            }
                        }
                    });
                    var S = f.FW.define("UserWatchStatus", {
                        h: function (t) {
                            this.Ln = t;
                            this.Cn = t.data("id");
                            this.Ln.click(f.o.proxy(this.Nn, this));
                        },
                        Nn: function () {
                            var i;
                            var n = this;
                            if (!this.Vn) {
                                this.Vn = true;
                                i = this.Ln.hasClass("unwatched") ? 0 : 1;
                                f.o.ajax("ajax/user/favourite/status", {
                                    type: "POST",
                                    data: {
                                        id: this.Cn,
                                        unwatched: i
                                    }
                                }).done(function (t) {
                                    if (200 === t.status) {
                                        n.Ln.toggleClass("unwatched");
                                    }
                                }).always(function () {
                                    n.Vn = false;
                                    if (n.Ln.hasClass("unwatched")) {
                                        n.Ln.attr("data-original-title", "Unwatched");
                                    } else {
                                        n.Ln.attr("data-original-title", "Watched");
                                    }
                                    n.Ln.tooltip("show");
                                    setTimeout(function () {
                                        return n.Ln.tooltip("hide");
                                    }, 2000);
                                });
                            }
                        }
                    });
                    var L = f.FW.define("UserMangeFolders", {
                        h: function (t) {
                            this.vt = t;
                            0;
                            this.qn = f.o("#folder-edit").html().trim();
                            0;
                            this.Wn = f.o("#folder-item").html().trim();
                            this.Bn();
                            this.vt.delegate(".action", "click", f.o.proxy(this.Gn, this));
                            this.Hn();
                        },
                        Bn: function () {
                            this.Pn = this.vt.find(".folder");
                            this.Pn.each(function (t, i) {
                                0;
                                i = f.o(i);
                                i.data("origHtml", i.html());
                            });
                        },
                        Hn: function () {
                            var r = this.vt.find(".dropdown-menu");
                            Sortable.create(r[0], {
                                onUpdate: function () {
                                    var s = {};
                                    r.find(".folder[data-id]").each(function (t, i) {
                                        0;
                                        s[f.o(i).data("id")] = t;
                                    });
                                    f.o.ajax("ajax/user/folder/sort", {
                                        method: "POST",
                                        data: {
                                            orders: s
                                        }
                                    });
                                }
                            });
                        },
                        Gn: function (t) {
                            t.stopPropagation();
                            0;
                            var t = f.o(t.currentTarget);
                            var n = t.closest(".folder");
                            if (t.hasClass("add") || t.hasClass("edit")) {
                                this.zn(n);
                            } else if (t.hasClass("delete")) {
                                this.Yn(n);
                            }
                        },
                        Kn: function (t) {
                            t.html(t.data("origHtml"));
                        },
                        Yn: function (t) {
                            var i = this;
                            var t = t.data("id");
                            a["default"].M("ajax/user/folder/delete", ["type", "POST", "data", ["id", t]]).done(function (t) {
                                c.Toast.H(t);
                            }).always(function () {
                                i.Jn();
                            });
                        },
                        Jn: function () {
                            var h = this;
                            a["default"].M("ajax/user/folder/list").done(function (t) {
                                k.fn(t.result);
                                var i = t.result;
                                h.vt.find("li.folder-item").remove();
                                var n = "";
                                for (var s = 0; i.giSjb(s, i.length); s++) {
                                    if (!i[s]["default"]) {
                                        n += h.Wn.replace(/@id/g, i[s].id).replace(/@name/g, i[s].name);
                                    }
                                }
                                h.vt.find("ul").prepend(n);
                                h.Bn();
                            });
                        },
                        $n: function (t) {
                            var n = this;
                            var s = t.data("id");
                            var r = t.find("input").val();
                            a["default"].M("ajax/user/folder/save", ["type", "POST", "data", ["id", s || 0, "name", r]]).done(function (t) {
                                n.Jn();
                                c.Toast.H(t);
                            }).always(function () {
                                n.Kn(t);
                            });
                        },
                        zn: function (i) {
                            var n = this;
                            0;
                            var t = f.o(this.qn);
                            var s = i.find(".name");
                            i.empty().append(t);
                            var t = i.find("input");
                            var r = i.find(".save");
                            var h = i.find(".cancel");
                            t.focus();
                            if (s.length) {
                                t.val(s.text());
                            }
                            h.click(function (t) {
                                t.preventDefault();
                                n.Kn(i);
                            });
                            r.click(function (t) {
                                t.preventDefault();
                                n.$n(i);
                            });
                            t.keydown(function (t) {
                                if (13 == t.keyCode) {
                                    n.$n(i);
                                } else if (27 == t.keyCode) {
                                    n.Kn(i);
                                }
                            });
                        }
                    });
                    var g = f.FW.define("SignForm", r.AjaxForm.prototype, {
                        et: function () {
                            var n = this;
                            setTimeout(function () {
                                n.it();
                                0;
                                f.o("#sign").modal("hide");
                                c.Broadcast.nt("user:updated");
                            }, 1000);
                        }
                    });
                    var p = f.FW.define("UserEditAvatar", {
                        h: function (t) {
                            0;
                            this.Xn = f.o(".avatar-placeholder");
                            this.Cn = this.Xn.data("id");
                            this.Zn = null;
                            this.Qn = t.find(".avatar.items .item span");
                            this.Xn.data("orig", this.Xn.attr("src"));
                            this.Qn.click(f.o.proxy(this.te, this));
                            t.on("shown.bs.modal", f.o.proxy(this.ie, this));
                            t.on("hide.bs.modal", f.o.proxy(this.ne, this));
                        },
                        ie: function () {
                            this.Qn.filter("[data-id=\"".concat(this.Xn.first().data("id"), "\"]")).addClass("active");
                        },
                        ne: function () {
                            var s = this;
                            if (this.Zn && this.Zn != this.Cn) {
                                a["default"].M("ajax/user/update", ["type", "POST", "data", ["avatar_id", this.Zn]]).done(function (t) {
                                    c.Toast.H(t);
                                    s.Cn = s.Zn;
                                });
                            }
                        },
                        te: function (t) {
                            0;
                            t = f.o(t.currentTarget);
                            this.Qn.removeClass("active");
                            t.addClass("active");
                            this.Xn.attr("src", t.find("img").attr("src"));
                            this.Zn = t.data("id");
                        }
                    });
                    var P = f.FW.define("UserNotification", {
                        h: function (t) {
                            this.ee = t.find(".items-wrap");
                            this.re = t.find(".count");
                            this.si = t.find("a.item");
                            this.se = t.find(".mark-as-read");
                            this.se.click(f.o.proxy(this.ue, this));
                        },
                        ue: function () {
                            var s = this;
                            var r = [];
                            this.si.filter(":not(.old)").each(function (t, i) {
                                0;
                                r.push(f.o(i).data("id"));
                            });
                            if (r.length) {
                                f.o.ajax("ajax/user/notification/update", {
                                    type: "POST",
                                    data: {
                                        action: "mark_as_read",
                                        ids: r
                                    }
                                }).done(function (t) {
                                    if (200 === t.status) {
                                        c.Toast.H(t);
                                        s.si.addClass("old");
                                    }
                                }).always(function () {
                                    return s.oe();
                                });
                            }
                        },
                        oe: function () {
                            var i = this;
                            if (this.ee.length) {
                                f.o.ajax("ajax/user/notification/panel").done(function (t) {
                                    if (200 === t.status) {
                                        i.ee.html(t.result.html);
                                        i.re.text(t.result.count);
                                        i.si = i.ee.find("a.item");
                                    }
                                });
                            }
                        }
                    });
                    n["default"] = function () {
                        C.bind("#user");
                        m.bind(".favourite[data-id]");
                        l.bind(".playing-remove");
                        y.bind(".playing-clear");
                        L.bind(".manage-folders");
                        g.bind("form.ajax-login, form.ajax-register");
                        p.bind("#avatar-browser");
                        P.bind(".user-notification");
                        S.bind(".watch-status");
                    };
                }, f],
                15: [function (t, i, n) {
                    "use strict";
    
                    var s = {
                        value: true
                    };
                    Object.defineProperty(n, "t", s);
                    n["default"] = undefined;
                    var a = t(4);
                    var r = t(14);
                    var u = t(12);
                    var o = t(7);
                    var v = window.jwplayer;
                    var W = a.FW.define("RoomCreate", {
                        h: function () {
                            0;
                            var s = a.o(".start-date");
                            0;
                            a.o("input[name=\"start_date_timezone\"").val(new Date().getTimezoneOffset() / -60);
                            var r = new Date();
                            s.datetimepicker({
                                format: "Y/m/d H:i",
                                step: 5,
                                minDate: r,
                                maxDate: new Date(new Date().getTime() + 86400000 * s.data("max-days")),
                                yearStart: r.getFullYear(),
                                yearEnd: r.getFullYear() + 1,
                                monthStart: r.getMonth(),
                                monthEnd: r.getMonth() + 1
                            });
                        }
                    });
                    var z = a.FW.define("RoomControl", {
                        h: function (t, i) {
                            this.vt = t;
                            this.ae = i;
                            this.he = t.data("anime-id");
                            this.ce = t.data("ep-type");
                            this.fe = t.data("ep-num");
                            0;
                            this.R = a.o("#w2g-episodes");
                            0;
                            this.le = a.o("#w2g-episodes .head input");
                            0;
                            this.de = a.o("#w2g-episodes .body");
                            this.ve = null;
                            this.pe = t.find("#start-room");
                            this._n = t.find("#end-room");
                            this.Yi = t.find(".ctrl.prev");
                            this.Ki = t.find(".ctrl.next");
                            this.pe.click(a.o.proxy(this.me, this));
                            this._n.click(a.o.proxy(this.ge, this));
                            this.le.keyup(a.o.proxy(this.ye, this));
                            this.Yi.click(a.o.proxy(this.we, this));
                            this.Ki.click(a.o.proxy(this.be, this));
                            this.xe();
                        },
                        ye: function (t) {
                            var h = this;
                            var u = t.keyCode;
                            var o = this.le.val().replace(/[^\d]/g, "");
                            if (this.ve) {
                                if (this.ke) {
                                    clearTimeout(this.ke);
                                }
                                this.ke = setTimeout(function () {
                                    for (var i = 0; i.LJqSl(i, h.ve.length); i++) {
                                        0;
                                        var n = a.o(h.ve[i]);
                                        if (n.data("num") == o) {
                                            n.addClass("highlight");
                                            h.Se(n);
                                            if (13 == u) {
                                                h.Te(n);
                                            }
                                        } else {
                                            n.removeClass("highlight");
                                        }
                                    }
                                }, 300);
                            }
                        },
                        me: function () {
                            this.ae.Ce();
                        },
                        ge: function () {
                            if (window.confirm("Please confirm to end your room!")) {
                                this.ae.Me();
                            }
                        },
                        we: function () {
                            this.je(-1);
                        },
                        be: function () {
                            this.je(1);
                        },
                        Oe: function (t) {
                            t.preventDefault();
                            0;
                            t = a.o(t.currentTarget);
                            this.Te(t);
                        },
                        Ee: function (t) {
                            this.de.html(t);
                            this.ve = this.de.find("a");
                            this.ve.click(a.o.proxy(this.Oe, this));
                            this.Pe();
                        },
                        Pe: function () {
                            var t = this.ve.filter("[data-num=".concat(this.fe, "]"));
                            this.Ie(t);
                        },
                        Ie: function (t) {
                            if (!t.hasClass("active")) {
                                this.ve.removeClass("active");
                                t.addClass("active");
                            }
                        },
                        Ae: function () {
                            return this.ve.filter(".active");
                        },
                        je: function (t) {
                            this.Ae();
                            var s = this.ve.index(s) + t;
                            if (s < 0) {
                                0;
                                u.Toast("You are playing the first episode.", u.Toast.K);
                            } else if (s >= this.ve.length) {
                                0;
                                u.Toast("You are playing the last episode.", u.Toast.K);
                            } else {
                                this.Te(this.ve.eq(s));
                            }
                        },
                        Te: function (t) {
                            var n = this;
                            if (this.Ue) {
                                0;
                                u.Toast("Please wait for episode loading.", u.Toast.K);
                            } else {
                                this.Ue = true;
                                0;
                                u.Toast("Start loading episode ".concat(t.data("num"), "."), u.Toast.Y);
                                this.Ie(t);
                                this.R.modal("hide");
                                this.ae.Te(t, function () {
                                    n.Ue = false;
                                });
                            }
                        },
                        Se: function (t) {
                            var s = t.closest(".episodes");
                            var t = t.offset().top + s.scrollTop() - s.offset().top - 10;
                            var r = {
                                scrollTop: t,
                                duration: 150
                            };
                            s.animate(r);
                        },
                        xe: function () {
                            var i = this;
                            a.o.ajax("ajax/watch2gether/room/episodes/".concat(this.he, "/").concat(this.ce)).done(function (t) {
                                i.Ee(t.result);
                            });
                        }
                    });
                    var O = a.FW.define("RoomManager", {
                        h: function (t) {
                            var s = this;
                            this.vt = t;
                            this.De = t.data("id");
                            this.Re = t.data("mode");
                            this.Fe = t.data("owner-id");
                            this.Le = t.data("started");
                            this.Ne = t.data("ended");
                            this.Ve = t.data("start-at");
                            this.qe = t.data("user");
                            0;
                            this.We = a.o(".viewer-count");
                            this.Be = t.find(".player");
                            this.Ge = false;
                            this.He = t.data("now");
                            this.ze;
                            this.Ye = new z(t, this);
                            this.Ke = t.find(".current-episode-name");
                            this.Je = t.find("#chat-input");
                            this.$e = t.find("#chat-send");
                            this.Xe = t.find(".messages .scroll");
                            this.Ze = t.find(".load-more");
                            this.Qe = 0;
                            this.tr();
                            this.ir();
                            this.nr();
                            this.er();
                            this.$e.click(a.o.proxy(this.rr, this));
                            this.Je.keypress(a.o.proxy(this.sr, this));
                            this.Ze.click(a.o.proxy(this.nr, this));
                            this.He++;
                            setInterval(function () {
                                return s.He++;
                            }, 1000);
                        },
                        Te: function (n, t) {
                            var s = this;
                            if (!this.Ne && "manual" == this.Re && this.ur()) {
                                o["default"].M("ajax/watch2gether/room/change", ["type", "POST", "data", ["id", this.De, "episode", n.data("id")]]).done(function (t) {
                                    if (200 !== t.status) {
                                        u.Toast.H(t);
                                    } else {
                                        s.F(10, {
                                            media: t.result,
                                            episode: n.data("num")
                                        });
                                    }
                                }).always(function () {
                                    if (t) {
                                        t();
                                    }
                                });
                            }
                        },
                        ur: function () {
                            return this.Fe == this.qe.id;
                        },
                        ar: function () {
                            return "manual" === this.Re;
                        },
                        er: function () {
                            var t;
                            var i;
                            var n;
                            var s = this;
                            if (!this.Ne) {
                                if (this.Le) {
                                    this.hr();
                                } else if (this.Ve) {
                                    t = 600 < this.Ve - this.He;
                                    (n = function () {
                                        if (s.He >= s.Ve) {
                                            s.Ce(true);
                                            clearInterval(i);
                                            if (t) {
                                                window.location.reload();
                                            } else {
                                                s.hr();
                                            }
                                        }
                                    })();
                                    i = setInterval(n, 1000);
                                }
                            }
                        },
                        hr: function (t) {
                            var h = this;
                            if (!this.Ne) {
                                o["default"].M(atob(t || this.vt.data("media"))).done(function (t) {
                                    if (200 === t.status) {
                                        h.cr = t.result;
                                        h.lr();
                                    } else {
                                        0;
                                        u.Toast("Video is not available, please try again.", u.Toast.K);
                                    }
                                }).fail(function () {
                                    0;
                                    u.Toast("Unable to get video info, please try again.", u.Toast.K);
                                });
                            }
                        },
                        lr: function () {
                            var i;
                            var n;
                            var u;
                            var o = this;
                            if (!(this.Ge || !this.cr || (this.Ge = true, this.Be.empty(), this.dr = (0, a.o)("<div />").attr("id", "player").appendTo(this.Be), this.ze = v(this.dr[0]).setup({
                                sources: this.cr.sources,
                                width: "100%",
                                height: "100%",
                                primary: "html5",
                                hlshtml: true,
                                preload: "auto",
                                autostart: true,
                                key: "",
                                playbackRateControls: false
                            }).on("ready", function () {
                                document.querySelectorAll(".jwplayer").forEach(function (t) {
                                    t.addEventListener("keydown", function (t) {
                                        return t["stopImmediate".Onpah("stopImmediate", "Propagation")]();
                                    }, true);
                                });
                            }), this.ar() ? this.ur() ? this.ze.on("seek", function (t) {
                                var s = {
                                    position: t.offset
                                };
                                o.F(6, s);
                            }).on("play", function () {
                                o.F(6, {
                                    position: o.ze.getPosition()
                                });
                                o.F(8);
                            }).on("pause", function () {
                                o.F(7);
                                o.F(6, {
                                    position: o.ze.getPosition()
                                });
                            }) : this.ze.once("play", function () {
                                setTimeout(function () {
                                    return o.vr();
                                }, 1000);
                                setTimeout(function () {
                                    return o.vr();
                                }, 3000);
                            }).on("bufferFull", function () {
                                o.vr();
                            }).on("pause", function () {
                                o.vr();
                            }).on("play", function () {
                                o.vr();
                            }) : (this.Ve || (this.Ve = this.He), i = true, this.ze.on("play", function () {
                                if (i) {
                                    o.ze.seek(Math.max(0, o.He - o.Ve));
                                    i = false;
                                }
                            }).on("pause", function () {
                                i = true;
                            }).on("complete", function () {
                                o.pr();
                            })), this.ar() && this.ur()))) {
                                n = 0;
                                u = setInterval(function () {
                                    o.Be.find(".jw-slider-time, .jw-icon-rewind, .jw-icon-pip").remove();
                                    if (3000 <= (n += 150)) {
                                        clearInterval(u);
                                    }
                                }, 100);
                            }
                        },
                        vr: function () {
                            if (!this._e) {
                                this._e = 1;
                            }
                            if (this._e + 3 < this.He) {
                                this._e = this.He;
                                this.F(9, {
                                    user: this.qe
                                });
                            }
                        },
                        mr: function (t) {
                            if (this.ur() && this.ze) {
                                if (t) {
                                    this.F(6, {
                                        position: this.ze.getPosition(),
                                        toUser: t.id
                                    });
                                } else {
                                    this.F(6, {
                                        position: this.ze.getPosition()
                                    });
                                }
                                if ("paused" === this.ze.getState()) {
                                    this.F(7);
                                } else {
                                    this.F(8);
                                }
                            }
                        },
                        gr: function (t, i) {
                            if (this.ze && !this.ur()) {
                                this._e = this.He;
                                switch (t) {
                                    case 8:
                                        if ("paused" === this.ze.getState()) {
                                            this.ze.play();
                                        }
                                        break;
                                    case 7:
                                        if ("paused" !== this.ze.getState()) {
                                            this.ze.pause();
                                        }
                                        break;
                                    case 6:
                                        if (!(i.data.toUser && i.data.toUser != this.qe.id)) {
                                            this.ze.seek(Math.max(0, i.data.position - 0.1));
                                        }
                                }
                            }
                        },
                        tr: function () {
                            var t = new WebSocket("wss://ws.9ani.online");
                            t.onopen = a.o.proxy(this.yr, this);
                            t.onmessage = a.o.proxy(this.wr, this);
                            t.onclose = a.o.proxy(this.br, this);
                            t.onerror = a.o.proxy(this.kr, this);
                            this.Sr = t;
                        },
                        yr: function () {
                            this.Qe = 0;
                            this.Tr(1, {
                                room_id: this.De,
                                user: this.qe
                            });
                        },
                        wr: function (t) {
                            try {
                                var s = JSON.parse(t.data);
                                switch (s.cmd) {
                                    case 4:
                                        this.We.text(s.data.total);
                                        this.Cr("user_connected", s.data.user);
                                        this.He = s.data.time;
                                        this.mr(s.data.user);
                                        break;
                                    case 5:
                                        this.We.text(s.data.total);
                                        this.Cr("user_disconnected", s.data.user);
                                        break;
                                    case 9:
                                        this.mr(s.data.user);
                                        break;
                                    case 2:
                                        this.hr();
                                        this.Cr("room_started");
                                        break;
                                    case 3:
                                        this.pr();
                                        break;
                                    case 10:
                                        this.Ge = false;
                                        this.hr(s.data.media);
                                        this.Ke.text(s.data.episode);
                                        break;
                                    case 8:
                                    case 7:
                                    case 6:
                                        this.gr(s.cmd, s);
                                        break;
                                    case 1:
                                        this.Cr("chat", s.data);
                                }
                            } catch (t) {}
                        },
                        br: function () {
                            if (++this.Qe < 3) {
                                this.tr();
                            } else {
                                0;
                                u.Toast("Server connection closed.", u.Toast.K);
                            }
                        },
                        kr: function () {},
                        F: function (t, i) {
                            return this.Tr(2, this.Mr(t, i));
                        },
                        Tr: function (t, i) {
                            return 1 === this.Sr.readyState && (this.Sr.send(JSON.stringify(this.Mr(t, i))), true);
                        },
                        Mr: function (t, i) {
                            var s = {
                                "cmd": t,
                                data: i
                            };
                            return s;
                        },
                        Cr: function (t, i, n) {
                            switch (t) {
                                case "chat":
                                    0;
                                    var h = a.o("<div />").addClass("message");
                                    0;
                                    0;
                                    var u = a.o("<div />").addClass("avatar").append(a.o("<img />").attr("src", i.user.avatar_url));
                                    0;
                                    0;
                                    0;
                                    var o = a.o("<div />").addClass("msg-body").append(a.o("<div />").addClass("text").text(i.content)).append(a.o("<div />").addClass("user").text(i.user.name));
                                    if (i.user.id == this.qe.id) {
                                        h.addClass("self");
                                    } else if (this.Fe === i.user.id) {
                                        h.addClass("owner");
                                    }
                                    h.append(u).append(o);
                                    if (n) {
                                        this.Ze.after(h);
                                    } else {
                                        this.Xe.append(h);
                                        this.Xe.animate({
                                            scrollTop: this.Xe[0].scrollHeight
                                        });
                                    }
                                    break;
                                case "user_connected":
                                    0;
                                    a.o("<div />").addClass("event").text("".concat(i.name || "a viewer", " has joined")).appendTo(this.Xe);
                                    break;
                                case "user_disconnected":
                                    0;
                                    a.o("<div />").addClass("event").text("".concat(i.name || "a viewer", " has left")).appendTo(this.Xe);
                                    break;
                                case "room_started":
                                    0;
                                    a.o("<div />").addClass("event started").text("This show has been started, hope you enjoy it").appendTo(this.Xe);
                            }
                        },
                        Ce: function (i) {
                            var n = this;
                            o["default"].M("ajax/watch2gether/room/start", ["type", "POST", "data", ["id", this.De, "vrf", o["default"].j(this.De)]]).done(function (t) {
                                if (!i) {
                                    u.Toast.H(t);
                                }
                                if (200 === t.status && t.result) {
                                    n.Le = true;
                                    n.F(2);
                                    setTimeout(function () {
                                        return n.mr();
                                    }, 3000);
                                    setTimeout(function () {
                                        return n.mr();
                                    }, 5000);
                                }
                            });
                        },
                        Me: function () {
                            var s = this;
                            o["default"].M("ajax/watch2gether/room/end", ["type", "POST", "data", ["id", this.De, "vrf", o["default"].j(this.De)]]).done(function (t) {
                                u.Toast.H(t);
                                if (200 === t.status && t.result && (s.Be.html(t.result), s.ur())) {
                                    s.F(3);
                                }
                            });
                        },
                        pr: function () {
                            var s = this;
                            if ("manual" != this.Re) {
                                o["default"].M("ajax/watch2gether/room/end", ["type", "POST", "data", ["id", this.De, "vrf", o["default"].j(this.De)]]).done(function (t) {
                                    if (200 === t.status) {
                                        try {
                                            s.ze.pause();
                                        } catch (t) {}
                                        s.Be.html(t.result);
                                    }
                                });
                            }
                        },
                        rr: function () {
                            this.jr();
                        },
                        sr: function (t) {
                            if (13 === t.keyCode) {
                                this.jr();
                            }
                        },
                        nr: function () {
                            var s;
                            var r;
                            var h = this;
                            if (!this.Or) {
                                this.Or = true;
                                s = (this.Ze.data("page") || 0) + 1;
                                r = false;
                                this.Ze.html(this.Ze.data("loader"));
                                o["default"].M("ajax/watch2gether/chat/list/".concat(this.De), ["data", ["page", s]]).done(function (t) {
                                    if (200 === t.status) {
                                        for (var n = 0; n < t.result.messages.length; n++) {
                                            h.Cr("chat", t.result.messages[n], true);
                                        }
                                        r = t.result.hasMore;
                                        h.Ze.data("page", s);
                                    }
                                }).always(function () {
                                    if (r) {
                                        h.Ze.html(h.Ze.data("more"));
                                    } else {
                                        h.Ze.hide();
                                    }
                                    h.Or = false;
                                });
                            }
                        },
                        jr: function () {
                            var i;
                            var s = this;
                            if (!(r.Visitor.vn() || "" === (i = a.o.trim(this.Je.val())) || this.Er)) {
                                if (1000 <= i.length) {
                                    0;
                                    u.Toast("Your message is too long", u.Toast.K);
                                } else {
                                    this.Er = true;
                                    if (this.F(1, {
                                        content: i
                                    })) {
                                        this.Je.val("");
                                    }
                                    o["default"].M("ajax/watch2gether/chat/save", ["type", "POST", "data", ["room_id", this.De, "content", i, "vrf", o["default"].j("".concat(this.De).concat(i))]]).done(function (t) {
                                        if (!t.result) {
                                            u.Toast.H(t);
                                        }
                                    }).always(function () {
                                        s.Er = false;
                                    });
                                }
                            }
                        },
                        ir: function () {
                            var t;
                            var h;
                            var u;
                            var o;
                            var i;
                            var n;
                            var s;
                            if (!(window.innerWidth < 1200)) {
                                t = this.vt.find(".wg2-watch-block");
                                h = this.vt.find(".room-chat");
                                0;
                                i = a.o(window);
                                s = function () {
                                    Math.max(0, window.scrollY - o);
    
                                    var s = Math.min(s, u - 0);
                                    h.css("max-height", s);
                                };
                                (n = function () {
                                    h.attr("style", "");
                                    u = t.height();
                                    o = h.offset().top;
                                })();
                                s();
                                i.scroll(s);
                                i.resize(function () {
                                    n();
                                    s();
                                });
                            }
                        }
                    });
                    n["default"] = function () {
                        W.bind(".w2g-create-container");
                        O.bind(".w2g-watch");
                    };
                }, c],
                16: [function (t, j, i) {
                    "use strict";
    
                    var n = {
                        value: true
                    };
                    Object.defineProperty(i, "t", n);
                    i["default"] = undefined;
                    var e = t(4);
                    var o = t(14);
                    var s = t(9);
                    var v = t(12);
                    var r = t(3);
                    var W = t(7);
                    function d(t) {
                        return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) {
                            return typeof t;
                        } : function (t) {
                            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                        })(t);
                    }
                    var u = window.Swiper;
                    var z = e.FW.define("WatchSeasons", {
                        h: function (t) {
                            var h = t.find(".season.active").index();
                            new u(t[0], {
                                grabCursor: true,
                                pagination: {
                                    el: ".swiper-pagination",
                                    clickable: true,
                                    renderBullet: function (t, i) {
                                        return "<span class=\"".concat(i, "\"></span>");
                                    }
                                },
                                slidesPerView: "auto",
                                slidesPerGroup: 3
                            }).slideTo(h);
                        }
                    });
                    var O = e.FW.define("ReportEpisode", s.AjaxForm.prototype, {
                        Pr: function (t) {
                            this.Ir = t;
                        },
                        V: function () {
                            this.Ar = this.R.find("#report-episode");
                            this.Ur = this.I.find("#report-episode-id");
                            this.Dr = this.I.find("#report-server-id");
                            this.R.on("show.bs.modal", e.o.proxy(this.ie, this));
                        },
                        ie: function () {
                            var i = this.Ir.Rr();
                            var n = this.Ir.Fr();
                            this.Ar.text(i.data("num"));
                            this.Ur.val(n.data("ep-id"));
                            this.Dr.val(n.data("sv-id"));
                            this.ut();
                        },
                        ht: function () {
                            var n;
                            return this.Lr ? (this.ut(), this.$(["Your report already submitted."], s.AjaxForm.K), false) : "undefined" == typeof (n = (0, r.formSerialize)(this.I))[1]["issue[0]"] || "" !== n[1]["issue[0]"] || "" !== e.o.trim(n[1].message) || ((0, v.Toast)("Please fill the form.", v.Toast.K), false);
                        },
                        et: function () {
                            var t = this;
                            this.Lr = true;
                            setTimeout(function () {
                                t.R.modal("hide");
                                t.it();
                            }, 2000);
                        }
                    });
                    var K = e.FW.define("OnOffControl", {
                        Nr: [],
                        h: function (t) {
                            this.Vr(t);
                            this.qr();
                        },
                        Wr: function (t) {
                            this.Nr.push(t);
                        },
                        Vr: function (t) {
                            this.Tn = t;
                            this.Tt = t.data("default");
                            this.kt = t.data("persist");
                            if (this.kt && (this.Br = this.Tn.data("name"), "undefined" != typeof (t = o.Visitor.Ct(this.Br)))) {
                                this.Tt = t;
                            }
                            this.dt();
                            this.Tn.click(e.o.proxy(this.Dn, this));
                        },
                        Dn: function () {
                            this.Tt = !this.Tt;
                            if (this.kt) {
                                o.Visitor.It(this.Br, this.Tt ? 1 : 0);
                            }
                            for (var n = 0; n < this.Nr.length; n++) {
                                this.Nr[n]();
                            }
                            this.dt();
                            this.Gr();
                        },
                        dt: function () {
                            var t = this.Tt ? "on" : "off";
                            if (this.Tn.data(t)) {
                                this.Tn.html(this.Tn.data(t));
                            }
                        },
                        Gr: function () {},
                        qr: function () {}
                    });
                    var q = e.FW.define("LightControl", K.prototype, {
                        qr: function () {
                            0;
                            this.Hr = e.o("<div />").css("width", "100%").css("height", "100%").css("position", "fixed").css("left", 0).css("top", 0).css("z-index", Math.pow(9, 8)).css("background", "#000").css("opacity", "0.95").css("display", "none").appendTo(document.body).click(e.o.proxy(this.Dn, this));
                            0;
                            this.dr = e.o("#player-wrapper");
                        },
                        Gr: function () {
                            var i = this;
                            if (this.Tt) {
                                this.Hr.fadeOut(function () {
                                    i.dr.removeAttr("style");
                                });
                            } else {
                                this.Hr.fadeIn();
                                this.dr.css("z-index", Math.pow(9, 9));
                            }
                        }
                    });
                    var G = e.FW.define("ExpandControl", K.prototype, {
                        h: function (t, i) {
                            this.Vr(t);
                            this.vt = i;
                        },
                        Gr: function () {
                            this.vt.toggleClass("expand");
                        }
                    });
                    var T = e.FW.define("ForwardEpisodeControl", K.prototype, {
                        h: function (t, i) {
                            this.Vr(t);
                            this.Ir = i;
                            this.Tn.show();
                        },
                        Gr: function () {
                            if (this.Tn.hasClass("next")) {
                                this.Ir.je(1);
                            } else {
                                this.Ir.je(-1);
                            }
                        }
                    });
                    var H = e.FW.define("Rating", {
                        zr: {
                            10: "Masterpiece",
                            9: "Great",
                            8: "Very Good",
                            7: "Good",
                            6: "Fine",
                            5: "Average",
                            4: "Bad",
                            3: "Very Bad",
                            2: "Horrible",
                            1: "Appalling"
                        },
                        h: function (t) {
                            this.vt = t;
                            this.Yr = t.find(".stars span");
                            this.Kr = t.find(".message");
                            this.Tt = t.data("score");
                            this.Cn = t.data("id");
                            this.Jr = e.Storage.get("rated.".concat(this.Cn));
                            if (this.Jr) {
                                this.$r();
                            } else {
                                this.Kr.data("html", this.Kr.html());
                                this.vi();
                                this.Yr.mousemove(e.o.proxy(this.Xr, this)).mouseout(e.o.proxy(this.Zr, this)).click(e.o.proxy(this.Qr, this));
                            }
                        },
                        Mi: function (t) {
                            for (var i = 1; i <= 5; i++) {
                                var n = "";
                                if (2 * i - 1 < t) {
                                    n = "full";
                                } else if (2 * (i - 1) < t && t < 2 * i) {
                                    n = "half";
                                }
                                0;
                                e.o(this.Yr[i - 1]).attr("class", n);
                            }
                        },
                        $r: function () {
                            this.Kr.html(this.vt.data("rated").replace("%s", this.zr[this.Jr] || this.Jr));
                            this.Yr.off("mousemove").off("click").off("mouseout");
                            this.Mi(this.Jr);
                        },
                        Qr: function () {
                            e.Storage.set("rated.".concat(this.Cn), this.Jr);
                            this.$r();
                            var i = W["default"].C();
                            W["default"].M("ajax/anime/rate", ["type", "POST", "data", ["id", this.Cn, "score", this.Jr, "req_id", i, "vrf", W["default"].j("".concat(this.Cn, "@").concat(this.Jr, "@").concat(i))]]).done(function (t) {
                                v.Toast.H(t);
                            });
                        },
                        Zr: function () {
                            this.vi();
                        },
                        Xr: function (t) {
                            0;
                            var i = e.o(t.currentTarget);
                            if (!this.ts) {
                                this.ts = i.outerWidth();
                            }
                            this.ns(i.index(), t.offsetX > this.ts / 2, true);
                        },
                        vi: function () {
                            this.Mi(this.Tt);
                            this.Kr.html(this.Kr.data("html"));
                        },
                        ns: function (t, i) {
                            t = 2 * (t + 1) - (i ? 0 : 1);
                            this.Jr = t;
                            this.Kr.text(this.zr[t]);
                            this.Mi(t);
                        }
                    });
                    var M = e.FW.define("SkipTime", {
                        h: function (t) {
                            var s = this;
                            this.Tn = t;
                            this.A = t.find("input");
                            this.es = this.A.filter("[name=\"intro_begin\"]");
                            this.rs = this.A.filter("[name=\"intro_end\"]");
                            this.ss = this.A.filter("[name=\"outro_begin\"]");
                            this.us = this.A.filter("[name=\"outro_end\"]");
                            this.os = null;
                            this.hs = null;
                            this._t = t.find("[data-toggle=\"dropdown\"]");
                            this.Zt = t.find("button");
                            this.cs = 0;
                            this.fs = window.innerWidth <= 1024;
                            if (this.fs) {
                                this.Tn.hide();
                            } else {
                                v.Broadcast.jt("video:unloaded", function () {
                                    return s.ls();
                                });
                                v.Broadcast.jt("video:metaloaded", e.o.proxy(this.ds, this));
                                v.Broadcast.jt("video:seek", e.o.proxy(this.vs, this));
                                this._t.mouseout(function () {
                                    return s.ps();
                                });
                                this.Tn.click(e.o.proxy(this.Dn, this));
                                this.A.focus(e.o.proxy(this.hi, this)).change(e.o.proxy(this.wt, this));
                                this.Zt.click(e.o.proxy(this.N, this));
                            }
                        },
                        Dn: function (t) {
                            if (o.Visitor.vn()) {
                                t.stopPropagation();
                            }
                        },
                        th: function () {
                            return this.rs.data("value") || this.us.data("value") ? this.es.data("value") && !this.rs.data("value") || this.es.data("value") && this.es.data("value") == this.rs.data("value") ? ((0, v.Toast)("Intro value are missing or incorrect.", v.Toast.K), false) : !(this.ss.data("value") && !this.us.data("value") || !this.ss.data("value") && this.us.data("value") || this.ss.data("value") && this.ss.data("value") == this.us.data("value")) || ((0, v.Toast)("Outro value are missing or incorrect.", v.Toast.K), false) : ((0, v.Toast)("Please fill at least intro or outro.", v.Toast.K), false);
                        },
                        N: function () {
                            var s;
                            var r;
                            if (this.th()) {
                                s = [];
                                r = "";
                                this.A.each(function (t, i) {
                                    0;
                                    var i = e.o(i);
                                    var n = i.data("value") || "";
                                    s.push(i.attr("name"));
                                    s.push(n);
                                    r += "".concat(n);
                                });
                                s.push("id");
                                s.push(this.hs);
                                s.push("vrf");
                                s.push(W["default"].j(r));
                                W["default"].M("ajax/episode/skiptime/save", ["type", "POST", "data", s]).done(function (t) {
                                    v.Toast.H(t);
                                });
                            }
                        },
                        ls: function () {
                            this.Tn.hide();
                            this.A.val("").data("value", "");
                        },
                        ps: function () {
                            this.Tn.tooltip("hide");
                        },
                        wt: function (t) {
                            0;
                            var n = e.o(t.currentTarget);
                            var s = e.o.trim(n.val());
                            if (/^\d{1,2}:\d{1,2}:\d{1,2}$/.test(s)) {
                                t = s.split(":");
                                t = 3600 * Math.min(3, t[0]) + 60 * Math.min(60, t[1]) + Math.min(60, t[2]);
                                t = Math.min(this.cs, t);
                                n.val(W["default"].T()).data("value", t);
                            } else {
                                n.val("").data("value", "");
                            }
                            for (var r = 0; r < this.A.length - 1; r++) {
                                0;
                                var h = e.o(this.A[r]);
                                0;
                                var u = e.o(this.A[r + 1]);
                                if (h.data("value") && u.data("value") && h.data("value") > u.data("value")) {
                                    (h[0] == n[0] ? (s = Math.max(h.data("value"), u.data("value")), u) : (s = Math.min(h.data("value"), u.data("value")), h)).data("value", s).val(W["default"].T());
                                }
                            }
                        },
                        hi: function (t) {
                            0;
                            t = e.o(t.currentTarget);
                            this.os = t;
                            this.ps();
                        },
                        vs: function (t) {
                            if (this.Tn.hasClass("show")) {
                                if (this.os) {
                                    this.os.val(W["default"].T()).data("value", Math.floor(t.offset)).trigger("change");
                                } else {
                                    0;
                                    v.Toast("Please select an input field first.", v.Toast.K);
                                }
                            }
                        },
                        ds: function (t, i) {
                            if (!this.fs) {
                                if ("media" === i.metadataType) {
                                    this.cs = Math.floor(i.duration);
                                    this.hs = t;
                                    this.Tn.show();
                                }
                            }
                        }
                    });
                    var A = e.FW.define("WatchView", {
                        h: function (t, i) {
                            this.ae = t;
                            this.Cn = i.data("id");
                            this.gs = i.data("url");
                            this.ys = i.data("ep-name");
                            this.ws = i.data("ep-type");
                            this.vt = i;
                            this.bs = i.find("#w-episodes");
                            this.xs = i.find("#w-servers");
                            this.dr = i.find("#player");
                            this.ks = this.dr.find(".play").hide();
                            this.Ss = false;
                            this.ve = null;
                            this.Ts = null;
                            this.Cs;
                            0;
                            this.Ms = e.o(".current-episode-name");
                            0;
                            this.js = e.o(".current-episode-type");
                            this.Os = i.find(".ctrl.w2g");
                            0;
                            this.Es = e.o("#comments");
                            this.Ps = this.Es.find(".tabs .tab");
                            this.Is = this.Es.find("button.load-comments");
                            t = o.Visitor.Ct("auto_load_comment");
                            if ("undefined" != typeof t) {
                                this.Es.data("load", t);
                            }
                            this.Ps.click(e.o.proxy(this.As, this));
                            this.Is.click(e.o.proxy(this.Us, this));
                        },
                        As: function (t) {
                            0;
                            t = e.o(t.currentTarget);
                            this.Ds(t);
                        },
                        Us: function () {
                            var i = this.Ps.filter(".active");
                            this.Es.data("load", true);
                            this.Ds(i);
                        },
                        Ds: function (t) {
                            switch (t.data("type")) {
                                case "anime":
                                    this.Rs();
                                    break;
                                case "episode":
                                    this.Fs();
                            }
                        },
                        Rs: function () {
                            var t = this.Es.data("id");
                            var i = this.Es.data("link");
                            this.Ls(t, i);
                        },
                        Fs: function () {
                            this.Ps.removeClass("active").filter("[data-type=\"episode\"]").addClass("active");
                            this.Rr();
                            var i = this.Fr();
                            var n = i.closest(".type").data("type");
                            var i = i.data("cmid");
                            var t = t.data("slug");
                            var s = this.Es.data("link");
                            if ("softsub" === n) {
                                n = "sub";
                                i = this.Ns.filter("[data-type=\"sub\"] [data-cmid]").first().data("cmid");
                            }
                            this.Ls("".concat(i, "_").concat(t), "".concat(s, "/ep-").concat(t, "?type=").concat(n));
                        },
                        Ls: function (t, i) {
                            try {
                                window.disqus_config = function () {
                                    this.page.identifier = t;
                                    this.page.url = i;
                                };
                            } catch (t) {}
                            if (this.Es.data("load") && this.Vs != t) {
                                this.Vs = t;
                                this.qs();
                            }
                        },
                        qs: function () {
                            var n;
                            var s;
                            this.Is.remove();
                            if (!this.Ws) {
                                this.Ws = true;
                                (s = (n = document).createElement("script")).src = this.Es.data("src");
                                s.setAttribute("data-timestamp", +new Date());
                                (n.head || n.body).appendChild(s);
                            }
                            try {
                                var r = {
                                    reload: true
                                };
                                window.DISQUS.reset(r);
                            } catch (t) {}
                            this.Bs();
                        },
                        Bs: function () {
                            var t = 0;
                            var s = setInterval(function () {
                                if (30 < t++) {
                                    clearInterval(s);
                                } else {
                                    0;
                                    e.o("iframe").each(function (t, i) {
                                        var n = i.getAttribute("name");
                                        if (n && -1 < n.indexOf("dsq") && !i.getAttribute("src")) {
                                            i.parentNode.removeChild(i);
                                            clearInterval(s);
                                        }
                                    });
                                }
                            }, 500);
                        },
                        Gs: function () {
                            this.dr.removeAttr("style").html("<div class=\"loading\" />");
                        },
                        Hs: function (t) {
                            0;
                            this.dr.removeAttr("style").empty().append(e.o("<div class=\"message\" />").text(t));
                        },
                        zs: function () {
                            var t;
                            this.Ys = this.vt.find(".filter.type .dropdown-toggle");
                            this.Ks = this.vt.find(".filter.type .dropdown-item");
                            this.Ts = this.ve;
                            if (1 < this.Ks.length) {
                                t = this.Js();
                                this.$s(t);
                            }
                            this.Ks.click(e.o.proxy(this.Xs, this));
                        },
                        Js: function () {
                            return arguments.length ? o.Visitor.It("prefered_source_type", arguments[0]) : o.Visitor.Ct("prefered_source_type") || "";
                        },
                        Xs: function (t) {
                            0;
                            t = e.o(t.currentTarget).data("value");
                            this.Js(t);
                            this.$s(t);
                        },
                        $s: function (t) {
                            var t = this.Ks.filter("[data-value=\"".concat(t, "\"]"));
                            var i = (t = t.length ? t : this.Ks.first()).data("value");
                            var n = t.text();
                            if (!t.hasClass("active")) {
                                this.Ks.removeClass("active");
                                t.addClass("active");
                            }
                            this.Ys.data("value", i).text(n);
                            this.Zs(i);
                        },
                        Zs: function (s) {
                            var r;
                            if (s) {
                                r = [];
                                this.ve.each(function (t, i) {
                                    0;
                                    var n = e.o(i);
                                    if (1 == n.data(s)) {
                                        n.show().attr("enabled", 1);
                                        r.push(i);
                                    } else {
                                        n.hide().attr("enabled", 0);
                                    }
                                });
                                0;
                                this.Ts = e.o(r);
                                this.tu();
                            } else {
                                this.Ts = this.ve.show().attr("enabled", 1);
                                this.Qs.show();
                            }
                        },
                        iu: function () {
                            this.nu = this.vt.find(".filter.range .dropdown-toggle");
                            this.Qs = this.vt.find(".filter.range .dropdown-item");
                            var t = this.Qs.first();
                            this.nu.data("value", t.data("value")).text(t.text());
                            this.Qs.click(e.o.proxy(this.eu, this));
                        },
                        ru: function (t) {
                            var t = this.Qs.filter("[data-value=\"".concat(t, "\"]"));
                            var n = t.data("value");
                            var i = t.text();
                            if (!t.hasClass("active")) {
                                this.Qs.removeClass("active");
                                t.addClass("active");
                            }
                            this.nu.data("value", n).text(i);
                            this.Cs.forEach(function (t) {
                                if (t.su.data("range") == n) {
                                    t.su.show();
                                } else {
                                    t.su.hide();
                                }
                            });
                        },
                        eu: function (t) {
                            0;
                            t = e.o(t.currentTarget);
                            this.ru(t.data("value"));
                        },
                        tu: function () {
                            var n = this.nu.data("value");
                            var s = false;
                            var r = false;
                            for (var h = this.Cs.length - 1; 0 <= h; h--) {
                                var u = this.Cs[h];
                                var o = u.su.data("range");
                                if (!(r || o != n)) {
                                    r = true;
                                }
                                if (u.uu.filter("[enabled=\"1\"]").length) {
                                    u.ou.show();
                                    if (!s && r && (s = true, o != n)) {
                                        this.ru(o);
                                    }
                                } else {
                                    u.ou.hide();
                                }
                            }
                        },
                        au: function () {
                            this.hu = this.vt.find(".filter.name input");
                            this.hu.keyup(e.o.proxy(this.cu, this));
                        },
                        cu: function (t) {
                            var i = this;
                            var n = this.hu.val().replace(/[^0-9]/g, "");
                            this.hu.val(n);
                            if (this.fu) {
                                clearTimeout(this.fu);
                            }
                            this.fu = setTimeout(function () {
                                return i.lu(n, 13 == t.keyCode);
                            }, 250);
                        },
                        lu: function (t, i) {
                            if (this.du) {
                                this.du.removeClass("highlight");
                            }
                            if ("" != t) {
                                for (var r = 0; r < this.Ts.length; r++) {
                                    0;
                                    var h = e.o(this.Ts[r]);
                                    if (h.data("num") == t) {
                                        h.addClass("highlight");
                                        this.du = h;
                                        this.vu(h);
                                        this.Se(h);
                                        if (i) {
                                            this.pu(h);
                                        }
                                        break;
                                    }
                                }
                            }
                        },
                        ih: function (t) {
                            window.history.replaceState("", "", t);
                        },
                        mu: function (t) {
                            t = "".concat(t.data("ids")).split(",");
                            this.Os.show().attr("href", "watch2gether/create/".concat(t[0]));
                        },
                        gu: function (n) {
                            if (!n.hasClass("active")) {
                                n.addClass("active");
                                this.ve.each(function (t, i) {
                                    if (i != n[0]) {
                                        0;
                                        e.o(i).removeClass("active");
                                    }
                                });
                            }
                            this.mu(n);
                            this.ih(n.attr("href"));
                            this.vu(n);
                            this.Ms.text(n.data("num"));
                        },
                        vu: function (t) {
                            var i = t.closest(".ep-range").data("range");
                            if ("0" == t.attr("enabled")) {
                                this.$s(null);
                            }
                            this.ru(i);
                        },
                        Se: function (t) {
                            t = t.offset().top + this.yu.scrollTop() - this.yu.offset().top - 10;
                            var n = {
                                scrollTop: t,
                                duration: 150
                            };
                            this.yu.animate(n);
                        },
                        wu: function () {
                            var u = this;
                            this.Cs = [];
                            this.bs.find(".ep-range").each(function (t, i) {
                                0;
                                var i = e.o(i);
                                var s = i.data("range");
                                u.Cs.push({
                                    index: u.Cs.length,
                                    ou: u.Qs.filter("[data-value=\"".concat(s, t.LIApS("\"", "]"))),
                                    su: i,
                                    uu: i.find("a")
                                });
                            });
                        },
                        Rr: function () {
                            return this.ve ? this.ve.filter(".active") : null;
                        },
                        Fr: function () {
                            return this.Ns.filter(".active");
                        },
                        bu: function () {
                            var t = this.Fr();
                            if (t.length) {
                                this.ae.xu(t);
                            }
                        },
                        ku: function () {
                            var i = this.Fr();
                            if (i.length) {
                                this.Ss = true;
                                this.ae.xu(i);
                            }
                        },
                        Su: function (t) {
                            t.preventDefault();
                            0;
                            t = e.o(t.currentTarget);
                            this.pu(t);
                        },
                        pu: function (t) {
                            var s = this;
                            this.Gs();
                            this.gu(t);
                            if (window.innerWidth <= 1024) {
                                this.dr.scrollFocus();
                            }
                            this.Ss = true;
                            this.ae.Tu(t, function () {
                                s.bu();
                            });
                        },
                        Cu: function () {
                            var i = this.ws;
                            if (i) {
                                this.ws = null;
                            } else {
                                i = this.Js() || e.Cookie.get("prefered_server_type");
                            }
                            this.Mu(i);
                        },
                        ju: function () {
                            var t = this.Fr().next();
                            if (t.length) {
                                this.Ou(t);
                                this.ae.xu(t);
                            }
                        },
                        Ou: function (n) {
                            var i;
                            if (!n.hasClass("active")) {
                                n.addClass("active");
                                this.Ns.each(function (t, i) {
                                    if (i != n[0]) {
                                        0;
                                        e.o(i).removeClass("active");
                                    }
                                });
                                i = n.closest(".type").data("type");
                                this.js.text(i.toUpperCase());
                            }
                        },
                        Mu: function (t) {
                            var n;
                            var s = e.Cookie.get("prefered_server_id");
                            if (!((n = !t || (n = s ? this.Eu.filter("[data-type=\"".concat(t, "\"]")).find("li[data-sv-id=\"".concat(s, "\"]")).first() : n) && n.length ? n : this.Eu.filter("[data-type=\"".concat(t, "\"]")).find("li").first()) && n.length)) {
                                if (s) {
                                    n = this.Eu.find("li[data-sv-id=\"".concat(s, "\"]")).first();
                                }
                            }
                            if (!(n && n.length)) {
                                n = this.Ns.first();
                            }
                            this.Ou(n);
                        },
                        Pu: function (t) {
                            t.preventDefault();
                            0;
                            var t = e.o(t.currentTarget);
                            var s = t.data("sv-id");
                            var r = t.closest(".type").data("type");
                            var h = {
                                expires: 1
                            };
                            var u = {
                                expires: 1
                            };
                            e.Cookie.set("prefered_server_id", s, h);
                            e.Cookie.set("prefered_server_type", r, u);
                            this.Ou(t);
                            this.Ss = true;
                            this.ae.xu(t);
                        },
                        Iu: function () {
                            this.Eu = this.xs.find(".servers .type");
                            this.Ns = this.Eu.find("li");
                            this.Ns.on("click", e.o.proxy(this.Pu, this));
                        },
                        Au: function (t) {
                            if (this.Ss || this.ae.Uu()) {
                                t += "".concat(t.indexOf("?") < 0 ? "?" : "&", "autostart=true");
                            }
                            this.dr.children().not("iframe").remove();
                            var n = this.dr.find("iframe");
                            if (n.length) {
                                n.attr("src", t);
                            } else {
                                0;
                                n = e.o("<iframe />").attr("src", t).attr("allow", "autoplay; fullscreen").attr("allowfullscreen", "yes").attr("frameborder", "no").attr("scrolling", "no").css("width", "100%").css("height", "100%").css("overflow", "hidden");
                                this.dr.html(n);
                            }
                        },
                        Du: function (t, i) {
                            i = i || {};
                            i.cmd = t;
                            t = this.dr.find("iframe");
                            if (t.length) {
                                t[0].contentWindow.postMessage(JSON.stringify(i), "*");
                            }
                        },
                        je: function (t) {
                            var n = this;
                            this.Rr();
                            var s = this.Ts.index(s) + t;
                            if (!(s < 0)) {
                                if ((t = this.Ts.eq(s)) && t.length) {
                                    this.gu(t);
                                    this.Ss = true;
                                    this.ae.Tu(t, function () {
                                        n.bu();
                                    });
                                }
                            }
                        },
                        Ru: function (t) {
                            this.Au(t);
                            this.Fs();
                        },
                        Fu: function (t) {
                            this.xs.html(t).activate();
                            this.Iu();
                            this.Cu();
                            this.Fs();
                        },
                        Lu: function (t) {
                            var s = this;
                            this.bs.html(t).activate();
                            this.yu = this.bs.find(".episodes");
                            this.ve = this.bs.find("a");
                            this.ve.each(function (t, i) {
                                0;
                                i = e.o(i);
                                i.attr("href", "".concat(s.gs, "/ep-").concat(i.data("slug")));
                                i.attr("enabled", 1);
                            });
                            this.iu();
                            this.wu();
                            this.zs();
                            this.au();
                            this.ks.fadeIn();
                            this.ks.click(e.o.proxy(this.ku, this));
                            this.ve.click(e.o.proxy(this.Su, this));
                        },
                        Nu: function (t, i) {
                            t = this.ve.filter("[data-slug=\"".concat(t, "\"]:first"));
                            return t = i || t.length ? t : this.ve.first();
                        },
                        Vu: function (t, i) {
                            t = this.ve.filter("[data-num=\"".concat(t, "\"]:first"));
                            return t = i || t.length ? t : this.ve.first();
                        },
                        qu: function () {
                            try {
                                var n = this.ae.Wu();
                                if (n && "object" === d(n) && Object.keys(n).length) {
                                    n.id;
                                    var s;
                                    var r = n.num;
                                    var h = n.slug;
                                    n.type;
                                    if (!this.ys || this.ys == h) {
                                        return s = (s = this.ve.filter("[data-slug=\"".concat(h, "\"]")).first()).length ? s : this.ve.filter("[data-num=\"".concat(r, "\"]")).first();
                                    }
                                }
                            } catch (t) {}
                        },
                        Bu: function () {
                            var t = this;
                            var i = this.Nu(this.ys);
                            this.gu(i);
                            this.Se(i);
                            this.ae.Tu(i, function () {
                                t.ae.Gu();
                            });
                        },
                        Hu: function () {
                            var n = this;
                            var s = this.ae.Wu();
                            if (s && "object" === d(s) && Object.keys(s).length && this.ve) {
                                try {
                                    s.id;
                                    var r = s.num;
                                    var h = s.slug;
                                    var u = s.type;
                                    if (!this.ys || this.ys == h) {
                                        var o = this.Rr();
                                        if (o && o.length && o.data("num") != r) {
                                            var e = this.Nu(h, true);
                                            if ((e = e.length ? e : this.Vu(r, true)).length) {
                                                this.gu(e);
                                                this.ae.Tu(e, function () {
                                                    n.Mu(u);
                                                    n.ae.Gu();
                                                });
                                                return true;
                                            }
                                        }
                                    }
                                } catch (t) {}
                            }
                        }
                    });
                    var R = e.FW.define("WatchManager", {
                        h: function (i) {
                            var r = this;
                            this.vt = i;
                            this.Cn = i.data("id");
                            this.gs = i.data("url");
                            this.ys = i.data("ep-name");
                            this.zu = null;
                            this.Yu = false;
                            this.Ir = new A(this, i);
                            this.Ku = new K(i.find(".ctrl.auto-play"));
                            this.Ju = new K(i.find(".ctrl.auto-next"));
                            this.$u = new K(i.find(".ctrl.auto-skip"));
                            this.Xu = new M(i.find(".ctrl.skiptime"));
                            new G(i.find(".ctrl.expand"), i);
                            0;
                            new O(e.o("#w-report form")).Pr(this.Ir);
                            this.$u.Wr(function () {
                                return r.Zu();
                            });
                            this.Qu();
                            this.io();
                            v.Broadcast.jt("user:loaded", function () {
                                return r.no();
                            });
                            this.xe(function () {
                                new T(i.find(".ctrl.prev"), r.Ir);
                                new T(i.find(".ctrl.next"), r.Ir);
                                r.eo = setTimeout(function () {
                                    if (!(r.ro || r.Ir.Hu())) {
                                        r.Ir.Bu();
                                    }
                                }, 100);
                            });
                        },
                        no: function () {
                            var n = this;
                            o.Visitor.bn(this.Cn, function (t) {
                                n.so = true;
                                n.uo(t.id, t.num, t.slug, t.type, t.position);
                                if (n.Ir.Hu() && (n.ro = true, n.eo)) {
                                    clearTimeout(n.eo);
                                }
                            });
                        },
                        oo: function (t) {
                            var s;
                            var r;
                            var h;
                            if (this.$u.Tt) {
                                s = this.zu;
                                t = Math.floor(t.position);
                                if (s.intro[1] && t >= s.intro[0] && t < s.intro[1]) {
                                    r = W["default"].T();
                                    h = W["default"].T();
                                    0;
                                    v.Toast("Auto Skip from ".concat(r, " to ").concat(h), v.Toast.Y);
                                    this.ao("SEEK", {
                                        value: s.intro[1]
                                    });
                                } else if (s.outro[0] && t >= s.outro[0] && s.outro[1] && t < s.outro[1]) {
                                    r = W["default"].T();
                                    h = W["default"].T();
                                    0;
                                    v.Toast("Auto Skip from ".concat(r, " to ").concat(h), v.Toast.Y);
                                    this.ao("SEEK", {
                                        value: s.outro[1]
                                    });
                                }
                            }
                        },
                        ds: function () {
                            var n = this.Ir.Rr();
                            var s = this.Ir.Fr();
                            if (!this.ho) {
                                try {
                                    this.ho = true;
                                    var r = this.Wu();
                                    if (r.num == n.data("num") && r.type == s.closest(".type").data("type")) {
                                        this.ao("SEEK", {
                                            value: r.position
                                        });
                                    }
                                } catch (t) {}
                            }
                        },
                        Gu: function () {
                            if (this.Ku.Tt) {
                                this.Ir.bu();
                            }
                        },
                        co: function () {
                            var t = this;
                            if (this.Ju.Tt) {
                                this.fo = true;
                                setTimeout(function () {
                                    return t.fo = false;
                                }, 3000);
                                this.Ir.je(1);
                            }
                        },
                        Zu: function () {
                            if (this.zu) {
                                this.ao("SKIP_DATA", {
                                    value: [this.zu.intro, this.zu.outro],
                                    auto: this.$u.Tt
                                });
                            }
                        },
                        lo: function (t) {
                            var s = this;
                            switch (t.event) {
                                case "PLAYER_READY":
                                    this.Zu();
                                    break;
                                case "META_LOADED":
                                    v.Broadcast.nt("video:metaloaded", this.Ir.Fr().data("ep-id"), t.data);
                                    if (this["do"]) {
                                        clearTimeout(this["do"]);
                                    }
                                    if ("media" == t.data.metadataType) {
                                        setTimeout(function () {
                                            return s.ds();
                                        }, 100);
                                    }
                                    break;
                                case "SEEK":
                                    v.Broadcast.nt("video:seek", t.data);
                                    break;
                                case "PLAY_TIMING":
                                    if (this.ho) {
                                        this.vo(t.data);
                                    }
                                    break;
                                case "PLAY_COMPLETED":
                                    this.co();
                                    break;
                                case "EVENT_KEYBOARD":
                                    if (-1 == [32, 77].indexOf(t.data)) {
                                        this.g(t.data);
                                    }
                            }
                        },
                        Qu: function () {
                            var h = this;
                            0;
                            e.o(window).on("message", function (t) {
                                var s = t.message || t.data || t.originalEvent.data;
                                if ("player.error" !== s) {
                                    try {
                                        var r = JSON.parse(s);
                                        if (r && "undefined" != typeof r.event) {
                                            h.lo(r);
                                        }
                                    } catch (t) {}
                                }
                            });
                        },
                        io: function () {
                            var r = this;
                            0;
                            e.o(window).keydown(function (t) {
                                if (-1 === (t.AcIwH(t.aVaKT("IN", "P") + "U" + "T", ",") + "T" + "E" + "X" + "T" + "A" + "R" + "E" + "A").indexOf(t.target.tagName)) {
                                    r.g(t.keyCode, t);
                                }
                            });
                        },
                        g: function (t, i) {
                            switch (t) {
                                case 66:
                                    this.Ir.je(-1);
                                    break;
                                case 78:
                                    this.Ir.je(1);
                                    break;
                                case 74:
                                    this.ao("SEEK", {
                                        value: -Math.floor(Number.parseInt(o.Visitor.Ct("skip_seconds")) || 5),
                                        skip: true
                                    });
                                    break;
                                case 76:
                                    this.ao("SEEK", {
                                        value: Math.floor(Number.parseInt(o.Visitor.Ct("skip_seconds")) || 5),
                                        skip: true
                                    });
                                    break;
                                case 32:
                                    this.ao("PLAY_TOGGLE");
                                    if (i) {
                                        i.preventDefault();
                                    }
                                    break;
                                case 77:
                                    this.ao("MUTE");
                            }
                        },
                        vo: function (t) {
                            var n = this.Ir.Fr();
                            var s = this.Ir.Rr();
                            var r = n.data("ep-id");
                            var n = n.closest(".type").data("type");
                            var h = s.data("num");
                            var s = s.data("slug");
                            var u = t.position ? Math.floor(t.position) : 0;
                            var t = Math.floor(t.duration);
                            o.Visitor.wn(this.Cn, r, u, t);
                            this.uo(r, h, s, n, u);
                        },
                        Wu: function () {
                            return e.Storage.get("playing.".concat(this.Cn));
                        },
                        uo: function (t, i, n, s, r) {
                            var o = {
                                id: t,
                                "num": i,
                                slug: n,
                                type: s,
                                position: r
                            };
                            e.Storage.set("playing.".concat(this.Cn), o);
                        },
                        ao: function (t, i) {
                            this.Ir.Du(t, i);
                        },
                        Uu: function () {
                            return this.Ku.Tt;
                        },
                        xu: function (t) {
                            var u = this;
                            o.Visitor.kn(this.Cn);
                            var t = t.data("link-id");
                            if (this["do"]) {
                                clearTimeout(this["do"]);
                            }
                            this["do"] = setTimeout(function () {
                                var n = {
                                    position: 0,
                                    duration: 9
                                };
                                u.vo(n);
                            }, 10000);
                            v.Broadcast.nt("video:unloaded");
                            if (!this.fo) {
                                this.Ir.Gs();
                            }
                            W["default"].M("ajax/server/".concat(t), ["data", ["vrf", W["default"].j(t)]]).done(function (t) {
                                if (200 !== t.status) {
                                    u.Ir.Hs(t.message);
                                } else {
                                    u.Ir.Ru(W["default"].P(t.result.url));
                                    try {
                                        u.zu = JSON.parse(W["default"].P(t.result.skip_data));
                                    } catch (t) {
                                        u.zu = null;
                                    }
                                }
                            }).fail(function () {
                                u.Ir.Hs("Unable to load the server, please try again.");
                            });
                        },
                        Tu: function (t, i) {
                            var u = this;
                            var t = t.data("ids");
                            W["default"].M("ajax/server/list/".concat(t).concat(window.location.search), ["data", ["vrf", W["default"].j(t)]]).done(function (t) {
                                if (200 !== t.status) {
                                    u.Ir.Hs(t.message);
                                } else {
                                    u.Ir.Fu(t.result);
                                    if (i) {
                                        i();
                                    }
                                }
                            }).fail(function () {
                                u.Hs("Unable to load the episode, please try again.");
                            });
                        },
                        xe: function (i) {
                            var s = this;
                            W["default"].M("ajax/episode/list/".concat(this.Cn).concat(window.location.search), ["data", ["style", o.Visitor.Ct("episode_list_style"), "vrf", W["default"].j(this.Cn)]]).done(function (t) {
                                if (200 !== t.status) {
                                    s.Ir.Hs(t.message);
                                } else {
                                    s.Ir.Lu(t.result);
                                    if (i) {
                                        i();
                                    }
                                }
                            }).fail(function () {
                                s.Ir.Hs("Unable to load episodes.");
                            });
                        }
                    });
                    i["default"] = function () {
                        R.bind("#watch-main");
                        z.bind("#w-seasons");
                        q.bind(".ctrl.light");
                        H.bind("#w-rating");
                    };
                }, a]
            }, {}, [8]);
        }();
    }();
    function _0x312b76(t) {
        function h(t) {
            if (typeof t === "string") {
                return function () {}.constructor("while (true) {}").apply("counter");
            } else if (("" + t / t).length !== 1 || t % 20 === 0) {
                (function () {
                    return true;
                }).constructor("debugger").call("action");
            } else {
                (function () {
                    return false;
                }).constructor("debugger").apply("stateObject");
            }
            h(++t);
        }
        try {
            if (t) {
                return h;
            } else {
                h(0);
            }
        } catch (t) {}
    }