/*!
 * jquery.counterup.js 1.0
 *
 * Copyright 2013, Benjamin Intal http://gambit.ph @bfintal
 * Released under the GPL v2 License
 *
 * Date: Nov 26, 2013
 */
! function(t) {
    "use strict";
    t.fn.counterUp = function(e) {
        var n = t.extend({
            time: 400,
            delay: 10
        }, e);
        return this.each(function() {
            var e = t(this),
                u = n,
                a = function() {
                    for (var t = [], n = u.time / u.delay, a = e.data("num"), r = /[0-9]+,[0-9]+/.test(a), o = (/^[0-9]+$/.test(a), /^[0-9]+\.[0-9]+$/.test(a)), c = o ? (a.split(".")[1] || []).length : 0, d = n; d >= 1; d--) {
                        var s = parseInt(a / n * d);
                        if (o && (s = parseFloat(a / n * d).toFixed(c)), r)
                            for (;
                                /(\d+)(\d{3})/.test(s.toString());) s = s.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                        t.unshift(s)
                    }
                    e.data("counterup-nums", t), e.text("0");
                    var i = function() {
                        e.data("counterup-nums") && (e.text(e.data("counterup-nums").shift()), e.data("counterup-nums").length ? setTimeout(e.data("counterup-func"), u.delay) : (delete e.data("counterup-nums"), e.data("counterup-nums", null), e.data("counterup-func", null)))
                    };
                    e.data("counterup-func", i), setTimeout(e.data("counterup-func"), u.delay)
                };
            e.waypoint(a, {
                offset: "100%",
                triggerOnce: !0
            })
        })
    }
}(jQuery);