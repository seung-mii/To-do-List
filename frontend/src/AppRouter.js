import React from "react";
import "./index.css";
import App from "./App";
import Login from "./Login";
import { BrowerRouter, Routes, Route } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

function Copyright() {
  return (
    <Typography variant="body2" color="textSendary" align="center">
      {"Copyright ©"}
      fsoftwareengineer, {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

class AppRouter extends React.Component {
  render() {
    return (
      <BrowerRouter>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<App />} />
          </Routes>
        </div>
        <div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>
      </BrowerRouter>
    )
  }
}

export default AppRouter;