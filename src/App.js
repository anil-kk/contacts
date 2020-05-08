import React from 'react';
import { connect } from 'react-redux';
import { Container, Header, Grid } from 'semantic-ui-react';

import { loadContactsAsync } from './actions';
import ContactCardList from './components/ContactCardList';

class App extends React.Component {
  componentDidMount() {
    this.props.loadContactsAsync();
  }

  render() {
    return (
      <Container>
        <Grid>
          <Grid.Row></Grid.Row>

          <Grid.Row columns={1}>
            <Grid.Column>
              <Header size='medium'>A fellowship of 1337</Header>

              <ContactCardList contacts={this.props.contacts}/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    contacts: state.contacts,
  };
};

const mapDispatchToProps = {
  loadContactsAsync,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
