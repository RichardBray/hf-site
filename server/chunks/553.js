exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 2704:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Allow jsx-runtime to be successfully imported from either React 17 or React 18.
 *
 * Inspired by the approach here: https://github.com/contentlayerdev/contentlayer/blob/main/packages/next-contentlayer/src/hooks/jsx-runtime.cjs
 */
const jsxRuntime = __webpack_require__(6786)

module.exports.c = jsxRuntime


/***/ }),

/***/ 4553:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "R": () => (/* binding */ MDXRemote)
});

// NAMESPACE OBJECT: ./node_modules/@mdx-js/react/index.js
var _mdx_js_react_namespaceObject = {};
__webpack_require__.r(_mdx_js_react_namespaceObject);
__webpack_require__.d(_mdx_js_react_namespaceObject, {
  "MDXContext": () => (MDXContext),
  "MDXProvider": () => (MDXProvider),
  "useMDXComponents": () => (useMDXComponents),
  "withMDXComponents": () => (withMDXComponents)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/next-mdx-remote/dist/jsx-runtime.cjs
var jsx_runtime = __webpack_require__(2704);
;// CONCATENATED MODULE: ./node_modules/@mdx-js/react/lib/index.js
/**
 * @typedef {import('react').ReactNode} ReactNode
 * @typedef {import('mdx/types').MDXComponents} Components
 *
 * @typedef Props
 *   Configuration.
 * @property {Components} [components]
 *   Mapping of names for JSX components to React components.
 * @property {boolean} [disableParentContext=false]
 *   Turn off outer component context.
 * @property {ReactNode} [children]
 *   Children.
 *
 * @callback MergeComponents
 * @param {Components} currentComponents
 *   Current components from the context.
 * @returns {Components}
 *   Merged components.
 */



/**
 * @type {import('react').Context<Components>}
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components and
 *   `MDXProvider` to set context based components instead.
 */
const MDXContext = react_.createContext({})

/**
 * @param {import('react').ComponentType<any>} Component
 * @deprecated
 *   This export is marked as a legacy feature.
 *   That means it’s no longer recommended for use as it might be removed
 *   in a future major release.
 *
 *   Please use `useMDXComponents` to get context based components instead.
 */
function withMDXComponents(Component) {
  return boundMDXComponent

  /**
   * @param {Record<string, unknown> & {components?: Components}} props
   * @returns {JSX.Element}
   */
  function boundMDXComponent(props) {
    const allComponents = useMDXComponents(props.components)
    return react_.createElement(Component, {...props, allComponents})
  }
}

/**
 * Get current components from the MDX Context.
 *
 * @param {Components|MergeComponents} [components]
 *   Additional components to use or a function that takes the current
 *   components and filters/merges/changes them.
 * @returns {Components}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react_.useContext(MDXContext)
  // Memoize to avoid unnecessary top-level context changes
  return react_.useMemo(() => {
    // Custom merge via a function prop
    if (typeof components === 'function') {
      return components(contextComponents)
    }

    return {...contextComponents, ...components}
  }, [contextComponents, components])
}

/** @type {Components} */
const emptyObject = {}

/**
 * Provider for MDX context
 *
 * @param {Props} props
 * @returns {JSX.Element}
 */
function MDXProvider({components, children, disableParentContext}) {
  let allComponents = useMDXComponents(components)

  if (disableParentContext) {
    allComponents = components || emptyObject
  }

  return react_.createElement(
    MDXContext.Provider,
    {value: allComponents},
    children
  )
}

;// CONCATENATED MODULE: ./node_modules/@mdx-js/react/index.js


;// CONCATENATED MODULE: ./node_modules/next-mdx-remote/dist/index.js




if (typeof window !== 'undefined') {
  window.requestIdleCallback =
    window.requestIdleCallback ||
    function (cb) {
      var start = Date.now();
      return setTimeout(function () {
        cb({
          didTimeout: false,
          timeRemaining: function () {
            return Math.max(0, 50 - (Date.now() - start))
          },
        });
      }, 1)
    };

  window.cancelIdleCallback =
    window.cancelIdleCallback ||
    function (id) {
      clearTimeout(id);
    };
}

/**
 * Renders compiled source from next-mdx-remote/serialize.
 */
function MDXRemote({ compiledSource, frontmatter, scope, components = {}, lazy, }) {
    const [isReadyToRender, setIsReadyToRender] = (0,react_.useState)(!lazy || typeof window === 'undefined');
    // if we're on the client side and `lazy` is set to true, we hydrate the
    // mdx content inside requestIdleCallback, allowing the page to get to
    // interactive quicker, but the mdx content to hydrate slower.
    (0,react_.useEffect)(() => {
        if (lazy) {
            const handle = window.requestIdleCallback(() => {
                setIsReadyToRender(true);
            });
            return () => window.cancelIdleCallback(handle);
        }
    }, []);
    const Content = (0,react_.useMemo)(() => {
        // if we're ready to render, we can assemble the component tree and let React do its thing
        // first we set up the scope which has to include the mdx custom
        // create element function as well as any components we're using
        const fullScope = Object.assign({ opts: { ..._mdx_js_react_namespaceObject, ...jsx_runtime/* jsxRuntime */.c } }, { frontmatter }, scope);
        const keys = Object.keys(fullScope);
        const values = Object.values(fullScope);
        // now we eval the source code using a function constructor
        // in order for this to work we need to have React, the mdx createElement,
        // and all our components in scope for the function, which is the case here
        // we pass the names (via keys) in as the function's args, and execute the
        // function with the actual values.
        const hydrateFn = Reflect.construct(Function, keys.concat(`${compiledSource}`));
        return hydrateFn.apply(hydrateFn, values).default;
    }, [scope, compiledSource]);
    if (!isReadyToRender) {
        // If we're not ready to render, return an empty div to preserve SSR'd markup
        return (react_.createElement("div", { dangerouslySetInnerHTML: { __html: '' }, suppressHydrationWarning: true }));
    }
    // wrapping the content with MDXProvider will allow us to customize the standard
    // markdown components (such as "h1" or "a") with the "components" object
    const content = (react_.createElement(MDXProvider, { components: components },
        react_.createElement(Content, null)));
    // If lazy = true, we need to render a wrapping div to preserve the same markup structure that was SSR'd
    return lazy ? react_.createElement("div", null, content) : content;
}




/***/ })

};
;