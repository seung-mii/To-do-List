import React from "react";
import { signin } from "../../service/ApiService";
import { Button, TextField, Grid, Link, Container, Typography } from "@material-ui/core";

class Login extends React.Component {
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
    const email = data.get("email");
    const password = data.get("password");

    // ApiService의 signin 메소드를 사용해 로그인
    signin({ email: email, password: password });
  }

  toggleIsActive = () => {
    this.setState({showPassword: !this.state.showPassword});
  };

  render() {
    const thisPwd = this.state.showPassword;
    
    return (
      <Container component="main" maxWidth="xs" style={{ marginTop: "8%" }}>
        <Grid container spacing={2}>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
        </Grid>
        <form noValidate onSubmit={this.handleSubmit}>
          {" "}
          { /* submit 버튼을 클릭하면 handleSubmit 이 실행됨 */}
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="이메일 주소"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12} style={{ position: "relative" }}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type={thisPwd? "text" : "password"}
                id="password"
                label="패스워드"
                name="password"
                autoComplete="password"
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
                로그인
              </Button>
            </Grid>
            <Link href="/signup" variant="body2">
              <Grid item>
                계정이 없습니까? 여기서 가입하세요.
              </Grid>
            </Link>
          </Grid>
        </form>
      </Container>
    );
  }
}

export default Login;