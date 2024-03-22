import { onRenderHtml } from "vike-react/renderer/onRenderHtml";
import { H as HeadDefault, L as LayoutDefault } from "../chunks/chunk-DlTIHVkx.js";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useData } from "vike-react/useData";
import fetch from "cross-fetch";
import "vike-react/usePageContext";
function Page() {
  const movie = useData();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: movie.title }),
    "Release Date: ",
    movie.release_date,
    /* @__PURE__ */ jsx("br", {}),
    "Director: ",
    movie.director,
    /* @__PURE__ */ jsx("br", {}),
    "Producer: ",
    movie.producer
  ] });
}
const import_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page
}, Symbol.toStringTag, { value: "Module" }));
const data = async (pageContext) => {
  const response = await fetch(`https://brillout.github.io/star-wars/api/films/${pageContext.routeParams.id}.json`);
  let movie = await response.json();
  movie = minimize(movie);
  return movie;
};
function minimize(movie) {
  const { id, title: title2, release_date, director, producer } = movie;
  movie = { id, title: title2, release_date, director, producer };
  return movie;
}
const import_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data
}, Symbol.toStringTag, { value: "Module" }));
function title(pageContext) {
  const movie = pageContext.data;
  return movie.title;
}
const import_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  title
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
    importPath: "/pages/star-wars/@id/+Page.tsx",
    isValueFile: true,
    exportValues: import_3
  },
  {
    configName: "data",
    importPath: "/pages/star-wars/@id/+data.ts",
    isValueFile: true,
    exportValues: import_4
  },
  {
    configName: "title",
    importPath: "/pages/star-wars/@id/+title.ts",
    isValueFile: true,
    exportValues: import_5
  }
];
const configValuesSerialized = {
  ["passToClient"]: {
    definedAt: { "files": [{ "filePathToShowToUser": "/node_modules/.pnpm/vike-react@0.4.6_react-dom@18.2.0_react@18.2.0_vike@0.4.166_vite@5.2.2/node_modules/vike-react/dist/+config.js", "fileExportPathToShowToUser": ["default", "passToClient"] }] },
    valueSerialized: "[]"
  }
};
export {
  configValuesImported,
  configValuesSerialized
};
