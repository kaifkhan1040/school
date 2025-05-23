/*!
 * Bootstrap v4.3.1 (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).bootstrap = e()
}(this, function() {
    "use strict";

    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function e(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e
    }

    function n(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function i(t) {
        for (var e = 1; e < arguments.length; e++) {
            var i = null != arguments[e] ? arguments[e] : {},
                o = Object.keys(i);
            "function" == typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
                return Object.getOwnPropertyDescriptor(i, t).enumerable
            }))), o.forEach(function(e) {
                n(t, e, i[e])
            })
        }
        return t
    }
    var o, r, s = "transitionend",
        a = window.jQuery,
        l = function(t) {
            do {
                t += ~~(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
        },
        c = function(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : ""
            }
            try {
                return document.querySelector(e) ? e : null
            } catch (t) {
                return null
            }
        },
        f = function(t) {
            if (!t) return 0;
            var e = window.getComputedStyle(t),
                n = e.transitionDuration,
                i = e.transitionDelay,
                o = parseFloat(n),
                r = parseFloat(i);
            return o || r ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
        },
        u = function(t) {
            t.dispatchEvent(new Event(s))
        },
        h = function(t) {
            return (t[0] || t).nodeType
        },
        d = function(t, e) {
            var n = !1,
                i = e + 5;
            t.addEventListener(s, function e() {
                n = !0, t.removeEventListener(s, e)
            }), setTimeout(function() {
                n || u(t)
            }, i)
        },
        p = function(t, e, n) {
            Object.keys(n).forEach(function(i) {
                var o, r = n[i],
                    s = e[i],
                    a = s && h(s) ? "element" : (o = s, {}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase());
                if (!new RegExp(r).test(a)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + r + '".')
            })
        },
        g = function(t) {
            return t ? [].slice.call(t) : []
        },
        m = function(t) {
            return !!t && (!!(t.style && t.parentNode && t.parentNode.style) && ("none" !== t.style.display && "none" !== t.parentNode.style.display && "hidden" !== t.style.visibility))
        },
        _ = function() {
            return function() {}
        },
        v = function(t) {
            return t.offsetHeight
        },
        b = (o = {}, r = 1, {
            set: function(t, e, n) {
                void 0 === t.key && (t.key = {
                    key: e,
                    id: r
                }, r++), o[t.key.id] = n
            },
            get: function(t, e) {
                if (!t || void 0 === t.key) return null;
                var n = t.key;
                return n.key === e ? o[n.id] : null
            },
            delete: function(t, e) {
                if (void 0 !== t.key) {
                    var n = t.key;
                    n.key === e && (delete o[n.id], delete t.key)
                }
            }
        }),
        E = {
            setData: function(t, e, n) {
                b.set(t, e, n)
            },
            getData: function(t, e) {
                return b.get(t, e)
            },
            removeData: function(t, e) {
                b.delete(t, e)
            }
        },
        y = function() {
            var t, e, n = (t = new CustomEvent("Bootstrap", {
                    cancelable: !0
                }), (e = document.createElement("div")).addEventListener("Bootstrap", function() {
                    return null
                }), t.preventDefault(), e.dispatchEvent(t), t.defaultPrevented),
                i = Element.prototype.querySelectorAll,
                o = Element.prototype.querySelector,
                r = /:scope\b/;
            return function() {
                var t = document.createElement("div");
                try {
                    t.querySelectorAll(":scope *")
                } catch (t) {
                    return !1
                }
                return !0
            }() || (i = function(t) {
                if (!r.test(t)) return this.querySelectorAll(t);
                var e = Boolean(this.id);
                e || (this.id = l("scope"));
                var n = null;
                try {
                    t = t.replace(r, "#" + this.id), n = this.querySelectorAll(t)
                } finally {
                    e || this.removeAttribute("id")
                }
                return n
            }, o = function(t) {
                if (!r.test(t)) return this.querySelector(t);
                var e = i.call(this, t);
                return void 0 !== e[0] ? e[0] : null
            }), {
                defaultPreventedPreservedOnDispatch: n,
                find: i,
                findOne: o
            }
        }(),
        w = /[^.]*(?=\..*)\.|.*/,
        D = /\..*/,
        T = /^key/,
        I = /::\d+$/,
        A = {},
        O = 1,
        L = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
        S = ["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"];

    function C(t, e) {
        return e && e + "::" + O++ || t.uidEvent || O++
    }

    function N(t) {
        var e = C(t);
        return t.uidEvent = e, A[e] = A[e] || {}, A[e]
    }

    function k(t, e) {
        null === t.which && T.test(t.type) && (t.which = null === t.charCode ? t.keyCode : t.charCode), t.delegateTarget = e
    }

    function P(t, e, n) {
        void 0 === n && (n = null);
        for (var i = Object.keys(t), o = 0; o < i.length; o++) {
            var r = i[o],
                s = t[r];
            if (s.originalHandler === e && s.delegationSelector === n) return t[r]
        }
        return null
    }

    function x(t, e, n) {
        var i = "string" == typeof e,
            o = i ? n : e,
            r = t.replace(D, ""),
            s = L[r];
        return s && (r = s), S.indexOf(r) > -1 || (r = t), [i, o, r]
    }

    function H(t, e, n, i, o) {
        if ("string" == typeof e && t) {
            n || (n = i, i = null);
            var r = x(e, n, i),
                s = r[0],
                a = r[1],
                l = r[2],
                c = N(t),
                f = c[l] || (c[l] = {}),
                u = P(f, a, s ? n : null);
            if (u) u.oneOff = u.oneOff && o;
            else {
                var h = C(a, e.replace(w, "")),
                    d = s ? function(t, e, n) {
                        return function i(o) {
                            for (var r = t.querySelectorAll(e), s = o.target; s && s !== this; s = s.parentNode)
                                for (var a = r.length; a--;)
                                    if (r[a] === s) return k(o, s), i.oneOff && j.off(t, o.type, n), n.apply(s, [o]);
                            return null
                        }
                    }(t, n, i) : function(t, e) {
                        return function n(i) {
                            return k(i, t), n.oneOff && j.off(t, i.type, e), e.apply(t, [i])
                        }
                    }(t, n);
                d.delegationSelector = s ? n : null, d.originalHandler = a, d.oneOff = o, d.uidEvent = h, f[h] = d, t.addEventListener(l, d, s)
            }
        }
    }

    function M(t, e, n, i, o) {
        var r = P(e[n], i, o);
        null !== r && (t.removeEventListener(n, r, Boolean(o)), delete e[n][r.uidEvent])
    }
    var j = {
            on: function(t, e, n, i) {
                H(t, e, n, i, !1)
            },
            one: function(t, e, n, i) {
                H(t, e, n, i, !0)
            },
            off: function(t, e, n, i) {
                if ("string" == typeof e && t) {
                    var o = x(e, n, i),
                        r = o[0],
                        s = o[1],
                        a = o[2],
                        l = a !== e,
                        c = N(t),
                        f = "." === e.charAt(0);
                    if (void 0 === s) {
                        f && Object.keys(c).forEach(function(n) {
                            ! function(t, e, n, i) {
                                var o = e[n] || {};
                                Object.keys(o).forEach(function(r) {
                                    if (r.indexOf(i) > -1) {
                                        var s = o[r];
                                        M(t, e, n, s.originalHandler, s.delegationSelector)
                                    }
                                })
                            }(t, c, n, e.substr(1))
                        });
                        var u = c[a] || {};
                        Object.keys(u).forEach(function(n) {
                            var i = n.replace(I, "");
                            if (!l || e.indexOf(i) > -1) {
                                var o = u[n];
                                M(t, c, a, o.originalHandler, o.delegationSelector)
                            }
                        })
                    } else {
                        if (!c || !c[a]) return;
                        M(t, c, a, s, r ? n : null)
                    }
                }
            },
            trigger: function(t, e, n) {
                if ("string" != typeof e || !t) return null;
                var i, o = e.replace(D, ""),
                    r = e !== o,
                    s = S.indexOf(o) > -1,
                    l = !0,
                    c = !0,
                    f = !1,
                    u = null;
                return r && void 0 !== a && (i = a.Event(e, n), a(t).trigger(i), l = !i.isPropagationStopped(), c = !i.isImmediatePropagationStopped(), f = i.isDefaultPrevented()), s ? (u = document.createEvent("HTMLEvents")).initEvent(o, l, !0) : u = new CustomEvent(e, {
                    bubbles: l,
                    cancelable: !0
                }), void 0 !== n && Object.keys(n).forEach(function(t) {
                    Object.defineProperty(u, t, {
                        get: function() {
                            return n[t]
                        }
                    })
                }), f && (u.preventDefault(), y.defaultPreventedPreservedOnDispatch || Object.defineProperty(u, "defaultPrevented", {
                    get: function() {
                        return !0
                    }
                })), c && t.dispatchEvent(u), u.defaultPrevented && void 0 !== i && i.preventDefault(), u
            }
        },
        R = y.find,
        W = y.findOne,
        F = {
            matches: function(t, e) {
                return t.matches(e)
            },
            find: function(t, e) {
                return void 0 === e && (e = document.documentElement), "string" != typeof t ? null : R.call(e, t)
            },
            findOne: function(t, e) {
                return void 0 === e && (e = document.documentElement), "string" != typeof t ? null : W.call(e, t)
            },
            children: function(t, e) {
                var n = this;
                if ("string" != typeof e) return null;
                var i = g(t.children);
                return i.filter(function(t) {
                    return n.matches(t, e)
                })
            },
            parents: function(t, e) {
                if ("string" != typeof e) return null;
                for (var n = [], i = t.parentNode; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) this.matches(i, e) && n.push(i), i = i.parentNode;
                return n
            },
            closest: function(t, e) {
                return "string" != typeof e ? null : t.closest(e)
            },
            prev: function(t, e) {
                if ("string" != typeof e) return null;
                for (var n = [], i = t.previousSibling; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) this.matches(i, e) && n.push(i), i = i.previousSibling;
                return n
            }
        },
        U = "bs.alert",
        B = "." + U,
        K = {
            CLOSE: "close" + B,
            CLOSED: "closed" + B,
            CLICK_DATA_API: "click" + B + ".data-api"
        },
        V = "alert",
        Y = "fade",
        Q = "show",
        G = function() {
            function t(t) {
                this._element = t, this._element && E.setData(t, U, this)
            }
            var n = t.prototype;
            return n.close = function(t) {
                var e = this._element;
                t && (e = this._getRootElement(t));
                var n = this._triggerCloseEvent(e);
                null === n || n.defaultPrevented || this._removeElement(e)
            }, n.dispose = function() {
                E.removeData(this._element, U), this._element = null
            }, n._getRootElement = function(t) {
                var e = c(t),
                    n = !1;
                return e && (n = F.findOne(e)), n || (n = F.closest(t, "." + V)), n
            }, n._triggerCloseEvent = function(t) {
                return j.trigger(t, K.CLOSE)
            }, n._removeElement = function(t) {
                var e = this;
                if (t.classList.remove(Q), t.classList.contains(Y)) {
                    var n = f(t);
                    j.one(t, s, function(n) {
                        return e._destroyElement(t, n)
                    }), d(t, n)
                } else this._destroyElement(t)
            }, n._destroyElement = function(t) {
                t.parentNode && t.parentNode.removeChild(t), j.trigger(t, K.CLOSED)
            }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = E.getData(this, U);
                    n || (n = new t(this)), "close" === e && n[e](this)
                })
            }, t._handleDismiss = function(t) {
                return function(e) {
                    e && e.preventDefault(), t.close(this)
                }
            }, t._getInstance = function(t) {
                return E.getData(t, U)
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), t
        }();
    if (j.on(document, K.CLICK_DATA_API, '[data-dismiss="alert"]', G._handleDismiss(new G)), void 0 !== a) {
        var q = a.fn.alert;
        a.fn.alert = G._jQueryInterface, a.fn.alert.Constructor = G, a.fn.alert.noConflict = function() {
            return a.fn.alert = q, G._jQueryInterface
        }
    }
    var X = "bs.button",
        z = "." + X,
        Z = "active",
        $ = "btn",
        J = "focus",
        tt = '[data-toggle^="button"]',
        et = '[data-toggle="buttons"]',
        nt = 'input:not([type="hidden"])',
        it = ".active",
        ot = ".btn",
        rt = {
            CLICK_DATA_API: "click" + z + ".data-api",
            FOCUS_DATA_API: "focus" + z + ".data-api",
            BLUR_DATA_API: "blur" + z + ".data-api"
        },
        st = function() {
            function t(t) {
                this._element = t, E.setData(t, X, this)
            }
            var n = t.prototype;
            return n.toggle = function() {
                var t = !0,
                    e = !0,
                    n = F.closest(this._element, et);
                if (n) {
                    var i = F.findOne(nt, this._element);
                    if (i) {
                        if ("radio" === i.type)
                            if (i.checked && this._element.classList.contains(Z)) t = !1;
                            else {
                                var o = F.findOne(it, n);
                                o && o.classList.remove(Z)
                            }
                        if (t) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !this._element.classList.contains(Z), j.trigger(i, "change")
                        }
                        i.focus(), e = !1
                    }
                }
                e && this._element.setAttribute("aria-pressed", !this._element.classList.contains(Z)), t && this._element.classList.toggle(Z)
            }, n.dispose = function() {
                E.removeData(this._element, X), this._element = null
            }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = E.getData(this, X);
                    n || (n = new t(this)), "toggle" === e && n[e]()
                })
            }, t._getInstance = function(t) {
                return E.getData(t, X)
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), t
        }();
    if (j.on(document, rt.CLICK_DATA_API, tt, function(t) {
            t.preventDefault();
            var e = t.target;
            e.classList.contains($) || (e = F.closest(e, ot));
            var n = E.getData(e, X);
            n || (n = new st(e), E.setData(e, X, n)), n.toggle()
        }), j.on(document, rt.FOCUS_DATA_API, tt, function(t) {
            F.closest(t.target, ot).classList.add(J)
        }), j.on(document, rt.BLUR_DATA_API, tt, function(t) {
            F.closest(t.target, ot).classList.remove(J)
        }), void 0 !== a) {
        var at = a.fn.button;
        a.fn.button = st._jQueryInterface, a.fn.button.Constructor = st, a.fn.button.noConflict = function() {
            return a.fn.button = at, st._jQueryInterface
        }
    }

    function lt(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }

    function ct(t) {
        return t.replace(/[A-Z]/g, function(t) {
            return t.toLowerCase()
        })
    }
    var ft = {
            setDataAttribute: function(t, e, n) {
                t.setAttribute("data-" + ct(e), n)
            },
            removeDataAttribute: function(t, e) {
                t.removeAttribute("data-" + ct(e))
            },
            getDataAttributes: function(t) {
                if (!t) return {};
                var e = i({}, t.dataset);
                return Object.keys(e).forEach(function(t) {
                    e[t] = lt(e[t])
                }), e
            },
            getDataAttribute: function(t, e) {
                return lt(t.getAttribute("data-" + ct(e)))
            },
            offset: function(t) {
                var e = t.getBoundingClientRect();
                return {
                    top: e.top + document.body.scrollTop,
                    left: e.left + document.body.scrollLeft
                }
            },
            position: function(t) {
                return {
                    top: t.offsetTop,
                    left: t.offsetLeft
                }
            },
            toggleClass: function(t, e) {
                t && (t.classList.contains(e) ? t.classList.remove(e) : t.classList.add(e))
            }
        },
        ut = "carousel",
        ht = "bs.carousel",
        dt = "." + ht,
        pt = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        gt = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        mt = "next",
        _t = "prev",
        vt = "left",
        bt = "right",
        Et = {
            SLIDE: "slide" + dt,
            SLID: "slid" + dt,
            KEYDOWN: "keydown" + dt,
            MOUSEENTER: "mouseenter" + dt,
            MOUSELEAVE: "mouseleave" + dt,
            TOUCHSTART: "touchstart" + dt,
            TOUCHMOVE: "touchmove" + dt,
            TOUCHEND: "touchend" + dt,
            POINTERDOWN: "pointerdown" + dt,
            POINTERUP: "pointerup" + dt,
            DRAG_START: "dragstart" + dt,
            LOAD_DATA_API: "load" + dt + ".data-api",
            CLICK_DATA_API: "click" + dt + ".data-api"
        },
        yt = "carousel",
        wt = "active",
        Dt = "slide",
        Tt = "carousel-item-right",
        It = "carousel-item-left",
        At = "carousel-item-next",
        Ot = "carousel-item-prev",
        Lt = "pointer-event",
        St = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            ITEM_IMG: ".carousel-item img",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        },
        Ct = {
            TOUCH: "touch",
            PEN: "pen"
        },
        Nt = function() {
            function t(t, e) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = F.findOne(St.INDICATORS, this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners(), E.setData(t, ht, this)
            }
            var n = t.prototype;
            return n.next = function() {
                this._isSliding || this._slide(mt)
            }, n.nextWhenVisible = function() {
                !document.hidden && m(this._element) && this.next()
            }, n.prev = function() {
                this._isSliding || this._slide(_t)
            }, n.pause = function(t) {
                t || (this._isPaused = !0), F.findOne(St.NEXT_PREV, this._element) && (u(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, n.cycle = function(t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, n.to = function(t) {
                var e = this;
                this._activeElement = F.findOne(St.ACTIVE_ITEM, this._element);
                var n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) j.one(this._element, Et.SLID, function() {
                        return e.to(t)
                    });
                    else {
                        if (n === t) return this.pause(), void this.cycle();
                        var i = t > n ? mt : _t;
                        this._slide(i, this._items[t])
                    }
            }, n.dispose = function() {
                j.off(this._element, dt), E.removeData(this._element, ht), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, n._getConfig = function(t) {
                return t = i({}, pt, t), p(ut, t, gt), t
            }, n._handleSwipe = function() {
                var t = Math.abs(this.touchDeltaX);
                if (!(t <= 40)) {
                    var e = t / this.touchDeltaX;
                    e > 0 && this.prev(), e < 0 && this.next()
                }
            }, n._addEventListeners = function() {
                var t = this;
                this._config.keyboard && j.on(this._element, Et.KEYDOWN, function(e) {
                    return t._keydown(e)
                }), "hover" === this._config.pause && (j.on(this._element, Et.MOUSEENTER, function(e) {
                    return t.pause(e)
                }), j.on(this._element, Et.MOUSELEAVE, function(e) {
                    return t.cycle(e)
                })), this._config.touch && this._addTouchEventListeners()
            }, n._addTouchEventListeners = function() {
                var t = this;
                if (this._touchSupported) {
                    var e = function(e) {
                            t._pointerEvent && Ct[e.pointerType.toUpperCase()] ? t.touchStartX = e.clientX : t._pointerEvent || (t.touchStartX = e.touches[0].clientX)
                        },
                        n = function(e) {
                            t._pointerEvent && Ct[e.pointerType.toUpperCase()] && (t.touchDeltaX = e.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function(e) {
                                return t.cycle(e)
                            }, 500 + t._config.interval))
                        };
                    g(F.find(St.ITEM_IMG, this._element)).forEach(function(t) {
                        j.on(t, Et.DRAG_START, function(t) {
                            return t.preventDefault()
                        })
                    }), this._pointerEvent ? (j.on(this._element, Et.POINTERDOWN, function(t) {
                        return e(t)
                    }), j.on(this._element, Et.POINTERUP, function(t) {
                        return n(t)
                    }), this._element.classList.add(Lt)) : (j.on(this._element, Et.TOUCHSTART, function(t) {
                        return e(t)
                    }), j.on(this._element, Et.TOUCHMOVE, function(e) {
                        return function(e) {
                            e.touches && e.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.touches[0].clientX - t.touchStartX
                        }(e)
                    }), j.on(this._element, Et.TOUCHEND, function(t) {
                        return n(t)
                    }))
                }
            }, n._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.which) {
                    case 37:
                        t.preventDefault(), this.prev();
                        break;
                    case 39:
                        t.preventDefault(), this.next()
                }
            }, n._getItemIndex = function(t) {
                return this._items = t && t.parentNode ? g(F.find(St.ITEM, t.parentNode)) : [], this._items.indexOf(t)
            }, n._getItemByDirection = function(t, e) {
                var n = t === mt,
                    i = t === _t,
                    o = this._getItemIndex(e),
                    r = this._items.length - 1;
                if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
                var s = (o + (t === _t ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, n._triggerSlideEvent = function(t, e) {
                var n = this._getItemIndex(t),
                    i = this._getItemIndex(F.findOne(St.ACTIVE_ITEM, this._element));
                return j.trigger(this._element, Et.SLIDE, {
                    relatedTarget: t,
                    direction: e,
                    from: i,
                    to: n
                })
            }, n._setActiveIndicatorElement = function(t) {
                if (this._indicatorsElement) {
                    for (var e = F.find(St.ACTIVE, this._indicatorsElement), n = 0; n < e.length; n++) e[n].classList.remove(wt);
                    var i = this._indicatorsElement.children[this._getItemIndex(t)];
                    i && i.classList.add(wt)
                }
            }, n._slide = function(t, e) {
                var n, i, o, r = this,
                    a = F.findOne(St.ACTIVE_ITEM, this._element),
                    l = this._getItemIndex(a),
                    c = e || a && this._getItemByDirection(t, a),
                    u = this._getItemIndex(c),
                    h = Boolean(this._interval);
                if (t === mt ? (n = It, i = At, o = vt) : (n = Tt, i = Ot, o = bt), c && c.classList.contains(wt)) this._isSliding = !1;
                else if (!this._triggerSlideEvent(c, o).defaultPrevented && a && c) {
                    if (this._isSliding = !0, h && this.pause(), this._setActiveIndicatorElement(c), this._element.classList.contains(Dt)) {
                        c.classList.add(i), v(c), a.classList.add(n), c.classList.add(n);
                        var p = parseInt(c.getAttribute("data-interval"), 10);
                        p ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = p) : this._config.interval = this._config.defaultInterval || this._config.interval;
                        var g = f(a);
                        j.one(a, s, function() {
                            c.classList.remove(n), c.classList.remove(i), c.classList.add(wt), a.classList.remove(wt), a.classList.remove(i), a.classList.remove(n), r._isSliding = !1, setTimeout(function() {
                                j.trigger(r._element, Et.SLID, {
                                    relatedTarget: c,
                                    direction: o,
                                    from: l,
                                    to: u
                                })
                            }, 0)
                        }), d(a, g)
                    } else a.classList.remove(wt), c.classList.add(wt), this._isSliding = !1, j.trigger(this._element, Et.SLID, {
                        relatedTarget: c,
                        direction: o,
                        from: l,
                        to: u
                    });
                    h && this.cycle()
                }
            }, t._carouselInterface = function(e, n) {
                var o = E.getData(e, ht),
                    r = i({}, pt, ft.getDataAttributes(e));
                "object" == typeof n && (r = i({}, r, n));
                var s = "string" == typeof n ? n : r.slide;
                if (o || (o = new t(e, r)), "number" == typeof n) o.to(n);
                else if ("string" == typeof s) {
                    if (void 0 === o[s]) throw new TypeError('No method named "' + s + '"');
                    o[s]()
                } else r.interval && r.ride && (o.pause(), o.cycle())
            }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    t._carouselInterface(this, e)
                })
            }, t._dataApiClickHandler = function(e) {
                var n = c(this);
                if (n) {
                    var o = F.findOne(n);
                    if (o && o.classList.contains(yt)) {
                        var r = i({}, ft.getDataAttributes(o), ft.getDataAttributes(this)),
                            s = this.getAttribute("data-slide-to");
                        s && (r.interval = !1), t._carouselInterface(o, r), s && E.getData(o, ht).to(s), e.preventDefault()
                    }
                }
            }, t._getInstance = function(t) {
                return E.getData(t, ht)
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return pt
                }
            }]), t
        }();
    if (j.on(document, Et.CLICK_DATA_API, St.DATA_SLIDE, Nt._dataApiClickHandler), j.on(window, Et.LOAD_DATA_API, function() {
            for (var t = g(F.find(St.DATA_RIDE)), e = 0, n = t.length; e < n; e++) Nt._carouselInterface(t[e], E.getData(t[e], ht))
        }), void 0 !== a) {
        var kt = a.fn[ut];
        a.fn[ut] = Nt._jQueryInterface, a.fn[ut].Constructor = Nt, a.fn[ut].noConflict = function() {
            return a.fn[ut] = kt, Nt._jQueryInterface
        }
    }
    var Pt = "collapse",
        xt = "bs.collapse",
        Ht = "." + xt,
        Mt = {
            toggle: !0,
            parent: ""
        },
        jt = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        Rt = {
            SHOW: "show" + Ht,
            SHOWN: "shown" + Ht,
            HIDE: "hide" + Ht,
            HIDDEN: "hidden" + Ht,
            CLICK_DATA_API: "click" + Ht + ".data-api"
        },
        Wt = "show",
        Ft = "collapse",
        Ut = "collapsing",
        Bt = "collapsed",
        Kt = "width",
        Vt = "height",
        Yt = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        },
        Qt = function() {
            function t(t, e) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = g(F.find('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                for (var n = g(F.find(Yt.DATA_TOGGLE)), i = 0, o = n.length; i < o; i++) {
                    var r = n[i],
                        s = c(r),
                        a = g(F.find(s)).filter(function(e) {
                            return e === t
                        });
                    null !== s && a.length && (this._selector = s, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle(), E.setData(t, xt, this)
            }
            var n = t.prototype;
            return n.toggle = function() {
                this._element.classList.contains(Wt) ? this.hide() : this.show()
            }, n.show = function() {
                var e = this;
                if (!this._isTransitioning && !this._element.classList.contains(Wt)) {
                    var n, i;
                    this._parent && 0 === (n = g(F.find(Yt.ACTIVES, this._parent)).filter(function(t) {
                        return "string" == typeof e._config.parent ? t.getAttribute("data-parent") === e._config.parent : t.classList.contains(Ft)
                    })).length && (n = null);
                    var o = F.findOne(this._selector);
                    if (n) {
                        var r = n.filter(function(t) {
                            return o !== t
                        });
                        if ((i = r[0] ? E.getData(r[0], xt) : null) && i._isTransitioning) return
                    }
                    if (!j.trigger(this._element, Rt.SHOW).defaultPrevented) {
                        n && n.forEach(function(e) {
                            o !== e && t._collapseInterface(e, "hide"), i || E.setData(e, xt, null)
                        });
                        var a = this._getDimension();
                        this._element.classList.remove(Ft), this._element.classList.add(Ut), this._element.style[a] = 0, this._triggerArray.length && this._triggerArray.forEach(function(t) {
                            t.classList.remove(Bt), t.setAttribute("aria-expanded", !0)
                        }), this.setTransitioning(!0);
                        var l = "scroll" + (a[0].toUpperCase() + a.slice(1)),
                            c = f(this._element);
                        j.one(this._element, s, function() {
                            e._element.classList.remove(Ut), e._element.classList.add(Ft), e._element.classList.add(Wt), e._element.style[a] = "", e.setTransitioning(!1), j.trigger(e._element, Rt.SHOWN)
                        }), d(this._element, c), this._element.style[a] = this._element[l] + "px"
                    }
                }
            }, n.hide = function() {
                var t = this;
                if (!this._isTransitioning && this._element.classList.contains(Wt) && !j.trigger(this._element, Rt.HIDE).defaultPrevented) {
                    var e = this._getDimension();
                    this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", v(this._element), this._element.classList.add(Ut), this._element.classList.remove(Ft), this._element.classList.remove(Wt);
                    var n = this._triggerArray.length;
                    if (n > 0)
                        for (var i = 0; i < n; i++) {
                            var o = this._triggerArray[i],
                                r = c(o);
                            if (null !== r) F.findOne(r).classList.contains(Wt) || (o.classList.add(Bt), o.setAttribute("aria-expanded", !1))
                        }
                    this.setTransitioning(!0);
                    this._element.style[e] = "";
                    var a = f(this._element);
                    j.one(this._element, s, function() {
                        t.setTransitioning(!1), t._element.classList.remove(Ut), t._element.classList.add(Ft), j.trigger(t._element, Rt.HIDDEN)
                    }), d(this._element, a)
                }
            }, n.setTransitioning = function(t) {
                this._isTransitioning = t
            }, n.dispose = function() {
                E.removeData(this._element, xt), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, n._getConfig = function(t) {
                return (t = i({}, Mt, t)).toggle = Boolean(t.toggle), p(Pt, t, jt), t
            }, n._getDimension = function() {
                return this._element.classList.contains(Kt) ? Kt : Vt
            }, n._getParent = function() {
                var e = this,
                    n = this._config.parent;
                h(n) ? void 0 === n.jquery && void 0 === n[0] || (n = n[0]) : n = F.findOne(n);
                var i = '[data-toggle="collapse"][data-parent="' + n + '"]';
                return g(F.find(i, n)).forEach(function(n) {
                    e._addAriaAndCollapsedClass(t._getTargetFromElement(n), [n])
                }), n
            }, n._addAriaAndCollapsedClass = function(t, e) {
                if (t) {
                    var n = t.classList.contains(Wt);
                    e.length && e.forEach(function(t) {
                        n ? t.classList.remove(Bt) : t.classList.add(Bt), t.setAttribute("aria-expanded", n)
                    })
                }
            }, t._getTargetFromElement = function(t) {
                var e = c(t);
                return e ? F.findOne(e) : null
            }, t._collapseInterface = function(e, n) {
                var o = E.getData(e, xt),
                    r = i({}, Mt, ft.getDataAttributes(e), "object" == typeof n && n ? n : {});
                if (!o && r.toggle && /show|hide/.test(n) && (r.toggle = !1), o || (o = new t(e, r)), "string" == typeof n) {
                    if (void 0 === o[n]) throw new TypeError('No method named "' + n + '"');
                    o[n]()
                }
            }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    t._collapseInterface(this, e)
                })
            }, t._getInstance = function(t) {
                return E.getData(t, xt)
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Mt
                }
            }]), t
        }();
    if (j.on(document, Rt.CLICK_DATA_API, Yt.DATA_TOGGLE, function(t) {
            "A" === t.target.tagName && t.preventDefault();
            var e = ft.getDataAttributes(this),
                n = c(this);
            g(F.find(n)).forEach(function(t) {
                var n, i = E.getData(t, xt);
                i ? (null === i._parent && "string" == typeof e.parent && (i._config.parent = e.parent, i._parent = i._getParent()), n = "toggle") : n = e, Qt._collapseInterface(t, n)
            })
        }), void 0 !== a) {
        var Gt = a.fn[Pt];
        a.fn[Pt] = Qt._jQueryInterface, a.fn[Pt].Constructor = Qt, a.fn[Pt].noConflict = function() {
            return a.fn[Pt] = Gt, Qt._jQueryInterface
        }
    }
    for (var qt = "undefined" != typeof window && "undefined" != typeof document, Xt = ["Edge", "Trident", "Firefox"], zt = 0, Zt = 0; Zt < Xt.length; Zt += 1)
        if (qt && navigator.userAgent.indexOf(Xt[Zt]) >= 0) {
            zt = 1;
            break
        }
    var $t = qt && window.Promise ? function(t) {
        var e = !1;
        return function() {
            e || (e = !0, window.Promise.resolve().then(function() {
                e = !1, t()
            }))
        }
    } : function(t) {
        var e = !1;
        return function() {
            e || (e = !0, setTimeout(function() {
                e = !1, t()
            }, zt))
        }
    };

    function Jt(t) {
        return t && "[object Function]" === {}.toString.call(t)
    }

    function te(t, e) {
        if (1 !== t.nodeType) return [];
        var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
        return e ? n[e] : n
    }

    function ee(t) {
        return "HTML" === t.nodeName ? t : t.parentNode || t.host
    }

    function ne(t) {
        if (!t) return document.body;
        switch (t.nodeName) {
            case "HTML":
            case "BODY":
                return t.ownerDocument.body;
            case "#document":
                return t.body
        }
        var e = te(t),
            n = e.overflow,
            i = e.overflowX,
            o = e.overflowY;
        return /(auto|scroll|overlay)/.test(n + o + i) ? t : ne(ee(t))
    }
    var ie = qt && !(!window.MSInputMethodContext || !document.documentMode),
        oe = qt && /MSIE 10/.test(navigator.userAgent);

    function re(t) {
        return 11 === t ? ie : 10 === t ? oe : ie || oe
    }

    function se(t) {
        if (!t) return document.documentElement;
        for (var e = re(10) ? document.body : null, n = t.offsetParent || null; n === e && t.nextElementSibling;) n = (t = t.nextElementSibling).offsetParent;
        var i = n && n.nodeName;
        return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === te(n, "position") ? se(n) : n : t ? t.ownerDocument.documentElement : document.documentElement
    }

    function ae(t) {
        return null !== t.parentNode ? ae(t.parentNode) : t
    }

    function le(t, e) {
        if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
        var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
            i = n ? t : e,
            o = n ? e : t,
            r = document.createRange();
        r.setStart(i, 0), r.setEnd(o, 0);
        var s, a, l = r.commonAncestorContainer;
        if (t !== l && e !== l || i.contains(o)) return "BODY" === (a = (s = l).nodeName) || "HTML" !== a && se(s.firstElementChild) !== s ? se(l) : l;
        var c = ae(t);
        return c.host ? le(c.host, e) : le(t, ae(e).host)
    }

    function ce(t) {
        var e = "top" === (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "top") ? "scrollTop" : "scrollLeft",
            n = t.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var i = t.ownerDocument.documentElement;
            return (t.ownerDocument.scrollingElement || i)[e]
        }
        return t[e]
    }

    function fe(t, e) {
        var n = "x" === e ? "Left" : "Top",
            i = "Left" === n ? "Right" : "Bottom";
        return parseFloat(t["border" + n + "Width"], 10) + parseFloat(t["border" + i + "Width"], 10)
    }

    function ue(t, e, n, i) {
        return Math.max(e["offset" + t], e["scroll" + t], n["client" + t], n["offset" + t], n["scroll" + t], re(10) ? parseInt(n["offset" + t]) + parseInt(i["margin" + ("Height" === t ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === t ? "Bottom" : "Right")]) : 0)
    }

    function he(t) {
        var e = t.body,
            n = t.documentElement,
            i = re(10) && getComputedStyle(n);
        return {
            height: ue("Height", e, n, i),
            width: ue("Width", e, n, i)
        }
    }
    var de = function(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
        },
        pe = function() {
            function t(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                }
            }
            return function(e, n, i) {
                return n && t(e.prototype, n), i && t(e, i), e
            }
        }(),
        ge = function(t, e, n) {
            return e in t ? Object.defineProperty(t, e, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : t[e] = n, t
        },
        me = Object.assign || function(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e];
                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
            }
            return t
        };

    function _e(t) {
        return me({}, t, {
            right: t.left + t.width,
            bottom: t.top + t.height
        })
    }

    function ve(t) {
        var e = {};
        try {
            if (re(10)) {
                e = t.getBoundingClientRect();
                var n = ce(t, "top"),
                    i = ce(t, "left");
                e.top += n, e.left += i, e.bottom += n, e.right += i
            } else e = t.getBoundingClientRect()
        } catch (t) {}
        var o = {
                left: e.left,
                top: e.top,
                width: e.right - e.left,
                height: e.bottom - e.top
            },
            r = "HTML" === t.nodeName ? he(t.ownerDocument) : {},
            s = r.width || t.clientWidth || o.right - o.left,
            a = r.height || t.clientHeight || o.bottom - o.top,
            l = t.offsetWidth - s,
            c = t.offsetHeight - a;
        if (l || c) {
            var f = te(t);
            l -= fe(f, "x"), c -= fe(f, "y"), o.width -= l, o.height -= c
        }
        return _e(o)
    }

    function be(t, e) {
        var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = re(10),
            o = "HTML" === e.nodeName,
            r = ve(t),
            s = ve(e),
            a = ne(t),
            l = te(e),
            c = parseFloat(l.borderTopWidth, 10),
            f = parseFloat(l.borderLeftWidth, 10);
        n && o && (s.top = Math.max(s.top, 0), s.left = Math.max(s.left, 0));
        var u = _e({
            top: r.top - s.top - c,
            left: r.left - s.left - f,
            width: r.width,
            height: r.height
        });
        if (u.marginTop = 0, u.marginLeft = 0, !i && o) {
            var h = parseFloat(l.marginTop, 10),
                d = parseFloat(l.marginLeft, 10);
            u.top -= c - h, u.bottom -= c - h, u.left -= f - d, u.right -= f - d, u.marginTop = h, u.marginLeft = d
        }
        return (i && !n ? e.contains(a) : e === a && "BODY" !== a.nodeName) && (u = function(t, e) {
            var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = ce(e, "top"),
                o = ce(e, "left"),
                r = n ? -1 : 1;
            return t.top += i * r, t.bottom += i * r, t.left += o * r, t.right += o * r, t
        }(u, e)), u
    }

    function Ee(t) {
        if (!t || !t.parentElement || re()) return document.documentElement;
        for (var e = t.parentElement; e && "none" === te(e, "transform");) e = e.parentElement;
        return e || document.documentElement
    }

    function ye(t, e, n, i) {
        var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
            r = {
                top: 0,
                left: 0
            },
            s = o ? Ee(t) : le(t, e);
        if ("viewport" === i) r = function(t) {
            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                n = t.ownerDocument.documentElement,
                i = be(t, n),
                o = Math.max(n.clientWidth, window.innerWidth || 0),
                r = Math.max(n.clientHeight, window.innerHeight || 0),
                s = e ? 0 : ce(n),
                a = e ? 0 : ce(n, "left");
            return _e({
                top: s - i.top + i.marginTop,
                left: a - i.left + i.marginLeft,
                width: o,
                height: r
            })
        }(s, o);
        else {
            var a = void 0;
            "scrollParent" === i ? "BODY" === (a = ne(ee(e))).nodeName && (a = t.ownerDocument.documentElement) : a = "window" === i ? t.ownerDocument.documentElement : i;
            var l = be(a, s, o);
            if ("HTML" !== a.nodeName || function t(e) {
                    var n = e.nodeName;
                    if ("BODY" === n || "HTML" === n) return !1;
                    if ("fixed" === te(e, "position")) return !0;
                    var i = ee(e);
                    return !!i && t(i)
                }(s)) r = l;
            else {
                var c = he(t.ownerDocument),
                    f = c.height,
                    u = c.width;
                r.top += l.top - l.marginTop, r.bottom = f + l.top, r.left += l.left - l.marginLeft, r.right = u + l.left
            }
        }
        var h = "number" == typeof(n = n || 0);
        return r.left += h ? n : n.left || 0, r.top += h ? n : n.top || 0, r.right -= h ? n : n.right || 0, r.bottom -= h ? n : n.bottom || 0, r
    }

    function we(t, e, n, i, o) {
        var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === t.indexOf("auto")) return t;
        var s = ye(n, i, r, o),
            a = {
                top: {
                    width: s.width,
                    height: e.top - s.top
                },
                right: {
                    width: s.right - e.right,
                    height: s.height
                },
                bottom: {
                    width: s.width,
                    height: s.bottom - e.bottom
                },
                left: {
                    width: e.left - s.left,
                    height: s.height
                }
            },
            l = Object.keys(a).map(function(t) {
                return me({
                    key: t
                }, a[t], {
                    area: (e = a[t], e.width * e.height)
                });
                var e
            }).sort(function(t, e) {
                return e.area - t.area
            }),
            c = l.filter(function(t) {
                var e = t.width,
                    i = t.height;
                return e >= n.clientWidth && i >= n.clientHeight
            }),
            f = c.length > 0 ? c[0].key : l[0].key,
            u = t.split("-")[1];
        return f + (u ? "-" + u : "")
    }

    function De(t, e, n) {
        var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null;
        return be(n, i ? Ee(e) : le(e, n), i)
    }

    function Te(t) {
        var e = t.ownerDocument.defaultView.getComputedStyle(t),
            n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
            i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
        return {
            width: t.offsetWidth + i,
            height: t.offsetHeight + n
        }
    }

    function Ie(t) {
        var e = {
            left: "right",
            right: "left",
            bottom: "top",
            top: "bottom"
        };
        return t.replace(/left|right|bottom|top/g, function(t) {
            return e[t]
        })
    }

    function Ae(t, e, n) {
        n = n.split("-")[0];
        var i = Te(t),
            o = {
                width: i.width,
                height: i.height
            },
            r = -1 !== ["right", "left"].indexOf(n),
            s = r ? "top" : "left",
            a = r ? "left" : "top",
            l = r ? "height" : "width",
            c = r ? "width" : "height";
        return o[s] = e[s] + e[l] / 2 - i[l] / 2, o[a] = n === a ? e[a] - i[c] : e[Ie(a)], o
    }

    function Oe(t, e) {
        return Array.prototype.find ? t.find(e) : t.filter(e)[0]
    }

    function Le(t, e, n) {
        return (void 0 === n ? t : t.slice(0, function(t, e, n) {
            if (Array.prototype.findIndex) return t.findIndex(function(t) {
                return t[e] === n
            });
            var i = Oe(t, function(t) {
                return t[e] === n
            });
            return t.indexOf(i)
        }(t, "name", n))).forEach(function(t) {
            t.function && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = t.function || t.fn;
            t.enabled && Jt(n) && (e.offsets.popper = _e(e.offsets.popper), e.offsets.reference = _e(e.offsets.reference), e = n(e, t))
        }), e
    }

    function Se(t, e) {
        return t.some(function(t) {
            var n = t.name;
            return t.enabled && n === e
        })
    }

    function Ce(t) {
        for (var e = [!1, "ms", "Webkit", "Moz", "O"], n = t.charAt(0).toUpperCase() + t.slice(1), i = 0; i < e.length; i++) {
            var o = e[i],
                r = o ? "" + o + n : t;
            if (void 0 !== document.body.style[r]) return r
        }
        return null
    }

    function Ne(t) {
        var e = t.ownerDocument;
        return e ? e.defaultView : window
    }

    function ke(t, e, n, i) {
        n.updateBound = i, Ne(t).addEventListener("resize", n.updateBound, {
            passive: !0
        });
        var o = ne(t);
        return function t(e, n, i, o) {
            var r = "BODY" === e.nodeName,
                s = r ? e.ownerDocument.defaultView : e;
            s.addEventListener(n, i, {
                passive: !0
            }), r || t(ne(s.parentNode), n, i, o), o.push(s)
        }(o, "scroll", n.updateBound, n.scrollParents), n.scrollElement = o, n.eventsEnabled = !0, n
    }

    function Pe() {
        var t, e;
        this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate), this.state = (t = this.reference, e = this.state, Ne(t).removeEventListener("resize", e.updateBound), e.scrollParents.forEach(function(t) {
            t.removeEventListener("scroll", e.updateBound)
        }), e.updateBound = null, e.scrollParents = [], e.scrollElement = null, e.eventsEnabled = !1, e))
    }

    function xe(t) {
        return "" !== t && !isNaN(parseFloat(t)) && isFinite(t)
    }

    function He(t, e) {
        Object.keys(e).forEach(function(n) {
            var i = ""; - 1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(n) && xe(e[n]) && (i = "px"), t.style[n] = e[n] + i
        })
    }
    var Me = qt && /Firefox/i.test(navigator.userAgent);

    function je(t, e, n) {
        var i = Oe(t, function(t) {
                return t.name === e
            }),
            o = !!i && t.some(function(t) {
                return t.name === n && t.enabled && t.order < i.order
            });
        if (!o) {
            var r = "`" + e + "`",
                s = "`" + n + "`";
            console.warn(s + " modifier is required by " + r + " modifier in order to work, be sure to include it before " + r + "!")
        }
        return o
    }
    var Re = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        We = Re.slice(3);

    function Fe(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = We.indexOf(t),
            i = We.slice(n + 1).concat(We.slice(0, n));
        return e ? i.reverse() : i
    }
    var Ue = {
        FLIP: "flip",
        CLOCKWISE: "clockwise",
        COUNTERCLOCKWISE: "counterclockwise"
    };

    function Be(t, e, n, i) {
        var o = [0, 0],
            r = -1 !== ["right", "left"].indexOf(i),
            s = t.split(/(\+|\-)/).map(function(t) {
                return t.trim()
            }),
            a = s.indexOf(Oe(s, function(t) {
                return -1 !== t.search(/,|\s/)
            }));
        s[a] && -1 === s[a].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            c = -1 !== a ? [s.slice(0, a).concat([s[a].split(l)[0]]), [s[a].split(l)[1]].concat(s.slice(a + 1))] : [s];
        return (c = c.map(function(t, i) {
            var o = (1 === i ? !r : r) ? "height" : "width",
                s = !1;
            return t.reduce(function(t, e) {
                return "" === t[t.length - 1] && -1 !== ["+", "-"].indexOf(e) ? (t[t.length - 1] = e, s = !0, t) : s ? (t[t.length - 1] += e, s = !1, t) : t.concat(e)
            }, []).map(function(t) {
                return function(t, e, n, i) {
                    var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                        r = +o[1],
                        s = o[2];
                    if (!r) return t;
                    if (0 === s.indexOf("%")) {
                        var a = void 0;
                        switch (s) {
                            case "%p":
                                a = n;
                                break;
                            case "%":
                            case "%r":
                            default:
                                a = i
                        }
                        return _e(a)[e] / 100 * r
                    }
                    if ("vh" === s || "vw" === s) return ("vh" === s ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r;
                    return r
                }(t, o, e, n)
            })
        })).forEach(function(t, e) {
            t.forEach(function(n, i) {
                xe(n) && (o[e] += n * ("-" === t[i - 1] ? -1 : 1))
            })
        }), o
    }
    var Ke = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = e.split("-")[1];
                        if (i) {
                            var o = t.offsets,
                                r = o.reference,
                                s = o.popper,
                                a = -1 !== ["bottom", "top"].indexOf(n),
                                l = a ? "left" : "top",
                                c = a ? "width" : "height",
                                f = {
                                    start: ge({}, l, r[l]),
                                    end: ge({}, l, r[l] + r[c] - s[c])
                                };
                            t.offsets.popper = me({}, s, f[i])
                        }
                        return t
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.offset,
                            i = t.placement,
                            o = t.offsets,
                            r = o.popper,
                            s = o.reference,
                            a = i.split("-")[0],
                            l = void 0;
                        return l = xe(+n) ? [+n, 0] : Be(n, r, s, a), "left" === a ? (r.top += l[0], r.left -= l[1]) : "right" === a ? (r.top += l[0], r.left += l[1]) : "top" === a ? (r.left += l[0], r.top -= l[1]) : "bottom" === a && (r.left += l[0], r.top += l[1]), t.popper = r, t
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.boundariesElement || se(t.instance.popper);
                        t.instance.reference === n && (n = se(n));
                        var i = Ce("transform"),
                            o = t.instance.popper.style,
                            r = o.top,
                            s = o.left,
                            a = o[i];
                        o.top = "", o.left = "", o[i] = "";
                        var l = ye(t.instance.popper, t.instance.reference, e.padding, n, t.positionFixed);
                        o.top = r, o.left = s, o[i] = a, e.boundaries = l;
                        var c = e.priority,
                            f = t.offsets.popper,
                            u = {
                                primary: function(t) {
                                    var n = f[t];
                                    return f[t] < l[t] && !e.escapeWithReference && (n = Math.max(f[t], l[t])), ge({}, t, n)
                                },
                                secondary: function(t) {
                                    var n = "right" === t ? "left" : "top",
                                        i = f[n];
                                    return f[t] > l[t] && !e.escapeWithReference && (i = Math.min(f[n], l[t] - ("right" === t ? f.width : f.height))), ge({}, n, i)
                                }
                            };
                        return c.forEach(function(t) {
                            var e = -1 !== ["left", "top"].indexOf(t) ? "primary" : "secondary";
                            f = me({}, f, u[e](t))
                        }), t.offsets.popper = f, t
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(t) {
                        var e = t.offsets,
                            n = e.popper,
                            i = e.reference,
                            o = t.placement.split("-")[0],
                            r = Math.floor,
                            s = -1 !== ["top", "bottom"].indexOf(o),
                            a = s ? "right" : "bottom",
                            l = s ? "left" : "top",
                            c = s ? "width" : "height";
                        return n[a] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[c]), n[l] > r(i[a]) && (t.offsets.popper[l] = r(i[a])), t
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(t, e) {
                        var n;
                        if (!je(t.instance.modifiers, "arrow", "keepTogether")) return t;
                        var i = e.element;
                        if ("string" == typeof i) {
                            if (!(i = t.instance.popper.querySelector(i))) return t
                        } else if (!t.instance.popper.contains(i)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), t;
                        var o = t.placement.split("-")[0],
                            r = t.offsets,
                            s = r.popper,
                            a = r.reference,
                            l = -1 !== ["left", "right"].indexOf(o),
                            c = l ? "height" : "width",
                            f = l ? "Top" : "Left",
                            u = f.toLowerCase(),
                            h = l ? "left" : "top",
                            d = l ? "bottom" : "right",
                            p = Te(i)[c];
                        a[d] - p < s[u] && (t.offsets.popper[u] -= s[u] - (a[d] - p)), a[u] + p > s[d] && (t.offsets.popper[u] += a[u] + p - s[d]), t.offsets.popper = _e(t.offsets.popper);
                        var g = a[u] + a[c] / 2 - p / 2,
                            m = te(t.instance.popper),
                            _ = parseFloat(m["margin" + f], 10),
                            v = parseFloat(m["border" + f + "Width"], 10),
                            b = g - t.offsets.popper[u] - _ - v;
                        return b = Math.max(Math.min(s[c] - p, b), 0), t.arrowElement = i, t.offsets.arrow = (ge(n = {}, u, Math.round(b)), ge(n, h, ""), n), t
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(t, e) {
                        if (Se(t.instance.modifiers, "inner")) return t;
                        if (t.flipped && t.placement === t.originalPlacement) return t;
                        var n = ye(t.instance.popper, t.instance.reference, e.padding, e.boundariesElement, t.positionFixed),
                            i = t.placement.split("-")[0],
                            o = Ie(i),
                            r = t.placement.split("-")[1] || "",
                            s = [];
                        switch (e.behavior) {
                            case Ue.FLIP:
                                s = [i, o];
                                break;
                            case Ue.CLOCKWISE:
                                s = Fe(i);
                                break;
                            case Ue.COUNTERCLOCKWISE:
                                s = Fe(i, !0);
                                break;
                            default:
                                s = e.behavior
                        }
                        return s.forEach(function(a, l) {
                            if (i !== a || s.length === l + 1) return t;
                            i = t.placement.split("-")[0], o = Ie(i);
                            var c = t.offsets.popper,
                                f = t.offsets.reference,
                                u = Math.floor,
                                h = "left" === i && u(c.right) > u(f.left) || "right" === i && u(c.left) < u(f.right) || "top" === i && u(c.bottom) > u(f.top) || "bottom" === i && u(c.top) < u(f.bottom),
                                d = u(c.left) < u(n.left),
                                p = u(c.right) > u(n.right),
                                g = u(c.top) < u(n.top),
                                m = u(c.bottom) > u(n.bottom),
                                _ = "left" === i && d || "right" === i && p || "top" === i && g || "bottom" === i && m,
                                v = -1 !== ["top", "bottom"].indexOf(i),
                                b = !!e.flipVariations && (v && "start" === r && d || v && "end" === r && p || !v && "start" === r && g || !v && "end" === r && m);
                            (h || _ || b) && (t.flipped = !0, (h || _) && (i = s[l + 1]), b && (r = function(t) {
                                return "end" === t ? "start" : "start" === t ? "end" : t
                            }(r)), t.placement = i + (r ? "-" + r : ""), t.offsets.popper = me({}, t.offsets.popper, Ae(t.instance.popper, t.offsets.reference, t.placement)), t = Le(t.instance.modifiers, t, "flip"))
                        }), t
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport"
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(t) {
                        var e = t.placement,
                            n = e.split("-")[0],
                            i = t.offsets,
                            o = i.popper,
                            r = i.reference,
                            s = -1 !== ["left", "right"].indexOf(n),
                            a = -1 === ["top", "left"].indexOf(n);
                        return o[s ? "left" : "top"] = r[n] - (a ? o[s ? "width" : "height"] : 0), t.placement = Ie(e), t.offsets.popper = _e(o), t
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(t) {
                        if (!je(t.instance.modifiers, "hide", "preventOverflow")) return t;
                        var e = t.offsets.reference,
                            n = Oe(t.instance.modifiers, function(t) {
                                return "preventOverflow" === t.name
                            }).boundaries;
                        if (e.bottom < n.top || e.left > n.right || e.top > n.bottom || e.right < n.left) {
                            if (!0 === t.hide) return t;
                            t.hide = !0, t.attributes["x-out-of-boundaries"] = ""
                        } else {
                            if (!1 === t.hide) return t;
                            t.hide = !1, t.attributes["x-out-of-boundaries"] = !1
                        }
                        return t
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(t, e) {
                        var n = e.x,
                            i = e.y,
                            o = t.offsets.popper,
                            r = Oe(t.instance.modifiers, function(t) {
                                return "applyStyle" === t.name
                            }).gpuAcceleration;
                        void 0 !== r && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                        var s = void 0 !== r ? r : e.gpuAcceleration,
                            a = se(t.instance.popper),
                            l = ve(a),
                            c = {
                                position: o.position
                            },
                            f = function(t, e) {
                                var n = t.offsets,
                                    i = n.popper,
                                    o = n.reference,
                                    r = Math.round,
                                    s = Math.floor,
                                    a = function(t) {
                                        return t
                                    },
                                    l = r(o.width),
                                    c = r(i.width),
                                    f = -1 !== ["left", "right"].indexOf(t.placement),
                                    u = -1 !== t.placement.indexOf("-"),
                                    h = e ? f || u || l % 2 == c % 2 ? r : s : a,
                                    d = e ? r : a;
                                return {
                                    left: h(l % 2 == 1 && c % 2 == 1 && !u && e ? i.left - 1 : i.left),
                                    top: d(i.top),
                                    bottom: d(i.bottom),
                                    right: h(i.right)
                                }
                            }(t, window.devicePixelRatio < 2 || !Me),
                            u = "bottom" === n ? "top" : "bottom",
                            h = "right" === i ? "left" : "right",
                            d = Ce("transform"),
                            p = void 0,
                            g = void 0;
                        if (g = "bottom" === u ? "HTML" === a.nodeName ? -a.clientHeight + f.bottom : -l.height + f.bottom : f.top, p = "right" === h ? "HTML" === a.nodeName ? -a.clientWidth + f.right : -l.width + f.right : f.left, s && d) c[d] = "translate3d(" + p + "px, " + g + "px, 0)", c[u] = 0, c[h] = 0, c.willChange = "transform";
                        else {
                            var m = "bottom" === u ? -1 : 1,
                                _ = "right" === h ? -1 : 1;
                            c[u] = g * m, c[h] = p * _, c.willChange = u + ", " + h
                        }
                        var v = {
                            "x-placement": t.placement
                        };
                        return t.attributes = me({}, v, t.attributes), t.styles = me({}, c, t.styles), t.arrowStyles = me({}, t.offsets.arrow, t.arrowStyles), t
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(t) {
                        var e, n;
                        return He(t.instance.popper, t.styles), e = t.instance.popper, n = t.attributes, Object.keys(n).forEach(function(t) {
                            !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t)
                        }), t.arrowElement && Object.keys(t.arrowStyles).length && He(t.arrowElement, t.arrowStyles), t
                    },
                    onLoad: function(t, e, n, i, o) {
                        var r = De(o, e, t, n.positionFixed),
                            s = we(n.placement, r, e, t, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding);
                        return e.setAttribute("x-placement", s), He(e, {
                            position: n.positionFixed ? "fixed" : "absolute"
                        }), n
                    },
                    gpuAcceleration: void 0
                }
            }
        },
        Ve = function() {
            function t(e, n) {
                var i = this,
                    o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                de(this, t), this.scheduleUpdate = function() {
                    return requestAnimationFrame(i.update)
                }, this.update = $t(this.update.bind(this)), this.options = me({}, t.Defaults, o), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = e && e.jquery ? e[0] : e, this.popper = n && n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(me({}, t.Defaults.modifiers, o.modifiers)).forEach(function(e) {
                    i.options.modifiers[e] = me({}, t.Defaults.modifiers[e] || {}, o.modifiers ? o.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function(t) {
                    return me({
                        name: t
                    }, i.options.modifiers[t])
                }).sort(function(t, e) {
                    return t.order - e.order
                }), this.modifiers.forEach(function(t) {
                    t.enabled && Jt(t.onLoad) && t.onLoad(i.reference, i.popper, i.options, t, i.state)
                }), this.update();
                var r = this.options.eventsEnabled;
                r && this.enableEventListeners(), this.state.eventsEnabled = r
            }
            return pe(t, [{
                key: "update",
                value: function() {
                    return function() {
                        if (!this.state.isDestroyed) {
                            var t = {
                                instance: this,
                                styles: {},
                                arrowStyles: {},
                                attributes: {},
                                flipped: !1,
                                offsets: {}
                            };
                            t.offsets.reference = De(this.state, this.popper, this.reference, this.options.positionFixed), t.placement = we(this.options.placement, t.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), t.originalPlacement = t.placement, t.positionFixed = this.options.positionFixed, t.offsets.popper = Ae(this.popper, t.offsets.reference, t.placement), t.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute", t = Le(this.modifiers, t), this.state.isCreated ? this.options.onUpdate(t) : (this.state.isCreated = !0, this.options.onCreate(t))
                        }
                    }.call(this)
                }
            }, {
                key: "destroy",
                value: function() {
                    return function() {
                        return this.state.isDestroyed = !0, Se(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.position = "", this.popper.style.top = "", this.popper.style.left = "", this.popper.style.right = "", this.popper.style.bottom = "", this.popper.style.willChange = "", this.popper.style[Ce("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
                    }.call(this)
                }
            }, {
                key: "enableEventListeners",
                value: function() {
                    return function() {
                        this.state.eventsEnabled || (this.state = ke(this.reference, this.options, this.state, this.scheduleUpdate))
                    }.call(this)
                }
            }, {
                key: "disableEventListeners",
                value: function() {
                    return Pe.call(this)
                }
            }]), t
        }();
    Ve.Utils = ("undefined" != typeof window ? window : global).PopperUtils, Ve.placements = Re, Ve.Defaults = Ke;
    var Ye = "dropdown",
        Qe = "bs.dropdown",
        Ge = "." + Qe,
        qe = new RegExp("38|40|27"),
        Xe = {
            HIDE: "hide" + Ge,
            HIDDEN: "hidden" + Ge,
            SHOW: "show" + Ge,
            SHOWN: "shown" + Ge,
            CLICK: "click" + Ge,
            CLICK_DATA_API: "click" + Ge + ".data-api",
            KEYDOWN_DATA_API: "keydown" + Ge + ".data-api",
            KEYUP_DATA_API: "keyup" + Ge + ".data-api"
        },
        ze = "disabled",
        Ze = "show",
        $e = "dropup",
        Je = "dropright",
        tn = "dropleft",
        en = "dropdown-menu-right",
        nn = "position-static",
        on = '[data-toggle="dropdown"]',
        rn = ".dropdown form",
        sn = ".dropdown-menu",
        an = ".navbar-nav",
        ln = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
        cn = "top-start",
        fn = "top-end",
        un = "bottom-start",
        hn = "bottom-end",
        dn = "right-start",
        pn = "left-start",
        gn = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        },
        mn = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        },
        _n = function() {
            function t(t, e) {
                this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners(), E.setData(t, Qe, this)
            }
            var n = t.prototype;
            return n.toggle = function() {
                if (!this._element.disabled && !this._element.classList.contains(ze)) {
                    var e = t._getParentFromElement(this._element),
                        n = this._menu.classList.contains(Ze);
                    if (t._clearMenus(), !n) {
                        var i = {
                            relatedTarget: this._element
                        };
                        if (!j.trigger(e, Xe.SHOW, i).defaultPrevented) {
                            if (!this._inNavbar) {
                                if (void 0 === Ve) throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org)");
                                var o = this._element;
                                "parent" === this._config.reference ? o = e : h(this._config.reference) && (o = this._config.reference, void 0 !== this._config.reference.jquery && (o = this._config.reference[0])), "scrollParent" !== this._config.boundary && e.classList.add(nn), this._popper = new Ve(o, this._menu, this._getPopperConfig())
                            }
                            "ontouchstart" in document.documentElement && !g(F.closest(e, an)).length && g(document.body.children).forEach(function(t) {
                                return j.on(t, "mouseover", null, function() {})
                            }), this._element.focus(), this._element.setAttribute("aria-expanded", !0), ft.toggleClass(this._menu, Ze), ft.toggleClass(e, Ze), j.trigger(e, Xe.SHOWN, i)
                        }
                    }
                }
            }, n.show = function() {
                if (!(this._element.disabled || this._element.classList.contains(ze) || this._menu.classList.contains(Ze))) {
                    var e = t._getParentFromElement(this._element),
                        n = {
                            relatedTarget: this._element
                        };
                    j.trigger(e, Xe.SHOW, n).defaultPrevented || (ft.toggleClass(this._menu, Ze), ft.toggleClass(e, Ze), j.trigger(e, Xe.SHOWN, n))
                }
            }, n.hide = function() {
                if (!this._element.disabled && !this._element.classList.contains(ze) && this._menu.classList.contains(Ze)) {
                    var e = t._getParentFromElement(this._element),
                        n = {
                            relatedTarget: this._element
                        };
                    j.trigger(e, Xe.HIDE, n).defaultPrevented || (ft.toggleClass(this._menu, Ze), ft.toggleClass(e, Ze), j.trigger(e, Xe.HIDDEN, n))
                }
            }, n.dispose = function() {
                E.removeData(this._element, Qe), j.off(this._element, Ge), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
            }, n.update = function() {
                this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
            }, n._addEventListeners = function() {
                var t = this;
                j.on(this._element, Xe.CLICK, function(e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle()
                })
            }, n._getConfig = function(t) {
                return t = i({}, this.constructor.Default, ft.getDataAttributes(this._element), t), p(Ye, t, this.constructor.DefaultType), t
            }, n._getMenuElement = function() {
                if (!this._menu) {
                    var e = t._getParentFromElement(this._element);
                    e && (this._menu = F.findOne(sn, e))
                }
                return this._menu
            }, n._getPlacement = function() {
                var t = this._element.parentNode,
                    e = un;
                return t.classList.contains($e) ? (e = cn, this._menu.classList.contains(en) && (e = fn)) : t.classList.contains(Je) ? e = dn : t.classList.contains(tn) ? e = pn : this._menu.classList.contains(en) && (e = hn), e
            }, n._detectNavbar = function() {
                return Boolean(F.closest(this._element, ".navbar"))
            }, n._getOffset = function() {
                var t = this,
                    e = {};
                return "function" == typeof this._config.offset ? e.fn = function(e) {
                    return e.offsets = i({}, e.offsets, t._config.offset(e.offsets, t._element) || {}), e
                } : e.offset = this._config.offset, e
            }, n._getPopperConfig = function() {
                var t = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: this._getOffset(),
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                return "static" === this._config.display && (t.modifiers.applyStyle = {
                    enabled: !1
                }), t
            }, t._dropdownInterface = function(e, n) {
                var i = E.getData(e, Qe);
                if (i || (i = new t(e, "object" == typeof n ? n : null)), "string" == typeof n) {
                    if (void 0 === i[n]) throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    t._dropdownInterface(this, e)
                })
            }, t._clearMenus = function(e) {
                if (!e || 3 !== e.which && ("keyup" !== e.type || 9 === e.which))
                    for (var n = g(F.find(on)), i = 0, o = n.length; i < o; i++) {
                        var r = t._getParentFromElement(n[i]),
                            s = E.getData(n[i], Qe),
                            a = {
                                relatedTarget: n[i]
                            };
                        if (e && "click" === e.type && (a.clickEvent = e), s) {
                            var l = s._menu;
                            if (r.classList.contains(Ze))
                                if (!(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && 9 === e.which) && r.contains(e.target))) j.trigger(r, Xe.HIDE, a).defaultPrevented || ("ontouchstart" in document.documentElement && g(document.body.children).forEach(function(t) {
                                    return j.off(t, "mouseover", null, function() {})
                                }), n[i].setAttribute("aria-expanded", "false"), l.classList.remove(Ze), r.classList.remove(Ze), j.trigger(r, Xe.HIDDEN, a))
                        }
                    }
            }, t._getParentFromElement = function(t) {
                var e, n = c(t);
                return n && (e = F.findOne(n)), e || t.parentNode
            }, t._dataApiKeydownHandler = function(e) {
                if ((/input|textarea/i.test(e.target.tagName) ? !(32 === e.which || 27 !== e.which && (40 !== e.which && 38 !== e.which || F.closest(e.target, sn))) : qe.test(e.which)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !this.classList.contains(ze))) {
                    var n = t._getParentFromElement(this),
                        i = n.classList.contains(Ze);
                    if (!i || i && (27 === e.which || 32 === e.which)) return 27 === e.which && j.trigger(F.findOne(on, n), "focus"), void t._clearMenus();
                    var o = g(F.find(ln, n));
                    if (o.length) {
                        var r = o.indexOf(e.target);
                        38 === e.which && r > 0 && r--, 40 === e.which && r < o.length - 1 && r++, r < 0 && (r = 0), o[r].focus()
                    }
                }
            }, t._getInstance = function(t) {
                return E.getData(t, Qe)
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return gn
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return mn
                }
            }]), t
        }();
    if (j.on(document, Xe.KEYDOWN_DATA_API, on, _n._dataApiKeydownHandler), j.on(document, Xe.KEYDOWN_DATA_API, sn, _n._dataApiKeydownHandler), j.on(document, Xe.CLICK_DATA_API, _n._clearMenus), j.on(document, Xe.KEYUP_DATA_API, _n._clearMenus), j.on(document, Xe.CLICK_DATA_API, on, function(t) {
            t.preventDefault(), t.stopPropagation(), _n._dropdownInterface(this, "toggle")
        }), j.on(document, Xe.CLICK_DATA_API, rn, function(t) {
            return t.stopPropagation()
        }), void 0 !== a) {
        var vn = a.fn[Ye];
        a.fn[Ye] = _n._jQueryInterface, a.fn[Ye].Constructor = _n, a.fn[Ye].noConflict = function() {
            return a.fn[Ye] = vn, _n._jQueryInterface
        }
    }
    var bn = "bs.modal",
        En = "." + bn,
        yn = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        wn = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        Dn = {
            HIDE: "hide" + En,
            HIDDEN: "hidden" + En,
            SHOW: "show" + En,
            SHOWN: "shown" + En,
            FOCUSIN: "focusin" + En,
            RESIZE: "resize" + En,
            CLICK_DISMISS: "click.dismiss" + En,
            KEYDOWN_DISMISS: "keydown.dismiss" + En,
            MOUSEUP_DISMISS: "mouseup.dismiss" + En,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + En,
            CLICK_DATA_API: "click" + En + ".data-api"
        },
        Tn = "modal-dialog-scrollable",
        In = "modal-scrollbar-measure",
        An = "modal-backdrop",
        On = "modal-open",
        Ln = "fade",
        Sn = "show",
        Cn = {
            DIALOG: ".modal-dialog",
            MODAL_BODY: ".modal-body",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top"
        },
        Nn = function() {
            function t(t, e) {
                this._config = this._getConfig(e), this._element = t, this._dialog = F.findOne(Cn.DIALOG, t), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0, E.setData(t, bn, this)
            }
            var n = t.prototype;
            return n.toggle = function(t) {
                return this._isShown ? this.hide() : this.show(t)
            }, n.show = function(t) {
                var e = this;
                if (!this._isShown && !this._isTransitioning) {
                    this._element.classList.contains(Ln) && (this._isTransitioning = !0);
                    var n = j.trigger(this._element, Dn.SHOW, {
                        relatedTarget: t
                    });
                    this._isShown || n.defaultPrevented || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), j.on(this._element, Dn.CLICK_DISMISS, Cn.DATA_DISMISS, function(t) {
                        return e.hide(t)
                    }), j.on(this._dialog, Dn.MOUSEDOWN_DISMISS, function() {
                        j.one(e._element, Dn.MOUSEUP_DISMISS, function(t) {
                            t.target === e._element && (e._ignoreBackdropClick = !0)
                        })
                    }), this._showBackdrop(function() {
                        return e._showElement(t)
                    }))
                }
            }, n.hide = function(t) {
                var e = this;
                if (t && t.preventDefault(), this._isShown && !this._isTransitioning) {
                    var n = j.trigger(this._element, Dn.HIDE);
                    if (this._isShown && !n.defaultPrevented) {
                        this._isShown = !1;
                        var i = this._element.classList.contains(Ln);
                        if (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), j.off(document, Dn.FOCUSIN), this._element.classList.remove(Sn), j.off(this._element, Dn.CLICK_DISMISS), j.off(this._dialog, Dn.MOUSEDOWN_DISMISS), i) {
                            var o = f(this._element);
                            j.one(this._element, s, function(t) {
                                return e._hideModal(t)
                            }), d(this._element, o)
                        } else this._hideModal()
                    }
                }
            }, n.dispose = function() {
                [window, this._element, this._dialog].forEach(function(t) {
                    return j.off(t, En)
                }), j.off(document, Dn.FOCUSIN), E.removeData(this._element, bn), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, n.handleUpdate = function() {
                this._adjustDialog()
            }, n._getConfig = function(t) {
                return t = i({}, yn, t), p("modal", t, wn), t
            }, n._showElement = function(t) {
                var e = this,
                    n = this._element.classList.contains(Ln);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._dialog.classList.contains(Tn) ? F.findOne(Cn.MODAL_BODY, this._dialog).scrollTop = 0 : this._element.scrollTop = 0, n && v(this._element), this._element.classList.add(Sn), this._config.focus && this._enforceFocus();
                var i = function() {
                    e._config.focus && e._element.focus(), e._isTransitioning = !1, j.trigger(e._element, Dn.SHOWN, {
                        relatedTarget: t
                    })
                };
                if (n) {
                    var o = f(this._dialog);
                    j.one(this._dialog, s, i), d(this._dialog, o)
                } else i()
            }, n._enforceFocus = function() {
                var t = this;
                j.off(document, Dn.FOCUSIN), j.on(document, Dn.FOCUSIN, function(e) {
                    document === e.target || t._element === e.target || t._element.contains(e.target) || t._element.focus()
                })
            }, n._setEscapeEvent = function() {
                var t = this;
                this._isShown && this._config.keyboard ? j.on(this._element, Dn.KEYDOWN_DISMISS, function(e) {
                    27 === e.which && (e.preventDefault(), t.hide())
                }) : this._isShown || j.off(this._element, Dn.KEYDOWN_DISMISS)
            }, n._setResizeEvent = function() {
                var t = this;
                this._isShown ? j.on(window, Dn.RESIZE, function(e) {
                    return t.handleUpdate(e)
                }) : j.off(window, Dn.RESIZE)
            }, n._hideModal = function() {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop(function() {
                    document.body.classList.remove(On), t._resetAdjustments(), t._resetScrollbar(), j.trigger(t._element, Dn.HIDDEN)
                })
            }, n._removeBackdrop = function() {
                this._backdrop && (this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null)
            }, n._showBackdrop = function(t) {
                var e = this,
                    n = this._element.classList.contains(Ln) ? Ln : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = An, n && this._backdrop.classList.add(n), document.body.appendChild(this._backdrop), j.on(this._element, Dn.CLICK_DISMISS, function(t) {
                            e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && ("static" === e._config.backdrop ? e._element.focus() : e.hide())
                        }), n && v(this._backdrop), this._backdrop.classList.add(Sn), !t) return;
                    if (!n) return void t();
                    var i = f(this._backdrop);
                    j.one(this._backdrop, s, t), d(this._backdrop, i)
                } else if (!this._isShown && this._backdrop) {
                    this._backdrop.classList.remove(Sn);
                    var o = function() {
                        e._removeBackdrop(), t && t()
                    };
                    if (this._element.classList.contains(Ln)) {
                        var r = f(this._backdrop);
                        j.one(this._backdrop, s, o), d(this._backdrop, r)
                    } else o()
                } else t && t()
            }, n._adjustDialog = function() {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, n._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, n._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, n._setScrollbar = function() {
                var t = this;
                if (this._isBodyOverflowing) {
                    g(F.find(Cn.FIXED_CONTENT)).forEach(function(e) {
                        var n = e.style.paddingRight,
                            i = window.getComputedStyle(e)["padding-right"];
                        ft.setDataAttribute(e, "padding-right", n), e.style.paddingRight = parseFloat(i) + t._scrollbarWidth + "px"
                    }), g(F.find(Cn.STICKY_CONTENT)).forEach(function(e) {
                        var n = e.style.marginRight,
                            i = window.getComputedStyle(e)["margin-right"];
                        ft.setDataAttribute(e, "margin-right", n), e.style.marginRight = parseFloat(i) - t._scrollbarWidth + "px"
                    });
                    var e = document.body.style.paddingRight,
                        n = window.getComputedStyle(document.body)["padding-right"];
                    ft.setDataAttribute(document.body, "padding-right", e), document.body.style.paddingRight = parseFloat(n) + this._scrollbarWidth + "px"
                }
                document.body.classList.add(On)
            }, n._resetScrollbar = function() {
                g(F.find(Cn.FIXED_CONTENT)).forEach(function(t) {
                    var e = ft.getDataAttribute(t, "padding-right");
                    void 0 !== e && (ft.removeDataAttribute(t, "padding-right"), t.style.paddingRight = e)
                }), g(F.find("" + Cn.STICKY_CONTENT)).forEach(function(t) {
                    var e = ft.getDataAttribute(t, "margin-right");
                    void 0 !== e && (ft.removeDataAttribute(t, "margin-right"), t.style.marginRight = e)
                });
                var t = ft.getDataAttribute(document.body, "padding-right");
                void 0 === t ? document.body.style.paddingRight = "" : (ft.removeDataAttribute(document.body, "padding-right"), document.body.style.paddingRight = t)
            }, n._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = In, document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, t._jQueryInterface = function(e, n) {
                return this.each(function() {
                    var o = E.getData(this, bn),
                        r = i({}, yn, ft.getDataAttributes(this), "object" == typeof e && e ? e : {});
                    if (o || (o = new t(this, r)), "string" == typeof e) {
                        if (void 0 === o[e]) throw new TypeError('No method named "' + e + '"');
                        o[e](n)
                    } else r.show && o.show(n)
                })
            }, t._getInstance = function(t) {
                return E.getData(t, bn)
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return yn
                }
            }]), t
        }();
    if (j.on(document, Dn.CLICK_DATA_API, Cn.DATA_TOGGLE, function(t) {
            var e, n = this,
                o = c(this);
            o && (e = F.findOne(o));
            var r = E.getData(e, bn) ? "toggle" : i({}, ft.getDataAttributes(e), ft.getDataAttributes(this));
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(), j.one(e, Dn.SHOW, function(t) {
                t.defaultPrevented || j.one(e, Dn.HIDDEN, function() {
                    m(n) && n.focus()
                })
            });
            var s = E.getData(e, bn);
            s || (s = new Nn(e, r)), s.show(this)
        }), void 0 !== a) {
        var kn = a.fn.modal;
        a.fn.modal = Nn._jQueryInterface, a.fn.modal.Constructor = Nn, a.fn.modal.noConflict = function() {
            return a.fn.modal = kn, Nn._jQueryInterface
        }
    }
    var Pn = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        xn = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
        Hn = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i,
        Mn = function(t, e) {
            var n = t.nodeName.toLowerCase();
            if (-1 !== e.indexOf(n)) return -1 === Pn.indexOf(n) || Boolean(t.nodeValue.match(xn) || t.nodeValue.match(Hn));
            for (var i = e.filter(function(t) {
                    return t instanceof RegExp
                }), o = 0, r = i.length; o < r; o++)
                if (n.match(i[o])) return !0;
            return !1
        },
        jn = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        };

    function Rn(t, e, n) {
        if (!t.length) return t;
        if (n && "function" == typeof n) return n(t);
        for (var i = (new window.DOMParser).parseFromString(t, "text/html"), o = Object.keys(e), r = g(i.body.querySelectorAll("*")), s = function(t, n) {
                var i = r[t],
                    s = i.nodeName.toLowerCase();
                if (-1 === o.indexOf(s)) return i.parentNode.removeChild(i), "continue";
                var a = g(i.attributes),
                    l = [].concat(e["*"] || [], e[s] || []);
                a.forEach(function(t) {
                    Mn(t, l) || i.removeAttribute(t.nodeName)
                })
            }, a = 0, l = r.length; a < l; a++) s(a);
        return i.body.innerHTML
    }
    var Wn = "tooltip",
        Fn = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        Un = ["sanitize", "whiteList", "sanitizeFn"],
        Bn = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object"
        },
        Kn = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        Vn = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: jn
        },
        Yn = "show",
        Qn = "out",
        Gn = {
            HIDE: "hide.bs.tooltip",
            HIDDEN: "hidden.bs.tooltip",
            SHOW: "show.bs.tooltip",
            SHOWN: "shown.bs.tooltip",
            INSERTED: "inserted.bs.tooltip",
            CLICK: "click.bs.tooltip",
            FOCUSIN: "focusin.bs.tooltip",
            FOCUSOUT: "focusout.bs.tooltip",
            MOUSEENTER: "mouseenter.bs.tooltip",
            MOUSELEAVE: "mouseleave.bs.tooltip"
        },
        qn = "fade",
        Xn = "show",
        zn = ".tooltip-inner",
        Zn = ".tooltip-arrow",
        $n = "hover",
        Jn = "focus",
        ti = "click",
        ei = "manual",
        ni = function() {
            function t(t, e) {
                if (void 0 === Ve) throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners(), E.setData(t, this.constructor.DATA_KEY, this)
            }
            var n = t.prototype;
            return n.enable = function() {
                this._isEnabled = !0
            }, n.disable = function() {
                this._isEnabled = !1
            }, n.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, n.toggle = function(t) {
                if (this._isEnabled)
                    if (t) {
                        var e = this.constructor.DATA_KEY,
                            n = E.getData(t.delegateTarget, e);
                        n || (n = new this.constructor(t.delegateTarget, this._getDelegateConfig()), E.setData(t.delegateTarget, e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (this.getTipElement().classList.contains(Xn)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, n.dispose = function() {
                clearTimeout(this._timeout), E.removeData(this.element, this.constructor.DATA_KEY), j.off(this.element, this.constructor.EVENT_KEY), j.off(F.closest(this.element, ".modal"), "hide.bs.modal"), this.tip && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, n.show = function() {
                var t = this;
                if ("none" === this.element.style.display) throw new Error("Please use show on visible elements");
                if (this.isWithContent() && this._isEnabled) {
                    var e = j.trigger(this.element, this.constructor.Event.SHOW),
                        n = function t(e) {
                            if (!document.documentElement.attachShadow) return null;
                            if ("function" == typeof e.getRootNode) {
                                var n = e.getRootNode();
                                return n instanceof ShadowRoot ? n : null
                            }
                            return e instanceof ShadowRoot ? e : e.parentNode ? t(e.parentNode) : null
                        }(this.element),
                        i = null === n ? this.element.ownerDocument.documentElement.contains(this.element) : n.contains(this.element);
                    if (e.defaultPrevented || !i) return;
                    var o = this.getTipElement(),
                        r = l(this.constructor.NAME);
                    o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && o.classList.add(qn);
                    var a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                        c = this._getAttachment(a);
                    this.addAttachmentClass(c);
                    var u = this._getContainer();
                    E.setData(o, this.constructor.DATA_KEY, this), this.element.ownerDocument.documentElement.contains(this.tip) || u.appendChild(o), j.trigger(this.element, this.constructor.Event.INSERTED), this._popper = new Ve(this.element, o, {
                        placement: c,
                        modifiers: {
                            offset: this._getOffset(),
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: Zn
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(e) {
                            e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                        },
                        onUpdate: function(e) {
                            return t._handlePopperPlacementChange(e)
                        }
                    }), o.classList.add(Xn), "ontouchstart" in document.documentElement && g(document.body.children).forEach(function(t) {
                        j.on(t, "mouseover", function() {})
                    });
                    var h = function() {
                        t.config.animation && t._fixTransition();
                        var e = t._hoverState;
                        t._hoverState = null, j.trigger(t.element, t.constructor.Event.SHOWN), e === Qn && t._leave(null, t)
                    };
                    if (this.tip.classList.contains(qn)) {
                        var p = f(this.tip);
                        j.one(this.tip, s, h), d(this.tip, p)
                    } else h()
                }
            }, n.hide = function(t) {
                var e = this,
                    n = this.getTipElement(),
                    i = function() {
                        e._hoverState !== Yn && n.parentNode && n.parentNode.removeChild(n), e._cleanTipClass(), e.element.removeAttribute("aria-describedby"), j.trigger(e.element, e.constructor.Event.HIDDEN), null !== e._popper && e._popper.destroy(), t && t()
                    };
                if (!j.trigger(this.element, this.constructor.Event.HIDE).defaultPrevented) {
                    if (n.classList.remove(Xn), "ontouchstart" in document.documentElement && g(document.body.children).forEach(function(t) {
                            return j.off(t, "mouseover", _)
                        }), this._activeTrigger[ti] = !1, this._activeTrigger[Jn] = !1, this._activeTrigger[$n] = !1, this.tip.classList.contains(qn)) {
                        var o = f(n);
                        j.one(n, s, i), d(n, o)
                    } else i();
                    this._hoverState = ""
                }
            }, n.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, n.isWithContent = function() {
                return Boolean(this.getTitle())
            }, n.addAttachmentClass = function(t) {
                this.getTipElement().classList.add("bs-tooltip-" + t)
            }, n.getTipElement = function() {
                if (this.tip) return this.tip;
                var t = document.createElement("div");
                return t.innerHTML = this.config.template, this.tip = t.children[0], this.tip
            }, n.setContent = function() {
                var t = this.getTipElement();
                this.setElementContent(F.findOne(zn, t), this.getTitle()), t.classList.remove(qn), t.classList.remove(Xn)
            }, n.setElementContent = function(t, e) {
                if (null !== t) return "object" == typeof e && (e.nodeType || e.jquery) ? (e.jquery && (e = e[0]), void(this.config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.innerText = e.textContent)) : void(this.config.html ? (this.config.sanitize && (e = Rn(e, this.config.whiteList, this.config.sanitizeFn)), t.innerHTML = e) : t.innerText = e)
            }, n.getTitle = function() {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
            }, n._getOffset = function() {
                var t = this,
                    e = {};
                return "function" == typeof this.config.offset ? e.fn = function(e) {
                    return e.offsets = i({}, e.offsets, t.config.offset(e.offsets, t.element) || {}), e
                } : e.offset = this.config.offset, e
            }, n._getContainer = function() {
                return !1 === this.config.container ? document.body : h(this.config.container) ? this.config.container : F.findOne(this.config.container)
            }, n._getAttachment = function(t) {
                return Kn[t.toUpperCase()]
            }, n._setListeners = function() {
                var t = this;
                this.config.trigger.split(" ").forEach(function(e) {
                    if ("click" === e) j.on(t.element, t.constructor.Event.CLICK, t.config.selector, function(e) {
                        return t.toggle(e)
                    });
                    else if (e !== ei) {
                        var n = e === $n ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                            i = e === $n ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                        j.on(t.element, n, t.config.selector, function(e) {
                            return t._enter(e)
                        }), j.on(t.element, i, t.config.selector, function(e) {
                            return t._leave(e)
                        })
                    }
                }), j.on(F.closest(this.element, ".modal"), "hide.bs.modal", function() {
                    t.element && t.hide()
                }), this.config.selector ? this.config = i({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, n._fixTitle = function() {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, n._enter = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || E.getData(t.delegateTarget, n)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), E.setData(t.delegateTarget, n, e)), t && (e._activeTrigger["focusin" === t.type ? Jn : $n] = !0), e.getTipElement().classList.contains(Xn) || e._hoverState === Yn ? e._hoverState = Yn : (clearTimeout(e._timeout), e._hoverState = Yn, e.config.delay && e.config.delay.show ? e._timeout = setTimeout(function() {
                    e._hoverState === Yn && e.show()
                }, e.config.delay.show) : e.show())
            }, n._leave = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || E.getData(t.delegateTarget, n)) || (e = new this.constructor(t.delegateTarget, this._getDelegateConfig()), E.setData(t.delegateTarget, n, e)), t && (e._activeTrigger["focusout" === t.type ? Jn : $n] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = Qn, e.config.delay && e.config.delay.hide ? e._timeout = setTimeout(function() {
                    e._hoverState === Qn && e.hide()
                }, e.config.delay.hide) : e.hide())
            }, n._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1
            }, n._getConfig = function(t) {
                var e = ft.getDataAttributes(this.element);
                return Object.keys(e).forEach(function(t) {
                    -1 !== Un.indexOf(t) && delete e[t]
                }), t && "object" == typeof t.container && t.container.jquery && (t.container = t.container[0]), "number" == typeof(t = i({}, this.constructor.Default, e, "object" == typeof t && t ? t : {})).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), p(Wn, t, this.constructor.DefaultType), t.sanitize && (t.template = Rn(t.template, t.whiteList, t.sanitizeFn)), t
            }, n._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, n._cleanTipClass = function() {
                var t = this.getTipElement(),
                    e = t.getAttribute("class").match(Fn);
                null !== e && e.length && e.map(function(t) {
                    return t.trim()
                }).forEach(function(e) {
                    return t.classList.remove(e)
                })
            }, n._handlePopperPlacementChange = function(t) {
                var e = t.instance;
                this.tip = e.popper, this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(t.placement))
            }, n._fixTransition = function() {
                var t = this.getTipElement(),
                    e = this.config.animation;
                null === t.getAttribute("x-placement") && (t.classList.remove(qn), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
            }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = E.getData(this, "bs.tooltip"),
                        i = "object" == typeof e && e;
                    if ((n || !/dispose|hide/.test(e)) && (n || (n = new t(this, i)), "string" == typeof e)) {
                        if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }, t._getInstance = function(t) {
                return E.getData(t, "bs.tooltip")
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return Vn
                }
            }, {
                key: "NAME",
                get: function() {
                    return Wn
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.tooltip"
                }
            }, {
                key: "Event",
                get: function() {
                    return Gn
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.tooltip"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Bn
                }
            }]), t
        }();
    if (void 0 !== a) {
        var ii = a.fn.tooltip;
        a.fn.tooltip = ni._jQueryInterface, a.fn.tooltip.Constructor = ni, a.fn.tooltip.noConflict = function() {
            return a.fn.tooltip = ii, ni._jQueryInterface
        }
    }
    var oi = "popover",
        ri = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        si = i({}, ni.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        ai = i({}, ni.DefaultType, {
            content: "(string|element|function)"
        }),
        li = "fade",
        ci = "show",
        fi = ".popover-header",
        ui = ".popover-body",
        hi = {
            HIDE: "hide.bs.popover",
            HIDDEN: "hidden.bs.popover",
            SHOW: "show.bs.popover",
            SHOWN: "shown.bs.popover",
            INSERTED: "inserted.bs.popover",
            CLICK: "click.bs.popover",
            FOCUSIN: "focusin.bs.popover",
            FOCUSOUT: "focusout.bs.popover",
            MOUSEENTER: "mouseenter.bs.popover",
            MOUSELEAVE: "mouseleave.bs.popover"
        },
        di = function(t) {
            var n, i;

            function o() {
                return t.apply(this, arguments) || this
            }
            i = t, (n = o).prototype = Object.create(i.prototype), n.prototype.constructor = n, n.__proto__ = i;
            var r = o.prototype;
            return r.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, r.addAttachmentClass = function(t) {
                this.getTipElement().classList.add("bs-popover-" + t)
            }, r.setContent = function() {
                var t = this.getTipElement();
                this.setElementContent(F.findOne(fi, t), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this.element)), this.setElementContent(F.findOne(ui, t), e), t.classList.remove(li), t.classList.remove(ci)
            }, r._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, r._cleanTipClass = function() {
                var t = this.getTipElement(),
                    e = t.getAttribute("class").match(ri);
                null !== e && e.length > 0 && e.map(function(t) {
                    return t.trim()
                }).forEach(function(e) {
                    return t.classList.remove(e)
                })
            }, o._jQueryInterface = function(t) {
                return this.each(function() {
                    var e = E.getData(this, "bs.popover"),
                        n = "object" == typeof t ? t : null;
                    if ((e || !/dispose|hide/.test(t)) && (e || (e = new o(this, n), E.setData(this, "bs.popover", e)), "string" == typeof t)) {
                        if (void 0 === e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                })
            }, o._getInstance = function(t) {
                return E.getData(t, "bs.popover")
            }, e(o, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return si
                }
            }, {
                key: "NAME",
                get: function() {
                    return oi
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "bs.popover"
                }
            }, {
                key: "Event",
                get: function() {
                    return hi
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return ".bs.popover"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return ai
                }
            }]), o
        }(ni);
    if (void 0 !== a) {
        var pi = a.fn.popover;
        a.fn.popover = di._jQueryInterface, a.fn.popover.Constructor = di, a.fn.popover.noConflict = function() {
            return a.fn.popover = pi, di._jQueryInterface
        }
    }
    var gi = "scrollspy",
        mi = "bs.scrollspy",
        _i = "." + mi,
        vi = {
            offset: 10,
            method: "auto",
            target: ""
        },
        bi = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        Ei = {
            ACTIVATE: "activate" + _i,
            SCROLL: "scroll" + _i,
            LOAD_DATA_API: "load" + _i + ".data-api"
        },
        yi = {
            DROPDOWN_ITEM: "dropdown-item",
            ACTIVE: "active"
        },
        wi = {
            DATA_SPY: '[data-spy="scroll"]',
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        },
        Di = "offset",
        Ti = "position",
        Ii = function() {
            function t(t, e) {
                var n = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " " + wi.NAV_LINKS + "," + this._config.target + " " + wi.LIST_ITEMS + "," + this._config.target + " ." + yi.DROPDOWN_ITEM, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, j.on(this._scrollElement, Ei.SCROLL, function(t) {
                    return n._process(t)
                }), this.refresh(), this._process(), E.setData(t, mi, this)
            }
            var n = t.prototype;
            return n.refresh = function() {
                var t = this,
                    e = this._scrollElement === this._scrollElement.window ? Di : Ti,
                    n = "auto" === this._config.method ? e : this._config.method,
                    i = n === Ti ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), g(F.find(this._selector)).map(function(t) {
                    var e, o = c(t);
                    if (o && (e = F.findOne(o)), e) {
                        var r = e.getBoundingClientRect();
                        if (r.width || r.height) return [ft[n](e).top + i, o]
                    }
                    return null
                }).filter(function(t) {
                    return t
                }).sort(function(t, e) {
                    return t[0] - e[0]
                }).forEach(function(e) {
                    t._offsets.push(e[0]), t._targets.push(e[1])
                })
            }, n.dispose = function() {
                E.removeData(this._element, mi), j.off(this._scrollElement, _i), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, n._getConfig = function(t) {
                if ("string" != typeof(t = i({}, vi, "object" == typeof t && t ? t : {})).target) {
                    var e = t.target.id;
                    e || (e = l(gi), t.target.id = e), t.target = "#" + e
                }
                return p(gi, t, bi), t
            }, n._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, n._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, n._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, n._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), t >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var o = this._offsets.length; o--;) {
                        this._activeTarget !== this._targets[o] && t >= this._offsets[o] && (void 0 === this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                    }
                }
            }, n._activate = function(t) {
                this._activeTarget = t, this._clear();
                var e = this._selector.split(",").map(function(e) {
                        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                    }),
                    n = F.findOne(e.join(","));
                n.classList.contains(yi.DROPDOWN_ITEM) ? (F.findOne(wi.DROPDOWN_TOGGLE, F.closest(n, wi.DROPDOWN)).classList.add(yi.ACTIVE), n.classList.add(yi.ACTIVE)) : (n.classList.add(yi.ACTIVE), F.parents(n, wi.NAV_LIST_GROUP).forEach(function(t) {
                    F.prev(t, wi.NAV_LINKS + ", " + wi.LIST_ITEMS).forEach(function(t) {
                        return t.classList.add(yi.ACTIVE)
                    }), F.prev(t, wi.NAV_ITEMS).forEach(function(t) {
                        F.children(t, wi.NAV_LINKS).forEach(function(t) {
                            return t.classList.add(yi.ACTIVE)
                        })
                    })
                })), j.trigger(this._scrollElement, Ei.ACTIVATE, {
                    relatedTarget: t
                })
            }, n._clear = function() {
                g(F.find(this._selector)).filter(function(t) {
                    return t.classList.contains(yi.ACTIVE)
                }).forEach(function(t) {
                    return t.classList.remove(yi.ACTIVE)
                })
            }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = E.getData(this, mi);
                    if (n || (n = new t(this, "object" == typeof e && e)), "string" == typeof e) {
                        if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }, t._getInstance = function(t) {
                return E.getData(t, mi)
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "Default",
                get: function() {
                    return vi
                }
            }]), t
        }();
    if (j.on(window, Ei.LOAD_DATA_API, function() {
            g(F.find(wi.DATA_SPY)).forEach(function(t) {
                return new Ii(t, ft.getDataAttributes(t))
            })
        }), void 0 !== a) {
        var Ai = a.fn[gi];
        a.fn[gi] = Ii._jQueryInterface, a.fn[gi].Constructor = Ii, a.fn[gi].noConflict = function() {
            return a.fn[gi] = Ai, Ii._jQueryInterface
        }
    }
    var Oi = "bs.tab",
        Li = "." + Oi,
        Si = {
            HIDE: "hide" + Li,
            HIDDEN: "hidden" + Li,
            SHOW: "show" + Li,
            SHOWN: "shown" + Li,
            CLICK_DATA_API: "click" + Li + ".data-api"
        },
        Ci = "dropdown-menu",
        Ni = "active",
        ki = "disabled",
        Pi = "fade",
        xi = "show",
        Hi = ".dropdown",
        Mi = ".nav, .list-group",
        ji = ".active",
        Ri = ":scope > li > .active",
        Wi = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
        Fi = ".dropdown-toggle",
        Ui = ":scope > .dropdown-menu .active",
        Bi = function() {
            function t(t) {
                this._element = t, E.setData(this._element, Oi, this)
            }
            var n = t.prototype;
            return n.show = function() {
                var t = this;
                if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains(Ni) || this._element.classList.contains(ki))) {
                    var e, n, i = F.closest(this._element, Mi),
                        o = c(this._element);
                    if (i) {
                        var r = "UL" === i.nodeName || "OL" === i.nodeName ? Ri : ji;
                        n = (n = g(F.find(r, i)))[n.length - 1]
                    }
                    var s = null;
                    if (n && (s = j.trigger(n, Si.HIDE, {
                            relatedTarget: this._element
                        })), !(j.trigger(this._element, Si.SHOW, {
                            relatedTarget: n
                        }).defaultPrevented || null !== s && s.defaultPrevented)) {
                        o && (e = F.findOne(o)), this._activate(this._element, i);
                        var a = function() {
                            j.trigger(n, Si.HIDDEN, {
                                relatedTarget: t._element
                            }), j.trigger(t._element, Si.SHOWN, {
                                relatedTarget: n
                            })
                        };
                        e ? this._activate(e, e.parentNode, a) : a()
                    }
                }
            }, n.dispose = function() {
                E.removeData(this._element, Oi), this._element = null
            }, n._activate = function(t, e, n) {
                var i = this,
                    o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? F.children(e, ji) : F.find(Ri, e))[0],
                    r = n && o && o.classList.contains(Pi),
                    a = function() {
                        return i._transitionComplete(t, o, n)
                    };
                if (o && r) {
                    var l = f(o);
                    o.classList.remove(xi), j.one(o, s, a), d(o, l)
                } else a()
            }, n._transitionComplete = function(t, e, n) {
                if (e) {
                    e.classList.remove(Ni);
                    var i = F.findOne(Ui, e.parentNode);
                    i && i.classList.remove(Ni), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
                }(t.classList.add(Ni), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), v(t), t.classList.contains(Pi) && t.classList.add(xi), t.parentNode && t.parentNode.classList.contains(Ci)) && (F.closest(t, Hi) && g(F.find(Fi)).forEach(function(t) {
                    return t.classList.add(Ni)
                }), t.setAttribute("aria-expanded", !0));
                n && n()
            }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = E.getData(this, Oi) || new t(this);
                    if ("string" == typeof e) {
                        if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                })
            }, t._getInstance = function(t) {
                return E.getData(t, Oi)
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }]), t
        }();
    if (j.on(document, Si.CLICK_DATA_API, Wi, function(t) {
            t.preventDefault(), (E.getData(this, Oi) || new Bi(this)).show()
        }), void 0 !== a) {
        var Ki = a.fn.tab;
        a.fn.tab = Bi._jQueryInterface, a.fn.tab.Constructor = Bi, a.fn.tab.noConflict = function() {
            return a.fn.tab = Ki, Bi._jQueryInterface
        }
    }
    var Vi = "bs.toast",
        Yi = "." + Vi,
        Qi = {
            CLICK_DISMISS: "click.dismiss" + Yi,
            HIDE: "hide" + Yi,
            HIDDEN: "hidden" + Yi,
            SHOW: "show" + Yi,
            SHOWN: "shown" + Yi
        },
        Gi = "fade",
        qi = "hide",
        Xi = "show",
        zi = "showing",
        Zi = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        $i = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        Ji = '[data-dismiss="toast"]',
        to = function() {
            function t(t, e) {
                this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners(), E.setData(t, Vi, this)
            }
            var n = t.prototype;
            return n.show = function() {
                var t = this;
                j.trigger(this._element, Qi.SHOW), this._config.animation && this._element.classList.add(Gi);
                var e = function() {
                    t._element.classList.remove(zi), t._element.classList.add(Xi), j.trigger(t._element, Qi.SHOWN), t._config.autohide && t.hide()
                };
                if (this._element.classList.remove(qi), this._element.classList.add(zi), this._config.animation) {
                    var n = f(this._element);
                    j.one(this._element, s, e), d(this._element, n)
                } else e()
            }, n.hide = function(t) {
                var e = this;
                this._element.classList.contains(Xi) && (j.trigger(this._element, Qi.HIDE), t ? this._close() : this._timeout = setTimeout(function() {
                    e._close()
                }, this._config.delay))
            }, n.dispose = function() {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains(Xi) && this._element.classList.remove(Xi), j.off(this._element, Qi.CLICK_DISMISS), E.removeData(this._element, Vi), this._element = null, this._config = null
            }, n._getConfig = function(t) {
                return t = i({}, $i, ft.getDataAttributes(this._element), "object" == typeof t && t ? t : {}), p("toast", t, this.constructor.DefaultType), t
            }, n._setListeners = function() {
                var t = this;
                j.on(this._element, Qi.CLICK_DISMISS, Ji, function() {
                    return t.hide(!0)
                })
            }, n._close = function() {
                var t = this,
                    e = function() {
                        t._element.classList.add(qi), j.trigger(t._element, Qi.HIDDEN)
                    };
                if (this._element.classList.remove(Xi), this._config.animation) {
                    var n = f(this._element);
                    j.one(this._element, s, e), d(this._element, n)
                } else e()
            }, t._jQueryInterface = function(e) {
                return this.each(function() {
                    var n = E.getData(this, Vi);
                    if (n || (n = new t(this, "object" == typeof e && e)), "string" == typeof e) {
                        if (void 0 === n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e](this)
                    }
                })
            }, t._getInstance = function(t) {
                return E.getData(t, Vi)
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.3.1"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return Zi
                }
            }, {
                key: "Default",
                get: function() {
                    return $i
                }
            }]), t
        }();
    if (void 0 !== a) {
        var eo = a.fn.toast;
        a.fn.toast = to._jQueryInterface, a.fn.toast.Constructor = to, a.fn.toast.noConflict = function() {
            return a.fn.toast = eo, to._jQueryInterface
        }
    }
    return {
        Alert: G,
        Button: st,
        Carousel: Nt,
        Collapse: Qt,
        Dropdown: _n,
        Modal: Nn,
        Popover: di,
        ScrollSpy: Ii,
        Tab: Bi,
        Toast: to,
        Tooltip: ni
    }
});
//# sourceMappingURL=bootstrap.bundle.min.js.map