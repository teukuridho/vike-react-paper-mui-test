import { onRenderHtml } from "vike-react/renderer/onRenderHtml";
import { H as HeadDefault, L as LayoutDefault } from "../chunks/chunk-DlTIHVkx.js";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { Paper } from "@mui/material";
import "vike-react/usePageContext";
function Counter() {
  const [count, setCount] = useState(0);
  return /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setCount((count2) => count2 + 1), children: [
    "Counter ",
    count
  ] });
}
function Page() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "My Vike app" }),
    "This page is:",
    /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: "Rendered to HTML." }),
      /* @__PURE__ */ jsxs("li", { children: [
        "Interactive. ",
        /* @__PURE__ */ jsx(Counter, {})
      ] }),
      /* @__PURE__ */ jsx(Paper, { style: {
        padding: 10
      }, children: "Hello there" })
    ] })
  ] });
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
    importPath: "/pages/index/+Page.tsx",
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
