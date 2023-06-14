import React from "react";
import { Container, Grid, Button, Typography, TextField, Link } from "@material-ui/core";
import { signup } from '../../service/ApiService';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      showPassword: false
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    
    const data = new FormData(event.target);
    const username = data.get("username");
    const email = data.get("email");
    const password = data.get("password");

    // ApiService의 signin 메소드를 사용해 로그인
    signup({ email: email, username: username, password: password }).then(
      (response) => {
        window.location.href = "/login";
      }
    );
  }

  toggleIsActive = () => {
    this.setState({showPassword: !this.state.showPassword});
  };

  render() {
    const thisPwd = this.state.showPassword;
    
    return (
      <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
        <form noValidate onSubmit={this.handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography component="h1" variant="h5">
                계정 생성
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="username"
                name="username"
                variant="outlined"
                required
                fullWidth
                id="username"
                label="사용자 이름"
                autoFocus
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                autoComplete="email"
                name="email"
                variant="outlined"
                required
                fullWidth
                id="email"
                label="이메일 주소"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} style={{ position: "relative" }}>
              <TextField
                autoComplete="current-password"
                name="password"
                variant="outlined"
                required
                fullWidth
                type={thisPwd? "text" : "password"}
                id="password"
                label="패스워드"
                autoFocus
              />
              {thisPwd ? (
                <span class="material-symbols-outlined"
                  style={{ color: "#3f51b5", position: "absolute", top: "23px", right: "30px", cursor:"pointer" }}
                  onClick={this.toggleIsActive}
                >visibility
                </span>
                ) : (
                <span class="material-symbols-outlined"
                  style={{ color: "#3f51b5", position: "absolute", top: "23px", right: "30px", cursor:"pointer" }}
                  onClick={this.toggleIsActive}
                >visibility_off
                </span>
              )}
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                계정생성
              </Button>
            </Grid>
          </Grid>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                이미 계정이 있습니까? 로그인하세요.
              </Link>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  }
}

export default SignUp;