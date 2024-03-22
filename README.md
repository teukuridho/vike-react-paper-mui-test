
### Reproduction
 - Install mui `pnpm install @mui/material @emotion/react @emotion/styled`
 - Install vite-plugin-cjs-interop `pnpm i vite-plugin-cjs-interop`
 - Set `ssr({ prerender: true })`, and `cjsInterop({ dependencies: [ "@mui/material/Paper", ] })`, in `vite.config.ts`
 - Import paper in +page.tsx `import Paper from '@mui/material/Paper'`
 - Use it like this `<Paper>Test</Paper>`
 - Run `pnpm run build`; gets error

 pages/index/+Page.tsx
```
(node:51236) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
export { default } from './Paper';
SyntaxError: Unexpected token 'export'
```