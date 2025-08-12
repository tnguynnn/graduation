(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[736], {
    413: (e, t, a) => {
        Promise.resolve().then(a.bind(a, 7938))
    }, 7938: (e, t, a) => {
        "use strict";
        a.r(t), a.d(t, {default: () => g});
        var i = a(5155), s = a(2115), n = a(6046), r = a(4918), o = a(778), l = a(5683), c = a(98), d = a(2423),
            m = a(6889), x = a(7223), h = a(5765), p = a(4085), u = a(5565);

        function g() {
            let e = (0, n.useParams)(), [t, a] = (0, s.useState)(""), [g, f] = (0, s.useState)(!1),
                v = (0, s.useRef)(null), [b, y] = (0, s.useState)(0), [j, N] = (0, s.useState)(!1),
                w = (0, s.useMemo)(() => Array.from({length: 15}).map((e, t) => ({
                    key: t,
                    x: 100 * Math.random(),
                    y: 100 * Math.random(),
                    opacity: .5 * Math.random() + .3,
                    duration: 10 * Math.random() + 15
                })), []), k = (0, s.useMemo)(() => Array.from({length: 30}).map((e, t) => ({
                    key: t,
                    width: 3 * Math.random() + 1,
                    height: 3 * Math.random() + 1,
                    x: 100 * Math.random(),
                    y: 100 * Math.random(),
                    opacity: .5 * Math.random() + .3,
                    boxShadowSize: 10 * Math.random() + 5,
                    boxShadowBlur: 5 * Math.random() + 2,
                    boxShadowOpacity: .3 * Math.random() + .1,
                    duration: 3 * Math.random() + 2,
                    delay: 5 * Math.random()
                })), []);
            (0, s.useEffect)(() => {
                e.name && a(decodeURIComponent(e.name));
                let t = () => {
                    window.requestAnimationFrame(() => {
                        y(window.scrollY)
                    })
                };
                window.addEventListener("scroll", t);
                let i = setTimeout(() => {
                    if (f(!0), v.current) {
                        let e = document.createElement("canvas");
                        e.style.position = "fixed", e.style.inset = "0", e.style.width = "100vw", e.style.height = "100vh", e.style.zIndex = "50", e.style.pointerEvents = "none", v.current.appendChild(e);
                        let t = r.A.create(e, {resize: !0, useWorker: !0});
                        t({
                            particleCount: 100,
                            spread: 160,
                            origin: {y: 0},
                            colors: ["#818cf8", "#c084fc", "#f472b6", "#ffffff"],
                            shapes: ["circle", "square"]
                        }), setTimeout(() => {
                            t({
                                particleCount: 50,
                                angle: 60,
                                spread: 80,
                                origin: {x: 0},
                                colors: ["#818cf8", "#c084fc", "#f472b6", "#ffffff"]
                            })
                        }, 500), setTimeout(() => {
                            t({
                                particleCount: 50,
                                angle: 120,
                                spread: 80,
                                origin: {x: 1},
                                colors: ["#818cf8", "#c084fc", "#f472b6", "#ffffff"]
                            })
                        }, 1e3), setTimeout(() => {
                            e.remove()
                        }, 6e3)
                    }
                }, 500);
                return () => {
                    window.removeEventListener("scroll", t), clearTimeout(i)
                }
            }, [e]);
            let M = {
                hidden: {opacity: 0, y: 20},
                visible: e => ({
                    opacity: 1,
                    y: 0,
                    transition: {delay: 1.5 + .08 * e, duration: .5, ease: [.22, 1, .36, 1]}
                })
            };
            return (0, i.jsxs)("div", {
                className: "min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-violet-950 text-white overflow-hidden",
                children: [(0, i.jsx)("div", {
                    ref: v,
                    className: "absolute inset-0 pointer-events-none"
                }), (0, i.jsxs)("div", {
                    className: "absolute inset-0 overflow-hidden",
                    children: [(0, i.jsx)("div", {
                        className: "fixed inset-0 bg-[url('/background.jpg')] bg-cover bg-center opacity-10 z-0",
                        style: {
                            transform: "scale(1.1) translateY(".concat(.1 * b, "px)"),
                            transition: "transform 0.1s ease-out"
                        }
                    }), (0, i.jsx)("div", {
                        className: "absolute inset-0 z-0",
                        children: w.map(e => (0, i.jsx)(o.P.div, {
                            className: "absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-white/20",
                            initial: {x: "".concat(e.x, "%"), y: "".concat(e.y, "%"), opacity: e.opacity},
                            animate: {
                                y: [null, "".concat(100 * Math.random(), "%")],
                                opacity: [null, .5 * Math.random() + .3]
                            },
                            transition: {duration: e.duration, repeat: Number.POSITIVE_INFINITY, ease: "linear"}
                        }, "particle-".concat(e.key)))
                    }), (0, i.jsx)("div", {
                        className: "absolute inset-0 z-0",
                        children: k.map(e => (0, i.jsx)(o.P.div, {
                            className: "absolute rounded-full",
                            style: {
                                width: "".concat(e.width, "px"),
                                height: "".concat(e.height, "px"),
                                left: "".concat(e.x, "%"),
                                top: "".concat(e.y, "%"),
                                background: "rgba(255, 255, 255, ".concat(e.opacity, ")"),
                                boxShadow: "0 0 ".concat(e.boxShadowSize, "px ").concat(e.boxShadowBlur, "px rgba(255, 255, 255, ").concat(e.boxShadowOpacity, ")")
                            },
                            animate: {opacity: [.1, .8, .1], scale: [1, 1.2, 1]},
                            transition: {
                                duration: e.duration,
                                repeat: Number.POSITIVE_INFINITY,
                                repeatType: "reverse",
                                delay: e.delay
                            }
                        }, "sparkle-".concat(e.key)))
                    }), (0, i.jsx)("div", {className: "absolute inset-0 bg-gradient-to-t from-indigo-950 via-transparent to-indigo-950/80"})]
                }), (0, i.jsx)("header", {
                    className: "relative z-10 pt-6 pb-4 px-4",
                    children: (0, i.jsx)(o.P.div, {
                        initial: {y: -50, opacity: 0},
                        animate: g ? {y: 0, opacity: 1} : {},
                        transition: {duration: .8, ease: [.22, 1, .36, 1]},
                        className: "max-w-7xl mx-auto flex justify-center",
                        children: (0, i.jsxs)("div", {
                            className: "flex items-center space-x-3 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20",
                            children: [(0, i.jsx)(u.default, {
                                src: "./images/logo.png",
                                alt: "logo",
                                width: 28,
                                height: 28,
                                className: "h-7 w-7 object-cover"
                            }), (0, i.jsx)("h2", {
                                className: "text-base font-medium",
                                children: "Học viện Tài chính"
                            })]
                        })
                    })

                }), (0, i.jsx)("main", {
                    className: "relative z-10 px-4 py-8 max-w-4xl mx-auto", children: (0, i.jsx)(l.N, {
                        children: g && (0, i.jsxs)(o.P.div, {
                            initial: {opacity: 0},
                            animate: {opacity: 1},
                            transition: {duration: 1},
                            className: "space-y-12",
                            children: [(0, i.jsxs)(o.P.div, {
                                initial: {y: 30, opacity: 0},
                                animate: {y: 0, opacity: 1},
                                transition: {duration: .8, delay: .3},
                                className: "text-center space-y-4",
                                children: [(0, i.jsxs)("div", {
                                    className: "inline-flex items-center justify-center space-x-2",
                                    children: [(0, i.jsx)("div", {className: "h-px w-8 bg-gradient-to-r from-transparent to-indigo-400"}), (0, i.jsx)("span", {
                                        className: "text-indigo-300 uppercase text-sm tracking-widest font-medium",
                                        children: "2025"
                                    }), (0, i.jsx)("div", {className: "h-px w-8 bg-gradient-to-l from-transparent to-indigo-400"})]
                                }), (0, i.jsx)("h1", {
                                    className: "text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 leading-[1.6] md:leading-[1.6]",
                                    children: "Lễ Tốt Nghiệp"
                                }), (0, i.jsxs)("div", {
                                    className: "flex items-center justify-center",
                                    children: [(0, i.jsx)("div", {className: "h-px w-16 bg-gradient-to-r from-transparent to-purple-400"}), (0, i.jsx)(c.A, {className: "h-5 w-5 mx-3 text-purple-300"}), (0, i.jsx)("div", {className: "h-px w-16 bg-gradient-to-l from-transparent to-purple-400"})]
                                })]
                            }), (0, i.jsxs)(o.P.div, {
                                initial: {y: 30, opacity: 0},
                                animate: {y: 0, opacity: 1},
                                transition: {duration: .8, delay: .6},
                                className: "text-center space-y-6",
                                children: [(0, i.jsx)("p", {
                                    className: "text-lg text-indigo-200",
                                    children: "Kính mời:"
                                }), (0, i.jsx)("div", {
                                    className: "overflow-hidden py-2",
                                    children: (0, i.jsx)("div", {
                                        className: "flex justify-center flex-wrap",
                                        children: t.split("").map((e, t) => (0, i.jsx)(o.P.span, {
                                            custom: t,
                                            variants: M,
                                            initial: "hidden",
                                            animate: "visible",
                                            className: "text-3xl md:text-4xl font-bold inline-block mx-[2px] bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-300 text-transparent bg-clip-text",
                                            children: " " === e ? "\xa0" : e
                                        }, t))
                                    })
                                }), (0, i.jsx)(o.P.div, {
                                    initial: {opacity: 0, y: 20},
                                    animate: {opacity: 1, y: 0},
                                    transition: {duration: .8, delay: 1.15},
                                    className: "max-w-xl mx-auto",
                                    children: (0, i.jsx)("p", {
                                        className: "text-indigo-200 italic text-lg md:text-xl",
                                        children: 'Hôm nay, chặng đường của em khép lại bằng nụ cười chiến thắng. Mời mọi người cùng em đón khoảnh khắc vinh quang!'
                                    })
                                })]
                            }), (0, i.jsx)(o.P.div, {
                                initial: {y: 30, opacity: 0},
                                animate: {y: 0, opacity: 1},
                                transition: {duration: .8, delay: .9},
                                className: "grid grid-cols-1 md:grid-cols-3 gap-6",
                                children: [{
                                    icon: (0, i.jsx)(d.A, {className: "h-6 w-6"}),
                                    title: "Ng\xe0y",
                                    content: "Chủ nhật, ngày 17 tháng 08 năm 2025",
                                    color: "from-indigo-500 to-blue-500"
                                }, {
                                    icon: (0, i.jsx)(m.A, {className: "h-6 w-6"}),
                                    title: "Giờ",
                                    content: "08:30 - khi chúng ta gặp nhau",
                                    color: "from-purple-500 to-indigo-500"
                                }, {
                                    icon: (0, i.jsx)(x.A, {className: "h-6 w-6"}),
                                    title: "Địa điểm",
                                    content: "Học viện Tài Chính, 58 Lê Văn Hiến",
                                    color: "from-pink-500 to-purple-500"
                                }].map((e, t) => (0, i.jsxs)(o.P.div, {
                                    whileHover: {y: -5, scale: 1.02},
                                    transition: {type: "spring", stiffness: 300},
                                    className: "group relative overflow-hidden rounded-2xl backdrop-blur-md bg-white/10 border border-white/20",
                                    children: [(0, i.jsx)("div", {
                                        className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                                        children: (0, i.jsx)("div", {className: "absolute inset-0 bg-gradient-to-br ".concat(e.color, " opacity-20")})
                                    }), (0, i.jsxs)("div", {
                                        className: "relative z-10 p-6 flex flex-col items-center text-center",
                                        children: [(0, i.jsx)("div", {
                                            className: "p-3 rounded-full bg-gradient-to-br ".concat(e.color, " mb-4"),
                                            children: e.icon
                                        }), (0, i.jsx)("h3", {
                                            className: "font-semibold text-xl mb-2",
                                            children: e.title
                                        }), (0, i.jsx)("p", {className: "text-indigo-100", children: e.content})]
                                    }), (0, i.jsx)("div", {className: "h-1 w-full bg-gradient-to-r ".concat(e.color, " absolute bottom-0 left-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left")})]
                                }, t))
                            }), (0, i.jsx)(o.P.div, {
                                initial: {y: 30, opacity: 0},
                                animate: {y: 0, opacity: 1},
                                transition: {duration: .8, delay: 1.2},
                                className: "rounded-2xl overflow-hidden backdrop-blur-md bg-white/5 border border-white/10 cursor-pointer",
                                onClick: () => N(!0),
                                children: (0, i.jsx)("div", {
                                    className: "aspect-video relative",
                                    children: (0, i.jsx)("div", {
                                        className: "absolute inset-0 bg-gradient-to-br from-indigo-900/80 to-purple-900/80 flex items-center justify-center",
                                        children: (0, i.jsxs)("div", {
                                            className: "text-center space-y-4",
                                            children: [(0, i.jsx)("div", {
                                                className: "bg-white/20 p-4 rounded-full inline-block",
                                                children: (0, i.jsx)(x.A, {className: "h-8 w-8 text-pink-300"})
                                            }), (0, i.jsx)("p", {
                                                className: "text-xl font-medium",
                                                children: "Bản đồ Google Maps"
                                            }), (0, i.jsxs)(p.$, {
                                                variant: "outline",
                                                className: "bg-white/10 border-white/20 hover:bg-white/20",
                                                children: [(0, i.jsx)(h.A, {className: "h-4 w-4 mr-2"}), "Xem bản đồ"]
                                            })]
                                        })
                                    })
                                })
                            }), (0, i.jsxs)(o.P.div, {
                                initial: {y: 30, opacity: 0},
                                animate: {y: 0, opacity: 1},
                                transition: {duration: .8, delay: 1.5},
                                className: "text-center space-y-6 max-w-2xl mx-auto",
                                children: [(0, i.jsxs)("p", {
                                    className: "text-lg text-indigo-100",
                                    children: ["Mọi người li\xean hệ em qua số điện thoại:", (0, i.jsxs)("a", {
                                        href: "tel:0971619051",
                                        className: "text-indigo-400 hover:text-indigo-500 hover:underline font-medium",
                                        children: [" ", "097.161.9051"]
                                    })]
                                }), (0, i.jsxs)("div", {
                                    className: "flex items-center justify-center",
                                    children: [(0, i.jsx)("div", {className: "h-px w-16 bg-gradient-to-r from-transparent to-purple-400"}), (0, i.jsx)(c.A, {className: "h-5 w-5 mx-3 text-purple-300"}), (0, i.jsx)("div", {className: "h-px w-16 bg-gradient-to-l from-transparent to-purple-400"})]
                                }), (0, i.jsx)("p", {
                                    className: "text-indigo-200 italic",
                                    children: "Sự hiện diện của mọi người l\xe0 niềm vinh hạnh của em."
                                })]
                            })]
                        })
                    })
                }), j && (0, i.jsx)("div", {
                    className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm",
                    onClick: () => N(!1),
                    children: (0, i.jsxs)(o.P.div, {
                        initial: {opacity: 0, scale: .9},
                        animate: {opacity: 1, scale: 1},
                        exit: {opacity: 0, scale: .9},
                        transition: {duration: .3},
                        className: "bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl overflow-hidden max-w-5xl w-full max-h-[90vh] shadow-2xl",
                        onClick: e => e.stopPropagation(),
                        children: [(0, i.jsxs)("div", {
                            className: "p-4 flex justify-between items-center border-b border-white/10",
                            children: [(0, i.jsx)("h3", {
                                className: "text-xl font-semibold",
                                children: "Địa điểm: Học viện Tài Chính, 58 P. Lê Văn Hiến"
                            }), (0, i.jsx)(p.$, {
                                variant: "ghost",
                                size: "icon",
                                onClick: () => N(!1),
                                className: "text-white hover:bg-white/10",
                                children: (0, i.jsxs)("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    className: "lucide lucide-x",
                                    children: [(0, i.jsx)("path", {d: "M18 6 6 18"}), (0, i.jsx)("path", {d: "m6 6 12 12"})]
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            className: "grid grid-cols-1 md:grid-cols-2 gap-4 p-4 max-h-[calc(90vh-4rem)] overflow-auto",
                            children: [(0, i.jsx)("div", {
                                className: "aspect-square md:aspect-auto rounded-lg overflow-hidden h-full",
                                children: (0, i.jsx)("iframe", {
                                    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3722.933689521569!2d105.7727683!3d21.0753105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3134553056cb074f%3A0xa8186964db39707f!2zNTggUC4gTMOqIFbEg24gSGnhur9uLCDEkMO0bmcgTmfhuqFjLCBC4bqvYyBU4burIExpw6ptLCBIw6AgTuG7mWkgMTAwMDA!5e0!3m2!1svi!2s!4v1754981628661!5m2!1svi!2s",
                                    width: "100%",
                                    height: "100%",
                                    style: {border: 0},
                                    allowFullScreen: !0,
                                    loading: "lazy",
                                    referrerPolicy: "no-referrer-when-downgrade",
                                    className: "rounded-lg"
                                })
                            }), (0, i.jsx)("div", {
                                className: "aspect-square md:aspect-auto rounded-lg overflow-hidden flex items-center justify-center h-[calc(80vh-4rem)] max-w-full",
                                children: (0, i.jsxs)("div", {
                                    className: "relative w-full h-full",
                                    children: [(0, i.jsx)(u.default, {
                                        src: "./images/map_g3.jpg",
                                        alt: "58 Lê Văn Hiến",
                                        fill: !0,
                                        className: "object-cover rounded-lg"
                                    }), (0, i.jsx)("div", {
                                        className: "absolute inset-0 flex items-center justify-center bg-black/30",
                                        children: (0, i.jsxs)("p", {
                                            className: "text-white text-xl font-semibold p-4 text-center",
                                            children: ["", (0, i.jsx)("br", {}), "Học viện Tài chính"]
                                        })
                                    })]
                                })
                            })]
                        })]
                    })
                }), (0, i.jsx)("footer", {
                    className: "relative z-10 py-6 mt-8",
                    children: (0, i.jsxs)("div", {
                        className: "max-w-7xl mx-auto px-4",
                        children: [(0, i.jsx)("div", {className: "h-px w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent mb-6"}), (0, i.jsx)("div", {
                            className: "flex justify-center",
                            children: (0, i.jsxs)("p", {
                                className: "text-indigo-300 text-sm",
                                children: ["\xa9 ", new Date().getFullYear(), " Ngô Tuấn Nguyên"]
                            })
                        })]
                    })
                })]
            })
        }
    }, 4085: (e, t, a) => {
        "use strict";
        a.d(t, {$: () => c});
        var i = a(5155), s = a(2115), n = a(1290), r = a(1027), o = a(9602);
        let l = (0, r.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
            variants: {
                variant: {
                    default: "bg-primary text-primary-foreground hover:bg-primary/90",
                    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    ghost: "hover:bg-accent hover:text-accent-foreground",
                    link: "text-primary underline-offset-4 hover:underline"
                },
                size: {
                    default: "h-10 px-4 py-2",
                    sm: "h-9 rounded-md px-3",
                    lg: "h-11 rounded-md px-8",
                    icon: "h-10 w-10"
                }
            }, defaultVariants: {variant: "default", size: "default"}
        }), c = s.forwardRef((e, t) => {
            let {className: a, variant: s, size: r, asChild: c = !1, ...d} = e, m = c ? n.DX : "button";
            return (0, i.jsx)(m, {className: (0, o.cn)(l({variant: s, size: r, className: a})), ref: t, ...d})
        });
        c.displayName = "Button"
    }, 9602: (e, t, a) => {
        "use strict";
        a.d(t, {cn: () => n});
        var i = a(3463), s = a(9795);

        function n() {
            for (var e = arguments.length, t = Array(e), a = 0; a < e; a++) t[a] = arguments[a];
            return (0, s.QP)((0, i.$)(t))
        }
    }
}, e => {
    var t = t => e(e.s = t);
    e.O(0, [519, 930, 441, 517, 358], () => t(413)), _N_E = e.O()
}]);