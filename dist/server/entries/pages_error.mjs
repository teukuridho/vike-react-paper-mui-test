import { onRenderHtml } from "vike-react/renderer/onRenderHtml";
import { H as HeadDefault, L as LayoutDefault } from "../chunks/chunk-DlTIHVkx.js";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { usePageContext } from "vike-react/usePageContext";
function Page() {
  const { is404 } = usePageContext();
  if (is404) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h1", { children: "404 Page Not Found" }),
      /* @__PURE__ */ jsx("p", { children: "This page could not be found." })
    ] });
  } else {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx("h1", { children: "500 Internal Server Error" }),
      /* @__PURE__ */ jsx("p", { children: "Something went wrong." })
    ] });
  }
}
const import_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page
}, Symbol.toStringTag, { value: "Module" }));
const configValuesImported = [
  {
    configName: "onRenderHtml",
    importPath: "vike-react/renderer/onRenderHtml",
    isValueFile: false,
    exportValue: onRenderHtml,
    exportName: "onRenderHtml"
  },
  {
    configName: "Head",
    importPath: "/layouts/HeadDefault.tsx",
    isValueFile: false,
    exportValue: HeadDefault,
    exportName: "default"
  },
  {
    configName: "Layout",
    importPath: "/layouts/LayoutDefault.tsx",
    isValueFile: false,
    exportValue: LayoutDefault,
    exportName: "default"
  },
  {
    configName: "Page",
    importPath: "/pages/_error/+Page.tsx",
    isValueFile: true,
    exportValues: import_3
  }
];
const configValuesSerialized = {
  ["passToClient"]: {
    definedAt: { "files": [{ "filePathToShowToUser": "/node_modules/.pnpm/vike-react@0.4.6_react-dom@18.2.0_react@18.2.0_vike@0.4.166_vite@5.2.2/node_modules/vike-react/dist/+config.js", "fileExportPathToShowToUser": ["default", "passToClient"] }] },
    valueSerialized: "[]"
  },
  ["title"]: {
    definedAt: { "filePathToShowToUser": "/pages/+config.ts", "fileExportPathToShowToUser": ["default", "title"] },
    valueSerialized: '"My Vike App"'
  }
};
export {
  configValuesImported,
  configValuesSerialized
};
