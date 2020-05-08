import React from 'react';
import { connect } from 'react-redux';
import { Container, Header, Grid } from 'semantic-ui-react';

import Toolbar from './components/Toolbar';

import { loadContactsAsync } from './actions';
import ContactCardList from './components/ContactCardList';
import ContactList from './components/ContactList';

class App extends React.Component {
  state = { currentPage: 1, itemsPerPage: 6, activeItem: 'grid' };

  componentDidMount() {
    this.props.loadContactsAsync();
  }

  handleInputChange = (e, { value }) => this.setState({ currentPage: value });

  handlePaginationChange = (e, { activePage }) =>
    this.setState({ currentPage: activePage });

  handleMenuItemClick = (e, { name }) => {
    if (name === 'grid') {
      this.setState({ itemsPerPage: 6, activeItem: name });
      return;
    }
    this.setState({ itemsPerPage: 5, activeItem: name });
  };

  render() {
    const { currentPage, itemsPerPage, activeItem } = this.state;
    const { contacts } = this.props;
    const totalItems = contacts.length;
    const totalPages = Math.floor(totalItems / itemsPerPage);

    const startIndex = currentPage * itemsPerPage;
    const contactsInCurrentPage = contacts.slice(
      startIndex,
      startIndex + itemsPerPage
    );

    return (
      <Container>
        <Grid>
          <Grid.Row></Grid.Row>

          <Grid.Row columns={1}>
            <Grid.Column>
              <Grid>
                <Grid.Row>
                  <Container>
                    <Header size='medium'>A fellowship of 1337</Header>
                  </Container>
                </Grid.Row>
                <Grid.Row>
                  <Toolbar
                    activeItem={activeItem}
                    totalPages={totalPages}
                    currentPage={currentPage}
                    handleInputChange={this.handleInputChange}
                    handlePaginationChange={this.handlePaginationChange}
                    handleMenuItemClick={this.handleMenuItemClick}
                  />
                </Grid.Row>
                <Grid.Row>
                  <Container>
                    {activeItem === 'grid' ? (
                      <ContactCardList contacts={contactsInCurrentPage} />
                    ) : (
                      <ContactList contacts={contactsInCurrentPage} />
                    )}
                  </Container>
                </Grid.Row>
              </Grid>
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
