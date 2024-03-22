import { onRenderHtml } from "vike-react/renderer/onRenderHtml";
import { H as HeadDefault, L as LayoutDefault } from "../chunks/chunk-DlTIHVkx.js";
import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { useData } from "vike-react/useData";
import fetch from "cross-fetch";
import "vike-react/usePageContext";
function Page() {
  const movies = useData();
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "Star Wars Movies" }),
    /* @__PURE__ */ jsx("ol", { children: movies.map(({ id, title: title2, release_date }) => /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx("a", { href: `/star-wars/${id}`, children: title2 }),
      " (",
      release_date,
      ")"
    ] }, id)) }),
    /* @__PURE__ */ jsxs("p", { children: [
      "Source: ",
      /* @__PURE__ */ jsx("a", { href: "https://brillout.github.io/star-wars", children: "brillout.github.io/star-wars" }),
      "."
    ] })
  ] });
}
const import_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page
}, Symbol.toStringTag, { value: "Module" }));
const data = async () => {
  const response = await fetch("https://brillout.github.io/star-wars/api/films.json");
  const moviesData = await response.json();
  const movies = minimize(moviesData);
  return movies;
};
function minimize(movies) {
  return movies.map((movie) => {
    const { title: title2, release_date, id } = movie;
    return { title: title2, release_date, id };
  });
}
const import_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data
}, Symbol.toStringTag, { value: "Module" }));
function title(pageContext) {
  const movies = pageContext.data;
  return `${movies.length} Star Wars Movies`;
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
    importPath: "/pages/star-wars/index/+Page.tsx",
    isValueFile: true,
    exportValues: import_3
  },
  {
    configName: "data",
    importPath: "/pages/star-wars/index/+data.ts",
    isValueFile: true,
    exportValues: import_4
  },
  {
    configName: "title",
    importPath: "/pages/star-wars/index/+title.ts",
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
