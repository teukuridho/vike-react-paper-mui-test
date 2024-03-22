import ssr from "vike/plugin";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
// @ts-ignore
import { cjsInterop } from "vite-plugin-cjs-interop";

export default defineConfig({
  plugins: [
      react({}), 
      cjsInterop({
        dependencies: [
          "@mui/material/Paper",
        ]
      }),
      ssr({
        prerender: true
      }),
  ],
  ssr: {

  }
});