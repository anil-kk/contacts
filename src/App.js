import React from 'react';
import { connect } from 'react-redux';

import { loadContactsAsync } from './actions';

class App extends React.Component {
  componentDidMount() {
    this.props.loadContactsAsync();
  }

  render() {
    return <div className='App'> {JSON.stringify(this.props.contacts)}</div>;
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
