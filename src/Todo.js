import React from 'react';
import { ListItem, ListItemText, InputBase, Checkbox } from '@material-ui/core';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: props.item };   // 매개변수 item의 변수/값을 item에 대입
  }
  
  render() {
    const item = this.state.item;
    return (
      <ListItem>
        <Checkbox checked={item.done} />
        <ListItemText>
          <InputBase
            inputProps={{"aria-label":"naked"}}
            type="text"
            id={item.id}        // item.id 값으로 렌더링하란 의미(JPX)
            name={item.id}
            value={item.title}
            multiline={true}
            fullWidth={true}
          />
        </ListItemText>
      </ListItem>
    )
  }
}

export default Todo;