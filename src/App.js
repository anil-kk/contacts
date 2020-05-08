import React from 'react';
import { connect } from 'react-redux';
import { Container, Header, Grid, Pagination } from 'semantic-ui-react';

import { loadContactsAsync } from './actions';
import ContactCardList from './components/ContactCardList';

class App extends React.Component {
  state = { currentPage: 1, itemsPerPage: 6 };

  componentDidMount() {
    this.props.loadContactsAsync();
  }

  handleInputChange = (e, { value }) => this.setState({ currentPage: value });

  handlePaginationChange = (e, { activePage }) => this.setState({ currentPage: activePage });

  render() {
    const { currentPage, itemsPerPage } = this.state;
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
                  <Header size='medium'>A fellowship of 1337</Header>
                </Grid.Row>
                <Grid.Row>
                  <Pagination
                    activePage={currentPage}
                    onPageChange={this.handlePaginationChange}
                    totalPages={totalPages}
                  />
                </Grid.Row>
                <Grid.Row>
                  <ContactCardList contacts={contactsInCurrentPage} />
                </Grid.Row>
                <Grid.Row>
                  <Pagination
                    activePage={currentPage}
                    onPageChange={this.handlePaginationChange}
                    totalPages={totalPages}
                  />
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
