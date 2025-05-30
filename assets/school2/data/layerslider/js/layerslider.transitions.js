/*
 * 2D & 3D Transitions for LayerSlider
 *
 * (c) 2011-2023 George Krupa, John Gera & Kreatura Media
 *
 * LayerSlider home:		https://layerslider.com/
 * Licensing:			https://layerslider.com/licensing/
 */



var layerSliderTransitions = {
        t2d: [{
            n: "a b c",
            r: 1,
            c: 1,
            t: {
                de: 0,
                sq: "fw"
            },
            tr: {
                tp: "sl",
                ea: "e5",
                du: 1e3,
                di: "l"
            }
        }, {
            n: "a b d",
            r: 1,
            c: 1,
            t: {
                de: 0,
                sq: "fw"
            },
            tr: {
                tp: "sl",
                ea: "e5",
                du: 1e3,
                di: "r"
            }
        }, {
            n: "a b e",
            r: 1,
            c: 1,
            t: {
                de: 0,
                sq: "fw"
            },
            tr: {
                tp: "sl",
                ea: "e5",
                du: 1e3,
                di: "t"
            }
        }, {
            n: "a b f",
            r: 1,
            c: 1,
            t: {
                de: 0,
                sq: "fw"
            },
            tr: {
                tp: "sl",
                ea: "e5",
                du: 1e3,
                di: "b"
            }
        }, {
            n: "g",
            r: 1,
            c: 1,
            t: {
                de: 0,
                sq: "fw"
            },
            tr: {
                tp: "f",
                ea: "e5",
                du: 1e3,
                di: "l"
            }
        }, {
            n: "h i j",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 30,
                sq: "fw"
            },
            tr: {
                tp: "f",
                ea: "e10",
                du: 1e3,
                di: "l"
            }
        }, {
            n: "h i k",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 30,
                sq: "rv"
            },
            tr: {
                tp: "f",
                ea: "e10",
                du: 1e3,
                di: "l"
            }
        }, {
            n: "h i l",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 30,
                sq: "cf"
            },
            tr: {
                tp: "f",
                ea: "e10",
                du: 1e3,
                di: "l"
            }
        }, {
            n: "h i m",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 30,
                sq: "cr"
            },
            tr: {
                tp: "f",
                ea: "e10",
                du: 1e3,
                di: "l"
            }
        }, {
            n: "h i n",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 30,
                sq: "rnd"
            },
            tr: {
                tp: "f",
                ea: "e10",
                du: 1e3,
                di: "l"
            }
        }, {
            n: "o h b c",
            r: 1,
            c: 35,
            t: {
                de: 25,
                sq: "rv"
            },
            tr: {
                tp: "f",
                ea: "e1",
                du: 750,
                di: "l"
            }
        }, {
            n: "o h b d",
            r: 1,
            c: 35,
            t: {
                de: 25,
                sq: "fw"
            },
            tr: {
                tp: "f",
                ea: "e11",
                du: 750,
                di: "l"
            }
        }, {
            n: "o h b e",
            r: 35,
            c: 1,
            t: {
                de: 25,
                sq: "cr"
            },
            tr: {
                tp: "f",
                ea: "e11",
                du: 750,
                di: "l"
            }
        }, {
            n: "o h b f",
            r: 35,
            c: 1,
            t: {
                de: 25,
                sq: "cf"
            },
            tr: {
                tp: "f",
                ea: "e11",
                du: 750,
                di: "l"
            }
        }, {
            n: "o a b c",
            r: 1,
            c: 25,
            t: {
                de: 30,
                sq: "rv"
            },
            tr: {
                tp: "sl",
                ea: "e11",
                du: 350,
                di: "l"
            }
        }, {
            n: "o a b d",
            r: 1,
            c: 25,
            t: {
                de: 30,
                sq: "fw"
            },
            tr: {
                tp: "sl",
                ea: "e11",
                du: 350,
                di: "r"
            }
        }, {
            n: "o p b e",
            r: 25,
            c: 1,
            t: {
                de: 30,
                sq: "cr"
            },
            tr: {
                tp: "sl",
                ea: "e11",
                du: 350,
                di: "t"
            }
        }, {
            n: "o a b f",
            r: 25,
            c: 1,
            t: {
                de: 30,
                sq: "cf"
            },
            tr: {
                tp: "sl",
                ea: "e11",
                du: 350,
                di: "b"
            }
        }, {
            n: "a i q c n",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 50,
                sq: "rnd"
            },
            tr: {
                tp: "sl",
                ea: "e10",
                du: 500,
                di: "r"
            }
        }, {
            n: "a i q d n",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 50,
                sq: "rnd"
            },
            tr: {
                tp: "sl",
                ea: "e10",
                du: 500,
                di: "l"
            }
        }, {
            n: "a i q e n",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 50,
                sq: "rnd"
            },
            tr: {
                tp: "sl",
                ea: "e10",
                du: 500,
                di: "b"
            }
        }, {
            n: "a i q f n",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 50,
                sq: "rnd"
            },
            tr: {
                tp: "sl",
                ea: "e10",
                du: 500,
                di: "t"
            }
        }, {
            n: "a r i q r s",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 50,
                sq: "rnd"
            },
            tr: {
                tp: "sl",
                ea: "e10",
                du: 500,
                di: "rnd"
            }
        }, {
            n: "a t q c u",
            r: [7, 11],
            c: 1,
            t: {
                de: 100,
                sq: "fw"
            },
            tr: {
                tp: "sl",
                ea: "e11",
                du: 600,
                di: "r"
            }
        }, {
            n: "a t q c v",
            r: [7, 11],
            c: 1,
            t: {
                de: 100,
                sq: "rv"
            },
            tr: {
                tp: "sl",
                ea: "e11",
                du: 600,
                di: "r"
            }
        }, {
            n: "a t q c n",
            r: [7, 11],
            c: 1,
            t: {
                de: 100,
                sq: "rnd"
            },
            tr: {
                tp: "sl",
                ea: "e11",
                du: 600,
                di: "r"
            }
        }, {
            n: "a t q d u",
            r: [7, 11],
            c: 1,
            t: {
                de: 100,
                sq: "fw"
            },
            tr: {
                tp: "sl",
                ea: "e11",
                du: 600,
                di: "l"
            }
        }, {
            n: "a t q d v",
            r: [7, 11],
            c: 1,
            t: {
                de: 100,
                sq: "rv"
            },
            tr: {
                tp: "sl",
                ea: "e11",
                du: 600,
                di: "l"
            }
        }, {
            n: "a t q d n",
            r: [7, 11],
            c: 1,
            t: {
                de: 100,
                sq: "rnd"
            },
            tr: {
                tp: "sl",
                ea: "e11",
                du: 600,
                di: "l"
            }
        }, {
            n: "a t b f q e u",
            r: [7, 11],
            c: 1,
            t: {
                de: 100,
                sq: "fw"
            },
            tr: {
                tp: "sl",
                ea: "e11",
                du: 600,
                di: "b"
            }
        }, {
            n: "a t b f q e n",
            r: [7, 11],
            c: 1,
            t: {
                de: 100,
                sq: "rnd"
            },
            tr: {
                tp: "sl",
                ea: "e11",
                du: 600,
                di: "b"
            }
        }, {
            n: "a t b e q f v",
            r: [7, 11],
            c: 1,
            t: {
                de: 100,
                sq: "rv"
            },
            tr: {
                tp: "sl",
                ea: "e11",
                du: 600,
                di: "t"
            }
        }, {
            n: "a t b e q f n",
            r: [7, 11],
            c: 1,
            t: {
                de: 100,
                sq: "rnd"
            },
            tr: {
                tp: "sl",
                ea: "e11",
                du: 600,
                di: "t"
            }
        }, {
            n: "a w q e u",
            r: 1,
            c: [12, 16],
            t: {
                de: 75,
                sq: "fw"
            },
            tr: {
                tp: "sl",
                ea: "e11",
                du: 600,
                di: "b"
            }
        }, {
            n: "a w q e v",
            r: 1,
            c: [12, 16],
            t: {
                de: 75,
                sq: "rv"
            },
            tr: {
                tp: "sl",
                ea: "e11",
                du: 600,
                di: "b"
            }
        }, {
            n: "a w q e n",
            r: 1,
            c: [12, 16],
            t: {
                de: 75,
                sq: "rnd"
            },
            tr: {
                tp: "sl",
                ea: "e11",
                du: 600,
                di: "b"
            }
        }, {
            n: "a w q f u",
            r: 1,
            c: [12, 16],
            t: {
                de: 75,
                sq: "fw"
            },
            tr: {
                tp: "sl",
                ea: "e11",
                du: 600,
                di: "t"
            }
        }, {
            n: "a w q f v",
            r: 1,
            c: [12, 16],
            t: {
                de: 75,
                sq: "rv"
            },
            tr: {
                tp: "sl",
                ea: "e11",
                du: 600,
                di: "t"
            }
        }, {
            n: "a w q f n",
            r: 1,
            c: [12, 16],
            t: {
                de: 75,
                sq: "rnd"
            },
            tr: {
                tp: "sl",
                ea: "e11",
                du: 600,
                di: "t"
            }
        }, {
            n: "a w b d q c u",
            r: 1,
            c: [12, 16],
            t: {
                de: 75,
                sq: "fw"
            },
            tr: {
                tp: "sl",
                ea: "e11",
                du: 600,
                di: "r"
            }
        }, {
            n: "a w b d q c n",
            r: 1,
            c: [12, 16],
            t: {
                de: 75,
                sq: "rnd"
            },
            tr: {
                tp: "sl",
                ea: "e11",
                du: 600,
                di: "r"
            }
        }, {
            n: "a w b c q d v",
            r: 1,
            c: [12, 16],
            t: {
                de: 75,
                sq: "rv"
            },
            tr: {
                tp: "sl",
                ea: "e11",
                du: 600,
                di: "l"
            }
        }, {
            n: "a w b c q d n",
            r: 1,
            c: [12, 16],
            t: {
                de: 75,
                sq: "rnd"
            },
            tr: {
                tp: "sl",
                ea: "e11",
                du: 600,
                di: "l"
            }
        }, {
            n: "h x a i q c n",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 50,
                sq: "rnd"
            },
            tr: {
                tp: "mx",
                ea: "e10",
                du: 500,
                di: "r"
            }
        }, {
            n: "h x a i q d n",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 50,
                sq: "rnd"
            },
            tr: {
                tp: "mx",
                ea: "e10",
                du: 500,
                di: "l"
            }
        }, {
            n: "h x a i q e n",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 50,
                sq: "rnd"
            },
            tr: {
                tp: "mx",
                ea: "e10",
                du: 500,
                di: "b"
            }
        }, {
            n: "h x a i q f n",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 50,
                sq: "rnd"
            },
            tr: {
                tp: "mx",
                ea: "e10",
                du: 500,
                di: "t"
            }
        }, {
            n: "h x a r i q r s",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 50,
                sq: "rnd"
            },
            tr: {
                tp: "mx",
                ea: "e10",
                du: 500,
                di: "rnd"
            }
        }, {
            n: "h x a i b y u",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 50,
                sq: "fw"
            },
            tr: {
                tp: "mx",
                ea: "e10",
                du: 500,
                di: "tl"
            }
        }, {
            n: "h x a i b z v",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 50,
                sq: "rv"
            },
            tr: {
                tp: "mx",
                ea: "e10",
                du: 500,
                di: "br"
            }
        }, {
            n: "h x a i b A n",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 50,
                sq: "rnd"
            },
            tr: {
                tp: "mx",
                ea: "e10",
                du: 500,
                di: "tr"
            }
        }, {
            n: "h x a i b B n",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 50,
                sq: "rnd"
            },
            tr: {
                tp: "mx",
                ea: "e10",
                du: 500,
                di: "bl"
            }
        }, {
            n: "h x a t q c u",
            r: [7, 11],
            c: 1,
            t: {
                de: 100,
                sq: "fw"
            },
            tr: {
                tp: "mx",
                ea: "e11",
                du: 600,
                di: "r"
            }
        }, {
            n: "h x a t q c v",
            r: [7, 11],
            c: 1,
            t: {
                de: 100,
                sq: "rv"
            },
            tr: {
                tp: "mx",
                ea: "e11",
                du: 600,
                di: "r"
            }
        }, {
            n: "h x a t q c n",
            r: [7, 11],
            c: 1,
            t: {
                de: 100,
                sq: "rnd"
            },
            tr: {
                tp: "mx",
                ea: "e11",
                du: 600,
                di: "r"
            }
        }, {
            n: "h x a t q d u",
            r: [7, 11],
            c: 1,
            t: {
                de: 100,
                sq: "fw"
            },
            tr: {
                tp: "mx",
                ea: "e11",
                du: 600,
                di: "l"
            }
        }, {
            n: "h x a t q d v",
            r: [7, 11],
            c: 1,
            t: {
                de: 100,
                sq: "rv"
            },
            tr: {
                tp: "mx",
                ea: "e11",
                du: 600,
                di: "l"
            }
        }, {
            n: "h x a t q d n",
            r: [7, 11],
            c: 1,
            t: {
                de: 100,
                sq: "rnd"
            },
            tr: {
                tp: "mx",
                ea: "e11",
                du: 600,
                di: "l"
            }
        }, {
            n: "h x a t b f q e u",
            r: [7, 11],
            c: 1,
            t: {
                de: 100,
                sq: "fw"
            },
            tr: {
                tp: "mx",
                ea: "e11",
                du: 600,
                di: "b"
            }
        }, {
            n: "h x a t b f q e n",
            r: [7, 11],
            c: 1,
            t: {
                de: 100,
                sq: "rnd"
            },
            tr: {
                tp: "mx",
                ea: "e11",
                du: 600,
                di: "b"
            }
        }, {
            n: "h x a t b e q f v",
            r: [7, 11],
            c: 1,
            t: {
                de: 100,
                sq: "rv"
            },
            tr: {
                tp: "mx",
                ea: "e11",
                du: 600,
                di: "t"
            }
        }, {
            n: "h x a t b e q f n",
            r: [7, 11],
            c: 1,
            t: {
                de: 100,
                sq: "rnd"
            },
            tr: {
                tp: "mx",
                ea: "e11",
                du: 600,
                di: "t"
            }
        }, {
            n: "h x a w q e u",
            r: 1,
            c: [12, 16],
            t: {
                de: 75,
                sq: "fw"
            },
            tr: {
                tp: "mx",
                ea: "e11",
                du: 600,
                di: "b"
            }
        }, {
            n: "h x a w q e v",
            r: 1,
            c: [12, 16],
            t: {
                de: 75,
                sq: "rv"
            },
            tr: {
                tp: "mx",
                ea: "e11",
                du: 600,
                di: "b"
            }
        }, {
            n: "h x a w q e n",
            r: 1,
            c: [12, 16],
            t: {
                de: 75,
                sq: "rnd"
            },
            tr: {
                tp: "mx",
                ea: "e11",
                du: 600,
                di: "b"
            }
        }, {
            n: "h x a w q f u",
            r: 1,
            c: [12, 16],
            t: {
                de: 75,
                sq: "fw"
            },
            tr: {
                tp: "mx",
                ea: "e11",
                du: 600,
                di: "t"
            }
        }, {
            n: "h x a w q f v",
            r: 1,
            c: [12, 16],
            t: {
                de: 75,
                sq: "rv"
            },
            tr: {
                tp: "mx",
                ea: "e11",
                du: 600,
                di: "t"
            }
        }, {
            n: "h x a w q f n",
            r: 1,
            c: [12, 16],
            t: {
                de: 75,
                sq: "rnd"
            },
            tr: {
                tp: "mx",
                ea: "e11",
                du: 600,
                di: "t"
            }
        }, {
            n: "h x a w b d q c u",
            r: 1,
            c: [12, 16],
            t: {
                de: 75,
                sq: "fw"
            },
            tr: {
                tp: "mx",
                ea: "e11",
                du: 600,
                di: "r"
            }
        }, {
            n: "h x a w b d q c n",
            r: 1,
            c: [12, 16],
            t: {
                de: 75,
                sq: "rnd"
            },
            tr: {
                tp: "mx",
                ea: "e11",
                du: 600,
                di: "r"
            }
        }, {
            n: "h x a w b c q d v",
            r: 1,
            c: [12, 16],
            t: {
                de: 75,
                sq: "rv"
            },
            tr: {
                tp: "mx",
                ea: "e11",
                du: 600,
                di: "l"
            }
        }, {
            n: "h x a w b c q d n",
            r: 1,
            c: [12, 16],
            t: {
                de: 75,
                sq: "rnd"
            },
            tr: {
                tp: "mx",
                ea: "e11",
                du: 600,
                di: "l"
            }
        }, {
            n: "C",
            r: 1,
            c: 1,
            t: {
                de: 0,
                sq: "fw"
            },
            tr: {
                tp: "mx",
                ea: "e5",
                du: 750,
                di: "l",
                _s: .5
            }
        }, {
            n: "C t",
            r: 4,
            c: 1,
            t: {
                de: 50,
                sq: "fw"
            },
            tr: {
                tp: "mx",
                ea: "e5",
                du: 750,
                di: "l",
                _s: .5
            }
        }, {
            n: "C D",
            r: 1,
            c: 4,
            t: {
                de: 50,
                sq: "fw"
            },
            tr: {
                tp: "mx",
                ea: "e5",
                du: 750,
                di: "l",
                _s: .5
            }
        }, {
            n: "C i E",
            r: 3,
            c: 4,
            t: {
                de: 35,
                sq: "fw"
            },
            tr: {
                tp: "mx",
                ea: "e5",
                du: 750,
                di: "l",
                _s: .5,
                _rY: 90
            }
        }, {
            n: "C i F",
            r: 3,
            c: 4,
            t: {
                de: 35,
                sq: "fw"
            },
            tr: {
                tp: "mx",
                ea: "e5",
                du: 750,
                di: "t",
                _s: .5,
                _rX: -90
            }
        }, {
            n: "G i E",
            r: 3,
            c: 4,
            t: {
                de: 15,
                sq: "fw"
            },
            tr: {
                tp: "mx",
                ea: "e5",
                du: 750,
                di: "l",
                _s: .5,
                _rY: 90
            }
        }, {
            n: "G i F",
            r: 3,
            c: 4,
            t: {
                de: 15,
                sq: "fw"
            },
            tr: {
                tp: "mx",
                ea: "e5",
                du: 750,
                di: "t",
                _s: .5,
                _rX: -90
            }
        }, {
            n: "C H t",
            r: 4,
            c: 1,
            t: {
                de: 50,
                sq: "fw"
            },
            tr: {
                tp: "mx",
                ea: "e5",
                du: 750,
                di: "r",
                _s: .5
            }
        }, {
            n: "C H D",
            r: 1,
            c: 4,
            t: {
                de: 50,
                sq: "fw"
            },
            tr: {
                tp: "mx",
                ea: "e5",
                du: 750,
                di: "l",
                _s: .5
            }
        }, {
            n: "I J b d",
            r: 1,
            c: 1,
            t: {
                de: 0,
                sq: "fw"
            },
            tr: {
                tp: "sl",
                ea: "e10",
                du: 750,
                di: "r",
                _rY: 90
            }
        }, {
            n: "I J b c",
            r: 1,
            c: 1,
            t: {
                de: 0,
                sq: "fw"
            },
            tr: {
                tp: "sl",
                ea: "e10",
                du: 750,
                di: "l",
                _rY: -90
            }
        }, {
            n: "I J b f",
            r: 1,
            c: 1,
            t: {
                de: 0,
                sq: "fw"
            },
            tr: {
                tp: "sl",
                ea: "e10",
                du: 750,
                di: "b",
                _rX: -90
            }
        }, {
            n: "I J b e",
            r: 1,
            c: 1,
            t: {
                de: 0,
                sq: "fw"
            },
            tr: {
                tp: "sl",
                ea: "e10",
                du: 750,
                di: "t",
                _rX: 90
            }
        }, {
            n: "I i b d",
            r: [3, 4],
            c: [3, 4],
            t: {
                de: 55,
                sq: "fw"
            },
            tr: {
                tp: "f",
                ea: "e10",
                du: 750,
                di: "l",
                _rY: 90
            }
        }, {
            n: "I i b c",
            r: [3, 4],
            c: [3, 4],
            t: {
                de: 55,
                sq: "rv"
            },
            tr: {
                tp: "f",
                ea: "e10",
                du: 750,
                di: "l",
                _rY: -90
            }
        }, {
            n: "I i b f",
            r: [3, 4],
            c: [3, 4],
            t: {
                de: 55,
                sq: "fw"
            },
            tr: {
                tp: "f",
                ea: "e10",
                du: 750,
                di: "l",
                _rX: -90
            }
        }, {
            n: "I i b e",
            r: [3, 4],
            c: [3, 4],
            t: {
                de: 55,
                sq: "rv"
            },
            tr: {
                tp: "f",
                ea: "e10",
                du: 750,
                di: "l",
                _rX: 90
            }
        }, {
            n: "I t b f",
            r: [6, 12],
            c: 1,
            t: {
                de: 55,
                sq: "fw"
            },
            tr: {
                tp: "f",
                ea: "e10",
                du: 750,
                di: "l",
                _rX: 90
            }
        }, {
            n: "I t b e",
            r: [6, 12],
            c: 1,
            t: {
                de: 55,
                sq: "rv"
            },
            tr: {
                tp: "f",
                ea: "e10",
                du: 750,
                di: "l",
                _rX: -90
            }
        }, {
            n: "I D b d",
            r: 1,
            c: [6, 12],
            t: {
                de: 55,
                sq: "fw"
            },
            tr: {
                tp: "f",
                ea: "e10",
                du: 750,
                di: "l",
                _rY: -90
            }
        }, {
            n: "I D b c",
            r: 1,
            c: [6, 12],
            t: {
                de: 55,
                sq: "rv"
            },
            tr: {
                tp: "f",
                ea: "e10",
                du: 750,
                di: "l",
                _rY: 90
            }
        }, {
            n: "K t b d",
            r: [3, 10],
            c: 1,
            t: {
                de: 55,
                sq: "fw"
            },
            tr: {
                tp: "f",
                ea: "e10",
                du: 750,
                di: "l",
                _rY: 90
            }
        }, {
            n: "K t b c",
            r: [3, 10],
            c: 1,
            t: {
                de: 55,
                sq: "rv"
            },
            tr: {
                tp: "f",
                ea: "e10",
                du: 750,
                di: "l",
                _rY: -90
            }
        }, {
            n: "K D b f",
            r: 1,
            c: [3, 10],
            t: {
                de: 55,
                sq: "fw"
            },
            tr: {
                tp: "f",
                ea: "e10",
                du: 750,
                di: "l",
                _rX: -90
            }
        }, {
            n: "K D b e",
            r: 1,
            c: [3, 10],
            t: {
                de: 55,
                sq: "rv"
            },
            tr: {
                tp: "f",
                ea: "e10",
                du: 750,
                di: "l",
                _rX: 90
            }
        }, {
            n: "K x L J b d",
            r: 1,
            c: 1,
            t: {
                de: 75,
                sq: "fw"
            },
            tr: {
                tp: "mx",
                ea: "e10",
                du: 750,
                di: "r",
                _s: .1,
                _r: -90,
                _rY: 90
            }
        }, {
            n: "K x L J b c",
            r: 1,
            c: 1,
            t: {
                de: 75,
                sq: "fw"
            },
            tr: {
                tp: "mx",
                ea: "e10",
                du: 750,
                di: "l",
                _s: .1,
                _r: 90,
                _rY: -90
            }
        }, {
            n: "K x L i b d",
            r: [3, 4],
            c: [3, 4],
            t: {
                de: 55,
                sq: "fw"
            },
            tr: {
                tp: "mx",
                ea: "e10",
                du: 750,
                di: "r",
                _r: -45
            }
        }, {
            n: "K x L i b c",
            r: [3, 4],
            c: [3, 4],
            t: {
                de: 55,
                sq: "fw"
            },
            tr: {
                tp: "mx",
                ea: "e10",
                du: 750,
                di: "l",
                _r: -45
            }
        }, {
            n: "K x L i b r",
            r: [3, 4],
            c: [3, 4],
            t: {
                de: 55,
                sq: "rnd"
            },
            tr: {
                tp: "mx",
                ea: "e10",
                du: 750,
                di: "rnd",
                _r: -45
            }
        }, {
            n: "M J N",
            r: 1,
            c: 1,
            t: {
                de: 0,
                sq: "fw"
            },
            tr: {
                tp: "f",
                ea: "e10",
                du: 1500,
                di: "l",
                _s: .8
            }
        }, {
            n: "M J b O",
            r: 1,
            c: 1,
            t: {
                de: 0,
                sq: "fw"
            },
            tr: {
                tp: "f",
                ea: "e11",
                du: 1500,
                di: "l",
                _s: 1.2
            }
        }, {
            n: "M i r",
            r: [3, 4],
            c: [3, 4],
            t: {
                de: 35,
                sq: "rnd"
            },
            tr: {
                tp: "f",
                ea: "e10",
                du: 750,
                di: "l",
                _s: .1
            }
        }, {
            n: "M i b O r",
            r: [3, 4],
            c: [3, 4],
            t: {
                de: 35,
                sq: "rnd"
            },
            tr: {
                tp: "f",
                ea: "e10",
                du: 750,
                di: "l",
                _s: 2
            }
        }, {
            n: "M N x L i r",
            r: [3, 4],
            c: [3, 4],
            t: {
                de: 35,
                sq: "rnd"
            },
            tr: {
                tp: "f",
                ea: "e10",
                du: 750,
                di: "l",
                _s: .1,
                _r: 90
            }
        }, {
            n: "M x L i b O r",
            r: [3, 4],
            c: [3, 4],
            t: {
                de: 35,
                sq: "rnd"
            },
            tr: {
                tp: "f",
                ea: "e10",
                du: 750,
                di: "l",
                _s: 2,
                _r: -90
            }
        }, {
            n: "P i Q",
            r: 3,
            c: 4,
            t: {
                de: 15,
                sq: "fw"
            },
            tr: {
                tp: "sl",
                ea: "e11",
                du: 850,
                di: "tr"
            }
        }, {
            n: "P t E",
            r: 6,
            c: 1,
            t: {
                de: 0,
                sq: "fw"
            },
            tr: {
                tp: "mx",
                ea: "e10",
                du: 750,
                di: "l"
            }
        }, {
            n: "P t F",
            r: 6,
            c: 1,
            t: {
                de: 0,
                sq: "fw"
            },
            tr: {
                tp: "mx",
                ea: "e10",
                du: 750,
                di: "t"
            }
        }, {
            n: "P D E",
            r: 1,
            c: 8,
            t: {
                de: 0,
                sq: "fw"
            },
            tr: {
                tp: "mx",
                ea: "e10",
                du: 750,
                di: "l"
            }
        }, {
            n: "P D F",
            r: 1,
            c: 8,
            t: {
                de: 0,
                sq: "fw"
            },
            tr: {
                tp: "mx",
                ea: "e10",
                du: 750,
                di: "t"
            }
        }, {
            n: "r R q d",
            r: 10,
            c: 1,
            t: {
                de: 10,
                sq: "rnd"
            },
            tr: {
                du: 1500,
                ea: "e11",
                tp: "sl",
                di: "l"
            }
        }, {
            n: "r R q c",
            r: 10,
            c: 1,
            t: {
                de: 10,
                sq: "rnd"
            },
            tr: {
                du: 1500,
                ea: "e11",
                tp: "sl",
                di: "r"
            }
        }, {
            n: "r R q e",
            r: 1,
            c: 15,
            t: {
                de: 10,
                sq: "rnd"
            },
            tr: {
                du: 1500,
                ea: "e11",
                tp: "sl",
                di: "b"
            }
        }, {
            n: "r R q f",
            r: 1,
            c: 15,
            t: {
                de: 10,
                sq: "rnd"
            },
            tr: {
                du: 1500,
                ea: "e11",
                tp: "sl",
                di: "t"
            }
        }, {
            n: "S b d",
            r: 25,
            c: 1,
            t: {
                de: 0,
                sq: "rv"
            },
            tr: {
                tp: "sc",
                ea: "e11",
                du: 2e3,
                di: "r"
            }
        }, {
            n: "S b c",
            r: 25,
            c: 1,
            t: {
                de: 0,
                sq: "rv"
            },
            tr: {
                tp: "sc",
                ea: "e11",
                du: 2e3,
                di: "l"
            }
        }, {
            n: "S b T",
            r: 25,
            c: 1,
            t: {
                de: 0,
                sq: "rv"
            },
            tr: {
                tp: "sc",
                ea: "e11",
                du: 2e3,
                di: "c"
            }
        }, {
            n: "U b d",
            r: 25,
            c: 1,
            t: {
                de: 0,
                sq: "fw"
            },
            tr: {
                tp: "sc",
                ea: "e11",
                du: 2e3,
                di: "r"
            }
        }, {
            n: "U b c",
            r: 25,
            c: 1,
            t: {
                de: 0,
                sq: "fw"
            },
            tr: {
                tp: "sc",
                ea: "e11",
                du: 2e3,
                di: "l"
            }
        }, {
            n: "U b T",
            r: 25,
            c: 1,
            t: {
                de: 0,
                sq: "fw"
            },
            tr: {
                tp: "sc",
                ea: "e11",
                du: 2e3,
                di: "c"
            }
        }, {
            n: "V b d",
            r: 25,
            c: 1,
            t: {
                de: 0,
                sq: "c"
            },
            tr: {
                tp: "sc",
                ea: "e11",
                du: 2e3,
                di: "r"
            }
        }, {
            n: "V b c",
            r: 25,
            c: 1,
            t: {
                de: 0,
                sq: "c"
            },
            tr: {
                tp: "sc",
                ea: "e11",
                du: 2e3,
                di: "l"
            }
        }, {
            n: "V b T",
            r: 25,
            c: 1,
            t: {
                de: 0,
                sq: "c"
            },
            tr: {
                tp: "sc",
                ea: "e11",
                du: 2e3,
                di: "c"
            }
        }, {
            n: "W b d",
            r: 25,
            c: 1,
            t: {
                de: 0,
                sq: "e"
            },
            tr: {
                tp: "sc",
                ea: "e11",
                du: 2e3,
                di: "r"
            }
        }, {
            n: "W b c",
            r: 25,
            c: 1,
            t: {
                de: 0,
                sq: "e"
            },
            tr: {
                tp: "sc",
                ea: "e11",
                du: 2e3,
                di: "l"
            }
        }, {
            n: "W b T",
            r: 25,
            c: 1,
            t: {
                de: 0,
                sq: "e"
            },
            tr: {
                tp: "sc",
                ea: "e11",
                du: 2e3,
                di: "c"
            }
        }, {
            n: "X b f",
            r: 1,
            c: 25,
            t: {
                de: 0,
                sq: "rv"
            },
            tr: {
                tp: "sc",
                ea: "e11",
                du: 2e3,
                di: "b"
            }
        }, {
            n: "X b e",
            r: 1,
            c: 25,
            t: {
                de: 0,
                sq: "rv"
            },
            tr: {
                tp: "sc",
                ea: "e11",
                du: 2e3,
                di: "t"
            }
        }, {
            n: "X b Y",
            r: 1,
            c: 25,
            t: {
                de: 0,
                sq: "rv"
            },
            tr: {
                tp: "sc",
                ea: "e11",
                du: 2e3,
                di: "m"
            }
        }, {
            n: "Z b f",
            r: 1,
            c: 25,
            t: {
                de: 0,
                sq: "fw"
            },
            tr: {
                tp: "sc",
                ea: "e11",
                du: 2e3,
                di: "b"
            }
        }, {
            n: "Z b e",
            r: 1,
            c: 25,
            t: {
                de: 0,
                sq: "fw"
            },
            tr: {
                tp: "sc",
                ea: "e11",
                du: 2e3,
                di: "t"
            }
        }, {
            n: "Z b Y",
            r: 1,
            c: 25,
            t: {
                de: 0,
                sq: "fw"
            },
            tr: {
                tp: "sc",
                ea: "e11",
                du: 2e3,
                di: "m"
            }
        }, {
            n: "0 b f",
            r: 1,
            c: 25,
            t: {
                de: 0,
                sq: "c"
            },
            tr: {
                tp: "sc",
                ea: "e11",
                du: 2e3,
                di: "b"
            }
        }, {
            n: "0 b e",
            r: 1,
            c: 25,
            t: {
                de: 0,
                sq: "c"
            },
            tr: {
                tp: "sc",
                ea: "e11",
                du: 2e3,
                di: "t"
            }
        }, {
            n: "0 b Y",
            r: 1,
            c: 25,
            t: {
                de: 0,
                sq: "c"
            },
            tr: {
                tp: "sc",
                ea: "e11",
                du: 2e3,
                di: "m"
            }
        }, {
            n: "W b f",
            r: 1,
            c: 25,
            t: {
                de: 0,
                sq: "e"
            },
            tr: {
                tp: "sc",
                ea: "e11",
                du: 2e3,
                di: "b"
            }
        }, {
            n: "W b e",
            r: 1,
            c: 25,
            t: {
                de: 0,
                sq: "e"
            },
            tr: {
                tp: "sc",
                ea: "e11",
                du: 2e3,
                di: "t"
            }
        }, {
            n: "W b Y",
            r: 1,
            c: 25,
            t: {
                de: 0,
                sq: "e"
            },
            tr: {
                tp: "sc",
                ea: "e11",
                du: 2e3,
                di: "m"
            }
        }, {
            n: "W E d q c",
            r: 25,
            c: 1,
            t: {
                de: 0,
                sq: "mr"
            },
            tr: {
                tp: "sc",
                ea: "e11",
                du: 2e3,
                di: "l"
            }
        }, {
            n: "W E c q d",
            r: 25,
            c: 1,
            t: {
                de: 0,
                sq: "mr"
            },
            tr: {
                tp: "sc",
                ea: "e11",
                du: 2e3,
                di: "r"
            }
        }, {
            n: "W F f q e",
            r: 1,
            c: 25,
            t: {
                de: 0,
                sq: "mr"
            },
            tr: {
                tp: "sc",
                ea: "e11",
                du: 2e3,
                di: "t"
            }
        }, {
            n: "W F e q f",
            r: 1,
            c: 25,
            t: {
                de: 0,
                sq: "mr"
            },
            tr: {
                tp: "sc",
                ea: "e11",
                du: 2e3,
                di: "b"
            }
        }, {
            n: "1 2 3 a b c",
            r: 100,
            c: 1,
            t: {
                de: 3,
                sq: "c"
            },
            tr: {
                tp: "sl",
                ea: "e14",
                du: 1e3,
                di: "l"
            }
        }, {
            n: "1 2 3 a b d",
            r: 100,
            c: 1,
            t: {
                de: 3,
                sq: "c"
            },
            tr: {
                tp: "sl",
                ea: "e14",
                du: 1e3,
                di: "r"
            }
        }, {
            n: "1 2 3 a b e",
            r: 1,
            c: 100,
            t: {
                de: 3,
                sq: "c"
            },
            tr: {
                tp: "sl",
                ea: "e14",
                du: 1e3,
                di: "t"
            }
        }, {
            n: "1 2 3 a b f",
            r: 1,
            c: 100,
            t: {
                de: 3,
                sq: "c"
            },
            tr: {
                tp: "sl",
                ea: "e14",
                du: 1e3,
                di: "b"
            }
        }, {
            n: "1 2 4 a b c",
            r: 100,
            c: 1,
            t: {
                de: 3,
                sq: "e"
            },
            tr: {
                tp: "sl",
                ea: "e14",
                du: 1e3,
                di: "l"
            }
        }, {
            n: "1 2 4 a b d",
            r: 100,
            c: 1,
            t: {
                de: 3,
                sq: "e"
            },
            tr: {
                tp: "sl",
                ea: "e14",
                du: 1e3,
                di: "r"
            }
        }, {
            n: "1 2 4 a b e",
            r: 1,
            c: 100,
            t: {
                de: 3,
                sq: "e"
            },
            tr: {
                tp: "sl",
                ea: "e14",
                du: 1e3,
                di: "t"
            }
        }, {
            n: "1 2 4 a b f",
            r: 1,
            c: 100,
            t: {
                de: 3,
                sq: "e"
            },
            tr: {
                tp: "sl",
                ea: "e14",
                du: 1e3,
                di: "b"
            }
        }, {
            n: "5 6 E",
            r: 50,
            c: 1,
            t: {
                de: 5,
                sq: "c"
            },
            tr: {
                tp: "sl",
                ea: "e14",
                du: 1e3,
                di: "rnd"
            }
        }, {
            n: "5 6 F",
            r: 1,
            c: 50,
            t: {
                de: 5,
                sq: "c"
            },
            tr: {
                tp: "sl",
                ea: "e14",
                du: 1e3,
                di: "rnd"
            }
        }, {
            n: "5 7 F",
            r: 1,
            c: 75,
            t: {
                de: 3,
                sq: "rnd"
            },
            tr: {
                du: 1e3,
                ea: "e13",
                tp: "sl",
                di: "b",
                _rX: 0,
                _rY: 0,
                _r: 10,
                _s: 1
            }
        }, {
            rc: 10,
            n: "5 i N",
            t: {
                de: 50,
                sq: "ri"
            },
            tr: {
                tp: "sc",
                ea: "e4",
                du: 500,
                di: "rnd",
                _s: 0,
                _o: 0
            }
        }, {
            rc: 10,
            n: "5 i O",
            t: {
                de: 50,
                sq: "ro"
            },
            tr: {
                tp: "sc",
                ea: "e4",
                du: 500,
                di: "rnd",
                _s: 0,
                _o: 0
            }
        }, {
            rc: "150px",
            n: "5 i L",
            t: {
                de: 10,
                sq: "e"
            },
            tr: {
                tp: "mx",
                ea: "e28",
                du: 650,
                di: "rnd",
                _o: 0,
                _r: 20,
                _br: 150
            }
        }, {
            rc: "150px",
            n: "5 8 N 9",
            t: {
                de: 5,
                sq: "rnd"
            },
            tr: {
                tp: "f",
                ea: "e25",
                du: 1e3,
                di: "n",
                _s: 0,
                _br: 400,
                _o: 0
            }
        }, {
            rc: "100px",
            n: "5 aa i",
            t: {
                de: 20,
                sq: "ri"
            },
            tr: {
                tp: "sl",
                ea: "e25",
                du: 1e3,
                di: "rnd",
                _o: 0,
                _s: 0
            }
        }, {
            n: "ba M q T E",
            r: 1,
            c: 70,
            t: {
                de: 10,
                sq: "c"
            },
            tr: {
                tp: "mx",
                ea: "e13",
                du: 1e3,
                di: "n",
                _sY: 1.5,
                _o: 0
            }
        }, {
            n: "ba M q ca E",
            r: 1,
            c: 70,
            t: {
                de: 10,
                sq: "e"
            },
            tr: {
                tp: "mx",
                ea: "e13",
                du: 1e3,
                di: "n",
                _sY: 1.5,
                _o: 0
            }
        }, {
            n: "ba M q T F",
            r: 70,
            c: 1,
            t: {
                de: 10,
                sq: "c"
            },
            tr: {
                tp: "mx",
                ea: "e13",
                du: 1e3,
                di: "n",
                _sX: 1.5,
                _o: 0
            }
        }, {
            n: "ba M q ca F",
            r: 70,
            c: 1,
            t: {
                de: 10,
                sq: "e"
            },
            tr: {
                tp: "mx",
                ea: "e13",
                du: 1e3,
                di: "n",
                _sX: 1.5,
                _o: 0
            }
        }, {
            n: "da q d",
            r: 50,
            c: 1,
            t: {
                de: 5,
                sq: "fw"
            },
            tr: {
                du: 1500,
                ea: "e11",
                tp: "sl",
                di: "l",
                _rX: 0,
                _rY: 0,
                _r: 90,
                _s: 1
            }
        }, {
            n: "da q c",
            r: 50,
            c: 1,
            t: {
                de: 5,
                sq: "fw"
            },
            tr: {
                du: 1500,
                ea: "e11",
                tp: "sl",
                di: "r",
                _rX: 0,
                _rY: 0,
                _r: 90,
                _s: 1
            }
        }, {
            n: "ea b c",
            r: 50,
            c: 1,
            t: {
                de: 5,
                sq: "rnd"
            },
            tr: {
                du: 1500,
                ea: "e26",
                tp: "sl",
                di: "l",
                _rX: 0,
                _rY: 0,
                _r: 0,
                _s: 1
            }
        }, {
            n: "ea b d",
            r: 50,
            c: 1,
            t: {
                de: 5,
                sq: "rnd"
            },
            tr: {
                du: 1500,
                ea: "e26",
                tp: "sl",
                di: "r",
                _rX: 0,
                _rY: 0,
                _r: 0,
                _s: 1
            }
        }, {
            n: "ea b f",
            r: 1,
            c: 50,
            t: {
                de: 5,
                sq: "rnd"
            },
            tr: {
                du: 1500,
                ea: "e26",
                tp: "sl",
                di: "b",
                _rX: 0,
                _rY: 0,
                _r: 0,
                _s: 1
            }
        }, {
            n: "ea b e",
            r: 1,
            c: 50,
            t: {
                de: 5,
                sq: "rnd"
            },
            tr: {
                du: 1500,
                ea: "e26",
                tp: "sl",
                di: "t",
                _rX: 0,
                _rY: 0,
                _r: 0,
                _s: 1
            }
        }, {
            n: "fa b c",
            r: 50,
            c: 1,
            t: {
                de: 5,
                sq: "fw"
            },
            tr: {
                du: 1500,
                ea: "e31",
                tp: "sl",
                di: "l",
                _rX: 0,
                _rY: 0,
                _r: 0,
                _s: 1
            }
        }, {
            n: "fa b d",
            r: 50,
            c: 1,
            t: {
                de: 5,
                sq: "fw"
            },
            tr: {
                du: 1500,
                ea: "e31",
                tp: "sl",
                di: "r",
                _rX: 0,
                _rY: 0,
                _r: 0,
                _s: 1
            }
        }, {
            n: "fa b f",
            r: 1,
            c: 50,
            t: {
                de: 5,
                sq: "fw"
            },
            tr: {
                du: 1500,
                ea: "e31",
                tp: "sl",
                di: "b",
                _rX: 0,
                _rY: 0,
                _r: 0,
                _s: 1
            }
        }, {
            n: "fa b e",
            r: 1,
            c: 50,
            t: {
                de: 5,
                sq: "fw"
            },
            tr: {
                du: 1500,
                ea: "e31",
                tp: "sl",
                di: "t",
                _rX: 0,
                _rY: 0,
                _r: 0,
                _s: 1
            }
        }],
        t3d: [{
            n: "ga J q c ha",
            r: 1,
            c: 1,
            t: {
                de: 75,
                sq: "fw"
            },
            an: {
                tr: {
                    _rY: 91
                },
                ea: "e9",
                du: 1e3,
                di: "h"
            },
            af: {
                tr: {
                    _rY: 180
                },
                ea: "e10",
                du: 1e3,
                di: "h"
            }
        }, {
            n: "ga J q d ha",
            r: 1,
            c: 1,
            t: {
                de: 75,
                sq: "fw"
            },
            an: {
                tr: {
                    _rY: -91
                },
                ea: "e9",
                du: 1e3,
                di: "h"
            },
            af: {
                tr: {
                    _rY: -180
                },
                ea: "e10",
                du: 1e3,
                di: "h"
            }
        }, {
            n: "ga J q e ha",
            r: 1,
            c: 1,
            t: {
                de: 75,
                sq: "fw"
            },
            an: {
                tr: {
                    _rX: -91
                },
                ea: "e9",
                du: 800,
                di: "v"
            },
            af: {
                tr: {
                    _rX: -180
                },
                ea: "e10",
                du: 800,
                di: "v"
            }
        }, {
            n: "ga J q f ha",
            r: 1,
            c: 1,
            t: {
                de: 75,
                sq: "fw"
            },
            an: {
                tr: {
                    _rX: 91
                },
                ea: "e9",
                du: 800,
                di: "v"
            },
            af: {
                tr: {
                    _rX: 180
                },
                ea: "e10",
                du: 800,
                di: "v"
            }
        }, {
            n: "ga i q c ha",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 75,
                sq: "fw"
            },
            an: {
                tr: {
                    _rY: 180
                },
                ea: "e11",
                du: 1e3,
                di: "h"
            }
        }, {
            n: "ga i q d ha",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 75,
                sq: "rv"
            },
            an: {
                tr: {
                    _rY: -180
                },
                ea: "e11",
                du: 1e3,
                di: "h"
            }
        }, {
            n: "ga i q e ha",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 75,
                sq: "cf"
            },
            an: {
                tr: {
                    _rX: -180
                },
                ea: "e11",
                du: 1e3,
                di: "v"
            }
        }, {
            n: "ga i q f ha",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 75,
                sq: "cr"
            },
            an: {
                tr: {
                    _rX: 180
                },
                ea: "e11",
                du: 1e3,
                di: "v"
            }
        }, {
            n: "E ga i r ha",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 75,
                sq: "rnd"
            },
            an: {
                tr: {
                    _rY: 180
                },
                ea: "e11",
                du: 1300,
                di: "h"
            }
        }, {
            n: "F ga i r ha",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 75,
                sq: "rnd"
            },
            an: {
                tr: {
                    _rX: 180
                },
                ea: "e11",
                du: 1300,
                di: "v"
            }
        }, {
            n: "M x ga i q c ha",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 75,
                sq: "fw"
            },
            be: {
                tr: {
                    _s3: .95
                },
                du: 450,
                ea: "e14"
            },
            an: {
                tr: {
                    _rY: 180
                },
                ea: "e29",
                du: 1e3,
                di: "h"
            },
            af: {
                du: 350,
                ea: "e29"
            }
        }, {
            n: "M x ga i q d ha",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 75,
                sq: "rv"
            },
            be: {
                tr: {
                    _s3: .95
                },
                du: 450,
                ea: "e14"
            },
            an: {
                tr: {
                    _rY: -180
                },
                ea: "e29",
                du: 1e3,
                di: "h"
            },
            af: {
                du: 350,
                ea: "e29"
            }
        }, {
            n: "M x ga i q e ha",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 75,
                sq: "cf"
            },
            be: {
                tr: {
                    _s3: .95
                },
                du: 450,
                ea: "e14"
            },
            an: {
                tr: {
                    _rX: -180
                },
                ea: "e29",
                du: 1e3,
                di: "v"
            },
            af: {
                du: 350,
                ea: "e29"
            }
        }, {
            n: "M x ga i q f ha",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 75,
                sq: "cr"
            },
            be: {
                tr: {
                    _s3: .95
                },
                du: 450,
                ea: "e14"
            },
            an: {
                tr: {
                    _rX: 180
                },
                ea: "e29",
                du: 1e3,
                di: "v"
            },
            af: {
                du: 350,
                ea: "e29"
            }
        }, {
            n: "M x E ga i r ha",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 75,
                sq: "rnd"
            },
            be: {
                tr: {
                    _s3: .95,
                    _rX: 30
                },
                du: 450,
                ea: "e14"
            },
            an: {
                tr: {
                    _rY: 180,
                    _rX: -30
                },
                ea: "e29",
                du: 1300,
                di: "h"
            },
            af: {
                tr: {
                    _rX: 0
                },
                du: 350,
                ea: "e29"
            }
        }, {
            n: "M x F ga i r ha",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 75,
                sq: "rnd"
            },
            be: {
                tr: {
                    _s3: .95,
                    _rY: -15
                },
                du: 450,
                ea: "e14"
            },
            an: {
                tr: {
                    _rX: 180,
                    _rY: 15
                },
                ea: "e29",
                du: 1300,
                di: "v"
            },
            af: {
                tr: {
                    _rY: 0
                },
                du: 350,
                ea: "e29"
            }
        }, {
            n: "ga t q c ha",
            r: [5, 9],
            c: 1,
            t: {
                de: 75,
                sq: "fw"
            },
            an: {
                tr: {
                    _rY: 180
                },
                ea: "e11",
                du: 1500,
                di: "h"
            }
        }, {
            n: "ga t q d ha",
            r: [5, 9],
            c: 1,
            t: {
                de: 75,
                sq: "fw"
            },
            an: {
                tr: {
                    _rY: -180
                },
                ea: "e11",
                du: 1500,
                di: "h"
            }
        }, {
            n: "ga t q e ha",
            r: [5, 9],
            c: 1,
            t: {
                de: 75,
                sq: "fw"
            },
            an: {
                tr: {
                    _rX: -180
                },
                ea: "e11",
                du: 1e3,
                di: "v"
            }
        }, {
            n: "ga t q f ha",
            r: [5, 9],
            c: 1,
            t: {
                de: 75,
                sq: "rv"
            },
            an: {
                tr: {
                    _rX: 180
                },
                ea: "e11",
                du: 1e3,
                di: "v"
            }
        }, {
            n: "E ga t r ha",
            r: [5, 9],
            c: 1,
            t: {
                de: 75,
                sq: "rnd"
            },
            an: {
                tr: {
                    _rY: 180
                },
                ea: "e11",
                du: 1500,
                di: "h"
            }
        }, {
            n: "F ga t r ha",
            r: [5, 9],
            c: 1,
            t: {
                de: 75,
                sq: "rnd"
            },
            an: {
                tr: {
                    _rX: -180
                },
                ea: "e11",
                du: 1500,
                di: "v"
            }
        }, {
            n: "F ga t r ia",
            r: [3, 7],
            c: 1,
            t: {
                de: 150,
                sq: "rnd"
            },
            an: {
                tr: {
                    _rX: -540
                },
                ea: "e11",
                du: 2e3,
                di: "v"
            }
        }, {
            n: "M x ga t q c ha",
            r: [5, 9],
            c: 1,
            t: {
                de: 55,
                sq: "fw"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rY: 180
                },
                ea: "e29",
                du: 1200,
                di: "h"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e28",
                du: 600
            }
        }, {
            n: "M x ga t q d ha",
            r: [5, 9],
            c: 1,
            t: {
                de: 55,
                sq: "rv"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rY: -180
                },
                ea: "e29",
                du: 1200,
                di: "h"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e28",
                du: 600
            }
        }, {
            n: "M x ga t q e ha",
            r: [5, 9],
            c: 1,
            t: {
                de: 55,
                sq: "fw"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rX: -180
                },
                ea: "e11",
                du: 600,
                di: "v"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e28",
                du: 600
            }
        }, {
            n: "M x ga t q f ha",
            r: [5, 9],
            c: 1,
            t: {
                de: 55,
                sq: "rv"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rX: 180
                },
                ea: "e11",
                du: 600,
                di: "v"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e28",
                du: 600
            }
        }, {
            n: "M x E ga t r ha",
            r: [5, 9],
            c: 1,
            t: {
                de: 55,
                sq: "rnd"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rY: 180
                },
                ea: "e29",
                du: 1200,
                di: "h"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e28",
                du: 600
            }
        }, {
            n: "M x F ga t r ha",
            r: [5, 9],
            c: 1,
            t: {
                de: 55,
                sq: "rnd"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rX: -180
                },
                ea: "e29",
                du: 600,
                di: "v"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e28",
                du: 600
            }
        }, {
            n: "ga w q c ha",
            r: 1,
            c: [5, 9],
            t: {
                de: 75,
                sq: "fw"
            },
            an: {
                tr: {
                    _rY: 180
                },
                ea: "e11",
                du: 1500,
                di: "h"
            }
        }, {
            n: "ga w q d ha",
            r: 1,
            c: [5, 9],
            t: {
                de: 75,
                sq: "fw"
            },
            an: {
                tr: {
                    _rY: -180
                },
                ea: "e11",
                du: 1500,
                di: "h"
            }
        }, {
            n: "ga w q e ha",
            r: 1,
            c: [5, 9],
            t: {
                de: 75,
                sq: "fw"
            },
            an: {
                tr: {
                    _rX: -180
                },
                ea: "e11",
                du: 1e3,
                di: "v"
            }
        }, {
            n: "ga w q f ha",
            r: 1,
            c: [5, 9],
            t: {
                de: 75,
                sq: "rv"
            },
            an: {
                tr: {
                    _rX: 180
                },
                ea: "e11",
                du: 1e3,
                di: "v"
            }
        }, {
            n: "E ga w r ha",
            r: 1,
            c: [5, 9],
            t: {
                de: 75,
                sq: "rnd"
            },
            an: {
                tr: {
                    _rY: 180
                },
                ea: "e11",
                du: 1500,
                di: "h"
            }
        }, {
            n: "F ga w r ha",
            r: 1,
            c: [5, 9],
            t: {
                de: 75,
                sq: "rnd"
            },
            an: {
                tr: {
                    _rX: -180
                },
                ea: "e11",
                du: 1500,
                di: "v"
            }
        }, {
            n: "E ga w r ia",
            r: 1,
            c: [4, 9],
            t: {
                de: 150,
                sq: "rnd"
            },
            an: {
                tr: {
                    _rY: 540
                },
                ea: "e11",
                du: 2e3,
                di: "h"
            }
        }, {
            n: "M x ga w q c ha",
            r: 1,
            c: [7, 11],
            t: {
                de: 55,
                sq: "fw"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rY: 180
                },
                ea: "e11",
                du: 600,
                di: "h"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e28",
                du: 600
            }
        }, {
            n: "M x ga w q d ha",
            r: 1,
            c: [7, 11],
            t: {
                de: 55,
                sq: "rv"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rY: -180
                },
                ea: "e11",
                du: 600,
                di: "h"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e28",
                du: 600
            }
        }, {
            n: "M x ga w q e ha",
            r: 1,
            c: [7, 11],
            t: {
                de: 55,
                sq: "fw"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rX: -180
                },
                ea: "e29",
                du: 1200,
                di: "v"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e28",
                du: 600
            }
        }, {
            n: "M x ga w q f ha",
            r: 1,
            c: [7, 11],
            t: {
                de: 75,
                sq: "rv"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rX: 180
                },
                ea: "e29",
                du: 1200,
                di: "v"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e28",
                du: 600
            }
        }, {
            n: "M x E ga w r ha",
            r: 1,
            c: [7, 11],
            t: {
                de: 75,
                sq: "rnd"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rY: 180
                },
                ea: "e29",
                du: 600,
                di: "h"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e28",
                du: 600
            }
        }, {
            n: "M x F ga w r ha",
            r: 1,
            c: [7, 11],
            t: {
                de: 75,
                sq: "rnd"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rX: -180
                },
                ea: "e29",
                du: 1200,
                di: "v"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e28",
                du: 600
            }
        }, {
            n: "ja ka M x ga q c ha",
            r: 1,
            c: [7, 11],
            t: {
                de: 75,
                sq: "fw"
            },
            be: {
                tr: {
                    _s3: .85,
                    _rX: -30
                },
                du: 600,
                ea: "e10"
            },
            an: {
                tr: {
                    _rX: -30,
                    _rY: 180
                },
                ea: "e11",
                du: 1e3,
                di: "h"
            },
            af: {
                tr: {
                    _rX: 0,
                    de: 200
                },
                ea: "e10",
                du: 600
            }
        }, {
            n: "ja ka M x ga q d ha",
            r: 1,
            c: [7, 11],
            t: {
                de: 75,
                sq: "rv"
            },
            be: {
                tr: {
                    _s3: .85,
                    _rX: -30
                },
                du: 600,
                ea: "e10"
            },
            an: {
                tr: {
                    _rX: 30,
                    _rY: -180
                },
                ea: "e11",
                du: 1e3,
                di: "h"
            },
            af: {
                tr: {
                    _rX: 0,
                    de: 200
                },
                ea: "e10",
                du: 600
            }
        }, {
            n: "I la q c ma",
            r: 1,
            c: 1,
            t: {
                de: 75,
                sq: "fw"
            },
            an: {
                tr: {
                    _rY: 90
                },
                ea: "e11",
                du: 1500,
                di: "h"
            }
        }, {
            n: "I la q d ma",
            r: 1,
            c: 1,
            t: {
                de: 75,
                sq: "fw"
            },
            an: {
                tr: {
                    _rY: -90
                },
                ea: "e11",
                du: 1500,
                di: "h"
            }
        }, {
            n: "I la q e ma",
            r: 1,
            c: 1,
            t: {
                de: 75,
                sq: "fw"
            },
            an: {
                tr: {
                    _rX: -90
                },
                ea: "e11",
                du: 1500,
                di: "v"
            }
        }, {
            n: "I la q f ma",
            r: 1,
            c: 1,
            t: {
                de: 75,
                sq: "fw"
            },
            an: {
                tr: {
                    _rX: 90
                },
                ea: "e11",
                du: 1500,
                di: "v"
            }
        }, {
            n: "M x I la q c ma",
            r: 1,
            c: 1,
            t: {
                de: 75,
                sq: "rnd"
            },
            an: {
                tr: {
                    _s3: .8,
                    _r: 7,
                    _rX: 10,
                    _rY: 45
                },
                ea: "e5",
                du: 800,
                di: "h"
            },
            af: {
                tr: {
                    _r: 0,
                    _rX: 0,
                    _rY: 90
                },
                du: 800,
                ea: "e5"
            }
        }, {
            n: "M x I la q d ma",
            r: 1,
            c: 1,
            t: {
                de: 75,
                sq: "rnd"
            },
            an: {
                tr: {
                    _s3: .8,
                    _r: -7,
                    _rX: 10,
                    _rY: -45
                },
                ea: "e5",
                du: 800,
                di: "h"
            },
            af: {
                tr: {
                    _r: 0,
                    _rX: 0,
                    _rY: -90
                },
                du: 800,
                ea: "e5"
            }
        }, {
            n: "M x I na q c ma",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 75,
                sq: "fw"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 450,
                ea: "e14"
            },
            an: {
                tr: {
                    _rY: 90
                },
                ea: "e29",
                du: 1e3,
                di: "h"
            },
            af: {
                du: 350,
                ea: "e29"
            }
        }, {
            n: "M x I na q d ma",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 75,
                sq: "rv"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 450,
                ea: "e14"
            },
            an: {
                tr: {
                    _rY: -90
                },
                ea: "e29",
                du: 1e3,
                di: "h"
            },
            af: {
                du: 350,
                ea: "e29"
            }
        }, {
            n: "M x I na q e ma",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 75,
                sq: "cf"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 450,
                ea: "e14"
            },
            an: {
                tr: {
                    _rX: -90
                },
                ea: "e29",
                du: 1e3,
                di: "v"
            },
            af: {
                du: 350,
                ea: "e29"
            }
        }, {
            n: "M x I na q f ma",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 75,
                sq: "cr"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 450,
                ea: "e14"
            },
            an: {
                tr: {
                    _rX: 90
                },
                ea: "e29",
                du: 1e3,
                di: "v"
            },
            af: {
                du: 350,
                ea: "e29"
            }
        }, {
            n: "M x E I na r ma",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 75,
                sq: "rnd"
            },
            be: {
                tr: {
                    _s3: .75,
                    _rX: -15
                },
                du: 700,
                ea: "e14"
            },
            an: {
                tr: {
                    _rY: 75,
                    _rX: 15
                },
                ea: "e29",
                du: 700,
                di: "h"
            },
            af: {
                tr: {
                    _rY: 90,
                    _rX: 0
                },
                du: 700,
                ea: "e29"
            }
        }, {
            n: "M x F I na r ma",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 75,
                sq: "rnd"
            },
            be: {
                tr: {
                    _s3: .75,
                    _rY: 15
                },
                du: 700,
                ea: "e14"
            },
            an: {
                tr: {
                    _rX: 75,
                    _rY: -15
                },
                ea: "e29",
                du: 700,
                di: "v"
            },
            af: {
                tr: {
                    _rX: 90,
                    _rY: 0
                },
                du: 700,
                ea: "e29"
            }
        }, {
            n: "I t q c ma",
            r: [5, 9],
            c: 1,
            t: {
                de: 75,
                sq: "fw"
            },
            an: {
                tr: {
                    _rY: 90
                },
                ea: "e11",
                du: 1500,
                di: "h"
            }
        }, {
            n: "I t q d ma",
            r: [5, 9],
            c: 1,
            t: {
                de: 75,
                sq: "fw"
            },
            an: {
                tr: {
                    _rY: -90
                },
                ea: "e11",
                du: 1500,
                di: "h"
            }
        }, {
            n: "E I t r ma",
            r: [5, 9],
            c: 1,
            t: {
                de: 75,
                sq: "rnd"
            },
            an: {
                tr: {
                    _rY: 90
                },
                ea: "e11",
                du: 1500,
                di: "h"
            }
        }, {
            n: "M x I t q c ma",
            r: [5, 9],
            c: 1,
            t: {
                de: 75,
                sq: "fw"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rY: 87
                },
                ea: "e29",
                du: 1e3,
                di: "h"
            },
            af: {
                tr: {
                    de: 200,
                    _rY: 90
                },
                ea: "e28",
                du: 600
            }
        }, {
            n: "M x I t q d ma",
            r: [5, 9],
            c: 1,
            t: {
                de: 75,
                sq: "rv"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rY: -90
                },
                ea: "e29",
                du: 1e3,
                di: "h"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e28",
                du: 600
            }
        }, {
            n: "M x I t q e ma",
            r: [5, 9],
            c: 1,
            t: {
                de: 75,
                sq: "fw"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rX: -90
                },
                ea: "e29",
                du: 1e3,
                di: "v"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e28",
                du: 600
            }
        }, {
            n: "M x I t q f ma",
            r: [5, 9],
            c: 1,
            t: {
                de: 75,
                sq: "rv"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rX: 90
                },
                ea: "e29",
                du: 1e3,
                di: "v"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e28",
                du: 600
            }
        }, {
            n: "M x E I t r ma",
            r: [5, 9],
            c: 1,
            t: {
                de: 75,
                sq: "rnd"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rY: 90
                },
                ea: "e29",
                du: 1e3,
                di: "h"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e28",
                du: 600
            }
        }, {
            n: "M x F I t r ma",
            r: [5, 9],
            c: 1,
            t: {
                de: 75,
                sq: "rnd"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rX: -90
                },
                ea: "e29",
                du: 1e3,
                di: "v"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e28",
                du: 600
            }
        }, {
            n: "M x E I ja t q c ma",
            r: [7, 11],
            c: 1,
            t: {
                de: 75,
                sq: "fw"
            },
            an: {
                tr: {
                    _s3: .85,
                    _rY: 45
                },
                ea: "e14",
                du: 1e3,
                di: "h"
            },
            af: {
                tr: {
                    _rY: 90
                },
                ea: "e14",
                du: 1e3
            }
        }, {
            n: "M x E I ja t q d ma",
            r: [7, 11],
            c: 1,
            t: {
                de: 75,
                sq: "rv"
            },
            an: {
                tr: {
                    _s3: .85,
                    _rY: -45
                },
                ea: "e14",
                du: 1e3,
                di: "h"
            },
            af: {
                tr: {
                    _rY: -90
                },
                ea: "e14",
                du: 1e3
            }
        }, {
            n: "I w q e ma",
            r: 1,
            c: [5, 9],
            t: {
                de: 75,
                sq: "fw"
            },
            an: {
                tr: {
                    _rX: -90
                },
                ea: "e11",
                du: 1e3,
                di: "v"
            }
        }, {
            n: "I w q f ma",
            r: 1,
            c: [5, 9],
            t: {
                de: 75,
                sq: "rv"
            },
            an: {
                tr: {
                    _rX: 90
                },
                ea: "e11",
                du: 1e3,
                di: "v"
            }
        }, {
            n: "F I w r ma",
            r: 1,
            c: [5, 9],
            t: {
                de: 75,
                sq: "rnd"
            },
            an: {
                tr: {
                    _rX: -90
                },
                ea: "e11",
                du: 1e3,
                di: "v"
            }
        }, {
            n: "M x I w q e ma",
            r: 1,
            c: [7, 11],
            t: {
                de: 75,
                sq: "fw"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rX: -90
                },
                ea: "e29",
                du: 1e3,
                di: "v"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e28",
                du: 600
            }
        }, {
            n: "M x I w q f ma",
            r: 1,
            c: [7, 11],
            t: {
                de: 75,
                sq: "rv"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rX: 90
                },
                ea: "e29",
                du: 1e3,
                di: "v"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e28",
                du: 600
            }
        }, {
            n: "M x I w q c ma",
            r: 1,
            c: [7, 11],
            t: {
                de: 75,
                sq: "fw"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rY: 90
                },
                ea: "e29",
                du: 1e3,
                di: "h"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e28",
                du: 600
            }
        }, {
            n: "M x I w q d ma",
            r: 1,
            c: [7, 11],
            t: {
                de: 75,
                sq: "rv"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rY: -90
                },
                ea: "e29",
                du: 1e3,
                di: "h"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e28",
                du: 600
            }
        }, {
            n: "M x E I w r ma",
            r: 1,
            c: [7, 11],
            t: {
                de: 75,
                sq: "rnd"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rY: 90
                },
                ea: "e29",
                du: 1e3,
                di: "h"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e28",
                du: 600
            }
        }, {
            n: "M x F I w r ma",
            r: 1,
            c: [7, 11],
            t: {
                de: 75,
                sq: "rnd"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rX: -90
                },
                ea: "e29",
                du: 1e3,
                di: "v"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e28",
                du: 600
            }
        }, {
            n: "M x F I ja w q c ma",
            r: 1,
            c: [7, 11],
            t: {
                de: 75,
                sq: "fw"
            },
            an: {
                tr: {
                    _s3: .85,
                    _rX: 45
                },
                ea: "e14",
                du: 1e3,
                di: "v"
            },
            af: {
                tr: {
                    _rX: 90
                },
                ea: "e14",
                du: 1e3
            }
        }, {
            n: "M x F I ja w q d ma",
            r: 1,
            c: [7, 11],
            t: {
                de: 75,
                sq: "rv"
            },
            an: {
                tr: {
                    _s3: .85,
                    _rX: -45
                },
                ea: "e14",
                du: 1e3,
                di: "v"
            },
            af: {
                tr: {
                    _rX: -90
                },
                ea: "e14",
                du: 1e3
            }
        }, {
            n: "ga la q c oa pa qa",
            r: 1,
            c: 1,
            t: {
                de: 75,
                sq: "fw",
                d: "la"
            },
            an: {
                tr: {
                    _rY: 180
                },
                ea: "e11",
                du: 1500,
                di: "h"
            }
        }, {
            n: "ga la q d oa pa qa",
            r: 1,
            c: 1,
            t: {
                de: 75,
                sq: "fw",
                d: "la"
            },
            an: {
                tr: {
                    _rY: -180
                },
                ea: "e11",
                du: 1500,
                di: "h"
            }
        }, {
            n: "ga la q e oa pa qa",
            r: 1,
            c: 1,
            t: {
                de: 75,
                sq: "fw",
                d: "la"
            },
            an: {
                tr: {
                    _rX: -180
                },
                ea: "e11",
                du: 1500,
                di: "v"
            }
        }, {
            n: "ga la q f oa pa qa",
            r: 1,
            c: 1,
            t: {
                de: 75,
                sq: "fw",
                d: "la"
            },
            an: {
                tr: {
                    _rX: 180
                },
                ea: "e11",
                du: 1500,
                di: "v"
            }
        }, {
            n: "M x ga na q c oa pa qa",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 75,
                sq: "fw",
                d: "la"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 450,
                ea: "e14"
            },
            an: {
                tr: {
                    _rY: 180
                },
                ea: "e29",
                du: 1e3,
                di: "h"
            },
            af: {
                du: 350,
                ea: "e29"
            }
        }, {
            n: "M x ga na q d oa pa qa",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 75,
                sq: "rv",
                d: "la"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 450,
                ea: "e14"
            },
            an: {
                tr: {
                    _rY: -180
                },
                ea: "e29",
                du: 1e3,
                di: "h"
            },
            af: {
                du: 350,
                ea: "e29"
            }
        }, {
            n: "M x ga na q e oa pa qa",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 75,
                sq: "cf",
                d: "la"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 450,
                ea: "e14"
            },
            an: {
                tr: {
                    _rX: -180
                },
                ea: "e29",
                du: 1e3,
                di: "v"
            },
            af: {
                du: 350,
                ea: "e29"
            }
        }, {
            n: "M x ga na q f oa pa qa",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 75,
                sq: "cr",
                d: "la"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 450,
                ea: "e14"
            },
            an: {
                tr: {
                    _rX: 180
                },
                ea: "e29",
                du: 1e3,
                di: "v"
            },
            af: {
                du: 350,
                ea: "e29"
            }
        }, {
            n: "M x E ga na r oa pa qa",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 75,
                sq: "rnd",
                d: "la"
            },
            be: {
                tr: {
                    _s3: .65
                },
                du: 700,
                ea: "e14"
            },
            an: {
                tr: {
                    _rY: 180
                },
                ea: "e29",
                du: 700,
                di: "h"
            },
            af: {
                du: 700,
                ea: "e29"
            }
        }, {
            n: "M x F ga na r oa pa qa",
            r: [2, 4],
            c: [4, 7],
            t: {
                de: 75,
                sq: "rnd",
                d: "la"
            },
            be: {
                tr: {
                    _s3: .65
                },
                du: 700,
                ea: "e14"
            },
            an: {
                tr: {
                    _rX: 180
                },
                ea: "e29",
                du: 700,
                di: "v"
            },
            af: {
                du: 700,
                ea: "e29"
            }
        }, {
            n: "M x ga t q c oa pa qa",
            r: [5, 9],
            c: 1,
            t: {
                de: 65,
                sq: "fw",
                d: "la"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rY: 180
                },
                ea: "e11",
                du: 1200,
                di: "h"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e10",
                du: 400
            }
        }, {
            n: "M x ga t q d oa pa qa",
            r: [5, 9],
            c: 1,
            t: {
                de: 65,
                sq: "rv",
                d: "la"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rY: -180
                },
                ea: "e11",
                du: 1200,
                di: "h"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e10",
                du: 400
            }
        }, {
            n: "M x ga t q e oa pa qa",
            r: [5, 9],
            c: 1,
            t: {
                de: 65,
                sq: "fw",
                d: "la"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rX: -180
                },
                ea: "e29",
                du: 1e3,
                di: "v"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e10",
                du: 400
            }
        }, {
            n: "M x ga t q f oa pa qa",
            r: [5, 9],
            c: 1,
            t: {
                de: 65,
                sq: "rv",
                d: "la"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rX: 180
                },
                ea: "e29",
                du: 1e3,
                di: "v"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e10",
                du: 400
            }
        }, {
            n: "M x E ga t r oa pa qa",
            r: [5, 9],
            c: 1,
            t: {
                de: 65,
                sq: "rnd",
                d: "la"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rY: 180
                },
                ea: "e11",
                du: 1200,
                di: "h"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e10",
                du: 400
            }
        }, {
            n: "M x F ga t r oa pa qa",
            r: [5, 9],
            c: 1,
            t: {
                de: 65,
                sq: "rnd",
                d: "la"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rX: -180
                },
                ea: "e29",
                du: 1e3,
                di: "v"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e10",
                du: 400
            }
        }, {
            n: "M x ga w q e oa pa qa",
            r: 1,
            c: [7, 11],
            t: {
                de: 65,
                sq: "fw",
                d: "la"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rX: -180
                },
                ea: "e11",
                du: 1200,
                di: "v"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e10",
                du: 400
            }
        }, {
            n: "M x ga w q f oa pa qa",
            r: 1,
            c: [7, 11],
            t: {
                de: 65,
                sq: "rv",
                d: "la"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rX: 180
                },
                ea: "e11",
                du: 1200,
                di: "v"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e10",
                du: 400
            }
        }, {
            n: "M x ga w q c oa pa qa",
            r: 1,
            c: [7, 11],
            t: {
                de: 65,
                sq: "fw",
                d: "la"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rY: 180
                },
                ea: "e29",
                du: 1e3,
                di: "h"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e10",
                du: 400
            }
        }, {
            n: "M x ga w q d oa pa qa",
            r: 1,
            c: [7, 11],
            t: {
                de: 65,
                sq: "rv",
                d: "la"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rY: -180
                },
                ea: "e29",
                du: 1e3,
                di: "h"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e10",
                du: 400
            }
        }, {
            n: "M x E ga w r oa pa qa",
            r: 1,
            c: [7, 11],
            t: {
                de: 65,
                sq: "rnd",
                d: "la"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rY: 180
                },
                ea: "e29",
                du: 1e3,
                di: "h"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e10",
                du: 400
            }
        }, {
            n: "M x F ga w r oa pa qa",
            r: 1,
            c: [7, 11],
            t: {
                de: 65,
                sq: "rnd",
                d: "la"
            },
            be: {
                tr: {
                    _s3: .85
                },
                du: 600,
                ea: "e28"
            },
            an: {
                tr: {
                    _rX: -180
                },
                ea: "e11",
                du: 1200,
                di: "v"
            },
            af: {
                tr: {
                    de: 200
                },
                ea: "e10",
                du: 400
            }
        }, {
            n: "ra L x h sa",
            r: 1,
            c: 1,
            t: {
                de: 1,
                sq: "fw",
                d: "la"
            },
            be: {
                tr: {
                    _s3: .65,
                    _rY: -270
                },
                du: 1500,
                ea: "e9"
            },
            an: {
                tr: {
                    _s3: 1,
                    _rY: -540
                },
                ea: "e10",
                du: 1500,
                di: "h"
            }
        }, {
            n: "ta L x h sa",
            r: 1,
            c: 1,
            t: {
                de: 1,
                sq: "fw",
                d: "la"
            },
            be: {
                tr: {
                    _s3: .65,
                    _rX: -270
                },
                du: 1500,
                ea: "e9"
            },
            an: {
                tr: {
                    _s3: 1,
                    _rX: -540
                },
                ea: "e10",
                du: 1500,
                di: "v"
            }
        }, {
            n: "ra L x h na",
            r: [2, 3],
            c: [3, 5],
            t: {
                de: 50,
                sq: "rnd"
            },
            be: {
                tr: {
                    _s3: .75
                },
                du: 350,
                ea: "e9"
            },
            an: {
                tr: {
                    _rY: -45,
                    _rX: 180
                },
                ea: "e11",
                du: 1,
                di: "v"
            },
            af: {
                tr: {
                    _rY: 0
                },
                ea: "e10",
                du: 1200
            }
        }, {
            n: "ta L x h na",
            r: [2, 3],
            c: [3, 5],
            t: {
                de: 50,
                sq: "rnd"
            },
            be: {
                tr: {
                    _s3: .75
                },
                du: 350,
                ea: "e9"
            },
            an: {
                tr: {
                    _rX: -45,
                    _rY: 180
                },
                ea: "e11",
                du: 1,
                di: "h"
            },
            af: {
                tr: {
                    _rX: 0
                },
                ea: "e10",
                du: 1200
            }
        }]
    },
    _lsSwapObj = function(e) {
        for (var r in e) e[e[r]] = r, delete e[r]
    },
    _lsConvTrProp = function(e, r) {
        var d, a, t = {
                af: "after",
                an: "animation",
                be: "before",
                c: "cols",
                d: "depth",
                de: "delay",
                di: "direction",
                du: "duration",
                ea: "easing",
                n: "name",
                r: "rows",
                sq: "sequence",
                t: "tile",
                tp: "type",
                tr: "transition",
                _br: "borderRadius",
                _o: "opacity",
                _r: "rotate",
                _rX: "rotateX",
                _rY: "rotateY",
                _s: "scale",
                _s3: "scale3d",
                _sX: "scaleX",
                _sY: "scaleY",
                _skX: "skewX",
                _skY: "skewY"
            },
            n = {
                b: "bottom",
                bl: "bottomleft",
                br: "bottomright",
                c: "center",
                cf: "col-forward",
                cr: "col-reverse",
                e: "edge",
                f: "fade",
                fw: "forward",
                h: "horizontal",
                l: "left",
                la: "large",
                m: "middle",
                mr: "mirror",
                mx: "mixed",
                n: "none",
                r: "right",
                ri: "radial-in",
                rnd: "random",
                ro: "radial-out",
                rv: "reverse",
                sc: "scale",
                sl: "slide",
                t: "top",
                tl: "topleft",
                tr: "topright",
                v: "vertical",
                e1: "linear",
                e2: "swing",
                e3: "easeInQuad",
                e4: "easeOutQuad",
                e5: "easeInOutQuad",
                e6: "easeInCubic",
                e7: "easeOutCubic",
                e8: "easeInOutCubic",
                e9: "easeInQuart",
                e10: "easeOutQuart",
                e11: "easeInOutQuart",
                e12: "easeInQuint",
                e13: "easeOutQuint",
                e14: "easeInOutQuint",
                e15: "easeInSine",
                e16: "easeOutSine",
                e17: "easeInOutSine",
                e18: "easeInExpo",
                e19: "easeOutExpo",
                e20: "easeInOutExpo",
                e21: "easeInCirc",
                e22: "easeOutCirc",
                e23: "easeInOutCirc",
                e24: "easeInElastic",
                e25: "easeOutElastic",
                e26: "easeInOutElastic",
                e27: "easeInBack",
                e28: "easeOutBack",
                e29: "easeInOutBack",
                e30: "easeInBounce",
                e31: "easeOutBounce",
                e32: "easeInOutBounce"
            },
            s = function(e) {
                for (var r in e) "object" == typeof e[r] && s(e[r]), t[r] && (d = t[r], a = e[r], n[e[r]] && (a = n[e[r]]), e[d] = a, delete e[r])
            };
        return r ? (_lsSwapObj(t), _lsSwapObj(n)) : _lsConvTrNames(e), s(e), e
    },
    _lsConvTrNames = function(e, t) {
        var n, s, u, c = {
                sliding: "a",
                from: "b",
                right: "c",
                left: "d",
                bottom: "e",
                top: "f",
                crossfading: "g",
                fading: "h",
                tiles: "i",
                forward: "j",
                reverse: "k",
                "col-forward": "l",
                "col-reverse": "m",
                "(random)": "n",
                smooth: "o",
                sliging: "p",
                to: "q",
                random: "r",
                directions: "s",
                rows: "t",
                "(forward)": "u",
                "(reverse)": "v",
                columns: "w",
                and: "x",
                "top-left": "y",
                "bottom-right": "z",
                "top-right": "A",
                "bottom-left": "B",
                carousel: "C",
                cols: "D",
                horizontal: "E",
                vertical: "F",
                "carousel-mirror": "G",
                mirror: "H",
                turning: "I",
                tile: "J",
                flying: "K",
                rotating: "L",
                scaling: "M",
                in: "N",
                out: "O",
                "mirror-sliding": "P",
                diagonal: "Q",
                slices: "R",
                "top-scaling": "S",
                center: "T",
                "bottom-scaling": "U",
                "middle-scaling": "V",
                "edge-scaling": "W",
                "left-scaling": "X",
                middle: "Y",
                "right-scaling": "Z",
                "center-scaling": "0",
                pinched: "1",
                at: "2",
                "edges,": "3",
                "center,": "4",
                glitch: "5",
                slide: "6",
                spikes: "7",
                popping: "8",
                elastic: "9",
                mosaic: "aa",
                liquid: "ba",
                edges: "ca",
                tornado: "da",
                fluid: "ea",
                bounce: "fa",
                spinning: "ga",
                "(180°)": "ha",
                "(540°)": "ia",
                drunk: "ja",
                colums: "ka",
                cuboid: "la",
                "(90°)": "ma",
                cuboids: "na",
                "(180°,": "oa",
                large: "pa",
                "depth)": "qa",
                horizontally: "ra",
                cube: "sa",
                vertically: "ta"
            },
            i = charSet2 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split(""),
            q = 0,
            _ = -1,
            f = i.length,
            l = function(e) {
                for (var r in e)
                    if ("object" == typeof e[r] && l(e[r]), "n" === r)
                        if (s = n = "", t) {
                            for (var d in u = e[r].toLowerCase().split(" ")) c[u[d]] ? s += c[u[d]] + " " : (n = i[q] + (-1 < _ ? charSet2[_] : ""), c[u[d]] = n, q === f - 1 ? (q = 0, _++) : q++, s += n + " ");
                            e[r] = s.trim()
                        } else {
                            for (var a in u = e[r].split(" ")) n += c[u[a]] + " ";
                            e[r] = (n.charAt(0).toUpperCase() + n.slice(1)).trim()
                        }
            };
        if (t || _lsSwapObj(c), l(e), t) return c
    };