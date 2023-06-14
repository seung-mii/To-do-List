import React from 'react';
import ProfileItem from './ProfileItem';
import { AppBar, Toolbar, Grid, Button } from '@material-ui/core';
import { call } from '../../service/ApiService';

class Profile extends React.Component {
  constructor(props) { 
    super(props); 
    this.state = { item: [], readOnly: true }; 
  }

  gotoHome = () => {
    window.location.href = "/";
  }

  componentDidMount() {
    call("/auth/user", "GET", null).then((response) =>
      this.setState({item:response.data})
    );
  }

  render() {
    var navigationBar = (
      <AppBar position='static'>
        <Toolbar>
          <Grid container>
            <Grid item>
              <Button color='inherit' onClick={this.gotoHome} >
                Home
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )

    var profileRendering = this.state.item.length > 0 && (
      <ProfileItem item={this.state.item[0]} />
    );

    return (
      <div className='Profile'>
        {navigationBar}
        {profileRendering}
      </div>
    );
  }
}

export default Profile;