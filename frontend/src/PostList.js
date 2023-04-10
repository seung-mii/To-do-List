import React from 'react';
import Todo from './Todo';
import { Paper, List, Container, Grid, Button, AppBar, Toolbar, Typography, Checkbox, ListItem } from "@material-ui/core";
import './postList.css';
import './post.css';

class PostList extends React.Component {
  constructor(props) {
    super(props);
  }

  allCheckboxEventHandler = (e) => {
    // console.log(e.target.checked);
    const thisItems = this.props.item;

    thisItems.map((item, idx) => {
      item.done = e.target.checked
    })
    this.setState(this.props.item)
  }

  render() {
    var checkbox = (
      <ListItem style={{backgroundColor: "#F2F2F2"}}>
        <Checkbox
          onChange={this.allCheckboxEventHandler}
        />
        List
      </ListItem>
    )

    return (
      <div>
        {this.props.item.length > 0 && (
            <Paper style={{ margin: 16 }}>
              {checkbox}
              <List>
                {this.props.item.map((item, idx) => (
                  <Todo item={item} key={item.id} delete={this.delete} update={this.update} />
                ))}
              </List>
            </Paper>
        )}
      </div>
    )
  }
}

export default PostList; 

