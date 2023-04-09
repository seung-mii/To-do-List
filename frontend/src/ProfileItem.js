import React from 'react';
import { ListItem, ListItemText, InputBase, Paper, List, Typography, Button } from '@material-ui/core';
import { call } from './service/ApiService';

class ProfileItem extends React.Component {
  constructor(props) { 
    super(props); 
    this.state = { item: props.item, readOnly: true }; 
  }

  update = (item) => {
    call("/auth", "PUT", item).then((response) => 
      this.setState({items:response.data})
    );
  }

  offReadOnlyMode = () => {
    this.setState({ readOnly: false }, () => {
      console.log("ReadOnly? ", this.state.readOnly)
    });
  }

  modify = () => {
    this.setState({readOnly:true})
    this.update(this.state.item)
    alert("성공적으로 수정되었습니다");
    window.location.href = "/profile";
  }
  
  editUsernameEventHandler = (e) => {
    const thisItem = this.state.item;
    thisItem.username = e.target.value;
    this.setState({ item: thisItem });
  }
  editEmailEventHandler = (e) => {
    const thisItem = this.state.item;
    thisItem.email = e.target.value;
    this.setState({ item: thisItem });
  }

  render() {
    const item = this.state.item;

    return (
      <>
        <Paper style={{ margin: 16 }}>
          <List>
            <ListItem>
              <ListItemText>
                <div style={{ display: "flex", marginBottom: "3px" }}>
                  <Typography 
                    variant='h7' 
                    style={{ 
                      width: "120px", 
                      height: "30px",  
                      paddingTop: "6px",
                      fontWeight: "bold"
                    }} > 사용자 이름  : 
                  </Typography>
                  <InputBase
                    inputProps={{ "aria-label": "naked" }}
                    type="text"
                    id={item.id} 
                    name={item.id}
                    value={item.username}
                    multiline={true}
                    fullWidth={true}
                    onClick={this.offReadOnlyMode}
                    onChange={this.editUsernameEventHandler}
                  />
                </div>
                <div style={{ display: "flex", marginBottom: "7px" }}>
                  <Typography 
                    variant='h7' 
                    style={{ 
                      width: "120px", 
                      height: "30px",  
                      paddingTop: "6px",
                      fontWeight: "bold"
                    }} > 이메일 주소   : 
                  </Typography>
                  <InputBase
                    inputProps={{ "aria-label": "naked" }}
                    type="text"
                    id={item.id} 
                    name={item.id}
                    value={item.email}
                    multiline={true}
                    fullWidth={true}
                    onClick={this.offReadOnlyMode}
                    onChange={this.editEmailEventHandler}
                  />
                </div>
              </ListItemText>
            </ListItem>
          </List>
        </Paper>
        <Button
          onClick={this.modify}
          style={{
            backgroundColor: "#3f51b5",
            color: "white",
            fontWeight: "bold",
            float: "right",
            marginRight: "15px"
          }}>
          수정
        </Button>
      </>
    );
  }
}

export default ProfileItem;