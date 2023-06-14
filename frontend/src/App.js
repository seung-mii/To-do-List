import React from 'react';
import AddTodo from './Pages/TodoList/AddTodo';
import DeleteTodo from './Pages/TodoList/DeleteTodo';
import { Container, Grid, Button, AppBar, Toolbar, Typography } from "@material-ui/core";
import { call, signout } from './service/ApiService';
import List from './Pages/TodoList/List';
import Pagination from './Pages/TodoList/Pagination';
import './App.css';

class App extends React.Component {
  constructor(props) { // 매개변수 props 생성자 
    super(props);      // 매개변수 props 초기화
    this.state = {     // item에 item.id, item.title, item.done 매개변수 이름과 값 할당
      items: [],
      // 로딩 중이라는 상태를 표현할 변수 생성자에 상태 변수를 초기화한다.
      loading: true,
      postPerPage: 5, // 페이지당 글 갯수
      currentPage: 1
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

  setCurrentPage = (page) => {
    // console.log('setCurrentPage!' + page)
    this.setState({ currentPage: page })
  }

  currentPostList = (totalPostList) => {
    const { currentPage, postPerPage } = this.state;
    const startIndex = (currentPage - 1) * postPerPage;
    const endIndex = startIndex + postPerPage;
    const slicedList = totalPostList.slice(startIndex, endIndex);
    return slicedList;
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
          {this.state.items.length > 0 &&
            <List
              item={this.currentPostList(this.state.items)} 
            />
          }
          <Pagination
            total={this.state.items.length}
            postPerPage={this.state.postPerPage}
            setCurrentPage={this.setCurrentPage}
          />
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