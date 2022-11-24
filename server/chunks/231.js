exports.id = 231;
exports.ids = [231];
exports.modules = {

/***/ 5223:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2919, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9797, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 4102))

/***/ }),

/***/ 8469:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9446, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3258, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6862, 23))

/***/ }),

/***/ 8386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(8499);
// EXTERNAL MODULE: ./node_modules/@next/font/google/target.css?{"path":"app/layout.tsx","import":"Ubuntu","arguments":[{"weight":"400","subsets":["latin"]}],"variableName":"ubuntu"}
var layout_tsx_import_Ubuntu_arguments_weight_400_subsets_latin_variableName_ubuntu_ = __webpack_require__(7761);
var layout_tsx_import_Ubuntu_arguments_weight_400_subsets_latin_variableName_ubuntu_default = /*#__PURE__*/__webpack_require__.n(layout_tsx_import_Ubuntu_arguments_weight_400_subsets_latin_variableName_ubuntu_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(2890);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(634);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./public/images/haxeflixel-header.png
/* harmony default export */ const haxeflixel_header = ({"src":"/_next/static/media/haxeflixel-header.19d77213.png","height":30,"width":169,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAJklEQVR4nGPsXzz5rSSvbF24v//e379/87OwsDAyMDD8A2IQ/RkAzmIKJsmSsVcAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":1});
;// CONCATENATED MODULE: ./components/Navbar.tsx




const css = {
    width: "169px",
    height: "30px"
};
function Navbar() {
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "navbar navbar-inverse navbar-fixed-top",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "navbar-header",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime.jsxs)("button", {
                            "data-target": ".navbar-collapse",
                            "data-toggle": "collapse",
                            className: "navbar-toggle",
                            type: "button",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "icon-bar"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "icon-bar"
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("span", {
                                    className: "icon-bar"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                            href: "/",
                            className: "navbar-brand",
                            children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                src: haxeflixel_header,
                                style: css,
                                alt: "HaxeFlixel",
                                width: "100",
                                height: "100"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "navbar-collapse collapse",
                    children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                        className: "nav navbar-nav",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("li", {
                                className: "dropdown ",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                        href: "#",
                                        className: "dropdown-toggle",
                                        "data-toggle": "dropdown",
                                        role: "button",
                                        "aria-haspopup": "true",
                                        "aria-expanded": "false",
                                        children: [
                                            "Examples ",
                                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                                className: "caret"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("ul", {
                                        className: "dropdown-menu inverse-dropdown",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                                    href: "/demos",
                                                    children: "Demos"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                                    href: "https://snippets.haxeflixel.com/",
                                                    children: "Snippets"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/showcase",
                                    children: "Showcase"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/blog",
                                    children: "Blog"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime.jsx((link_default()), {
                                    href: "/documentation",
                                    children: "Docs"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "http://api.haxeflixel.com",
                                    children: "API"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                                    href: "https://github.com/HaxeFlixel/flixel/discussions",
                                    children: "Forum"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./components/Footer.tsx


function Footer() {
    return /*#__PURE__*/ jsx_runtime.jsx("footer", {
        className: "footer",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "footer-main",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: " container",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "footer-social",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("iframe", {
                                width: "120px",
                                scrolling: "0",
                                height: "20px",
                                frameBorder: "0",
                                src: "https://ghbtns.com/github-btn.html?user=HaxeFlixel&repo=flixel&type=watch&count=true&size=small"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "https://twitter.com/haxeflixel",
                                className: "twitter-follow-button",
                                "data-show-count": "true",
                                "data-lang": "en",
                                "data-size": "small",
                                children: "Follow @haxeflixel"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                className: "footer-patreon",
                                href: "https://www.patreon.com/haxeflixel",
                                title: "Support us on Patreon",
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: "/images/patreon-logo-small.svg",
                                    alt: "Haxeflixel Patreon",
                                    title: "Patreon",
                                    width: "40",
                                    height: "40"
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "footer-powered-by",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("p", {
                                children: "HaxeFlixel is powered by"
                            }),
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "http://haxe.org",
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    src: "/images/haxe.svg",
                                    alt: "Haxe",
                                    title: "Haxe",
                                    width: "40",
                                    height: "40"
                                })
                            }),
                            "+",
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "http://openfl.org",
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    className: "openfl-footer-logo",
                                    src: "/images/openfl.svg",
                                    alt: "OpenFL",
                                    title: "OpenFL",
                                    width: "40",
                                    height: "40"
                                })
                            }),
                            "+",
                            /*#__PURE__*/ jsx_runtime.jsx("a", {
                                href: "http://flixel.org",
                                children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                    className: "flixel-footer-logo",
                                    src: "/images/flixel.svg",
                                    alt: "Flixel",
                                    title: "Flixel",
                                    width: "40",
                                    height: "40"
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
}

;// CONCATENATED MODULE: ./components/Layout.tsx



function Layout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(Navbar, {}),
            /*#__PURE__*/ jsx_runtime.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime.jsx(Footer, {})
        ]
    });
}

// EXTERNAL MODULE: ./styles/vendor/bootstrap.css
var bootstrap = __webpack_require__(6981);
// EXTERNAL MODULE: ./styles/footer.css
var footer = __webpack_require__(3646);
// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6495);
;// CONCATENATED MODULE: ./app/layout.tsx






function RootLayout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("html", {
        lang: "en",
        className: (layout_tsx_import_Ubuntu_arguments_weight_400_subsets_latin_variableName_ubuntu_default()).className,
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("head", {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("title", {
                        children: "HaxeFlixel.com"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "description",
                        content: "HaxeFlixel is a 2D Game Engine that lets you create cross-platform games easier with free, open source technology!"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("meta", {
                        name: "keywords",
                        content: "gamedev, game development, cross-platform, haxe, flixel"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("link", {
                        rel: "icon",
                        href: "/images/favicon.ico"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("script", {
                        defer: true,
                        src: "https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("script", {
                        defer: true,
                        src: "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.3.7/js/bootstrap.min.js"
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("script", {
                        async: true,
                        src: "https://platform.twitter.com/widgets.js",
                        charSet: "utf-8"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("body", {
                children: /*#__PURE__*/ jsx_runtime.jsx(Layout, {
                    children: children
                })
            })
        ]
    });
}


/***/ }),

/***/ 4102:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/haxeflixel-header.19d77213.png","height":30,"width":169,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAABCAYAAADjAO9DAAAAJklEQVR4nGPsXzz5rSSvbF24v//e379/87OwsDAyMDD8A2IQ/RkAzmIKJsmSsVcAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":1});

/***/ }),

/***/ 3646:
/***/ (() => {



/***/ }),

/***/ 6495:
/***/ (() => {



/***/ }),

/***/ 6981:
/***/ (() => {



/***/ })

};
;