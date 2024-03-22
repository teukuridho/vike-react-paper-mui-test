import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { usePageContext } from "vike-react/usePageContext";
const logoUrl = "/assets/static/logo.2_7Lo9tV.svg";
function HeadDefault() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
    /* @__PURE__ */ jsx("meta", { name: "description", content: "Demo showcasing Vike" }),
    /* @__PURE__ */ jsx("link", { rel: "icon", href: logoUrl })
  ] });
}
function Link({ href, children }) {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const isActive = href === "/" ? urlPathname === href : urlPathname.startsWith(href);
  return /* @__PURE__ */ jsx("a", { href, className: isActive ? "is-active" : void 0, children });
}
function LayoutDefault({
  children
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        display: "flex",
        maxWidth: 900,
        margin: "auto"
      },
      children: [
        /* @__PURE__ */ jsxs(Sidebar, { children: [
          /* @__PURE__ */ jsx(Logo, {}),
          /* @__PURE__ */ jsx(Link, { href: "/", children: "Welcome" }),
          /* @__PURE__ */ jsx(Link, { href: "/star-wars", children: "Data Fetching" })
        ] }),
        /* @__PURE__ */ jsx(Content, { children })
      ]
    }
  );
}
function Sidebar({ children }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      id: "sidebar",
      style: {
        padding: 20,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        lineHeight: "1.8em",
        borderRight: "2px solid #eee"
      },
      children
    }
  );
}
function Content({ children }) {
  return /* @__PURE__ */ jsx("div", { id: "page-container", children: /* @__PURE__ */ jsx(
    "div",
    {
      id: "page-content",
      style: {
        padding: 20,
        paddingBottom: 50,
        minHeight: "100vh"
      },
      children
    }
  ) });
}
function Logo() {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        marginTop: 20,
        marginBottom: 10
      },
      children: /* @__PURE__ */ jsx("a", { href: "/", children: /* @__PURE__ */ jsx("img", { src: logoUrl, height: 64, width: 64, alt: "logo" }) })
    }
  );
}
export {
  HeadDefault as H,
  LayoutDefault as L
};
