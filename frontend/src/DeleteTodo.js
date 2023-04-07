import React from 'react';
import { Container, IconButton } from "@material-ui/core";
import './App.css';
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";

class DeleteTodo extends React.Component {
  constructor(props) {
    super(props);
    this.delete = props.deleteForCompleted;
  }

  deleteEventHandler = () => {
    this.delete();
  }

  render() {
    return (
      <Container maxWidth="md">
        Delete Completed Item
        <IconButton
          aria-label='Delete Completed Todo'
          onClick={this.deleteEventHandler}
        >
          <DeleteOutlined />
        </IconButton>
      </Container>
    );
  }
}

export default DeleteTodo;