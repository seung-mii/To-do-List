import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';
import DeleteTodo from './DeleteTodo';
import { Paper, List, Container, Grid, Button, AppBar, Toolbar, Typography, Checkbox, ListItem } from "@material-ui/core";
import './App.css';
import { call, signout } from './service/ApiService';

class App extends React.Component {
  constructor(props) { // 매개변수 props 생성자 
    super(props);      // 매개변수 props 초기화
    this.state = {     // item에 item.id, item.title, item.done 매개변수 이름과 값 할당
      items: [],
      // 로딩 중이라는 상태를 표현할 변수 생성자에 상태 변수를 초기화한다.
      loading: true
    }; 
  }

  add = (item) => {
    call("/todo", "POST", item).then((response) => 
      this.setState({items:response.data})
    );
  }

  delete = (item) => {
    call("/todo", "DELETE", item).then((response) => 
      this.setState({items:response.data})
    );
  }

  update = (item) => {
    call("/todo", "PUT", item).then((response) => 
      this.setState({items:response.data})
    );
  }

  deleteForCompleted = () => {
    const thisItems = this.state.items;
    console.log("Before deleteForCompleted Items : ", this.state.items);
    thisItems.map((e) => {
      if (e.done === true) {
        call("/todo", "DELETE", e).then((response) =>
          this.setState({ items: response.data })
        );
      }
    });
  }

  allCheckboxEventHandler = (e) => {
    // console.log(e.target.checked);
    const thisItems = this.state.items;

    thisItems.map((item, idx) => {
      item.done = !item.done
      this.update(item)
    })
  }

  // componentDidMount 는 페이지(돔) 마운트가 일어나고 렌더링 되기 전에 실행된다.
  componentDidMount() {
    call("/todo", "GET", null).then((response) =>
      this.setState({items:response.data, loading:false})
    );
  }

  gotoProfile = () => {
    window.location.href = "/profile";
  }

  render() {
    var checkbox = (
      <ListItem style={{backgroundColor: "#F2F2F2"}}>
        <Checkbox
          onChange={this.allCheckboxEventHandler}
        />
        목록
      </ListItem>
    )

    // todoItems에 this.state.items.length 가 0보다 크다면 true 이므로 && 뒤에 값을 넘겨준다.
    // todoItem = this.state.items.length > 0 ? (<Paper></Paper>:"";) 이렇게 해도 같은 결과이다. 조건선택문 ? ternary operator
    var todoItems = this.state.items.length > 0 && (
      <Paper style={{ margin: 16 }}>
        {checkbox}
        <List>
          {this.state.items.map((item, idx) => (
            <Todo item={item} key={item.id} delete={this.delete} update={this.update} />
          ))}
        </List>
      </Paper>
    );

    // navigationBar 
    var navigationBar = (
      <AppBar position='static'>
        <Toolbar>
          <Grid justify='space-between' container>
            <Grid item>
              <Typography variant='h6'>TO DO LIST</Typography>
            </Grid>
            <Grid item>
              <Button color='inherit' onClick={this.gotoProfile} >
                Profile
              </Button>
              <Button color='inherit' onClick={signout}>
                Log out
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )

    // loading 중이 아닐 때
    var todoListPage = (
      <div>
        {navigationBar}
        <Container maxWidth="md">
          <AddTodo add={this.add} />
          <DeleteTodo deleteForCompleted={this.deleteForCompleted} />
          <div className='TodoList'>{todoItems}</div>
        </Container>
      </div>
    )

    // loading 중일 때 
    var loadingPage = <h1>로딩중 ...</h1>
    var content = loadingPage;

    if (!this.state.loading) {
      content = todoListPage;
    }

    // 생성된 컴포넌트 JPX를 리턴한다.
    return (
      <div className="App">
        {content}
      </div>
    );
  }
}

export default App;