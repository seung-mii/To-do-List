import React from 'react';
import Todo from './Todo';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 0, title: "책 읽기", done: false },
        { id: 1, title: "도서관 가기", done: false },
      ],
    };
  }

  render() { // 자바스크립트가 제공하는 map 함수를 이용해서 배열을 반복해 <Todo /> 컴포넌트를 여러 개 생성
    var todoItems = this.state.items.map((item, idx) => (
      <Todo item={item} key={item.id} />
    ))

    return <div className='App'> {todoItems} </div>;
  }
}

export default App;