import React from "react";
import "./index.css";
import App from "./App";
import Login from "./Pages/Profile/Login";
import SignUp from "./Pages/Profile/SignUp";
import Profile from "./Pages/Profile/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<App />} />
          </Routes>
        </div>
        <div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </div>
      </BrowserRouter>
    )
  }
}

export default AppRouter;