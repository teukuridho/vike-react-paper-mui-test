import { setImportBuildGetters } from "vike/__internal/loadImportBuild";
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const isGeneratedFile = true;
const pageConfigsSerialized = [
  {
    pageId: "/pages/_error",
    isErrorPage: true,
    routeFilesystem: void 0,
    loadConfigValuesAll: () => import("./entries/pages_error.mjs"),
    configValuesSerialized: {
      ["isClientSideRenderable"]: {
        definedAt: { "isComputed": true },
        valueSerialized: "true"
      },
      ["clientRouting"]: {
        definedAt: { "filePathToShowToUser": "/node_modules/.pnpm/vike-react@0.4.6_react-dom@18.2.0_react@18.2.0_vike@0.4.166_vite@5.2.2/node_modules/vike-react/dist/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: "true"
      }
    },
    configValuesImported: []
  },
  {
    pageId: "/pages/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/", "definedBy": "/pages/index/" },
    loadConfigValuesAll: () => import("./entries/pages_index.mjs"),
    configValuesSerialized: {
      ["isClientSideRenderable"]: {
        definedAt: { "isComputed": true },
        valueSerialized: "true"
      },
      ["clientRouting"]: {
        definedAt: { "filePathToShowToUser": "/node_modules/.pnpm/vike-react@0.4.6_react-dom@18.2.0_react@18.2.0_vike@0.4.166_vite@5.2.2/node_modules/vike-react/dist/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: "true"
      }
    },
    configValuesImported: []
  },
  {
    pageId: "/pages/star-wars/@id",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/star-wars/@id", "definedBy": "/pages/star-wars/@id/" },
    loadConfigValuesAll: () => import("./entries/pages_star-wars_-id.mjs"),
    configValuesSerialized: {
      ["isClientSideRenderable"]: {
        definedAt: { "isComputed": true },
        valueSerialized: "true"
      },
      ["clientRouting"]: {
        definedAt: { "filePathToShowToUser": "/node_modules/.pnpm/vike-react@0.4.6_react-dom@18.2.0_react@18.2.0_vike@0.4.166_vite@5.2.2/node_modules/vike-react/dist/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: "true"
      }
    },
    configValuesImported: []
  },
  {
    pageId: "/pages/star-wars/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/star-wars", "definedBy": "/pages/star-wars/index/" },
    loadConfigValuesAll: () => import("./entries/pages_star-wars_index.mjs"),
    configValuesSerialized: {
      ["isClientSideRenderable"]: {
        definedAt: { "isComputed": true },
        valueSerialized: "true"
      },
      ["clientRouting"]: {
        definedAt: { "filePathToShowToUser": "/node_modules/.pnpm/vike-react@0.4.6_react-dom@18.2.0_react@18.2.0_vike@0.4.166_vite@5.2.2/node_modules/vike-react/dist/+config.js", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: "true"
      }
    },
    configValuesImported: []
  }
];
const pageConfigGlobalSerialized = {
  configValuesImported: []
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesExportNamesEagerIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerIsomorph = { ...pageFilesExportNamesEagerIsomorph1 };
pageFilesExportNamesEager[".page"] = pageFilesExportNamesEagerIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesExportNamesEagerServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerServer = { ...pageFilesExportNamesEagerServer1 };
pageFilesExportNamesEager[".page.server"] = pageFilesExportNamesEagerServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const pageFiles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  isGeneratedFile,
  neverLoaded,
  pageConfigGlobalSerialized,
  pageConfigsSerialized,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
}, Symbol.toStringTag, { value: "Module" }));
{
  const assetsManifest = {
  "_chunk-!~{006}~.js": {
    "file": "assets/static/onPageTransitionStart.C0Wrw6FH.css",
    "src": "_chunk-!~{006}~.js"
  },
  "_chunk-Ca9mLVfT.js": {
    "file": "assets/chunks/chunk-Ca9mLVfT.js",
    "name": "useData",
    "imports": [
      "_chunk-efTI6-Ph.js"
    ]
  },
  "_chunk-efTI6-Ph.js": {
    "file": "assets/chunks/chunk-efTI6-Ph.js",
    "name": "_onPageTransitionStart",
    "css": [
      "assets/static/onPageTransitionStart.C0Wrw6FH.css"
    ],
    "assets": [
      "assets/static/logo.2_7Lo9tV.svg"
    ]
  },
  "assets/logo.svg": {
    "file": "assets/static/logo.2_7Lo9tV.svg",
    "src": "assets/logo.svg"
  },
  "node_modules/.pnpm/vike@0.4.166_vite@5.2.2/node_modules/vike/dist/esm/client/client-routing-runtime/entry.js": {
    "file": "assets/entries/entry-client-routing.D8KcdxRB.js",
    "name": "entries/entry-client-routing",
    "src": "node_modules/.pnpm/vike@0.4.166_vite@5.2.2/node_modules/vike/dist/esm/client/client-routing-runtime/entry.js",
    "isEntry": true,
    "dynamicImports": [
      "virtual:vike:pageConfigValuesAll:client:/pages/_error",
      "virtual:vike:pageConfigValuesAll:client:/pages/index",
      "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/@id",
      "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/index"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/_error": {
    "file": "assets/entries/pages_error.BsUqPDmM.js",
    "name": "entries/pages/_error",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/_error",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-efTI6-Ph.js"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/index": {
    "file": "assets/entries/pages_index.DINocy6a.js",
    "name": "entries/pages/index",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/index",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-efTI6-Ph.js"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/@id": {
    "file": "assets/entries/pages_star-wars_-id.DmA49Fnp.js",
    "name": "entries/pages/star-wars/@id",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/@id",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-efTI6-Ph.js",
      "_chunk-Ca9mLVfT.js"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/index": {
    "file": "assets/entries/pages_star-wars_index.BLFy3r9C.js",
    "name": "entries/pages/star-wars/index",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/star-wars/index",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-efTI6-Ph.js",
      "_chunk-Ca9mLVfT.js"
    ]
  }
};
  const pluginManifest = {
    "version": "0.4.166",
    "usesClientRouter": false,
    "baseServer": "/",
    "baseAssets": "/",
    "includeAssetsImportedByServer": true,
    "redirects": {},
    "trailingSlash": false,
    "disableUrlNormalization": false
  };
  setImportBuildGetters({
    pageFiles: () => pageFiles,
    getAssetsManifest: () => assetsManifest,
    pluginManifest: () => pluginManifest
  });
}
