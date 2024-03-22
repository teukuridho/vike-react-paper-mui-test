import Paper from '@mui/material/Paper';  // import with error
// import { Paper } from "@mui/material"; // import with no error

export default function Page() {
  return (
    <>
      <h1>My Vike app</h1>
        <Paper style={{
          padding: 10
        }}>
          Hello there
        </Paper>
    </>
  );
}
