/*
 * LayerSlider
 *
 * (c) 2011-2023 George Krupa, John Gera & Kreatura Media
 *
 * LayerSlider home:		https://layerslider.com/
 * Licensing:			https://layerslider.com/licensing/
 */



;
! function(ie) {
    "use strict";
    window._layerSliders = {}, window._lsData = {
        $overflowWrapper: ie("body").length ? ie("body") : ie("html"),
        isMobile: !!navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|webOS|Windows Phone|IEMobile|mobi|opera mini|nexus 7)/i) || navigator.maxTouchPoints && 2 < navigator.maxTouchPoints && /Macintosh/.test(navigator.userAgent),
        supportOrientation: !!window.DeviceOrientationEvent,
        screen: {},
        document: {},
        viewport: {},
        scroll: {
            direction: "down"
        },
        resize: {},
        getScreenSize: function() {
            window._lsData.screen = {
                width: screen.width,
                height: screen.height,
                ratio: screen.width / screen.height
            }
        },
        slide: {
            keys: {
                slidedelay: ["data", "duration"],
                duration: ["data", "duration"],
                timeshift: ["data", "timeShift"],
                transition2d: ["data", "transition2d"],
                transition3d: ["data", "transition3d"],
                transitionorigami: ["data", "transitionorigami"],
                customtransition2d: ["data", "customtransition2d"],
                customtransition3d: ["data", "customtransition3d"],
                transitionduration: ["data", "transitionDuration"],
                backgroundsize: ["data", "backgroundSize"],
                bgsize: ["data", "backgroundSize"],
                backgroundposition: ["data", "backgroundPosition"],
                bgposition: ["data", "backgroundPosition"],
                backgroundcolor: ["data", "backgroundColor"],
                bgcolor: ["data", "backgroundColor"],
                thumbnail: ["data", "thumbnail"],
                deeplink: ["data", "deeplink"],
                overflow: ["data", "overflow"],
                kenburnspan: ["kenBurns", "pan"],
                kenburnszoom: ["kenBurns", "zoom"],
                kenburnsrotation: ["kenBurns", "rotation"],
                kenburnsrotate: ["kenBurns", "rotation"],
                kenburnsscale: ["kenBurns", "scale"],
                filterfrom: ["filter", "from"],
                filterto: ["filter", "to"],
                parallaxtype: ["parallax", "type"],
                parallaxevent: ["parallax", "event"],
                parallaxpath: ["parallax", "path"],
                parallaxdirection: ["parallax", "direction"],
                parallaxduration: ["parallax", "duration"],
                parallaxcount: ["parallax", "count"],
                parallaxdelay: ["parallax", "startAt"],
                parallaxstartat: ["parallax", "startAt"],
                parallaxaxis: ["parallax", "axis"],
                parallaxtransformorigin: ["parallax", "transformOrigin"],
                parallaxdurationmove: ["parallax", "durationMove"],
                parallaxdurationleave: ["parallax", "durationLeave"],
                parallaxrotate: ["parallax", "rotation"],
                parallaxrotation: ["parallax", "rotation"],
                parallaxdistance: ["parallax", "distance"],
                parallaxtransformperspective: ["parallax", "transformPerspective"],
                globalhover: ["data", "globalhover"]
            }
        },
        layer: {
            keys: {
                keyframe: ["is"],
                responsive: ["is"],
                pinned: ["is"],
                position: ["settings"],
                static: ["settings"],
                minresponsiveratio: ["settings"],
                maxresponsiveratio: ["settings"],
                minfontsize: ["styleSettings"],
                minmobilefontsize: ["styleSettings"],
                overlay: ["styleSettings"],
                pointerevents: ["styleSettings"],
                smartbg: ["styleSettings"],
                autoplay: ["mediaSettings"],
                controls: ["mediaSettings"],
                showinfo: ["mediaSettings"],
                thumbnail: ["poster", "mediaSettings"],
                poster: ["mediaSettings"],
                volume: ["mediaSettings"],
                muted: ["mediaSettings"],
                loopmedia: ["loop", "mediaSettings"],
                backgroundvideo: ["backgroundVideo", "mediaSettings"],
                fadein: ["opacity", "inLayerFromCSS"],
                opacityin: ["opacity", "inLayerFromCSS"],
                rotatein: ["rotation", "inLayerFromCSS"],
                rotatexin: ["rotationX", "inLayerFromCSS"],
                rotateyin: ["rotationY", "inLayerFromCSS"],
                rotationin: ["rotation", "inLayerFromCSS"],
                rotationxin: ["rotationX", "inLayerFromCSS"],
                rotationyin: ["rotationY", "inLayerFromCSS"],
                scalein: ["scale", "inLayerFromCSS"],
                scalexin: ["scaleX", "inLayerFromCSS"],
                scaleyin: ["scaleY", "inLayerFromCSS"],
                skewxin: ["skewX", "inLayerFromCSS"],
                skewyin: ["skewY", "inLayerFromCSS"],
                bgcolorin: ["backgroundColor", "inLayerStyleFromCSS"],
                colorin: ["color", "inLayerStyleFromCSS"],
                radiusin: ["borderRadius", "inLayerStyleShouldBeConvertedFrom"],
                widthin: ["width", "inLayerStyleShouldBeConvertedFrom"],
                heightin: ["height", "inLayerStyleShouldBeConvertedFrom"],
                filterin: ["filter", "inLayerStyleShouldBeConvertedFrom"],
                rotate: ["rotation", "inLayerToCSS"],
                rotatex: ["rotationX", "inLayerToCSS"],
                rotatey: ["rotationY", "inLayerToCSS"],
                rotation: ["rotation", "inLayerToCSS"],
                rotationx: ["rotationX", "inLayerToCSS"],
                rotationy: ["rotationY", "inLayerToCSS"],
                scale: ["scale", "inLayerToCSS"],
                scalex: ["scaleX", "inLayerToCSS"],
                scaley: ["scaleY", "inLayerToCSS"],
                skewx: ["skewX", "inLayerToCSS"],
                skewy: ["skewY", "inLayerToCSS"],
                transformoriginin: ["transformOrigin", "inLayerShouldBeConverted"],
                offsetxin: ["x", "inLayerShouldBeConverted"],
                offsetyin: ["y", "inLayerShouldBeConverted"],
                clipin: ["clip", "inClipShouldBeConverted"],
                delayin: ["startAt", "in"],
                startatin: ["startAt", "in"],
                instartat: ["startAt", "in"],
                durationin: ["duration", "in"],
                easein: ["ease", "in"],
                easingin: ["ease", "in"],
                transitionin: ["enabled", "in"],
                transformmirrorin: ["mirror", "in"],
                skipviewport: ["skipViewport", "settings"],
                textfadein: ["opacity", "textInNodesFrom"],
                textopacityin: ["opacity", "textInNodesFrom"],
                textrotatein: ["rotation", "textInNodesFrom"],
                textrotatexin: ["rotationX", "textInNodesFrom"],
                textrotateyin: ["rotationY", "textInNodesFrom"],
                textrotationin: ["rotation", "textInNodesFrom"],
                textrotationxin: ["rotationX", "textInNodesFrom"],
                textrotationyin: ["rotationY", "textInNodesFrom"],
                textscalein: ["scale", "textInNodesFrom"],
                textscalexin: ["scaleX", "textInNodesFrom"],
                textscaleyin: ["scaleY", "textInNodesFrom"],
                textskewxin: ["skewX", "textInNodesFrom"],
                textskewyin: ["skewY", "textInNodesFrom"],
                textcolorin: ["color", "textInNodesFrom"],
                textoverflowin: ["overflow", "textInLayerStyle"],
                texteasein: ["ease", "textInNodesTo"],
                texteasingin: ["ease", "textInNodesTo"],
                texttransformoriginin: ["transformOrigin", "textInShouldBeConverted"],
                textoffsetxin: ["x", "textInShouldBeConverted"],
                textoffsetyin: ["y", "textInShouldBeConverted"],
                texttypein: ["type", "textIn"],
                textshiftin: ["shiftNodes", "textIn"],
                textdelayin: ["startAt", "textIn"],
                textstartatin: ["startAt", "textIn"],
                textinstartat: ["startAt", "textIn"],
                textdurationin: ["duration", "textIn"],
                texttransitionin: ["enabled", "textIn"],
                texttransformmirrorin: ["mirror", "textIn"],
                fadeout: ["opacity", "outLayerToCSS"],
                opacityout: ["opacity", "outLayerToCSS"],
                rotateout: ["rotation", "outLayerToCSS"],
                rotatexout: ["rotationX", "outLayerToCSS"],
                rotateyout: ["rotationY", "outLayerToCSS"],
                rotationout: ["rotation", "outLayerToCSS"],
                rotationxout: ["rotationX", "outLayerToCSS"],
                rotationyout: ["rotationY", "outLayerToCSS"],
                scaleout: ["scale", "outLayerToCSS"],
                scalexout: ["scaleX", "outLayerToCSS"],
                scaleyout: ["scaleY", "outLayerToCSS"],
                skewxout: ["skewX", "outLayerToCSS"],
                skewyout: ["skewY", "outLayerToCSS"],
                bgcolorout: ["backgroundColor", "outLayerStyleToCSS"],
                colorout: ["color", "outLayerStyleToCSS"],
                radiusout: ["borderRadius", "outLayerStyleShouldBeConvertedTo"],
                widthout: ["width", "outLayerStyleShouldBeConvertedTo"],
                heightout: ["height", "outLayerStyleShouldBeConvertedTo"],
                filterout: ["filter", "outLayerStyleShouldBeConvertedTo"],
                transformoriginout: ["transformOrigin", "outLayerShouldBeConverted"],
                offsetxout: ["x", "outLayerShouldBeConverted"],
                offsetyout: ["y", "outLayerShouldBeConverted"],
                clipout: ["clip", "outClipShouldBeConverted"],
                showuntil: ["showUntil", "out"],
                startatout: ["startAt", "out"],
                outstartat: ["startAt", "out"],
                durationout: ["duration", "out"],
                easeout: ["ease", "out"],
                easingout: ["ease", "out"],
                transitionout: ["enabled", "out"],
                transformmirrorout: ["mirror", "out"],
                textfadeout: ["opacity", "textOutNodesTo"],
                textopacityout: ["opacity", "textOutNodesTo"],
                textrotateout: ["rotation", "textOutNodesTo"],
                textrotatexout: ["rotationX", "textOutNodesTo"],
                textrotateyout: ["rotationY", "textOutNodesTo"],
                textrotationout: ["rotation", "textOutNodesTo"],
                textrotationxout: ["rotationX", "textOutNodesTo"],
                textrotationyout: ["rotationY", "textOutNodesTo"],
                textscaleout: ["scale", "textOutNodesTo"],
                textscalexout: ["scaleX", "textOutNodesTo"],
                textscaleyout: ["scaleY", "textOutNodesTo"],
                textskewxout: ["skewX", "textOutNodesTo"],
                textskewyout: ["skewY", "textOutNodesTo"],
                textcolorout: ["color", "textOutNodesTo"],
                texteaseout: ["ease", "textOutNodesTo"],
                texteasingout: ["ease", "textOutNodesTo"],
                texttransformoriginout: ["transformOrigin", "textOutShouldBeConverted"],
                textoffsetxout: ["x", "textOutShouldBeConverted"],
                textoffsetyout: ["y", "textOutShouldBeConverted"],
                textoverflowout: ["overflow", "textOutLayerStyle"],
                texttypeout: ["type", "textOut"],
                textshiftout: ["shiftNodes", "textOut"],
                textdelayout: ["startAt", "textOut"],
                textstartatout: ["startAt", "textOut"],
                textoutstartat: ["startAt", "textOut"],
                textdurationout: ["duration", "textOut"],
                texttransitionout: ["enabled", "textOut"],
                texttransformmirrorout: ["mirror", "textOut"],
                loopopacity: ["opacity", "loopToCSS"],
                looprotate: ["rotation", "loopToCSS"],
                looprotatex: ["rotationX", "loopToCSS"],
                looprotatey: ["rotationY", "loopToCSS"],
                looprotation: ["rotation", "loopToCSS"],
                looprotationx: ["rotationX", "loopToCSS"],
                looprotationy: ["rotationY", "loopToCSS"],
                loopscale: ["scale", "loopToCSS"],
                loopscalex: ["scaleX", "loopToCSS"],
                loopscaley: ["scaleY", "loopToCSS"],
                loopskewx: ["skewX", "loopToCSS"],
                loopskewy: ["skewY", "loopToCSS"],
                looptransformorigin: ["transformOrigin", "loopLayerShouldBeConverted"],
                loopoffsetx: ["x", "loopLayerShouldBeConverted"],
                loopoffsety: ["y", "loopLayerShouldBeConverted"],
                loopfilter: ["filter", "loopLayerShouldBeConverted"],
                loopclip: ["clip", "loopClipShouldBeConverted"],
                loopdelay: ["startAt", "loop"],
                loopstartat: ["startAt", "loop"],
                loopduration: ["duration", "loop"],
                loopcount: ["count", "loop"],
                looprepeatdelay: ["repeatDelay", "loop"],
                loopyoyo: ["yoyo", "loop"],
                loopease: ["ease", "loop"],
                loopeasing: ["ease", "loop"],
                loop: ["enabled", "loop"],
                hoveropacity: ["opacity", "hoverToCSS"],
                hoverrotate: ["rotation", "hoverToCSS"],
                hoverrotatex: ["rotationX", "hoverToCSS"],
                hoverrotatey: ["rotationY", "hoverToCSS"],
                hoverrotation: ["rotation", "hoverToCSS"],
                hoverrotationx: ["rotationX", "hoverToCSS"],
                hoverrotationy: ["rotationY", "hoverToCSS"],
                hoverscale: ["scale", "hoverToCSS"],
                hoverscalex: ["scaleX", "hoverToCSS"],
                hoverscaley: ["scaleY", "hoverToCSS"],
                hoverskewx: ["skewX", "hoverToCSS"],
                hoverskewy: ["skewY", "hoverToCSS"],
                hoverbgcolor: ["backgroundColor", "hoverToCSS"],
                hovercolor: ["color", "hoverToCSS"],
                hoverease: ["easeIn", "hover"],
                hovereasing: ["easeIn", "hover"],
                hovereasein: ["easeIn", "hover"],
                hovereasingin: ["easeIn", "hover"],
                hovereaseout: ["easeOut", "hover"],
                hovereasingout: ["easeOut", "hover"],
                hoverduration: ["durationIn", "hover"],
                hoverdurationin: ["durationIn", "hover"],
                hoverdurationout: ["durationOut", "hover"],
                hoveralwaysontop: ["alwaysOnTop", "hover"],
                hoveroffsetx: ["x", "hoverShouldBeConverted"],
                hoveroffsety: ["y", "hoverShouldBeConverted"],
                hoverfilter: ["filter", "hoverShouldBeConverted"],
                hoverborderradius: ["borderRadius", "hoverShouldBeConverted"],
                hoverradius: ["borderRadius", "hoverShouldBeConverted"],
                hovertransformorigin: ["transformOrigin", "hoverShouldBeConverted"],
                hover: ["enabled", "hover"],
                kenburnspan: ["pan", "kenBurns"],
                kenburnszoom: ["zoom", "kenBurns"],
                kenburnsrotation: ["rotation", "kenBurns"],
                kenburnsrotate: ["rotation", "kenBurns"],
                kenburnsscale: ["scale", "kenBurns"],
                parallaxlevel: ["level", "parallax"],
                parallaxtype: ["type", "parallax"],
                parallaxevent: ["event", "parallax"],
                parallaxpath: ["path", "parallax"],
                parallaxdirection: ["direction", "parallax"],
                parallaxduration: ["duration", "parallax"],
                parallaxcount: ["count", "parallax"],
                parallaxdelay: ["startAt", "parallax"],
                parallaxstartat: ["startAt", "parallax"],
                parallaxaxis: ["axis", "parallax"],
                parallaxtransformorigin: ["transformOrigin", "parallax"],
                parallaxdurationmove: ["durationMove", "parallax"],
                parallaxdurationleave: ["durationLeave", "parallax"],
                parallaxrotate: ["rotation", "parallax"],
                parallaxrotation: ["rotation", "parallax"],
                parallaxdistance: ["distance", "parallax"],
                parallax: ["enabled", "parallax"],
                scroll: ["enabled", "scroll"],
                scrollduration: ["duration", "scroll"],
                scrolldurationrev: ["durationRev", "scroll"],
                scrollease: ["ease", "scroll"],
                scrolleaserev: ["easeRev", "scroll"],
                scrollcenter: ["center", "scroll"],
                scrollopacity: ["opacity", "scroll"],
                scrollopacitymin: ["opacitymin", "scroll"],
                scrollopacitymax: ["opacitymax", "scroll"],
                scrollopacityyoyo: ["opacityyoyo", "scroll"],
                scrollopacityinvert: ["opacityinvert", "scroll"],
                scrollrotate: ["rotation", "scroll"],
                scrollrotatemin: ["rotationmin", "scroll"],
                scrollrotatemax: ["rotationmax", "scroll"],
                scrollrotateyoyo: ["rotationyoyo", "scroll"],
                scrollrotatex: ["rotationX", "scroll"],
                scrollrotatexmin: ["rotationXmin", "scroll"],
                scrollrotatexmax: ["rotationXmax", "scroll"],
                scrollrotatexyoyo: ["rotationXyoyo", "scroll"],
                scrollrotatey: ["rotationY", "scroll"],
                scrollrotateymin: ["rotationYmin", "scroll"],
                scrollrotateymax: ["rotationYmax", "scroll"],
                scrollrotateyyoyo: ["rotationYyoyo", "scroll"],
                scrollrotation: ["rotation", "scroll"],
                scrollrotationmin: ["rotationmin", "scroll"],
                scrollrotationmax: ["rotationmax", "scroll"],
                scrollrotationyoyo: ["rotationyoyo", "scroll"],
                scrollrotationx: ["rotationX", "scroll"],
                scrollrotationxmin: ["rotationXmin", "scroll"],
                scrollrotationxmax: ["rotationXmax", "scroll"],
                scrollrotationxyoyo: ["rotationXyoyo", "scroll"],
                scrollrotationy: ["rotationY", "scroll"],
                scrollrotationymin: ["rotationYmin", "scroll"],
                scrollrotationymax: ["rotationYmax", "scroll"],
                scrollrotationyyoyo: ["rotationYyoyo", "scroll"],
                scrollscalex: ["scaleX", "scroll"],
                scrollscalexmin: ["scaleXmin", "scroll"],
                scrollscalexmax: ["scaleXmax", "scroll"],
                scrollscalexyoyo: ["scaleXyoyo", "scroll"],
                scrollscaley: ["scaleY", "scroll"],
                scrollscaleymin: ["scaleYmin", "scroll"],
                scrollscaleymax: ["scaleYmax", "scroll"],
                scrollscaleyyoyo: ["scaleYyoyo", "scroll"],
                scrollskewx: ["skewX", "scroll"],
                scrollskewxmin: ["skewXmin", "scroll"],
                scrollskewxmax: ["skewXmax", "scroll"],
                scrollskewxyoyo: ["skewXyoyo", "scroll"],
                scrollskewy: ["skewY", "scroll"],
                scrollskewymin: ["skewYmin", "scroll"],
                scrollskewymax: ["skewYmax", "scroll"],
                scrollskewyyoyo: ["skewYyoyo", "scroll"],
                scrolloffsetx: ["x", "scroll"],
                scrolloffsetxmin: ["xmin", "scroll"],
                scrolloffsetxmax: ["xmax", "scroll"],
                scrolloffsetxyoyo: ["xyoyo", "scroll"],
                scrolloffsetxresponsive: ["xresponsive", "scroll"],
                scrolloffsety: ["y", "scroll"],
                scrolloffsetymin: ["ymin", "scroll"],
                scrolloffsetymax: ["ymax", "scroll"],
                scrolloffsetyyoyo: ["yyoyo", "scroll"],
                scrolloffsetyresponsive: ["yresponsive", "scroll"],
                scrolltransformorigin: ["transformOrigin", "scrollShouldBeConverted"],
                scrolltransformoriginalt: ["transformOriginAlt", "scrollShouldBeConverted"],
                scrollgetposition: ["getPosition", "scroll"],
                transformperspective: ["layer", "transformPerspective"],
                transformperspectivein: ["layer", "transformPerspective"],
                transformperspectiveout: ["layer", "transformPerspective"],
                texttransformperspective: ["text", "transformPerspective"],
                texttransformperspectivein: ["text", "transformPerspective"],
                texttransformperspectiveout: ["text", "transformPerspective"],
                looptransformperspective: ["loop", "transformPerspective"],
                hovertransformperspective: ["hover", "transformPerspective"],
                parallaxtransformperspective: ["parallax", "transformPerspective"],
                scrolltransformperspective: ["scroll", "transformPerspective"]
            }
        }
    }, ie(window).on("resize.lsGlobal", function() {
        window._lsData.documentIsAccessible && (window._lsData.document = {
            width: document.body.scrollWidth,
            height: document.body.scrollHeight
        }, window._lsData.viewport = {
            lastWidth: window._lsData.viewport.width || 0,
            lastHeight: window._lsData.viewport.height || 0,
            width: ie(window).width(),
            height: ie(window).height()
        }, ie(window).trigger("scroll.lsGlobal"), window._lsData.resize.timeout && clearTimeout(window._lsData.resize.timeout), window._lsData.resize.once ? window._lsData.resize.once = !1 : window._lsData.resize.timeout = setTimeout(function() {
            window._lsData.resize.once = !0, ie(window).trigger("resize.lsGlobal")
        }, 100))
    }), ie(window).on("scroll.lsGlobal", function() {
        window._lsData.documentIsAccessible && (window._lsData.scroll.left = window.pageXOffset, window._lsData.scroll.top = window.pageYOffset, window._lsData.scroll.leftMax = window._lsData.document.width - window._lsData.viewport.width, window._lsData.scroll.topMax = window._lsData.document.height - window._lsData.viewport.height)
    }), ie(document).on("wheel.lsGlobal ", function(e) {
        0 !== Math.abs(e.originalEvent.deltaY) && (window._lsData.scroll.direction = e.originalEvent.deltaY < 0 ? "up" : "down")
    }), ie(document).on("touchstart.lsGlobal ", function(e) {
        window._lsData.ts = e.originalEvent.touches[0].clientY
    }), ie(document).on("touchend.lsGlobal ", function(e) {
        e = e.originalEvent.changedTouches[0].clientY;
        window._lsData.ts > e + 5 ? window._lsData.scroll.direction = "down" : window._lsData.ts < e - 5 && (window._lsData.scroll.direction = "up")
    }), ie.fn.layerSlider = function(i, s, a, r) {
        window._lsData.documentIsAccessible = !0, i = i || {};
        var t, e = "1.8.0",
            o = ie.fn.jquery;
        if (window._layerSlider.checkVersions(e, o, e)) return (typeof i).match("object|undefined") ? this.each(function(e) {
            t = "LS" + Math.random().toString(36).substr(2, 9), ie(this).data("lsSliderUID") || (window._layerSliders[t] = new n(this, ie(this), i, t))
        }) : "data" === i ? window._layerSliders[this.data("lsSliderUID")] : "eventData" === i ? window._layerSliders[this.data("lsSliderUID")].api.eventData() : "defaultInitOptions" === i ? window._layerSliders[this.data("lsSliderUID")].defaults.init.options || !1 : "userInitOptions" === i ? window._layerSliders[this.data("lsSliderUID")].userInitOptions || !1 : "sliderInitOptions" === i ? window._layerSliders[this.data("lsSliderUID")].o || !1 : "originalMarkup" === i ? window._layerSliders[this.data("lsSliderUID")].originalMarkup || !1 : this.each(function(e) {
            var t = window._layerSliders[ie(this).data("lsSliderUID")];
            t && t.api.methods(i, s, a, r), t = null
        });
        window._layerSlider.showNotice(this, "oldjquery", o, e)
    };
    var n = function(I, $, i, B) {
        $.data("lsSliderUID", B).attr("data-layerslider-uid", B);
        var J = this,
            ee = J.gsap = window._layerSlider.GSAP || window,
            M = ie(window),
            te = window._lsData;
        J.defaults = {
            init: {
                staggerSplitChar: "|",
                rangeSplitChar: "..",
                randomSplitChar: "|",
                openingBracket: "[",
                closingBracket: "]",
                dataKey: "_LS",
                controls: ["#playmedia", "#pausemedia", "#unmute", "#unmutemedia", "#start", "#stop", "#prev", "#next", "#replay", "#reverse", "#reverse-replay", "#reversereplay"],
                options: {
                    silentMode: !1,
                    getData: !1,
                    destroyAfter: !0,
                    type: "responsive",
                    fullSizeMode: "normal",
                    fitScreenWidth: !0,
                    calculateOffsetFrom: !1,
                    preventSliderClip: !0,
                    allowFullscreen: !1,
                    performanceMode: !0,
                    performanceModeThreshold: "20sh",
                    responsiveUnder: -1,
                    layersContainerWidth: -1,
                    layersContainerHeight: -1,
                    maxRatio: -1,
                    insertMethod: "prependTo",
                    insertSelector: null,
                    clipSlideTransition: !1,
                    slideBGSize: "cover",
                    slideBGPosition: "50% 50%",
                    preferBlendMode: !1,
                    scene: !1,
                    sceneHeight: 2,
                    sceneSpeed: 100,
                    sceneDuration: null,
                    smoothScrollDuration: 1e3,
                    stickTo: "center",
                    autoStart: !0,
                    startInViewport: !0,
                    playByScroll: !1,
                    playByScrollSpeed: 1,
                    playByScrollStart: !1,
                    playByScrollSkipSlideBreaks: !1,
                    pauseOnHover: !1,
                    pauseLayers: !1,
                    firstSlide: 1,
                    sliderFadeInDuration: 0,
                    animateFirstSlide: !1,
                    firstSlideDuration: !1,
                    firstSlideTimeShift: !1,
                    cycles: -1,
                    forceCycles: !0,
                    twoWaySlideshow: !1,
                    shuffleSlideshow: !1,
                    forceLayersOutDuration: 750,
                    slideDuration: !1,
                    slideDurationWithoutLayers: 3e3,
                    slideTransitionDuration: !1,
                    slideTimeShift: 0,
                    skin: "v6",
                    skinsPath: "/layerslider/skins/",
                    globalBGColor: "transparent",
                    globalBGImage: !1,
                    globalBGRepeat: "no-repeat",
                    globalBGAttachment: "scroll",
                    globalBGSize: "auto",
                    globalBGPosition: "50% 50%",
                    marginTop: !1,
                    marginBottom: !1,
                    navPrevNext: !0,
                    navStartStop: !0,
                    navButtons: !0,
                    keybNav: !0,
                    touchNav: !0,
                    hoverPrevNext: !0,
                    hoverBottomNav: !1,
                    showBarTimer: !1,
                    showCircleTimer: !0,
                    showSlideBarTimer: !1,
                    thumbnailNavigation: "hover",
                    tnFillMode: "contain",
                    tnContainerWidth: "60%",
                    tnWidth: 100,
                    tnHeight: 60,
                    tnActiveOpacity: 35,
                    tnInactiveOpacity: 100,
                    scrollModifier: 0,
                    autoPlayVideos: !0,
                    autoPauseSlideshow: "auto",
                    youtubePreview: "maxresdefault.jpg",
                    rememberUnmuteState: !0,
                    parallaxCenterDegree: 40,
                    parallaxSensitivity: 10,
                    parallaxCenterLayers: "center",
                    parallaxScrollReverse: !1,
                    scrollCenterLayers: "center",
                    yourLogo: !1,
                    yourLogoStyle: "left: -10px; top: -10px;",
                    yourLogoLink: !1,
                    yourLogoTarget: "_self",
                    optimizeForMobile: !0,
                    hideOnMobile: !1,
                    hideUnder: -1,
                    hideOver: -1,
                    slideOnSwipe: !0,
                    allowRestartOnResize: !1,
                    fixFloatedContainers: !1,
                    useSrcset: !0,
                    hashChange: !1,
                    refreshWaypoint: !0,
                    staticImage: ""
                }
            },
            slider: {
                errorText: "LayerSlider (UID: " + B + ") error:"
            },
            slide: {
                keys: window._lsData.slide.keys,
                options: {
                    $link: !1,
                    index: -1,
                    data: {
                        duration: -1,
                        timeShift: 0,
                        calculatedTimeShift: 0
                    },
                    parallax: {},
                    kenBurns: {
                        scale: 1.2
                    },
                    filter: {}
                },
                registerPluginDefaults: function(e, t, i) {
                    J.defaults.slide.options.plugins || (J.defaults.slide.options.plugins = {}), J.defaults.slide.options.plugins[e] = t
                }
            },
            layer: {
                keys: window._lsData.layer.keys,
                splitTypeKeys: ["chars_asc", "chars_desc", "chars_rand", "chars_center", "chars_edge", "words_asc", "words_desc", "words_rand", "words_center", "words_edge", "lines_asc", "lines_desc", "lines_rand", "lines_center", "lines_edge"],
                timelineHierarchy: {
                    slidestart: [0],
                    transitioninstart: [1],
                    transitioninend: [2],
                    textinstart: [3, [1, 2, 6, 7, 8]],
                    textinend: [4],
                    allinend: [5],
                    loopstart: [6, [1, 2, 3, 4, 5]],
                    loopend: [7],
                    autoparallaxstart: [6.5, [0, 1, 2, 3, 4, 5, 6, 7]],
                    autoparallaxend: [7.5],
                    transitioninandloopend: [8],
                    textinandloopend: [9],
                    allinandloopend: [10],
                    textoutstart: [11, [2, 3, 4, 5, 6, 7, 8, 9, 10]],
                    textoutend: [12],
                    textoutandloopend: [13],
                    transitionoutstart: [14, [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]],
                    transitionoutend: [15],
                    alloutend: [16],
                    alloutandloopend: [17]
                },
                properties: {
                    filter: function() {
                        return {
                            blur: 0,
                            brightness: 100,
                            contrast: 100,
                            grayscale: 0,
                            "hue-rotate": 0,
                            invert: 0,
                            saturate: 100,
                            sepia: 0
                        }
                    }
                },
                options: function(e, t) {
                    t = {
                        is: {
                            slideBackground: !!e.is("img.ls-bg"),
                            backgroundVideo: !!e.is(".ls-bg-video"),
                            imageLayer: !!e.is("img.ls-layer"),
                            layerGroup: !!e.is(".ls-layer-group"),
                            insideLayerGroup: !!e.data("$layerGroup"),
                            mediaLayer: !1,
                            textLayer: !1,
                            responsive: !0,
                            onSlide: t
                        },
                        should: {},
                        elements: {},
                        settings: {
                            position: "relative",
                            slideIn: t,
                            slideOut: t
                        },
                        styleSettings: {
                            minfontsize: 0,
                            minmobilefontsize: 0
                        },
                        mediaSettings: {
                            backgroundVideo: !1
                        },
                        timeline: {
                            slidestart: 0,
                            transitioninstart: 0,
                            transitioninend: 0,
                            textinstart: 0,
                            textinend: 0,
                            allinend: function(e) {
                                return Math.max(this.transitioninend, this.textinend)
                            },
                            loopstart: 0,
                            loopend: 0,
                            transitioninandloopend: function(e) {
                                return 0 === this.loopend && e.loop.enabled && ("number" == typeof e.loop.startAt || -1 !== e.loop.startAt.indexOf("textinstart") && -1 !== e.loop.startAt.indexOf("textinend") && -1 !== e.loop.startAt.indexOf("allinend")) ? (this.loopstart = J.transitions.layers.timeline.getTiming(e, e.loop.startAt, "loopstart"), this.loopend = -1 !== e.loop.count && e.timeline.loopstart + (e.loop.repeat + 1) * e.loop.duration + e.loop.repeat * e.loop.repeatDelay) : J.debugMode && J.debug.add("warn", "layerTransition.infinite", e.self[0].tagName + "." + e.self.attr("class") + " [ " + e.self.html().substr(0, 30) + "... ]"), Math.max(this.transitioninend, this.loopend)
                            },
                            textinandloopend: function(e) {
                                return Math.max(this.textinend, this.loopend)
                            },
                            allinandloopend: function(e) {
                                return Math.max(this.allinend(), this.loopend)
                            },
                            textoutstart: 0,
                            textoutend: 0,
                            textoutandloopend: function(e) {
                                return Math.max(this.textoutend, this.loopend)
                            },
                            transitionoutstart: function(e) {
                                return Math.max(this.allinandloopend(), this.textoutend)
                            },
                            transitionoutend: 0,
                            alloutend: function(e) {
                                return Math.max(this.transitionoutend, this.textoutend, this.allinend())
                            },
                            alloutandloopend: function(e) {
                                return Math.max(this.transitionoutend, this.textoutandloopend(), this.allinend())
                            },
                            staticfrom: !1,
                            staticto: !1
                        },
                        transitionProperties: { in: {
                                enabled: !0,
                                layerFrom: {
                                    autoCSS: !1,
                                    immediateRender: !1,
                                    css: {
                                        opacity: 0
                                    }
                                },
                                layerTo: {
                                    autoCSS: !1,
                                    onStart: function() {
                                        J.transitions.layers.in.onStart(e)
                                    },
                                    onComplete: function() {
                                        J.transitions.layers.in.onComplete(e)
                                    },
                                    css: {
                                        display: "block",
                                        opacity: 1,
                                        rotation: 0,
                                        rotationX: 0,
                                        rotationY: 0,
                                        scaleX: 1,
                                        scaleY: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0
                                    }
                                },
                                layerStyleFrom: {
                                    autoCSS: !1,
                                    immediateRender: !1,
                                    css: {}
                                },
                                layerStyleTo: {
                                    autoCSS: !1,
                                    css: {}
                                },
                                clipFrom: {
                                    autoCSS: !1,
                                    immediateRender: !1,
                                    css: {}
                                },
                                clipTo: {
                                    autoCSS: !1,
                                    css: {}
                                },
                                layerShouldBeConverted: {
                                    transformOrigin: "50% 50% 0",
                                    x: 0,
                                    y: 0
                                },
                                layerStyleShouldBeConvertedFrom: {},
                                layerStyleShouldBeConvertedTo: {},
                                clipShouldBeConverted: {},
                                startAt: 0,
                                duration: 1,
                                ease: "easeInOutQuint"
                            },
                            textIn: {
                                enabled: null,
                                nodesFrom: {
                                    cycle: {},
                                    random: {},
                                    opacity: 0
                                },
                                nodesTo: {
                                    ease: "easeInOutQuint",
                                    css: {
                                        opacity: 1,
                                        rotation: 0,
                                        rotationX: 0,
                                        rotationY: 0,
                                        scaleX: 1,
                                        scaleY: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        x: 0,
                                        y: 0
                                    },
                                    onStart: function() {
                                        J.layers.set.dataAttribute("add", e, "text-animating-in")
                                    },
                                    onComplete: function() {
                                        J.layers.set.dataAttribute("remove", e, "text-animating-in"), J.layers.set.dataAttribute("add", e, "active")
                                    }
                                },
                                shouldBeConverted: {
                                    cycle: {},
                                    random: {},
                                    transformOrigin: "50% 50% 0",
                                    x: 0,
                                    y: 0
                                },
                                layerStyle: {},
                                split: "",
                                shiftNodes: .05,
                                startAt: "transitioninend",
                                duration: 1
                            },
                            out: {
                                enabled: !0,
                                layerFrom: {
                                    autoCSS: !1,
                                    immediateRender: !1,
                                    css: {}
                                },
                                layerTo: {
                                    autoCSS: !1,
                                    onStart: function() {
                                        J.transitions.layers.out.onStart(e)
                                    },
                                    onComplete: function() {
                                        J.transitions.layers.out.onComplete(e)
                                    },
                                    css: {
                                        opacity: 0,
                                        rotation: 0,
                                        rotationX: 0,
                                        rotationY: 0,
                                        scaleX: 1,
                                        scaleY: 1,
                                        skewX: 0,
                                        skewY: 0
                                    }
                                },
                                layerStyleFrom: {
                                    autoCSS: !1,
                                    immediateRender: !1,
                                    css: {}
                                },
                                layerStyleTo: {
                                    autoCSS: !1,
                                    css: {}
                                },
                                clipFrom: {
                                    autoCSS: !1,
                                    immediateRender: !1,
                                    css: {}
                                },
                                clipTo: {
                                    autoCSS: !1,
                                    css: {}
                                },
                                layerShouldBeConverted: {
                                    x: 0,
                                    y: 0
                                },
                                layerStyleShouldBeConvertedFrom: {},
                                layerStyleShouldBeConvertedTo: {},
                                clipShouldBeConverted: {},
                                startAt: "slidechangeonly",
                                duration: 1,
                                ease: "easeInOutQuint"
                            },
                            textOut: {
                                enabled: null,
                                nodesFrom: {
                                    immediateRender: !1,
                                    cycle: {},
                                    opacity: 1
                                },
                                nodesTo: {
                                    ease: "easeInOutQuint",
                                    immediateRender: !1,
                                    cycle: {},
                                    random: {},
                                    opacity: 0,
                                    onStart: function() {
                                        J.layers.set.dataAttribute("add", e, "text-animating-out")
                                    },
                                    onComplete: function() {
                                        J.layers.set.dataAttribute("remove", e, "text-animating-out"), J.layers.set.dataAttribute("add", e, "hidden")
                                    }
                                },
                                layerStyle: {},
                                shouldBeConverted: {
                                    cycle: {},
                                    random: {},
                                    x: 0,
                                    y: 0
                                },
                                split: "",
                                startAt: "allinandloopend",
                                shiftNodes: .05,
                                duration: 1
                            },
                            loop: {
                                enabled: null,
                                from: {
                                    autoCSS: !1,
                                    immediateRender: !1,
                                    css: {}
                                },
                                to: {
                                    autoCSS: !1,
                                    css: {}
                                },
                                clipTo: {
                                    autoCSS: !1,
                                    immediateRender: !1,
                                    css: {}
                                },
                                layerShouldBeConverted: {
                                    transformOrigin: "50% 50% 0",
                                    x: 0,
                                    y: 0
                                },
                                clipShouldBeConverted: {},
                                ease: "linear",
                                startAt: "allinend",
                                repeatDelay: 0,
                                duration: 1,
                                count: 0,
                                yoyo: !1
                            },
                            hover: {
                                enabled: null,
                                from: {
                                    autoCSS: !1,
                                    immediateRender: !1,
                                    css: {}
                                },
                                to: {
                                    autoCSS: !1,
                                    css: {}
                                },
                                shouldBeConverted: {
                                    transformOrigin: "50% 50% 0"
                                },
                                alwaysOnTop: !0,
                                easeIn: "easeInOutQuint",
                                durationIn: .5
                            },
                            parallax: {
                                enabled: null
                            },
                            scroll: {
                                enabled: null,
                                shouldBeConverted: {
                                    transformOrigin: "50% 50% 0"
                                },
                                xresponsive: !0,
                                yresponsive: !0
                            },
                            kenBurns: {
                                scale: 1.2
                            },
                            clip: {
                                enabled: !1,
                                min: "0 0 0 0",
                                max: "-9999 9999 9999 -9999"
                            },
                            filter: {
                                values: {
                                    style: {},
                                    in: {},
                                    out: {},
                                    loop: {},
                                    hover: {},
                                    afterIn: {},
                                    afterLoop: {},
                                    bgFrom: {},
                                    bgTo: {}
                                },
                                transitions: {
                                    bg: null,
                                    in: null,
                                    out: null,
                                    loop: null,
                                    hover: null
                                }
                            },
                            init: {
                                wrapper: {
                                    autoCSS: !1,
                                    immediateRender: !1,
                                    css: {
                                        display: "block"
                                    }
                                }
                            },
                            transformPerspective: {
                                layer: 500,
                                text: 500,
                                loop: 500,
                                hover: 500
                            },
                            reset: {
                                wrapperOnTimelineEnd: {
                                    autoCSS: !1,
                                    css: {
                                        opacity: 1,
                                        display: "none"
                                    }
                                },
                                wrapperOnSlideChange: {
                                    autoCSS: !1,
                                    css: {
                                        x: 0,
                                        y: 0,
                                        rotation: 0,
                                        rotationX: 0,
                                        rotationY: 0,
                                        scaleX: 1,
                                        scaleY: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        opacity: 1,
                                        display: "none"
                                    }
                                },
                                loopWrapperOnSlideChange: {
                                    autoCSS: !1,
                                    css: {
                                        x: 0,
                                        y: 0,
                                        rotation: 0,
                                        rotationX: 0,
                                        rotationY: 0,
                                        scaleX: 1,
                                        scaleY: 1,
                                        skewX: 0,
                                        skewY: 0,
                                        opacity: 1
                                    }
                                }
                            }
                        }
                    };
                    return {
                        is: t.is,
                        should: t.should,
                        elements: t.elements,
                        settings: t.settings,
                        styleSettings: t.styleSettings,
                        mediaSettings: t.mediaSettings,
                        mediaProperties: t.mediaProperties,
                        timeline: t.timeline,
                        in: t.transitionProperties.in,
                        inLayerFrom: t.transitionProperties.in.layerFrom,
                        inLayerFromCSS: t.transitionProperties.in.layerFrom.css,
                        inLayerStyleFrom: t.transitionProperties.in.layerStyleFrom,
                        inLayerStyleFromCSS: t.transitionProperties.in.layerStyleFrom.css,
                        inClipFrom: t.transitionProperties.in.clipFrom,
                        inClipFromCSS: t.transitionProperties.in.clipFrom.css,
                        inLayerTo: t.transitionProperties.in.layerTo,
                        inLayerToCSS: t.transitionProperties.in.layerTo.css,
                        inLayerStyleTo: t.transitionProperties.in.layerStyleTo,
                        inLayerStyleToCSS: t.transitionProperties.in.layerStyleTo.css,
                        inClipTo: t.transitionProperties.in.clipTo,
                        inClipToCSS: t.transitionProperties.in.clipTo.css,
                        inClipShouldBeConverted: t.transitionProperties.in.clipShouldBeConverted,
                        inLayerShouldBeConverted: t.transitionProperties.in.layerShouldBeConverted,
                        inLayerStyleShouldBeConvertedFrom: t.transitionProperties.in.layerStyleShouldBeConvertedFrom,
                        inLayerStyleShouldBeConvertedTo: t.transitionProperties.in.layerStyleShouldBeConvertedTo,
                        textIn: t.transitionProperties.textIn,
                        textInLayerStyle: t.transitionProperties.textIn.layerStyle,
                        textInNodesFrom: t.transitionProperties.textIn.nodesFrom,
                        textInNodesTo: t.transitionProperties.textIn.nodesTo,
                        textInNodesToCSS: t.transitionProperties.textIn.nodesTo.css,
                        textInShouldBeConverted: t.transitionProperties.textIn.shouldBeConverted,
                        out: t.transitionProperties.out,
                        outLayerFrom: t.transitionProperties.out.layerFrom,
                        outLayerFromCSS: t.transitionProperties.out.layerFrom.css,
                        outLayerStyleFrom: t.transitionProperties.out.layerStyleFrom,
                        outLayerStyleFromCSS: t.transitionProperties.out.layerStyleFrom.css,
                        outLayerTo: t.transitionProperties.out.layerTo,
                        outLayerToCSS: t.transitionProperties.out.layerTo.css,
                        outLayerStyleTo: t.transitionProperties.out.layerStyleTo,
                        outLayerStyleToCSS: t.transitionProperties.out.layerStyleTo.css,
                        outClipTo: t.transitionProperties.out.clipTo,
                        outClipToCSS: t.transitionProperties.out.clipTo.css,
                        outClipShouldBeConverted: t.transitionProperties.out.clipShouldBeConverted,
                        outLayerShouldBeConverted: t.transitionProperties.out.layerShouldBeConverted,
                        outLayerStyleShouldBeConvertedFrom: t.transitionProperties.out.layerStyleShouldBeConvertedFrom,
                        outLayerStyleShouldBeConvertedTo: t.transitionProperties.out.layerStyleShouldBeConvertedTo,
                        textOut: t.transitionProperties.textOut,
                        textOutLayerStyle: t.transitionProperties.textOut.layerStyle,
                        textOutNodesFrom: t.transitionProperties.textOut.nodesFrom,
                        textOutNodesTo: t.transitionProperties.textOut.nodesTo,
                        textOutShouldBeConverted: t.transitionProperties.textOut.shouldBeConverted,
                        loop: t.transitionProperties.loop,
                        loopFrom: t.transitionProperties.loop.from,
                        loopFromCSS: t.transitionProperties.loop.from.css,
                        loopTo: t.transitionProperties.loop.to,
                        loopToCSS: t.transitionProperties.loop.to.css,
                        loopClipTo: t.transitionProperties.loop.clipTo,
                        loopClipToCSS: t.transitionProperties.loop.clipTo.css,
                        loopClipShouldBeConverted: t.transitionProperties.loop.clipShouldBeConverted,
                        loopLayerShouldBeConverted: t.transitionProperties.loop.layerShouldBeConverted,
                        hover: t.transitionProperties.hover,
                        hoverFrom: t.transitionProperties.hover.from,
                        hoverFromCSS: t.transitionProperties.hover.from.css,
                        hoverTo: t.transitionProperties.hover.to,
                        hoverToCSS: t.transitionProperties.hover.to.css,
                        hoverShouldBeConverted: t.transitionProperties.hover.shouldBeConverted,
                        parallax: t.transitionProperties.parallax,
                        scroll: t.transitionProperties.scroll,
                        scrollShouldBeConverted: t.transitionProperties.scroll.shouldBeConverted,
                        kenBurns: t.transitionProperties.kenBurns,
                        clip: t.transitionProperties.clip,
                        filter: t.transitionProperties.filter,
                        transformPerspective: t.transitionProperties.transformPerspective,
                        init: t.transitionProperties.init,
                        reset: t.transitionProperties.reset
                    }
                }
            }
        }, J.slides = {
            count: 0,
            first: {},
            last: {},
            prev: {},
            current: {},
            next: {},
            init: function() {
                if (!document.body.contains(I)) return !1;
                for (var e = $.find("> .ls-layer, > .ls-slide"), t = 0, i = J.defaults.slide.keys, s = 0, a = e.length; s < a; s++) {
                    var r = ie(e[s]),
                        o = r[0].style,
                        n = ie.extend(!0, {}, J.defaults.slide.options),
                        l = !1;
                    if (J.slides.count++, r.removeClass("ls-layer").addClass("ls-slide").css({
                            width: J.slider.initial.originalWidth,
                            height: J.slider.initial.originalHeight
                        }).appendTo(J.slider.$hiddenWrapper), r.data("ls"))
                        for (var d = r.data("ls").split(";"), c = 0; c < d.length; c++) {
                            var p, u, h = d[c].split(":");
                            h[0] = ie.trim(h[0].toLowerCase()), h[1] = ie.trim(h[1]), -1 == ["thumbnail"].indexOf(h[0]) && (h[1] = h[1].toLowerCase()), "" !== h[0] && (void 0 !== i[h[0]] ? (p = void 0 === i[h[0]][1] ? h[0] : i[h[0]][1], u = J.functions.convert.properties(h[1]), -1 === p.toLowerCase().indexOf("duration") && -1 === p.toLowerCase().indexOf("delay") && "timeShift" != p || (u /= 1e3), n[i[h[0]][0]] || (n[i[h[0]][0]] = {}), n[i[h[0]][0]][p] = u) : n.data[h[0]] = h[1])
                        }
                    if (n.plugins && !ie.isEmptyObject(n.plugins))
                        for (var m in n.plugins)
                            if (r.data("ls-plugin-" + m)) {
                                var f, g = r.data("ls-plugin-" + m).toLowerCase().split(";"),
                                    y = {};
                                for (f in n.plugins[m]) y[f.toLowerCase()] = f;
                                for (var v = 0; v < g.length; v++) {
                                    var w, b = g[v].split(":");
                                    b[0] = ie.trim(b[0]), "" !== b[0] && (w = J.functions.convert.properties(ie.trim(b[1])), -1 === b[0].indexOf("duration") && -1 === b[0].indexOf("delay") || (w /= 1e3), y[b[0]] ? n.plugins[m][y[b[0]]] = w : n.plugins[m][b[0]] = w)
                                }
                            } else delete n.plugins[m];
                    r.children("a.ls-link").length && (n.data.$link = r.children("a.ls-link").first().css({
                        zIndex: 5
                    }).attr("data-ls-slide-link", t + 1).appendTo(J.slider.$layersWrapper), J.layers.set.smartLinks(n.data.$link)), n.data.$backgroundVideo = r.children('[data-ls*="backgroundvideo"]').first(), n.data.$backgroundVideo.find("iframe, video, audio").length || (n.data.$backgroundVideo = ie()), n.data.$backgroundVideo.length && (null !== n.data.$backgroundVideo.attr("data-ls").split("backgroundvideo")[1].split(";")[0].match(/(true|enabled|on|1)/i) ? (n.data.$backgroundVideo.addClass("ls-bg-video").css({
                        width: "auto",
                        height: "auto"
                    }).children("video, audio, iframe").css({
                        width: "100%",
                        height: "100%"
                    }), n.data.$backgroundVideo.append(ie('<div class="ls-bg-video-overlay"></div>'))) : n.data.$backgroundVideo = !1);
                    for (var S = r.find("picture"), v = 0, x = S.length; v < x; v++) J.layers.set.pictureElement(ie(S[v]));
                    r.find("> .ls-bg").length && (n.data.$background = r.find("> .ls-bg").first()), n.data.thumbnail || (r.find("> .ls-tn").length ? l = r.find("> .ls-tn").first() : r.find("> .ls-bg").length && (l = r.find("> .ls-bg").first()), l ? (n.data.thumbnail = J.functions.getURL(l), n.data.tnAlt = J.functions.getALT(l)) : n.data.thumbnail = J.o.skinsPath + J.o.skin + "/nothumb.png"), (n.data.customtransition2d || n.data.customtransition3d) && "undefined" == typeof layerSliderCustomTransitions && (delete n.data.customtransition2d, delete n.data.customtransition3d, J.debugMode && J.debug.add("warn", "sliderInit.customTransitions", t + 1)), "visible" === o.overflow && (n.data.overflow = "visible"), n.data.backgroundColor ? n.data.$background || n.data.$backgroundVideo && n.data.$backgroundVideo.length || (n.data.$background = ie("<img>").addClass("ls-bg").attr("src", "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==").appendTo(r)) : n.data.backgroundColor = "" === r[0].style.backgroundColor ? "transparent" : r[0].style.backgroundColor, J.slides[++t] = {}, J.slides[t].data = ie.extend(!0, {}, J.defaults.slide.options.data, n.data), J.slides[t].parallax = n.parallax, J.slides[t].scroll = n.scroll, J.slides[t].kenBurns = n.kenBurns, J.slides[t].filter = n.filter, J.slides[t].index = t, J.slides[t].$layers = ie(), J.slides[t].plugins = n.plugins, J.slider.thumbnails.push(n.data.thumbnail), J.layers.init(r, t)
                }
                J.debugMode && J.debug.groupEnd("sliderInit.style")
            },
            set: {
                slideIndexes: function() {
                    var e = J.slides;
                    e.prev.index = e.current.index, e.current.index = e.next.index, e.next.index = J.slideshow.get.slideInSequence(J.slideshow.direction), e.set.slidesData(), J.slider.set.attributes()
                },
                nextSlideIndex: function(e) {
                    var t = J.slides;
                    t.next.index = e, t.set.slidesData()
                },
                slidesData: function() {
                    var e = J.slides;
                    e.prev = -1 !== e.prev.index ? ie.extend(!0, {}, e[e.prev.index]) : {}, e.current = -1 !== e.current.index ? ie.extend(!0, {}, e[e.current.index]) : {}, e.next = -1 !== e.next.index ? ie.extend(!0, {}, e[e.next.index]) : {}
                },
                firstSlide: function() {
                    var e, t = J.slides;
                    t.first.index = "random" === J.o.firstSlide ? J.o.firstSlide : Math.max(J.functions.convert.properties(J.o.firstSlide, !0), 1), J.o.shuffleSlideshow && 2 < J.slides.count ? J.o.twoWaySlideshow = !1 : J.o.shuffleSlideshow = !1, t.first.index = "random" == t.first.index ? Math.floor(Math.random() * J.slides.count + 1) : t.first.index, !document.location.hash || (e = J.slides.deeplink(document.location.hash, !0)) && (J.slides.first.index = e), t.first.index = t.first.index < 1 || t.first.index > J.slides.count ? 1 : t.first.index, J.o.shuffleSlideshow && "random" != J.o.firstSlide && (t.first.index = J.o.firstSlide), t[t.first.index] && t[t.first.index].data && (t.first.data = ie.extend(!0, {}, t[t.first.index].data)), J.o.playByScroll && J.slideshow.set.normalizedSequence(), J.debugMode && J.debug.options.firstSlide && (t.first.index = J.debug.options.firstSlide)
                },
                actions: function(e, t) {}
            },
            get: {
                deeplink: function(e) {
                    return e && J.slides[e] && J.slides[e].data && J.slides[e].data.deeplink ? J.slides[e].data.deeplink : null
                }
            },
            deeplink: function(e, t) {
                for (var i = !1, s = 1; s < J.slides.count + 1; s++)
                    if (J.slides[s].data.deeplink == e.substring(1)) {
                        if (i = s, t) return i;
                        J.slideshow.changeTo(i, !0, !0)
                    }
                if (!i && t) return !1
            },
            slide: []
        }, J.layers = {
            $all: ie(),
            getStyle: function(e, t) {
                return -1 != e.indexOf("em") ? e : (-1 != e.indexOf("%") ? parseFloat(e) * t : parseFloat(e) || 0).toString()
            },
            toNum: function(e, t) {
                return t = parseFloat(t), -1 != e.indexOf("em") ? parseFloat(e) * t : parseFloat(e)
            },
            init: function(e, t) {
                if (!document.body.contains(I)) return !1;
                for (var i, s = e.find(".ls-bg, .ls-l, .ls-layer, .ls-lg, .ls-layer-group"), a = 0, r = s.length; a < r; a++) {
                    var o = ie(s[a]),
                        n = o[0],
                        l = o.children();
                    if (o.data("slideIndex", t), o.hasClass("ls-l")) o.removeClass("ls-l").addClass("ls-layer");
                    else if (o.hasClass("ls-lg")) o.removeClass("ls-lg").addClass("ls-layer-group");
                    else if (!o.is(".ls-bg, .ls-layer, .ls-layer-group")) {
                        o.remove();
                        continue
                    }
                    o.is("a") && 1 === l.length && ((n = (o = o.children().first())[0]).setAttribute("data-ls", n.parentNode.getAttribute("data-ls")), n.parentNode.removeAttribute("data-ls"), o.parent().removeClass("ls-layer"), o.addClass("ls-layer")), o.is(".ls-layer-group") && o.children().data("$layerGroup", o), o.data(J.defaults.init.dataKey, new J.defaults.layer.options(o, t)), -1 !== o.attr("class").indexOf("ls-linkto-") && this.set.linkTo(o), o.parent().is("a") ? (o.parent().data("slideIndex") && o.data("slideIndex", o.parent().data("slideIndex")), i = o.parent(), this.set.smartLinks(i)) : i = o, i.attr("data-ls-actions") && this.set.actions(i, JSON.parse(i.attr("data-ls-actions")) || {}), J.slides[t].$layers = J.slides[t].$layers.add(i)
                }
            },
            set: {
                mirrorTransitions: function(e) {
                    return e = e.split(" ")
                },
                pictureElement: function(e) {
                    var t = e.find("source").last().attr("srcset").split(" ")[0] || "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
                        i = e.find("img"),
                        s = i.length ? i : ie("<img>").attr("src", t),
                        a = s[0],
                        r = (e.attr("ls-data") || s.attr("ls-data"), e.attr("style") || !1),
                        i = a.currentSrc || a.src,
                        o = i.split(".").pop(),
                        t = (i.indexOf("webp"), s.attr("data-src") ? "data-" : ""),
                        a = "";
                    e.hasClass("ls-bg") ? a = "ls-bg" : e.hasClass("ls-tn") ? a = "ls-tn" : (e.hasClass("ls-l") || e.hasClass("ls-layer")) && (a = "ls-layer");
                    for (var n, l, d, c = e.find("source"), p = 0; p < c.length && (n = c[p], l = (n = ie(n)).attr("srcset"), d = n.attr("sizes"), l.split(" ")[0].split(".").pop() != o); p++);
                    s.removeAttr("width height sizes src srcset data-src data-srcset loading"), s.addClass(a).attr(t + "src", i).attr(t + "srcset", l).attr("sizes", d), r && s.attr("style", r), s.insertAfter(e), e.remove()
                },
                actions: function(s, e) {
                    e.length;
                    ie.each(e, function(e, t) {
                        var i = ie.extend(!0, {}, t),
                            t = i.trigger;
                        s.on(t, function(e) {
                            setTimeout(function(e) {
                                J.actions.do(e)
                            }, i.delay || 0, i)
                        })
                    })
                },
                smartLinks: function(e) {
                    var s = e.attr("href"),
                        t = e.attr("target"),
                        i = "";
                    if (t && -1 !== t.indexOf("ls-scroll")) {
                        switch (s) {
                            case "pagetop":
                                i = "Scroll to page top";
                                break;
                            case "pagebottom":
                                i = "Scroll to page bottom";
                                break;
                            case "slidertop":
                                i = "Scroll to the top of the slider";
                                break;
                            case "":
                            case "sliderbottom":
                                i = "Scroll to the bottom of the slider";
                                break;
                            default:
                                i = "Scroll to a specified location on the page"
                        }
                        J.layers.set.ariaLabel(e, i), e.on("click." + B, function(e) {
                            e.preventDefault();
                            var t, i = document.body.scrollHeight - te.viewport.height;
                            if (s) switch (s) {
                                case "pagetop":
                                    t = 0;
                                    break;
                                case "pagebottom":
                                    t = i;
                                    break;
                                case "slidertop":
                                    t = J.slider.offset.top;
                                    break;
                                case "":
                                case "sliderbottom":
                                    t = J.slider.offset.top + J.slider.height;
                                    break;
                                default:
                                    t = ie(s).filter(":visible").last().length ? ie(s).filter(":visible").last().offset().top : J.slider.offset.top + J.slider.height
                            }
                            t += J.o.scrollModifier, t = Math.min(t, i), t = Math.max(0, t), ee.TweenMax.to("html, body", 1, {
                                scrollTop: t,
                                ease: ee.Quint.easeInOut
                            })
                        })
                    }
                    if (-1 !== J.defaults.init.controls.indexOf(s.toLowerCase()) || s.match(/^\#[0-9]/)) {
                        var a = ie.trim(s.toLowerCase().split("#")[1]),
                            r = parseInt(a);
                        switch (a) {
                            case "playmedia":
                                i = "play active media elements on current slide";
                                break;
                            case "pausemedia":
                                i = "pause active media elements on current slide";
                                break;
                            case "prev":
                                i = "jump to the previous slide";
                                break;
                            case "next":
                                i = "jump to the next slide";
                                break;
                            case "start":
                                i = "start slideshow";
                                break;
                            case "stop":
                                i = "stop slideshow";
                                break;
                            case "replay":
                                i = "replay slide";
                                break;
                            case "reverse":
                                i = "reverse slide";
                                break;
                            case "reverse-replay":
                            case "reversereplay":
                                i = "reverse, than replay slide";
                                break;
                            default:
                                "number" == typeof r && r == r && (i = "jump to slide " + r)
                        }
                        J.layers.set.ariaLabel(e, i), e.on("click." + B, function(e) {
                            if (e.preventDefault(), -1 !== ["prev", "next", "last", "first", "start", "stop"].indexOf(a)) J.navigation[a]("clicked");
                            else if ("number" == typeof r && r == r) J.slideshow.changeTo(r, !0, !0);
                            else if (!J.slider.state.changingSlides) switch (a) {
                                case "replay":
                                    J.api.methods("replay");
                                    break;
                                case "reverse":
                                    J.api.methods("reverse");
                                    break;
                                case "reverse-replay":
                                case "reversereplay":
                                    J.api.methods("reverse", !0);
                                    break;
                                case "playmedia":
                                    J.media.functions.playActiveMedia();
                                    break;
                                case "pausemedia":
                                    J.media.functions.pauseActiveMedia();
                                    break;
                                case "unmute":
                                case "unmutemedia":
                                    J.media.unmute.multipleMediaElements()
                            }
                        })
                    }
                },
                ariaLabel: function(e, t) {
                    e.attr("aria-label") || e.attr("aria-label", t)
                },
                linkTo: function(e) {
                    for (var t = e.attr("class").split(" "), i = 1, s = 0; s < t.length; s++) - 1 != t[s].indexOf("ls-linkto-") && (i = parseInt(t[s].split("ls-linkto-")[1]));
                    e.data(J.defaults.init.dataKey).settings.linkedToSlide = i, e.css({
                        cursor: "pointer"
                    }).on("click." + B, function(e) {
                        e.preventDefault(), $.layerSlider(ie(this).data(J.defaults.init.dataKey).settings.linkedToSlide)
                    })
                },
                wrappers: function(e, t, i) {
                    t.is.slideBackground || t.is.backgroundVideo ? (t.elements.$bgWrapper = e.closest(".ls-bg-wrap"), t.elements.$bgOuterWrapper = e.closest(".ls-bg-outer")) : (t.elements.$wrapper = e.closest(".ls-in-out"), t.elements.$wrapper.data(J.defaults.init.dataKey, {}), t.settings.wrapperData = t.elements.$wrapper.data(J.defaults.init.dataKey), t.elements.$clipWrapper = e.closest(".ls-clip"), t.elements.$clipWrapper.data(J.defaults.init.dataKey, {}), t.settings.clipWrapperData = t.elements.$clipWrapper.data(J.defaults.init.dataKey), t.elements.$loopWrapper = e.closest(".ls-loop"), t.elements.$loopWrapper.data(J.defaults.init.dataKey, {}), t.settings.loopWrapperData = t.elements.$loopWrapper.data(J.defaults.init.dataKey)), t.parallax.enabled && (t.elements.$parallaxWrapper = e.closest(".ls-parallax"), t.elements.$parallaxWrapper.data(J.defaults.init.dataKey, {
                        parallax: {}
                    }), t.settings.parallaxWrapperData = t.elements.$parallaxWrapper.data(J.defaults.init.dataKey), J.transitions.layers.parallax.addLayer(t.elements.$parallaxWrapper, t.settings.parallaxWrapperData.parallax, t, i)), t.scroll.enabled && (t.elements.$scrollWrapper = e.closest(".ls-scroll"), t.elements.$scrollTransformWrapper = e.closest(".ls-scroll-transform"), t.elements.$scrollWrapper.data(J.defaults.init.dataKey, {
                        scroll: {}
                    }), t.settings.scrollWrapperData = t.elements.$scrollWrapper.data(J.defaults.init.dataKey), J.transitions.layers.scroll.addLayer(t.elements.$scrollWrapper, t.settings.scrollWrapperData.scroll, t, i)), t.hover.enabled && !J.slides[i].data.globalhover && J.transitions.layers.hover.set(e, t), t.elements.$outerWrapper = e.closest(".ls-z"), t.elements.$outerStyleWrapper = t.elements.$outerWrapper.find("> .ls-wrapper"), t.elements.$outerWrapper.attr("data-slide-index", i), t.elements.$innerWrapper = e.closest(".ls-wrapper").addClass("ls-inner-wrapper"), t.elements.$_innerWrappers = t.elements.$outerWrapper.find(".ls-wrapper"), t.elements.$_allWrappers = t.elements.$outerWrapper.add(t.elements.$_innerWrappers), t.elements.$_outerWrappers = t.elements.$outerWrapper.add(t.elements.$outerWrapper.find(".ls-wrapper:not(.ls-inner-wrapper)"))
                },
                singleLayer: function(e, t) {
                    J.layers.set.style(e), J.layers.set.properties(e, t), J.layers.set.dataAttribute("add", e, "hidden"), e.data("hasBeenSet", !0)
                },
                style: function(e) {
                    var t, i, s, a, r, o, n, l, d, c, p, u = e[0],
                        h = e.data(J.defaults.init.dataKey),
                        m = u.style,
                        f = J.layers,
                        g = 0,
                        y = 0,
                        v = !1,
                        w = parseFloat(u.style.fontSize) || 36,
                        b = u.getBoundingClientRect(),
                        S = !e.is("img") && window.LS_previewZoom || 1,
                        x = "" !== m.paddingLeft ? f.getStyle(m.paddingLeft, J.slider.initial.percW) : f.getStyle(e.css("padding-left"), J.slider.initial.percW),
                        T = "" !== m.paddingRight ? f.getStyle(m.paddingRight, J.slider.initial.percW) : f.getStyle(e.css("padding-right"), J.slider.initial.percW),
                        k = "" !== m.paddingTop ? f.getStyle(m.paddingTop, J.slider.initial.percH) : f.getStyle(e.css("padding-top"), J.slider.initial.percH),
                        C = "" !== m.paddingBottom ? f.getStyle(m.paddingBottom, J.slider.initial.percH) : f.getStyle(e.css("padding-bottom"), J.slider.initial.percH),
                        O = "" !== m.marginLeft ? f.getStyle(m.marginLeft, J.slider.initial.percW) : f.getStyle(e.css("margin-left"), J.slider.initial.percW),
                        P = "" !== m.marginRight ? f.getStyle(m.marginRight, J.slider.initial.percW) : f.getStyle(e.css("margin-right"), J.slider.initial.percW),
                        L = "" !== m.marginTop ? f.getStyle(m.marginTop, J.slider.initial.percH) : f.getStyle(e.css("margin-top"), J.slider.initial.percH),
                        I = "" !== m.marginBottom ? f.getStyle(m.marginBottom, J.slider.initial.percH) : f.getStyle(e.css("margin-bottom"), J.slider.initial.percH);
                    u.style.margin = "0", r = "" !== m.borderLeftWidth ? f.getStyle(m.borderLeftWidth, J.slider.initial.percW) : f.getStyle(e.css("border-left-width"), J.slider.initial.percW), n = "" !== m.borderRightWidth ? f.getStyle(m.borderRightWidth, J.slider.initial.percW) : f.getStyle(e.css("border-right-width"), J.slider.initial.percW), o = "" !== m.borderTopWidth ? f.getStyle(m.borderTopWidth, J.slider.initial.percH) : f.getStyle(e.css("border-top-width"), J.slider.initial.percH), l = "" !== m.borderBottomWidth ? f.getStyle(m.borderBottomWidth, J.slider.initial.percH) : f.getStyle(e.css("border-bottom-width"), J.slider.initial.percH), 1 !== J.media.properties.$allMediaLayers.filter(e).length && !e.children("iframe").length || (p = (c = e.children()).attr("width") ? c.attr("width") : c.width(), $ = c.attr("height") ? c.attr("height") : c.height(), 300 === parseInt(p) && 150 === parseInt($) && (p = 640, $ = 360), "" !== u.style.width && "auto" !== u.style.width || e.css("width", p), "" !== u.style.height && "auto" !== u.style.height || e.css("height", $), "100%" === m.width && "100%" === m.height && (m.left = "50%", m.top = "50%"), v = p / $, c.css({
                        width: "100%",
                        height: "100%"
                    }));
                    var $ = h.attributes;
                    e.is("img") && (d = (s = e.data("preloadedWidth")) / (a = e.data("preloadedHeight")), (!m.width && !m.height || "auto" === m.width && "auto" === m.height) && $ && ($.width && $.height ? (t = -1 === $.width.indexOf("%") ? parseInt($.width) : (g = parseInt($.width), f.getStyle($.width, J.slider.initial.percW)), i = -1 === $.height.indexOf("%") ? parseInt($.height) : (y = parseInt($.height), f.getStyle($.height, J.slider.initial.percH))) : $.maxWidth && (e[0].style.width = $.maxWidth + "px", t = $.maxWidth, i = e.height()))), c = b.width ? b.width / S : (b.right - b.left) / S, S = b.height ? b.height / S : (b.bottom - b.top) / S, t || (t = m.width, -1 !== m.width.indexOf("%") && (g = parseInt(m.width)), t = (t = "" !== t && "auto" !== t ? f.getStyle(t, J.slider.initial.percW) : c - J.layers.toNum(x, w) - J.layers.toNum(T, w) - J.layers.toNum(r, w) - J.layers.toNum(n, w)) || "auto"), i || (i = m.height, -1 !== m.height.indexOf("%") && (y = parseInt(m.height)), i = (i = "" !== i && "auto" !== i ? f.getStyle(i, J.slider.initial.percH) : S - J.layers.toNum(k, w) - J.layers.toNum(C, w) - J.layers.toNum(o, w) - J.layers.toNum(l, w)) || "auto"), v = v || ("auto" !== t && "auto" !== i ? t / i : "auto"), !e.is("img") || m.width || m.height || $ && (!$ || $.width || $.height) || s === t && a === i || (s !== t ? i = (t = 5 < s ? s : t) / (v = 5 < s ? d : v) : a !== i && (t = (i = 5 < a ? a : i) * (v = 5 < a ? d : v))), parseFloat(e.css("opacity")), a = "" !== m.clip && m.clip, m.clip = "", d = m.webkitFilter || m.filter;
                    var B, M, W, _;
                    h.original = {
                        clip: a,
                        clipShouldBeConverted: !1,
                        left: m.left || "0",
                        top: m.top || "0",
                        width: "auto" !== t ? parseFloat(t) : "auto",
                        height: "auto" !== i ? parseFloat(i) : "auto",
                        sWidth: m.width,
                        sHeight: m.height,
                        percentWidth: g,
                        percentHeight: y,
                        backgroundImage: m.backgroundImage,
                        backgroundSize: m.backgroundSize || "cover",
                        backgroundRepeat: m.backgroundRepeat,
                        backgroundPosition: m.backgroundPosition,
                        ratio: v,
                        paddingLeft: x,
                        paddingTop: k,
                        paddingRight: T,
                        paddingBottom: C,
                        marginLeft: O,
                        marginRight: P,
                        marginTop: L,
                        marginBottom: I,
                        borderLeftWidth: r,
                        borderTopWidth: o,
                        borderRightWidth: n,
                        borderBottomWidth: l,
                        borderRadius: (B = e, W = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], _ = "", (M = m).borderRadius && (-1 === M.borderRadius.indexOf("/") ? ie.each(["border-top-left-radius", "border-top-right-radius", "border-bottom-right-radius", "border-bottom-left-radius"], function(e, t) {
                            e = M[W[e]], t = B.css(t), t = ie.trim(void 0 !== e && e.length ? e : t); - 1 == t.indexOf(" ") && -1 == t.indexOf("em") && -1 == t.indexOf("%") && (t = parseInt(t)), _ += t + " "
                        }) : _ = M.borderRadius), ie.trim(_)),
                        fontSize: w,
                        lineHeight: u.style.lineHeight,
                        letterSpacing: u.style.letterSpacing,
                        textStrokeWidth: u.style.textStrokeWidth || u.style.webkitTextStrokeWidth,
                        color: e.css("color"),
                        zIndex: parseInt(e.css("z-index")) || "auto",
                        filter: d,
                        backgroundColor: e.css("background-color"),
                        dataLS: e.attr("data-ls") || "",
                        styles: e.attr("style") || ""
                    }, m.zIndex = "auto", h.responsive = {
                        left: m.left || "0",
                        top: m.top || "0",
                        width: t,
                        height: i
                    }
                },
                properties: function(e, t, i) {
                    t = t || e.data("slideIndex");
                    var s = e.data(J.defaults.init.dataKey);
                    e.data("ls");
                    if (s.is.textLayer = !(e.is("img") || s.is.mediaLayer || s.is.backgroundVideo), (s.self = e).data("ls"))
                        for (var a = J.defaults.layer.keys, r = e.data("ls").split(";"), o = e.data("ls").split(";"), n = 0; n < o.length; n++)
                            if (ie.trim(o[n])) {
                                var l = o[n].indexOf(":"),
                                    d = [o[n].substring(0, l), o[n].substring(l + 1)],
                                    c = null,
                                    p = null,
                                    u = null,
                                    h = null,
                                    m = null;
                                if (d[0] = ie.trim(d[0].toLowerCase()), -1 == ["thumbnail", "poster"].indexOf(d[0]) && (d[1] = d[1].toLowerCase()), "" !== (c = d[0]))
                                    if (void 0 !== a[c = c.replace("split", "text")]) {
                                        if (p = a[c][0], m = "overlay" === c ? ie.trim(r[n].substring(l + 1)) : J.functions.convert.properties(ie.trim(d[1])), -1 !== c.indexOf("mirror") && (m = J.layers.set.mirrorTransitions(ie.trim(d[1]))), !d[1] || -1 === d[1].indexOf("random") && d[1].charAt(0) !== J.defaults.init.openingBracket || (c.match(/(text)/) || (m = J.functions.convert.randomProperties(m, p)), s.should.update || (s.should.update = !0)), "number" == typeof m && p.match(/(duration|startat|shift|delay)/i) && (m /= 1e3), c.match(/(fade)(.+)/)) switch (m) {
                                            case !0:
                                                m = 0;
                                                break;
                                            case !1:
                                                m = 1
                                        }
                                        void 0 !== (h = a[c][1]) ? "" !== m ? "object" == typeof m && -1 == c.indexOf("mirror") ? c.match(/(text)/) ? h.match(/(converted)/i) ? s[h][p] = m : s[h].cycle[p] = m : (u = J.functions.convert.properties(ie.trim(m[0])), J.debugMode && J.debug.add("warn", "layerInit.prop1", [c, m, u]), "number" == typeof u && p.match(/(duration|startat|shift|delay)/i) && (u /= 1e3), s[h][p] = u) : c.match(/(text)/) && -1 !== m.toString().indexOf("random") ? s[h].random[p] = m : s[h][p] = m : J.debugMode && J.debug.add("warn", "layerInit.prop2", c) : s[p][c] = m
                                    } else "clip" === c ? (s.original.clip = d[1], s.original.clipShouldBeConverted = !0) : J.debugMode && J.debug.add("warn", "layerInit.prop4", c)
                            }
                    if (J.browser.isOld && (s.in.enabled = !0, s.textIn.enabled = !1, s.textOut.enabled = !1, s.textIn.type = null, s.textOut.type = null), s.in.enabled && (s.inLayerTo.ease = s.inLayerStyleTo.ease = s.inClipTo.ease = J.functions.convert.easing(s.in.ease)), void 0 !== s.inLayerStyleShouldBeConvertedFrom.borderRadius && (s.inLayerStyleShouldBeConvertedTo.borderRadius = s.original.borderRadius), void 0 !== s.outLayerStyleShouldBeConvertedTo.borderRadius && (s.outLayerStyleShouldBeConvertedFrom.borderRadius = s.original.borderRadius), s.inLayerStyleFromCSS.backgroundColor && (s.inLayerStyleToCSS.backgroundColor = s.original.backgroundColor), s.outLayerStyleToCSS.backgroundColor && (s.outLayerStyleFromCSS.backgroundColor = s.original.backgroundColor), s.inLayerStyleFromCSS.color && (s.inLayerStyleToCSS.color = s.original.color), s.outLayerStyleToCSS.color && (s.outLayerStyleFromCSS.color = s.original.color), void 0 !== s.inLayerStyleShouldBeConvertedFrom.width && (s.inLayerStyleShouldBeConvertedTo.width = s.original.width), void 0 !== s.outLayerStyleShouldBeConvertedTo.width && (s.outLayerStyleShouldBeConvertedFrom.width = s.original.width), void 0 !== s.inLayerStyleShouldBeConvertedFrom.height && (s.inLayerStyleShouldBeConvertedTo.height = s.original.height), void 0 !== s.outLayerStyleShouldBeConvertedTo.height && (s.outLayerStyleShouldBeConvertedFrom.height = s.original.height), void 0 !== s.out.showUntil && 0 !== s.out.showUntil && (s.out.startAt = "transitioninend + " + s.out.showUntil), -1 !== s.out.startAt.indexOf("slidechangeonly") && "slidechangeonly" !== s.out.startAt && (s.out.startAt = "slidechangeonly"), s.out.enabled && (s.outLayerTo.ease = s.outLayerStyleTo.ease = s.outClipTo.ease = J.functions.convert.easing(s.out.ease)), ie.isNumeric(s.loop.count) && (0 < s.loop.count || -1 === s.loop.count) && !1 !== s.loop.enabled ? (s.loop.enabled = !0, s.loopTo.ease = s.loopClipTo.ease = J.functions.convert.easing(s.loop.ease), -1 !== s.loop.count ? s.loop.yoyo ? s.loop.repeat = 2 * s.loop.count - 1 : s.loop.repeat = s.loop.count - 1 : s.loop.repeat = -1) : s.loop.enabled = !1, (!ie.isEmptyObject(s.hoverToCSS) || s.hoverShouldBeConverted.x || s.hoverShouldBeConverted.y || s.hoverShouldBeConverted.borderRadius || s.hoverShouldBeConverted.filter) && !1 !== s.hover.enabled ? (s.hover.enabled = !0, s.hover.easeOut || (s.hover.easeOut = s.hover.easeIn), s.hover.easeIn = J.functions.convert.easing(s.hover.easeIn), s.hover.easeOut = J.functions.convert.easing(s.hover.easeOut, !0), s.hover.durationOut || (s.hover.durationOut = s.hover.durationIn), ee.TweenMax.set(e[0], {
                            autoCSS: !1,
                            css: {
                                transformPerspective: s.hoverShouldBeConverted.transformPerspective
                            }
                        })) : s.hover.enabled = !1, s.parallax.level && ie.isNumeric(s.parallax.level) && 0 !== s.parallax.level && !1 !== s.parallax.enabled ? s.parallax.enabled = !0 : s.parallax.enabled = !1, s.is.slideBackground) {
                        var f = {
                            scale: 1,
                            rotation: 0
                        };
                        if (J.slides[t].kenBurns.zoom && (s.kenBurns = J.slides[t].kenBurns), s.kenBurns.zoom) {
                            switch (s.kenBurns.from = {}, s.kenBurns.to = {}, s.kenBurns.zoom) {
                                case "out":
                                    s.kenBurns.from.scale = s.kenBurns.scale || 1, s.kenBurns.from.rotation = s.kenBurns.rotation || 0, s.kenBurns.to = f;
                                    break;
                                case "in":
                                    s.kenBurns.from = f, s.kenBurns.to.scale = s.kenBurns.scale || 1, s.kenBurns.to.rotation = s.kenBurns.rotation || 0
                            }
                            delete s.kenBurns.scale, delete s.kenBurns.rotation
                        } else s.kenBurns.from = f, s.kenBurns.to = f;
                        ie.isEmptyObject(J.slides[t].filter) || (J.slides[t].filter.from && (s.filter.values.bgFrom = J.transitions.layers.filters.convert(J.slides[t].filter.from)), J.slides[t].filter.to && (s.filter.values.bgTo = J.transitions.layers.filters.convert(J.slides[t].filter.to)))
                    }
                    if (s.textIn.type && -1 === J.defaults.layer.splitTypeKeys.indexOf(s.textIn.type) && (J.debugMode && J.debug.add("warn", "layerInit.splitType3a", [e[0].tagName, s.textIn.type]), delete s.textIn.type, delete s.textIn.ns, s.textIn.enabled = !1), s.textOut.type && -1 === J.defaults.layer.splitTypeKeys.indexOf(s.textOut.type) && (J.debugMode && J.debug.add("warn", "layerInit.splitType3b", [e[0].tagName, s.textOut.type]), delete s.textOut.type, delete s.textOut.ns, s.textOut.enabled = !1), s.textIn.type || s.textOut.type) {
                        var g = 0;
                        if (s.is.textLayer ? (s.textIn.type && (s.textIn.enabled = !0, s.textInNodesTo.ease = J.functions.convert.easing(s.textInNodesTo.ease), s.textIn.split = s.textIn.type.split("_")[0], e.children().length && J.debugMode && (g = 1)), s.textOut.type && !J.o.inLayerPreview && (s.textOut.enabled = !0), s.textOut.enabled && (s.textOutNodesTo.ease = J.functions.convert.easing(s.textOutNodesTo.ease)), s.textOut.enabled && s.textOut.type.split("_")[0] !== s.textIn.split && (s.textIn.split += ", " + s.textOut.type.split("_")[0], e.children().length && J.debugMode && (g = 1)), -1 !== s.textIn.split.indexOf("chars") && -1 === s.textIn.split.indexOf("words") && (s.textIn.split += ", words"), -1 !== s.textIn.split.indexOf("words") && -1 === s.textIn.split.indexOf("lines") && (s.textIn.split += ", lines")) : (delete s.textIn.type, delete s.textOut.type, delete s.textIn.ns, delete s.textOut.ns, J.debugMode && (g = 2)), J.debugMode && 0 !== g && t && !i) switch (g) {
                            case 1:
                                J.debug.add("warn", "layerInit.splitType1", [e.prop("nodeName"), t]);
                                break;
                            case 2:
                                J.debug.add("warn", "layerInit.splitType2", [t, e.prop("nodeName")])
                        }
                    }(s.original.clip || s.inClipShouldBeConverted.clip || s.outClipShouldBeConverted.clip || s.loopClipShouldBeConverted.clip) && (s.clip.enabled = !0), s.in.enabled && s.inLayerToCSS.scale && (delete s.inLayerToCSS.scaleX, delete s.inLayerToCSS.scaleY), s.out.enabled && s.outLayerToCSS.scale && (delete s.outLayerToCSS.scaleX, delete s.outLayerToCSS.scaleY), s.inLayerStyleShouldBeConvertedFrom.filter && (s.filter.values.in = J.transitions.layers.filters.convert(s.inLayerStyleShouldBeConvertedFrom.filter)), s.filter.values.style = J.transitions.layers.filters.convert(s.original.filter), s.outLayerStyleShouldBeConvertedTo.filter && (s.filter.values.out = J.transitions.layers.filters.convert(s.outLayerStyleShouldBeConvertedTo.filter)), s.loopLayerShouldBeConverted.filter && (s.filter.values.loop = J.transitions.layers.filters.convert(s.loopLayerShouldBeConverted.filter)), s.hoverShouldBeConverted.filter && (s.filter.values.hover = J.transitions.layers.filters.convert(s.hoverShouldBeConverted.filter)), s.in.enabled || (s.in.duration = 0), s.textIn.enabled || (s.textIn.duration = 0), s.loop.enabled || (s.loop.duration = 0), s.textOut.enabled || (s.textOut.duration = 0), s.out.enabled || (s.out.duration = 0), e.attr("data-ls-slidein", t), void 0 !== s.settings.static && "none" !== s.settings.static ? (0 !== (g = parseInt(s.settings.static)) && "forever" !== s.settings.static ? (e.attr("data-ls-slideout", g), s.settings.slideOut = g) : s.settings.slideOut = 0, s.is.static = !0, e.attr("data-ls-static", "1")) : e.attr("data-ls-slideout", t), s.is.mediaLayer && e.children("video, audio").length && J.media.html5.singleInit(e.children("video, audio").eq(0)), s.is.backgroundVideo && s.styleSettings.overlay && e.find(".ls-bg-video-overlay").css({
                        backgroundImage: "url(" + s.styleSettings.overlay + ")"
                    }), s.styleSettings.minfontsize && (s.styleSettings.minfontsize = parseFloat(s.styleSettings.minfontsize)), s.styleSettings.minmobilefontsize && (s.styleSettings.minmobilefontsize = parseFloat(s.styleSettings.minmobilefontsize)), J.slider.isPopup && (s.is.pinned = !1), s.is.pinned && (J.slider.hasPinnedLayers = !0), s.styleSettings.smartbg && (e.attr("data-ls-smart-bg", "").css("--bgs", s.original.backgroundSize), s.styleSettings.smartbg = s.styleSettings.smartbg.toString(), s.is.smartBG = !0)
                },
                dataAttribute: function(e, t, i) {
                    var s = t.add(t.closest(".ls-wrapper.ls-z"));
                    switch (e) {
                        case "remove":
                            s.removeAttr("data-ls-" + i);
                            break;
                        case "add":
                            "active" === i && s.removeAttr("data-ls-hidden"), "hidden" === i && s.removeAttr("data-ls-active data-ls-animating-in data-ls-text-animating-in data-ls-animating-out data-ls-text-animating-out"), -1 === i.indexOf("in") && -1 === i.indexOf("out") || (s.removeAttr("data-ls-active"), s.removeAttr("data-ls-hidden")), "active" === i && t.is("[data-ls-animating-in], [data-ls-text-animating-in]") || "hidden" === i && t.is("[data-ls-animating-out], [data-ls-text-animating-out]") || s.attr("data-ls-" + i, "")
                    }
                }
            },
            get: function(e) {
                var t, i, s, a, r, o = this.$all;
                return e && (t = "in", s = i = "", a = ':not(".ls-bg")', r = ':not(".ls-bg-video")', -1 == (e = e.toLowerCase()).indexOf("bgvideo") && -1 == e.indexOf("backgroundvideo") || (r = "", e = e.replace("bgvideo", "").replace("backgroundvideo", "")), -1 != e.indexOf("video") && (s += ", > video", e = e.replace("video", "")), -1 != e.indexOf("audio") && (s += ", > audio", e = e.replace("audio", "")), -1 != e.indexOf("html5") && (s += ", > video, > audio", e = e.replace("html5", "")), -1 != e.indexOf("youtube") && (s += ', > iframe[src*="youtube-nocookie.com"], > iframe[src*="youtube.com"], > iframe[src*="youtu.be"], > iframe[data-src*="youtube-nocookie.com"], > iframe[data-src*="youtube.com"], > iframe[data-src*="youtu.be"]', e = e.replace("youtube", "")), -1 != e.indexOf("vimeo") && (s += ', > iframe[src*="player.vimeo"], > iframe[data-src*="player.vimeo"]', e = e.replace("vimeo", "")), "," == s.charAt(0) && (s = s.substring(2, s.length)), -1 != e.indexOf("out") && (t = "out"), -1 == e.indexOf("img") && -1 == e.indexOf("image") || (i = "img"), -1 == e.indexOf("bg") && -1 == e.indexOf("background") && -1 == e.indexOf("bgonly") || (a = ""), o = -1 != e.indexOf("current") ? o.filter(i + "[data-ls-slide" + t + '="' + J.slides.current.index + '"]' + a + r) : -1 != e.indexOf("next") ? o.filter(i + "[data-ls-slide" + t + '="' + J.slides.next.index + '"]' + a + r) : o.filter(i + a + r), -1 != e.indexOf("notactive") && (o = o.filter(".ls-bg, .ls-bg-video, :hidden"), e = e.replace("notactive", "")), -1 != e.indexOf("active") && (o = o.filter(':visible:not(.ls-bg, .ls-bg-video), [data-ls-static="1"]:not([data-ls-hidden])'), e = e.replace("active", "")), -1 != e.indexOf("notstatic") && (o = o.filter(':not([data-ls-static="1"])'), e = e.replace("notstatic", "")), -1 != e.indexOf("static") && (o = o.filter('[data-ls-static="1"]'), e = e.replace("static", "")), -1 != e.indexOf("bgonly") && (o = o.filter(".ls-bg"), e = e.replace("bgonly", "")), "" !== s && (o = o.find(s))), o
            },
            update: {
                data: function(e, t, i) {
                    var s, a, r;
                    switch (e instanceof jQuery || (e = ie(e)), i && e.attr("data-ls", i).data("ls", i), s = (a = e.data(J.defaults.init.dataKey)).is.onSlide, r = a.original, t) {
                        default:
                            case "transitions":
                            a.settings.timelineIsCalculated = !1,
                        J.layers.set.properties(e, s, !0);
                        break;
                        case "all":
                                e.data(J.defaults.init.dataKey, new J.defaults.layer.options(e, s)),
                            (a = e.data(J.defaults.init.dataKey)).original = r,
                            J.layers.set.properties(e, s, !0),
                            J.layers.set.wrappers(e, a, s)
                    }
                }
            },
            wrap: function(u, e) {
                var t, h;
                J.slides[u].wrapped || "wrapping" === J.slides[u].wrapped || (J.slides[u].wrapped = "wrapping", t = e ? 25 : 0, e = J.slides[u].$layers, 0 === (h = e.length) ? J.slides[u].wrapped = !0 : e.each(function(c, p) {
                    J.timeouts["slide-" + u + "-layer-" + c] = setTimeout(function() {
                        delete J.timeouts["slide-" + u + "-layer-" + c];
                        var e = ie(p),
                            t = e,
                            i = "",
                            s = !1,
                            a = "";
                        e.hasClass("ls-hide-phone") && (a += " ls-hide-on-phone"), e.hasClass("ls-hide-tablet") && (a += " ls-hide-on-tablet"), e.hasClass("ls-hide-desktop") && (a += " ls-hide-on-desktop"), e.removeClass("ls-hide-phone ls-hide-tablet ls-hide-desktop"), t.is("a") && 1 === t.children().length && (s = !0, e = t.find(".ls-layer"));
                        var r, o, n, l = e.data(J.defaults.init.dataKey);
                        if (!l) return !0;
                        d = e.data("$layerGroup") || J.slider.$layersWrapper, l.is.backgroundVideo ? d = J.slider.$bgVideosWrapper : l.is.slideBackground && (d = J.slider.$slideBGWrapper), e.data("hasBeenSet") || J.layers.set.singleLayer(e, u), l.textIn.split && (n = new ee.SplitType(e[0], {
                            split: l.textIn.split
                        }), l.textIn.type && (l.textIn.ns = n[l.textIn.type.split("_")[0]]), l.textOut.type && (l.textOut.ns = n[l.textOut.type.split("_")[0]]), -1 !== e.css("background-clip").indexOf("text") && (r = e.find(".char"), o = e.find(".word"), n = e.find(".line"), l.textIn.$nodesForBackgroundClip = r.length ? r : o.length ? o : n, r.length ? e.addClass("ls-has-chars") : o.length ? e.addClass("ls-has-words") : e.addClass("ls-has-lines"), l.textIn.$nodesForBackgroundClip.each(function() {
                            var e = ie(this),
                                t = ie.trim(e.text()),
                                i = document.createTextNode(t),
                                t = ie(i),
                                i = ie('<div class="ls-textnode-bgclip-wrap"><div class="ls-textnode"></div></div>').css({
                                    backgroundColor: l.original.backgroundColor,
                                    backgroundImage: l.original.backgroundImage,
                                    backgroundSize: l.original.backgroundSize,
                                    backgroundRepeat: l.original.backgroundRepeat,
                                    backgroundPosition: l.original.backgroundPosition
                                });
                            e.css({
                                verticalAlign: "top"
                            }).text(""), t.clone().appendTo(e).wrap('<div class="ls-textnode-dummy"></div>'), t.appendTo(e).wrap(i)
                        }))), i = l.is.slideBackground || l.is.backgroundVideo ? '<div class="ls-wrapper ls-bg-outer"><div class="ls-wrapper ls-bg-wrap"></div></div>' : (l.clip.enabled && (i = '<div class="ls-wrapper ls-clip"></div>'), l.loop.enabled && (i = '<div class="ls-wrapper ls-loop">' + i + "</div>"), l.scroll.enabled && (i = '<div class="ls-wrapper ls-scroll"><div class="ls-wrapper ls-scroll-transform">' + i + "</div></div>"), '<div class="ls-wrapper ls-in-out">' + i + "</div>"), l.parallax.enabled && (i = '<div class="ls-wrapper ls-parallax">' + i + "</div>"), "" !== (i = '<div class="ls-wrapper ls-z ' + (l.is.pinned ? "ls-pinned" : "") + '">' + i + "</div>") ? e.appendTo(d).wrap(i) : e.appendTo(d), !0 === s && t.addClass("ls-layer-link").appendTo(e.parent());
                        var d = {},
                            s = e.css("mix-blend-mode");
                        s && "normal" !== s && (d["mix-blend-mode"] = s, e.css("mix-blend-mode", "normal")), l.original.customZIndex = 1;
                        s = parseInt(l.original.zIndex);
                        l.is.backgroundVideo || l.is.slideBackground ? d = {
                            zIndex: l.original.customZIndex
                        } : (s = s || c + 101, d.zIndex = s, l.original.customZIndex = s), J.browser.isSafari && (d.transform = "translateZ(0)"), J.layers.set.wrappers(e, l, u), l.elements.$outerWrapper.css(d).addClass(a), l.styleSettings.pointerevents && l.elements.$innerWrapper.css("pointer-events", "none"), l.is.slideBackground && l.elements.$bgWrapper.css({
                            backgroundColor: J.slides[u].data.backgroundColor
                        }), J.layers.$all = J.layers.$all.add(e), J.slides[u].$layers = J.slides[u].$layers.not(t), c === h - 1 && ($.children(".ls-slide").eq(u - 1).empty(), J.slides[u].wrapped = !0)
                    }, t * (c + 1))
                }))
            }
        }, J.slideshow = {
            direction: "next",
            nextLoop: 0,
            firstStart: !0,
            forceFastChange: !1,
            sequence: {
                normal: [],
                randomized: []
            },
            state: {
                changed: -1,
                running: !0,
                paused: !1,
                pausedByVideo: !1,
                pausedByHover: !1,
                pausedByLastCycle: !1
            },
            should: {
                change: !1,
                start: !1,
                stop: !1
            },
            isPaused: function() {
                return this.state.paused || this.state.pausedByVideo || this.state.pausedByHover || this.state.pausedByPerformance
            },
            init: function() {
                1 == J.slides.count && ie.extend(J.o, {
                    autoStart: !1,
                    navPrevNext: !1,
                    navStartStop: !1,
                    navButtons: !1,
                    cycles: -1,
                    forceLoopNum: !1,
                    autoPauseSlideshow: !0,
                    firstSlide: 1,
                    thumbnailNavigation: "disabled"
                }), J.o.autoStart && 1 != J.slides.count || J.functions.setStates(this, {
                    running: !1,
                    paused: !0
                }), this.set.pauseOnHover(), this.set.sequences()
            },
            set: {
                pauseOnHover: function() {
                    J.o.pauseOnHover = !0 === J.o.pauseOnHover ? "slideshowOnly" : J.o.pauseOnHover, !1 !== J.o.pauseOnHover && $.on("mouseenter." + B, function() {
                        J.slider.state.inFullscreen || (J.functions.setStates(J.slideshow, {
                            pausedByHover: !0
                        }), "slideshowOnly" !== J.o.pauseOnHover && J.transitions.layers.timeline.pause())
                    }).on("mouseleave." + B, function() {
                        var e = 1;
                        J.transitions._slideTimeline && J.transitions._slideTimeline.duration() > J.transitions.layers.timeline.totalDuration && (e = J.transitions.layers.timeline.totalDuration / J.transitions._slideTimeline.duration()), J.functions.setStates(J.slideshow, {
                            pausedByHover: !1
                        }), ie("body").hasClass("ls-unselectable") || "slideshowOnly" === J.o.pauseOnHover || J.o.pauseLayers && J.slideshow.isPaused() || J.transitions.layers.timeline.resume(), J.transitions._slideTimeline && J.transitions.layers.timeline.state.finished && J.transitions._slideTimeline.progress() < e && J.functions.setStates(J.transitions.layers.timeline, {
                            finished: !1
                        }), J.slideshow.start()
                    })
                },
                sequences: function() {
                    for (var e = 0; e < J.slides.count; e++) J.slideshow.sequence.normal[e] = e + 1;
                    J.slideshow.sequence.randomized = J.functions.shuffleArray(ie.merge([], J.slideshow.sequence.normal))
                },
                normalizedSequence: function() {
                    var e = J.o.shuffleSlideshow ? "randomized" : "normal",
                        t = J.slideshow.sequence[e],
                        i = J.slideshow.sequence[e].length,
                        s = t.indexOf(J.slides.first.index);
                    J.slideshow.sequence.normalized = [];
                    for (var a = s; a < i; a++) J.slideshow.sequence.normalized.push(t[a]);
                    for (var r = 0; r < s; r++) J.slideshow.sequence.normalized.push(t[r])
                },
                prevNext: function(e) {
                    switch ("prev" !== e && "first" !== e || !J.o.twoWaySlideshow ? J.slideshow.direction = "next" : J.slideshow.direction = "prev", e) {
                        case "prev":
                            J.slideshow.changeTo(J.slideshow.get.slideInSequence("prev"), !0);
                            break;
                        case "next":
                            J.slideshow.changeTo(J.slideshow.get.slideInSequence("next"), !0);
                            break;
                        case "first":
                            J.slideshow.changeTo(1, !0);
                            break;
                        case "last":
                            J.slideshow.changeTo(J.slides.count, !0)
                    }
                }
            },
            get: {
                sequence: function() {
                    var e = "normal";
                    return J.o.playByScroll ? e = "normalized" : J.o.shuffleSlideshow && (e = "randomized"), e
                },
                slideInSequence: function(e) {
                    var t = J.slideshow.sequence[this.sequence()],
                        i = t.indexOf(J.slides.current.index);
                    switch (e) {
                        case "prev":
                            return 0 === i ? t[t.length - 1] : t[i - 1];
                        case "next":
                            return i === t.length - 1 ? t[0] : t[i + 1];
                        default:
                            return t[e]
                    }
                },
                indexOfSlideInSequence: function(e) {
                    return J.slideshow.sequence[this.sequence()].indexOf(e)
                }
            },
            cycles: {
                set: function() {
                    0 < J.o.cycles && (J.slideshow.curCycle = 1, J.slideshow.cycleSlideIndex = J.slideshow.get.indexOfSlideInSequence(J.slides.first.index))
                },
                check: function(e) {
                    if (J.slideshow.get.indexOfSlideInSequence(e) === J.slideshow.cycleSlideIndex) return ++J.slideshow.curCycle === J.o.cycles + 1
                }
            },
            start: function(e) {
                !this.isPaused() && J.transitions._slideTimeline && J.transitions.layers.timeline.state.finished && this.changeTo(J.slides.next.index)
            },
            stop: function() {
                J.functions.setStates(this, {
                    running: !1,
                    paused: !0
                })
            },
            changeTo: function(e, t, i) {
                if (!document.body.contains(I)) return !1;
                if (J.slides.current.index === e && !J.slideshow.forceSlideChangeTo) return !1;
                if (J.slideshow.forceSlideChangeTo = null, !this.firstStart && J.api.hasEvent("slideChangeWillStart")) {
                    var s = J.api.triggerEvent("slideChangeWillStart", J.api.eventData());
                    if (!1 === s) return;
                    ie.isNumeric(s) && (e = parseInt(s))
                }
                e > J.slides.count || e < 1 ? J.debugMode && (J.debug.add("group", "slideshow"), J.debug.add("warn", "slideshow.invalidSlideIndex", [e, J.slides.count]), J.debug.groupEnd()) : J.slider.isBusy() || J.slideshow.state.pausedByVideo && !t ? !J.slider.state.preloadingImages && J.slider.state.animatingSlides && J.transitions._slideTransition && (J.slideshow.forceSlideChangeTo = e, J.slideshow.should.change = !0, J.transitions._slideTransition.progress(1), J.transitions.timelines.set("currentforce", function(e, t) {
                    e.progress(1)
                })) : (J.functions.setStates(J.transitions.layers.timeline, {
                    finished: !1
                }), J.slideshow.should.change = !1, J.debugMode && J.debug.add("group", "slideshow"), t ? (i && (J.navigation.direction = J.slides.current.index > e ? "prev" : "next"), J.o.twoWaySlideshow && ("prev" === J.navigation.direction ? J.slideshow.direction = "prev" : J.slideshow.direction = "next"), J.debugMode && (J.debug.add("log", "slideshow.changedByUser", !1), J.o.twoWaySlideshow && J.debug.add("log", "slideshow.setdir", J.slideshow.direction))) : J.navigation.direction = J.slideshow.direction, J.transitions.timers.reverse(), J.gui.media.hideUnmute(), J.slides.set.nextSlideIndex(e), J.debugMode && (J.debug.add("log", "slideshow.change", [J.slides.current.index, J.slides.next.index, J.slideshow.direction, J.navigation.direction]), J.debug.groupEnd()), J.functions.setStates(this, {
                    pausedByVideo: !1,
                    changed: ++this.state.changed
                }), J.functions.setStates(J.slider, {
                    changingSlides: !0
                }), J.slider.state.animatingSlides && J.transitions._slideTransition && J.transitions.timelines.set("currentforce", function(e, t) {
                    e.progress(1)
                }), J.preload.imagesOfSlide(J.slides.next.index, function() {
                    J.transitions.start()
                }))
            },
            forceStop: function() {
                J.navigation.stop(), ie.each(J.timeouts, function(e, t) {
                    clearTimeout(J.timeouts[e])
                }), J.transitions.timers.stop(), J.transitions._slideTimeline.stop(), J.transitions._slideTimelineAlternate.stop(), J.functions.setStates(J.transitions.layers.timeline, {
                    stopped: !0,
                    running: !1
                }), $.find("*").stop(!0, !1).dequeue()
            },
            restart: function() {
                $.find("*").stop(), J.navigation.change(J.slides.current.index, J.slideshow.direction)
            }
        }, J.media = {
            properties: {
                $allMediaLayers: ie(),
                playingInCurSlide: 0,
                endedInCurSlide: 0,
                userDidUnmute: !1
            },
            init: function() {
                J.functions.setStates(J.slider, {
                    waitingForYouTube: !1,
                    waitingForVimeo: !1
                }), J.media.properties.allowToUnmute = !0, J.media.youtube.init(), J.media.vimeo.init(), J.media.html5.init()
            },
            isPlayable: function(e) {
                return !e.is("[data-ls-animating-out], [data-ls-hidden]")
            },
            get: function(e) {
                var t, i = J.media.properties.$allMediaLayers;
                return e && (-1 !== (e = e.toLowerCase()).indexOf("notbg") && (i = i.not(".ls-bg-video")), -1 !== e.indexOf("active") && (i = i.filter("[data-ls-active], [data-ls-animating-in], [data-ls-text-animating-in]")), -1 !== e.indexOf("notstatic") && (i = i.not("[data-ls-static]")), t = i.find("video, audio, iframe"), -1 !== e.indexOf("notplaying") ? t = t.filter("[data-ls-not-playing]") : -1 !== e.indexOf("playing") && (t = t.filter("[data-ls-playing]")), -1 !== e.indexOf("allowtounmute") && (t = t.filter("[data-ls-allow-to-unmute]")), -1 !== e.indexOf("mutedbybrowser") && (t = t.filter("[data-ls-muted-by-browser]"))), t
            },
            set: {
                backgroundVideo: function(e, t) {
                    0 === e.children(".ls-vpcontainer").length && (e = ie("<div>").addClass("ls-vpcontainer").appendTo(e), t.mediaSettings.poster && ie("<div>").appendTo(e).addClass("ls-videopreview").attr({
                        style: "background-image: url(" + t.mediaSettings.poster + ")"
                    }))
                },
                customPoster: function(e, t) {
                    return t.mediaSettings.poster || !1
                },
                dataAttribute: function(e, t) {
                    e.removeAttr("data-ls-playing data-ls-not-playing"), e.attr("data-ls-" + t, ""), J.media.functions.checkSlideshowWaiting()
                },
                mediaElements: function(e, t, i) {
                    var s = ie("<div>").addClass("ls-vpcontainer").appendTo(e);
                    !("autoplay" in i.mediaSettings) && J.o.autoPlayVideos || i.mediaSettings.autoplay ? e.addClass("ls-autoplay") : ie("<div>").appendTo(s).addClass("ls-playvideo"), t.is("iframe") && i.mediaProperties.poster && ie("<div>").appendTo(s).addClass("ls-videopreview").attr({
                        style: "background-image: url(" + i.mediaProperties.poster + ")"
                    }), t.is("video, audio") && i.mediaProperties.poster && ie("<div>").appendTo(s).addClass("ls-videopreview").attr({
                        style: "background-image: url(" + i.mediaProperties.poster + ")"
                    })
                },
                properties: function(e, t, i) {
                    switch (i.is.mediaLayer = !0, i.mediaProperties.type) {
                        case "youtube":
                            i.is.backgroundVideo ? (i.mediaProperties.options = ie.extend(!0, {
                                loop: 1,
                                playlist: i.mediaProperties.embedID,
                                controls: 0,
                                autoplay: 0,
                                showinfo: !1,
                                modestbranding: 1,
                                thumbnail: !1
                            }, J.media[i.mediaProperties.type].defaults, i.mediaProperties.embedOptions), J.media.set.backgroundVideo(e, i)) : (i.mediaProperties.options = ie.extend(!0, {}, J.media[i.mediaProperties.type].defaults, i.mediaProperties.embedOptions, {
                                autoplay: 0
                            }), J.media.set.mediaElements(e, t, i));
                            break;
                        case "vimeo":
                            i.is.backgroundVideo ? (i.mediaProperties.options = ie.extend(!0, {
                                loop: 1,
                                byline: 0,
                                portrait: 0,
                                title: 0,
                                fun: 0
                            }, J.media[i.mediaProperties.type].defaults, i.mediaProperties.embedOptions), J.media.set.backgroundVideo(e, i)) : (i.mediaProperties.options = ie.extend(!0, {}, J.media[i.mediaProperties.type].defaults, i.mediaProperties.embedOptions, {
                                autoplay: 0
                            }), J.media.set.mediaElements(e, t, i));
                            break;
                        case "html5":
                            t.attr("autoplay") && (t.removeAttr("autoplay"), e.attr("data-ls", e.attr("data-ls") + " autoplay: true;")), i.is.backgroundVideo ? (t.removeAttr("controls"), t[0].muted = !0, t.attr("loop", "")) : "controls" in i.mediaSettings && "auto" !== i.mediaSettings.controls && (i.mediaSettings.controls ? (t.attr("controls", ""), t.removeAttr("nocontrols")) : t.removeAttr("controls")), "volume" in i.mediaSettings && (i.mediaSettings.volume < 0 ? i.mediaSettings.volume = 0 : 100 < i.mediaSettings.volume && (i.mediaSettings.volume = 100), t[0].volume = i.mediaSettings.volume / 100), "muted" in i.mediaSettings && (i.mediaSettings.muted ? t[0].muted = !0 : t[0].muted = !1), "loop" in i.mediaSettings && (i.mediaSettings.loop ? t.attr("loop", "") : t.removeAttr("loop")), i.is.backgroundVideo ? J.media.set.backgroundVideo(e, i) : J.media.set.mediaElements(e, t, i)
                    }
                },
                thumbnail: function(e, t) {
                    switch (t) {
                        case "show":
                            e.stop(!0, !0).fadeIn(J.transitions.media.defaults.fadeIn);
                            break;
                        case "hide":
                            e.stop(!0, !0).delay(J.transitions.media.defaults.delay).fadeOut(J.transitions.media.defaults.fadeOut)
                    }
                }
            },
            events: {
                start: function(e, t, i) {
                    var s;
                    J.api.hasEvent("mediaDidStart") && !i.mediaProperties.alreadyStarted && J.media.functions.allowedToPlay(e, i) && ((s = J.api.eventData()).event.target = e[0], J.api.triggerEvent("mediaDidStart", s), i.mediaProperties.alreadyStarted = !0)
                },
                stop: function(e, t, i) {
                    var s;
                    J.api.hasEvent("mediaDidStop") && i.mediaProperties.alreadyStarted && ((s = J.api.eventData()).event.target = e[0], J.api.triggerEvent("mediaDidStop", s), i.mediaProperties.alreadyStarted = !1)
                }
            },
            unmute: {
                set: function(e, t, i) {
                    ("youtube" !== t && "vimeo" !== t || J.media.properties.allowToUnmute) && J.gui.media.showUnmute(), e.attr("data-ls-allow-to-unmute", ""), i && e.attr("data-ls-muted-by-browser", "")
                },
                multipleMediaElements: function() {
                    var e = $.find("[data-ls-allow-to-unmute]");
                    (J.o.rememberUnmuteState ? e : e.filter("[data-ls-playing], [data-ls-muted-by-browser]")).each(function() {
                        J.media.unmute.singleMediaElement(ie(this))
                    }), J.gui.media.hideUnmute(), J.media.properties.userDidUnmute = !0
                },
                singleMediaElement: function(e) {
                    var t, i = e.closest(".ls-layer").data(J.defaults.init.dataKey),
                        s = !1;
                    switch (i.mediaProperties.type) {
                        case "youtube":
                            J.media.properties.allowToUnmute && (s = !0, i.mediaProperties.player.unMute());
                            break;
                        case "vimeo":
                            J.media.properties.allowToUnmute && (s = !0, t = i.mediaSettings.volume ? i.mediaSettings.volume / 100 : 1, i.mediaProperties.player.setVolume(t));
                            break;
                        case "html5":
                            s = !0, e[0].muted = !1
                    }
                    s && e.removeAttr("data-ls-muted-by-browser data-ls-allow-to-unmute")
                }
            },
            functions: {
                allowedToPlay: function(e, t) {
                    e = e.closest(".ls-layer");
                    return !!(J.slides.current.index === parseInt(e.attr("data-ls-slidein")) || t.is.backgroundVideo && J.slides.next.index === parseInt(e.attr("data-ls-slidein")) || e.attr("data-ls-static") && void 0 !== e.attr("data-ls-active"))
                },
                playActiveMedia: function(e) {
                    var t, i;
                    J.media.get("notbg,active").each(function() {
                        if (t = ie(this).closest(".ls-layer"), i = t.data(J.defaults.init.dataKey), e) {
                            if (!i.mediaProperties.pausedByPerformance) return !0;
                            i.mediaProperties.pausedByPerformance = !1
                        }
                        if (J.media.isPlayable(t))
                            if (i.mediaProperties.alreadyStarted) switch (i.mediaProperties.type) {
                                case "youtube":
                                    i.mediaProperties.player.playVideo();
                                    break;
                                case "vimeo":
                                    i.mediaProperties.player.play();
                                    break;
                                case "html5":
                                    i.mediaProperties.$media[0].play()
                            } else ie(this).parent().find(".ls-vpcontainer").trigger("playMedia")
                    })
                },
                stopSingleMedia: function(e, t) {
                    var i = t.mediaProperties.$media;
                    J.media[t.mediaProperties.type].stop(e, i, t, !0), J.media.functions.mediaEnded(i, e, t)
                },
                pauseActiveMedia: function(e) {
                    var t;
                    J.media.get("notbg,active,playing").each(function() {
                        switch (t = ie(this).closest(".ls-layer").data(J.defaults.init.dataKey), e && (t.mediaProperties.pausedByPerformance = !0), t.mediaProperties.type) {
                            case "youtube":
                                t.mediaProperties.player.pauseVideo();
                                break;
                            case "vimeo":
                                t.mediaProperties.player.pause();
                                break;
                            case "html5":
                                this.pause()
                        }
                    })
                },
                urlToObject: function(e) {
                    var s = {},
                        e = e.split("?")[1];
                    return e && e.split("#")[0].replace(/([^=&]+)=([^&]*)/g, function(e, t, i) {
                        s[decodeURIComponent(t)] = ie.isNumeric(decodeURIComponent(i)) ? parseInt(decodeURIComponent(i)) : decodeURIComponent(i)
                    }), s
                },
                checkSlideshowState: function(e, t) {
                    !t.is.static && J.o.autoPauseSlideshow && (J.functions.setStates(J.slideshow, {
                        pausedByVideo: !0
                    }), "auto" == J.o.autoPauseSlideshow && J.media.properties.playingInCurSlide++)
                },
                checkSlideshowWaiting: function() {
                    var e = J.media.properties.playingInCurSlide,
                        t = J.media.get("notbg,active,notstatic,notplaying"),
                        i = t.length;
                    i === e && 0 < i && J.slideshow.state.pausedByVideo && J.o.autoPauseSlideshow && !J.timeouts.pausedVideos && J.slideshow.state.running ? J.timeouts.pausedVideos = setTimeout(function() {
                        J.slideshow.state.running ? t.each(function() {
                            J.media.functions.mediaEnded(ie(this), ie(this).closest(".ls-layer"), ie(this).closest(".ls-layer").data(J.defaults.init.dataKey))
                        }) : J.slideshow.state.pausedByVideo = !1
                    }, 5e3) : J.timeouts.pausedVideos && (clearTimeout(J.timeouts.pausedVideos), delete J.timeouts.pausedVideos)
                },
                playIfAllowed: function(e) {
                    var t = e.data(J.defaults.init.dataKey);
                    t.is.mediaLayer && (te.isMobile && ($.hasClass("ls-device-is-phone") && t.elements.$outerWrapper.hasClass("ls-hide-on-phone") || $.hasClass("ls-device-is-tablet") && t.elements.$outerWrapper.hasClass("ls-hide-on-tablet")) || ("autoplay" in t.mediaSettings || !J.o.autoPlayVideos) && !t.mediaSettings.autoplay || e.find(".ls-vpcontainer").trigger("playMedia"))
                },
                stop: function(s) {
                    s = void 0 === s || s;
                    J.layers.get("current,out,youtube").each(function() {
                        var e = ie(this),
                            t = e.closest(".ls-layer"),
                            i = t.data(J.defaults.init.dataKey);
                        J.media.youtube.stop(t, e, i, s)
                    }), J.layers.get("current,out,vimeo").each(function() {
                        var e = ie(this),
                            t = e.closest(".ls-layer"),
                            i = t.data(J.defaults.init.dataKey);
                        J.media.vimeo.stop(t, e, i, s)
                    }), J.layers.get("current,out,html5").each(function() {
                        var e = ie(this),
                            t = e.closest(".ls-layer"),
                            i = t.data(J.defaults.init.dataKey);
                        J.media.html5.stop(t, e, i, s)
                    }), J.media.properties.playingInCurSlide = 0, J.media.properties.endedInCurSlide = 0
                },
                mediaEnded: function(e, t, i) {
                    "auto" != J.o.autoPauseSlideshow || i.is.backgroundVideo || (i.is.static || J.media.properties.endedInCurSlide++, J.media.properties.endedInCurSlide == J.media.properties.playingInCurSlide && 0 !== J.media.properties.playingInCurSlide && J.functions.setStates(J.slideshow, {
                        pausedByVideo: !1
                    })), J.media.set.dataAttribute(e, "not-playing"), J.media.events.stop(e, t, i)
                },
                removeFromTimeline: function(e) {
                    J.transitions._slideTimeline.kill(null, e.closest(".ls-in-out")[0]), J.transitions._slideTimelineAlternate.kill(null, e.closest(".ls-in-out")[0])
                }
            },
            youtube: {
                defaults: {
                    autoplay: 0,
                    playsinline: 1,
                    wmode: "opaque",
                    html5: 1,
                    enablejsapi: 1,
                    version: 3,
                    rel: 0
                },
                init: function() {
                    var f = 0;
                    this.$medias = J.slider.$hiddenWrapper.find('iframe[src*="youtube-nocookie.com"], iframe[src*="youtube.com"], iframe[src*="youtu.be"], iframe[data-src*="youtube-nocookie.com"], iframe[data-src*="youtube.com"], iframe[data-src*="youtu.be"]').each(function() {
                        var e = ie(this).attr({
                                id: "ls-youtube-" + ++f,
                                allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen",
                                allowfullscreen: ""
                            }),
                            t = e.closest(".ls-layer");
                        t.data("hasBeenSet") || J.layers.set.singleLayer(t);
                        var i, s, a, r, o, n, l, d, c = t.data(J.defaults.init.dataKey),
                            p = e.attr("src") || e.attr("data-src"),
                            u = J.media.functions.urlToObject(p),
                            h = (p = p.split("?")[0].split("//")[1]).split("/"),
                            m = h[h.length - 1],
                            h = J.media.set.customPoster(t, c);
                        c.mediaProperties = {
                            type: "youtube",
                            $media: e,
                            embedURL: p,
                            embedID: m,
                            embedOptions: u
                        }, h ? (c.mediaProperties.poster = h, J.media.set.properties(t, e, c)) : (i = ["default.jpg", "mqdefault.jpg", "hqdefault.jpg", "sddefault.jpg", "maxresdefault.jpg"], s = "https://img.youtube.com/vi/" + p.split("embed/")[1].split("?")[0] + "/", a = s + J.o.youtubePreview, o = r = 0, n = function() {
                            this.width > r && (r = this.width, a = this.src), d()
                        }, l = function() {
                            d()
                        }, d = function() {
                            (o += 1) === i.length && (c.mediaProperties.poster = a, J.media.set.properties(t, e, c))
                        }, i.forEach(function(e) {
                            var t = new Image;
                            t.addEventListener("error", l, !1), t.addEventListener("load", n, !1), t.src = s + e
                        }))
                    }), this.$medias.length && (J.media.properties.$allMediaLayers = J.media.properties.$allMediaLayers.add(this.$medias.closest(".ls-layer")), J.timeouts.loadYouTube = Math.floor(Date.now() / 1e3), window.YT || ie("<script>").attr({
                        src: "https://www.youtube.com/iframe_api",
                        type: "text/javascript"
                    }).appendTo("head"), window.onYouTubeIframeAPIReady = function() {
                        window._layerSlider.globals.youTubeIsReady = !0
                    }, J.intervals.isYouTubeReady = setInterval(function() {
                        window.YT && 1 === window.YT.loaded || window._layerSlider.globals.youTubeIsReady || 3 < Math.floor(Date.now() / 1e3) - J.timeouts.loadYouTube ? (clearInterval(J.intervals.isYouTubeReady), delete J.intervals.isYouTubeReady, delete J.timeouts.loadYouTube, J.media.youtube.$medias.closest(".ls-layer").each(function() {
                            var e = ie(this),
                                t = e.find("iframe"),
                                i = e.data(J.defaults.init.dataKey);
                            e.on("playMedia." + B + " click." + B, ".ls-vpcontainer", function() {
                                J.media.set.thumbnail(ie(this), "hide"), J.media.functions.checkSlideshowState(e, i), t.hide(), J.media.youtube.play(e, i.mediaProperties.$media, i, i.mediaProperties.embedURL), setTimeout(function() {
                                    t.show()
                                }, 10)
                            }).on("playBackgroundVideo." + B, function() {
                                J.media.youtube.play(e, i.mediaProperties.$media, i, i.mediaProperties.embedURL), J.layers.set.dataAttribute("add", e, "active")
                            }).on("stopBackgroundVideo." + B, function() {
                                J.media.youtube.stop(e, i.mediaProperties.$media, i, !0), J.layers.set.dataAttribute("add", e, "hidden")
                            }).on("preloadBackgroundVideo." + B, function() {
                                J.media.youtube.createPlayer(e, i.mediaProperties.$media, i, i.mediaProperties.embedURL, !0)
                            })
                        }), J.functions.setStates(J.slider, {
                            waitingForYouTube: !1
                        })) : J.functions.setStates(J.slider, {
                            waitingForYouTube: !0
                        })
                    }, 25))
                },
                createPlayer: function(t, i, s, a, r) {
                    s.mediaProperties.playerState = "initializing", "controls" in s.mediaSettings && (s.mediaProperties.options.controls = s.mediaSettings.controls ? 1 : 0), "loop" in s.mediaSettings && (s.mediaProperties.options.loop = s.mediaSettings.loop ? 1 : 0), "showinfo" in s.mediaSettings && (s.mediaProperties.options.showinfo = s.mediaSettings.showinfo ? 1 : 0), s.mediaProperties.options.loop ? s.mediaProperties.options.playlist = s.mediaProperties.embedID : delete s.mediaProperties.options.playlist, 0 === s.mediaProperties.options.showinfo && (s.mediaProperties.options.modestbranding = 1), i.attr("src", "https://" + a + "?" + jQuery.param(s.mediaProperties.options)).on("load", function() {
                        s.mediaProperties.player = new YT.Player(i[0], {
                            events: {
                                onReady: function(e) {
                                    s.mediaProperties.playerState = "ready", s.mediaSettings.volume && s.mediaProperties.player.setVolume(s.mediaSettings.volume), r && !s.mediaProperties.shouldPlay || (J.media.youtube.play(t, i, s, a), s.mediaProperties.shouldPlay = !1)
                                },
                                onStateChange: function(e) {
                                    switch (e.data) {
                                        case 0:
                                            s.mediaProperties.options.loop && 1 === s.mediaProperties.options.loop || J.media.functions.mediaEnded(i, t, s);
                                            break;
                                        case 1:
                                            J.media.events.start(i, t, s), s.mediaProperties.lastStarted = Date.now();
                                            break;
                                        case 2:
                                        case -1:
                                            s.mediaProperties.firstState && 0 !== s.mediaProperties.lastState && 1 !== s.mediaProperties.lastState || s.mediaProperties.lastStarted && (Date.now(), s.mediaProperties.lastStarted)
                                    }
                                    1 === e.data ? J.media.set.dataAttribute(i, "playing") : J.media.set.dataAttribute(i, "not-playing"), J.media.youtube.savePlayerState(s, e.data)
                                }
                            }
                        })
                    })
                },
                savePlayerState: function(e, t) {
                    e.mediaProperties.firstState || (e.mediaProperties.firstState = t), e.mediaProperties.lastState = t
                },
                play: function(e, t, i, s, a) {
                    void 0 !== t.attr("data-ls-muted-by-browser") && J.media.unmute.singleMediaElement(t), i.mediaProperties.player ? i.mediaProperties.player.playVideo ? (!i.is.backgroundVideo || "muted" in i.mediaSettings || i.mediaProperties.player.mute(), i.mediaSettings.muted ? J.o.rememberUnmuteState && J.media.properties.userDidUnmute || (i.mediaProperties.player.mute(), "offertounmute" == i.mediaSettings.muted && J.media.unmute.set(t, i.mediaProperties.type)) : a && (i.mediaProperties.player.mute(), J.media.unmute.set(t, i.mediaProperties.type, !0)), J.media.functions.allowedToPlay(t, i) ? J.media.isPlayable(e) && i.mediaProperties.player.playVideo() : J.media.youtube.stop(e, t, i, !0)) : i.mediaProperties.shouldPlay = !0 : i.mediaProperties.playerState ? i.mediaProperties.shouldPlay = !0 : this.createPlayer(e, t, i, s)
                },
                stop: function(e, t, i, s) {
                    i.mediaProperties.player && (i.mediaProperties.player.pauseVideo && i.mediaProperties.player.pauseVideo(), s && i.mediaProperties.player.seekTo && (i.mediaProperties.player.seekTo(0), i.mediaProperties.player.pauseVideo()), i.is.backgroundVideo || J.media.set.thumbnail(e.find(".ls-vpcontainer"), "show"), J.media.events.stop(t, e, i))
                }
            },
            vimeo: {
                defaults: {
                    autoplay: 0,
                    autopause: 0,
                    wmode: "opaque",
                    playsinline: 1
                },
                init: function() {
                    var d, e, t = this.$medias = J.slider.$hiddenWrapper.find('iframe[src*="player.vimeo"], iframe[data-src*="player.vimeo"]'),
                        c = J.slider.$hiddenWrapper.find('.ls-slide:eq(0) iframe[src*="player.vimeo"], .ls-slide:eq(0) iframe[data-src*="player.vimeo"]').length;
                    t.length && (J.timeouts.loadVimeo = Math.floor(Date.now() / 1e3), J.media.properties.$allMediaLayers = J.media.properties.$allMediaLayers.add(t.closest(".ls-layer")), d = 0, ie("<script>").attr({
                        src: "https://player.vimeo.com/api/player.js",
                        type: "text/javascript"
                    }).appendTo("head"), J.intervals.isVimeoReady = setInterval(function() {
                        J.functions.setStates(J.slider, {
                            waitingForVimeo: !0
                        }), (window.Vimeo || 3 < Math.floor(Date.now() / 1e3) - J.timeouts.loadVimeo) && (clearInterval(J.intervals.isVimeoReady), delete J.intervals.isVimeoReady, delete J.timeouts.loadVimeo, e())
                    }, 25), e = function() {
                        var l = 0;
                        J.media.vimeo.$medias.each(function() {
                            var t = ie(this).attr({
                                    id: "ls-vimeo-" + ++d,
                                    allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen",
                                    allowfullscreen: ""
                                }),
                                i = t.closest(".ls-layer");
                            i.data("hasBeenSet") || J.layers.set.singleLayer(i);
                            var s = i.data(J.defaults.init.dataKey),
                                e = t.attr("src") || t.attr("data-src"),
                                a = J.media.functions.urlToObject(e),
                                r = "https://vimeo.com/api/oembed.json?url=http://vimeo.com/" + e.split("video/")[1].split("?")[0],
                                e = e.split("?")[0].split("//")[1];
                            J.media.vimeo.defaults.player_id = "ls-vimeo-" + d;
                            var o = J.media.set.customPoster(i, s);
                            s.mediaProperties = {
                                type: "vimeo",
                                $media: t,
                                embedURL: e,
                                embedOptions: a
                            };

                            function n(e) {
                                s.mediaProperties.poster = e, (0 === c || 0 < c && ++l == c) && (window._layerSlider.globals.vimeoIsReady = !0), J.media.set.properties(i, t, s)
                            }
                            o ? n(o) : ie.getJSON(r, function(e) {
                                n(e.thumbnail_url)
                            }), i.on("playMedia." + B + " click." + B, ".ls-vpcontainer", function() {
                                J.media.set.thumbnail(ie(this), "hide"), J.media.functions.checkSlideshowState(i, s), J.media.vimeo.play(i, t, s, e)
                            }).on("playBackgroundVideo." + B, function() {
                                J.media.vimeo.play(i, t, s, e), J.layers.set.dataAttribute("add", i, "active")
                            }).on("stopBackgroundVideo." + B, function() {
                                J.media.vimeo.stop(i, t, s, !0), J.layers.set.dataAttribute("add", i, "hidden")
                            }).on("preloadBackgroundVideo." + B, function() {
                                J.media.vimeo.createPlayer(i, t, s, e, !0)
                            })
                        }), J.functions.setStates(J.slider, {
                            waitingForVimeo: !1
                        })
                    })
                },
                createPlayer: function(e, t, i, s, a) {
                    i.mediaProperties.playerState = "initializing";
                    "controls" in i.mediaSettings && delete i.mediaSettings.controls, "loop" in i.mediaSettings && (i.mediaProperties.options.loop = i.mediaSettings.loop ? 1 : 0), "showinfo" in i.mediaSettings && (i.mediaSettings.showinfo ? (i.mediaProperties.options.byline = 1, i.mediaProperties.options.portrait = 1, i.mediaProperties.options.title = 1) : (i.mediaProperties.options.byline = 0, i.mediaProperties.options.portrait = 0, i.mediaProperties.options.title = 0), delete i.mediaProperties.options.showinfo), "volume" in i.mediaSettings && (0 === i.mediaSettings.volume ? (i.mediaSettings.volume = 100, i.mediaSettings.muted = !0) : (i.mediaSettings.volume < 0 || 100 < i.mediaSettings.volume) && (i.mediaSettings.volume = 100)), i.mediaSettings.muted && (i.mediaProperties.options.muted = 1), t.attr("src", "https://" + s + "?" + jQuery.param(i.mediaProperties.options)), i.mediaProperties.player = new Vimeo.Player(t[0]), i.mediaProperties.player.on("play", function() {
                        J.media.set.dataAttribute(t, "playing"), J.media.events.start(t, e, i)
                    }), i.mediaProperties.player.on("pause", function() {
                        J.media.set.dataAttribute(t, "not-playing")
                    }), i.mediaProperties.player.on("ended", function() {
                        J.media.functions.mediaEnded(t, e, i)
                    }), i.mediaProperties.player.ready().then(function() {
                        i.mediaProperties.playerState = "ready", i.mediaSettings.volume && !i.mediaSettings.muted && ie.isNumeric(i.mediaSettings.volume) && 0 <= i.mediaSettings.volume && i.mediaSettings.volume <= 100 && i.mediaProperties.player.setVolume(i.mediaSettings.volume / 100), a || J.media.vimeo.play(e, t, i, s)
                    })
                },
                play: function(t, i, s, a, e) {
                    void 0 !== i.attr("data-ls-muted-by-browser") && J.media.unmute.singleMediaElement(i), s.mediaProperties.player ? (!s.is.backgroundVideo || "muted" in s.mediaSettings || s.mediaProperties.player.setVolume(0), s.mediaSettings.muted && (J.o.rememberUnmuteState && J.media.properties.userDidUnmute ? J.o.rememberUnmuteState && J.media.properties.userDidUnmute && (s.mediaProperties.player.setVolume(s.mediaSettings.volume / 100 || 1), delete s.mediaSettings.muted) : (s.mediaProperties.player.setVolume(0), "offertounmute" == s.mediaSettings.muted && J.media.unmute.set(i, s.mediaProperties.type))), e ? (s.mediaProperties.player.setVolume(0), J.media.unmute.set(i, s.mediaProperties.type, !0)) : s.mediaProperties.player.getVolume().then(function(e) {
                        0 == e && "offertounmute" == s.mediaSettings.muted && J.media.unmute.set(i, s.mediaProperties.type)
                    }), J.media.functions.allowedToPlay(i, s) ? s.mediaProperties.player.play().then(function() {}).catch(function(e) {
                        switch (e.name) {
                            case "PasswordError":
                                window.console && (console.error(J.defaults.slider.errorText), console.error("Vimeo video is password protected and may cause playback issues."));
                                break;
                            case "PrivacyError":
                                window.console && (console.error(J.defaults.slider.errorText), console.error("Vimeo video is private and may cause playback issues."));
                                break;
                            default:
                                J.media.vimeo.play(t, i, s, a, !0)
                        }
                    }) : J.media.vimeo.stop(t, i, s, !0)) : this.createPlayer(t, i, s, a)
                },
                stop: function(e, t, i, s) {
                    i.mediaProperties.player && (i.mediaProperties.player.pause(), s && i.mediaProperties.player.setCurrentTime(0), i.is.backgroundVideo || J.media.set.thumbnail(e.find(".ls-vpcontainer"), "show"), J.media.events.stop(t, e, i))
                }
            },
            html5: {
                singleInit: function(t) {
                    var e, i, s, a, r = t.closest(".ls-layer"),
                        o = r.data(J.defaults.init.dataKey),
                        n = t.find("source"),
                        l = J.media.set.customPoster(r, o);
                    o.mediaProperties = {
                        type: "html5",
                        $media: t,
                        poster: l || t.attr("poster")
                    }, t.removeAttr("poster"), 0 < n.length ? n.each(function() {
                        void 0 !== (e = ie(this).attr("type")) && !1 !== e || (i = ie(this).attr("src"), s = i.split("."), a = s[s.length - 1].toLowerCase(), ie(this).attr("type", ie(this).parent()[0].tagName.toLowerCase() + "/" + a)), "" !== t[0].canPlayType(ie(this).attr("type")) && (o.mediaProperties.canBePlayed = !0)
                    }) : void 0 !== t.attr("src") && !1 !== t.attr("src") && (i = t.attr("src"), s = i.split("."), a = s[s.length - 1].toLowerCase(), "" !== t[0].canPlayType(t[0].tagName.toLowerCase() + "/" + a) && (o.mediaProperties.canBePlayed = !0)), o.mediaProperties.canBePlayed && (J.media.set.properties(r, t, o), t.on("ended." + B, function() {
                        J.media.functions.mediaEnded(t, r, o)
                    }).on("play." + B, function() {}).on("playing." + B, function() {
                        J.media.events.start(t, r, o), J.media.set.dataAttribute(t, "playing")
                    }).on("pause." + B, function() {
                        J.media.set.dataAttribute(t, "not-playing")
                    }), r.on("playMedia." + B + " click." + B, ".ls-vpcontainer", function(e) {
                        J.media.set.thumbnail(ie(this), "hide"), J.media.functions.checkSlideshowState(r, o), J.media.html5.play(r, t, o)
                    }).on("playBackgroundVideo." + B, function() {
                        J.media.html5.play(r, t, o), J.layers.set.dataAttribute("add", r, "active")
                    }).on("stopBackgroundVideo." + B, function() {
                        J.media.html5.stop(r, t, o, !0), J.layers.set.dataAttribute("add", r, "hidden")
                    }))
                },
                init: function() {
                    var e, t = J.slider.$hiddenWrapper.find("video, audio");
                    J.media.properties.$allMediaLayers = J.media.properties.$allMediaLayers.add(t.closest(".ls-layer")), t.length && (e = 0, t.each(function() {
                        ie(this).closest(".ls-layer").data(J.defaults.init.dataKey).is.mediaLayer = !0, ie(this).attr("id", "ls-html5-" + ++e).attr("playsinline", ""), ie(this)[0].pause()
                    }))
                },
                play: function(e, t, i) {
                    var s;
                    i.mediaProperties.canBePlayed && (void 0 !== t.attr("data-ls-muted-by-browser") && J.media.unmute.singleMediaElement(t), i.mediaSettings.muted && (J.o.rememberUnmuteState && J.media.properties.userDidUnmute ? J.o.rememberUnmuteState && J.media.properties.userDidUnmute && (t[0].muted = !1) : (t[0].muted = !0, "offertounmute" == i.mediaSettings.muted && J.media.unmute.set(t, i.mediaProperties.type))), void 0 !== (s = t[0].play()) && s.then(function(e) {}).catch(function(e) {
                        t[0].muted = !0, t[0].play(), t[0].paused && J.functions.setStates(J.slideshow, {
                            pausedByVideo: !1
                        }), J.media.unmute.set(t, i.mediaProperties.type, !0)
                    }))
                },
                stop: function(e, t, i, s) {
                    i.mediaProperties.canBePlayed && (t[0].pause(), s && (t[0].currentTime = 0), i.is.backgroundVideo || J.media.set.thumbnail(ie(this), "show"), J.media.events.stop(t, e, i))
                }
            }
        }, J.yourLogo = {
            init: function() {
                J.o.yourLogo && (this.$element = ie("<img>").addClass("ls-yourlogo").appendTo($).attr("style", J.o.yourLogoStyle).css({
                    visibility: "hidden",
                    display: "bock"
                }).on("load." + B, function() {
                    var e = J.yourLogo.$element ? 500 : 0;
                    J.timeouts.yourLogo = setTimeout(function() {
                        delete J.timeouts.yourLogo, J.yourLogo.$element.data("originalWidth", J.yourLogo.$element.width()), J.yourLogo.$element.data("originalHeight", J.yourLogo.$element.height()), "auto" != J.yourLogo.$element.css("left") && J.yourLogo.$element.data("originalLeft", J.yourLogo.$element[0].style.left), "auto" != J.yourLogo.$element.css("right") && J.yourLogo.$element.data("originalRight", J.yourLogo.$element[0].style.right), "auto" != J.yourLogo.$element.css("top") && J.yourLogo.$element.data("originalTop", J.yourLogo.$element[0].style.top), "auto" != J.yourLogo.$element.css("bottom") && J.yourLogo.$element.data("originalBottom", J.yourLogo.$element[0].style.bottom), !1 !== J.o.yourLogoLink && ie("<a>").appendTo($).attr("href", J.o.yourLogoLink).attr("target", J.o.yourLogoTarget).css({
                            textDecoration: "none",
                            outline: "none"
                        }).append(J.yourLogo.$element), J.yourLogo.$element.css({
                            display: "none",
                            visibility: "visible"
                        }), J.yourLogo.resize()
                    }, e)
                }).attr("src", J.o.yourLogo))
            },
            resize: function() {
                this.$element.css({
                    width: this.$element.data("originalWidth") * J.resize.ratio,
                    height: this.$element.data("originalHeight") * J.resize.ratio
                }), this.$element.fadeIn(300);
                var e = "auto",
                    t = "auto",
                    i = "auto",
                    s = "auto",
                    e = this.$element.data("originalLeft") && -1 != this.$element.data("originalLeft").indexOf("%") ? $.width() / 100 * parseFloat(this.$element.data("originalLeft")) - this.$element.width() / 2 + parseInt($.css("padding-left")) : parseInt(this.$element.data("originalLeft")) * J.resize.ratio,
                    t = this.$element.data("originalRight") && -1 != this.$element.data("originalRight").indexOf("%") ? $.width() / 100 * parseFloat(this.$element.data("originalRight")) - this.$element.width() / 2 + parseInt($.css("padding-right")) : parseInt(this.$element.data("originalRight")) * J.resize.ratio,
                    i = this.$element.data("originalTop") && -1 != this.$element.data("originalTop").indexOf("%") ? $.height() / 100 * parseFloat(this.$element.data("originalTop")) - this.$element.height() / 2 + parseInt($.css("padding-top")) : parseInt(this.$element.data("originalTop")) * J.resize.ratio,
                    s = this.$element.data("originalBottom") && -1 != this.$element.data("originalBottom").indexOf("%") ? $.height() / 100 * parseFloat(this.$element.data("originalBottom")) - this.$element.height() / 2 + parseInt($.css("padding-bottom")) : parseInt(this.$element.data("originalBottom")) * J.resize.ratio;
                this.$element.css({
                    left: e,
                    right: t,
                    top: i,
                    bottom: s
                })
            }
        }, J.gui = {
            navigation: {
                init: function() {
                    J.o.navPrevNext && this.prevNext.init(), (J.o.navStartStop || J.o.navButtons) && this.bottom.init()
                },
                prevNext: {
                    init: function() {
                        ie('<a class="ls-gui-element ls-nav-prev" aria-label="jump to the previous slide" href="#" />').on("click." + B, function(e) {
                            e.preventDefault(), $.layerSlider("prev")
                        }).appendTo($), ie('<a class="ls-gui-element ls-nav-next" aria-label="jump to the next slide" href="#" />').on("click." + B, function(e) {
                            e.preventDefault(), $.layerSlider("next")
                        }).appendTo($), J.o.hoverPrevNext && this.setHover()
                    },
                    setHover: function() {
                        $.find(".ls-nav-prev, .ls-nav-next").css({
                            display: "none"
                        }), $.on("mouseenter." + B, function() {
                            J.gui.navigation.forceHide || $.find(".ls-nav-prev, .ls-nav-next").stop(!0, !0).fadeIn(300)
                        }).on("mouseleave." + B, function() {
                            $.find(".ls-nav-prev, .ls-nav-next").stop(!0, !0).fadeOut(300)
                        })
                    }
                },
                bottom: {
                    init: function() {
                        this.wrapper = ie('<div class="ls-gui-element ls-bottom-nav-wrapper" />').appendTo($), J.o.navButtons && "always" != J.o.thumbnailNavigation && this.bullets.init(), J.o.navStartStop ? this.createStartStop() : "always" != J.o.thumbnailNavigation && this.createSides(), J.o.hoverBottomNav && "always" != J.o.thumbnailNavigation && this.setHover(), "always" == J.o.thumbnailNavigation && (this.wrapper.addClass("ls-above-thumbnails"), this.thumbnails.init())
                    },
                    bullets: {
                        init: function() {
                            var t = this;
                            ie('<span class="ls-bottom-slidebuttons" />').appendTo($.find(".ls-bottom-nav-wrapper"));
                            for (var e = 0; e < J.slides.count; e++) {
                                var i = ie('<a href="#" aria-label="jump to slide ' + (e + 1) + '" />').appendTo($.find(".ls-bottom-slidebuttons")).data("index", e + 1).on("click." + B, function(e) {
                                    e.preventDefault(), $.layerSlider(ie(this).data("index"))
                                });
                                "hover" == J.o.thumbnailNavigation && i.on("mouseenter." + B, function() {
                                    var e = ie(this);
                                    $.find(".ls-thumbnail-hover-img").css({
                                        left: parseInt(t.hoverWrapper.css("padding-left")),
                                        top: parseInt(t.hoverWrapper.css("padding-top"))
                                    }), t.hoverImage.on("load." + B, function() {
                                        0 === ie(this).width() ? t.hoverImage.css({
                                            position: "relative",
                                            margin: "0 auto",
                                            left: "auto"
                                        }) : t.hoverImage.css({
                                            position: "absolute",
                                            marginLeft: -ie(this).width() / 2,
                                            left: "50%"
                                        }), t.hoverImage.css("display", "none").stop(!0, !0).fadeIn(250)
                                    }).attr("src", J.slides[e.data("index")].data.thumbnail), t.hoverWrapper.css({
                                        display: "block"
                                    }).stop().animate({
                                        left: ie(this).position().left + (ie(this).width() - t.hoverWrapper.outerWidth()) / 2
                                    }, 250), t.hoverWrapperInner.css({
                                        display: "none",
                                        visibility: "visible"
                                    }).stop().fadeIn(250)
                                }).on("mouseleave." + B, function() {
                                    t.hoverWrapperInner.stop().fadeOut(250, function() {
                                        t.hoverWrapper.css({
                                            visibility: "hidden",
                                            display: "block"
                                        })
                                    })
                                })
                            }
                            t.set.active(J.slides.first.index), "hover" == J.o.thumbnailNavigation && t.set.hover()
                        },
                        set: {
                            active: function(e) {
                                void 0 === e && (e = J.slides.current.index), e--, $.find(".ls-bottom-slidebuttons a").removeClass("ls-nav-active"), $.find(".ls-bottom-slidebuttons a:eq( " + e + " )").addClass("ls-nav-active")
                            },
                            hover: function() {
                                var e = J.gui.navigation.bottom.bullets,
                                    t = ie('<div class="ls-thumbnail-hover"><div class="ls-thumbnail-hover-inner"><div class="ls-thumbnail-hover-bg"></div><div class="ls-thumbnail-hover-img"><img></div><span></span></div></div>').appendTo($.find(".ls-bottom-slidebuttons"));
                                $.find(".ls-thumbnail-hover, .ls-thumbnail-hover-img").css({
                                    width: J.o.tnWidth,
                                    height: J.o.tnHeight
                                }), e.hoverWrapper = $.find(".ls-thumbnail-hover"), e.hoverImage = e.hoverWrapper.find("img").css({
                                    height: J.o.tnHeight
                                }), e.hoverWrapperInner = $.find(".ls-thumbnail-hover-inner").css({
                                    visibility: "hidden",
                                    display: "block"
                                }), t.appendTo($.find(".ls-bottom-slidebuttons"))
                            }
                        }
                    },
                    createStartStop: function() {
                        this.buttonStart = ie('<a class="ls-nav-start" aria-label="start slideshow" href="#" />').on("click." + B, function(e) {
                            e.preventDefault(), $.layerSlider("start")
                        }).prependTo($.find(".ls-bottom-nav-wrapper")), this.buttonStop = ie('<a class="ls-nav-stop" aria-label="stop slideshow" href="#" />').on("click." + B, function(e) {
                            e.preventDefault(), $.layerSlider("stop")
                        }).appendTo($.find(".ls-bottom-nav-wrapper")), J.o.autoStart ? this.setStartStop("start") : this.setStartStop("stop")
                    },
                    setStartStop: function(e) {
                        if (J.o.navStartStop) switch (e) {
                            case "start":
                                this.buttonStart.addClass("ls-nav-start-active"), this.buttonStop.removeClass("ls-nav-stop-active");
                                break;
                            case "stop":
                                this.buttonStart.removeClass("ls-nav-start-active"), this.buttonStop.addClass("ls-nav-stop-active")
                        }
                    },
                    createSides: function() {
                        ie('<span class="ls-nav-sides ls-nav-sideleft" />').prependTo($.find(".ls-bottom-nav-wrapper")), ie('<span class="ls-nav-sides ls-nav-sideright" />').appendTo($.find(".ls-bottom-nav-wrapper"))
                    },
                    setHover: function() {
                        var e = this;
                        e.wrapper.css({
                            display: "none"
                        }), $.on("mouseenter." + B, function() {
                            J.gui.navigation.forceHide || e.wrapper.stop(!0, !0).fadeIn(300)
                        }).on("mouseleave." + B, function() {
                            e.wrapper.stop(!0, !0).fadeOut(300)
                        })
                    },
                    switchHelper: function(e) {
                        if (J.o.hoverBottomNav && !$.hasClass("ls-hover")) switch (e) {
                            case "on":
                                J.gui.navigation.bottom.thumbnails.wrapper.css({
                                    visibility: "hidden",
                                    display: "block"
                                });
                                break;
                            case "off":
                                J.gui.navigation.bottom.thumbnails.wrapper.css({
                                    visibility: "visible",
                                    display: "none"
                                })
                        }
                    },
                    thumbnails: {
                        init: function() {
                            this.wrapper = ie('<div class="ls-gui-element ls-thumbnail-wrapper ' + ("contain" !== J.o.tnFillMode ? "ls-thumbnail-fill" : "") + '"></div>').appendTo($), ie('<div class="ls-thumbnail"><div class="ls-thumbnail-inner"><div class="ls-thumbnail-slide-container"><div class="ls-thumbnail-slide"></div></div></div></div>').appendTo(this.wrapper), this.$element = $.find(".ls-thumbnail-slide-container"), "ontouchstart" in window ? this.$element.addClass("ls-touchscroll") : this.$element.on("mouseenter." + B, function() {
                                ie(this).addClass("ls-thumbnail-slide-hover")
                            }).on("mouseleave." + B, function() {
                                ie(this).removeClass("ls-thumbnail-slide-hover"), J.gui.navigation.bottom.thumbnails.scroll()
                            }).on("mousemove." + B, function(e) {
                                e = parseInt(e.pageX - ie(this).offset().left) / ie(this).width() * (ie(this).width() - ie(this).find(".ls-thumbnail-slide").width());
                                ie(this).find(".ls-thumbnail-slide").stop().css({
                                    marginLeft: e
                                })
                            });
                            for (var e = 0; e < J.slides.count; e++) {
                                var t = e + 1,
                                    i = J.slides[t].data.thumbnail,
                                    s = "";
                                "contain" !== J.o.tnFillMode && (i = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", s = 'style="background-image: url(' + J.slides[t].data.thumbnail + "); background-size: " + J.o.tnFillMode + ';"');
                                i = ie('<a href="#" class="ls-thumb-' + (e + 1) + '"  aria-label="jump to slide ' + (e + 1) + '"><img ' + s + ' src="' + i + '"></a>');
                                J.slides[t].data.tnAlt && i.find("img").attr("alt", J.slides[t].data.tnAlt), i.data("index", t).on("click." + B, function(e) {
                                    e.preventDefault(), $.layerSlider(ie(this).data("index"))
                                }).appendTo($.find(".ls-thumbnail-slide")), "ontouchstart" in window || i.on("mouseenter." + B, function() {
                                    ie(this).children().stop().fadeTo(300, J.o.tnActiveOpacity / 100)
                                }).on("mouseleave." + B, function() {
                                    ie(this).children().hasClass("ls-thumb-active") || ie(this).children().stop().fadeTo(300, J.o.tnInactiveOpacity / 100)
                                })
                            }
                            J.gui.navigation.bottom.buttonStart && J.gui.navigation.bottom.buttonStop && (J.gui.navigation.bottom.wrapper = ie('<div class="ls-bottom-nav-wrapper ls-below-thumbnails"></div>').appendTo($), J.gui.navigation.bottom.buttonStart.clone().on("click." + B, function(e) {
                                e.preventDefault(), $.layerSlider("start")
                            }).appendTo(J.gui.navigation.bottom.wrapper), J.gui.navigation.bottom.buttonStop.clone().on("click." + B, function(e) {
                                e.preventDefault(), $.layerSlider("stop")
                            }).appendTo(J.gui.navigation.bottom.wrapper)), J.o.hoverBottomNav && this.setHover()
                        },
                        setHover: function() {
                            var e = this;
                            e.wrapper.css("display", "none"), J.gui.navigation.bottom.wrapper && (J.gui.navigation.bottom.wrapper = "block" == J.gui.navigation.bottom.wrapper.css("display") ? J.gui.navigation.bottom.wrapper : $.find(".ls-above-thumbnails"), J.gui.navigation.bottom.wrapper.css("display", "none")), $.on("mouseenter." + B, function() {
                                $.addClass("ls-hover"), J.gui.navigation.forceHide || (e.wrapper.stop(!0, !0).fadeIn(300), J.gui.navigation.bottom.wrapper && J.gui.navigation.bottom.wrapper.stop(!0, !0).fadeIn(300))
                            }).on("mouseleave." + B, function() {
                                $.removeClass("ls-hover"), e.wrapper.stop(!0, !0).fadeOut(300), J.gui.navigation.bottom.wrapper && J.gui.navigation.bottom.wrapper.stop(!0, !0).fadeOut(300)
                            })
                        },
                        change: function(e) {
                            e = e || J.slides.next.index;
                            $.find(".ls-thumbnail-slide a:not(.ls-thumb-" + e + " )").children().each(function() {
                                ie(this).removeClass("ls-thumb-active").stop().fadeTo(750, J.o.tnInactiveOpacity / 100)
                            }), $.find(".ls-thumbnail-slide a.ls-thumb-" + e).children().addClass("ls-thumb-active").stop().fadeTo(750, J.o.tnActiveOpacity / 100)
                        },
                        scroll: function() {
                            var e;
                            $.find(".ls-thumbnail-slide-container").hasClass("ls-thumbnail-slide-hover") || (e = !!$.find(".ls-thumb-active").length && $.find(".ls-thumb-active").parent()) && (e = e.position().left + e.width() / 2, e = 0 < (e = (e = $.find(".ls-thumbnail-slide-container").width() / 2 - e) < $.find(".ls-thumbnail-slide-container").width() - $.find(".ls-thumbnail-slide").width() ? $.find(".ls-thumbnail-slide-container").width() - $.find(".ls-thumbnail-slide").width() : e) ? 0 : e, $.find(".ls-thumbnail-slide").animate({
                                marginLeft: e
                            }, 600))
                        },
                        resize: function() {
                            J.gui.navigation.bottom.switchHelper("on");
                            var e = -1 == J.slider.initial.width.indexOf("%") ? parseInt(J.slider.initial.originalWidth) : $.width(),
                                t = $.find(".ls-thumbnail"),
                                e = -1 == J.o.tnContainerWidth.indexOf("%") ? parseInt(J.o.tnContainerWidth) : parseInt(e / 100 * parseInt(J.o.tnContainerWidth));
                            $.find(".ls-thumbnail-slide a").css({
                                width: parseInt(J.o.tnWidth * J.resize.ratio),
                                height: parseInt(J.o.tnHeight * J.resize.ratio)
                            }), $.find(".ls-thumbnail-slide a:last").css({
                                margin: 0
                            }), $.find(".ls-thumbnail-slide").css({
                                height: parseInt(J.o.tnHeight * J.resize.ratio)
                            }), t.css({
                                width: e * Math.floor(100 * J.resize.ratio) / 100
                            }), t.width() > $.find(".ls-thumbnail-slide").width() && t.css({
                                width: $.find(".ls-thumbnail-slide").width()
                            }), J.gui.navigation.bottom.switchHelper("off")
                        }
                    }
                }
            },
            media: {
                init: function() {
                    0 < J.media.properties.$allMediaLayers.length && ie('<div class="ls-gui-element ls-media-unmute" aria-label="Unmute"><div class="ls-media-unmute-bg"></div><div class="ls-icon-muted"></div><div class="ls-icon-unmuted"></div></div>').on("click." + B, function(e) {
                        e.preventDefault(), $.layerSlider("unmute")
                    }).appendTo($)
                },
                showUnmute: function() {
                    $.find(".ls-media-unmute").addClass("ls-media-unmute-active")
                },
                hideUnmute: function() {
                    $.find(".ls-media-unmute").removeClass("ls-media-unmute-active")
                }
            },
            skin: {
                load: function() {
                    $.addClass("ls-" + J.o.skin);
                    var e, t = J.o.skinsPath + J.o.skin + "/skin.css",
                        i = ie("head").length ? ie("head") : ie("body");
                    ie('link[href="' + t + '"]').length ? (e = ie('link[href="' + t + '"]'), J.gui.skin.isLoaded || (J.gui.skin.isLoaded = !0, J.timeouts.skinLoad1 = setTimeout(function() {
                        delete J.timeouts.skinLoad1, J.slider.init()
                    }, 150))) : e = document.createStyleSheet ? (document.createStyleSheet(t), ie('link[href="' + t + '"]')) : ie('<link rel="stylesheet" href="' + t + '" type="text/css" />').appendTo(i), e.on("load." + B, function() {
                        J.gui.skin.isLoaded || (J.gui.skin.isLoaded = !0, J.timeouts.skinLoad2 = setTimeout(function() {
                            delete J.timeouts.skinLoad2, J.slider.init()
                        }, 150))
                    }), M.on("load." + B, function() {
                        J.gui.skin.isLoaded || (J.gui.skin.isLoaded = !0, J.timeouts.skinLoad3 = setTimeout(function() {
                            delete J.timeouts.skinLoad3, J.slider.init()
                        }, 150))
                    }), J.timeouts.skinLoad4 = setTimeout(function() {
                        J.gui.skin.isLoaded || (J.gui.skin.isLoaded = !0, delete J.timeouts.skinLoad4, J.slider.init())
                    }, 1e3)
                }
            },
            shadow: {
                init: function() {
                    this.set(), this.resize()
                },
                set: function() {
                    this.$element = ie('<div class="ls-gui-element ls-shadow"></div>').appendTo($), "block" != this.$element.css("display") || this.$element.find("img").length || (this.show = function() {
                        J.gui.shadow.$element.css({
                            display: "none",
                            visibility: "visible"
                        }).fadeIn(500, function() {
                            J.gui.shadow.show = !1
                        })
                    }, this.image = ie("<img>").attr("src", J.o.skinsPath + J.o.skin + "/shadow.png").appendTo(this.$element), this.btmMod = "number" == typeof parseInt($.css("padding-bottom")) ? parseInt($.css("padding-bottom")) : 0)
                },
                resize: function() {
                    this.image && (0 < this.image.height() ? 0 < this.btmMod ? this.$element.css({
                        height: this.image.height() / 2
                    }) : this.$element.css({
                        height: this.image.height(),
                        marginTop: -this.image.height() / 2
                    }) : J.timeouts.resizeShadow = setTimeout(function() {
                        delete J.timeouts.resizeShadow, J.gui.shadow.resize()
                    }, 50))
                }
            },
            timers: {
                init: function() {
                    J.o.showBarTimer && this.bar.create(), J.o.showCircleTimer && this.circle.create();
                    var e = !1;
                    (e = J.o.showSlideBarTimer ? ie("<div>").insertAfter($) : ie('[data-slidebar-for="' + $.attr("id") + '"], [data-slidebar-for="' + B + '"]')).length && (e.addClass("ls-gui-element"), this.slidebar.create(e))
                },
                bar: {
                    create: function() {
                        this.$element = ie("<div>").addClass("ls-gui-element ls-bar-timer").appendTo($)
                    }
                },
                circle: {
                    create: function() {
                        this.$element = ie("<div>").addClass("ls-gui-element ls-circle-timer").appendTo($), this.$element.append(ie('<div class="ls-ct-center"></div><div class="ls-ct-left"><div class="ls-ct-rotate"><div class="ls-ct-hider"><div class="ls-ct-half"></div></div></div></div><div class="ls-ct-right"><div class="ls-ct-rotate"><div class="ls-ct-hider"><div class="ls-ct-half"></div></div></div></div>')), this.$element.data("original", {
                            opacity: this.$element.css("opacity")
                        })
                    }
                },
                slidebar: {
                    $containerElement: [],
                    $element: [],
                    $progressBarElement: [],
                    $sliderContainerElement: [],
                    $sliderElement: [],
                    elementWidth: [],
                    containerElementWidth: [],
                    sliderContainerElementWidth: [],
                    state: {},
                    create: function(e) {
                        function i(e, t) {
                            (a = (e.pageX || J.device.touchX || 0) - o.$element[t].offset().left - o.sliderContainerElementWidth[t] / 2) < 0 && (a = 0), a > o.containerElementWidth[t] - o.sliderContainerElementWidth[t] && (a = "calc( 100% - " + J.gui.timers.slidebar.sliderContainerElementWidth[t] + "px )"), o.$sliderContainerElement[t].css({
                                left: a
                            }), J.transitions._slideTimeline && J.transitions._slideTimeline.progress("string" == typeof a ? J.transitions.layers.timeline.progress : a / (o.containerElementWidth[t] - o.sliderContainerElementWidth[t]) * J.transitions.layers.timeline.progress)
                        }

                        function s(e) {
                            "dragging" == J.gui.timers.slidebar.state && (J.transitions._slideTimeline && J.transitions.layers.timeline.state.finished && J.transitions._slideTimeline.progress() !== J.transitions.layers.timeline.progress && J.functions.setStates(J.transitions.layers.timeline, {
                                finished: !1
                            }), ie(document).off("mousemove." + B), ie("body").prop("unselectable", !1).removeClass("ls-unselectable"), J.o.pauseLayers && !J.slideshow.state.running || J.slider.state.isPaused || !J.transitions._slideTimeline || J.o.playByScroll || (!0 === J.transitions.layers.timeline.state.started ? J.transitions.layers.timeline.resume() : J.transitions.layers.timeline.play()), J.gui.timers.slidebar.state = !1)
                        }
                        var a, r = ie(document),
                            o = this;
                        ie.each(e, function(t, e) {
                            o.$containerElement[t] = ie(e).addClass("ls-slidebar-container " + B), o.$element[t] = ie("<div>").addClass("ls-slidebar").appendTo(o.$containerElement[t]), o.$progressBarElement[t] = ie("<div>").addClass("ls-progressbar").appendTo(o.$element[t]), o.$sliderContainerElement[t] = ie("<div>").addClass("ls-slidebar-slider-container").appendTo(o.$containerElement[t]), o.$sliderElement[t] = ie("<div>").addClass("ls-slidebar-slider").appendTo(o.$sliderContainerElement[t]), o.sliderContainerElementWidth[t] = o.$sliderContainerElement[t].width(), o.$sliderContainerElement[t].css({
                                marginTop: -o.$sliderElement[t].outerHeight() / 2
                            }), o.$containerElement[t].on("touchmove." + B, function(e) {
                                i(e, t)
                            }), o.$containerElement[t].on("touchend." + B, function(e) {
                                s()
                            }), o.$containerElement[t].on("mousedown." + B + " touchstart." + B, function(e) {
                                J.transitions.layers.timeline.pause(0), ie("body").prop("unselectable", !0).addClass("ls-unselectable"), ie(document).on("mousemove." + B, function(e) {
                                    i(e, t)
                                }), i(e, t), J.gui.timers.slidebar.state = "dragging"
                            }), r = r.add(o.$sliderElement[t])
                        }), ie("body").on("mouseup." + B, function(e) {
                            s()
                        })
                    }
                }
            },
            loadingIndicator: {
                init: function() {
                    this.$element = ie("<div>").css({
                        display: "none"
                    }).addClass("ls-gui-element ls-loading-container").appendTo($), ie("<div>").addClass("ls-loading-indicator").appendTo(this.$element)
                },
                show: function() {
                    this.$element.delay(400).fadeIn(300)
                },
                hide: function() {
                    this.$element.stop(!0, !0).fadeOut(300)
                }
            }
        }, J.navigation = {
            direction: "next",
            init: function() {
                1 < J.slides.count && (this.set.keyboard(), this.set.touch())
            },
            set: {
                keyboard: function() {
                    J.o.keybNav && ie("body").on("keydown." + B, function(e) {
                        ie(e.target).is(":input") || J.slider.isAnimating || J.slider.isPreloading || (37 == e.which ? J.navigation.prev() : 39 == e.which && J.navigation.next())
                    })
                },
                touch: function() {
                    "ontouchstart" in window && J.o.touchNav && (J.slider.$innerWrapper.on("touchstart." + B, function(e) {
                        e = e.touches || e.originalEvent.touches;
                        1 == e.length && (J.device.touchStartX = J.device.touchEndX = e[0].clientX)
                    }), J.slider.$innerWrapper.on("touchmove." + B, function(e) {
                        var t = e.touches || e.originalEvent.touches;
                        1 == t.length && (J.device.touchEndX = t[0].clientX), 45 < Math.abs(J.device.touchStartX - J.device.touchEndX) && e.preventDefault()
                    }), J.slider.$innerWrapper.on("touchend." + B, function(e) {
                        45 < Math.abs(J.device.touchStartX - J.device.touchEndX) && (0 < J.device.touchStartX - J.device.touchEndX ? $.layerSlider("touchNext") : $.layerSlider("touchPrev"))
                    }))
                }
            },
            prev: function() {
                (!J.slider.isPopup || J.slider.isPopup && J.slider.state.popupIsVisible) && (this.direction = "prev", this.forceDirection = "prev", J.slideshow.set.prevNext("prev"))
            },
            next: function() {
                (!J.slider.isPopup || J.slider.isPopup && J.slider.state.popupIsVisible) && (this.direction = "next", this.forceDirection = "next", J.slideshow.set.prevNext("next"))
            },
            start: function() {
                J.functions.setStates(J.slideshow, {
                    running: !0,
                    paused: !1
                }), !0 === J.slideshow.state.pausedByLastCycle && J.functions.setStates(J.slideshow, {
                    pausedByLastCycle: !1
                }), J.gui.navigation.bottom.setStartStop("start"), J.slideshow.state.pausedByHover || 1 !== J.transitions._slideTimeline.timeScale() && J.transitions.layers.timeline.resume(), J.slideshow.start()
            },
            stop: function() {
                J.gui.navigation.bottom.setStartStop("stop"), J.o.pauseLayers && J.transitions.layers.timeline.pause(), J.slideshow.stop()
            }
        }, J.preload = {
            init: function() {
                J.slider.$hiddenWrapper.find(".ls-slide img").each(function() {
                    var e, t = ie(this),
                        i = t[0],
                        s = {};
                    t.is(".ls-layer, .ls-bg") && (i.getAttribute("width") && (s.width = i.getAttribute("width")), i.getAttribute("height") && (s.height = i.getAttribute("height")), i.sizes && (s.sizes = i.sizes), J.o.useSrcset && (t.data("srcset") || i.srcset) && (s.srcSet = t.data("srcset") || i.srcset, s.curSrc = i.currentSrc, e = s.srcSet.split(",").map(function(e) {
                        return parseInt(ie.trim(e).split(" ")[1])
                    }), s.maxWidth = Math.max.apply(null, e)), t.removeAttr("width height sizes srcset loading"), ie.isEmptyObject(s) || (t.data(J.defaults.init.dataKey).attributes = s)), t.data("lazy-src") ? t.data("src", t.data("lazy-src")) : t.attr("data-lazy-src") ? t.data("src", t.attr("data-lazy-src")) : t.attr("data-lazy") ? t.data("src", t.attr("data-lazy")) : t.data("src") ? s.curSrc && t.data("src", s.curSrc) : t.data("src", s.curSrc || i.src), t.attr("data-lazyset") ? t.attr("srcset", t.attr("data-lazyset")) : t.attr("data-lazy-srcset") && t.attr("srcset", t.attr("data-lazy-srcset")), t.removeAttr("data-lazy-src data-lazy data-lazyset data-lazy-srcset"), t.attr("src", "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7")
                })
            },
            imagesOfSlide: function(e, t) {
                var i, s, a;
                !0 !== J.slides[e].wrapped ? (this.slideIndex = e, t ? (this.onCompleteCallback = t, J.functions.setStates(J.slider, {
                    preloadingImages: !0
                }), J.gui.loadingIndicator.show()) : this.onCompleteCallback = !1, J.slider.canShow && $.css({
                    visibility: "visible"
                }), this.preImages = [], i = this, J.slider.$hiddenWrapper.find(".ls-slide:eq(" + (i.slideIndex - 1) + ") *").each(function() {
                    s = ie(this), a = this;
                    var e, t = s.data(J.defaults.init.dataKey);
                    s.is("img") ? (s.data("src") && s.attr("src", s.data("src")), t && t.attributes && t.attributes.srcSet && J.o.useSrcset && (a.srcset = t.attributes.srcSet), e = a.src, (t = !!(t && t.attributes && t.attributes.curSrc) && t.attributes.curSrc) && e !== t && s.is(".ls-bg") && (e = t, J.slides[i.slideIndex].data.$background.attr("src", e)), J.preload.preImages.push([e, s])) : "none" !== s.css("background-image") && -1 !== s.css("background-image").indexOf("url") && J.preload.preImages.push([s.css("background-image").match(/url\(['"]?(.+?)['"]?\)/)[1], s])
                }), J.transitions.firstSlide && J.o.globalBGImage && J.preload.preImages.push([J.o.globalBGImage, ie()]), this.thumbnailsAreLoaded || this.thumbnails(), 0 === this.preImages.length ? this.onComplete() : this.start()) : J.slider.shouldResize && t ? (J.resize.setLayers(J.layers.get("next, bg")), J.resize.layers(t)) : t && t()
            },
            thumbnails: function() {
                for (var e = J.slider.thumbnails.filter(function(e, t, i) {
                        return i.indexOf(e) == t
                    }), t = e.length, i = 0; i < t; i++)(new Image).src = e[i];
                this.thumbnailsAreLoaded = !0
            },
            start: function() {
                J.debugMode && (J.debug.add("group", "preload"), J.debug.add("log", "preload.info", this.slideIndex)), this.preloadedImagesCount = 0;
                for (var e, t = this, i = function() {
                        ++t.preloadedImagesCount == t.preImages.length && (J.debugMode && J.debug.groupEnd(), t.onComplete())
                    }, s = function() {
                        J.debugMode && (e = this.src.substring(this.src.lastIndexOf("/") + 1, this.src.length), J.debug.add("log", "preload.success", e)), this.originalLayer.data("preloadedWidth", this.width), this.originalLayer.data("preloadedHeight", this.height), i()
                    }, a = function() {
                        J.debugMode && (e = this.src.substring(this.src.lastIndexOf("/") + 1, this.src.length), J.debug.add("warn", "preload.fail", e)), i()
                    }, r = 0; r < this.preImages.length; r++) {
                    var o = new Image;
                    o.addEventListener("error", a, !1), o.addEventListener("load", s, !1), o.src = this.preImages[r][0], o.originalLayer = this.preImages[r][1]
                }
            },
            onComplete: function() {
                var a = this;
                this.onCompleteCallback ? (J.layers.wrap(this.slideIndex), function e() {
                    var t, i, s;
                    0 !== J.slides[a.slideIndex].$layers.length ? J.timeouts.waitForWrap = setTimeout(e, 100) : (delete J.timeouts.waitForWrap, J.functions.setStates(J.transitions.layers.parallax, {
                        ready: !0
                    }), ie(".ls-thumbnail-wrapper, .ls-nav-next, .ls-nav-prev, .ls-bottom-nav-wrapper").css({
                        visibility: "visible"
                    }), J.slides[a.slideIndex].wrapped = !0, t = !(!window._layerSlider.globals.youTubeIsReady && J.layers.get("next,in,youtube,bgvideo").length), i = !(!window._layerSlider.globals.vimeoIsReady && J.layers.get("next,in,vimeo,bgvideo").length), s = function() {
                        J.gui.loadingIndicator.hide(), J.slider.shouldResize ? (J.resize.setLayers(J.layers.get("next, bg")), J.resize.layers(a.onCompleteCallback)) : a.onCompleteCallback()
                    }, t && i ? s() : J.intervals.waitForJSApisLoaded = setInterval(function() {
                        (t || window._layerSlider.globals.youTubeIsReady) && (i || window._layerSlider.globals.vimeoIsReady) && (clearInterval(J.intervals.waitForJSApisLoaded), delete J.intervals.waitForJSApisLoaded, s())
                    }, 50))
                }()) : J.layers.wrap(this.slideIndex, !0), J.functions.setStates(J.slider, {
                    preloadingImages: !1
                })
            }
        }, J.resize = {
            setLayers: function(e) {
                this.$responsiveLayers = e.add(J.layers.get("active")), J.slides.next.data.$backgroundVideo.length && (this.$responsiveLayers = this.$responsiveLayers.add(J.slides.next.data.$backgroundVideo))
            },
            all: function(e = {}) {
                return !(J.slider.state.isHidden && !J.slider.isPopup) && (!!document.body.contains(I) && (J.api.hasEvent("sliderWillResize") && J.api.triggerEvent("sliderWillResize", J.api.eventData()), this.slider(!!e.forceToGetParentWidth), J.o.performanceMode && this.performance(), J.slider.isScene && !J.slider.$spacingWrapper.is("[data-disabled-scene]") && this.scene(), this.navigation(), this.layers(), this.yourLogo(), this.shadow(), this.timers(), J.transitions.layers.timeline.shouldRestart && J.o.allowRestartOnResize && (J.functions.resetSlideTimelines(), J.transitions.layers.timeline.create(!0), J.slider.isScrollScene && J.transitions._slideTimeline && J.transitions.scrollscene.animate()), void(J.api.hasEvent("sliderDidResize") && J.api.triggerEvent("sliderDidResize", J.api.eventData()))))
            },
            viewport: function() {
                M.scrollTop(Math.round(J.slider.offset.top) - (te.viewport.height - J.slider.height) / 2)
            },
            slider: function(e) {
                if (!document.body.contains(I)) return !1;
                te.viewport.width || M.trigger("resize.lsGlobal"), J.o.fixFloatedContainers && $.css("display", "none");
                var t, i, s, a = J.slider.$parentWithNumericWidthValue && 0 < J.slider.$parentWithNumericWidthValue.width() && !e ? J.slider.$parentWithNumericWidthValue : J.functions.getSliderClosestParentElementWithNumericValueOfProperty("width"),
                    r = J.slider.initial,
                    o = J.slider.$parentWithNumericWidthValuePercent ? a.width() / 100 * J.slider.$parentWithNumericWidthValuePercent : a.width(),
                    n = r.type,
                    l = 0 !== r.maxWidth ? r.maxWidth : o,
                    d = "auto" === r.marginLeft ? 0 : r.marginLeft,
                    e = "auto" === r.marginRight ? 0 : r.marginRight;
                switch (J.o.fixFloatedContainers && $.css("display", "block"), -1 !== l.indexOf("%") ? l = o / 100 * parseInt(l) : -1 !== l.indexOf("vw") && (l = te.viewport.width / 100 * parseInt(l)), J.slider.state.inFullscreen ? $[0].style.maxWidth = "" : 0 !== r.maxWidth && ($[0].style.maxWidth = l), l < (o -= d + e) && 0 <= l && (o = l), J.o.fitScreenWidth && ("fullwidth" === n || "fullsize" === n && "fitheight" !== J.o.fullSizeMode && "fitwidth" !== J.o.fullSizeMode) && (d = a.offset().left, e = parseInt(a.css("padding-left")) || 0, l = parseInt(a.css("border-left-width")) || 0, $[0].style.maxWidth = "100vw", $[0].style.marginLeft = -(d + e + l) + "px", o = te.viewport.width), o -= r.skinWidth, te.getScreenSize(), J.slider.state.inFullscreen && (o = te.screen.width), n) {
                    case "responsive":
                        0 < J.o.maxRatio && (o = Math.min(r.width * J.o.maxRatio, o)), t = (J.slider.state.inFullscreen ? (te.screen.ratio > r.ratio ? this.ratio = te.screen.height / r.height : this.ratio = te.screen.width / r.width, o = Math.round(r.width * this.ratio)) : this.ratio = o / r.width, Math.round(r.height * this.ratio));
                        break;
                    case "fullwidth":
                        t = o < J.o.responsiveUnder ? (this.ratio = o / J.o.responsiveUnder, Math.round(r.height * this.ratio)) : J.slider.state.inFullscreen ? te.screen.ratio > r.layersWidth / r.height ? (this.ratio = te.screen.height / r.height, te.screen.height) : (this.ratio = te.screen.width / r.layersWidth, r.height * this.ratio) : (this.ratio = 1, r.height);
                        break;
                    case "fullsize":
                        switch (J.o.fullSizeMode.toLowerCase()) {
                            case "normal":
                                t = te.viewport.height - r.skinHeight;
                                break;
                            case "hero":
                                var c = Math.max($.offset().top, 0),
                                    p = J.slider.isScene ? J.slider.$spacingWrapper : $;
                                J.slider.isScene && (c = 0);
                                var u = ie(J.o.calculateOffsetFrom).length ? ie(J.o.calculateOffsetFrom).height() + ie(J.o.calculateOffsetFrom)[0].getBoundingClientRect().top : 0;
                                u && p.css("top", u), (t = te.viewport.height - r.skinHeight - (u || c)) <= 0 && (t = te.viewport.height - r.skinHeight);
                                break;
                            case "fitheight":
                                o = a.width() - r.skinWidth, t = a.height() - r.skinHeight;
                                break;
                            case "fitwidth":
                                o = a.width() - r.skinWidth, t = te.viewport.height - r.skinHeight
                        }
                        o / t < r.ratio ? this.ratio = o / r.layersWidth : this.ratio = t / r.layersHeight;
                        break;
                    case "fixed":
                    case "fixedsize":
                        this.ratio = 1, o = r.width, t = r.height, J.o.maxRatio = 1, I.style.maxWidth = "none"
                }
                this.ratio = J.o.maxRatio && 0 < J.o.maxRatio && this.ratio > J.o.maxRatio ? J.o.maxRatio : this.ratio, I.style.width = o + "px", I.style.height = t + "px", J.slider.width = o, J.slider.height = t, te.isMobile ? 768 <= te.viewport.width || te.viewport.width > te.viewport.height ? $.removeClass("ls-device-is-phone").addClass("ls-device-is-tablet") : $.removeClass("ls-device-is-tablet").addClass("ls-device-is-phone") : $.removeClass("ls-device-is-phone ls-device-is-tablet").addClass("ls-device-is-desktop"), J.o.marginTop && (i = -1 != J.o.marginTop.indexOf("sh") || -1 != J.o.marginTop.indexOf("%") ? J.slider.height / 100 * parseInt(J.o.marginTop) : J.o.marginTop), J.o.marginBottom && (s = -1 != J.o.marginBottom.indexOf("sh") || -1 != J.o.marginBottom.indexOf("%") ? J.slider.height / 100 * parseInt(J.o.marginBottom) : J.o.marginBottom), J.slider.$spacingWrapper.css({
                    marginTop: i,
                    marginBottom: s
                }), J.slider.hasPinnedLayers && J.slider.$layersWrapper.css({
                    clip: "rect(0px " + J.slider.width + "px " + J.slider.height + "px 0px)"
                })
            },
            performance: function() {
                var e = parseInt(J.o.performanceModeThreshold); - 1 !== J.o.performanceModeThreshold.indexOf("sh") || -1 !== J.o.performanceModeThreshold.indexOf("%") ? J.performance.threshold = J.slider.height * (e / 100) : -1 !== J.o.performanceModeThreshold.indexOf("vh") ? J.performance.threshold = te.viewport.height * (e / 100) : -1 !== J.o.performanceModeThreshold.indexOf("px") ? J.performance.threshold = e : J.performance.threshold = J.slider.height * e, J.performance.threshold = Math.max(parseInt(J.performance.threshold), 0)
            },
            scene: function() {
                var e;
                J.slider.isScrollScene && J.o.sceneDuration ? e = Math.round(J.slider.height + J.o.sceneDuration * J.slider.height / (J.o.sceneSpeed / 100)) + "px" : J.slider.isSticky && (-1 !== J.o.sceneHeight.indexOf("sh") || -1 !== J.o.sceneHeight.indexOf("%") ? (e = J.slider.height * (parseInt(J.o.sceneHeight) / 100), e = Math.round(Math.max(J.slider.height, e)), e += "px") : -1 === J.o.sceneHeight.indexOf("px") && -1 === J.o.sceneHeight.indexOf("vh") ? (e = J.slider.height * (J.o.sceneHeight || 2), e = Math.round(Math.max(J.slider.height, e)), e += "px") : e = J.o.sceneHeight), e && J.slider.$spacingWrapper.css({
                    height: e
                }), $.css({
                    top: J.transitions.scrollscene.stickLimit
                })
            },
            borderRadius: function(e, i) {
                ie.isNumeric(e) && (e = e.toString());
                var s = "";
                return ie.each(e.split(" "), function(e, t) {
                    -1 == t.indexOf("%") && -1 == t.indexOf("em") ? s += Math.round(parseInt(t) * i) + "px " : s += t + " "
                }), ie.trim(s)
            },
            convertSingleValue: function(e, t) {
                return -1 == e.indexOf("em") ? Math.round(parseInt(e) * t) + "px " : e
            },
            layers: function(e) {
                if (this.$responsiveLayers) {
                    J.debugMode && J.debug.add("group", "resize");
                    for (var t, i = this.$responsiveLayers, s = J.slider.initial, a = J.slider.width, r = J.slider.height, o = a / r, n = [], l = [], d = [], c = [], p = 0, u = 0, h = window.LS_previewZoom || 1, m = 0, f = i.length; m < f; m++) {
                        var g = i[m],
                            y = ie(g),
                            v = y.data(J.defaults.init.dataKey),
                            w = !!v.is.insideLayerGroup && y.data("$layerGroup"),
                            b = !!v.is.insideLayerGroup && w.data(J.defaults.init.dataKey),
                            S = v.original,
                            x = this.ratio;
                        v.settings.minresponsiveratio && x < v.settings.minresponsiveratio && (x = v.settings.minresponsiveratio), v.settings.maxresponsiveratio && x > v.settings.maxresponsiveratio && (x = v.settings.maxresponsiveratio), v.settings.calculatedratio = x, !y.is("img") || "auto" !== S.width && "auto" !== S.height || ((_ = v.elements.$_innerWrappers).addClass("ls-force-display-block ls-force-visibility-hidden"), "auto" === S.width && (S.width = y.width()), "auto" === S.height && (S.height = y.height()), _.removeClass("ls-force-display-block ls-force-visibility-hidden")), t = "responsive" === s.type && -1 !== J.o.maxRatio ? s.width : s.layersWidth, L = "responsive" === s.type && -1 !== J.o.maxRatio ? s.height : s.layersHeight, T = t, u = "fullsize" === s.type || "fullwidth" === s.type || "responsive" === s.type ? (p = 0 < t ? (a - t * x) / 2 : 0, 0 < L ? (r - L * x) / 2 : 0) : (p = p < 0 ? 0 : p, u < 0 ? 0 : u);
                        var T, k = "fixed" == v.settings.position || "fixedx" == v.settings.position,
                            C = "fixed" == v.settings.position || "fixedy" == v.settings.position,
                            O = a,
                            P = r,
                            L = v.is.insideLayerGroup ? (C = k = !1, $ = I = 0, t = O = b.responsive.width, P = b.responsive.height) : (t = T, L);
                        v.is.pinned && (J.slider.get.offset(), s.width, s.height, "responsive" !== s.type && "fixedsize" !== s.type && ("fullsize" !== s.type || "fitheight" !== J.o.fullSizeMode && !1 !== J.o.fitScreenWidth) || (k ? (t = O = te.viewport.width, p = 0) : (O = J.slider.width, p = J.slider.offset.left, t = s.width), C ? (L = P = te.viewport.height, u = 0) : (P = J.slider.height, u = (te.viewport.height - J.slider.height) / 2 || 0, L = s.height)));
                        var I = k ? 0 : p,
                            $ = C ? 0 : u,
                            B = {
                                width: k && 0 !== S.percentWidth ? O / 100 * S.percentWidth : S.width * x,
                                height: C && 0 !== S.percentHeight ? P / 100 * S.percentHeight : S.height * x,
                                paddingLeft: this.convertSingleValue(S.paddingLeft, x),
                                paddingTop: this.convertSingleValue(S.paddingTop, x),
                                paddingRight: this.convertSingleValue(S.paddingRight, x),
                                paddingBottom: this.convertSingleValue(S.paddingBottom, x),
                                borderLeftWidth: this.convertSingleValue(S.borderLeftWidth, x),
                                borderTopWidth: this.convertSingleValue(S.borderTopWidth, x),
                                borderRightWidth: this.convertSingleValue(S.borderRightWidth, x),
                                borderBottomWidth: this.convertSingleValue(S.borderBottomWidth, x),
                                borderRadius: this.borderRadius(S.borderRadius, x)
                            },
                            M = {
                                marginLeft: this.convertSingleValue(S.marginLeft, x),
                                marginTop: this.convertSingleValue(S.marginTop, x),
                                marginRight: this.convertSingleValue(S.marginRight, x),
                                marginBottom: this.convertSingleValue(S.marginBottom, x)
                            },
                            W = {},
                            _ = {
                                borderRadius: B.borderRadius
                            };
                        if ((k || C) && (S.percentHeight || S.percentWidth) && v.is.imageLayer && (S.percentHeight && !S.percentWidth && (B.width = S.width * (B.height / S.height)), S.percentWidth && !S.percentHeight && (B.height = S.height * (B.width / S.width))), ("number" == typeof S.width && S.width < 0 || "auto" == S.width || "" == S.sWidth) && J.debugMode && J.debug.add("warn", "resize.width", [m + 1, S.width]), ("number" == typeof S.height && S.height < 0 || "auto" == S.height || "" == S.sHeight) && J.debugMode && J.debug.add("warn", "resize.height", [m + 1, S.height]), v.is.textLayer && (B.fontSize = S.fontSize * x, te.isMobile && B.fontSize < v.styleSettings.minmobilefontsize ? B.fontSize = v.styleSettings.minmobilefontsize : B.fontSize < v.styleSettings.minfontsize && (B.fontSize = v.styleSettings.minfontsize), T = B.fontSize / S.fontSize, B.fontSize += "px", -1 !== S.lineHeight.indexOf("px") && (B.lineHeight = parseFloat(S.lineHeight) * T + "px"), -1 !== S.letterSpacing.indexOf("px") && (B.letterSpacing = parseFloat(S.letterSpacing) * T + "px"), -1 !== S.textStrokeWidth.indexOf("px") && (B.textStrokeWidth = parseFloat(S.textStrokeWidth) * T + "px"), "" == S.sWidth && (B.width = "auto", v.elements.$innerWrapper.addClass("ls-force-width-auto"), "nowrap" !== y.css("white-space") && (v.elements.$_innerWrappers.addClass("ls-force-left-0"), v.elements.$_outerWrappers.addClass("ls-force-full-size"))), "" == S.sHeight && (B.height = "auto", v.elements.$innerWrapper.addClass("ls-force-height-auto")), "" != S.sWidth && "" != S.sHeight || y.css(B)), v.is.slideBackground || v.is.backgroundVideo)
                            if (v.is.slideBackground) {
                                var A = J.slides[v.is.onSlide].data.backgroundSize;
                                switch ((void 0 !== A && "inherit" !== A ? A : J.o.slideBGSize).replace("100% 100%", "stretch")) {
                                    case "auto":
                                        break;
                                    case "cover":
                                        S.ratio < o ? (B.width = a, B.height = B.width / S.ratio) : (B.height = r, B.width = B.height * S.ratio);
                                        break;
                                    case "contain":
                                        S.ratio < o ? (B.height = r, B.width = B.height * S.ratio) : (B.width = a, B.height = B.width / S.ratio);
                                        break;
                                    case "stretch":
                                        B.width = a, B.height = r
                                }
                                B.width = Math.round(B.width), B.height = Math.round(B.height);
                                var F, z = J.slides[v.is.onSlide].data.backgroundPosition;
                                switch ((F = (void 0 !== z ? z : J.o.slideBGPosition).split(" "))[0]) {
                                    case "left":
                                        B.x = 0;
                                        break;
                                    case "center":
                                        B.x = (J.slider.width - B.width) / 2;
                                        break;
                                    case "right":
                                        B.x = J.slider.width - B.width;
                                        break;
                                    default:
                                        -1 !== F[0].indexOf("%") ? B.x = (J.slider.width - B.width) / 100 * parseInt(F[0]) : B.x = parseInt(F[0])
                                }
                                if (void 0 !== F[1]) switch (F[1]) {
                                    case "top":
                                        B.y = 0;
                                        break;
                                    case "center":
                                        B.y = (J.slider.height - B.height) / 2;
                                        break;
                                    case "bottom":
                                        B.y = J.slider.height - B.height;
                                        break;
                                    default:
                                        -1 !== F[1].indexOf("%") ? B.y = (J.slider.height - B.height) / 100 * parseInt(F[1]) : B.y = parseInt(F[1])
                                }
                                B.transform = "translateX(" + B.x + "px) translateY(" + B.y + "px)", B["-ms-transform"] = "translateX(" + B.x + "px) translateY(" + B.y + "px)", B["-webkit-transform"] = "translateX(" + B.x + "px) translateY(" + B.y + "px)"
                            } else v.is.backgroundVideo && (S.ratio < o ? (B.width = a, B.height = B.width / S.ratio) : (B.height = r, B.width = B.height * S.ratio), B.x = (J.slider.width - B.width) / 2, B.y = (J.slider.height - B.height) / 2, B.width = Math.round(B.width), B.height = Math.round(B.height), B.transform = "translateX(" + B.x + "px) translateY(" + B.y + "px)", B["-ms-transform"] = "translateX(" + B.x + "px) translateY(" + B.y + "px)", B["-webkit-transform"] = "translateX(" + B.x + "px) translateY(" + B.y + "px)");
                        else !v.mediaProperties || "youtube" !== v.mediaProperties.type && "vimeo" !== v.mediaProperties.type || (A = B.width / B.height, z = {
                            width: B.width,
                            height: B.height
                        }, S.ratio < A ? (z.height = B.width / S.ratio, z.marginTop = (B.height - z.height) / 2) : (z.width = B.height * S.ratio, z.marginLeft = (B.width - z.width) / 2), v.mediaProperties.$media.css(z)), v.elements.$_innerWrappers.addClass("ls-force-display-block ls-force-no-transform"), y.addClass("ls-force-no-transform"), v.is.insideLayerGroup && ((b = (w = y.data("$layerGroup")).data(J.defaults.init.dataKey)).elements.$_innerWrappers.addClass("ls-force-display-block ls-force-no-transform"), w.addClass("ls-force-no-transform")), "auto" == B.width ? B.outerWidth = Math.ceil(y.outerWidth()) : B.outerWidth = B.width + J.layers.toNum(B.paddingLeft, B.fontSize) + J.layers.toNum(B.paddingRight, B.fontSize) + J.layers.toNum(B.borderLeftWidth, B.fontSize) + J.layers.toNum(B.borderRightWidth, B.fontSize), "auto" == B.height ? B.outerHeight = Math.ceil(y.outerHeight()) : B.outerHeight = B.height + J.layers.toNum(B.paddingTop, B.fontSize) + J.layers.toNum(B.paddingBottom, B.fontSize) + J.layers.toNum(B.borderTopWidth, B.fontSize) + J.layers.toNum(B.borderBottomWidth, B.fontSize), v.elements.$_allWrappers.removeClass("ls-force-display-block ls-force-no-transform ls-force-width-auto ls-force-height-auto ls-force-left-0 ls-force-full-size"), y.removeClass("ls-force-no-transform"), v.is.insideLayerGroup && (b.elements.$_allWrappers.removeClass("ls-force-display-block ls-force-no-transform ls-force-width-auto ls-force-height-auto ls-force-left-0 ls-force-full-size"), w.removeClass("ls-force-no-transform")), M.width = W.width = B.outerWidth, M.height = W.height = B.outerHeight, -1 != S.left.indexOf("%") ? "100%" === S.left ? B.left = 0 === I ? O / 100 * parseFloat(S.left) - B.outerWidth : I + t * x / 100 * parseFloat(S.left) - B.outerWidth : "0%" === S.left ? B.left = 0 === I ? 0 : I : B.left = 0 === I ? O / 100 * parseFloat(S.left) - B.outerWidth / 2 : I + t * x / 100 * parseFloat(S.left) - B.outerWidth / 2 : B.left = I + parseFloat(S.left) * x, M.left = B.left, -1 != S.top.indexOf("%") ? "100%" === S.top ? B.top = 0 === $ ? P / 100 * parseFloat(S.top) - B.outerHeight : $ + L * x / 100 * parseFloat(S.top) - B.outerHeight : "0%" === S.top ? B.top = 0 === $ ? 0 : $ + 0 : B.top = 0 === $ ? P / 100 * parseFloat(S.top) - B.outerHeight / 2 : $ + L * x / 100 * parseFloat(S.top) - B.outerHeight / 2 : B.top = $ + parseFloat(S.top) * x, M.top = B.top;
                        v.textIn.$nodesForBackgroundClip && v.textIn.$nodesForBackgroundClip.length && ((P = v.elements.$outerStyleWrapper.add(v.elements.$outerStyleWrapper.find(".ls-wrapper"))).addClass("ls-force-visibility-hidden ls-force-display-block"), v.elements.$_innerWrappers.addClass("ls-force-no-transform"), L = !1, "auto" === g.style.width && (g.style.width = Math.ceil(v.original.width * (h * x)) + "px", L = !0), v.textIn.$nodesForBackgroundClip.each(function(e, t) {
                            var i = ie(t),
                                s = i.children(".ls-textnode-bgclip-wrap"),
                                t = s.children(".ls-textnode"),
                                i = (i.children(".ls-textnode-dummy"), i.position());
                            s.css({
                                width: Math.ceil(M.width),
                                height: Math.ceil(M.height),
                                transform: "translate(" + -i.left / h + "px," + -i.top / h + "px)"
                            }), t.css({
                                marginLeft: i.left / h,
                                marginTop: i.top / h
                            })
                        }), L = L && !(g.style.width = "auto"), v.elements.$_innerWrappers.removeClass("ls-force-no-transform"), P.removeClass("ls-force-visibility-hidden ls-force-display-block")), B.fontSize = parseFloat(B.fontSize) / te.automaticFontSizeRatio + "px", v.responsive = B, n[m] = B, v.is.smartBG && (B.left = Math.round(B.left), B.top = Math.round(B.top), B.width = Math.ceil(B.width), B.height = Math.ceil(B.height), n[m]["--sw"] = (k ? J.slider.width : s.width * x) + "px", n[m]["--sh"] = (C ? J.slider.height : s.height * x) + "px", n[m]["--x"] = -B.left - parseFloat(B.borderLeftWidth) - parseFloat(B.paddingLeft) - parseFloat(M.marginLeft) + (k ? 0 : p) + "px", n[m]["--y"] = -B.top - parseFloat(B.borderTopWidth) - parseFloat(B.paddingTop) - parseFloat(M.marginTop) + (C ? 0 : u) + "px"), v.is.slideBackground || v.is.backgroundVideo || (v.settings.wrapperData.responsive = M, l[m] = M, d[m] = W, c[m] = _)
                    }
                    for (var D = 0, V = n.length; D < V; D++) {
                        var R = ie(i[D]),
                            E = R.data(J.defaults.init.dataKey);
                        R.css(n[D]), E.is.slideBackground || E.is.backgroundVideo ? (E.is.slideBackground || E.is.backgroundVideo) && (E.elements.$bgOuterWrapper.css({
                            width: J.slider.width,
                            height: J.slider.height
                        }), E.elements.$outerWrapper.css({
                            width: J.slider.width,
                            height: J.slider.height
                        })) : (R.find(".split-item").css(c[D]), this.wrappers(R, E, l[D], d[D]))
                    }
                    void 0 !== e && e(), J.debugMode && J.debug.groupEnd("resize")
                }
            },
            wrappers: function(e, t, i, s) {
                i && t.elements.$outerStyleWrapper.css(i), s && t.loop.enabled && t.elements.$loopWrapper.css(s), ee.TweenMax.set(t.elements.$wrapper[0], {
                    autoCSS: !1,
                    css: {
                        transformPerspective: t.transformPerspective.layer * J.resize.ratio
                    }
                }), t.loop.enabled && ee.TweenMax.set(t.elements.$loopWrapper[0], {
                    autoCSS: !1,
                    css: {
                        transformPerspective: t.transformPerspective.loop * J.resize.ratio
                    }
                }), t.hover.enabled && ee.TweenMax.set(e[0], {
                    autoCSS: !1,
                    css: {
                        transformPerspective: t.transformPerspective.hover * J.resize.ratio
                    }
                }), t.textIn.nodes && ee.TweenMax.set(t.textIn.nodes, {
                    autoCSS: !1,
                    css: {
                        transformPerspective: t.transformPerspective.text * J.resize.ratio
                    }
                }), t.textOut.nodes && ee.TweenMax.set(t.textOut.nodes, {
                    autoCSS: !1,
                    css: {
                        transformPerspective: t.transformPerspective.text * J.resize.ratio
                    }
                }), t.parallax.enabled && ee.TweenMax.set(t.elements.$parallaxWrapper[0], {
                    autoCSS: !1,
                    css: {
                        transformPerspective: t.transformPerspective.parallax * J.resize.ratio
                    }
                }), t.scroll.enabled && ee.TweenMax.set(t.elements.$scrollTransformWrapper[0], {
                    autoCSS: !1,
                    css: {
                        transformPerspective: t.transformPerspective.scroll * J.resize.ratio
                    }
                })
            },
            performTransformOperations: function(e, t) {
                var i, s, a, r;
                for (r in t)
                    if ("string" == typeof t[r] && -1 !== t[r].indexOf("="))
                        if (s = (i = t[r].split("="))[0].trim() || !1, a = parseFloat(i[1].trim()) || !1, s && a && ie.isNumeric(a)) switch (s) {
                            case "+":
                                t[r] = e[r] + a;
                                break;
                            case "-":
                                t[r] = e[r] - a;
                                break;
                            case "*":
                                t[r] = e[r] * a;
                                break;
                            case "/":
                                t[r] = e[r] / a
                        } else t[r] = e[r]
            },
            mirrorTransitionProperties: function(o) {
                function n(e) {
                    var t = e;
                    switch (e) {
                        case "left":
                            t = "right";
                            break;
                        case "right":
                            t = "left";
                            break;
                        case "top":
                            t = "bottom";
                            break;
                        case "bottom":
                            t = "top"
                    }
                    return -1 !== e.indexOf("lw") || -1 !== e.indexOf("lh") || -1 !== e.indexOf("sw") || -1 !== e.indexOf("sh") ? t = "-" === e.charAt(0) ? e.substring(1) : "-" + e : -1 !== e.indexOf("%") ? t = -1 * parseFloat(e.split("%")[0]) + "%" : ie.isNumeric(e) && 0 !== e && "0" !== e && (t = -1 * e), t
                }

                function e(e) {
                    var t, i, s, a;
                    for (a in e)
                        if (s = a.toLowerCase(), -1 !== o.mirrorProperties.indexOf(s)) {
                            if ("object" == typeof(t = e[a]))
                                for (var r in i = [], t) i.push(n(t[r]));
                            else i = n(t);
                            e[a] = i
                        }
                }
                e(o.transitionProperties), o.transitionPropertiesShouldBeConverted && e(o.transitionPropertiesShouldBeConverted)
            },
            transformProperties: function(e, t, i, s, a, r) {
                if ("object" == typeof s.x) {
                    for (var o = [], n = 0; n < s.x.length; n++) "string" == typeof s.x[n] ? o[n] = this.getXY(e, t, s.x[n], "Width") : o[n] = s.x[n] * t.settings.calculatedratio;
                    i.cycle.x = o
                } else "string" == typeof s.x ? i.x = this.getXY(e, t, s.x, "Width") : void 0 !== s.x && (i.x = s.x * t.settings.calculatedratio);
                if ("object" == typeof s.y) {
                    for (var l = [], d = 0; d < s.y.length; d++) "string" == typeof s.y[d] ? l[d] = this.getXY(e, t, s.y[d], "Height") : l[d] = s.y[d] * t.settings.calculatedratio;
                    i.cycle.y = l
                } else "string" == typeof s.y ? i.y = this.getXY(e, t, s.y, "Height") : void 0 !== s.y && (i.y = s.y * t.settings.calculatedratio);
                if (a && (i = a), "object" == typeof s.transformOrigin || r) {
                    var c = [];
                    if (r) {
                        a = e.data(J.defaults.init.dataKey).elements.$outerStyleWrapper.add(e.data(J.defaults.init.dataKey).elements.$outerStyleWrapper.find(".ls-wrapper"));
                        a.addClass("ls-force-visibility-hidden ls-force-display-block ls-fix-textnodes"), c = J.functions.convert.nodesTransformOrigin(s.transformOrigin, r, t, e.data(J.defaults.init.dataKey).elements.$outerStyleWrapper), a.removeClass("ls-force-visibility-hidden ls-force-display-block ls-fix-textnodes")
                    } else
                        for (var p = 0; p < s.transformOrigin.length; p++) c[p] = J.functions.convert.transformOrigin(s.transformOrigin[p], e, t, e.data(J.defaults.init.dataKey).elements.$outerStyleWrapper);
                    i.cycle.transformOrigin = c
                } else "string" == typeof s.transformOrigin && (i.transformOrigin = J.functions.convert.transformOrigin(s.transformOrigin, e, t, e.data(J.defaults.init.dataKey).elements.$outerStyleWrapper))
            },
            styleProperties: function(e, t, i) {
                void 0 !== i.width && (ie.isNumeric(i.width) ? t.width = parseInt(i.width) * e.settings.calculatedratio : "string" == typeof i.width && -1 !== i.width.indexOf("%") && (t.width = J.slider.width / 100 * parseInt(i.width))), void 0 !== i.height && (ie.isNumeric(i.height) ? t.height = parseInt(i.height) * e.settings.calculatedratio : "string" == typeof i.height && -1 !== i.height.indexOf("%") && (t.height = J.slider.height / 100 * parseInt(i.height))), i.borderRadius && (t.borderRadius = J.resize.borderRadius(i.borderRadius, e.settings.calculatedratio))
            },
            clip: function(e, t, i, s) {
                i = ie.trim(i.replace("rect(", "").replace(")", ""));
                for (var a, e = e.data(J.defaults.init.dataKey).responsive, r = Math.ceil(e.outerWidth), o = Math.ceil(e.outerHeight), n = -1 === i.indexOf(",") ? i.split(" ") : i.split(","), l = "", d = 0; d < n.length; d++)
                    if (-1 !== n[d].indexOf("%")) switch (d) {
                        case 0:
                            l += parseInt(o / 100 * parseInt(n[d]) * 100) / 100 + "px ";
                            break;
                        case 1:
                            l += s ? parseInt(100 * (r - r / 100 * parseInt(n[d]))) / 100 + "px " : parseInt(r / 100 * parseInt(n[d]) * 100) / 100 + "px ";
                            break;
                        case 2:
                            l += s ? parseInt(100 * (o - o / 100 * parseInt(n[d]))) / 100 + "px " : parseInt(o / 100 * parseInt(n[d]) * 100) / 100 + "px ";
                            break;
                        case 3:
                            l += parseInt(r / 100 * parseInt(n[d]) * 100) / 100 + "px"
                    } else switch (a = parseInt(n[d]) * t.settings.calculatedratio, d) {
                        case 0:
                            l += a + "px ";
                            break;
                        case 1:
                            l += s ? r - a + "px " : a + "px ";
                            break;
                        case 2:
                            l += s ? o - a + "px " : a + "px ";
                            break;
                        case 3:
                            l += a + "px"
                    }
                return "rect(" + l + ")"
            },
            getXY: function(e, t, i, s) {
                var a = 0,
                    r = t.original,
                    o = t.responsive,
                    n = t.settings.wrapperData.responsive;
                if (r && o && n) switch (i) {
                    case "left":
                        a = -1 == r.left.indexOf("%") || "100%" === r.left ? -o.left - o.outerWidth - parseInt(n.marginLeft) : -parseInt(r.left) / 100 * J.slider.width - o.outerWidth / 2 - parseInt(n.marginLeft);
                        break;
                    case "right":
                        a = -1 == r.left.indexOf("%") || "100%" === r.left ? J.slider.width - o.left - parseInt(n.marginLeft) : (1 - parseInt(r.left) / 100) * J.slider.width + o.outerWidth / 2 - parseInt(n.marginLeft);
                        break;
                    case "top":
                        a = -1 == r.top.indexOf("%") || "100%" === r.top ? -o.top - o.outerHeight - parseInt(n.marginTop) : -parseInt(r.top) / 100 * J.slider.height - o.outerHeight / 2 - parseInt(n.marginTop);
                        break;
                    case "bottom":
                        a = -1 == r.top.indexOf("%") || "100%" === r.top ? J.slider.height - o.top - parseInt(n.marginTop) : (1 - parseInt(r.top) / 100) * J.slider.height + o.outerHeight / 2 - parseInt(n.marginTop);
                        break;
                    case "width":
                        a = o.outerWidth;
                        break;
                    case "-width":
                        a = -o.outerWidth;
                        break;
                    case "height":
                        a = o.outerHeight;
                        break;
                    case "-height":
                        a = -o.outerHeight;
                        break;
                    default:
                        a = -1 !== i.indexOf("%") ? o["outer" + s] / 100 * parseInt(i) : -1 !== i.indexOf("sw") ? parseInt(i.split("sw")[0]) / 100 * J.slider.width : -1 !== i.indexOf("sh") ? parseInt(i.split("sh")[0]) / 100 * J.slider.height : -1 !== i.indexOf("lw") ? o.outerWidth / 100 * parseInt(i.split("lw")[0]) : -1 !== i.indexOf("lh") ? o.outerHeight / 100 * parseInt(i.split("lh")[0]) : parseInt(i) * t.settings.calculatedratio
                }
                return a
            },
            navigation: function() {
                "always" == J.o.thumbnailNavigation && J.gui.navigation.bottom.thumbnails.resize()
            },
            shadow: function() {
                J.gui.shadow.show && J.gui.shadow.show(), J.gui.shadow.$element && J.gui.shadow.resize()
            },
            yourLogo: function() {
                J.yourLogo.$element && J.yourLogo.resize()
            },
            timers: function() {
                if (0 < J.gui.timers.slidebar.$containerElement.length)
                    for (var e = 0, t = J.gui.timers.slidebar.$containerElement.length; e < t; e++) J.gui.timers.slidebar.containerElementWidth[e] = J.gui.timers.slidebar.$containerElement[e].width(), J.gui.timers.slidebar.elementWidth[e] = J.gui.timers.slidebar.$element[e].width()
            }
        }, J.transitions = {
            firstSlide: !0,
            timelines: {
                all: ["_slideTransition", "_slideTimeline", "_slideTimelineAlternate", "_forceLayersOut", "_forceLayersOutMirror", "_forceLayersOutPrevious", "_forceLayersOutMirrorPrevious"],
                slide: ["_slideTransition"],
                layers: ["_slideTimeline", "_slideTimelineAlternate"],
                allforce: ["_forceLayersOut", "_forceLayersOutMirror", "_forceLayersOutPrevious", "_forceLayersOutMirrorPrevious"],
                prevforce: ["_forceLayersOutPrevious", "_forceLayersOutMirrorPrevious"],
                currentforce: ["_forceLayersOut", "_forceLayersOutMirror"],
                mirrorforce: ["_forceLayersOutMirror", "_forceLayersOutMirrorPrevious"],
                set: function(e, t) {
                    for (var i in this[e]) J.transitions[this[e][i]] && t(J.transitions[this[e][i]], this[e][i])
                }
            },
            start: function() {
                return !!document.body.contains(I) && (J.slider.isPopup && J.slider.state.popupIsWaitingForDelay ? !(J.slider.state.waitingForPopupTimer = !0) : (J.device.scroll.directionAtSlideTransitionStart = J.device.scroll.direction, "always" == J.o.thumbnailNavigation && (J.gui.navigation.bottom.thumbnails.change(), "ontouchstart" in window || J.gui.navigation.bottom.thumbnails.scroll()), this.layers.out.forced(), void this.slide.init()))
            },
            slide: {
                $wrapper: ie(),
                init: function() {
                    var e, t, i;
                    J.functions.setStates(J.slider, {
                        animatingSlides: !0
                    }), J.transitions.layers.parallax.reset(), J.slider.$layersWrapper.children('.ls-parallax[data-ls-parallax="active"]').each(function() {
                        ie(this).find(".ls-layer").data(J.defaults.init.dataKey).settings.slideOut === J.slides.current.index && ie(this).attr("data-ls-parallax", "disbaled")
                    }), J.transitions.curSlide = J.slides.current, J.transitions.nextSlide = J.slides.next, J.transitions._slideTransition = new ee.TimelineMax({
                        paused: !0,
                        onComplete: function() {
                            J.transitions.slide.onComplete()
                        }
                    }), (J.transitions.nextSlide.data && J.transitions.nextSlide.data.transitionorigami || J.slider.isScrollScene) && (J.o.animateFirstSlide = !1), J.transitions.firstSlide && J.o.animateFirstSlide && (J.transitions.curSlide = ie.extend(!0, {}, J.transitions.nextSlide), delete J.transitions.curSlide.data.$background, J.transitions.curSlide.data.backgroundColor = "transparent"), J.transitions.firstSlide && !J.o.animateFirstSlide ? (void 0 !== J.transitions.nextSlide.data.$background && (e = (i = J.transitions.nextSlide.data.$background.data(J.defaults.init.dataKey)).kenBurns.zoom ? i.kenBurns.from.scale : 1, t = i.kenBurns.zoom ? i.kenBurns.from.rotation : 0, i = J.transitions.nextSlide.filter.from || "none", J.transitions._slideTransition.set(J.transitions.nextSlide.data.$background[0], {
                        "-webkit-filter": i,
                        filter: i
                    }, 0), J.transitions._slideTransition.fromTo(J.transitions.nextSlide.data.$background.closest(".ls-bg-wrap")[0], J.o.sliderFadeInDuration, {
                        autoCSS: !1,
                        css: {
                            scale: e,
                            rotation: t,
                            opacity: 0,
                            display: "block"
                        }
                    }, {
                        autoCSS: !1,
                        css: {
                            opacity: 1
                        }
                    }, 0)), this.start(!0)) : "undefined" == typeof layerSliderTransitions && "undefined" == typeof layerSliderCustomTransitions ? (this.start(!0), J.debugMode && J.debug.add("warn", "slideTransition.noSlideTransition", J.transitions.nextSlide.index)) : void 0 === J.transitions.curSlide.data.$background && void 0 === J.transitions.nextSlide.data.$background && "transparent" == J.transitions.curSlide.data.backgroundColor && "transparent" == J.transitions.nextSlide.data.backgroundColor ? this.start(!0) : ("x" === J.o.clipSlideTransition ? te.$overflowWrapper.addClass("ls-overflowx-hidden") : "y" === J.o.clipSlideTransition ? te.$overflowWrapper.addClass("ls-overflowy-hidden") : !0 === J.o.clipSlideTransition && te.$overflowWrapper.addClass("ls-overflow-hidden"), void 0 !== J.transitions.curSlide.data.$background && (e = J.transitions.curSlide.data.$background.closest(".ls-bg-wrap")[0]._gsTransform, (t = J.transitions.curSlide.data.$background.data(J.defaults.init.dataKey)).responsive.filter = J.transitions.curSlide.data.$background[0].style.filter, t.responsive.kbRotation = void 0 !== e ? " rotate(" + e.rotation + "deg)" : " rotate(0deg)", t.responsive.kbScale = void 0 !== e ? " scale(" + e.scaleX + ")" : " scale(1)"), J.transitions.slide.$wrapper = ie("<div>").addClass("ls-slide-transition-wrapper").css({
                        width: J.slider.width,
                        height: J.slider.height
                    }), this.select.slideTransitionType())
                },
                select: {
                    slideTransitionType: function() {
                        J.transitions.slide.normal.select.transitionType()
                    }
                },
                start: function(e) {
                    var t, i = !(!J.slides.current.index || !J.slides.current.data.$backgroundVideo.length),
                        s = !(!J.slides.next.index || !J.slides.next.data.$backgroundVideo.length);
                    !J.slideshow.firstStart && J.api.hasEvent("slideChangeDidStart") && J.api.triggerEvent("slideChangeDidStart", J.api.eventData()), e || (void 0 !== J.transitions.nextSlide.data.transitionDuration ? a = J.transitions.nextSlide.data.transitionDuration : void 0 !== J.o.slideTransitionDuration && ie.isNumeric(J.o.slideTransitionDuration) && -1 < J.o.slideTransitionDuration && (a = J.o.slideTransitionDuration / 1e3), ie.isNumeric(a) && (0 === a && (a += 1e-5), J.transitions._slideTransition.duration(a)), J.transitions.firstSlide && J.o.animateFirstSlide && J.o.firstSlideDuration && J.transitions._slideTransition.duration(J.o.firstSlideDuration / 1e3), J.debugMode && J.debug.options.transitionDuration && J.transitions._slideTransition.duration(J.debug.options.transitionDuration), .25 < J.transitions.layers.timeline.timeScaleModifier && (r = (r = J.transitions._slideTransition.duration() / (.75 + J.transitions.layers.timeline.timeScaleModifier)) < .5 ? .5 : r, J.transitions._slideTransition.duration(r)));
                    var e = J.transitions._slideTransition.duration() / J.transitions._slideTransition.timeScale(),
                        a = e,
                        r = J.transitions.nextSlide.data.timeShift || (void 0 !== J.o.slideTimeShift && ie.isNumeric(J.o.slideTimeShift) && J.o.slideTimeShift < 0 ? J.o.slideTimeShift / 1e3 : 0);
                    0 < r ? r = 0 : Math.abs(r) > e && (r = -e), J.transitions.firstSlide && J.o.animateFirstSlide && !1 !== J.o.firstSlideTimeShift && J.o.firstSlideTimeShift <= 0 && (r = J.o.firstSlideTimeShift / 1e3), J.transitions.nextSlide.data.calculatedTimeShift = r, r = J.transitions.firstSlide && !J.o.animateFirstSlide ? J.o.sliderFadeInDuration + .01 : (a + r) * J.transitions._slideTransition.timeScale(), (i || s) && J.transitions.media.changeBackgroundVideo(J.transitions.firstSlide, i && s), J.transitions._slideTransition.call(function() {
                        !J.slideshow.firstStart && J.api.hasEvent("slideChangeWillComplete") && J.api.triggerEvent("slideChangeWillComplete", J.api.eventData()), J.slideshow.should.change || J.transitions.layers.timeline.prepare(), J.media.functions.stop(!0), J.slides.set.slideIndexes(), J.o.hashChange && (document.location.hash = J.slides[J.slides.current.index].data.deeplink || "_no-deeplink-found_"), J.slideshow.start(), !J.transitions.firstSlide && J.slides.prev.index && J.slides.prev.data.$backgroundVideo.length && !J.slides.prev.data.$backgroundVideo.data(J.defaults.init.dataKey).mediaProperties.willBePaused && (J.slides.prev.data.$backgroundVideo.trigger("stopBackgroundVideo"), J.slides.prev.data.$backgroundVideo.data(J.defaults.init.dataKey).elements.$bgWrapper.css({
                            display: "none"
                        })), J.slideshow.should.change || J.slides.next.data.$backgroundVideo.length && J.slides.next.data.$backgroundVideo.data(J.defaults.init.dataKey).mediaProperties && !J.slides.next.data.$backgroundVideo.data(J.defaults.init.dataKey).mediaProperties.isPreloaded && (J.slides.next.data.$backgroundVideo.trigger("preloadBackgroundVideo"), J.slides.next.data.$backgroundVideo.data(J.defaults.init.dataKey).mediaProperties.isPreloaded = !0), J.transitions.firstSlide = !1
                    }, [], this, r), J.transitions._slideTransition.play(), J.slideshow.forceFastChange && J.transitions._slideTransition.progress(1), void 0 !== J.transitions.curSlide.data && void 0 !== J.transitions.curSlide.data.$background && (t = J.transitions.curSlide.data.$background.data(J.defaults.init.dataKey), J.timeouts.applyBG = setTimeout(function() {
                        delete J.timeouts.applyBG, J.transitions.curSlide.data.$background.closest(".ls-bg-wrap").hide(), t.kenBurns.zoom && ee.TweenMax.set(J.transitions.curSlide.data.$background[0], {
                            autoCSS: !1,
                            css: t.kenBurns.from
                        })
                    }, 5))
                },
                onComplete: function() {
                    var e;
                    void 0 !== J.transitions.nextSlide.data.$background && J.transitions.nextSlide.data.$background.closest(".ls-bg-wrap").show(), "transparent" !== J.transitions.nextSlide.data.backgroundColor ? J.slider.$slideBGColorWrapper.css("background-color", J.transitions.nextSlide.data.backgroundColor) : J.slider.$slideBGColorWrapper.css("background-color", "transparent"), J.o.leaveOverflow || te.$overflowWrapper.removeClass("ls-overflowx-hidden ls-overflowy-hidden ls-overflow-hidden"), this.$wrapper && (this.$wrapper.html("").remove(), this.$wrapper = !1), J.gui.navigation.bottom.bullets.set.active(), 0 < J.o.cycles && (J.slideshow.hasOwnProperty("cycleSlideIndex") ? J.slideshow.cycles.check(J.transitions.nextSlide.index) && (J.navigation.stop(), J.functions.setStates(J.slideshow, {
                        pausedByLastCycle: !0
                    }), J.o.forceCycles && (J.slideshow.curCycle = 1)) : J.slideshow.cycles.set()), J.functions.setStates(J.slider, {
                        animatingSlides: !1,
                        changingSlides: !1
                    }), !J.slideshow.firstStart && J.api.hasEvent("slideChangeDidComplete") && J.api.triggerEvent("slideChangeDidComplete", J.api.eventData()), J.slideshow.firstStart = !1, J.slideshow.forceFastChange = !1, J.slideshow.forceFastChangeCallback && (J.slideshow.forceFastChangeCallback(), J.slideshow.forceFastChangeCallback = !1), J.slideshow.should.change ? J.navigation.forceDirection ? (void 0 !== J.transitions.curSlide.data && void 0 !== J.transitions.curSlide.data.$background && (e = J.transitions.curSlide.data.$background.data(J.defaults.init.dataKey), J.transitions.curSlide.data.$background.closest(".ls-bg-wrap").hide(), e.kenBurns.zoom && ee.TweenMax.set(J.transitions.curSlide.data.$background[0], {
                        autoCSS: !1,
                        css: e.kenBurns.from
                    })), J.slideshow.changeTo(J.slideshow.get.slideInSequence(J.navigation.forceDirection), !0), J.navigation.forceDirection = !1) : J.slideshow.forceSlideChangeTo ? J.slideshow.changeTo(J.slideshow.forceSlideChangeTo, !0, !0) : J.preload.imagesOfSlide(J.slides.next.index) : J.preload.imagesOfSlide(J.slides.next.index)
                },
                normal: {
                    select: {
                        transitionType: function() {
                            var e, t, i;
                            J.o.slideTransition ? J.transitions.slide.normal.setTransition(J.o.slideTransition.type, J.o.slideTransition.obj) : (i = !!J.transitions.nextSlide.data.transition2d && J.transitions.nextSlide.data.transition2d.toString().split(","), J.device.touchPrev && J.o.slideOnSwipe ? (J.device.touchPrev = !1, this.transition("2d", "1")) : J.device.touchNext && J.o.slideOnSwipe ? (J.device.touchNext = !1, this.transition("2d", "1")) : J.slides.next.data.$background || i && (!i || -1 != i.indexOf("1") || -1 != i.indexOf("2") || -1 != i.indexOf("3") || -1 != i.indexOf("4")) ? J.browser.supports3D() && (J.transitions.nextSlide.data.transition3d || J.transitions.nextSlide.data.customtransition3d) ? J.transitions.nextSlide.data.transition3d && J.transitions.nextSlide.data.customtransition3d ? (e = Math.floor(2 * Math.random()), t = [
                                ["3d", J.transitions.nextSlide.data.transition3d],
                                ["custom3d", J.transitions.nextSlide.data.customtransition3d]
                            ], this.transition(t[e][0], t[e][1])) : J.transitions.nextSlide.data.transition3d ? this.transition("3d", J.transitions.nextSlide.data.transition3d) : this.transition("custom3d", J.transitions.nextSlide.data.customtransition3d) : J.transitions.nextSlide.data.transition2d && J.transitions.nextSlide.data.customtransition2d ? (e = Math.floor(2 * Math.random()), t = [
                                ["2d", J.transitions.nextSlide.data.transition2d],
                                ["custom2d", J.transitions.nextSlide.data.customtransition2d]
                            ], this.transition(t[e][0], t[e][1])) : J.transitions.nextSlide.data.transition2d ? this.transition("2d", J.transitions.nextSlide.data.transition2d) : J.transitions.nextSlide.data.customtransition2d ? this.transition("custom2d", J.transitions.nextSlide.data.customtransition2d) : this.transition("2d", "1") : this.transition("2d", "5"))
                        },
                        transition: function(e, t) {
                            J.debugMode && J.debug.add("group", "slideTransition.info"), t += "";
                            var i, s, a = -1 == e.indexOf("custom") ? J.t : J.ct,
                                r = "3d"; - 1 != e.indexOf("2d") && (r = "2d"), s = -1 != t.indexOf("last") ? a["t" + r].length - 1 : -1 != t.indexOf("all") ? Math.floor(Math.random() * J.functions.countProp(a["t" + r])) : (t = (i = t.split(",")).length, parseInt(i[Math.floor(Math.random() * t)]) - 1), void 0 === a["t" + r][s] && (J.debugMode && J.debug.add("warn", "slideTransition.customTransition", [r.toUpperCase() + (-1 === e.indexOf("custom") ? "" : " (CUSTOM)"), s + 1]), a = J.t, e = r = "2d", s = 0), J.debugMode && J.debug.add("log", "slideTransition.info", [r.toUpperCase() + (-1 === e.indexOf("custom") ? "" : " (CUSTOM)"), s + 1, a["t" + r][s].name]), J.transitions.slide.normal.setTransition(r, a["t" + r][s])
                        }
                    },
                    setTransition: function(e, t) {
                        t.name || (t = _lsConvTrProp(t));
                        var i, s, a, r, o, n = ie.extend(!0, {
                                cols: 1,
                                rows: 1
                            }, t),
                            l = typeof n.cols,
                            d = typeof n.rows,
                            c = [],
                            p = J.navigation.direction,
                            u = 0,
                            h = 0,
                            m = !!J.transitions.curSlide.data.$background && J.functions.getURL(J.transitions.curSlide.data.$background),
                            f = !!J.transitions.nextSlide.data.$background && J.functions.getURL(J.transitions.nextSlide.data.$background),
                            g = J.o.playByScroll && "up" === J.device.scroll.direction ? "to" : "from";
                        if (n.rc) {
                            switch (typeof n.rc) {
                                case "number":
                                    J.slider.width > J.slider.height ? (d = n.rc, l = Math.floor(J.slider.width / (J.slider.height / n.rc))) : (l = n.rc, d = Math.floor(J.slider.height / (J.slider.width / n.rc)));
                                    break;
                                case "string":
                                    a = parseInt(n.rc), l = Math.floor(J.slider.width / a), d = Math.floor(J.slider.height / a)
                            }
                            n.cols = l, n.rows = d
                        } else {
                            switch (l) {
                                case "number":
                                    l = n.cols;
                                    break;
                                case "string":
                                    l = Math.floor(Math.random() * (parseInt(n.cols.split(",")[1]) - parseInt(n.cols.split(",")[0]) + 1)) + parseInt(n.cols.split(",")[0]);
                                    break;
                                default:
                                    l = Math.floor(Math.random() * (n.cols[1] - n.cols[0] + 1)) + n.cols[0]
                            }
                            switch (d) {
                                case "number":
                                    d = n.rows;
                                    break;
                                case "string":
                                    d = Math.floor(Math.random() * (parseInt(n.rows.split(",")[1]) - parseInt(n.rows.split(",")[0]) + 1)) + parseInt(n.rows.split(",")[0]);
                                    break;
                                default:
                                    d = Math.floor(Math.random() * (n.rows[1] - n.rows[0] + 1)) + n.rows[0]
                            }
                            te.isMobile && J.o.optimizeForMobile && (15 <= l ? l = 7 : 5 <= l ? l = 4 : 4 <= l ? l = 3 : 2 < l && (l = 2), 15 <= d ? d = 7 : 5 <= d ? d = 4 : 4 <= d ? d = 3 : 2 < d && (d = 2), 2 < d && 2 < l && (d = 2, 4 < l && (l = 4)))
                        }
                        J.debugMode && !J.o.slideTransition && (J.debug.add("log", "slideTransition.properties", [
                            [l, d], l * d
                        ]), J.debug.groupEnd()), i = Math.floor(J.slider.width / l), s = Math.floor(J.slider.height / d), l = Math.floor(J.slider.width / i), d = Math.floor(J.slider.height / s), r = J.slider.width - i * l, o = J.slider.height - s * d, "prev" == p && (t = {
                            random: "random",
                            forward: "reverse",
                            reverse: "forward",
                            center: "center",
                            edge: "edge",
                            mirror: "mirror",
                            "radial-in": "radial-in",
                            "radial-out": "radial-out",
                            "col-forward": "col-reverse",
                            "col-reverse": "col-forward"
                        }, "2d" === e && n.transition && "scale" === n.transition.type && (t.forward = "forward", t.reverse = "reverse"), n.tile && n.tile.sequence && (n.tile.sequence = t[n.tile.sequence]), ie.each(["animation", "before", "after"], function(e, t) {
                            n[t] && n[t].transition && ((t = n[t].transition).rotateX && 44 < Math.abs(t.rotateX) && (t.rotateX *= -1), t.rotateY && 44 < Math.abs(t.rotateY) && (t.rotateY *= -1), t.rotate && (t.rotate *= -1))
                        }));
                        for (var y, v, w = 0; w < l * d; w++) c.push(w);
                        switch (n.tile.sequence) {
                            case "reverse":
                                c.reverse();
                                break;
                            case "col-forward":
                                c = J.functions.sortArray(d, l, "forward");
                                break;
                            case "col-reverse":
                                c = J.functions.sortArray(d, l, "reverse");
                                break;
                            case "random":
                                c = J.functions.shuffleArray(c);
                                break;
                            case "center":
                                c = J.functions.sortArray(d, l, "center");
                                break;
                            case "edge":
                            case "mirror":
                                c = J.functions.sortArray(d, l, "edge");
                                break;
                            case "radial-out":
                                c = J.functions.sortArray(d, l, "radial-out");
                                break;
                            case "radial-in":
                                c = J.functions.sortArray(d, l, "radial-in")
                        }("transparent" === J.transitions.nextSlide.data.backgroundColor || "3d" == e || void 0 !== J.transitions.curSlide.data.$background && void 0 !== J.transitions.nextSlide.data.$background) && J.slider.$slideBGColorWrapper.css("background-color", "transparent"), "2d" == e && (y = -1 != n.name.toLowerCase().indexOf("carousel"), v = -1 != n.name.toLowerCase().indexOf("crossfad"), this.$curTiles = ie("<div>").addClass("ls-curtiles").appendTo(J.transitions.slide.$wrapper), this.$nextTiles = ie("<div>").addClass("ls-nexttiles").appendTo(J.transitions.slide.$wrapper));
                        for (var b = 0; b < l * d; b++) {
                            var S, x = (b + 1) % l == 0 ? r : 0,
                                T = (d - 1) * l - 1 < b ? o : 0,
                                k = ie("<div>").addClass("ls-slide-transition-tile").css({
                                    width: i + x,
                                    height: s + T
                                }).data("style", {
                                    width: i + x,
                                    height: s + T
                                }).appendTo(J.transitions.slide.$wrapper),
                                u = (c[b], b % l == 0 ? u + 1 : u),
                                h = b % l == 0 ? 1 : h + 1;
                            if ("3d" == e) {
                                k.addClass("ls-3d-container");
                                var C, O, P = i + x,
                                    L = s + T,
                                    I = new ee.TimelineMax,
                                    $ = Math.abs(Math.abs(h - l / 2 - .5) - l / 2 - .5) * Math.abs(Math.abs(u - d / 2 - .5) - d / 2 - .5);
                                k.css({
                                    zIndex: $
                                }), C = P / 2, O = L / 2, T = ($ = "horizontal" == n.animation.direction ? 90 < Math.abs(n.animation.transition.rotateY) && "large" != n.tile.depth ? Math.floor(P / 7) + x : P : 90 < Math.abs(n.animation.transition.rotateX) && "large" != n.tile.depth ? Math.floor(L / 7) + T : L) / 2, this.createCuboids("ls-3d-box", k, 0, 0, 0, 0, -T, 0, 0, C + "px " + O + "px 0px"), this.createCuboids("ls-3d-front", k.find(".ls-3d-box"), P, L, 0, 0, T, 0, 0), "vertical" == n.animation.direction && 90 < Math.abs(n.animation.transition.rotateX) ? this.createCuboids("ls-3d-back", k.find(".ls-3d-box"), P, L, 0, 0, -T, 180, 0) : this.createCuboids("ls-3d-back", k.find(".ls-3d-box"), P, L, 0, 0, -T, 0, 180), this.createCuboids("ls-3d-left", k.find(".ls-3d-box"), $, L, -T, 0, 0, 0, -90), this.createCuboids("ls-3d-right", k.find(".ls-3d-box"), $, L, P - T, 0, 0, 0, 90), this.createCuboids("ls-3d-top", k.find(".ls-3d-box"), P, $, 0, -T, 0, 90, 0), this.createCuboids("ls-3d-bottom", k.find(".ls-3d-box"), P, $, 0, L - T, 0, -90, 0), P = k.find(".ls-3d-front"), $ = "horizontal" == n.animation.direction ? 90 < Math.abs(n.animation.transition.rotateY) ? k.find(".ls-3d-back") : 0 < n.animation.transition.rotateY ? k.find(".ls-3d-left") : k.find(".ls-3d-right") : 90 < Math.abs(n.animation.transition.rotateX) ? k.find(".ls-3d-back") : 0 < n.animation.transition.rotateX ? k.find(".ls-3d-bottom") : k.find(".ls-3d-top"), L = c[b] * n.tile.delay, T = J.transitions.slide.$wrapper.find(".ls-3d-container:eq( " + b + " ) .ls-3d-box"), n.before && n.before.transition ? (n.before.transition.delay = n.before.transition.delay ? (n.before.transition.delay + L) / 1e3 : L / 1e3, I.to(T[0], n.before.duration / 1e3, J.functions.convert.transition(n.before.transition, n.before.easing))) : n.animation.transition.delay = n.animation.transition.delay ? (n.animation.transition.delay + L) / 1e3 : L / 1e3, I.to(T[0], n.animation.duration / 1e3, J.functions.convert.transition(n.animation.transition, n.animation.easing)), n.after && (n.after.transition || (n.after.transition = {}), I.to(T[0], n.after.duration / 1e3, J.functions.convert.transition(n.after.transition, n.after.easing, "after"))), J.transitions._slideTransition.add(I, 0)
                            } else {
                                var B, M, W, _, A, F, z, D, V, R = "auto",
                                    E = "auto",
                                    N = "auto",
                                    Y = "auto",
                                    X = 1,
                                    H = 1,
                                    K = "50% 50%",
                                    U = "50% 50%",
                                    j = 0,
                                    G = 100,
                                    q = {},
                                    Q = n.transition.intensity || 2,
                                    Z = "random" == n.transition.direction ? (z = "scale" == n.transition.type ? ["top", "bottom", "middle", "right", "left", "center"] : ["top", "bottom", "right", "left"])[Math.floor(Math.random() * z.length)] : n.transition.direction;
                                switch (-1 != n.name.toLowerCase().indexOf("mirror") && b % 2 == 0 && (p = "prev" == p ? "next" : "prev"), "prev" == p && (Z = {
                                    top: "bottom",
                                    bottom: "top",
                                    middle: "middle",
                                    left: "right",
                                    right: "left",
                                    center: "center",
                                    topleft: "bottomright",
                                    topright: "bottomleft",
                                    bottomleft: "topright",
                                    bottomright: "topleft",
                                    none: "none"
                                }[Z]), Z) {
                                    case "top":
                                        R = N = -k.data("style").height, E = Y = 0;
                                        break;
                                    case "bottom":
                                        R = N = k.data("style").height, E = Y = 0;
                                        break;
                                    case "left":
                                        R = N = 0, E = Y = -k.data("style").width;
                                        break;
                                    case "right":
                                        R = N = 0, E = Y = k.data("style").width;
                                        break;
                                    case "topleft":
                                        R = k.data("style").height, N = 0, E = k.data("style").width, Y = 0;
                                        break;
                                    case "topright":
                                        R = k.data("style").height, N = 0, E = -k.data("style").width, Y = 0;
                                        break;
                                    case "bottomleft":
                                        R = -k.data("style").height, N = 0, E = k.data("style").width, Y = 0;
                                        break;
                                    case "bottomright":
                                        R = -k.data("style").height, N = 0, E = -k.data("style").width, Y = 0;
                                        break;
                                    case "none":
                                        Y = E = N = R = 0
                                }
                                switch (this.scale2D = void 0 !== n.transition.scale ? n.transition.scale : 1, 1 == y && 1 != this.scale2D && (R /= 2, N /= 2, E /= 2, Y /= 2), (n.transition.rotate || n.transition.rotateX || n.transition.rotateY || 1 != this.scale2D) && "slide" != n.transition.type ? k.css({
                                    overflow: "visible"
                                }) : k.css({
                                    overflow: "hidden"
                                }), 1 == y ? this.$curTiles.css({
                                    overflow: "visible"
                                }) : this.$curTiles.css({
                                    overflow: "hidden"
                                }), !0 === v || "slide" == n.transition.type || "scale" == n.transition.type || !0 === y || n.transition.hasOwnProperty("opacity") ? (D = k.appendTo(this.$curTiles), A = k.clone().appendTo(this.$nextTiles), P = ie("<div>").addClass("ls-curtile").appendTo(D)) : A = k.appendTo(this.$nextTiles), $ = ie("<div>").addClass("ls-nexttile").appendTo(A), F = c[b] * n.tile.delay / 1e3, I = n.transition.rotate || 0, z = n.transition.rotateX || 0, D = n.transition.rotateY || 0, "prev" == p && (I = -I, z = -z, D = -D), n.transition.type) {
                                    case "fade":
                                        X = R = N = E = Y = 0, H = 1;
                                        break;
                                    case "mixed":
                                        X = 0, (H = 1) == this.scale2D && (N = Y = 0), B = void 0 !== n.transition.scaleX ? n.transition.scaleX : 1, M = void 0 !== n.transition.scaleY ? n.transition.scaleY : 1;
                                        break;
                                    case "scale":
                                        switch (X = R = N = E = Y = 0, M = B = H = 1, Z) {
                                            case "left":
                                            case "right":
                                                B = 1 + c[b] / (50 / Q);
                                                break;
                                            case "top":
                                            case "bottom":
                                                M = 1 + c[b] / (50 / Q);
                                                break;
                                            case "center":
                                                B = 1 + c[b] / (50 / Q);
                                                break;
                                            case "middle":
                                                M = 1 + c[b] / (50 / Q)
                                        }
                                        switch ("mirror" === n.tile.sequence && l * d / 2 < b && (j = 100, G = 0), Z) {
                                            case "left":
                                                K = j + "% 50%", U = G + "% 0";
                                                break;
                                            case "right":
                                                K = G + "% 50%", U = j + "% 50%";
                                                break;
                                            case "center":
                                            case "middle":
                                                _ = W = 1;
                                                break;
                                            case "top":
                                                K = "50% " + j + "%", U = "50% " + G + "%";
                                                break;
                                            case "bottom":
                                                K = "50% " + G + "%", U = "50% " + j + "%"
                                        }
                                }
                                J.transitions._slideTransition.fromTo($[0], n.transition.duration / 1e3, {
                                    immediateRender: !1,
                                    autoCSS: !1,
                                    css: {
                                        x: -E,
                                        y: -R,
                                        display: "block",
                                        opacity: X,
                                        rotation: I,
                                        rotationX: z,
                                        rotationY: D,
                                        borderRadius: n.transition.borderRadius || 0,
                                        scaleX: void 0 !== B ? B : this.scale2D,
                                        scaleY: void 0 !== M ? M : this.scale2D,
                                        transformOrigin: K
                                    }
                                }, {
                                    autoCSS: !1,
                                    css: {
                                        x: 0,
                                        y: 0,
                                        opacity: H,
                                        rotation: 0,
                                        rotationX: 0,
                                        rotationY: 0,
                                        borderRadius: 0,
                                        scaleX: 1,
                                        scaleY: 1
                                    },
                                    ease: J.functions.convert.easing(n.transition.easing)
                                }, F), 1 == v && (void 0 === J.transitions.nextSlide.data.$background || void 0 !== J.transitions.nextSlide.data.$background && (-1 != J.transitions.nextSlide.data.$background.attr("src").toLowerCase().indexOf("png") || J.transitions.nextSlide.data.$background.width() < J.slider.width || J.transitions.nextSlide.data.$background.height() < J.slider.height)) && (q.opacity = 0), "slide" != n.transition.type && 1 != y || -1 != n.name.toLowerCase().indexOf("mirror") ? "scale" == n.transition.type && (q.scaleX = W || B, q.scaleY = _ || M, q.transformOrigin = U) : (V = 0 !== I ? -I : 0, q.x = Y, q.y = N, q.rotation = V, q.scale = this.scale2D, q.opacity = X), n.transition.hasOwnProperty("opacity") && (q.opacity = n.transition.opacity), void 0 !== P && J.transitions._slideTransition.to(P[0], n.transition.duration / 1e3, {
                                    autoCSS: !1,
                                    css: q,
                                    ease: J.functions.convert.easing(n.transition.easing)
                                }, F)
                            }
                            V = b % l * i, q = Math.floor(b / l) * s, void 0 !== J.transitions.curSlide.data.$background && (S = J.transitions.curSlide.data.$background.data(J.defaults.init.dataKey), "3d" === e || "2d" === e && (!0 === v || "slide" === n.transition.type || "scale" === n.transition.type || !0 === y || n.transition.hasOwnProperty("opacity")) ? P.append(ie('<div style="position: absolute;">').css({
                                width: J.slider.width,
                                height: J.slider.height,
                                left: -V,
                                top: -q,
                                transform: S.responsive.kbRotation + S.responsive.kbScale
                            }).append(ie("<img>").attr("src", m).css({
                                width: S.responsive.width,
                                height: S.responsive.height,
                                filter: S.responsive.filter,
                                transform: "translateX(" + S.responsive.x + "px) translateY(" + S.responsive.y + "px)"
                            }))) : 0 === this.$curTiles.children().length && this.$curTiles.append(ie('<div style="position: absolute;">').css({
                                width: J.slider.width,
                                height: J.slider.height,
                                left: -V,
                                top: -q,
                                transform: S.responsive.kbRotation + S.responsive.kbScale
                            }).append(ie("<img>").attr("src", m).css({
                                width: S.responsive.width,
                                height: S.responsive.height,
                                filter: S.responsive.filter,
                                transform: "translateX(" + S.responsive.x + "px) translateY(" + S.responsive.y + "px)"
                            })))), "transparent" === J.transitions.curSlide.data.backgroundColor || J.transitions.curSlide.data.$backgroundVideo.length || ("3d" === e || "2d" === e && (!0 === v || "slide" === n.transition.type || !0 === y) ? P : this.$curTiles).css("background-color", J.transitions.curSlide.data.backgroundColor), void 0 !== J.transitions.nextSlide.data.$background && (S = (F = J.transitions.nextSlide.data.$background.data(J.defaults.init.dataKey)).kenBurns[g], $.append(ie('<div style="position: absolute;">').css({
                                width: J.slider.width,
                                height: J.slider.height,
                                left: -V,
                                top: -q,
                                transform: "rotate(" + S.rotation + "deg) scale(" + S.scale + ")"
                            }).append(ie("<img>").attr("src", f).css({
                                width: F.responsive.width,
                                height: F.responsive.height,
                                filter: J.transitions.nextSlide.filter.from || "none",
                                transform: "translateX(" + F.responsive.x + "px) translateY(" + F.responsive.y + "px)"
                            })))), "transparent" === J.transitions.nextSlide.data.backgroundColor || J.transitions.nextSlide.data.$backgroundVideo.length || $.css("background-color", J.transitions.nextSlide.data.backgroundColor)
                        }
                        J.transitions.slide.$wrapper.prependTo(J.o.preferBlendMode ? J.slider.$layersWrapper : J.slider.$innerWrapper), J.transitions.slide.start()
                    },
                    createCuboids: function(e, t, i, s, a, r, o, n, l, d) {
                        o = "translate3d( " + a + "px, " + r + "px, " + o + "px)";
                        0 !== n && (o += "rotateX( " + n + "deg)"), 0 !== l && (o += "rotateY( " + l + "deg)");
                        o = {
                            width: i,
                            height: s,
                            transform: o,
                            "-ms-transform": o,
                            "-webkit-transform": o
                        };
                        d && (o["transform-origin"] = d, o["-ms-transform-origin"] = d, o["-webkit-transform-origin"] = d), ie("<div>").addClass(e).css(o).appendTo(t)
                    }
                }
            },
            layers: { in: {
                    onStart: function(e) {
                        e.data(J.defaults.init.dataKey).hover.enabled && J.transitions.layers.hover.enable(e), J.layers.set.dataAttribute("add", e, "animating-in")
                    },
                    onComplete: function(e) {
                        J.media.functions.playIfAllowed(e), J.layers.set.dataAttribute("remove", e, "animating-in"), J.layers.set.dataAttribute("add", e, "active")
                    }
                },
                out: {
                    forced: function() {
                        var a, r, o, n, e, t, i;
                        J.transitions._forceLayersOut && (J.transitions._slideTimeline && (a = new ee.TimelineMax({
                            paused: !0,
                            autoRemoveChildren: !0
                        }), n = [], e = J.layers.get("current, in, static, active").add(J.layers.get("current, out, static, active")), i = J.layers.get("current, out, notstatic, active"), t = J.layers.get("current, out, active"), i = ie().add(e).add(i), i.each(function() {
                            var e, t = ie(this).data(J.defaults.init.dataKey);
                            if (t.loop._timeline && (J.transitions._slideTimeline.remove(t.loop._timeline), t.loop._timeline.play()), t.is.static) {
                                r = [t.elements.$wrapper[0]], t.elements.$clipWrapper && (r = r.concat(t.elements.$clipWrapper[0])), t.textIn.nodes && (r = r.concat(t.textIn.nodes));
                                for (var i = 0; i < r.length; i++) n = n.concat(J.transitions._slideTimeline.getTweensOf(r[i], !0), J.transitions._slideTimelineAlternate.getTweensOf(r[i], !0));
                                for (var s = 0; s < n.length; s++) n[s].duration && 0 !== n[s].duration() && (o = n[s], e = o, a.add(e, 100 - e.duration() * e.progress()))
                            }
                        }), t.each(function() {
                            ie(this).data(J.defaults.init.dataKey).should.reset = !0
                        }), a.play().seek(100), J.transitions._slideTimeline.eventCallback("onStart", null), J.transitions._slideTimeline.eventCallback("onComplete", null), J.transitions._slideTimeline.eventCallback("onReverseComplete", null), J.transitions._slideTimeline.eventCallback("onUpdate", null), J.transitions._slideTimeline.stop().clear(), J.transitions._slideTimelineAlternate.stop().clear()), ("prev" === J.navigation.direction ? J.transitions._forceLayersOutMirror : J.transitions._forceLayersOut).play(), J.slideshow.forceFastChange && (J.transitions._forceLayersOut.progress(1), J.transitions._forceLayersOutMirror.progress(1))), J.slider.$layersWrapper.find(".ls-link").css({
                            display: "none"
                        })
                    },
                    onStart: function(e) {
                        J.layers.set.dataAttribute("add", e, "animating-out")
                    },
                    onComplete: function(e) {
                        var t = e.data(J.defaults.init.dataKey);
                        !J.slider.state.changingSlides && t.settings.slideOut === J.slides.current.index || J.transitions.layers.reset(e, t), t.hover.enabled && J.transitions.layers.hover.disable(e), J.layers.set.dataAttribute("remove", e, "animating-out"), J.layers.set.dataAttribute("add", e, "hidden")
                    }
                },
                reset: function(e, t) {
                    t.loop._timeline && (t.loop._timeline.stop().clear(), delete t.loop._timeline, ee.TweenMax.set(t.elements.$loopWrapper[0], t.reset.loopWrapperOnSlideChange)), ee.TweenMax.set(t.elements.$wrapper[0], t.reset.wrapperOnSlideChange), ee.TweenMax.set(e[0], {
                        "-webkit-filter": t.original.filter,
                        filter: t.original.filter
                    }), t.should.update && (t.textInNodesFrom.random = {}, t.textOutNodesTo.random = {}, J.layers.update.data(e)), t.should.reset = !1
                },
                timeline: {
                    shouldRestart: !1,
                    create: function(e) {
                        var t, i, s, a = e ? "current" : "next";
                        if (J.transitions.curNext = a, J.o.allowRestartOnResize || (J.transitions.layers.timeline.shouldRestart = !1), J.transitions.layers.timeline.resetStates(), J.transitions.timelines.set("layers", function(e, t) {
                                e.pause().progress(0).kill().clear(!0), e = null
                            }), J.transitions._slideTimeline = new ee.TimelineMax({
                                paused: !0,
                                onStart: function() {
                                    J.api.hasEvent("slideTimelineDidStart") && J.api.triggerEvent("slideTimelineDidStart", J.api.eventData())
                                },
                                onComplete: function() {
                                    J.o.playByScroll && J.o.playByScrollSkipSlideBreaks && ("next" === J.slideshow.direction ? J.transitions.layers.timeline.scrollForward(!0) : J.transitions.layers.timeline.scrollBackwards(!0, !0))
                                },
                                onReverseComplete: function() {
                                    J.api.hasEvent("slideTimelineDidReverseComplete") && J.api.triggerEvent("slideTimelineDidReverseComplete", J.api.eventData()), J.transitions.layers.timeline.shouldReplay && (J.transitions.layers.timeline.shouldRestart = !1, J.transitions._slideTimeline.play()), J.o.playByScroll && J.o.playByScrollSkipSlideBreaks && J.transitions.layers.timeline.scrollBackwards(!0, !1)
                                },
                                onUpdate: function(e) {
                                    J.api.hasEvent("slideTimelineDidUpdate") && J.api.triggerEvent("slideTimelineDidUpdate", e)
                                },
                                onUpdateParams: ["{self}"]
                            }), J.transitions._slideTimelineAlternate = new ee.TimelineMax({
                                paused: !0
                            }), this.totalDuration = 0, this.progress = 1, J.transitions.timelines.set("prevforce", function(e, t) {
                                e.progress(1).kill().clear(!0), e = null
                            }), J.transitions._forceLayersOut && (J.transitions._forceLayersOutPrevious = J.transitions._forceLayersOut), J.transitions._forceLayersOutMirror && (J.transitions._forceLayersOutMirrorPrevious = J.transitions._forceLayersOutMirror), J.transitions._forceLayersOut = new ee.TimelineMax({
                                paused: !0,
                                autoRemoveChildren: !0
                            }), J.transitions._forceLayersOutMirror = new ee.TimelineMax({
                                paused: !0,
                                autoRemoveChildren: !0
                            }), t = J.layers.get(a + ", in, notactive"), i = J.layers.get(a + ", out, notstatic").add(J.layers.get(a + ", out, active, static")), e = J.layers.get(a + ", in, bgonly, notactive"), s = ie().add(t).add(i).add(e), this.addLayers(t, "in", J.transitions._slideTimeline, J.transitions._forceLayersOut, J.transitions._slideTimelineAlternate, J.transitions._forceLayersOutMirror), this.addLayers(i, "out", J.transitions._slideTimeline, J.transitions._forceLayersOut, J.transitions._slideTimelineAlternate, J.transitions._forceLayersOutMirror), J.slides[a].data && -1 !== J.slides[a].data.duration && J.slides[a].data.duration < this.totalDuration ? (this.progress = J.slides[a].data.duration / this.totalDuration, J.debugMode && J.debug.add("warn", "slideTimeline.duration", [J.slides[a].data.duration, this.totalDuration])) : J.transitions._slideTimeline.duration() > this.totalDuration && (this.progress = this.totalDuration / J.transitions._slideTimeline.duration()), -1 === J.slides[a].data.duration ? (J.o.slideDuration && ie.isNumeric(J.o.slideDuration) && -1 < J.o.slideDuration ? this.totalDuration = J.o.slideDuration / 1e3 : 0 === this.totalDuration && (this.totalDuration = J.o.slideDurationWithoutLayers / 1e3), J.o.inLayerPreview && (J.o.hasInfiniteLoop && "loop-transition" === J.o.layerPreviewPresetType ? this.totalDuration += 5 : "ending-transition" === J.o.layerPreviewPresetType ? this.totalDuration += .25 : "hover-transition" !== J.o.layerPreviewPresetType && (this.totalDuration += .5)), J.slides[a].data.duration = this.totalDuration, J.slides[J.slides[a].index].data.duration = this.totalDuration) : this.totalDuration = J.slides[a].data.duration, !J.functions.getData("slideDuration", this.totalDuration)) return !1;
                        J.slider.isScrollScene && (J.o.sceneDuration || (J.o.sceneDuration = this.totalDuration, J.resize.scene()), J.slider.$spacingWrapper.attr("data-scene-duration", J.o.sceneDuration)), this.addLayers(e, "in", J.transitions._slideTimeline, J.transitions._forceLayersOut, J.transitions._slideTimelineAlternate), !0 === J.transitions.layers.timeline.shouldRestart && J.debugMode && J.debug.add("warn", "slideTimeline.restart", J.o.allowRestartOnResize ? "enabled" : "disabled");
                        for (var r, o = 0; o < s.length; o++) ie(s[o]).data(J.defaults.init.dataKey).parallax.enabled && ie(s[o]).data(J.defaults.init.dataKey).elements.$parallaxWrapper.attr("data-ls-parallax", "active");
                        J.transitions.layers.parallax.trigger(), J.transitions.layers.scroll.reset(), J.transitions.layers.scroll.trigger(), J.api.hasEvent("slideTimelineDidCreate") && J.api.triggerEvent("slideTimelineDidCreate", {
                            slideTimeline: J.transitions._slideTimeline,
                            layersOnSlideTimeline: s,
                            slideTimelineDuration: this.totalDuration
                        }), J.transitions.timers.create(), J.transitions.timers.bar._transition && J.transitions._slideTimeline.add(J.transitions.timers.bar._transition.play(), 0), J.transitions.timers.circle._transition && J.transitions._slideTimeline.add(J.transitions.timers.circle._transition.play(), 0), J.transitions.timers.slidebar._transition && J.transitions._slideTimeline.add(J.transitions.timers.slidebar._transition.play(), 0), J.transitions._slideTimeline.call(function() {
                            if (!J.transitions._slideTimeline.reversed()) {
                                var e;
                                if (J.api.hasEvent("slideTimelineDidComplete"))
                                    if (J.o.inLayerPreview && J.o.hasInfiniteLoop && J.layers.get("current, in").each(function() {
                                            (e = ie(this).data(J.defaults.init.dataKey)).loop && e.loop._timeline && e.loop._timeline.stop().progress(0)
                                        }), !1 === J.api.triggerEvent("slideTimelineDidComplete", J.api.eventData())) return;
                                J.functions.setStates(J.transitions.layers.timeline, {
                                    finished: !0
                                }), !J.slideshow.isPaused() && J.slideshow.state.running ? J.slideshow.changeTo(J.slides.next.index) : J.slideshow.state.pausedByLastCycle && J.transitions.timers.reverse()
                            }
                        }, [], this, J.slides[a].data.duration), J.slides.next.data.$link && J.slides.next.data.$link.css({
                            display: "block"
                        }), (!J.o.startInViewport || "inside" !== J.slider.position.toViewport && !J.o.playByScrollStart && J.slider.state.waitForGettingInViewport) && J.o.startInViewport || !(J.slider.isPopup && J.slider.state.popupIsVisible && J.slider.state.popupShouldStart) && J.slider.isPopup || (J.o.pauseLayers && J.slideshow.isPaused() && J.transitions._slideTimeline.timeScale(0), J.slider.isScrollScene || J.transitions.layers.timeline.play(), J.o.playByScroll && "up" === J.device.scroll.directionAtSlideTransitionStart && J.transitions._slideTimeline.progress(1)), J.transitions._slideTimelineAlternate.play(), J.slider.isScrollScene && J.slider.set.offset(), $.trigger("mouseleave.globalhover" + B), $.off("mouseenter.globalhover" + B + " mouseleave.globalhover" + B + " mousemove.globalhover" + B), J.slides[a].data.globalhover && (r = J.layers.get(a + ",in,notactive").add(J.layers.get("static,active")), $.on("mouseenter.globalhover" + B, function() {
                            r.each(function() {
                                J.transitions.layers.hover.mouseEnter(ie(this), ie(this).data(J.defaults.init.dataKey))
                            })
                        }), $.on("mouseleave.globalhover" + B, function() {
                            r.each(function() {
                                J.transitions.layers.hover.mouseLeave(ie(this), ie(this).data(J.defaults.init.dataKey))
                            })
                        }), $.on("mousemove.globalhover" + B, function() {
                            r.each(function() {
                                J.transitions.layers.hover.mouseMove(ie(this), ie(this).data(J.defaults.init.dataKey))
                            })
                        }))
                    },
                    prepare: function() {
                        J.slides.next.data.overflow && "hidden" !== J.slides.next.data.overflow ? (J.slider.$layersWrapper.addClass("ls-visible"), J.slider.$slideBGWrapper.addClass("ls-visible")) : (J.slider.$layersWrapper.removeClass("ls-visible"), J.slider.$slideBGWrapper.removeClass("ls-visible")), this.create()
                    },
                    getTiming: function(e, t, i, s) {
                        if ("number" == typeof t) return t;
                        t = t.toLowerCase();
                        var a, r, o, n, l, d = J.defaults.layer.timelineHierarchy,
                            c = 0;
                        if (-1 !== t.indexOf("*") && (l = "*"), -1 !== t.indexOf("/") && (l = "/"), -1 !== t.indexOf("+") && (l = "+"), -1 !== t.indexOf("-") && (l = "-"), l)
                            if (n = t.split(l), a = ie.trim(n[0]), o = parseInt(ie.trim(n[1])), d[a] && -1 !== d[i][1].indexOf(d[a][0])) {
                                if (!e.timeline[a] && 1 < d[a][0]) {
                                    var p, u, h = d[a][0] - 1 || 1;
                                    for (u in d) d[u][0] === h && (p = u);
                                    a = p
                                }
                                if (r = "number" == typeof e.timeline[a] ? e.timeline[a] : e.timeline[a](e), s) c = o / 1e3;
                                else switch (l) {
                                    case "*":
                                        c = r * o;
                                        break;
                                    case "/":
                                        c = r / o;
                                        break;
                                    case "+":
                                        c = r + o / 1e3;
                                        break;
                                    case "-":
                                        c = r - o / 1e3
                                }
                            } else J.debugMode && (d[a] || J.debug.add("warn", "layerTransition.timing1", a), -1 === d[i][1].indexOf(d[a][0]) && J.debug.add("warn", "layerTransition.timing3", [a, d[a], i, d[i]])), "+" !== l && !s || (c = o / 1e3);
                        else d[a = ie.trim(t)] && -1 !== d[i][1].indexOf(d[a][0]) ? c = s ? 0 : "number" == typeof e.timeline[a] ? e.timeline[a] : e.timeline[a](e) : J.debugMode && (d[a] ? -1 === d[i][1].indexOf(d[a][0]) && J.debug.add("warn", "layerTransition.timing3", [a, d[a], i, d[i]]) : J.debug.add("warn", "layerTransition.timing1", a));
                        return (c != c || c < 0) && (J.debugMode && J.debug.add("warn", "layerTransition.timing2", [i, a, c]), c = 0), c
                    },
                    addLayers: function(e, t, i, s, a, r) {
                        for (var o = 0, n = e.length; o < n; o++) {
                            var l, d, c, p, u = e[o],
                                h = ie(u),
                                m = h.data(J.defaults.init.dataKey),
                                f = m.elements.$wrapper,
                                g = m.elements.$clipWrapper,
                                y = m.elements.$loopWrapper,
                                v = m.elements.$parallaxWrapper,
                                w = (m.elements.$scrollWrapper, m.elements.$scrollTransformWrapper, m.settings.skipViewport && J.slideshow.state.changed < 1 ? a : i),
                                b = "loop" == m.settings.skipViewport && J.slideshow.state.changed < 1 ? a : i,
                                S = ie.extend(!0, {}, m.inLayerFrom),
                                x = S.css,
                                T = ie.extend({}, m.inLayerShouldBeConverted),
                                k = ie.extend(!0, {}, m.outLayerTo),
                                C = k.css,
                                O = ie.extend({}, m.outLayerShouldBeConverted),
                                P = ie.extend(!0, {}, m.textInNodesFrom),
                                L = ie.extend(!0, {}, m.textInShouldBeConverted),
                                I = ie.extend(!0, {}, m.textOutNodesTo),
                                $ = ie.extend(!0, {}, m.textOutShouldBeConverted);
                            if (m.should.reset && J.transitions.layers.reset(h, m), h.hasClass("ls-bg")) m.kenBurns.zoom && i.fromTo(h.closest(".ls-bg-wrap"), J.transitions.nextSlide.data.duration + J.transitions.nextSlide.data.calculatedTimeShift, {
                                autoCSS: !1,
                                css: m.kenBurns.from
                            }, {
                                autoCSS: !1,
                                css: m.kenBurns.to,
                                ease: ee.Quad.easeInOut
                            }, -J.transitions.nextSlide.data.calculatedTimeShift), ie.isEmptyObject(m.filter.values.bgFrom) && ie.isEmptyObject(m.filter.values.bgTo) || (m.filter.transitions.bg || (m.filter.transitions.bg = J.transitions.layers.filters.createTransition(m, "bg", m.filter.values.bgFrom, m.filter.values.bgTo)), w.to([{
                                p: 0
                            }, u], J.transitions.nextSlide.data.duration, {
                                p: 1,
                                autoCSS: !1,
                                ease: ee.Sine.easeInOut,
                                onUpdate: J.transitions.layers.filters.animate,
                                onUpdateParams: ["{self}", m.filter.transitions.bg]
                            }, 0));
                            else switch (t) {
                                case "in":
                                    if (m.in.enabled ? (m.settings.timelineIsCalculated || ("number" != typeof m.in.startAt && (m.in.startAt = 0), m.timeline.transitioninstart = m.in.startAt, m.timeline.transitioninend = m.timeline.transitioninstart + m.in.duration), J.resize.performTransformOperations(m.inLayerToCSS, x), m.in.mirror && "prev" === J.navigation.direction && J.resize.mirrorTransitionProperties({
                                            transitionProperties: x,
                                            transitionPropertiesShouldBeConverted: T,
                                            transitionType: "normal",
                                            mirrorProperties: m.in.mirror
                                        }), J.resize.transformProperties(h, m, x, T), J.resize.styleProperties(m, m.inLayerStyleFromCSS, m.inLayerStyleShouldBeConvertedFrom), J.resize.styleProperties(m, m.inLayerStyleToCSS, m.inLayerStyleShouldBeConvertedTo), x.transformPerspective = m.transformPerspective.layer * m.settings.calculatedratio, m.clip.enabled && (m.original.clip || (m.original.clip = m.clip.min, m.original.clipShouldBeConverted = !0), m.inClipShouldBeConverted.clip ? (m.inClipFromCSS.clip = J.resize.clip(h, m, m.inClipShouldBeConverted.clip, !0), m.inClipToCSS.clip = J.resize.clip(h, m, m.original.clip, m.original.clipShouldBeConverted), w.fromTo(g[0], m.in.duration, m.inClipFrom, m.inClipTo, m.timeline.transitioninstart)) : ee.TweenMax.set(g[0], {
                                            clip: J.resize.clip(h, m, m.original.clip, m.original.clipShouldBeConverted)
                                        }), J.transitions.layers.timeline.shouldRestart = !0), ie.isEmptyObject(m.filter.values.in) ? ie.isEmptyObject(m.filter.values.out) || h.css("filter", m.original.filter) : (m.filter.transitions.in || (m.filter.transitions.in = J.transitions.layers.filters.createTransition(m, "in", m.filter.values.in, m.filter.values.style)), w.to([{
                                            p: 0
                                        }, u], m.in.duration, {
                                            p: 1,
                                            autoCSS: !1,
                                            ease: m.inLayerTo.ease,
                                            onUpdate: J.transitions.layers.filters.animate,
                                            onUpdateParams: ["{self}", m.filter.transitions.in]
                                        }, m.timeline.transitioninstart)), m.is.smartBG && -1 !== m.styleSettings.smartbg.indexOf("in") && (m.inLayerStyleFrom.css["--x"] = parseInt(m.responsive["--x"]) - x.x + "px", m.inLayerStyleTo.css["--x"] = parseInt(m.responsive["--x"]) + "px", m.inLayerStyleFrom.css["--y"] = parseInt(m.responsive["--y"]) - x.y + "px", m.inLayerStyleTo.css["--y"] = parseInt(m.responsive["--y"]) + "px"), 0 === m.timeline.transitioninstart && 0 === m.in.duration ? (m.inLayerTo.css.transformOrigin = S.css.transformOrigin, m.inLayerTo.css.transformPerspective = S.css.transformPerspective, w.set(f[0], m.inLayerTo, m.timeline.transitioninstart), w.set(u, m.inLayerStyleTo, m.timeline.transitioninstart)) : (w.fromTo(f[0], m.in.duration, S, m.inLayerTo, m.timeline.transitioninstart), w.fromTo(u, m.in.duration, m.inLayerStyleFrom, m.inLayerStyleTo, m.timeline.transitioninstart))) : (m.timeline.transitioninstart = 0, m.timeline.transitioninend = 0), m.is.textLayer && ((m.textIn.type || m.textOut.type) && J.transitions.layers.splitType.resetNodes(h, m), m.textIn.enabled && (B = !(!m.textIn.mirror || "prev" !== J.navigation.direction), m.in.enabled || w.to(f[0], 0, ie.extend(!0, {}, m.inLayerTo, m.init.wrapper), m.timeline.textinstart), d = J.transitions.layers.splitType.setNodesSequence(m.textIn.type.split("_"), m.textIn.ns), m.textIn.nodes = B ? d[1] : d[0], B && J.resize.mirrorTransitionProperties({
                                            transitionProperties: P,
                                            transitionPropertiesShouldBeConverted: L,
                                            transitionType: "text",
                                            mirrorProperties: m.textIn.mirror
                                        }), J.resize.transformProperties(h, m, P, L, !1, m.textIn.nodes), P.transformPerspective = m.transformPerspective.text * m.settings.calculatedratio, ie.isEmptyObject(L.random) || J.transitions.layers.splitType.setRandomProperties(m, L.random, P, "In"), ie.isEmptyObject(P.random) || J.transitions.layers.splitType.setRandomProperties(m, P.random, P, "In"), delete P.random, m.settings.timelineIsCalculated || (m.timeline.textinstart = this.getTiming(m, m.textIn.startAt, "textinstart"), m.timeline.textinend = m.timeline.textinstart + (m.textIn.nodes.length - 1) * m.textIn.shiftNodes + m.textIn.duration), P.color ? m.textInNodesToCSS.color = m.original.color : m.textOutNodesTo.color && (P.color = m.original.color), w.set(u, m.textIn.layerStyle, m.timeline.textinstart), window.getSelection && J.browser.isSafari && w.addCallback(function(e) {
                                            window.getSelection().setBaseAndExtent(e, 0, e, 1e3), window.getSelection().removeAllRanges()
                                        }, m.timeline.textinstart + .001, [u]), w.staggerFromTo(m.textIn.nodes, m.textIn.duration, P, m.textInNodesTo, m.textIn.shiftNodes, m.timeline.textinstart, function(e) {
                                            J.transitions.layers.in.onComplete(e)
                                        }, [h]))), m.is.keyframe && J.o.playByScroll && i.addPause(m.timeline.allinend(), function() {
                                            setTimeout(function() {
                                                delete J.timeouts.scroll, J.transitions.layers.timeline.timeScaleModifier = 0, J.device.scroll.timeout = 250
                                            }, 500)
                                        }), m.parallax.enabled && "auto" == m.parallax.event) {
                                        J.transitions.layers.parallax.auto();
                                        var B = new ee.TimelineMax({
                                                paused: !0
                                            }),
                                            M = {
                                                repeat: -1 == m.parallax.count ? -1 : m.parallax.count - 1,
                                                ease: ee.Linear.easeNone
                                            };
                                        switch (m.settings.timelineIsCalculated && !m.is.static || (m.timeline.autoparallaxstart = this.getTiming(m, m.parallax.startAt, "autoparallaxstart"), m.timeline.autoparallaxend = -1 !== m.parallax.count && m.timeline.autoparallaxstart + m.parallax.duration * m.parallax.count), m.parallax._timeline = B, m.parallax.dummy = {
                                            x: 0,
                                            y: -10
                                        }, m.parallax.path) {
                                            default:
                                                case "circle":
                                                M.bezier = {
                                                curviness: 1.5,
                                                values: [{
                                                    x: 10,
                                                    y: 0
                                                }, {
                                                    x: 0,
                                                    y: 10
                                                }, {
                                                    x: -10,
                                                    y: 0
                                                }, {
                                                    x: 0,
                                                    y: -10
                                                }]
                                            };
                                            break;
                                            case "oval-h":
                                                    M.bezier = {
                                                    type: "thru",
                                                    curviness: 1,
                                                    values: [{
                                                        x: 20,
                                                        y: 0
                                                    }, {
                                                        x: 0,
                                                        y: 10
                                                    }, {
                                                        x: -20,
                                                        y: 0
                                                    }, {
                                                        x: 0,
                                                        y: -10
                                                    }]
                                                };
                                                break;
                                            case "oval-v":
                                                    m.parallax.dummy = {
                                                    x: 0,
                                                    y: -20
                                                },
                                                M.bezier = {
                                                    type: "thru",
                                                    curviness: 1,
                                                    values: [{
                                                        x: 10,
                                                        y: 0
                                                    }, {
                                                        x: 0,
                                                        y: 20
                                                    }, {
                                                        x: -10,
                                                        y: 0
                                                    }, {
                                                        x: 0,
                                                        y: -20
                                                    }]
                                                };
                                                break;
                                            case "infinity":
                                                    m.parallax.dummy = {
                                                    x: 0,
                                                    y: 0
                                                },
                                                M.bezier = {
                                                    type: "thru",
                                                    curviness: 1,
                                                    values: [{
                                                        x: 20,
                                                        y: -10
                                                    }, {
                                                        x: 40,
                                                        y: 0
                                                    }, {
                                                        x: 20,
                                                        y: 10
                                                    }, {
                                                        x: 0,
                                                        y: 0
                                                    }, {
                                                        x: -20,
                                                        y: -10
                                                    }, {
                                                        x: -40,
                                                        y: 0
                                                    }, {
                                                        x: -20,
                                                        y: 10
                                                    }, {
                                                        x: 0,
                                                        y: 0
                                                    }]
                                                };
                                                break;
                                            case "linear-h":
                                                    m.parallax.dummy = {
                                                    x: -10,
                                                    y: 0
                                                },
                                                M.x = 10,
                                                M.ease = ee.Quad.easeInOut,
                                                M.yoyo = !0,
                                                M.repeat = -1 == m.parallax.count ? -1 : 2 * m.parallax.count - 1;
                                                break;
                                            case "linear-v":
                                                    m.parallax.dummy = {
                                                    x: 0,
                                                    y: -10
                                                },
                                                M.y = 10,
                                                M.ease = ee.Quad.easeInOut,
                                                M.yoyo = !0,
                                                M.repeat = -1 == m.parallax.count ? -1 : 2 * m.parallax.count - 1
                                        }
                                        M.onUpdate = function(e, t, i, s, a, r, o) {
                                            ee.TweenMax.set(i, {
                                                x: -t.x * (s / 50) * parseInt(a),
                                                y: -t.y * (s / 50) * parseInt(a),
                                                rotationX: "3d" == r ? t.y / (100 / o) : 0,
                                                rotationY: "3d" == r ? -t.x / (100 / o) : 0
                                            })
                                        }, M.onUpdateParams = ["{self}", m.parallax.dummy, v[0], m.parallax.distance, m.parallax.level, m.parallax.type, m.parallax.rotation], B.to(m.parallax.dummy, -1 == m.parallax.path.indexOf("linear") ? m.parallax.duration : m.parallax.duration / 2, M), i.addCallback(function(e) {
                                            e.play()
                                        }, m.timeline.autoparallaxstart, [B])
                                    }
                                    m.loop.enabled && (c = new ee.TimelineMax({
                                        repeat: m.loop.repeat,
                                        repeatDelay: m.loop.repeatDelay,
                                        yoyo: m.loop.yoyo,
                                        paused: !0
                                    }), m.settings.timelineIsCalculated && !m.is.static || (m.timeline.loopstart = this.getTiming(m, m.loop.startAt, "loopstart"), m.timeline.loopend = -1 !== m.loop.count && m.timeline.loopstart + (m.loop.repeat + 1) * m.loop.duration + m.loop.repeat * m.loop.repeatDelay), m.loop._timeline = c, J.resize.transformProperties(h, m, m.loopToCSS, {
                                        x: m.loopLayerShouldBeConverted.x,
                                        y: m.loopLayerShouldBeConverted.y
                                    }), (m.loopToCSS.x && 0 !== m.loopToCSS.x || m.loopToCSS.y && 0 !== m.loopToCSS.y) && (J.transitions.layers.timeline.shouldRestart = !0), m.loopFromCSS.transformOrigin = J.functions.convert.transformOrigin(m.loopLayerShouldBeConverted.transformOrigin, h, m, h.data(J.defaults.init.dataKey).elements.$outerStyleWrapper), m.loopFromCSS.transformPerspective = m.transformPerspective.loop * m.settings.calculatedratio, ie.isEmptyObject(m.filter.values.loop) || (m.filter.transitions.loop || (m.filter.transitions.loop = J.transitions.layers.filters.createTransition(m, "loop", ie.isEmptyObject(m.filter.values.afterIn) ? m.filter.values.style : m.filter.values.afterIn, m.filter.values.loop)), c.to([{
                                        p: 0
                                    }, u], m.loop.duration, {
                                        p: 1,
                                        autoCSS: !1,
                                        ease: m.loopTo.ease,
                                        onUpdate: J.transitions.layers.filters.animate,
                                        onUpdateParams: ["{self}", m.filter.transitions.loop]
                                    }, 0)), c.fromTo(y[0], m.loop.duration, m.loopFrom, m.loopTo, 0), m.is.smartBG && -1 !== m.styleSettings.smartbg.indexOf("loop") && c.fromTo(u, m.loop.duration, {
                                        "--lx": "0px",
                                        "--ly": "0px"
                                    }, {
                                        ease: m.loopTo.ease,
                                        "--lx": -m.loopTo.css.x + "px",
                                        "--ly": -m.loopTo.css.y + "px"
                                    }, 0), m.loopClipShouldBeConverted.clip && (m.loopClipToCSS.clip = J.resize.clip(h, m, m.loopClipShouldBeConverted.clip, !0), c.to(g[0], m.loop.duration, m.loopClipTo, 0), J.transitions.layers.timeline.shouldRestart = !0), -1 !== m.loop.repeat && ("looplayers" === J.o.pauseOnHover || J.gui.timers.slidebar.$element || J.o.playByScroll) ? (b.add(c, m.timeline.loopstart), c.play()) : b.addCallback(function(e) {
                                        e.play()
                                    }, m.timeline.loopstart, [c])), m.is.static && (m.timeline.staticfrom = m.timeline.transitioninend, m.timeline.staticto = "100%", m.settings.timelineIsCalculated || (l = Math.max(m.timeline.allinandloopend(), 0), this.totalDuration = Math.max(this.totalDuration, l)));
                                    break;
                                case "out":
                                    m.is.textLayer && m.textOut.enabled && (c = J.transitions.layers.splitType.setNodesSequence(m.textOut.type.split("_"), m.textOut.ns), m.textOut.nodes = c[0], J.resize.transformProperties(h, m, m.textOutNodesTo, m.textOutShouldBeConverted, m.textOutNodesFrom, m.textOut.nodes), m.textOut.mirror ? (m.textOut.nodesMirror = c[1], J.resize.mirrorTransitionProperties({
                                        transitionProperties: I,
                                        transitionPropertiesShouldBeConverted: $,
                                        transitionType: "text",
                                        mirrorProperties: m.textOut.mirror
                                    }), J.resize.transformProperties(h, m, I, $, m.textOutNodesFrom, m.textOut.nodes)) : m.textOut.nodesMirror = c[0], m.textOutNodesFrom.transformPerspective = m.transformPerspective.text * m.settings.calculatedratio, ie.isEmptyObject(m.textOutShouldBeConverted.random) || J.transitions.layers.splitType.setRandomProperties(m, m.textOutShouldBeConverted.random, m.textOutNodesTo, "Out"), ie.isEmptyObject(m.textOutNodesTo.random) || J.transitions.layers.splitType.setRandomProperties(m, m.textOutNodesTo.random, m.textOutNodesTo, "Out"), delete m.textOutNodesTo.random, m.textOut.mirror && (ie.isEmptyObject($.random) || J.transitions.layers.splitType.setRandomProperties(m, $.random, I, "Out"), ie.isEmptyObject(I.random) || J.transitions.layers.splitType.setRandomProperties(m, I.random, I, "Out"), delete I.random), m.settings.timelineIsCalculated || (m.timeline.textoutstart = this.getTiming(m, m.textOut.startAt, "textoutstart"), m.timeline.textoutend = m.timeline.textoutstart + (m.textOut.nodes.length - 1) * m.textOut.shiftNodes + m.textOut.duration), m.clip.enabled && (void 0 === m.outClipShouldBeConverted.clip && i.to(g[0], 0, {
                                        immediateRender: !1,
                                        css: {
                                            clip: J.resize.clip(h, m, m.clip.max)
                                        }
                                    }, m.timeline.textoutstart), J.transitions.layers.timeline.shouldRestart = !0), m.textOutNodesTo.color && (m.textOutNodesFrom.color = m.original.color), -1 !== m.textOut.startAt.indexOf("slidechangeonly") && (!m.is.static || m.is.static && m.settings.slideOut === J.slides.next.index) ? (s.set(u, m.textOut.layerStyle, 0), r.set(u, m.textOut.layerStyle, 0), (p = new ee.TimelineMax).staggerFromTo(m.textOut.nodes, m.textOut.duration, m.textOutNodesFrom, m.textOutNodesTo, m.textOut.shiftNodes, 0), p.timeScale(p.duration() / J.o.forceLayersOutDuration), s.add(p, 0), s.to(f[0], 0, m.reset.wrapperOnTimelineEnd, J.o.forceLayersOutDuration), (p = new ee.TimelineMax).staggerFromTo(m.textOut.nodesMirror, m.textOut.duration, m.textOutNodesFrom, I, m.textOut.shiftNodes, 0), p.timeScale(p.duration() / J.o.forceLayersOutDuration), r.add(p, 0)) : (i.set(u, m.textOut.layerStyle, m.timeline.textoutstart), i.staggerFromTo(m.textOut.nodes, m.textOut.duration, m.textOutNodesFrom, m.textOutNodesTo, m.textOut.shiftNodes, m.timeline.textoutstart), s.to(f[0], J.o.forceLayersOutDuration, {
                                        opacity: 0
                                    }, 0), r.to(f[0], J.o.forceLayersOutDuration, {
                                        opacity: 0
                                    }, 0), s.to(f[0], 0, m.reset.wrapperOnTimelineEnd, J.o.forceLayersOutDuration)), r.to(f[0], 0, m.reset.wrapperOnTimelineEnd, J.o.forceLayersOutDuration)), m.out.enabled && (J.resize.performTransformOperations(m.inLayerToCSS, m.outLayerToCSS), J.resize.transformProperties(h, m, m.outLayerToCSS, m.outLayerShouldBeConverted, m.outLayerFromCSS), J.resize.styleProperties(m, m.outLayerStyleFromCSS, m.outLayerStyleShouldBeConvertedFrom), J.resize.styleProperties(m, m.outLayerStyleToCSS, m.outLayerStyleShouldBeConvertedTo), m.outLayerFromCSS.transformPerspective = m.transformPerspective.layer * m.settings.calculatedratio, m.out.mirror && (J.resize.performTransformOperations(m.inLayerToCSS, C), J.resize.mirrorTransitionProperties({
                                        transitionProperties: C,
                                        transitionPropertiesShouldBeConverted: O,
                                        transitionType: "normal",
                                        mirrorProperties: m.out.mirror
                                    }), J.resize.transformProperties(h, m, C, O, m.outLayerFromCSS)), m.is.smartBG && -1 !== m.styleSettings.smartbg.indexOf("out") && (m.outLayerStyleFrom.css["--x"] = parseInt(m.responsive["--x"]) + "px", m.outLayerStyleTo.css["--x"] = parseInt(m.responsive["--x"]) - m.outLayerToCSS.x + "px", m.outLayerStyleFrom.css["--y"] = parseInt(m.responsive["--y"]) + "px", m.outLayerStyleTo.css["--y"] = parseInt(m.responsive["--y"]) - m.outLayerToCSS.y + "px"), ie.isEmptyObject(m.filter.values.out) || m.filter.transitions.out || (m.filter.transitions.out = J.transitions.layers.filters.createTransition(m, "out", ie.isEmptyObject(m.filter.values.afterLoop) ? ie.isEmptyObject(m.filter.values.afterIn) ? m.filter.values.style : m.filter.values.afterIn : m.filter.values.afterLoop, m.filter.values.out)), "slidechangeonly" !== m.out.startAt ? (m.settings.timelineIsCalculated && !m.is.static || (m.is.static ? (m.timeline.staticfrom = 0, m.timeline.transitionoutstart = this.getTiming(m, m.out.startAt, "transitionoutstart", !0), m.timeline.staticto = m.timeline.transitionoutstart) : m.timeline.transitionoutstart = Math.max(this.getTiming(m, m.out.startAt, "transitionoutstart"), m.timeline.transitioninend), m.timeline.transitionoutend = m.timeline.transitionoutstart + m.out.duration), m.clip.enabled && (void 0 === m.outClipShouldBeConverted.clip ? i.to(g[0], 0, {
                                        immediateRender: !1,
                                        css: {
                                            clip: J.resize.clip(h, m, m.clip.max)
                                        }
                                    }, m.timeline.transitionoutstart) : (m.outClipToCSS.clip = J.resize.clip(h, m, m.outClipShouldBeConverted.clip, !0), i.to(g[0], m.out.duration, m.outClipTo, m.timeline.transitionoutstart)), J.transitions.layers.timeline.shouldRestart = !0), ie.isEmptyObject(m.filter.values.out) || i.to([{
                                        p: 0
                                    }, u], m.out.duration, {
                                        p: 1,
                                        autoCSS: !1,
                                        ease: m.outLayerTo.ease,
                                        onUpdate: J.transitions.layers.filters.animate,
                                        onUpdateParams: ["{self}", m.filter.transitions.out]
                                    }, m.timeline.transitionoutstart), m.outLayerStyleTo.onComplete = function(e, t) {
                                        t.is.mediaLayer && t.mediaProperties.$media[0].hasAttribute("data-ls-playing") && J.media.functions.stopSingleMedia(e, t)
                                    }, m.outLayerStyleTo.onCompleteParams = [h, m], i.fromTo(f[0], m.out.duration, m.outLayerFrom, m.outLayerTo, m.timeline.transitionoutstart), i.fromTo(u, m.out.duration, m.outLayerStyleFrom, m.outLayerStyleTo, m.timeline.transitionoutstart), i.fromTo(f[0], 0, m.init.wrapper, m.reset.wrapperOnTimelineEnd, m.timeline.transitionoutend)) : (m.timeline.staticfrom = 0, m.timeline.staticto = "100%"), p = Math.min(J.o.forceLayersOutDuration, m.out.duration), (!m.is.static || m.is.static && m.settings.slideOut === J.slides.next.index) && (s.fromTo(f[0], p, m.outLayerFrom, m.outLayerTo, 0), s.fromTo(u, p, m.outLayerStyleFrom, m.outLayerStyleTo, 0), r.fromTo(f[0], p, m.outLayerFrom, m.out.mirror ? k : m.outLayerTo, 0), r.fromTo(u, p, m.outLayerStyleFrom, m.outLayerStyleTo, 0), m.clip.enabled && void 0 !== m.outClipShouldBeConverted.clip && (m.outClipToCSS.clip = J.resize.clip(h, m, m.outClipShouldBeConverted.clip, !0), s.to(g[0], p, m.outClipTo, 0), r.to(g[0], p, m.outClipTo, 0)), ie.isEmptyObject(m.filter.values.out) || (s.to([{
                                        p: 0
                                    }, u], m.out.duration, {
                                        p: 1,
                                        autoCSS: !1,
                                        ease: m.outLayerTo.ease,
                                        onUpdate: J.transitions.layers.filters.animate,
                                        onUpdateParams: ["{self}", m.filter.transitions.out]
                                    }, 0), r.to([{
                                        p: 0
                                    }, u], m.out.duration, {
                                        p: 1,
                                        autoCSS: !1,
                                        ease: m.outLayerTo.ease,
                                        onUpdate: J.transitions.layers.filters.animate,
                                        onUpdateParams: ["{self}", m.filter.transitions.out]
                                    }, 0)))), l = Math.max(m.timeline.alloutandloopend(), 0), this.totalDuration = Math.max(this.totalDuration, l), m.settings.timelineIsCalculated = !0
                            }
                        }
                    },
                    play: function() {
                        J.transitions._slideTimeline && (J.transitions._slideTimeline.play(), J.functions.setStates(this, {
                            started: !0,
                            running: !0,
                            stopped: !1,
                            paused: !1
                        }))
                    },
                    pause: function(e) {
                        e = ie.isNumeric(e) ? e : .75;
                        J.transitions._slideTimeline && (ee.TweenMax.to(J.transitions._slideTimeline, e, {
                            timeScale: 0
                        }), J.functions.setStates(this, {
                            paused: !0,
                            stopped: !1
                        }))
                    },
                    resume: function() {
                        J.transitions._slideTimeline && (ee.TweenMax.to(J.transitions._slideTimeline, .75, {
                            timeScale: 1
                        }), J.functions.setStates(this, {
                            paused: !1,
                            stopped: !1
                        }))
                    },
                    reverse: function() {
                        J.transitions._slideTimeline && J.transitions._slideTimeline.reverse()
                    },
                    scrollForward: function(e) {
                        e || (this.play(), this.modifyTimeScale()), J.transitions._slideTimeline && (J.slider.isBusy() || 0 !== J.transitions._slideTimeline.totalDuration() && 1 !== J.transitions._slideTimeline.progress() || "down" !== J.device.scroll.direction || (J.slideshow.direction = "next", (e = J.slideshow.sequence.normalized).indexOf(J.slides.current.index) === e.length - 1 ? (J.slider.positionToViewport = "under", J.device.scroll.enable(), J.slideshow.direction = "prev") : J.navigation.next()))
                    },
                    scrollBackwards: function(e, t) {
                        e && !t || (this.reverse(), this.modifyTimeScale()), J.transitions._slideTimeline && (J.slider.isBusy() || 0 !== J.transitions._slideTimeline.totalDuration() && 0 !== J.transitions._slideTimeline.progress() || "up" !== J.device.scroll.direction || (J.slideshow.direction = "prev", 0 === J.slideshow.sequence.normalized.indexOf(J.slides.current.index) ? (J.slider.positionToViewport = "over", J.device.scroll.enable(), J.slideshow.direction = "next") : J.navigation.prev()))
                    },
                    modifyTimeScale: function() {
                        J.transitions._slideTimeline && ee.TweenMax.to(J.transitions._slideTimeline, .25, {
                            timeScale: 1 + this.timeScaleModifier
                        })
                    },
                    resetStates: function() {
                        this.state = {
                            started: !1,
                            running: !1,
                            paused: !1,
                            stopped: !1,
                            finished: !1
                        }
                    }
                },
                hover: {
                    enable: function(e) {
                        e.attr("data-ls-canhover", "1")
                    },
                    disable: function(e) {
                        e.attr("data-ls-canhover", "0")
                    },
                    set: function(e, t) {
                        t.elements.$wrapper.on("mouseenter." + B, function() {
                            J.transitions.layers.hover.mouseEnter(e, t)
                        }), t.elements.$wrapper.on("mouseleave." + B, function() {
                            J.transitions.layers.hover.mouseLeave(e, t)
                        }), t.elements.$wrapper.on("mousemove." + B, function() {
                            J.transitions.layers.hover.mouseMove(e, t)
                        })
                    },
                    createTimeline: function(e, t) {
                        var i, s, a;
                        t.hover._timeline = new ee.TimelineMax({
                            paused: !0,
                            onReverseComplete: function(e, t) {
                                t.hover._timeline._reversed && (t.hover._timeline.stop().clear(), delete t.hover._timeline)
                            },
                            onReverseCompleteParams: [e, t]
                        }), J.resize.transformProperties(e, t, t.hoverToCSS, t.hoverShouldBeConverted, t.hoverFromCSS), J.resize.styleProperties(t, t.hoverToCSS, t.hoverShouldBeConverted), t.hoverFromCSS.transformPerspective = t.transformPerspective.hover * t.settings.calculatedratio, t.hover._tween = ee.TweenMax.fromTo(e[0], t.hover.durationIn, t.hoverFrom, t.hoverTo), t.hover._timeline.add(t.hover._tween, 0), e.next().is(".ls-layer-link") ? (i = e.next(), s = ie.extend(!0, {}, t.hoverFrom, {
                            css: {
                                opacity: 1,
                                color: "transparent",
                                background: "transparent",
                                z: 0
                            }
                        }), a = ie.extend(!0, {}, t.hoverTo, {
                            css: {
                                opacity: 1,
                                color: "transparent",
                                background: "transparent",
                                z: 0
                            }
                        }), t.hover._linkTween = ee.TweenMax.fromTo(i[0], t.hover.durationIn, s, a), t.hover._timeline.add(t.hover._linkTween, 0)) : t.hover._linkTween = null, t.hover.alwaysOnTop && (a = {
                            zIndex: 9999
                        }, J.browser.isSafari && (a.transform = "translateZ(999999px)"), t.hover._timeline.to(t.elements.$outerWrapper[0], t.hover.durationIn, {
                            autoCSS: !1,
                            css: a
                        }, 0)), t.hover.reverseTimeScale = t.hover.durationIn / t.hover.durationOut == 1 ? 1 : t.hover.durationIn / t.hover.durationOut, this.hoverIn(e, t)
                    },
                    mouseEnter: function(e, t) {
                        "1" === e.attr("data-ls-canhover") && (e.attr("data-ls-hovered", 1), t.elements.$wrapper.off("mousemove." + B), t.hover._timeline ? (t.hover._timeline.play().stop().progress(0), this.hoverIn(e, t)) : this.createTimeline(e, t))
                    },
                    mouseLeave: function(e, t) {
                        t.hover._timeline && (t.hover._timeline.stop().progress(1), this.hoverOut(e, t)), e.removeAttr("data-ls-hovered")
                    },
                    mouseMove: function(e, t) {
                        e.attr("data-ls-hovered") || this.mouseEnter(e, t)
                    },
                    hoverIn: function(e, t) {
                        t.hover._tween.updateTo({
                            ease: t.hover.easeIn
                        }), t.hover._linkTween && t.hover._linkTween.updateTo({
                            ease: t.hover.easeIn
                        }), t.hover._timeline.play().timeScale(1)
                    },
                    hoverOut: function(e, t) {
                        t.hover._tween.updateTo({
                            ease: t.hover.easeOut
                        }), t.hover._linkTween && t.hover._linkTween.updateTo({
                            ease: t.hover.easeOut
                        }), t.hover._timeline.reverse().timeScale(t.hover.reverseTimeScale)
                    }
                },
                parallax: {
                    defaultProperties: {
                        type: "2d",
                        event: "cursor",
                        path: "circle",
                        direction: "clockwise",
                        duration: 5,
                        count: -1,
                        startAt: "slidestart",
                        x: !0,
                        y: !0,
                        rotation: 10,
                        distance: 10,
                        durationMove: 1.5,
                        durationLeave: 1.2,
                        transformOrigin: "slidercenter slidermiddle 0",
                        transformPerspective: 500
                    },
                    defaults: {
                        scrollModifier: 5,
                        centerLayers: "center",
                        centerDegree: 40,
                        sensitive: 10
                    },
                    state: {
                        enabled: !1,
                        ready: !1
                    },
                    wrappers: {
                        cursor: {
                            $2d: ie(),
                            $3d: ie()
                        },
                        scroll: {
                            $2d: ie(),
                            $3d: ie()
                        },
                        auto: {
                            $2d: ie(),
                            $3d: ie()
                        }
                    },
                    init: function() {
                        var t = this;
                        $.on("mouseenter." + B, function() {
                            (t.wrappers.cursor.$2d.length || t.wrappers.cursor.$3d.length) && t.calculateTransformProperties()
                        }), $.on("mousemove." + B, function(e) {
                            (t.wrappers.cursor.$2d.length || t.wrappers.cursor.$3d.length) && t.mouseMove(e)
                        }), $.on("mouseleave." + B, function() {
                            (t.wrappers.cursor.$2d.length || t.wrappers.cursor.$3d.length) && t.reset()
                        }), M.on("scroll.parallax" + B + " touchmove.parallax" + B, function() {
                            (t.wrappers.scroll.$2d.length || t.wrappers.scroll.$3d.length) && (t.state.paused || t.scroll())
                        }), M.on("resize.parallax" + B, function() {
                            (t.wrappers.auto.$2d.length || t.wrappers.auto.$3d.length || t.wrappers.scroll.$2d.length || t.wrappers.scroll.$3d.length || t.wrappers.cursor.$2d.length || t.wrappers.cursor.$3d.length) && t.calculateTransformProperties()
                        }), t.defaults.scrollModifier *= J.o.parallaxScrollReverse ? -1 : 1
                    },
                    addLayer: function(e, t, i, s) {
                        switch (this.state.enabled || (J.functions.setStates(this, {
                            enabled: !0
                        }), this.init()), ie.extend(!0, t, this.defaultProperties, J.slides[s].parallax, i.parallax), i.transformPerspective.parallax ? t.transformPerspective = i.transformPerspective.parallax : i.transformPerspective.parallax = t.transformPerspective, t.event.match(/(cursor|scroll|auto)/) || (t.event = "cursor"), t.path.match(/(circle|oval-h|oval-v|infinity|linear-h|linear-v)/) || (t.path = "circle"), t.direction.match(/(clockwise|counterclockwise)/) || (t.direction = "clockwise"), t.type.match(/(2d,3d)/) && (t.type = "2d"), (i.parallax = t).axis) {
                            case "none":
                                t.x = !1, t.y = !1;
                                break;
                            case "x":
                                t.y = !1;
                                break;
                            case "y":
                                t.x = !1
                        }
                        this.wrappers[t.event]["$" + t.type] = this.wrappers[t.event]["$" + t.type].add(e)
                    },
                    addShadow: function() {
                        var e, t, i, s = J.gui.shadow.$element,
                            a = (J.slides.current && J.slides.current.parallax ? J.slides.current : J.slides.next).index;
                        J.slides[a].data.$background && J.slides[a].data.$background.data(J.defaults.init.dataKey).parallax.enabled && J.slides[a].data.overflow && "hidden" !== J.slides[a].data.overflow && (e = "50% -" + .25 * J.slider.height + "px 0", i = void 0 !== (t = J.slides[a].data.$background.data(J.defaults.init.dataKey).parallax).rotation ? 2 * t.rotation : void 0 !== J.slides[a].parallax.rotation ? 2 * J.slides[a].parallax.rotation : 2 * this.defaultProperties.rotation, s.data(J.defaults.init.dataKey, {
                            parallax: ie.extend(!0, {}, this.defaultProperties, J.slides[a].parallax, {
                                level: t.level,
                                transformOrigin: e,
                                rotation: i
                            })
                        }), s.attr("data-ls-parallax", "active"), ee.TweenMax.set(s[0], {
                            transformOrigin: e,
                            transformPerspective: s.data(J.defaults.init.dataKey).parallax.transformPerspective * J.resize.ratio
                        }), "3d" === J.slides[a].parallax.type || "3d" === t.type ? this.wrappers.cursor.$3d = this.wrappers.cursor.$3d.add(s) : this.wrappers.cursor.$2d = this.wrappers.cursor.$2d.add(s)), this.shadowIsChecked = !0
                    },
                    removeShadow: function() {
                        var e = J.gui.shadow.$element;
                        this.wrappers.cursor.$2d = this.wrappers.cursor.$2d.not(e), this.wrappers.cursor.$3d = this.wrappers.cursor.$3d.not(e), e.attr("data-ls-parallax", "disabled"), this.shadowIsChecked = !1
                    },
                    calculateTransformProperties: function() {
                        ie().add(this.wrappers.cursor.$2d).add(this.wrappers.cursor.$3d).add(this.wrappers.scroll.$2d).add(this.wrappers.scroll.$3d).add(this.wrappers.auto.$2d).add(this.wrappers.auto.$3d).each(function() {
                            var e = ie(this),
                                t = e.data(J.defaults.init.dataKey).parallax,
                                i = e.find(".ls-layer"),
                                s = i.data(J.defaults.init.dataKey);
                            ee.TweenMax.set(ie(this)[0], {
                                transformOrigin: J.functions.convert.transformOrigin(t.transformOrigin, i.data(J.defaults.init.dataKey).elements.$wrapper, s, e),
                                transformPerspective: t.transformPerspective * s.settings.calculatedratio
                            })
                        }), this.transformPropertiesCalculated = !0
                    },
                    trigger: function() {
                        M.trigger("scroll.parallax" + B), M.trigger("touchmove.parallax" + B)
                    },
                    auto: function() {
                        this.transformPropertiesCalculated || this.calculateTransformProperties()
                    },
                    scroll: function() {
                        var e = (("top" === this.defaults.centerLayers ? te.scroll.top : te.scroll.top + (te.viewport.height - J.slider.height) / 2) - J.slider.offset.top) * J.resize.ratio * this.defaults.scrollModifier;
                        J.slider.state.inFullscreen && (e = 0), this.transformPropertiesCalculated || this.calculateTransformProperties(), this.animate2D(0, e, "scroll"), this.animate3D(0, e, "scroll")
                    },
                    mouseMove: function(e) {
                        var t, i;
                        this.transformPropertiesCalculated ? (J.slider.state.animatingSlides || this.shadowIsChecked || !J.gui.shadow.$element || this.addShadow(), t = J.slider.offset.left + J.slider.width / 2, i = J.slider.offset.top + J.slider.height / 2, t = e.pageX - t, i = e.pageY - i, this.animate2D(t, i, "cursor"), this.animate3D(t, i, "cursor")) : this.calculateTransformProperties()
                    },
                    animate2D: function(a, r, e) {
                        this.wrappers[e].$2d.each(function() {
                            var e, t, i, s = ie(this);
                            "active" === s.attr("data-ls-parallax") && (t = (e = s.data(J.defaults.init.dataKey).parallax).x ? -a * (e.distance / 2e3) * parseInt(e.level) : 0, i = e.y ? -r * (e.distance / 2e3) * parseInt(e.level) : 0, ee.TweenMax.to(s[0], e.durationMove, {
                                x: t,
                                y: i
                            }))
                        })
                    },
                    animate3D: function(o, n, e) {
                        this.wrappers[e].$3d.each(function() {
                            var e, t, i, s, a, r = ie(this);
                            "active" === r.attr("data-ls-parallax") && (s = (e = r.data(J.defaults.init.dataKey).parallax).x ? (i = -o / (4e3 / e.rotation), -o * (e.distance / 2e3) * parseInt(e.level)) : i = 0, a = e.y ? (t = n / (4e3 / e.rotation), -n * (e.distance / 2e3) * parseInt(e.level)) : t = 0, ee.TweenMax.to(r[0], e.durationMove, {
                                rotationX: t,
                                rotationY: i,
                                x: s,
                                y: a
                            }))
                        })
                    },
                    reset: function() {
                        ie().add(this.wrappers.cursor.$2d).add(this.wrappers.cursor.$3d).each(function() {
                            var e = ie(this);
                            e.find(".ls-layer[data-ls-hidden]").length && ee.TweenMax.set(e[0], {
                                x: 0,
                                y: 0,
                                rotationX: 0,
                                rotationY: 0
                            })
                        }), J.gui.shadow.$element && this.removeShadow(), this.transformPropertiesCalculated = !1
                    }
                },
                scroll: {
                    defaultProperties: {
                        shouldBeConverted: {
                            transformOrigin: "50% 50% 0"
                        },
                        transformPerspective: 500,
                        duration: .5,
                        ease: "easeOutQuart"
                    },
                    defaults: {
                        centerLayers: "center"
                    },
                    state: {
                        enabled: !1
                    },
                    $wrappers: ie(),
                    init: function() {
                        var e = this;
                        M.on("scroll.scroll" + B + " touchmove.scroll" + B, function() {
                            e.$wrappers.length && e.scroll()
                        }), M.on("resize.scroll" + B, function() {
                            e.$wrappers.length && e.calculateTransformProperties()
                        })
                    },
                    addLayer: function(e, t, i, s) {
                        this.state.enabled || (J.functions.setStates(this, {
                            enabled: !0
                        }), this.init()), ie.extend(!0, t, this.defaultProperties, i.scroll), i.transformPerspective.scroll ? t.transformPerspective = i.transformPerspective.scroll : i.transformPerspective.scroll = t.transformPerspective, i.settings.skipViewport && (t.skipViewport = !0), t.shouldBeConverted.transformOriginAlt || (t.shouldBeConverted.transformOriginAlt = t.shouldBeConverted.transformOrigin), t.ease = J.functions.convert.easing(t.ease), t.easeRev = J.functions.convert.easing(t.easeRev || t.ease), t.durationRev = t.durationRev || t.duration, i.scroll = t, this.$wrappers = this.$wrappers.add(e)
                    },
                    getCenter: function(e, t) {
                        var i = "project";
                        switch (((J.slider.isScrollScene || J.slider.isSticky) && "scene" === t || "document" === t) && (i = t), e) {
                            case "top":
                                switch (i) {
                                    case "scene":
                                        e = J.slider.wrapperPosition.top - (te.viewport.height - J.slider.height) / 2;
                                        break;
                                    case "document":
                                    default:
                                        e = te.scroll.top
                                }
                                break;
                            case "center":
                                switch (i) {
                                    case "scene":
                                        e = J.slider.wrapperPosition.middleForScrollTransition;
                                        break;
                                    case "document":
                                        e = te.scroll.top;
                                        break;
                                    default:
                                        e = te.scroll.top + (te.viewport.height - J.slider.height) / 2
                                }
                                break;
                            case "bottom":
                                switch (i) {
                                    case "scene":
                                        e = J.slider.wrapperPosition.top + J.slider.wrapperOffset.height - te.viewport.height + (te.viewport.height - J.slider.height) / 2;
                                        break;
                                    case "document":
                                        e = te.scroll.top;
                                        break;
                                    default:
                                        e = te.scroll.top + te.viewport.height - J.slider.height
                                }
                        }
                        return e
                    },
                    setCenter: function(e, t) {
                        return "project" !== e.getPosition || e.center && this.defaults.centerLayers !== e.center ? this.getCenter(e.center || this.defaults.centerLayers, e.getPosition) : t
                    },
                    setY: function(e, t) {
                        return (J.slider.isScrollScene || J.slider.isSticky) && "scene" === e.getPosition ? -t : "document" === e.getPosition ? t : J.slider.state.inFullscreen ? 0 : t - J.slider.offset.top
                    },
                    scroll: function(o) {
                        var n = this,
                            l = this.getCenter(this.defaults.centerLayers);
                        this.transformPropertiesCalculated || this.calculateTransformProperties(), this.$wrappers.each(function() {
                            var e, t, i, s = ie(this),
                                a = s.find(".ls-scroll-transform"),
                                r = s.data(J.defaults.init.dataKey).scroll;
                            (-1 !== J.slider.position.toViewportYForSkipViewportLayers.indexOf("inside") && r.skipViewport || !n.state.paused) && (i = n.setCenter(r, l), t = {
                                overwrite: "all",
                                c: e = n.setY(r, i),
                                ease: "down" === te.scroll.direction ? r.ease : r.easeRev,
                                onUpdate: function(e, t) {
                                    e = e.target.style.c <= 0 ? "+" : "-";
                                    r.layerPositionToCenter !== e && n.setTransformProperties(ie(t), r, e), r.layerPositionToCenter = e
                                },
                                onUpdateParams: ["{self}", this, r]
                            }, i = {
                                overwrite: "all",
                                ease: "down" === te.scroll.direction ? r.ease : r.easeRev
                            }, r.x && (i.x = n.calculateTransformations(-e * r.x / 20, "x", r, -e)), r.y && (i.y = n.calculateTransformations(-e * r.y / 20, "y", r, -e)), r.rotation && (i.rotation = n.calculateTransformations(e * r.rotation / 40, "rotation", r, -e)), r.rotationX && (i.rotationX = n.calculateTransformations(e * r.rotationX / 40, "rotationX", r, -e)), r.rotationY && (i.rotationY = n.calculateTransformations(e * r.rotationY / 40, "rotationY", r, -e)), r.skewX && (i.skewX = n.calculateTransformations(-e * r.skewX / 40, "skewX", r, -e)), r.skewY && (i.skewY = n.calculateTransformations(-e * r.skewY / 40, "skewY", r, -e)), r.scaleX && (i.scaleX = n.calculateTransformations(1 - e * r.scaleX / -4e3, "scaleX", r, e)), r.scaleY && (i.scaleY = n.calculateTransformations(1 - e * r.scaleY / -4e3, "scaleY", r, e)), r.opacity && (i.opacity = n.calculateTransformations(1 - e * (r.opacityyoyo ? Math.abs(r.opacity) : r.opacity) / 1e3, "opacity", r, e)), e = "down" === te.scroll.direction ? r.duration : r.durationRev, o || 0 == e ? (ee.TweenMax.set(s[0], t), ee.TweenMax.set(a[0], i)) : (ee.TweenMax.to(s[0], e, t), ee.TweenMax.to(a[0], e, i)))
                        })
                    },
                    calculateTransformations: function(e, t, i, s) {
                        if (i[t + "yoyo"]) switch (t) {
                            case "scaleX":
                            case "scaleY":
                                s < 0 && (e = 1 - (e - 1));
                                break;
                            case "opacity":
                                s < 1 && (e = 1 - (e - 1));
                                break;
                            default:
                                s < 1 && (e = -e)
                        }
                        return "opacity" == t && i.opacityinvert && (e = 1 - e), void 0 !== i[t + "min"] && e < i[t + "min"] && (e = i[t + "min"]), void 0 !== i[t + "max"] && e > i[t + "max"] && (e = i[t + "max"]), ("x" === t && i.xresponsive || "y" === t && i.yresponsive) && (e *= J.resize.ratio), e
                    },
                    calculateTransformProperties: function() {
                        var s = this;
                        this.$wrappers.each(function() {
                            var e = ie(this),
                                t = e.data(J.defaults.init.dataKey).scroll,
                                i = (e.find(".ls-layer").data(J.defaults.init.dataKey), s.setCenter(t, s.getCenter(s.defaults.centerLayers))),
                                i = s.setY(t, i) <= 0 ? "+" : "-";
                            s.setTransformProperties(e, t, i)
                        }), this.transformPropertiesCalculated = !0
                    },
                    setTransformProperties: function(e, t, i) {
                        var s = e.find(".ls-layer"),
                            a = s.data(J.defaults.init.dataKey);
                        ee.TweenMax.set(e.find(".ls-scroll-transform")[0], {
                            transformOrigin: J.functions.convert.transformOrigin("+" === i ? t.shouldBeConverted.transformOrigin : t.shouldBeConverted.transformOriginAlt, e, a, s),
                            transformPerspective: t.transformPerspective * a.settings.calculatedratio
                        })
                    },
                    trigger: function() {
                        this.scroll(!0)
                    },
                    reset: function() {
                        this.transformPropertiesCalculated = !1
                    }
                },
                filters: {
                    createTransition: function(e, t, i, s) {
                        var a, r = new J.defaults.layer.properties.filter,
                            o = {};
                        for (a in r) switch (t) {
                            case "in":
                                o[a] = [r[a], r[a]], o[a][0] = (i.hasOwnProperty(a) ? i : s.hasOwnProperty(a) ? s : r)[a], o[a][1] = (s.hasOwnProperty(a) ? s : r)[a], e.filter.values.afterIn[a] = o[a][1];
                                break;
                            case "hover":
                            case "loop":
                            case "out":
                                o[a] = [], o[a][0] = (i.hasOwnProperty(a) ? i : r)[a], o[a][1] = (s.hasOwnProperty(a) ? s : i.hasOwnProperty(a) && i[a] !== r[a] ? i : r)[a], "loop" === t && !0 !== e.loop.yoyo && -1 !== e.loop.count && (e.filter.values.afterLoop[a] = o[a][1]);
                                break;
                            case "bg":
                                o[a] = [r[a], r[a]], i.hasOwnProperty(a) && (o[a][0] = i[a]), s.hasOwnProperty(a) && (o[a][1] = s[a])
                        }
                        return o
                    },
                    convert: function(e) {
                        for (var t, i, s = {}, a = /(blur|brightness|contrast|grayscale|hue-rotate|invert|saturate|sepia)/i, r = 0, o = (e = e.split(" ")).length; r < o; r++)(t = (i = e[r].split("("))[0]).match(a) && (i = parseInt(i[1]), s[t] = i);
                        return s
                    },
                    animate: function(e, t) {
                        var i = 100 * e.target[0].p;
                        if ("object" == typeof t) {
                            var s, a = "";
                            for (s in t)
                                if ("object" == typeof t[s] && 2 === t[s].length) switch (s) {
                                    case "blur":
                                        a += " blur( " + (t[s][0] < t[s][1] ? t[s][0] + Math.abs(t[s][0] - t[s][1]) / 100 * i : t[s][0] - Math.abs(t[s][0] - t[s][1]) / 100 * i) + "px )";
                                        break;
                                    case "hue-rotate":
                                        a += " hue-rotate( " + (t[s][0] < t[s][1] ? t[s][0] + Math.abs(t[s][0] - t[s][1]) / 100 * i : t[s][0] - Math.abs(t[s][0] - t[s][1]) / 100 * i) + "deg )";
                                        break;
                                    default:
                                        a += " " + s + "( " + (t[s][0] < t[s][1] ? t[s][0] + Math.abs(t[s][0] - t[s][1]) / 100 * i : t[s][0] - Math.abs(t[s][0] - t[s][1]) / 100 * i) + "% )"
                                }
                            ee.TweenMax.set(e.target, {
                                "-webkit-filter": a,
                                filter: a
                            })
                        }
                    }
                },
                splitType: {
                    setNodesSequence: function(e, o) {
                        function t(e, t) {
                            if ("desc" == t) e = o.slice(0).reverse();
                            else if ("rand" == t) e = o.slice(0).sort(function() {
                                return .5 - Math.random()
                            });
                            else if ("center" == t) {
                                var i, s = Math.floor(o.length / 2);
                                for (e = [o[s]], i = 1; i <= s; i++) e.push(o[s - i], o[s + i]);
                                e.length = o.length
                            } else if ("edge" == t) {
                                var a, r = Math.floor(o.length / 2);
                                for (e = [o[0]], a = 1; a <= r; a++) e.push(o[o.length - a], o[a]);
                                e.length = o.length
                            }
                            return e || o
                        }
                        var i = t(o, e[1]),
                            e = {
                                asc: "desc",
                                desc: "asc"
                            }[e[1]] || e[1];
                        return [i, t(o, e)]
                    },
                    resetNodes: function(e, t) {
                        ie(".char, .word, .line", e).add(t.elements.$wrapper).css({
                            transform: "none",
                            opacity: 1
                        }).each(function() {
                            delete this._gsTransform
                        })
                    },
                    setRandomProperties: function(e, t, i, s) {
                        for (var a in t) {
                            for (var r = [], o = 0, n = e["text" + s].nodes.length; o < n; o++) r[o] = J.functions.convert.randomProperties(t[a], a);
                            delete i[a], i.cycle[a] = r
                        }
                        t = null
                    }
                }
            },
            media: {
                defaults: {
                    delay: 500,
                    fadeIn: 500,
                    fadeOut: 750
                },
                changeBackgroundVideo: function(e, t) {
                    var i, s, a, r;
                    J.slides.current.index && J.slides.current.data.$backgroundVideo.length && (r = (i = J.slides.current.data.$backgroundVideo).data(J.defaults.init.dataKey).elements.$bgWrapper, t && (i.data(J.defaults.init.dataKey).mediaProperties.willBePaused = !0, r.fadeOut(J.transitions.media.defaults.fadeOut, function() {
                        i.trigger("stopBackgroundVideo"), i.data(J.defaults.init.dataKey).mediaProperties.willBePaused = !1
                    }))), J.slides.next.data.$backgroundVideo.length && (a = (s = J.slides.next.data.$backgroundVideo).data(J.defaults.init.dataKey).elements.$bgWrapper, r = s.data(J.defaults.init.dataKey).elements.$bgOuterWrapper, te.isMobile && ($.hasClass("ls-device-is-phone") && r.hasClass("ls-hide-on-phone") || $.hasClass("ls-device-is-tablet") && r.hasClass("ls-hide-on-tablet")) || setTimeout(function() {
                        s.trigger("playBackgroundVideo")
                    }, e ? 50 : 0), e || t ? a.fadeIn(J.transitions.media.defaults.fadeOut) : a.css({
                        display: "block"
                    }), s.data(J.defaults.init.dataKey).mediaProperties.isPreloaded = !0)
                }
            },
            timers: {
                defaults: {
                    fadeInDuration: .35,
                    reverseDuration: .3
                },
                create: function(e) {
                    this.curNext = e || "next", this.reset(), J.gui.timers.bar.$element && this.bar.createTransition(), J.gui.timers.circle.$element && this.circle.createTransition(), J.gui.timers.slidebar.$element && this.slidebar.createTransition()
                },
                reverse: function() {
                    var e;
                    J.slides.current && J.slides.current.data && J.transitions._slideTimeline && (e = J.transitions._slideTimeline.progress(), e = J.slides.current.data.duration * e / this.defaults.reverseDuration, J.gui.timers.bar.$element && this.bar._transition && (J.transitions._slideTimeline.remove(J.transitions.timers.bar._transition), this.bar._transition.reverse().timeScale(e)), J.gui.timers.circle.$element && this.circle._transition && (J.transitions._slideTimeline.remove(J.transitions.timers.circle._transition), this.circle._transition.reverse().timeScale(e)), J.gui.timers.slidebar.$element && this.slidebar._transition && (J.transitions._slideTimeline.remove(J.transitions.timers.slidebar._transition), this.slidebar._transition.reverse().timeScale(e)))
                },
                reset: function() {
                    J.gui.timers.bar.$element && this.bar._transition && this.bar.reset(), J.gui.timers.circle.$element && this.circle._transition && this.circle.reset(), J.gui.timers.slidebar.$element && this.slidebar._transition && this.slidebar.reset()
                },
                bar: {
                    reset: function() {
                        this._transition && (this._transition.kill(), this._transition = !1)
                    },
                    createTransition: function() {
                        this._transition = ee.TweenMax.fromTo(J.gui.timers.bar.$element[0], J.slides[J.transitions.curNext].data.duration, {
                            autoCSS: !1,
                            paused: !0,
                            css: {
                                width: 0
                            }
                        }, {
                            autoCSS: !1,
                            css: {},
                            ease: ee.Linear.easeNone,
                            onReverseComplete: function() {
                                J.transitions.timers.bar._transition = !1
                            },
                            onComplete: function(e) {
                                e.target.style.width = "100%", e.target.style.width = "calc( 100% - " + J.slider.initial.skinWidth + "px )"
                            },
                            onCompleteParams: ["{self}"],
                            onUpdate: function(e) {
                                e.target.style.width = Math.min(J.slider.width, J.slider.width * e.progress()) + "px"
                            },
                            onUpdateParams: ["{self}"]
                        })
                    }
                },
                circle: {
                    reset: function() {
                        this._transition && (J.gui.timers.circle.$element.stop(!0, !0), this._transition.kill(), this._transition = !1)
                    },
                    createTransition: function() {
                        var e = J.gui.timers.circle.$element.find(".ls-ct-right .ls-ct-rotate")[0],
                            t = J.gui.timers.circle.$element.find(".ls-ct-left .ls-ct-rotate")[0],
                            i = J.slides[J.transitions.curNext].data.duration;
                        this._transition = new ee.TimelineMax({
                            paused: !0
                        }).fromTo(J.gui.timers.circle.$element[0], J.transitions.timers.defaults.fadeInDuration, {
                            autoCSS: !1,
                            immediateRender: !0,
                            css: {
                                opacity: 0,
                                display: "block"
                            }
                        }, {
                            autoCSS: !1,
                            css: {
                                opacity: J.gui.timers.circle.$element.data("original").opacity
                            }
                        }).fromTo(e, i / 2, {
                            autoCSS: !1,
                            css: {
                                rotation: 0
                            }
                        }, {
                            autoCSS: !1,
                            css: {
                                rotation: 180
                            },
                            ease: ee.Linear.easeNone
                        }, 0).fromTo(t, i / 2, {
                            autoCSS: !1,
                            css: {
                                rotation: 0
                            }
                        }, {
                            autoCSS: !1,
                            css: {
                                rotation: 180
                            },
                            ease: ee.Linear.easeNone
                        }, i / 2)
                    }
                },
                slidebar: {
                    reset: function() {
                        this._transition && (this._transition.kill(), this._transition = !1)
                    },
                    createTransition: function() {
                        var i = this;
                        i._transition = new ee.TimelineMax({
                            paused: !0,
                            onReverseComplete: function() {
                                J.transitions.timers.slidebar._transition = !1
                            }
                        }), ie.each(J.gui.timers.slidebar.$sliderContainerElement, function(t, e) {
                            i._transition.add(ee.TweenMax.fromTo(J.gui.timers.slidebar.$sliderContainerElement[t][0], J.slides[J.transitions.curNext].data.duration, {
                                autoCSS: !1,
                                css: {
                                    left: 0
                                }
                            }, {
                                autoCSS: !1,
                                css: {},
                                ease: ee.Linear.easeNone,
                                onComplete: function(e) {
                                    e.target.style.left = "calc( 100% - " + J.gui.timers.slidebar.sliderContainerElementWidth[t] + "px )"
                                },
                                onCompleteParams: ["{self}"],
                                onUpdate: function(e) {
                                    e.target.style.left = (J.gui.timers.slidebar.containerElementWidth[t] - J.gui.timers.slidebar.sliderContainerElementWidth[t]) * e.progress() + "px"
                                },
                                onUpdateParams: ["{self}"]
                            }), 0), i._transition.add(ee.TweenMax.fromTo(J.gui.timers.slidebar.$progressBarElement[t][0], J.slides[J.transitions.curNext].data.duration, {
                                autoCSS: !1,
                                css: {
                                    width: 0
                                }
                            }, {
                                autoCSS: !1,
                                css: {},
                                ease: ee.Linear.easeNone,
                                onComplete: function(e) {
                                    e.target.style.width = "100%"
                                },
                                onCompleteParams: ["{self}"],
                                onUpdate: function(e) {
                                    e.target.style.width = J.gui.timers.slidebar.elementWidth[t] * e.progress() + "px"
                                },
                                onUpdateParams: ["{self}"]
                            }), 0)
                        })
                    }
                }
            },
            scrollscene: {
                animate: function(e) {
                    var t, i;
                    J.transitions._slideTimeline && (t = J.slider.wrapperOffset.height - J.slider.height, i = te.scroll.top + this.stickLimit - J.slider.wrapperOffset.top, e = Math.max(1e-4, J.o.sceneDuration / t * i), t = ee.Quart.easeOut, i = this.initialized && !this.immediateRender ? J.o.smoothScrollDuration / 1e3 : 0, J.transitions._slideTimeline.tweenTo(e, {
                        ease: t
                    }).duration(i), this.initialized = !0, this.immediateRender = !1)
                }
            }
        }, J.plugins = {
            load: function() {
                var e, s;
                J.o.plugins && 0 !== J.o.plugins.length ? (e = J.o.plugins[0], s = "object" == typeof e ? e.namespace : e, window._layerSlider.plugins[s] ? (J.plugins.init(s, e, !0), J.plugins.load()) : J.browser.usesFileProtocol || "object" != typeof e ? (J.browser.usesFileProtocol ? window.console && (console.error(J.defaults.slider.errorText, "Cannot load plugins on file:// protocol."), console.info("Please include the plugin files manually.")) : window.console && (console.error(J.defaults.slider.errorText, "Plugin files are missing!"), console.info('Plugin "' + s + '" has been added in slider init options, but the source files are not found on page.')), J.o.plugins.splice(0, 1), J.plugins.load()) : -1 === window._layerSlider.pluginsBeingLoaded.indexOf(s) ? -1 === window._layerSlider.pluginsLoaded.indexOf(s) && -1 === window._layerSlider.pluginsNotLoaded.indexOf(s) ? (window._layerSlider.pluginsBeingLoaded.push(s), ie.ajax({
                    url: -1 === e.js.indexOf("http://") && -1 === e.js.indexOf("https://") ? (window._layerSlider.pluginsPath || window._layerSlider.scriptPath + "/../plugins/") + e.js : e.js,
                    dataType: "script",
                    success: function() {
                        J.plugins.init(e.namespace, e, !0), window._layerSlider.pluginsLoaded.push(s)
                    },
                    error: function(e, t, i) {
                        window.console && (console.error(J.defaults.slider.errorText, s, "plugin has not been loaded!"), console.error("Additional error info:", i)), window._layerSlider.pluginsNotLoaded.push(s)
                    },
                    complete: function() {
                        window._layerSlider.pluginsBeingLoaded.splice(window._layerSlider.pluginsBeingLoaded.indexOf(s), 1), J.plugins.load()
                    }
                })) : (J[s] || -1 !== window._layerSlider.pluginsNotLoaded.indexOf(s) ? J.o.plugins.splice(0, 1) : J.plugins.init(s, e), J.plugins.load()) : J.plugins.checkLoaded(s)) : J.slider.check.initialized()
            },
            init: function(e, t, i) {
                J.initializedPlugins[e] = new window._layerSlider.plugins[e](J, $, B, t.settings), window._layerSlider.checkVersions(J.initializedPlugins[e].pluginData.requiredLSVersion, J.plugin.version) ? (t.css && i && ie('<link rel="stylesheet" href="' + (-1 === t.css.indexOf("http://") && -1 === t.css.indexOf("https://") ? (window._layerSlider.pluginsPath || window._layerSlider.scriptPath + "/../plugins/") + t.css : t.css) + '">').appendTo("head"), J.initializedPlugins[e].init && J.initializedPlugins[e].init()) : window.console && console.error(J.defaults.slider.errorText, e, "plugin has not been loaded! Required LayerSlider version:", J.initializedPlugins[e].pluginData.requiredLSVersion, "(you have:", J.plugin.version + ")"), J.o.plugins.splice(0, 1)
            },
            checkLoaded: function(e) {
                J.intervals.pluginLoaded = setInterval(function() {
                    -1 === window._layerSlider.pluginsLoaded.indexOf(e) && -1 === window._layerSlider.pluginsNotLoaded.indexOf(e) || -1 !== window._layerSlider.pluginsBeingLoaded.indexOf(e) || (clearInterval(J.intervals.pluginLoaded), delete J.intervals.pluginLoaded, J.plugins.load())
                }, 100)
            }
        }, J.performance = {}, J.slider = {
            shouldResize: !0,
            thumbnails: [],
            state: {
                isHidden: !1,
                isPaused: !1,
                preloadingImages: !1,
                changingSlides: !1,
                animatingSlides: !1
            },
            offset: {},
            position: {},
            isBusy: function() {
                return this.state.preloadingImages || this.state.changingSlides || this.state.animatingSlides
            },
            load: function() {
                if (!document.body.contains(I)) return !1;
                J.api.hasEvent("sliderWillLoad") && J.api.triggerEvent("sliderWillLoad"), J.slider.set.global()
            },
            set: {
                global: function() {
                    var e;
                    J.originalMarkup = $[0].outerHTML, J.userInitOptions = J.functions.convert.properties(J.functions.convert.oldProperties(i)), J.meta = {}, J.o = ie.extend(!0, {}, J.defaults.init.options, J.userInitOptions), J.o.forceLayersOutDuration /= 1e3, J.o.forceLayersOutDuration = 0 < J.o.forceLayersOutDuration ? J.o.forceLayersOutDuration : .75, J.o.sliderFadeInDuration /= 1e3, window.console && !0 !== J.o.hideWelcomeMessage && !0 !== window._layerSlider.hideWelcomeMessage && (window._layerSlider.hideWelcomeMessage = !0, t = window.console.info ? "info" : "log", e = window.LS_Meta && window.LS_Meta.v ? " | WP Plugin: " + window.LS_Meta.v : "", console[t]("LayerSlider initialized | core: " + J.plugin.version + "-" + J.plugin.release + e), console[t]("Find updates and docs @ https://layerslider.com/"));
                    var t = {
                        namespace: "debug",
                        js: "debug/layerslider.debug.js",
                        css: "debug/layerslider.debug.css"
                    }; - 1 !== document.location.hash.indexOf("debug") && window.console && (-1 !== document.location.hash.indexOf("url=") && (window._layerSlider.pluginsPath = document.location.hash.split("url=")[1].split("&")[0], t.js = window._layerSlider.pluginsPath + "debug/layerslider.debug.js", t.css = window._layerSlider.pluginsPath + "debug/layerslider.debug.css"), "object" == typeof J.o.plugins ? J.o.plugins.push(t) : J.o.plugins = [t]), (window._layerSlider.currentScript || window._layerSlider.lsScript) && (window._layerSlider.scriptPath = (window._layerSlider.currentScript || window._layerSlider.lsScript).src.replace(/\\/g, "/").replace(/\/[^\/]*$/, "")), J.o.silentMode && (J.slider.$silentWrapper = ie("<ls-silent-wrapper></ls-silent-wrapper>"), J.slider.$silentWrapper.append($).prependTo("body")), "string" == typeof J.o.getData && (J.o.getData = [J.o.getData]), "object" == typeof J.o.plugins ? J.plugins.load() : J.slider.check.initialized()
                },
                styles: function() {
                    var e, t, i, s, a, r, o, n, l, d, c, p, u, h, m, f, g, y, v = J.slider,
                        w = $.parent(),
                        b = I.style,
                        S = window.getComputedStyle(I, null),
                        x = parseInt(I.clientWidth),
                        T = parseInt(I.clientHeight),
                        k = parseInt(w.width()),
                        C = parseInt(w.height()),
                        O = J.o.layersContainerWidth,
                        P = J.o.layersContainerHeight,
                        L = J.o.type.toLowerCase();
                    switch (J.debugMode && J.debug.add("group", "sliderInit.style"), J.o.width ? e = -1 == J.o.width.indexOf("%") ? parseInt(J.o.width) : J.o.width : b.width ? e = -1 == b.width.indexOf("%") ? parseInt(b.width) : b.width : 0 < O ? (e = O, J.debugMode && J.debug.add("warn", "sliderInit.noWidth", O)) : (e = x, J.debugMode && J.debug.add("warn", "sliderInit.noWidth2", x)), i = e, J.o.height ? t = -1 == J.o.height.indexOf("%") ? parseInt(J.o.height) : J.o.height : b.height ? t = -1 == b.height.indexOf("%") ? parseInt(b.height) : b.height : 0 < P ? (t = P, J.debugMode && J.debug.add("warn", "sliderInit.noHeight", P)) : (t = T, J.debugMode && J.debug.add("warn", "sliderInit.noHeight2", C)), s = t, a = "" !== b.maxWidth ? -1 !== b.maxWidth.indexOf("px") ? parseInt(b.maxWidth) : b.maxWidth : 0, void 0 === J.userInitOptions.type && (0 < O && 0 < P || "100%" === e && "100%" === t ? L = "fullsize" : O <= 0 && P <= 0 && (J.o.responsiveUnder <= 0 || 0 < J.o.responsiveUnder && J.o.sliderVersion) ? L = void 0 !== J.o.responsive && !1 === J.o.responsive ? "fixedsize" : "responsive" : 0 < J.o.responsiveUnder && (L = "fullwidth")), L) {
                        case "fullwidth":
                            -1 !== e.indexOf("%") && (J.debugMode && J.debug.add("warn", "sliderInit.percWidth", [L, e, x]), e = x), O <= 0 && (O = e, J.debugMode && J.debug.add("warn", "sliderInit.conWidth", [L, e])), J.o.responsiveUnder <= 0 && (J.o.responsiveUnder = O, J.debugMode && J.debug.add("warn", "sliderInit.fullwidth", O)), -1 !== t.indexOf("%") && (o = C / (100 / parseInt(t)), J.debugMode && J.debug.add("warn", "sliderInit.fullwidth2", [L, t, o]), t = o), P <= 0 && (P = t);
                            break;
                        case "fullsize":
                            -1 !== e.indexOf("%") && (r = 0 < O ? O : k, J.debugMode && J.debug.add("warn", "sliderInit.fullsize", [L, e, r, k, O]), e = r), O <= 0 && (O = e, J.debugMode && J.debug.add("warn", "sliderInit.conWidth", [L, e])), -1 !== t.indexOf("%") && (o = 0 < P ? P : M.height() / (100 / parseInt(t)), J.debugMode && J.debug.add("warn", "sliderInit.fullsize2", [L, t, o, M.height(), P]), t = o), P <= 0 && (P = t, J.debugMode && J.debug.add("warn", "sliderInit.conHeight", [L, t]));
                            break;
                        case "fixedsize":
                            break;
                        default:
                            J.userInitOptions.type = J.o.type = L = "responsive", (J.o.responsiveUnder = -1) !== e.indexOf("%") && (e = x, J.debugMode && J.debug.add("warn", "sliderInit.percWidth", [L, e, x])), -1 !== t.indexOf("%") && (e = T, J.debugMode && J.debug.add("warn", "sliderInit.responsive", [L, t, T])), J.debugMode && 0 < O && J.debug.add("warn", "sliderInit.conWidth2", [L, O]), J.debugMode && 0 < P && J.debug.add("warn", "sliderInit.conHeight2", [L, P])
                    }
                    $.addClass("ls-container ls-" + L), $.parent().addClass("ls-direction-fix"), J.userInitOptions.slideBGSize || "responsive" !== L || !J.userInitOptions.hasOwnProperty("sliderVersion") || J.userInitOptions.sliderVersion || (J.o.slideBGSize = "auto", J.debugMode && J.debug.add("warn", "sliderInit.bgCover", L)), J.o.slideBGSize = J.o.slideBGSize.replace("100% 100%", "stretch"), n = 0 < O ? O : e, l = 0 < P ? P : t, (d = "auto" === (y = I.style.marginLeft) ? "auto" : "" === y ? parseInt(S.getPropertyValue("margin-left")) : parseInt(I.style.marginLeft)) === (c = "auto" === (g = I.style.marginRight) ? "auto" : "" === g ? parseInt(S.getPropertyValue("margin-right")) : parseInt(I.style.marginRight)) && ("" === y && "" === g && (p = d, c = d = "auto"), $.css({
                        marginLeft: "auto",
                        marginRight: "auto"
                    })), u = "" !== b.paddingLeft ? parseInt(b.paddingLeft) : parseInt($.css("padding-left")), m = "" !== b.paddingRight ? parseInt(b.paddingRight) : parseInt($.css("padding-right")), h = "" !== b.paddingTop ? parseInt(b.paddingTop) : parseInt($.css("padding-top")), f = "" !== b.paddingBottom ? parseInt(b.paddingBottom) : parseInt($.css("padding-bottom")), w = "" !== b.borderLeftWidth ? parseInt(b.borderLeftWidth) : parseInt($.css("border-left-width")), y = "" !== b.borderRightWidth ? parseInt(b.borderRightWidth) : parseInt($.css("border-right-width")), g = "" !== b.borderTopWidth ? parseInt(b.borderTopWidth) : parseInt($.css("border-top-width")), b = "" !== b.borderBottomWidth ? parseInt(b.borderBottomWidth) : parseInt($.css("border-bottom-width")), v.initial = {
                        type: L,
                        width: e,
                        height: t,
                        originalWidth: i,
                        originalHeight: s,
                        percW: e / 100,
                        percH: t / 100,
                        layersWidth: O,
                        layersHeight: P,
                        ratio: n / l,
                        maxWidth: a,
                        marginLeft: d,
                        marginRight: c,
                        marginTop: J.o.marginTop,
                        marginBottom: J.o.marginBottom,
                        paddingLeft: u,
                        paddingTop: h,
                        paddingRight: m,
                        paddingBottom: f,
                        borderLeftWidth: w,
                        borderTopWidth: g,
                        borderRightWidth: y,
                        borderBottomWidth: b,
                        skinWidth: u + m + w + y,
                        skinHeight: h + f + g + b
                    }, J.debugMode && (J.debug.add("log", "sliderInit.style", [e, t, i, s, O, P, parseInt(n / l * 100) / 100, 0 < a ? a : void 0, [d, c]]), p && J.debug.add("warn", "sliderInit.margin", p)), ie("html").attr("id") ? ie("body").attr("id") || ie("body").attr("id", "ls-global") : ie("html").attr("id", "ls-global"), "static" !== S.getPropertyValue("position") && "absolute" !== S.getPropertyValue("position") && (I.style.position = "relative"), J.o.insertSelector && $[J.o.insertMethod](J.o.insertSelector), J.slider.$hiddenWrapper = ie('<div class="ls-wp-container fitvidsignore ls-hidden" data-layerslider-uid="' + B + '"></div>').addClass($.attr("class")).prependTo("body"), J.slider.$innerWrapper = ie('<div class="ls-inner"></div>'), J.slider.$slideBGColorWrapper = ie('<div class="ls-slide-bgcolor"></div>').appendTo(J.slider.$innerWrapper), J.slider.$layersWrapper = ie('<div class="ls-layers"></div>').appendTo(J.slider.$innerWrapper), J.slider.$bgVideosWrapper = ie('<div class="ls-background-videos"></div>').appendTo(J.slider.$layersWrapper), J.slider.$slideBGWrapper = ie('<div class="ls-slide-backgrounds"></div>').appendTo(J.slider.$layersWrapper), J.slider.$innerWrapper.appendTo($), !0 === J.o.hideOnMobile && te.isMobile ? ($.addClass("ls-forcehide"), $.closest(".ls-wp-fullwidth-container").addClass("ls-forcehide"), J.o.autoStart = !1) : J.slider.check.showHide();
                    S = !1;
                    if (-1 == J.o.globalBGColor.indexOf("gradient") ? J.slider.$innerWrapper.css({
                            backgroundColor: J.o.globalBGColor
                        }) : (S = J.o.globalBGColor, J.o.globalBGColor = "transparent"), J.o.globalBGImage ? J.slider.$innerWrapper.css({
                            backgroundImage: "url( " + J.o.globalBGImage + " )" + (S ? ", " + S : ""),
                            backgroundRepeat: J.o.globalBGRepeat,
                            backgroundAttachment: J.o.globalBGAttachment,
                            backgroundSize: J.o.globalBGSize,
                            backgroundPosition: J.o.globalBGPosition
                        }) : S && J.slider.$innerWrapper.css({
                            backgroundImage: S
                        }), "transparent" != J.o.globalBGColor || !1 !== J.o.globalBGImage || S || J.slider.$innerWrapper.css({
                            background: "none transparent"
                        }), "sticky" === J.o.scene || "scroll" === J.o.scene) {
                        if (J.o.scene) switch (J.slider.isScene = !0, J.o.scene) {
                            case "scroll":
                                J.slider.isScrollScene = !0;
                            case "sticky":
                                J.slider.isSticky = !0
                        }
                        $.parent().is("ls-scene-wrapper") ? $.parent().attr("data-scene", J.o.scene).attr("data-layerslider-uid", B) : $.wrap('<ls-scene-wrapper data-scene="' + J.o.scene + '" data-layerslider-uid="' + B + '"></ls-scene-wrapper>'), J.slider.$spacingWrapper = ie('ls-scene-wrapper[data-layerslider-uid="' + B + '"]').css("max-width", $.css("max-width")), $.attr("data-scene", J.o.scene)
                    } else J.slider.$spacingWrapper = $;
                    (J.o.preventSliderClip && J.o.fitScreenWidth && ("fullwidth" === L || "fullsize" === L && "fitheight" !== J.o.fullSizeMode) || J.slider.isScrollScene || J.slider.isSticky) && $.parents(":not(body, html)").each(function() {
                        ie(this).addClass("ls-overflow-visible")
                    })
                },
                options: function() {
                    var t, i, s, a, r, e;
                    ie("html").find('meta[content*="WordPress"]').length && (J.meta.wpVersion = ie("html").find('meta[content*="WordPress"]').attr("content").split("WordPress")[1]), window.LS_Meta && window.LS_Meta.v ? J.meta.lswpVersion = window.LS_Meta.v : ie("html").find('script[src*="layerslider"]').length && -1 != ie("html").find('script[src*="layerslider"]').attr("src").indexOf("?") && (J.meta.lswpVersion = ie("html").find('script[src*="layerslider"]').attr("src").split("?")[1].split("=")[1]), "undefined" != typeof layerSliderTransitions && (J.t = ie.extend({}, layerSliderTransitions)), "undefined" != typeof layerSliderCustomTransitions && (J.ct = ie.extend({}, layerSliderCustomTransitions)), J.debugMode && ("undefined" != typeof layerCustomSliderTransitions ? (J.debug.add("log", "sliderInit.customTransitions", !1), "undefined" == typeof layerSliderTransitions && J.debug.add("warn", "sliderInit.slideTransitions")) : "undefined" == typeof layerSliderTransitions && J.debug.add("warn", "sliderInit.noSlideTransitions")), "number" == typeof J.o.parallaxCenterDegree && (J.transitions.layers.parallax.defaults.centerDegree = J.o.parallaxCenterDegree), "number" == typeof J.o.parallaxSensitivity && (J.transitions.layers.parallax.defaults.sensitive = J.o.parallaxSensitivity), J.o.parallaxCenterLayers && (J.transitions.layers.parallax.defaults.centerLayers = J.o.parallaxCenterLayers), J.o.scrollCenterLayers && (J.transitions.layers.scroll.defaults.centerLayers = J.o.scrollCenterLayers), J.slider.isSticky && (ie.extend(J.o, {
                        allowFullscreen: !1,
                        playByScroll: !1
                    }), J.slider.isScrollScene && ie.extend(J.o, {
                        autoPauseSlideshow: !1,
                        autoStart: !1,
                        pauseLayers: !1,
                        pauseOnHover: !1,
                        startInViewport: !1
                    })), J.o.playByScroll && ie.extend(J.o, {
                        cycles: -1,
                        startInViewport: !0,
                        pauseOnHover: !1,
                        autoStart: !1
                    }), te.isMobile && (J.o.pauseOnHover = !1), J.o.startInViewport && (J.slider.state.waitForGettingInViewport = !0, J.o.playByScroll && (J.slider.positionToViewport = te.scroll.top > J.slider.offset.top - (te.viewport.height - J.slider.height) / 2 ? "under" : "over", t = !0, i = 4 * J.o.playByScrollSpeed, J.device.scroll.timeout = 250, J.transitions.layers.timeline.timeScaleModifier = 0, ie(document).on("wheel." + B + " touchmove." + B, function(e) {
                        te.isMobile ? (s = e.originalEvent.touches[0].clientY, a < s ? J.device.scroll.direction = "up" : s < a && (J.device.scroll.direction = "down"), r = a - s, a = s) : (0 < e.originalEvent.deltaY ? J.device.scroll.direction = "down" : J.device.scroll.direction = "up", r = e.originalEvent.deltaY), 0 !== Math.abs(r) && (J.device.scroll.lastDirection ? J.device.scroll.lastDirection !== J.device.scroll.direction && (J.device.scroll.lastDirection = J.device.scroll.direction, J.transitions.layers.timeline.timeScaleModifier = 0) : J.device.scroll.lastDirection = J.device.scroll.direction, "inside" === J.slider.positionToViewport && (J.resize.viewport(), 0 <= r ? J.transitions.layers.timeline.scrollForward() : J.transitions.layers.timeline.scrollBackwards(), t && (clearTimeout(J.timeouts.scroll), t = !1, J.transitions.layers.timeline.timeScaleModifier = J.transitions.layers.timeline.timeScaleModifier < i ? J.transitions.layers.timeline.timeScaleModifier + .25 : i, J.timeouts.scroll2 = setTimeout(function() {
                            delete J.timeouts.scroll2, t = !0, J.device.scroll.timeout = 50 < J.device.scroll.timeout ? J.device.scroll.timeout - 50 : 50
                        }, J.device.scroll.timeout))), J.slider.check.positionToViewport(), J.timeouts.checkPosition = setTimeout(function() {
                            J.slider.check.positionToViewport()
                        }, 25))
                    }))), J.slider.canShow = !0, te.automaticFontSizeRatio || (e = ie('<ls-dummy style="font-size: 100px; width: 0; height: 0; opacity: 0; position: absolute; overflow: hidden; pointer-events: none;">Lorem</ls-dummy>').appendTo("body"), te.automaticFontSizeRatio = parseFloat(e.css("font-size")) / parseFloat(e[0].style.fontSize) || 1, e.remove())
                },
                events: function() {
                    M.on("scroll." + B, function() {
                        J.slider.set.offset()
                    }), M.on("touchmove." + B, function(e) {
                        e = e.touches || e.originalEvent.touches;
                        1 == e.length && (self.touchX = e[0].clientX)
                    }), M.on("resize." + B, function() {
                        J.slider.check.showHide(), J.transitions.scrollscene.immediateRender = !0, "inside" === J.slider.positionToViewport && J.o.playByScroll && J.resize.viewport(), J.slider.shouldResize && (!te.isMobile || te.isMobile && te.viewport.width !== te.viewport.lastWidth || J.slider.isPopup) && J.resize.all(), J.slider.set.offset(), J.slider.isScene && J.resize.scene(), J.slider.isPopup || (J.timeouts.resize && clearTimeout(J.timeouts.resize), J.resize.once ? J.resize.once = !1 : J.timeouts.resize = setTimeout(function() {
                            J.resize.once = !0, M.trigger("resize." + B), J.api.methods("resetScroll")
                        }, 100))
                    }), J.debugMode && (M.off(".debug" + B), M.on("resize.debug" + B, function() {
                        J.debug.add("log", "resize.window", te.viewport.width, !0)
                    })), M.on("hashchange." + B, function() {
                        document.location.hash && J.slides.deeplink(document.location.hash)
                    }), J.slider.set.offset(), M.trigger("resize." + B), J.o.refreshWaypoint && window.Waypoint && Waypoint.refreshAll()
                },
                offset: function() {
                    if ("none" !== $.css("display")) {
                        var e = I.getBoundingClientRect(),
                            t = J.slider.position.toViewportForPerformance;
                        J.slider.position.toViewport;
                        if (J.slider.get.offset(e), J.slider.get.position(e), 0 < J.slider.position.left - te.viewport.width ? J.slider.position.left - te.viewport.width > J.performance.threshold ? J.slider.position.toViewportX = "after" : J.slider.position.toViewportX = "insideLimit" : J.slider.position.right < 0 ? J.slider.position.right < -J.performance.threshold ? J.slider.position.toViewportX = "before" : J.slider.position.toViewportX = "insideLimit" : J.slider.position.toViewportX = "inside", 0 < J.slider.position.top - te.viewport.height ? J.slider.position.top - te.viewport.height > J.performance.threshold ? J.slider.position.toViewportY = "below" : J.slider.position.toViewportY = "insideLimit" : J.slider.position.bottom < 0 ? J.slider.position.bottom < -J.performance.threshold ? J.slider.position.toViewportY = "above" : J.slider.position.toViewportY = "insideLimit" : J.slider.position.toViewportY = "inside", J.slider.position.toViewportYForSkipViewportLayers = J.slider.position.toViewportY, J.slider.state.waitForGettingInViewport && (J.slider.position.middle < te.viewport.height && 0 < J.slider.position.middle ? (J.slider.position.toViewportY = "inside", J.slider.state.waitForGettingInViewport = !1, J.transitions._slideTimeline && J.transitions._slideTimeline.play(), J.debugMode && J.debug.add("log", "slideshow.inviewport", !1)) : J.slider.position.toViewportY = "outside"), -1 !== J.slider.position.toViewportX.indexOf("inside") && "insideLimit" == J.slider.position.toViewportY || -1 !== J.slider.position.toViewportY.indexOf("inside") && "insideLimit" == J.slider.position.toViewportX ? (J.slider.position.toViewport = "insideLimit", J.slider.position.toViewportForPerformance = "inside") : "inside" == J.slider.position.toViewportX && "inside" == J.slider.position.toViewportY ? (J.slider.position.toViewport = "inside", J.slider.position.toViewportForPerformance = "inside") : (J.slider.position.toViewport = "outside", J.slider.position.toViewportForPerformance = "outside"), J.o.performanceMode && t !== J.slider.position.toViewportForPerformance && ("inside" === J.slider.position.toViewportForPerformance ? (J.performance.sliderIsInviewport = !0, J.api.methods("resumeSlider", "performanceMode")) : (J.performance.sliderIsInviewport = !1, J.api.methods("pauseSlider", "performanceMode"))), (J.slider.isScrollScene || J.slider.isSticky) && !J.slider.$spacingWrapper.is("[data-disabled-scene]")) {
                            var t = J.slider.$spacingWrapper[0].getBoundingClientRect(),
                                i = (te.viewport.height - J.slider.height) / 2,
                                s = 0;
                            switch (J.o.stickTo || "center") {
                                case "top":
                                    break;
                                case "center":
                                    s = i;
                                    break;
                                case "bottom":
                                    s = 2 * i
                            }
                            J.transitions.scrollscene.stickLimit = s, J.slider.wrapperPosition = {
                                left: t.left,
                                top: t.top,
                                middleForScrollTransition: t.top + t.height / 2 - te.viewport.height / 2
                            }, J.slider.wrapperOffset = {
                                left: t.left + te.scroll.left,
                                right: t.left + J.slider.width + te.scroll.left,
                                top: t.top + te.scroll.top,
                                bottom: t.bottom + J.slider.height + te.scroll.top,
                                width: t.width,
                                height: t.height
                            }, J.slider.state.shouldAnimateScrollSnene = !1, t.top > s ? ("disabled" !== J.slider.state.sticky || J.slider.isScrollScene && !J.transitions.scrollscene.initialized) && (J.slider.state.sticky = "disabled", J.slider.state.shouldAnimateScrollSnene = !0) : t.bottom - J.slider.height - s < 0 ? ("over" !== J.slider.state.sticky || J.slider.isScrollScene && !J.transitions.scrollscene.initialized) && (J.slider.state.sticky = "over", J.slider.state.shouldAnimateScrollSnene = !0) : t.top <= s && t.bottom > -s && ("enabled" !== J.slider.state.sticky && (J.slider.state.sticky = "enabled"), J.slider.state.shouldAnimateScrollSnene = !0), J.slider.isScrollScene && J.transitions._slideTimeline && J.slider.state.shouldAnimateScrollSnene && J.transitions.scrollscene.animate()
                        }
                        J.slider.state.isNotDisplayed && (J.slider.state.isNotDisplayed = !1, J.resize.all(), J.slider.check.positionToViewport(), M.trigger("scroll"))
                    } else J.slider.state.isNotDisplayed = !0
                },
                attributes: function() {
                    $.attr("data-current-slide", J.slides.current.index)
                }
            },
            get: {
                offset: function(e) {
                    e = e || I.getBoundingClientRect(), J.slider.offset = {
                        left: e.left + te.scroll.left,
                        right: e.left + J.slider.width + te.scroll.left,
                        top: e.top + te.scroll.top,
                        bottom: e.bottom + J.slider.height + te.scroll.top
                    }
                },
                position: function(e) {
                    e = e || I.getBoundingClientRect(), J.slider.position = {
                        left: e.left,
                        center: e.left + J.slider.width / 2,
                        right: e.right,
                        top: e.top,
                        middle: e.top + J.slider.height / 2,
                        bottom: e.bottom
                    }
                }
            },
            check: {
                initialized: function() {
                    J.debugMode && J.debug.add("log", "sliderInit.info", [J.plugin.version, J.plugin.releaseDate, J.userInitOptions.sliderVersion || "n/a or slider version is pre 6.0.0", $.attr("id"), B, ie.fn.jquery, J.meta.lswpVersion, J.meta.wpVersion], !0), J.slider.initialized || (J.slider.initialized = !0, this.skins())
                },
                skins: function() {
                    J.o.skin && "" !== J.o.skin && J.o.skinsPath && "" !== J.o.skinsPath ? J.gui.skin.load() : J.slider.init()
                },
                showHide: function() {
                    te.isMobile && !1 !== J.o.hideOnMobile || (te.viewport.width < J.o.hideUnder || te.viewport.width > J.o.hideOver && 0 < J.o.hideOver ? J.slider.hide() : J.slider.show())
                },
                visibility: function() {
                    !!J.slider.$innerWrapper.width() ? J.slider.state.isHidden && (J.slider.state.isHidden = !1, J.resize.all({
                        forceToGetParentWidth: !0
                    })) : J.slider.state.isHidden = !0
                },
                positionToViewport: function() {
                    var e;
                    delete J.timeouts.checkPosition, J.o.playByScroll && J.device.scroll.direction && (e = "down" === J.device.scroll.direction ? te.scroll.top : J.slider.offset.top - (te.viewport.height - J.slider.height) / 2, (("down" === J.device.scroll.direction ? J.slider.offset.top - (te.viewport.height - J.slider.height) / 2 : te.scroll.top) < e && ("up" === J.device.scroll.direction && "under" === J.slider.positionToViewport || "down" === J.device.scroll.direction && "over" === J.slider.positionToViewport) || te.document.height <= te.viewport.height || J.slider.height < te.viewport.height && ("up" === J.device.scroll.direction && te.scroll.top <= 0 && J.slider.offset.top + J.slider.height / 2 < te.viewport.height / 2 || "down" === J.device.scroll.direction && te.scroll.top >= te.document.height - te.viewport.height && J.slider.offset.top + J.slider.height / 2 > te.scroll.top + te.viewport.height / 2)) && (J.slider.positionToViewport = "inside", J.resize.viewport(), J.device.scroll.disable()))
                }
            },
            init: function() {
                clearTimeout(J.timeouts.skinLoad1), clearTimeout(J.timeouts.skinLoad2), clearTimeout(J.timeouts.skinLoad3), clearTimeout(J.timeouts.skinLoad4), J.slider.set.styles(), J.slider.set.options(), J.slides.init(), J.device.fullscreen.set(), J.media.init(), J.gui.timers.init(), J.gui.loadingIndicator.init(), J.preload.init(), J.gui.shadow.init(), J.navigation.init(), J.slideshow.init(), J.slides.set.firstSlide(), J.gui.navigation.init(), J.gui.media.init(), J.resize.slider(), J.yourLogo.init(), J.slider.set.events(), J.api.hasEvent("sliderDidLoad") && J.api.triggerEvent("sliderDidLoad", J.api.eventData()), J.functions.setStates(J.slider, {
                    isLoaded: !0
                }), J.slider.state.shouldBeDestroyed ? J.api.methods("destroy") : (J.intervals.checkSliderVisibility = setInterval(function() {
                    J.slider.check.visibility()
                }, 500), J.slideshow.changeTo(J.slides.first.index))
            },
            hide: function() {
                $.addClass("ls-forcehide"), $.closest(".ls-wp-fullwidth-container").addClass("ls-forcehide"), $.closest(".ls-popup").addClass("ls-forcehide"), $.closest(".ls-popup").prev(".ls-popup-overlay").addClass("ls-forcehide")
            },
            show: function() {
                $.removeClass("ls-forcehide"), $.closest(".ls-wp-fullwidth-container").removeClass("ls-forcehide"), $.closest(".ls-popup").removeClass("ls-forcehide"), $.closest(".ls-popup").prev(".ls-popup-overlay").removeClass("ls-forcehide")
            }
        }, J.functions = {
            getData: function(e, t) {
                return !J.o.getData || -1 === J.o.getData.indexOf(e) || (J.api.triggerEvent("getData", {
                    property: e,
                    value: t
                }), !J.o.destroyAfter) || (J.api.methods("destroy", !0), !1)
            },
            convert: {
                transformOrigin: function(e, t, i, s) {
                    for (var a = (d = ie.trim(e)).split(" "), r = s[0].style, o = "", n = ["Left", "Top"], l = [J.slider.width, J.slider.height], d = d.replace("sliderleft", "0").replace("sliderright", "100%").replace("slidercenter", "50%").replace("slidermiddle", "50%").replace("slidertop", "0").replace("sliderbottom", "100%").replace("left", "0").replace("right", "100%").replace("center", "50%").replace("middle", "50%").replace("top", "0").replace("bottom", "100%").split(" "), c = 0; c < d.length; c++) - 1 !== a[c].indexOf("slider") ? (J.transitions.layers.timeline.shouldRestart = !0, o += c < 2 ? l[c] / (100 / parseInt(d[c])) - parseInt(r[n[c].toLowerCase()]) - parseInt(r["margin" + n[c]]) + "px " : "0px") : -1 !== d[c].indexOf("%") ? o += d[c] + " " : -1 !== d[c].indexOf("em") ? o += parseFloat(d[c]) * parseInt(t.css("font-size")) + "px " : o += parseInt(d[c]) * i.settings.calculatedratio + "px ";
                    return ie.trim(o)
                },
                specialValuesOfTransformOrigin: function(e) {
                    return e = e.replace("sliderleft", "0").replace("sliderright", "100%").replace("slidercenter", "50%").replace("slidermiddle", "50%").replace("slidertop", "0").replace("sliderbottom", "100%").replace("left", "0").replace("right", "100%").replace("center", "50%").replace("middle", "50%").replace("top", "0").replace("bottom", "100%").split(" ")
                },
                nodesTransformOrigin: function(e, d, c, t) {
                    for (var i = "object" == typeof e, p = (d.length, []), u = t[0].style, h = ["left", "top"], s = function(e, t) {
                            for (var t = ie(d[t]), i = parseInt(t.css("font-size")), s = t.position(), a = (n = ie.trim(e)).split(" "), r = "", o = [J.slider.width, J.slider.height], n = J.functions.convert.specialValuesOfTransformOrigin(n), l = 0; l < n.length; l++) - 1 !== a[l].indexOf("slider") ? (J.transitions.layers.timeline.shouldRestart = !0, r += l < 2 ? o[l] / (100 / parseInt(n[l])) - parseInt(s[h[l]]) - parseInt(u[h[l].toLowerCase()]) + "px " : "0px") : -1 !== n[l].indexOf("%") ? r += n[l] + " " : -1 !== n[l].indexOf("em") ? r += parseFloat(n[l]) * i + "px " : r += parseInt(n[l]) * c.settings.calculatedratio + "px ";
                            p.push(ie.trim(r))
                        }, a = 0, r = i && e.length, o = 0; o < d.length; o++) i ? (s(e[a], o), ++a == r && (a = 0)) : s(e, o);
                    return p
                },
                easing: function(e, t) {
                    return "string" != typeof e ? e : (-1 !== (e = e.toLowerCase()).indexOf("swing") || -1 !== e.indexOf("linear") ? i = ee.Linear.easeNone : (s = e.match(/(easeinout|easein|easeout)(.+)/)[2], s = ee[s.charAt(0).toUpperCase() + s.slice(1)], -1 !== e.indexOf("easeinout") ? i = s.easeInOut : -1 !== e.indexOf("easeout") ? i = t ? s.easeIn : s.easeOut : -1 !== e.indexOf("easein") && (i = t ? s.easeOut : s.easeIn)), i);
                    var i, s
                },
                transition: function(e, t, i, s) {
                    var a = ie.extend({}, e);
                    return ie.each({
                        de: "delay",
                        rotate: "rotation",
                        rotateX: "rotationX",
                        rotateY: "rotationY"
                    }, function(e, t) {
                        e in a && (a[t] = a[e], delete a[e])
                    }), "after" === i ? a.scaleX = a.scaleY = a.scaleZ = 1 : a.scale3d !== s && (a.scaleX = a.scaleY = a.scaleZ = a.scale3d, delete a.scale3d), a.delay && (a.delay = "after" === i ? a.delay / 1e3 : a.delay), void 0 === t && (t = "easeInOutQuart"), a.ease = J.functions.convert.easing(t), a
                },
                randomProperties: function(e, t) {
                    -1 !== e.indexOf("random") && -1 !== e.indexOf("(") && -1 !== e.indexOf(",") && -1 !== e.indexOf(")") ? e = e.split("(")[1].split(")")[0].replace(",", J.defaults.init.rangeSplitChar) : e.charAt(0) === J.defaults.init.openingBracket && e.charAt(e.length - 1) === J.defaults.init.closingBracket && (e = e.substring(1, e.length - 1)), e = e.replace(/,/g, ".").replace(/٫/g, ".");
                    var i, s = -1 === t.indexOf("scale") && -1 === t.indexOf("opacity") ? 1 : 100,
                        a = e;
                    return -1 !== e.indexOf(J.defaults.init.randomSplitChar) ? a = (a = (i = e.split(J.defaults.init.randomSplitChar))[Math.floor(Math.random() * i.length)].trim()).charAt(0) === J.defaults.init.openingBracket && a.charAt(a.length - 1) === J.defaults.init.closingBracket ? J.functions.convert.randomProperties(a, t) : parseFloat(a) : -1 !== e.indexOf(J.defaults.init.rangeSplitChar) && ((i = e.split(J.defaults.init.rangeSplitChar)).sort(function(e, t) {
                        return parseFloat(e) - parseFloat(t)
                    }), i[0] = parseFloat(i[0] * s), i[1] = parseFloat(i[1] * s), a = Math.floor(Math.random() * (i[1] - i[0] + 1) + i[0]) / s), a
                },
                properties: function(e, t) {
                    if ("string" == typeof e) return J.functions.convert._properties(e, t);
                    if ("object" != typeof e) return e;
                    for (var i in e) e[i] = J.functions.convert._properties(e[i], t);
                    return e
                },
                _properties: function(e, t) {
                    if (-1 !== ["enable", "enabled", "true"].indexOf(e)) return !0;
                    if (-1 !== ["disable", "disabled", "false", "undefined", "null"].indexOf(e)) return !1;
                    if ("string" != typeof e || -1 === e.indexOf(J.defaults.init.staggerSplitChar) || e.charAt(0) === J.defaults.init.openingBracket) return t ? "" + parseInt(e) == "NaN" ? 0 : parseInt(e) : ie.isNumeric(e) ? parseFloat(e) : e;
                    for (var i = e.split(J.defaults.init.staggerSplitChar), s = [], a = 0; a < i.length; a++) s[a] = ie.isNumeric(i[a]) ? parseFloat(ie.trim(i[a])) : ie.trim(i[a]);
                    return s
                },
                oldProperties: function(i) {
                    return ie.each({
                        firstLayer: "firstSlide",
                        loops: "cycles",
                        forceLoopNum: "forceCycles",
                        layersContainer: "layersContainerWidth",
                        sublayerContainer: "layersContainerWidth",
                        randomSlideshow: "shuffleSlideshow"
                    }, function(e, t) {
                        e in i && (i[t] = i[e], delete i[e])
                    }), i
                }
            },
            getSliderClosestParentElementWithNumericValueOfProperty: function(e) {
                for (var t, i = $.parents().not(".ls-fullscreen-wrapper"), s = i.length, a = 100, r = 0; r < s; r++)
                    if ("auto" !== (t = window.getComputedStyle(i[r]).getPropertyValue(e))) {
                        if (-1 !== t.indexOf("px") && (0 < parseInt(t) || J.slider.isPopup)) return J.slider.$parentWithNumericWidthValue = ie(i[r]), ie(i[r]); - 1 !== t.indexOf("%") && (a = a / 100 * parseInt(t), J.slider.$parentWithNumericWidthValuePercent = a)
                    }
            },
            sortArray: function(e, t, i) {
                var s, a, r, o, n, l, d, c = [],
                    p = e * t;
                switch (i) {
                    case "forward":
                        for (s = 0; s < e; s++)
                            for (a = 0; a < t; a++) c.push(s + a * e);
                        break;
                    case "reverse":
                        for (s = e - 1; - 1 < s; s--)
                            for (a = t - 1; - 1 < a; a--) c.push(s + a * e);
                        break;
                    case "center":
                        for (n = Math.floor(p / 2), r = 0; r < n; r++) c.push(r);
                        for (o = n; 0 <= o; o--) c.push(o);
                        break;
                    case "edge":
                    case "mirror":
                        for (r = n = Math.floor(p / 2); 0 < r; r--) c.push(r);
                        for (o = 0; o <= n; o++) c.push(o);
                        break;
                    case "radial-out":
                        for (l = e / 2, d = t / 2, s = 0; s < e; s++)
                            for (a = 0; a < t; a++) c.push(Math.floor(Math.abs(d - a - .5)) + Math.floor(Math.abs(l - s - .5)));
                        break;
                    case "radial-in":
                        for (l = e / 2, d = t / 2, s = 0; s < e; s++)
                            for (a = 0; a < t; a++) c.push(Math.floor(d - Math.ceil(Math.abs(d - a - .5))) + Math.floor(l - Math.ceil(Math.abs(l - s - .5))))
                }
                return c
            },
            shuffleArray: function(e) {
                for (var t, i, s = e.length; 0 !== s;) i = Math.floor(Math.random() * s), t = e[--s], e[s] = e[i], e[i] = t;
                return e
            },
            countProp: function(e) {
                var t, i = 0;
                for (t in e) e.hasOwnProperty(t) && ++i;
                return i
            },
            getURL: function(e) {
                return e[0].currentSrc || (e.data("src") ? e.data("src") : e.attr("src"))
            },
            getALT: function(e) {
                return !!e.attr("alt") && e.attr("alt")
            },
            setStates: function(e, t, i) {
                if (e && e.state) {
                    var s = J.slideshow.isPaused();
                    if (i) e.state[t] = i;
                    else
                        for (var a in t) e.state[a] = t[a];
                    i = J.slideshow.isPaused();
                    e == J.slideshow && (J.api.hasEvent("slideshowStateDidChange") && J.api.triggerEvent("slideshowStateDidChange", J.api.eventData()), i != s && (i ? J.api.hasEvent("slideshowDidPause") && J.api.triggerEvent("slideshowDidPause", J.api.eventData()) : (J.slideshow.start(), J.api.hasEvent("slideshowDidResume") && J.api.triggerEvent("slideshowDidResume", J.api.eventData()))))
                }
            },
            clearTimers: function() {
                for (var e in J.timeouts) clearTimeout(J.timeouts[e]), delete J.timeouts[e];
                for (var t in J.intervals) clearInterval(J.intervals[t]), delete J.intervals[t]
            },
            clearTimelines: function() {
                J.transitions.timelines.set("all", function(e, t) {
                    e.pause().clear().kill(), delete J.transitions[t]
                }), ee.TweenMax.killTweensOf($.find(".ls-bg, .ls-layer, .ls-wrapper, .ls-curtile, .ls-nexttile").get())
            },
            resetSlideTimelines: function() {
                J.transitions.timelines.set("layers", function(e, t) {
                    e.pause().progress(0).clear().kill(), delete J.transitions[t]
                }), J.transitions.timelines.set("allforce", function(e, t) {
                    e.pause().progress(1).clear().kill(), delete J.transitions[t]
                }), $.find(".ls-layer:not(.ls-bg-video)").each(function() {
                    var e = ie(this);
                    if (void 0 !== e.attr("data-ls-active") && !1 !== e.attr("data-ls-active") && void 0 !== e.attr("data-ls-static") && !1 !== e.attr("data-ls-static") && parseInt(e.attr("data-ls-slidein")) !== J.slides.current.index) return !0;
                    e = e.data(J.defaults.init.dataKey);
                    e.loop._timeline && (e.loop._timeline.stop().clear(), delete e.loop._timeline, ee.TweenMax.set(e.elements.$loopWrapper[0], e.reset.loopWrapperOnSlideChange)), ee.TweenMax.set(e.elements.$wrapper[0], e.reset.wrapperOnSlideChange)
                })
            },
            clearEvents: function() {
                M.add("body").add(document).add($).add($.find("*")).add("." + B).off("." + B + " .debug" + B + " .parallax" + B + " .scroll" + B), $.off()
            }
        }, J.device = {
            scroll: {
                keys: [32, 33, 34, 35, 36, 37, 38, 39, 40],
                disable: function() {
                    window.addEventListener("scroll", this.preventDefault, {
                        passive: !1,
                        capture: !0
                    }), window.addEventListener("wheel", this.preventDefault, {
                        passive: !1,
                        capture: !0
                    }), window.addEventListener("mousewheel", this.preventDefault, {
                        passive: !1,
                        capture: !0
                    }), window.addEventListener("touchmove", this.preventDefault, {
                        passive: !1,
                        capture: !0
                    }), window.addEventListener("keydown", this.preventDefaultForScrollKeys, {
                        capture: !0
                    })
                },
                enable: function() {
                    window.removeEventListener("scroll", this.preventDefault, {
                        passive: !1,
                        capture: !0
                    }), window.removeEventListener("wheel", this.preventDefault, {
                        passive: !1,
                        capture: !0
                    }), window.removeEventListener("mousewheel", this.preventDefault, {
                        passive: !1,
                        capture: !0
                    }), window.removeEventListener("touchmove", this.preventDefault, {
                        passive: !1,
                        capture: !0
                    }), window.removeEventListener("keydown", this.preventDefaultForScrollKeys, {
                        capture: !0
                    })
                },
                preventDefault: function(e) {
                    (e = e || window.event).preventDefault && e.preventDefault(), e.returnValue = !1
                },
                preventDefaultForScrollKeys: function(e) {
                    if (-1 !== J.device.scroll.keys.indexOf(e.keyCode)) return J.device.scroll.preventDefault(e), !1
                }
            },
            removeSelection: function() {
                window.getSelection ? window.getSelection().empty ? window.getSelection().empty() : window.getSelection().removeAllRanges && window.getSelection().removeAllRanges() : document.selection && document.selection.empty()
            },
            fullscreen: {
                enter: function() {
                    J.functions.setStates(J.slider, {
                        inFullscreen: !0
                    }), ie("body, html").addClass("ls-fullscreen"), J.slider.fullscreenWrapper.requestFullscreen(), $.trigger("mouseleave"), J.device.removeSelection()
                },
                exit: function() {
                    J.functions.setStates(J.slider, {
                        inFullscreen: !1
                    }), J.resize.all(), ie("body, html").removeClass("ls-fullscreen"), J.device.removeSelection()
                },
                toggle: function() {
                    J.device.fullscreen.element() ? (J.device.fullscreen.exit(), document.exitFullscreen()) : J.device.fullscreen.enter()
                },
                set: function() {
                    J.o.allowFullscreen && (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled) && ($.wrap('<div class="ls-fullscreen-wrapper"></div>'), J.slider.$fullscreenWrapper = $.closest(".ls-fullscreen-wrapper"), J.slider.fullscreenWrapper = J.slider.$fullscreenWrapper[0], J.slider.$spacingWrapper = J.slider.$fullscreenWrapper, J.slider.fullscreenWrapper.requestFullscreen = J.slider.fullscreenWrapper.requestFullscreen || J.slider.fullscreenWrapper.webkitRequestFullscreen || J.slider.fullscreenWrapper.mozRequestFullScreen || J.slider.fullscreenWrapper.msRequestFullscreen, document.exitFullscreen = document.exitFullscreen || document.webkitExitFullscreen || document.mozCancelFullScreen || document.msExitFullscreen, ie(document).on("fullscreenchange." + B + " webkitfullscreenchange." + B + " mozfullscreenchange." + B + " msfullscreenchange." + B, function() {
                        J.device.fullscreen.element() || J.device.fullscreen.exit()
                    }), J.slider.$fullscreenWrapper.on("dblclick." + B, function() {
                        J.device.fullscreen.toggle()
                    }))
                },
                element: function() {
                    return document.fullscreenElement || document.webkitFullscreenElement || document.mozFullScreenElement || document.msFullscreenElement
                }
            }
        }, J.actions = {
            do: function(t) {
                var e, i, s = !1,
                    a = "";
                switch (t.action) {
                    case "scrollBelowProject":
                    case "scrollToNextProject":
                    case "scrollToPrevProject":
                    case "scrollToElement":
                    case "scrollToSelf":
                    case "scrollToScenePosition":
                        J.slider.isScene || $.addClass("ls-action-trigger");
                        var r, o, n, l, d = ie(".ls-wp-container:not(.ls-hidden):not([data-scene]), ls-scene-wrapper"),
                            c = ie("ls-scene-wrapper, .ls-action-trigger"),
                            p = ie([]),
                            u = J.slider.isScene ? J.slider.$spacingWrapper : $,
                            h = c.length,
                            m = c.index(u);
                        if (J.slider.isScene || $.removeClass("ls-action-trigger"), "scrollToSelf" === t.action) g = J.slider.$spacingWrapper.offset().top + (t.offset || 0);
                        else if ("scrollBelowProject" === t.action) g = J.slider.$spacingWrapper.offset().top + J.slider.$spacingWrapper.height() + (t.offset || 0);
                        else if ("scrollToPrevProject" === t.action) 0 !== d.index(u) ? (n = (p = d.eq(d.index(u) - 1)).is("ls-scene-wrapper") ? p.find(".ls-container") : p, g = parseFloat(p.offset().top) - parseFloat(n.css("top")) + (t.offset || 0)) : s = "There’s no previous project to scroll to.";
                        else if ("scrollToNextProject" === t.action) d.index(u) < d.length - 1 ? (n = (p = d.eq(d.index(u) + 1)).is("ls-scene-wrapper") ? p.find(".ls-container") : p, g = parseFloat(p.offset().top) - parseFloat(n.css("top")) + (t.offset || 0)) : s = "There’s no next project to scroll to.";
                        else if ("scrollToElement" === t.action) {
                            try {
                                p = ie(t.selector.toString()).not(".ls-wp-container.ls-hidden")
                            } catch (e) {
                                a = e
                            }
                            p.length && p.size() ? g = parseFloat(p.offset().top) + (t.offset || 0) : s = 'Couldn’t find the scroll target element "' + t.selector + '". Please verify the selector you’ve entered.'
                        } else if ("scrollToScenePosition" === t.action) {
                            switch (t.target) {
                                case "currentScene":
                                    J.slider.isScene ? p = u : s = "Current project is not a scene.";
                                    break;
                                case "nextScene":
                                    m + 1 < h ? p = ie(c[m + 1]) : s = "There are no next scenes in the DOM.";
                                    break;
                                case "previousScene":
                                    0 <= m - 1 ? p = ie(c[m - 1]) : s = "There are no previous scenes in the DOM."
                            }
                            p.length && (r = parseFloat(p.attr("data-scene-duration")), o = p.height(), d = (n = p.find(".ls-container")).height(), t.position = t.position || "0ms", g = p.is('[data-scene="scroll"]') ? (l = -1 !== t.position.indexOf("%") || -1 === t.position.indexOf("ms") ? r * (Math.min(100, Math.max(0, parseFloat(t.position))) / 100) : Math.min(Math.max(0, parseFloat(t.position) / 1e3), r), Math.round(parseFloat(p.offset().top) - parseFloat(n.css("top")) + l / r * (o - d))) : (l = Math.min(100, Math.max(0, parseFloat(t.position))) / 100, Math.round(parseFloat(p.offset().top) - parseFloat(n.css("top")) + (o - d) * l)))
                        }
                        s || (t.duration = ie.isNumeric(t.duration) ? t.duration : 1e3, ee.TweenMax.to("html, body", t.duration / 1e3, {
                            scrollTop: g,
                            ease: J.functions.convert.easing(t.easing)
                        }));
                        break;
                    case "switchSlide":
                        J.slideshow.changeTo(t.slide, !0, !0);
                        break;
                    case "nextSlide":
                    case "prevSlide":
                    case "lastSlide":
                    case "firstSlide":
                    case "stopSlideshow":
                    case "startSlideshow":
                        "nextSlide" === t.action && (y = "next"), "prevSlide" === t.action && (y = "prev"), "lastSlide" === t.action && (y = "last"), "firstSlide" === t.action && (y = "first"), "stopSlideshow" === t.action && (y = "stop"), "startSlideshow" === t.action && (y = "start"), J.navigation[y]("clicked");
                        break;
                    case "replaySlide":
                        J.api.methods("replay");
                        break;
                    case "reverseSlide":
                        J.api.methods("reverse", t.replay);
                        break;
                    case "resetSlide":
                        J.api.methods("resetSlide");
                        break;
                    case "pauseProject":
                        J.api.methods("pauseSlider");
                        break;
                    case "resumeProject":
                        J.api.methods("resumeSlider");
                        break;
                    case "toggleProject":
                        J.api.methods("toggleSlider");
                        break;
                    case "playMedia":
                        J.media.functions.playActiveMedia();
                        break;
                    case "pauseMedia":
                        J.media.functions.pauseActiveMedia();
                        break;
                    case "unmuteMedia":
                        J.media.unmute.multipleMediaElements();
                        break;
                    case "openPopup":
                        var f, g = ie("[id^=layerslider_" + t.popup + "]").first(),
                            y = g.data("lsSliderUID");
                        g.length ? ((f = window._layerSliders[y].initializedPlugins.popup).plugin.settings.showOnce = !1, "opened" == f.state.is ? t.toggle && f.events.hide() : t.slide ? g.layerSlider("fastChangeTo", t.slide, function() {
                            f.events.show()
                        }) : f.events.show()) : (g = {
                            action: "ls_get_popup_markup",
                            id: t.popup,
                            slide: t.slide
                        }, ie.get(J.o.ajaxURL || window.ajaxurl || "/wp-admin/admin-ajax.php", g, function(e) {
                            ie(e).appendTo("body")
                        }));
                        break;
                    case "launchPopups":
                        for (i in window._layerSliders)(e = window._layerSliders[i]).initializedPlugins.popup && e.api.methods("openPopup");
                        break;
                    case "closePopup":
                        J.api.methods("closePopup");
                        break;
                    case "closeAllPopups":
                        J.api.methods("closeAllPopups");
                        break;
                    case "jsFunction":
                        try {
                            window[t.function]()
                        } catch (e) {
                            a = e, s = "The browser thrown the following error after calling " + t.function+"() JavaScript function."
                        }
                }
                s && console.error('LayerSlider: Error while calling layer action "' + t.action + '". ' + s + ("" !== a ? "\n\r\n\r" : ""), a)
            }
        }, J.api = {
            hasEvent: function(e, t) {
                t = ie._data(t || I, "events");
                return !(!t || !t[e])
            },
            methods: function(e, t, i, s) {
                if (!J.slider.isBusy())
                    if ("number" == typeof e) 0 < e && e < J.slides.count + 1 && e != J.slides.current.index && J.slideshow.changeTo(e, !0, !0);
                    else switch (e) {
                        case "touchPrev":
                            J.device.touchPrev = !0;
                        case "previousSlide":
                        case "prev":
                            J.navigation.prev();
                            break;
                        case "touchNext":
                            J.device.touchNext = !0;
                        case "nextSlide":
                        case "next":
                            J.navigation.next();
                            break;
                        case "startSlideshow":
                        case "start":
                            J.navigation.start()
                    }
                switch (e) {
                    case "openPopup":
                        J.initializedPlugins.popup && (t && ie.isNumeric(t) ? $.layerSlider("fastChangeTo", t, function() {
                            J.initializedPlugins.popup.events.show()
                        }) : J.initializedPlugins.popup.events.show());
                        break;
                    case "launchPopups":
                        J.actions.do("launchPopups");
                        break;
                    case "fastChangeTo":
                        t && ie.isNumeric(t) && (J.slides.current.index !== t ? (J.slideshow.forceFastChange = !0, i && "function" == typeof i && (J.slideshow.forceFastChangeCallback = i), J.slideshow.changeTo(t, !0, !0)) : i && i());
                        break;
                    case "resetScroll":
                        J.slider.set.offset(), M.trigger("scroll.scroll" + B).trigger("touchmove.scroll" + B).trigger("scroll.parallax" + B).trigger("touchmove.parallax" + B);
                        break;
                    case "enableScene":
                        J.slider.isScene && (J.slider.$spacingWrapper.removeAttr("data-disabled-scene"), J.api.methods("resetScroll"));
                        break;
                    case "disableScene":
                        J.slider.isScene && (J.slider.$spacingWrapper.attr("data-disabled-scene", ""), $.css({
                            top: "auto",
                            bottom: "auto"
                        }), J.transitions.scrollscene.animate("start"), J.api.methods("resetScroll"));
                        break;
                    case "closePopup":
                        J.initializedPlugins.popup && J.initializedPlugins.popup.events.hide();
                        break;
                    case "closeAllPopups":
                        ie('<div class="ls-close-all-popups-button"></div>').css("display", "none").appendTo("body").trigger("click").remove();
                        break;
                    case "updateLayerData":
                        t && J.layers.update.data(t, i, s);
                        break;
                    case "redrawSlider":
                    case "redraw":
                        J.resize.all(), J.api.methods("resetScroll");
                        break;
                    case "replaySlide":
                    case "replay":
                        J.transitions._slideTimeline && J.transitions._slideTimeline.restart();
                        break;
                    case "reverseSlide":
                    case "reverse":
                        J.transitions._slideTimeline && (J.transitions._slideTimeline.reversed() ? J.transitions._slideTimeline.play() : J.transitions._slideTimeline.reverse(), t && (J.transitions.layers.timeline.shouldReplay = !0));
                        break;
                    case "unmute":
                    case "unmuteMedia":
                        J.media.unmute.multipleMediaElements();
                        break;
                    case "stopSlideshow":
                    case "stop":
                        J.navigation.stop();
                        break;
                    case "pauseSlider":
                    case "pause":
                        t && "performanceMode" === t && J.functions.setStates(J.slideshow, {
                            pausedByPerformance: !0
                        }), J.transitions._slideTimeline && !J.slider.isScrollScene && J.transitions._slideTimeline.stop(), J.layers.get("active").each(function() {
                            var e = ie(this).data(J.defaults.init.dataKey);
                            e.loop._timeline && e.loop._timeline.stop()
                        }), J.transitions.layers.parallax.state.paused = !0, J.transitions.layers.scroll.state.paused = !0, J.transitions._slideTransition && J.transitions._slideTransition.stop(), J.media.functions.pauseActiveMedia(!0);
                        break;
                    case "resumePopup":
                        J.layers.get("active").each(function() {
                            J.media.functions.playIfAllowed(ie(this))
                        }), J.transitions._slideTimeline && (J.transitions._slideTimeline.timeScale() < .001 && J.transitions.layers.timeline.resume(), J.transitions._slideTimeline.play()), J.transitions._slideTransition && J.transitions._slideTransition.play();
                        break;
                    case "resumeSlider":
                    case "resume":
                        J.transitions._slideTimeline && (J.transitions._slideTimeline.timeScale() < .001 && J.transitions.layers.timeline.resume(), J.slider.isScrollScene || J.transitions._slideTimeline.play()), J.media.functions.playActiveMedia(!0), J.layers.get("active").each(function() {
                            var e = ie(this).data(J.defaults.init.dataKey);
                            e.loop._timeline && e.loop._timeline.play()
                        }), J.transitions.layers.parallax.state.paused = !1, J.transitions.layers.scroll.state.paused = !1, J.transitions._slideTransition && J.transitions._slideTransition.play(), t && "performanceMode" === t && J.functions.setStates(J.slideshow, {
                            pausedByPerformance: !1
                        });
                        break;
                    case "playMedia":
                        J.media.functions.playActiveMedia();
                        break;
                    case "pauseMedia":
                        J.media.functions.pauseActiveMedia();
                        break;
                    case "toggleSlider":
                    case "toggle":
                        J.slider.state.isPaused ? ($.layerSlider("resume"), J.slider.state.isPaused = !1) : ($.layerSlider("pause"), J.slider.state.isPaused = !0);
                        break;
                    case "reset":
                    case "resetSlider":
                        break;
                    case "resetSlide":
                    case "resetCurrentSlide":
                        J.transitions.timelines.set("layers", function(e, t) {
                            e.progress(0), e.stop()
                        }), J.media.functions.stop(!0);
                        break;
                    case "destroy":
                    case "kill":
                        if (J.slider.state.isLoaded) {
                            if (J.functions.clearTimers(), J.functions.clearTimelines(), J.layers.$all.removeData(), J.api.hasEvent("sliderDidDestroy") && J.api.triggerEvent("sliderDidDestroy"), J.slider.state.sholudBeRemoved || t) {
                                if (J.slider.$hiddenWrapper.remove(), J.gui.timers.slidebar.$containerElement)
                                    for (var a = 0; a < J.gui.timers.slidebar.$containerElement.length; a++) J.gui.timers.slidebar.$containerElement[a] instanceof jQuery && J.gui.timers.slidebar.$containerElement[a].remove();
                                J.api.hasEvent("sliderDidRemove") && J.api.triggerEvent("sliderDidRemove");
                                var r = J.slider.$spacingWrapper;
                                r.closest(".ls-popup").length && (r = r.closest(".ls-popup")).prev(".ls-popup-overlay").remove(), r.remove(), J.slider.$silentWrapper && J.slider.$silentWrapper.remove()
                            }
                            J.functions.clearEvents(), window._layerSlider.removeSlider(B)
                        } else J.functions.setStates(J.slider, {
                            shouldBeDestroyed: !0,
                            sholudBeRemoved: t || !1
                        });
                        J.slider.positionToViewport = "under", J.device.scroll.enable()
                }
            },
            eventData: function() {
                return {
                    data: J,
                    userData: J.o,
                    uid: B,
                    target: I,
                    slider: $,
                    state: J.slider.state,
                    isBusy: J.slider.isBusy(),
                    event: {
                        target: I
                    },
                    api: function(e, t, i, s) {
                        $.layerSlider(e, t, i, s)
                    },
                    navigation: {
                        direction: J.navigation.direction
                    },
                    slides: {
                        first: {
                            index: J.slides.first.index,
                            deeplink: J.slides.get.deeplink(J.slides.first.index),
                            data: J.slides.first.data
                        },
                        prev: {
                            index: J.slides.prev.index,
                            deeplink: J.slides.get.deeplink(J.slides.prev.index),
                            data: J.slides.prev.data
                        },
                        current: {
                            index: J.slides.current.index || J.slides.first.index,
                            deeplink: J.slides.get.deeplink(J.slides.current.index),
                            layersIn: J.layers.get("current,in"),
                            layersOut: J.layers.get("current,out"),
                            timeline: J.transitions._slideTimeline,
                            data: J.slides.current.data
                        },
                        next: {
                            index: J.slides.next.index,
                            deeplink: J.slides.get.deeplink(J.slides.next.index),
                            layersIn: J.layers.get("next,in"),
                            layersOut: J.layers.get("next,out"),
                            data: J.slides.next.data
                        },
                        count: J.slides.count
                    },
                    slideChangeTimeline: J.transitions._slideTransition,
                    slideshow: {
                        state: J.slideshow.state,
                        sequence: J.slideshow.sequence,
                        direction: J.slideshow.direction,
                        isPaused: J.slideshow.isPaused()
                    },
                    cycles: {
                        max: J.o.cycles,
                        current: J.slideshow.curCycle
                    }
                }
            },
            triggerEvent: function(t, e) {
                var i, s;
                try {
                    i = e ? (s = $.triggerHandler(t + ".layerSlider", e), $.triggerHandler(t + ".$", e)) : (s = $.triggerHandler(t + ".layerSlider"), $.triggerHandler(t + ".$"))
                } catch (e) {
                    console.error('LayerSlider: Error while calling event "' + t + '":\n\r\n\r', e)
                }
                return null != s ? s : "undefinded" != typeof i && null !== i ? i : void 0
            }
        }, J.browser = {
            isSafari: !!navigator.userAgent.match(/(iPhone|iPod|iPad|Safari)/i) && !navigator.userAgent.match(/(Opera|Chrome|Edge)/i),
            isChrome: function() {
                var e = window.chrome,
                    t = window.navigator,
                    i = t.vendor,
                    s = void 0 !== window.opr,
                    a = -1 < t.userAgent.indexOf("Edge"),
                    a = !!t.userAgent.match("CriOS") || null != e && "Google Inc." === i && !1 == s && !1 == a;
                return a
            },
            usesFileProtocol: -1 !== document.location.href.indexOf("file://"),
            supports3D: function() {
                for (var e = ie("<div>"), t = !1, i = !1, s = ["perspective", "OPerspective", "msPerspective", "MozPerspective", "WebkitPerspective"], a = ["transformStyle", "OTransformStyle", "msTransformStyle", "MozTransformStyle", "WebkitTransformStyle"], r = s.length - 1; 0 <= r; r--) t = t || void 0 !== e[0].style[s[r]];
                for (var o = a.length - 1; 0 <= o; o--) e.css("transform-style", "preserve-3d"), i = i || "preserve-3d" == e[0].style[a[o]];
                return t && void 0 !== e[0].style[s[4]] && (e.attr("id", "ls-test3d").appendTo($), t = 3 === e[0].offsetHeight && 9 === e[0].offsetLeft, e.remove()), t && i
            },
            isOld: -1 !== navigator.userAgent.indexOf("rident/5")
        }, J.initializedPlugins = {}, J.timeouts = {}, J.intervals = {}, J.debug = {
            options: {}
        }, J.plugin = {
            version: "7.8.0",
            release: "stable",
            releaseDate: "2023. 08. 11."
        }, J.slider.load()
    }
}(jQuery);