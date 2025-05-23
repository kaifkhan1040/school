! function(e) {
    "use strict";
    e.fn.meanmenu = function(n) {
        var a = {
            meanMenuTarget: jQuery(this),
            meanMenuContainer: "body",
            meanMenuClose: "X",
            meanMenuCloseSize: "18px",
            meanMenuOpen: "<span></span><span></span><span></span>",
            meanRevealPosition: "right",
            meanRevealPositionDistance: "0",
            meanRevealColour: "",
            meanScreenWidth: "991",
            meanNavPush: "",
            meanShowChildren: !0,
            meanExpandableChildren: !0,
            meanExpand: "+",
            meanContract: "-",
            meanRemoveAttrs: !1,
            onePage: !1,
            meanDisplay: "block",
            removeElements: "",
            siteLogo: "<a href='index.html'>Site Logo</a>"
        };
        n = e.extend(a, n);
        var t = window.innerWidth || document.documentElement.clientWidth;
        return this.each(function() {
            var e = n.meanMenuTarget,
                a = n.meanMenuContainer,
                r = n.meanMenuClose,
                i = n.meanMenuCloseSize,
                s = n.meanMenuOpen,
                u = n.meanRevealPosition,
                m = n.meanRevealPositionDistance,
                l = n.meanRevealColour,
                o = n.meanScreenWidth,
                c = n.meanNavPush,
                h = ".meanmenu-reveal",
                v = n.meanShowChildren,
                d = n.meanExpandableChildren,
                y = n.meanExpand,
                j = n.meanContract,
                Q = n.meanRemoveAttrs,
                f = n.onePage,
                g = n.meanDisplay,
                p = n.removeElements,
                C = n.siteLogo,
                w = !1;
            (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (w = !0), (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll");
            var x = "",
                A = function() {
                    if ("center" === u) {
                        var e = (window.innerWidth || document.documentElement.clientWidth) / 2 - 22 + "px";
                        x = "left:" + e + ";right:auto;", w ? jQuery(".meanmenu-reveal").animate({
                            left: e
                        }) : jQuery(".meanmenu-reveal").css("left", e)
                    }
                },
                E = !1,
                M = !1;
            "right" === u && (x = "right:" + m + ";left:auto;"), "left" === u && (x = "left:" + m + ";right:auto;"), A();
            var P = "",
                W = function() {
                    P.html(jQuery(P).is(".meanmenu-reveal.meanclose") ? r : s)
                },
                S = function() {
                    jQuery(".mean-bar,.mean-push").remove(), jQuery(a).removeClass("mean-container"), jQuery(e).css("display", g), E = !1, M = !1, jQuery(p).removeClass("mean-remove")
                },
                b = function() {
                    var n = "background:" + l + ";color:" + l + ";" + x;
                    if (o >= t) {
                        jQuery(p).addClass("mean-remove"), M = !0, jQuery(a).addClass("mean-container"), jQuery(".mean-container").prepend('<div class="mean-bar">' + C + '<a href="#nav" class="meanmenu-reveal" style="' + n + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
                        var r = jQuery(e).html();
                        jQuery(".mean-nav").html(r), Q && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function() {
                            jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class"), jQuery(this).removeAttr("id")
                        }), jQuery(e).before('<div class="mean-push" />'), jQuery(".mean-push").css("margin-top", c), jQuery(e).hide(), jQuery(".meanmenu-reveal").show(), jQuery(h).html(s), P = jQuery(h), jQuery(".mean-nav ul").hide(), v ? d ? (jQuery(".mean-nav ul ul").each(function() {
                            jQuery(this).children().length && jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + i + '">' + y + "</a>")
                        }), jQuery(".mean-expand").on("click", function(e) {
                            e.preventDefault(), jQuery(this).hasClass("mean-clicked") ? (jQuery(this).text(y), jQuery(this).prev("ul").slideUp(300, function() {})) : (jQuery(this).text(j), jQuery(this).prev("ul").slideDown(300, function() {})), jQuery(this).toggleClass("mean-clicked")
                        })) : jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(), jQuery(".mean-nav ul li").last().addClass("mean-last"), P.removeClass("meanclose"), jQuery(P).click(function(e) {
                            e.preventDefault(), !1 === E ? (P.css("text-align", "center"), P.css("text-indent", "0"), P.css("font-size", i), jQuery(".mean-nav ul:first").slideDown(), E = !0) : (jQuery(".mean-nav ul:first").slideUp(), E = !1), P.toggleClass("meanclose"), W(), jQuery(p).addClass("mean-remove")
                        }), f && jQuery(".mean-nav ul > li > a:first-child").on("click", function() {
                            jQuery(".mean-nav ul:first").slideUp(), E = !1, jQuery(P).toggleClass("meanclose").html(s)
                        })
                    } else S()
                };
            w || jQuery(window).resize(function() {
                t = window.innerWidth || document.documentElement.clientWidth, S(), o >= t ? (b(), A()) : S()
            }), jQuery(window).resize(function() {
                t = window.innerWidth || document.documentElement.clientWidth, w ? (A(), o >= t ? !1 === M && b() : S()) : (S(), o >= t && (b(), A()))
            }), b()
        })
    }
}(jQuery);