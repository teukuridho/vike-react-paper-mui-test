import React from "react";
import { Counter } from "./Counter";


import Paper from '@mui/material/Paper';  // import with error
// import { Paper } from "@mui/material"; // import with no error

export default function Page() {
  return (
    <>
      <h1>My Vike app</h1>
      This page is:
      <ul>
        <li>Rendered to HTML.</li>
        <li>
          Interactive. <Counter />
        </li>
        <Paper style={{
          padding: 10
        }}>
          Hello there
        </Paper>
      </ul>
    </>
  );
}
